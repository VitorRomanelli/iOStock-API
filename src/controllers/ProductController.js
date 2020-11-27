import Product from '../models/Product';

export default {
    async create(req, res) {
        const { name, price } = req.body;

        const product = await Product.create({
            name,
            price
        });

        const { id } = product;

        return res.json({ id });
    },

    async list(req, res) {
        try {
            const products = await Product.findAll();
            return res.status(200).send(JSON.stringify(products, null, 2));
        } catch (error) {
            return res.status(500).send("There was an error!");
        }
    }
}