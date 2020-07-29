'use strict';
const bcrypt = require('bcrypt');
module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('users', [{
                name: "Galih",
                profession: "admin",
                role: "admin",
                email: "galih@gmail.com",
                password: await bcrypt.hash('rahasia123', 10),
                created_at: new Date(),
                updated_at: new Date()

            },
            {
                name: "Gibran",
                profession: "Front End Dev",
                role: "student",
                email: "gibran@gmail.com",
                password: await bcrypt.hash('rahasia123', 10),
                created_at: new Date(),
                updated_at: new Date()

            },
        ]);

    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {});
    }
};