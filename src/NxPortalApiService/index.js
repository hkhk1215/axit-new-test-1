import axios from 'axios';
import { decrypt, encrypt } from "../NxCryptoService";
export const GetMethod = async ({data = {}, url ='', conf}) => {
    try {
        const userInfos = await sessionStorage.getItem('userInfo');
        if(!userInfos) {
            throw {message: 'Session Expired, Try Login', tokenState: true}
        }
        let decode = await decrypt(userInfos);
        const userInfo = JSON.parse(decode.result);
        const response = await axios({
            url: conf + url,
            headers : {
                "Content-Type": "application/json",
                'Authorization' : `${userInfo.accessToken}`
            },
            method: 'GET',
            params : data,
        });
        let responseData = {};
        if (response.data.isSuccess  == true) {
            responseData = JSON.parse(response.data.data);
        }
        const result = {... response.data, data: responseData};
        return {Sucess: true, message: 'Data Sucess!', tokenState: false, result};
        // return {Sucess: false, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    } catch (error) {
        return {Sucess: false, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}

export const PostMethod = async ({data = {}, url ='', conf}) => {
    try {
        const userInfos = await sessionStorage.getItem('userInfo');
        if(!userInfos) {
            throw {message: 'Session Expired, Try Login', tokenState: true}
        }
        let decode = await decrypt(userInfos);
        const userInfo = JSON.parse(decode.result);
        const response = await axios({
            url: conf + url,
            headers : {
                "Content-Type": "application/json",
                'Authorization' : `${userInfo.accessToken}`
            },
            method: 'POST',
            data : data,
        });
        let responseData = {};
        if (response.data.isSuccess  == true) {
            responseData = JSON.parse(response.data.data);
        }
        const result = {... response.data, data: responseData};
        return {Sucess: true, message: 'Data Sucess!', tokenState: false, result};
    } catch (error) {
        return {Sucess: false, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}

export const PutMethod = async ({data = {}, url ='', conf}) => {
    try {
        const userInfos = await sessionStorage.getItem('userInfo');
        if(!userInfos) {
            throw {message: 'Session Expired, Try Login', tokenState: true}
        }
        let decode = await decrypt(userInfos);
        const userInfo = JSON.parse(decode.result);
        const response = await axios({
            url: conf + url,
            headers : {
                "Content-Type": "application/json",
                'Authorization' : `${userInfo.accessToken}`
            },
            method: 'PUT',
            data : data,
        });
        let responseData = {};
        if (response.data.isSuccess  == true) {
            responseData = JSON.parse(response.data.data);
        }
        const result = {... response.data, data: responseData};
        return {Sucess: true, message: 'Data Sucess!', tokenState: false, result};
    } catch (error) {
        return {Sucess: false, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}

export const DeleteMethod = async ({data = {}, url ='', conf}) => {
    try {
        const userInfos = await sessionStorage.getItem('userInfo');
        if(!userInfos) {
            throw {message: 'Session Expired, Try Login', tokenState: true}
        }
        let decode = await decrypt(userInfos);
        const userInfo = JSON.parse(decode.result);
        const response = await axios({
            url: conf + url,
            headers : {
                "Content-Type": "application/json",
                'Authorization' : `${userInfo.accessToken}`
            },
            method: 'DELETE',
            data : data,
        });
        let responseData = {};
        if (response.data.isSuccess  == true) {
            responseData = JSON.parse(response.data.data);
        }
        const result = {... response.data, data: responseData};
        return {Sucess: true, message: 'Data Sucess!', tokenState: false, result};
    } catch (error) {
        return {Sucess: false, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}