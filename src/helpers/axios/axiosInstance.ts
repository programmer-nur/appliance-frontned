import { getNewAccessToken } from "@/services";
import {
  IGenericErrorMessage,
  IGenericErrorResponse,
  ResponseSuccessData,
} from "@/types";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-stroage";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage('auth');
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject: ResponseSuccessData = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async function (error) {
    const config = error?.config;
    if (error?.response?.status === 403 && !config?.sent) {
      config.sent = true;
      const response = await getNewAccessToken();
      const accessToken = response?.data?.accessToken;
      if (accessToken) {
        config.headers.Authorization = accessToken;
      }
      setToLocalStorage('auth', accessToken);
      return instance(config);
    } else {
      const responseObject: IGenericErrorResponse = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something want to wrong",
        errorMessages: error?.response?.data?.errorMessage,
      };

      return responseObject;
      // return Promise.reject(error);
    }
  }
);

export { instance };
