import { useCookies } from "react-cookie";
import config from "./config";

export type SetCookie = (name : string, value : any, options?: any) => void;
export type CookiesType = { [x: string] : any };

export const [cookies, setCookie, removeCookie] = useCookies([config.sessionToken.cookieName, config.user.id.cookieName]);