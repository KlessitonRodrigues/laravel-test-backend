import * as bodyparser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

import '../config/dotenv';
import { handler as authRefreshToken } from '../lib/lambdas/auth/refreshToken';
import { handler as authRequestCode } from '../lib/lambdas/auth/requestCode';
import { handler as authSignIn } from '../lib/lambdas/auth/signIn';
import { handler as authSignUp } from '../lib/lambdas/auth/signUp';
import { handler as authVerifyCode } from '../lib/lambdas/auth/verifyCode';
import { handler as createProperty } from '../lib/lambdas/property/createProperty';
import { handler as deleteProperty } from '../lib/lambdas/property/deleteProperty';
import { handler as listProperties } from '../lib/lambdas/property/listProperties';
import { handler as userGetUserData } from '../lib/lambdas/user/getUser';
import { createLambdaEvent, debugMiddleware } from '../utils/api/localApi';

const localRoutes = () => {
  const router = express.Router();

  // .../auth
  router.get('/auth/refreshtoken', createLambdaEvent(authRefreshToken));
  router.post('/auth/signin', createLambdaEvent(authSignIn));
  router.post('/auth/signup', createLambdaEvent(authSignUp));
  router.post('/auth/requestCode', createLambdaEvent(authRequestCode));
  router.post('/auth/verifycode', createLambdaEvent(authVerifyCode));

  // .../user
  router.get('/user/', createLambdaEvent(userGetUserData));

  // .../property
  router.get('/property/list', createLambdaEvent(listProperties));
  router.post('/property', createLambdaEvent(createProperty));
  router.delete('/property/:id', createLambdaEvent(deleteProperty));

  return router;
};

const localApi = async () => {
  const app = express();
  const routes = localRoutes();
  const port = 3005;

  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());
  app.use(cors());
  app.use(debugMiddleware);
  app.use(routes);
  app.listen(port, () => console.log('Running at: http://localhost:' + port));
};

localApi();
