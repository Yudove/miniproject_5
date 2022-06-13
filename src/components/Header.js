//src > components > Header.js
//헤더(상단) 컴포넌트 : 로그인 상태 전/후 보이는 버튼 달라짐.

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Cookie } from "../components/pokemonLogo.svg";

//로그인 check , 로그아웃(signout), auth? 임포트 필요

const Header = () => {
  const navigate = useNavigate();

  //로그인했을 때 다른 헤더 보이기
  const [is_login, setIsLogin] = useState(false);

  const loginCheck = async (user) => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  //로그인 check 실행
  useEffect(() => {
    // onAuthStateChanged(auth, loginCheck);
  }, []);

  if (is_login) {
    return (
      <HeaderDesign>
        <button
          style={{
            display: "flex",
            alignItems: "flex-start",
            border: "none",
            backgroundColor: "transparent",
          }}
          onClick={() => {
            navigate(`/`);
          }}
        >
          <Cookie width="600px" height="90px" />
        </button>
        {/* svg 파일 왼쪽 상단으로 이동시키고 싶다 */}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "10px",
            margin: "5%",
          }}
        >
          <button
            style={{
              marginRight: "1%",
              border: "none",
              backgroundColor: "yellowgreen",
              height: "2.5em",
              width: "6em",
            }}
            onClick={() => {
              // navigate(`/mypage`);
            }}
          >
            Mypage
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "yellowgreen",
              height: "2.5em",
              width: "6em",
            }}
            onClick={() => {
              // signOut(auth);
            }}
          >
            로그아웃
          </button>
        </div>
      </HeaderDesign>
    );
  }

  return (
    <HeaderDesign>
      <button
        style={{
          display: "flex",
          alignItems: "flex-start",
          border: "none",
          backgroundColor: "transparent",
          // width: "300px",
        }}
        onClick={() => {
          navigate(`/`);
        }}
      >
        <Cookie width="270px" height="90px" />
      </button>
      {/* svg 파일 왼쪽 상단으로 이동시키고 싶다 */}

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          gap: "10px",
          margin: "5%",
        }}
      >
        <button
          style={{
            marginRight: "1%",
            border: "none",
            backgroundColor: "rgb(255, 203, 5)",
            height: "2.5em",
            width: "6em",
            // fontSize: "1em",
            color: "rgb(53, 100, 173)",
          }}
          onClick={() => {
            navigate(`/login`);
          }}
        >
          로그인
        </button>
        <button
          style={{
            border: "none",
            backgroundColor: "rgb(255, 203, 5)",
            height: "2.5em",
            width: "6em",
            color: "rgb(53, 100, 173)",
          }}
          onClick={() => {
            navigate(`/signup`);
          }}
        >
          회원가입
        </button>
      </div>
    </HeaderDesign>
  );
};

const HeaderDesign = styled.div`
  background-color: #ffe605;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
