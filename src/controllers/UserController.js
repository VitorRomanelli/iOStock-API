import User from '../models/User';
import bcrypt from "bcryptjs";

export default {
    async create(req, res) {
        const { username, password } = req.body;

        await User.findOne({ where: { username } }).then(async user => {
            if (user) {
                return res.status(400).send("User already registered!");
            } else {
                if (password) {
                    newPassword = await bcrypt.hash(password, 8).then(async password => {
                        const user = await User.create({
                            username,
                            password
                        });

                        const { id } = user;

                        return res.json({ id });
                    });
                }
            }
        });
    }
}