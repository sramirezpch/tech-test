import express from 'express';
import {
    createExchangeRate,
    getExchangeRates,
    deleteExchangeRates
} from '../controllers/exchange.controller';
const router = express.Router();

router.post('/', createExchangeRate);
router.get('/', getExchangeRates);

export default router;