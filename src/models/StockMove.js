import database from "../database/db";
import Product from "./Product";

const  StockMoves = database.sequelize.define("stock_moves", {
    type: {
        type: database.Sequelize.BOOLEAN,
        allowNull: false,
    },
    productId: {
        type: database.Sequelize.INTEGER,
        allowNull: false,
        references: {
           model: 'products',
           key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
});

StockMoves.belongsTo(Product);

//StockMoves.sync({force: true});

export default StockMoves;