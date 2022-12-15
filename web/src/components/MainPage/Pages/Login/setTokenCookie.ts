import { AxiosResponse } from "axios";
import { useCookies } from "react-cookie";

import config from "../../../../config";

interface SetTokenCookieRequest {
    response : AxiosResponse<any, any>;
};

export const setTokenCookie = function (
    { response } : SetTokenCookieRequest
) {
    const token = response.headers[config.sessionToken.headerName];
    const [cookies, setCookie, removeCookie] = useCookies([config.sessionToken.cookieName]);
    const expirationDate = new Date(Date.now() + config.sessionToken.duration);
    setCookie(config.sessionToken.cookieName, token, {
        path : config.path.main,
        expires : expirationDate
    });
};