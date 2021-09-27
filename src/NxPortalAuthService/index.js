import axios from "axios";
import { decrypt, encrypt } from "../NxCryptoService";
export const LoginApi = async ({data = {}, conf}) => {
    try {
        const response = await axios({
            url: conf + 'PAM/Login',
            headers : {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            method: 'POST',
            data : data,
        });
        if (response.status == 200 && (response.data.isSuccess == true)) {
            let result = JSON.parse(response.data.data);
            if (result && result.accessToken) {
                let hash = await encrypt(JSON.stringify(result));
                if (hash.Sucess == false) {
                    throw {message: hash.message, tokenState: true}
                }
                // sessionStorage.setItem('userInfo', JSON.stringify(result)) // need to remove the data;
                sessionStorage.setItem('userInfo', hash.result)
            } else {
                throw {message: 'Something wrong', tokenState: true}
            }
        }
        let responseData = {};
        if (response.data.isSuccess  == true) {
            responseData = JSON.parse(response.data.data);
        } else {
            throw {message: response.data.message, tokenState: true}
        }
        delete responseData.accessToken;
        const result = {... response.data, data: responseData};
        return {Sucess: true, message: 'Data Sucess!', tokenState: false, result}
    } catch (error) {
        return {Sucess: false, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}

export const LogoutApi = async () => {
    try {
        sessionStorage.clear('userInfo');
        return {Sucess: true, message: 'Logout Sucess!', tokenState: true, result: {}}
    } catch (error) {
        return {Sucess: false, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}

export const getUserInfoMethod = async () => {
    try {
        let data = await sessionStorage.getItem('userInfo');
        if(!data) {
            throw {message: 'Session Expired, Try Login', tokenState: true}
        }
        let decode = await decrypt(data);
        let resp = JSON.parse(decode.result)
        delete resp.accessToken;
        return {Sucess: true, message: 'Data Sucess!', tokenState: false, result: resp};
    } catch (error) {
        return {Sucess: false, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}