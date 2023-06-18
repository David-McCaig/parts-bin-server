## PartsBin

Checkout the live site here 👉   [Parts Bin live site](https://imaginative-sfogliatella-45400a.netlify.app/)

You can use this guest login to checkout the app. Email: brock@gmail.com  Password: 123

PartsBin is an online marketplace designed for mountain biking enthusiasts. Find new/used bikes and parts, enjoy a responsive UI, secure token-based authentication, and the ability to post ads. Photos are stored with Cloudinary, and a chat app using Socket.IO enables easy communication. State management is handled using React's Context API. 

![Home Page Screenshot](https://res.cloudinary.com/dui1zm17r/image/upload/v1686650944/david-mccaig-portfolio/parts-bin_mi5gz6.png)


## Features
- Bikes and components section
- View and Add a new part or bike for sale with a photo. Images are uploaded to Cloudinary and served in different sizes depending on what page the image is being used on to increase efficiency. 
- Fully responsive design for Mobile-Tablet-Desktop.
- Secure token-based authentication.
- Chat app using Socket.IO enables easy communication

**Future features**
- Ability for users to pay each other through the app.

## Tech Stack

**Client:** 
HTML5,CSS3,SASS,Javascript,React,NodeJS, Ant Design, Tailwind

[![My Skills](https://skillicons.dev/icons?i=js,html,css,sass,react,nodejs,)](https://skillicons.dev)

**Server:**
NodeJS, Express, MySQL, knex, Cloudinary, Socket.IO

[![My Skills](https://skillicons.dev/icons?i=nodejs,express,mysql)](https://skillicons.dev)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. You'll need to email me at davidmccaig1@gmail.com for the Cloudinary .ENV variables.

`DB_USER`
`DB_HOST`
`DB_PASSWORD`
`DB_DATABASE`
`SECRET_KEY`
`CLIENT_URL`
`APP_SERVER_URL`
`CLOUD_NAME `
`API_KEY `
`API_SECRET`

## Run Locally

Clone the project

```bash
  git clone git@github.com:David-McCaig/parts-bin-server.git
```

cd into parts-bin-server

Install dependencies

```bash
  npm install 
```

In server side 
run migration and seed files to set up your database.

```bash
  npx knex migrate:latest 
  npx knex seed:run 
```
Start the server on the server side 

```bash
  npm run dev 
```
Start the server on the client side 

```bash
  npm run start
```
Now the app should be live! 
# parts-bin-server

## API Documentation

#### Get user's profile
```
  GET /user/profile
```

| Requirements |            
| :----| 
| Auth |

#### Register user
```
  POST /user/register
```

| Requirements |            
| :----| 
| Auth |


#### Login user
```
  POST /user/login
```

| Requirements |            
| :----| 
| Auth |


#### Get all products

```
  GET /product
```

#### Get components

```
  GET /product/components
```

#### Get Bikes

```
  GET /product/bikes
```

#### Get product by id

```
  GET /product/:id
```

#### Post product to sell

```
  POST /product/upload
```

#### Save messages from private messages between users.

```
  POST /chat
```


#### Get messages from a message room.

```
  GET /chat/:room
```
