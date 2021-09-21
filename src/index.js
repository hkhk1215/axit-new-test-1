import configs from "./configs";
import { Delete, Get, Post, Put } from "./NxApiService";
import { AppDelete, AppGet, AppPost, AppPut } from "./NxAppApiService";

let conf = configs.dev.baseUrl;
let envs = 'dev'

export const NxApiService = {
  GET : ({data = {}, url = ''}) => Get({data: data, url: url, conf : conf}),
  POST : ({data = {}, url = ''}) => Post({data: data, url: url, conf : conf}),
  PUT : ({data = {}, url = ''}) => Put({data: data, url: url, conf : conf}),
  DELETE : ({data = {}, url = ''}) => Delete({data: data, url: url, conf : conf}),
  CONFIG : (env = 'dev') => {
    if(env == 'prod') conf = configs.prod;
    else conf = configs.dev;
    if (baseUrl && baseUrl != '') {
      conf = baseUrl
    }
    return true
  }
}

export const NxAppApiService = {
  GET : ({data = {}, url = ''}) => AppGet({data: data, url: url, conf : conf}),
  POST : ({data = {}, url = ''}) => AppPost({data: data, url: url, conf : conf}),
  PUT : ({data = {}, url = ''}) => AppPut({data: data, url: url, conf : conf}),
  DELETE : ({data = {}, url = ''}) => AppDelete({data: data, url: url, conf : conf}),
  CONFIG : (env = 'dev', baseUrl) => {
    // console.log(env)
    if(env == 'prod') conf = configs.prod;
    else conf = configs.dev;
    if (baseUrl && baseUrl != '') {
      conf = baseUrl
    }
    return true
  }
}