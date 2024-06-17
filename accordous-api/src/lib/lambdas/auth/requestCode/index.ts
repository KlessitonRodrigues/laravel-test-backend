import { Lambdas } from '../../../../@types/lambdas';
import { dbConnect, dbDisconnect } from '../../../../config/mongoDB';
import { createResponse } from '../../../../utils/api/createResponse';
import { errorCodes } from '../../../../utils/constants/codes';
import { toJSObject } from '../../../../utils/mongo/convertObj';
import { UserService } from '../../../services/user.service';

export const handler: Lambdas.APIHandler = async event => {
  try {
    if (!event.body) throw new Error(errorCodes.invalidReqBody);
    const { email } = JSON.parse(event.body || '');
    await dbConnect();
    const userService = new UserService();
    const user = await userService.requestCode(email);

    return createResponse(200, toJSObject(user));
  } catch (err: any) {
    return createResponse(500, err.message);
  }
};
