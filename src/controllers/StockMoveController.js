import StockMove from '../models/StockMove';
import Product from '../models/Product';

export default {
    async create(req, res) {
        const { type, productId } = req.body;

        try {
            const stockMove = await StockMove.create({
                type,
                productId
            });
    
            const { id } = stockMove;
    
            return res.status(200).json({ id });   
        } catch (error) {
            return res.status(500).send("There was an error!");
        }
    },

    async list(req, res) {
        try {
            const stockMoves = await StockMove.findAll({include:[Product]});
            return res.status(200).send(JSON.stringify(stockMoves, null, 2));
        } catch (error) {
            return res.status(500).send("There was an error!");
        }
    }
}