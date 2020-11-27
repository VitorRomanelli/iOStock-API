import database from "../database/db";

const User = database.sequelize.define("users", {
    username: {
        type: database.Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: database.Sequelize.STRING,
        allowNull: false,
    }
});

//User.sync({force: true});

export default User;