const knexConfig = require("../knexfile");
const db = require("knex")(knexConfig);
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { SECRET_KEY } = process.env;


//Register User
const userRegister = async (req, res) => {
    //Retrieve data from request body.
    const { customer_name, email, phone, address, password } = req.body;

    // Validate form inputs
    if (
        !customer_name ||
        !email ||
        !phone ||
        !address ||
        !password
    ) {
        return res.status(400).json({
            message: 'All fields are required.'
        })
    }

    try {
        //validate if user exists in database.
        const users = await db('user')
            .where({ email: email });
        
        if (users.length !== 0) {
            return res.status(400).json({
                message: 'User already exists'
            })
        }

        // Form is valid, save user info to Database?
        const newUserIds = await db('user')
            .insert({
                id: uuid.v4(),
                customer_name: customer_name,
                email: email,
                phone: phone,
                address: address,
                password: bcrypt.hashSync(password, 10) // hash password
            });
        
        // Responds with new user (201 Created)
        const newUserId = newUserIds[0];
        res.status(201).json({
            message: 'User created successfully',
            userId: newUserId
        })

    } catch (error) {
        res.status(500).json({
            message: "Unable to create user",
            error
        })
    }
};

//Login User
const userLogin = async (req, res) => {

    //Check if email and password are provided.
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }

    // Validate user credentials
    const users = await db("user")
        .where({ email: req.body.email });

    if (users.length === 0) {
        return res.status(401).json({
            message: "Invalid Credentials"
        })
    }

    const user = users[0];
    
    // Check if password provided matches password in database
    if (!bcrypt.compareSync(req.body.password, user.password)) {
        // If invalid: Respond with Invalid Credentials (401)
        return res.status(401).json({
            message: "Invalid Credentials"
        })
    }
    // If the user's credentials are valid, generate a JWT and send it in the response
    const token = jwt.sign({ customer_id: user.id }, SECRET_KEY);

    return res.status(200).json({
        message: "User logged in successfully",
        token: token
    })
};


 //See the specific user information of the user that is logged in
const userProfile = (req, res) => {
    // Check if a bearer token is provided in the authorization header
    if (!req.headers.authorization) {
        return res.status(400).json({
            message: "Bearer token required"
        })
    }

    const bearerTokenArray = req.headers.authorization.split(" ");
    if (bearerTokenArray.length !== 2) {
        return res.status(400).json({
            message: "Bearer token required"
        })
    }
    //Take bearer token from array index 1 and store in a variable.
    const token = bearerTokenArray[1];
    // Verify the JWT
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
        if (err) {
            // if not valid -> send an error response back (401)
            return res.status(401).json({
                message: "Invalid token"
            })
        }
        // Look up the user in the database using the customer_id from the JWT payload
        const users = await db("user")
            .where({ id: decoded.customer_id });

        if (users.length === 0) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        //If use exists, remove sensitive information an send the user object in the repsonse
        const user = users[0];
        delete user.password;
        delete user.id;

        return res.json(user);
    });
};



module.exports = {
    userRegister,
    userLogin,
    userProfile
}
