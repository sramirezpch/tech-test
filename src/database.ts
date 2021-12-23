import mongoose from 'mongoose';
let connection;

const fun = async () => {
    try {
        connection = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_password}@cluster0.41dwy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
}

fun();