import express from 'express';
import logger from './logger';
import cors from 'cors';
import rp from 'request-promise';

import './database';

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.post('/trm', async (req, res) => {
    const { source, target } = req.body;
    try {
        const options = {
            method: 'GET',
            uri: "https://transferwise.com/gb/currency-converter/api/historic?source=" + source + "&target=" + target + "&period=30",
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        }
        const result = await rp(options);
        res.json(result);
    } catch (error) {
        logger.info(error);
    }
})
app.listen(port, () => {
    logger.log({ level: 'info', message: `Server started at port ${port}` })
});