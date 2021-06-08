"use strict";

module.exports = {
    up: async(queryInterface) => {
        await queryInterface.bulkInsert(
            "user", [
                { fname: "fname", lname: 'lname', email: 'admin@gmail.com', password: 'admin' },
            ], {}
        );
    },

    down: (queryInterface, Sequelize) =>
        queryInterface.bulkDelete("user", null, {})
};