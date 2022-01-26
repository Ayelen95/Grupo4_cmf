import dotenv from 'dotenv';

dotenv.config();

const config={
    nodeEnv: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 5000,
    databaseURL: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    payPal: process.env.PAYPAL_CLIENT_ID,
    api:{
        prefix: '/api',
    },
};

export default config; 
