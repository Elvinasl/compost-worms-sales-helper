const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        app: {
            name: 'compost-worms-sales-helper'
        },
        db: {
            database: "compost-worms",
            user: "express-app",
            password: "password",
            options: {
                host: 'localhost',
                dialect: 'postgres',
                pool: {
                    max: 100,
                    min: 0,
                    idle: 10000
                }
            }
        }
    }
}

module.exports = config[env];