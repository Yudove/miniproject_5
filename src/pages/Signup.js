// src > pages > Singup.js
// 회원가입 페이지

import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Signup = () => {
  const navigate = useNavigate();

  //이메일 형식
  const is_email = (id) => {
    let _reg =
      /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
    return _reg.test(id);
  };

  // 닉네임 3자리 이상 9자리 이하
  const is_nickname = (nickname) => {
    let _reg = /^[0-9a-zA-Z!@#$%^&.*]{3,9}$/;
    return _reg.test(nickname);
  };

  // 비밀번호 8자리 이상 20자리 이하
  const is_password = (pw) => {
    let _reg = /^[0-9a-zA-Z!@#$%^&.*]{8,20}$/;
    return _reg.test(pw);
  };

  return (
    <>
      <Header />
      <div className="SignupBox">
        <p>회원가입</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input className="Input1" placeholder="아이디를 입력하세요" />
          <button className="CheckButton">중복 확인</button>
        </div>
        <div className="InputBottomText">
          *아이디는 이메일(test@test.test) 형식입니다
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input className="Input1" placeholder="닉네임을 입력하세요" />
          <button className="CheckButton">중복 확인</button>
        </div>
        <div className="InputBottomText">
          *닉네임은 3자리 이상 9자리 이하만 가능합니다
        </div>
        <input
          type="password"
          className="Input"
          placeholder="비밀번호를 입력하세요"
        />
        <div className="InputBottomText">
          *비밀번호는 8자리 이상 20자리 이하만 가능합니다
        </div>
        <input
          type="password"
          className="Input"
          placeholder="비밀번호를 한번 더 입력하세요"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3%",
            margin: "2%",
          }}
        >
          <button className="SignupButton">회원가입 피카</button>
          <button
            className="SignupButton"
            style={{ backgroundColor: "orange" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            이미 회원이면 로그인하러 가기
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
