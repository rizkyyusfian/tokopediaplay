const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Register user
async function registerUserService(userName, email, password) {
    try {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new User({
            userName: userName,
            email: email,
            password: passwordHash,
        });
        return await newUser.save();
    }
    catch (error) {
        throw new Error(error.message);
    }
}

// Login user
async function loginUserService(email, password) {
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return false; // User not found
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            return user; // Passwords match, return user
        } else {
            return false; // Passwords don't match
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { registerUserService, loginUserService };