import axios from "axios";
export const Login = ({}) => {
    try {
        const response = await axios({
            url: conf.baseUrl + 'login',
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

