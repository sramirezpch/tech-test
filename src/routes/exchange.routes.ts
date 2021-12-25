import express from 'express';
import {
    getExchangeRates,
} from '../controllers/exchange.controller';
const router = express.Router();

router.get('/', getExchangeRates);

export default router;