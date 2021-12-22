import mongoose from 'mongoose';
import logger from './logger';

let connection;

const fun = async () => {
    try {
        connection = await mongoose.connect('mongodb+srv://admin:admin@cluster0.41dwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        logger.info('Database connected');
    } catch (error) {
        logger.error(error);
    }
}

fun();