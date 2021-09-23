import configs from "./configs";
import { Delete, Get, Post, Put } from "./NxApiService";
import { AppDelete, AppGet, AppPost, AppPut } from "./NxAppApiService";
// import { getUserInfo, Login } from "./NxAuthService";

let conf = configs.dev.baseUrl;
let envs = 'dev'
let platforms = 'app'
export const NxApiService = {
  GET : ({data = {}, url = ''}) => Get({data: data, url: url, conf : conf, platform: platforms}),
  POST : ({data = {}, url = ''}) => Post({data: data, url: url, conf : conf, platform: platforms}),
  PUT : ({data = {}, url = ''}) => Put({data: data, url: url, conf : conf, platform: platforms}),
  DELETE : ({data = {}, url = ''}) => Delete({data: data, url: url, conf : conf, platform: platforms}),
  CONFIG : (env = 'dev', baseUrl = '', platform = 'app') => {
    if(env == 'prod') conf = configs.prod;
    else conf = configs.dev;
    if (baseUrl && baseUrl != '') {
      conf = baseUrl
    }
    if (platform == 'portal') {
      platforms = platform
    } else {
      platforms = 'app'
    }
    return true
  }
}

// export const NxAppApiService = {
//   GET : ({data = {}, url = ''}) => AppGet({data: data, url: url, conf : conf}),
//   POST : ({data = {}, url = ''}) => AppPost({data: data, url: url, conf : conf}),
//   PUT : ({data = {}, url = ''}) => AppPut({data: data, url: url, conf : conf}),
//   DELETE : ({data = {}, url = ''}) => AppDelete({data: data, url: url, conf : conf}),
//   CONFIG : (env = 'dev', baseUrl = '') => {
//     // console.log(env)
//     if(env == 'prod') conf = configs.prod;
//     else conf = configs.dev;
//     if (baseUrl && baseUrl != '') {
//       conf = baseUrl
//     }
//     return true
//   }
// }

export const NxAuthService = {
  Login : ({data= {}}) => Login({data: data, conf}),
  // getUserInfo: () => getUserInfo()
}