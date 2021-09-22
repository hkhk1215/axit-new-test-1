import axios from "axios";
export const Login = async ({data = {}, conf}) => {
    try {
        const response = await axios({
            url: conf + 'PAM/PAM/Login',
            headers : {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            method: 'POST',
            data : data,
        });
        // console.log(response.data);
        if (response.status == 200 || (response.data.isSuccess == true)) {
            let result = JSON.parse(response.data.data);
            console.log(result.data.accessToken);
            if (result && result.data && result.data.accessToken) {
                localStorage.setItem('token', result.data.accessToken)
                sessionStorage.setItem('token', result.data.accessToken)
            }
        }
        return {error: false, message: 'Data Sucess!', result: response.data}
    } catch (error) {
        return {error: true, message: error.message, result: {}}
    }
}

