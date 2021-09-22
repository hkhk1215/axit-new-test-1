import axios from 'axios';

export const Get = async ({data = {}, url ='', conf}) => {
    try {
        console.log(data)
        const userInfo = await sessionStorage.getItem('userInfo');
        if(!userInfo) {
            throw {message: 'Session Expired, Try Login', tokenState: false}
        }
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
        return {error: false, message: 'Data Sucess!', tokenState: true, result};
    } catch (error) {
        return {error: true, message: error.message, tokenState: error.tokenState ? error.tokenState : true, result: {}}
    }
}

export const Post = async ({data = {}, url ='', conf}) => {
    try {
        const userInfo = await sessionStorage.getItem('userInfo');
        if(!userInfo) {
            throw {message: 'Session Expired, Try Login', tokenState: false}
        }
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
        return {error: false, message: 'Data Sucess!', tokenState: true, result};
    } catch (error) {
        return {error: true, message: error.message, tokenState: error.tokenState ? error.tokenState : true, result: {}}
    }
}

export const Put = async ({data = {}, url ='', conf}) => {
    try {
        const userInfo = await sessionStorage.getItem('userInfo');
        if(!userInfo) {
            throw {message: 'Session Expired, Try Login', tokenState: false}
        }
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
        return {error: false, message: 'Data Sucess!', tokenState: true, result};
    } catch (error) {
        return {error: true, message: error.message, tokenState: error.tokenState ? error.tokenState : true, result: {}}
    }
}

export const Delete = async ({data = {}, url ='', conf}) => {
    try {
        const userInfo = await sessionStorage.getItem('userInfo');
        if(!userInfo) {
            throw {message: 'Session Expired, Try Login', tokenState: false}
        }
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
        return {error: false, message: 'Data Sucess!', tokenState: true, result};
    } catch (error) {
        return {error: true, message: error.message, tokenState: error.tokenState ? error.tokenState : true, result: {}}
    }
}