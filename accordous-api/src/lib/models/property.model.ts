import { Schema, model } from 'mongoose';

import { Models } from '../../@types/models';

export const propertySchema = new Schema<Models.Property>({
  userId: {
    type: String,
    required: true,
  },
  contractId: {
    type: String,
  },
  number: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  neighborhood: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  complement: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  archived: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const PropertyModel = model('Properties', propertySchema);
