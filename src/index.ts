import express from 'express';
import cors from 'cors';
import env from 'dotenv';
import { CronJob } from 'cron';
import moment from 'moment';
import rp from 'request-promise';

env.config();

import './database';
import ExchangeRouter from './routes/exchange.routes';
import Exchange from './models/Exchange';

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Tech test!");
});

app.use('/trm', ExchangeRouter);

const job = new CronJob('*/1 * * * *', async () => {
    const source = 'usd';
    const target = 'pen';

    try {
        const options = {
            method: 'GET',
            uri: `https://freecurrencyapi.net/api/v2/latest?apikey=ab2d9390-637f-11ec-889e-ab7f3ad8e4ff&base_currency=${source.toUpperCase()}`,
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        }
        const { data } = await rp(options);
        const rate = Object.entries(data).find(entry => entry[0] === target.toUpperCase())[1];
        const today = moment().utc(true).toISOString();

        const exchangeSaved = new Exchange({ source, target, rate, today });
        await exchangeSaved.save();
        console.log(exchangeSaved);
    } catch (error) {
        console.log(error);
    }
}, null, true, 'America/Lima');
job.start();

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});