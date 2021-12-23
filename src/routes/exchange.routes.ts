import express from 'express';
import {
    createExchangeRate
} from '../controllers/exchange.controller';
const router = express.Router();

router.post('/', createExchangeRate);

export default router;