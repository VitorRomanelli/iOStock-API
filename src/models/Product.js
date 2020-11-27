import database from "../database/db";

const Product = database.sequelize.define("products", {
    name: {
        type: database.Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: database.Sequelize.INTEGER,
        allowNull: false,
    }
});

//Esta linha é necessaria para a criação da tabela de usuarios.
//Na primeira execução do código ela deve ser descomentada, e após isso,
//é preciso comenta-la novamente para garantir o bom funcionamento do código!

//Product.sync({force: true});

export default Product;