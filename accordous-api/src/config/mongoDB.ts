import mongoose from 'mongoose';

import { errorCodes } from '../utils/constants/codes';
import { env } from './dotenv';

export const dbConnect = async () => {
  if (env.MONGODB) await mongoose.connect(env.MONGODB);
  else throw new Error(errorCodes.invalidDataseConnection);
};

export const dbDisconnect = async () => {
  if (env.MONGODB) await mongoose.disconnect();
};

process.on('exit', dbDisconnect);
