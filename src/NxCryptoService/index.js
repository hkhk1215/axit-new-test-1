import CryptoJS from "crypto-js";
let secreatKey = "@lt@5c10cryt0";

export const encrypt = (data = '') => {
    try {
        const encrypts = CryptoJS.AES.encrypt(JSON.stringify({data}), secreatKey).toString();
        return {error : false, message: '', result : encrypts}
    } catch (error) {
        console.log(error)
        return {error : true, message: 'encryption Error', result : ''};
    }
}

export const decrypt = (data = '') => {
    try {
        var decrypts = CryptoJS.AES.decrypt(data, 'secret').toString(CryptoJS.enc.Utf8);
        console.log(decrypts);
        let val = JSON.parse(decrypts)
        console.log(val.data)
        return {error : false, message: '', result : val.data}
    } catch (error) {
        console.log(error)
        return {error : true, message: 'encryption Error', result : ''};
    }
}