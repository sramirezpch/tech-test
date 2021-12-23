import express from 'express';
import cors from 'cors';
import env from 'dotenv';
env.config();

import './database';
import ExchangeRouter from './routes/exchange.routes';

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Tech test!");
});

app.use('/trm', ExchangeRouter);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});