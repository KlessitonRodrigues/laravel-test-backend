import { Schema, model } from 'mongoose';

import { Models } from '../../@types/models';

export const userSchema = new Schema<Models.User>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verifyCode: {
    code: String,
    expiresIn: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const UserModel = model('Users', userSchema);
