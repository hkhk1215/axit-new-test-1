import axios from 'axios';
export const Get = async ({data = {}, url ='', conf}) => {
    try {
        const response = await axios({
            url: conf + url,
            headers : {
                "Content-Type": "application/json",
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
            url: conf + url,
            headers : {
                "Content-Type": "application/json",
                'authorization' : ""
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
        const response = await axios({
            url: conf + url,
            headers : {
                "Content-Type": "application/json",
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
            url: conf + url,
            headers : {
                "Content-Type": "application/json",
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