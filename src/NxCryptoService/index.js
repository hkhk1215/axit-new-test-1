// import CryptoJS from "crypto-js";
import crypto, { Cipher } from 'crypto';
const algorithm = 'aes-256-ctr';
// const iv = crypto.randomBytes(16)
// const secreatKey = '@lt@5c10cryt0key'

const secreatKey = '@lt@5c10cryt0keyyek0tyrc01c5@tl@';
const iv = crypto.randomBytes(16);
export const encrypt =  async (data = '') => {
    try {
        const cipher = crypto.createCipheriv(algorithm, secreatKey, iv);
        const encrypted = Buffer.concat([cipher.update(data) , cipher.final()]);
        return {Sucess : true, message: '', result: encrypted.toString('hex')}
    } catch (error) {
        return {Sucess : false, message: 'encryption Error', result : ''};
    }
}

export const decrypt = async (data = '') => {
    try {
        const decipher = crypto.createDecipheriv(algorithm, secreatKey, iv);
        const decrypted = Buffer.concat([decipher.update(Buffer.from(data, 'hex')), decipher.final()])
        return {error : false, message: '', result: decrypted.toString()}
    } catch (error) {
        return {error : true, message: 'encryption Error', result : ''};
    }
}