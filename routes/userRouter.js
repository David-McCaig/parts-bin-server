require("dotenv").config();

const express = require("express");
const router = express.Router();


const userController = require("../controllers/userController");

// router.get("/", customerController.getAllCustomers);
router.post("/register", userController.userRegister);

router.post("/login", userController.userLogin)

router.get("/profile", userController.userProfile)

// router
// .route("/:id")
// .get(customerController.getCustomerById)

module.exports = router;