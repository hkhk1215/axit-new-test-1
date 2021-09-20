import axios from "axios";

export const AppGet = async ({data = {}, url ='', conf}) => {
    try {
        const response = await axios({
            url: conf.baseUrl + url,
            headers : {
                
            },
            method: 'POST',
            data : data,
        });
        return {error: false, message: 'Data Sucess!', result: response.data}
    } catch (error) {
        return {error: true, message: error.message, result: {}}
    }
}
export const AppPost = async ({data = {}, url ='', conf}) => {
    try {
        const response = await axios({
            url: conf.baseUrl + url,
            headers : {
                
            },
            method: 'POST',
            data : data,
        });
        return {error: false, message: 'Data Sucess!', result: response.data}
    } catch (error) {
        return {error: true, message: error.message, result: {}}
    }
}
export const AppPut = async ({data = {}, url ='', conf}) => {
    try {
        const response = await axios({
            url: conf.baseUrl + url,
            headers : {
                
            },
            method: 'POST',
            data : data,
        });
        return {error: false, message: 'Data Sucess!', result: response.data}
    } catch (error) {
        return {error: true, message: error.message, result: {}}
    }
}
export const AppDelete = async ({data = {}, url ='', conf}) => {
    try {
        const response = await axios({
            url: conf.baseUrl + url,
            headers : {
                
            },
            method: 'POST',
            data : data,
        });
        return {error: false, message: 'Data Sucess!', result: response.data}
    } catch (error) {
        return {error: true, message: error.message, result: {}}
    }
}