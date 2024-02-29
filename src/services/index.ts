import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-stroage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage('auth', accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage('auth');
  // console.log(authToken);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage('auth');
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};


