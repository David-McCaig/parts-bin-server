const knexConfig = require("../knexfile");
const db = require("knex")(knexConfig);
const uuid4 = require("uuid4");
const path = require('path')
const multer = require('multer')
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "parts-bin",
  },
});

const upload = multer({ storage: storage });

//Handler function to retrieve all products from database.
const getAllProduct = async (_req, res) => {
  try {
    const productData = await db("product")
      .orderBy('created_at', 'desc')
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//Handler function to retrieve all products in Components category from data base.
const getComponents = async (_req, res) => {
  try {
    const componentData = await db("product")
      .where({ category: 'Components' })
    res.status(200).json(componentData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//Handler function to retrieve all products in Bikes category from data base.
const getBikes = async (_req, res) => {
  try {
    const componentData = await db("product")
      .where({ category: 'Bikes' })
    res.status(200).json(componentData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//Handler function to add a new product to the database
const addProductItem = async (req, res) => {

  // handle image upload
  upload.single('imageFile')(req, res, async (err) => {
    //if missing required fields send 400 message.

    if (
      !req.body.item_name ||
      !req.body.description ||
      !req.body.category ||
      !req.body.price ||
      !req.body.user_name ||
      !req.body.user_email
    ) {
      return res.status(400).json({
        message:
          "Please make sure to provide customer, item name, description, category, status and quantity fields in your request.",
      });

    }
    console.log(err)
    if (err) {
      res.status(500).json({ error: err })
    }

    //Insert new product into database.
    try {
      await db("product").insert({
        id: uuid4(),
        item_name: req.body.item_name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        image_path: req.file.path,
        user_email: req.body.user_email,
        user_name: req.body.user_name
      });
      return res.status(201).json({ message: "Product created" });

    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  }
  )
};

//handler function to get product by ID
const getProductById = async (req, res) => {
  try {
    const productData = await db("product").where({ id: req.params.id });
    res.status(200).json(productData[0]);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getAllProduct,
  addProductItem,
  getProductById,
  getComponents,
  getBikes,
};