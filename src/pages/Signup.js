import React from "react";

export const Signup = () => {
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      회원가입 페이지입니다.
      <div className="signupBox">
        <p>회원가입</p>
        <input className="inputBox"></input>
        <input className="inputBox"></input>
        <input className="inputBox"></input>
        <input className="inputBox"></input>
      </div>
    </div>
  );
};
