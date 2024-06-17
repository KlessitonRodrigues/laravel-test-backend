import axios from 'axios';

import { notify } from '../notify';
import { getToken } from '../token';

// const baseURL = 'http://localhost:3005';
const baseURL = 'https://2so6wtdcja.execute-api.us-east-1.amazonaws.com/prod/';

export const apiClient = axios.create({
  baseURL,
  headers: {
    authorization: getToken(),
  },
});

export const apiRoutes = {
  authSignIn: '/auth/signin/',
  authSignUp: '/auth/signup/',
  authRefreshToken: '/auth/refreshtoken/',
  authRequestCode: '/auth/requestcode/',
  authVerifyCode: '/auth/verifycode/',
  user: '/user/',
  property: '/property/',
  properties: '/property/list',
  propertyContract: '/property/contract/',
};

apiClient.interceptors.response.use(
  res => res,
  error => {
    notify.error(error.response?.data);
    return Promise.reject(error.response?.data);
  },
);
