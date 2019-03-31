const Promise = window.Promise;

// const COMMON_STATUS = [0, 401, 403, 405];

/**
 * 请求拦截器
 */
export const request = {
  interceptor (res) {
    return res;
  }
};

/**
 * 结果拦截器
 */
export const response = {

  retvalInterceptor (res) {
    const { data, status } = res;

    return { data, status };
  }
};

export const responseError = {

  httpErrorInterceptor (error) {
    return Promise.reject(error);
  }

};
