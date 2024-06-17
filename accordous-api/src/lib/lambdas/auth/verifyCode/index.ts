import { Lambdas } from '../../../../@types/lambdas';
import { dbConnect, dbDisconnect } from '../../../../config/mongoDB';
import { createResponse } from '../../../../utils/api/createResponse';
import { errorCodes } from '../../../../utils/constants/codes';
import { UserService } from '../../../services/user.service';

export const handler: Lambdas.APIHandler = async event => {
  try {
    if (!event.body) throw new Error(errorCodes.invalidReqBody);
    const { email, code } = JSON.parse(event.body || '');
    await dbConnect();
    const userService = new UserService();
    const token = await userService.verifyCode(email, code);

    return createResponse(200, token);
  } catch (err: any) {
    return createResponse(500, err.message);
  }
};
