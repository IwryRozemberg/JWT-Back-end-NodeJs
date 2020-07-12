const
    express = require('express'),
    cors = require('cors');

const
    database = require('./database/database'),
    { internalServer, notFound } = require('./middleware/errorHandler'),
    routes = require('./routes'),
    environment = process.env.ENV || 'development';

const
    app = express(),
    { port, host } = require('./config/config')[environment];

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(internalServer);
app.use(notFound);

database.connect(err => {
    if (!err) {
        app.listen(port, host, () => {
            console.log(`WEB API: Ouvindo ao endereço http://${host}:${port}`);
        });
    } else {
        console.log(err);
    }
});

module.exports = app;