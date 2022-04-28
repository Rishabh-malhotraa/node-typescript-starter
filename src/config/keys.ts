import dotenv from 'dotenv';
dotenv.config();

export const PORT = parseInt(process.env.PORT || '5000', 10);

export const PROD = process.env.PROD === 'true';
