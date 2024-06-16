import { Lambdas } from '../../../../@types/lambdas';
import { dbConnect, dbDisconnect } from '../../../../config/mongoDB';
import { createResponse } from '../../../../utils/api/createResponse';
import { toJSObject } from '../../../../utils/mongo/convertObj';
import { UserService } from '../../../services/user.service';

export const handler: Lambdas.APIHandler = async event => {
  try {
    const token = event.headers['Authorization'];
    await dbConnect();
    const userService = new UserService();
    const { id } = await userService.decodeToken(token);

    const user = await userService.getUser(id);
    const userData = {
      user: toJSObject(user),
    };

    return createResponse(200, toJSObject(userData));
  } catch (err: any) {
    return createResponse(500, err.message);
  } finally {
    await dbDisconnect();
  }
};
