const knexConfig = require("../knexfile");
const db = require("knex")(knexConfig);
var axios = require('axios');
const uuid4 = require("uuid4");

const saveMessage = async (req, res) => {
  //Retrieve data from request body.
  const { user_name, message, room, email, product_id, public_id } = req.body;
  // Validate form inputs
  if (
    !user_name ||
    !message ||
    !room ||
    !email ||
    !product_id ||
    !public_id
  ) {
    return res.status(400).json({
      message: 'All fields are required.'
    })
  }

  try {
    // Form is valid, save user info to Database?
    await db('chat')
      .insert({
        id: uuid4(),
        message: message,
        product_id: product_id,
        user_name: user_name,
        public_id: public_id,
        room: room,
        email: email,
      });

    // Responds with new user (201 Created)

    res.status(201).json({
      message: 'Message created successfully',
    })

  } catch (error) {
    res.status(500).json({
      message: "Unable to create message",
      error
    })
  }
};

const getChatByRoom = async (req, res) => {
  try {
    const chatData = await db("chat").where({ room: req.params.room })
    .orderBy('created_at', 'asc')
    res.status(200).json(chatData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getFirstMessagesByProductId = async (req, res) => {
  try {
    const productId = req.params.product_id;

    // Retrieve all rooms associated with the product ID
    const rooms = await db("chat")
      .select("room")
      .where({ product_id: productId })
      .groupBy("room");

    const messages = [];
    // Loop through each room and retrieve the first message
    for (const room of rooms) {
      const message = await db("chat")
        .where({ product_id: productId, room: room.room })
        .orderBy("created_at", "asc")
        .first();
      messages.push(message);
    }

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getFirstBuyMessageByEmail = async (req, res) => {
  try {
    const publicId = req.params.publicId;

    // Retrieve all rooms associated with the product ID
    const rooms = await db("chat")
      .select("room")
      .where({ 'chat.public_id': publicId })
      .groupBy("room");

    const messages = [];
    // Loop through each room and retrieve the first message
    for (const room of rooms) {

      const message = await db("chat")
        .where({ 'chat.public_id': publicId, room: room.room })
        .join("product", { "chat.product_id": "product.id" })
        .select(
          "item_name",
          "image_path",
          "message",
          "email",
          "user_email",
          "chat.user_name",
          "room",
          "product_id",
          "chat.created_at"
        )
        .orderBy("chat.created_at", "asc")
        .first();
        //conditional if product owner matches message email then don't push to messages array.
        if (message.email !== message.user_email) {
          messages.push(message);
        }  
    }
    delete messages[0]?.email;
    delete messages[0]?.user_email;
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


const getFirstSellMessageByEmail = async (req, res) => {
  try {
    const publicId = req.params.publicId;

    // Retrieve all product IDs associated with the email
    const products = await db("product")
      .select("chat.room")
      .where({ 'product.public_id': publicId })
      .join("chat", "product.id", "=", "chat.product_id")
      .orderBy("chat.created_at", "asc");

    const messages = [];
    const visitedRooms = new Set(); // Track visited rooms

    // Loop through each chat room and retrieve the first message of each new room
    for (const chat of products) {
      if (!visitedRooms.has(chat.room)) { // Check if room is already visited
        const message = await db("chat")
          .where({ room: chat.room })
          .join("product", "chat.product_id", "=", "product.id")
          .select(
            "item_name",
            "image_path",
            "message",
            "chat.user_name",
            "room",
            "product_id",
            "chat.created_at"
          )
          .first();
        messages.push(message);
        visitedRooms.add(chat.room); // Mark room as visited
      }
    }

    // Filter out any messages with null value
    const filteredMessages = messages.filter((message) => message != null);
    res.status(200).json(filteredMessages);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  saveMessage,
  getChatByRoom,
  getFirstMessagesByProductId,
  getFirstSellMessageByEmail,
  getFirstBuyMessageByEmail
}