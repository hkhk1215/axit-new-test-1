import axios from 'axios';
export const Get = async ({data = {}, url ='', conf}) => {
    try {
        const token = await localStorage.getItem('token');
        if(!token) {
            throw {message: 'Session Expired, Try Login'}
        }
        const response = await axios({
            url: conf + url,
            headers : {
                "Content-Type": "application/json",
                'authorization' : `Bearer ${token}`
            },
            method: 'GET',
            params : data,
        });
        return {error: false, message: 'Data Sucess!', result: response.data}
    } catch (error) {
        return {error: true, message: error.message, result: {}}
    }
}


export const Post = async ({data = {}, url ='', conf}) => {
    try {
        const token = await localStorage.getItem('token');
        if(!token) {
            throw {message: 'Session Expired, Try Login'}
        }
        const response = await axios({
            url: conf + url,
            headers : {
                "Content-Type": "application/json",
                'authorization' : `Bearer ${token}`
            },
            method: 'POST',
            data : data,
        });
        sessionStorage.setItem('data',JSON.stringify(data));
        return {error: false, message: 'Data Sucess!', result: response.data}
    } catch (error) {
        return {error: true, message: error.message, result: {}}
    }
}


export const Put = async ({data = {}, url ='', conf}) => {
    try {
        const token = await localStorage.getItem('token');
        if(!token) {
            throw {message: 'Session Expired, Try Login'}
        }
        const response = await axios({
            url: conf + url,
            headers : {
                "Content-Type": "application/json",
                'authorization' : `Bearer ${token}`
            },
            method: 'PUT',
            data : data,
        });
        return {error: false, message: 'Data Sucess!', result: response.data}
    } catch (error) {
        return {error: true, message: error.message, result: {}}
    }
}


export const Delete = async ({data = {}, url ='', conf}) => {
    try {
        const token = await localStorage.getItem('token');
        if(!token) {
            throw {message: 'Session Expired, Try Login'}
        }
        const response = await axios({
            url: conf + url,
            headers : {
                "Content-Type": "application/json",
                'authorization' : `Bearer ${token}`
            },
            method: 'DELETE',
            data : data,
        });
        return {error: false, message: 'Data Sucess!', result: response.data}
    } catch (error) {
        return {error: true, message: error.message, result: {}}
    }
}