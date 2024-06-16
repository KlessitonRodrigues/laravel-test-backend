import { Lambdas } from '../../../../@types/lambdas';
import { dbConnect, dbDisconnect } from '../../../../config/mongoDB';
import { createResponse } from '../../../../utils/api/createResponse';
import { errorCodes } from '../../../../utils/constants/codes';
import { hoursToMs } from '../../../../utils/time';
import { UserService } from '../../../services/user.service';

export const handler: Lambdas.APIHandler = async event => {
  try {
    if (!event.body) throw new Error(errorCodes.invalidReqBody);
    const { email, password, rememberMe } = JSON.parse(event.body || '');

    await dbConnect();
    const userService = new UserService();
    const expireIn = rememberMe ? hoursToMs(48) : hoursToMs(1);
    const token = await userService.signIn(email, password, expireIn);

    return createResponse(200, token);
  } catch (err: any) {
    return createResponse(500, err.message);
  } finally {
    await dbDisconnect();
  }
};
