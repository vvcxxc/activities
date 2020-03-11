import { getBrowserType, getUrlParams } from './get_info'

export const Login = () => {
  let from = window.location.href;
  // if(process.env.VUE_APP_FLAG == 'development'){
  //   return
  // }
  let VUE_APP_AUTH_URL = process.env.VUE_APP_AUTH_URL
  let VUE_APP_USER_API = process.env.VUE_APP_USER_API
  let VUE_APP_WX_APPID = process.env.VUE_APP_WX_APPID
  let VUE_APP_ALI_APPID = process.env.VUE_APP_ALI_APPID
  let browsertype = getBrowserType();
  if (browsertype == "wechat") {
    let codeid = getUrlParams().code_id;
    // let url =
    //   process.env.VUE_APP_BASE_DOMAIN +
    //   "wechat/wxoauth?code_id=" +
    //   codeid +
    //   "&from=" +
    //   from;
    let url = VUE_APP_USER_API + 'v1/user/auth/auth_h5?code_id='+codeid+'&from='+from
    url = encodeURIComponent(url);
    // let urls =
    //   "http://wxauth.tdianyi.com/index.html?appid=wxecdd282fde9a9dfd&redirect_uri=" +
    //   url +
    //   "&response_type=code&scope=snsapi_base&connect_redirect=1&state=STATE&state=STATE";
    let urls = VUE_APP_AUTH_URL + 'index_xcx.html?appid='+VUE_APP_WX_APPID+'&redirect_uri='+url+'&response_type=code&scope=snsapi_base&connect_redirect=1&state=STATE&state=STATE';
    return (window.location.href = urls);
  } else if (browsertype == "alipay") {
    // let url = process.env.VUE_APP_BASE_DOMAIN + "ali/getZfbUserInfo";
    let codeid = getUrlParams().code_id;
    let url = VUE_APP_USER_API + 'v1/user/auth/auth_ali?code_id='+codeid+'&from='+ from
    url = encodeURIComponent(url);
    // window.location.href =
    //   process.env.VUE_APP_BASE_DOMAIN +
    //   "/ali/zfbUserAuth?code_id=" +
    //   codeid +
    //   "&from=" +
    //   from +
    //   "&url=" +
    //   url;
    let urls = VUE_APP_AUTH_URL + 'ali.html?appid='+ VUE_APP_ALI_APPID +'&redirect_uri='+url+'&scope=auth_base&state=STATE'
    return window.location.href = urls;
  }
}