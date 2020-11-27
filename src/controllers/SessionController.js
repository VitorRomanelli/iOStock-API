import "dotenv/config";

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

export default {
    async store(req, res) {
        const { username, password } = req.body;
        
        const user = await User.findOne({ where: { username } });

        if(!user) {
            return res.status(404).send("User not Found");
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
    
        if(!isPasswordCorrect) {
            return res.status(401).send("Wrong password");
        }

        return res.json({
            token: jwt.sign({ userId: user.id }, process.env.APP_SECRET, {
                expiresIn: "7d"
            })
        });
    }
}