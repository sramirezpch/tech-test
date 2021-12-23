import moment from 'moment';
import mongoose from 'mongoose';

const ExchangeSchema = new mongoose.Schema({
    source: {
        type: String,
        required: [true, 'Source is required']
    },
    target: {
        type: String,
        required: [true, 'Target is required']
    },
    date: {
        type: Date,
        required: [true, 'Date is required'],
        default: () => moment().utc(true).toISOString()
    }
})

export default mongoose.model('Exchange', ExchangeSchema);