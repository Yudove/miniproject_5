//src > pages > Login.js
//로그인 페이지

import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="SignupBox">
        <p>로그인</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input className="Input" placeholder="아이디를 입력하세요" />
        </div>
        <div className="InputBottomText">
          *아이디는 이메일(test@test.test) 형식입니다.
        </div>

        <input
          type="password"
          className="Input"
          placeholder="비밀번호를 입력하세요"
        />
        <div className="InputBottomText">
          *비밀번호는 8자리 이상 20자리 이하입니다.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3%",
            margin: "2%",
          }}
        >
          <button className="SignupButton">로그인 피카</button>
          <button
            className="SignupButton"
            style={{ backgroundColor: "orange" }}
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원 아니면 회원가입하러 가기
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
