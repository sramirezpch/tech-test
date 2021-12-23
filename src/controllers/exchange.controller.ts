import moment from 'moment';
import rp from 'request-promise';

import Exchange from '../models/Exchange';
import logger from '../logger';

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
        const today = moment().utc(true).toISOString();

        const exchangeSaved = new Exchange({ source, target, today });
        await exchangeSaved.save();
        res.json(exchangeSaved);
    } catch (error) {
        logger.error(error);
    }
}