import mongoose  from "mongoose";
import config from './index.js';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(config.databaseURL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB conected: ${conn.connection.host}`.cyan.underline);
    }catch (error){
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
};

export default connectDB;