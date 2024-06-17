import { Schema, model } from 'mongoose';

import { Models } from '../../@types/models';

export const propertyContractSchema = new Schema<Models.PropertyContract>({
  email: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
  },
  cpf: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const PropertyContractModel = model('propertiesContracts', propertyContractSchema);
