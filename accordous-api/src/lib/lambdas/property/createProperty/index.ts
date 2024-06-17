import { Lambdas } from '../../../../@types/lambdas';
import { dbConnect, dbDisconnect } from '../../../../config/mongoDB';
import { createResponse } from '../../../../utils/api/createResponse';
import { toJSObject } from '../../../../utils/mongo/convertObj';
import { PropertyService } from '../../../services/property.service';
import { UserService } from '../../../services/user.service';

export const handler: Lambdas.APIHandler = async event => {
  try {
    const token = event.headers['Authorization'];
    if (!token) throw new Error('missing token');
    if (!event.body) throw new Error('missing property data');

    await dbConnect();
    const userService = new UserService();
    const propertyService = new PropertyService();
    const { id } = await userService.decodeToken(token);
    const property = JSON.parse(event.body || '');

    property.userId = id;
    const newProperty = await propertyService.createProperty(property);

    return createResponse(200, toJSObject(newProperty));
  } catch (err: any) {
    console.log(err.message);
    return createResponse(500, err.message);
  }
};
