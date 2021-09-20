import axios from 'axios';

export const dataLayer = async (data) => {
  try {
    return {error: false, message: 'Sucess Login', result: {data: 1}}
  } catch (error) {
    return {error: true, message: error.message, result: {}}
  }
}
