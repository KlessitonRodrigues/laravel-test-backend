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
    await dbConnect();

    const userService = new UserService();
    await userService.decodeToken(token);

    const propertyService = new PropertyService();
    const dbProperties = await propertyService.getProperties();
    const properties = dbProperties.map(toJSObject);

    return createResponse(200, { properties });
  } catch (err: any) {
    console.log(err.message);
    return createResponse(500, err.message);
  }
};
