// src > shared > Cookie.js
import { cookies } from "react-cookie";
//setCookie 쿠키 저장 함수 설정 function setCookie(cookie_name, value, days){}
const setCookie = (cookieName, value, exp = 5) => {
  let exdate = new Date();
  exdate.setTime(exdate.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${value}; expires=${exdate.toUTCString()}`;
};

//getCookie 쿠키 불러오기 함수 설정 (페이지 로드 시 쿠키유무 여부 판단하여 세팅)
const getCookie = (cookieName) => {
  var x, y;
  var val = document.cookie.split(";");
  for (var i = 0; i < val.length; i++) {
    x = val[i].substr(0, val[i].indexOf("="));
    y = val[i].substr(val[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    // 앞과 뒤의 공백 제거하기
    if (x === cookieName) {
      return unescape(y);
      // unescape로 디코딩 후 값 리턴
    }
  }
};

const deleteCookie = (cookieName) => {
  let date = new Date("2021-01-01").toUTCString();
  document.cookie = cookieName + "=; expires=" + date;
};

export { setCookie, getCookie, deleteCookie };
