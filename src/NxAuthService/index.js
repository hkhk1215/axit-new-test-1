import axios from "axios";
export const Login = ({data = {}, conf}) => {
    try {
        const response = await axios({
            url: conf.baseUrl + 'PAM/PAM/Login',
            headers : {
                "Content-Type": "application/json"
            },
            method: 'POST',
            data : data,
        });
        console.log(response.data);
        return {error: false, message: 'Data Sucess!', result: response.data}
    } catch (error) {
        return {error: true, message: error.message, result: {}}
    }
}

