require("dotenv").config();
const express = require("express");
const router = express.Router();
const path = require('path')


const chatController = require("../controllers/chatController");

router.post("/", chatController.saveMessage);

router.get('/:room', chatController.getChatByRoom);

router.get('/product/:product_id', chatController.getFirstMessagesByProductId);

router.get('/buy/:publicId' , chatController.getFirstBuyMessageByPublicId);

router.get('/sell/:publicId' , chatController.getFirstSellMessageByPublicId)

// router.get('/test/:email', chatController.getAllInventory)

module.exports = router;