import axios from 'axios';
import { AppDelete, AppGet, AppPost, AppPut } from '../NxAppApiService';

import { DeleteMethod, GetMethod, PostMethod, PutMethod } from '../NxPortalApiService'; 


export const Get = async ({data = {}, url ='', conf, platform}) => {
    try {
        let result = {}
        if(platform == 'portal') {
            result =await GetMethod({data: data, url: url, conf: conf});
        }
        else {
            result =await AppGet({data: data, url: url, conf: conf});
        }
        return result;
    } catch (error) {
        return {error: true, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}

export const Post = async ({data = {}, url ='', conf, platform}) => {
    try {
        let result = {}
        if(platform == 'portal') {
            result =await PostMethod({data: data, url: url, conf: conf});
        }
        else {
            result =await AppPost({data: data, url: url, conf: conf});
        }
        return result;
    } catch (error) {
        return {error: true, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}

export const Put = async ({data = {}, url ='', conf, platform}) => {
    try {
        let result = {}
        if(platform == 'portal') {
            result = await PutMethod({data: data, url: url, conf: conf});
        }
        else {
            result = await AppPut({data: data, url: url, conf: conf});
        }
        return result;
    } catch (error) {
        return {error: true, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}

export const Delete = async ({data = {}, url ='', conf, platform}) => {
    try {
        let result = {}
        if(platform == 'portal') {
            result = await DeleteMethod({data: data, url: url, conf: conf});
        }
        else {
            result = await AppDelete({data: data, url: url, conf: conf});
        }
        return result;
    } catch (error) {
        return {error: true, message: error.message, tokenState: error.tokenState ? error.tokenState : false, result: {}}
    }
}