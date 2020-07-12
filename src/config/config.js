module.exports = {
    development: {
        port: 3000,
        host: 'localhost',
        database: {
            host: 'localhost',
            port: 27017,
            name: 'jwt-auth'
        },
        secret: '1C3C7E1694F1E9DAD939399E87E5FFB5DF06B2327CA31B409CB3'
    },
    production: {
        host: process.env.EV_HOST,
        port: process.env.EV_PORT,
        database: {
            host: process.env.BD_HOST,
            port: process.env.BD_PORT,
            name: process.env.BD_NAME
        },
        secret: process.env.JWT_SECRET
    }
}