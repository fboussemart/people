const express = require("express");
const router = require('./router');
//const router = require('./routerDB');

const cors = require('cors');
const morgan = require('morgan');
const app = express();

const port = process.env.PORT || 8000;

app.use(morgan('combined'))
    .use(cors())
    .use('/img', express.static('data/img'))
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    .use(router)
    .use((req, res) => {
        res.status(400);
        res.json({
            error: "Bad request"
        });
    })
    .listen(port, () => console.log('Server app listening on port ' + port));
