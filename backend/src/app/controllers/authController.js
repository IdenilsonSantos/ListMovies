const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const User = require('../models/userModel');

const JWT_KEY = process.env.JWT_KEY;
const { ExpiresHour } = require('../config/auth');


module.exports = {
    async create(req, res) {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {

            await User.create({
                email, password
            }).then(user => {
                res.status(201).json({ message: "User created successfully" })
            }).catch(error => {
                res.status(400).json(error.message);
            });

        }
        else {
            res.status(400).json({ message: "User already exists" });
        }

    },

    async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user) {
            const comparePassword = await bcrypt.compare(password, user.password);

            if (comparePassword) {
                const token = await jwt.sign({ id: user._id, email: user.email }, JWT_KEY, {
                    expiresIn: ExpiresHour
                });

                res.status(200).json({ token });
            }
            else {
                res.status(400).json({
                    message: "Password doesn't match"
                });
            }
        }
        else {
            res.status(400).json({
                message: "User not found"
            });
        }

    }

}