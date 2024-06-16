import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  MONGODB: process.env.MONGODB || '',
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || '',
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '',
  AWS_REGION: process.env.AWS_DEFAULT_REGION || '',
  SECRET_KEY: process.env.SECRET_KEY || '',
  TOKEN_KEY: process.env.TOKEN_KEY || '',
};
