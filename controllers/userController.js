const {registerUserService, loginUserService} = require('../services/userService');

// Register user
async function registerUser(req, res) {
    try {
        const { userName, email, password } = req.body;
        await registerUserService(userName, email, password);
        res.status(201).json("User Successfully Registered");
    } catch (error) {
        res.status(400).json("Failed to register user, Error Message: " + error.message);
    }
}


// Login user
async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        const user = await loginUserService(email, password);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(401).json("Invalid Credentials");
        }
    } catch (error) {
        res.status(400).json("Failed to login user, Error Message: " + error.message);
    }
}

module.exports = { registerUser, loginUser };