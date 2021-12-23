import moment from 'moment';
import rp from 'request-promise';

import Exchange from '../models/Exchange';

export const createExchangeRate = async (req: any, res: any) => {
    const { source, target } = req.body;
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
        res.json(exchangeSaved);
    } catch (error) {
        console.log(error);
    }
};

export const getExchangeRates = async (req: any, res: any) => {
    try {
        const rates = await Exchange.find();
        console.log(rates);
        res.json(rates);
    } catch (error) {
        console.log(error);
    }
}