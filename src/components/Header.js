//src > components > Header.js
//헤더(상단) 컴포넌트 : 로그인 상태 전/후 보이는 버튼 달라짐.

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Cookie } from "../components/pokemonLogo.svg";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user.list.is_login);
  //로그인했을 때 다른 헤더 보이기
  const [is_login, setIsLogin] = useState(false);

  //로그아웃 클릭 시 쿠키 삭제
  const deleteCookie = (is_login) => {
    let date = new Date("2021-01-01").toUTCString();
    document.cookie = is_login + "=; expires=" + date;
    setIsLogin(false);
    window.location.reload();
  };
  //로그인 check 실행
  useEffect(() => {
    if (user.list.is_login) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user.list.is_login]);

  if (is_login) {
    return (
      /*웹페이지의 제목*/
      <>
        <Helmet>
          <title>띠부띠부</title>
          <meta property="og:title" content="포켓몬 온라인 띠부띠부" />
          <meta
            property="og:description"
            content="모으기 어려운 포켓몬 띠부띠부ㅠ 온라인으로 모은다!"
          />
          <meta
            property="og:image"
            content="https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002501.png"
          />
        </Helmet>

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
                console.log("로그아웃");
                deleteCookie();
                // window.location.reload();
              }}
            >
              로그아웃
            </button>
          </div>
        </HeaderDesign>
      </>
    );
  }
  return (
    <>
      {/*웹페이지의 제목*/}
      <Helmet>
        <title>띠부띠부</title>
        <meta property="og:title" content="포켓몬 온라인 띠부띠부" />
        <meta
          property="og:description"
          content="모으기 어려운 포켓몬 띠부띠부ㅠ 온라인으로 모은다!"
        />
        <meta
          property="og:image"
          content="https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002501.png"
        />
      </Helmet>
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
    </>
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
