import moment from 'moment';
import rp from 'request-promise';

import Exchange from '../models/Exchange';

export const getExchangeRates = async (req: any, res: any) => {
    try {
        const rates = await Exchange.find();
        console.log(rates);
        res.json(rates);
    } catch (error) {
        console.log(error);
    }
}