import axios from 'axios';
import { responseError, response, request } from './interceptors';

const http = axios.create();

http.interceptors.request.use(request.interceptor);
http.interceptors.response.use(res => res, responseError.httpErrorInterceptor);
http.interceptors.response.use(response.retvalInterceptor);

export default http;
