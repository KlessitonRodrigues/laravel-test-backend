import { Models } from '../../@types/models';
import { toObjectId } from '../../utils/mongo/convertObj';
import { PropertyModel } from '../models/property.model';

export class PropertyService {
  async getProperties() {
    const properties = await PropertyModel.find({ archived: false });
    return properties;
  }

  async getProperty(propertyId: string) {
    const property = await PropertyModel.findOne({ _id: propertyId });
    return property;
  }

  async createProperty(property: Models.Property) {
    const newProperty = new PropertyModel(property);
    return await newProperty.save();
  }

  async archiveProperty(propertyId: string) {
    const deletedProperty = await PropertyModel.findByIdAndUpdate(
      { _id: toObjectId(propertyId) },
      { archived: true },
    );
    return deletedProperty;
  }

  async unarchiveProperty(propertyId: string) {
    const deletedProperty = await PropertyModel.findByIdAndUpdate(
      { _id: toObjectId(propertyId) },
      { archived: false },
    );
    return deletedProperty;
  }
}
