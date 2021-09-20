import axios from 'axios';
export const Get = async ({data = {}, url ='', conf}) => {
    try {
        const response = await axios({
            url: conf.baseUrl + url,
            headers : {
                'authorization' : ""
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
        const response = await axios({
            url: conf.baseUrl + url,
            headers : {
                'authorization' : ""
            },
            method: 'POST',
            data : data,
        });
        return {error: false, message: 'Data Sucess!', result: response.data}
    } catch (error) {
        return {error: true, message: error.message, result: {}}
    }
}


export const Put = async ({data = {}, url ='', conf}) => {
    try {
        const response = await axios({
            url: conf.baseUrl + url,
            headers : {
                'authorization' : ""
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
        const response = await axios({
            url: conf.baseUrl + url,
            headers : {
                'authorization' : ""
            },
            method: 'DELETE',
            data : data,
        });
        return {error: false, message: 'Data Sucess!', result: response.data}
    } catch (error) {
        return {error: true, message: error.message, result: {}}
    }
}