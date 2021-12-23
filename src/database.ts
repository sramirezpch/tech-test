import mongoose from 'mongoose';
import logger from './logger';

let connection;

const fun = async () => {
    try {
        connection = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_password}@cluster0.41dwy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
        logger.info('Database connected');
    } catch (error) {
        logger.error(error);
    }
}

fun();