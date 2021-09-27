import axios from "axios";
import { decrypt, encrypt } from "../NxCryptoService";
import { getUserInfoMethod, LoginApi, LogoutApi } from "../NxPortalAuthService";
export const Login = async ({data = {}, conf, platform}) => {
    try {
        let result = {};
        if(platform == 'portal') {
            result = await LoginApi({data: data, conf: conf});
        } else {

        }
        return result;
    } catch (error) {
        return {Sucess: false, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}

export const Logout = async (platform) => {
    try {
        let result = {}
        if(platform == 'portal') {
            result = await LogoutApi();
        } else {
            // result = await LogoutAppApi();
        }
        return result;
    } catch (error) {
        return {Sucess: false, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}

export const getUserInfo = async (platform) => {
    try {
        let result = {}
        if (platform == 'portal') {
            result = await getUserInfoMethod();
        } else {

        }
        return result;
    } catch (error) {
        return {Sucess: false, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}