require('dotenv').config();
const axios = require('axios');
const { CLIENT_URL, APP_SERVER_URL } = process.env
//set port to value specified by .ENV if it exists otherwise set to 8080
const PORT = process.env.PORT || 8000;
const { Server } = require('socket.io');

//Import user and product router
const userRouter = require('./routes/userRouter.js');
const productRouter = require('./routes/productRouter.js');
const chatRouter = require('./routes/chatRouter');

//Import Express
const express = require('express');
const app = express();

//Import cors. Apply to app object.
const cors = require('cors');
app.use(cors({
  origin: 'https://646ef33dc833840008f90d54--imaginative-sfogliatella-45400a.netlify.app'
}));

//Set public folder as static folder for serving files.
app.use(express.static('public'));
//Middleware for parsing json data.
app.use(express.json());

//Set up user,chat and product routes
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/chat', chatRouter);

http = require('http');
const server = http.createServer(app)

function leaveRoom(userID, chatRoomUsers) {
  return chatRoomUsers.filter((user) => user.id != userID);
}

const io = new Server(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ['GET', 'POST'],
  },
});

let chatRoom = ''; // E.g. javascript, node,...
let allUsers = []; // All users in current chat room

io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);

  // Add a user to a room
  socket.on('join_room', (data) => {
    const { username, room } = data; // Data sent from client when join_room event emitted
    console.log('this is the ' + room)
    socket.join(room); // Join the user to a socket room
    chatRoom = room;
    allUsers.push({ id: socket.id, username, room });
    chatRoomUsers = allUsers.filter((user) => user.room === room);
    socket.to(room).emit('chatroom_users', chatRoomUsers);
    socket.emit('chatroom_users', chatRoomUsers);

    axios
      .get(`${APP_SERVER_URL}/chat/${room}`)
      .then((res) => {
        let last100Messages = JSON.stringify(res.data)
        socket.emit('last_100_messages', last100Messages);
      })
      .catch((err) => console.log(err));
  });

  socket.on('send_message', (data) => {
    const { room } = data;
    io.in(room).emit('receive_message', data); // Send to all users in room, including sender
  });

  socket.on('leave_room', (data) => {
    const { username, room } = data;
    socket.leave(room);
    // Remove user from memory
    allUsers = leaveRoom(socket.id, allUsers);
    socket.to(room).emit('chatroom_users', allUsers);
    console.log(`${username} has left the chat`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected from the chat');
    const user = allUsers.find((user) => user.id == socket.id);
    if (user?.username) {
      allUsers = leaveRoom(socket.id, allUsers);
      socket.to(chatRoom).emit('chatroom_users', allUsers);
      socket.to(chatRoom).emit('receive_message', {
        message: `${user.username} has disconnected from the chat.`,
      });
    }
  });
});

app.get('/', (_req, res) => {
    res.send("Welcome to my API");
  });

//start server and listens on port specified in .env
server.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});

