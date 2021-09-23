import axios from "axios";
export const Login = async ({data = {}, conf}) => {
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
        if (response.status == 200 || (response.data.isSuccess == true)) {
            let result = JSON.parse(response.data.data);
            if (result && result.accessToken) {
                sessionStorage.setItem('userInfo', JSON.stringify(result)) // need to remove the data;
            } else {
                throw {message: 'Something wrong', tokenState: true}
            }
        }
        let responseData = {};
        if (response.data.isSuccess  == true) {
            responseData = JSON.parse(response.data.data);
        }
        const result = {... response.data, data: responseData};
        return {error: false, message: 'Data Sucess!', tokenState: false, result}
    } catch (error) {
        return {error: true, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}

export const getUserInfo = async () => {
    try {
        let data = await sessionStorage.getItem('userInfo');
        delete data.data.accessToken;
        return {error: false, message: 'Data Sucess!', tokenState: false, result: data};
    } catch (error) {
        return {error: true, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}