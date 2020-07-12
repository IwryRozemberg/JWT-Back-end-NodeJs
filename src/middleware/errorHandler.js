const enviroment = process.env.END || 'development';

const internalServer = (err, req, res, next) => {
    if (enviroment === 'production') {
        return res.status(500).end();
    }
    return res.status(500).json({ error: err.message });
};


const notFound = (req, res, next) => {
    return res.status(400).end();
}

module.exports = { internalServer, notFound };