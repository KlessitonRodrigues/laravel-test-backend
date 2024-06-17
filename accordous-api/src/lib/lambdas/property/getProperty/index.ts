import { Lambdas } from '../../../../@types/lambdas';
import { dbConnect, dbDisconnect } from '../../../../config/mongoDB';
import { createResponse } from '../../../../utils/api/createResponse';
import { PropertyService } from '../../../services/property.service';
import { UserService } from '../../../services/user.service';

export const handler: Lambdas.APIHandler = async event => {
  try {
    const { headers, pathParameters } = event;
    const token = headers['Authorization'];
    if (!token) throw new Error('missing token');
    if (!(pathParameters && pathParameters['id'])) throw new Error('property id');

    await dbConnect();
    const userService = new UserService();
    const propertyService = new PropertyService();

    const propertyId = pathParameters['id'];
    await userService.decodeToken(token);
    const property = await propertyService.getProperty(propertyId);

    return createResponse(200, { property });
  } catch (err: any) {
    console.log(err.message);
    return createResponse(500, err.message);
  }
};
