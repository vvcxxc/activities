import { getBrowserType, getUrlParams } from './get_info'
import { Cookie } from './common';

export const Login = () => {
  if(process.env.VUE_APP_FLAG == 'development'){
    Cookie.set('test_token_auth','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdGVzdC5hcGkudGRpYW55aS5jb20vd2VjaGF0L3d4b2F1dGgiLCJpYXQiOjE1NzQ5OTI5MzQsImV4cCI6MTU3NTM1MjkzNCwibmJmIjoxNTc0OTkyOTM0LCJqdGkiOiJibnQ0SEJXUjJoMjBjUmREIiwic3ViIjozMzY3LCJwcnYiOiJmNmI3MTU0OWRiOGMyYzQyYjc1ODI3YWE0NGYwMmI3ZWU1MjlkMjRkIn0.UAgFW-kXmQdfWi4mvxmjFDGbV_e64dfNSPwxLps_onc')
    return
  }
    let from = window.location.href;
      let browsertype = getBrowserType();
      if (browsertype == "wechat") {
        let codeid = getUrlParams().code_id;
        let url =
          process.env.VUE_APP_BASE_DOMAIN +
          "wechat/wxoauth?code_id=" +
          codeid +
          "&from=" +
          from;
        url = encodeURIComponent(url);
        let urls =
          "http://wxauth.tdianyi.com/index.html?appid=wxecdd282fde9a9dfd&redirect_uri=" +
          url +
          "&response_type=code&scope=snsapi_base&connect_redirect=1&state=STATE&state=STATE";
        return (window.location.href = urls);
      } else if (browsertype == "alipay") {
        let url = process.env.VUE_APP_BASE_DOMAIN + "ali/getZfbUserInfo";
        let codeid = getUrlParams().code_id;
        url = encodeURIComponent(url);
        window.location.href =
          process.env.VUE_APP_BASE_DOMAIN +
          "/ali/zfbUserAuth?code_id=" +
          codeid +
          "&from=" +
          from +
          "&url=" +
          url;
      }
}
