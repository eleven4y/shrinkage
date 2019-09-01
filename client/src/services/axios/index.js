import axios from 'axios';

import * as handlers from './handlers';

const options = {
  timeout: 3000,
};

const instance = axios.create(options);

instance.interceptors.request.use(
  handlers.successRequest,
  handlers.errorRequest,
);

instance.interceptors.response.use(
  handlers.successResponse,
  handlers.errorResponce,
);

export default instance;