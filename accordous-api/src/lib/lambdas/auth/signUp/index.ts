import { Lambdas } from '../../../../@types/lambdas';
import { dbConnect, dbDisconnect } from '../../../../config/mongoDB';
import { createResponse } from '../../../../utils/api/createResponse';
import { errorCodes } from '../../../../utils/constants/codes';
import { toJSObject } from '../../../../utils/mongo/convertObj';
import { UserService } from '../../../services/user.service';

export const handler: Lambdas.APIHandler = async event => {
  try {
    if (!event.body) throw new Error(errorCodes.invalidReqBody);
    const user = JSON.parse(event.body || '');
    await dbConnect();

    const userService = new UserService();
    const newUser = await userService.signUp(user);
    const code = await userService.requestCode(newUser.email);

    return createResponse(200, toJSObject({ user: toJSObject(newUser), code: code }));
  } catch (err: any) {
    return createResponse(500, err.message);
  }
};
