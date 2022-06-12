//src > pages > Main.js
//메인 페이지 (헤더는 따로)

import React from "react";
import "./App.css";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import sampleimg from "../components/000101.png";

const Main = () => {
  //상세페이지 연결에 필요
  const navigate = useNavigate();
  //index 값 받아오려면
  const params = useParams();
  const index = params.index;
  return (
    <>
      <Header />

      <div className="MainOutter">
        {/* 좋아요 순위 높은(옵션) 이미지 슬라이드(우선은 default 몇 장) */}
        <div className="MainImage">
          <img src={sampleimg} />
        </div>
        {/* 검색창 */}
        <div className="SearchBox">
          <input className="SearchInput"></input>
          <button>🔍</button>
        </div>
        {/* 포켓몬 1세대 리스트 */}
        <CardBox>
          {/* 리스트 불러와서 매핑 */}
          <Card
            key={index}
            onClick={() => {
              navigate(`/detail/` + index);
            }}
          />
          <Card
            key={index}
            onClick={() => {
              navigate(`/detail/` + index);
            }}
          />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardBox>
      </div>
    </>
  );
};
const CardBox = styled.div`
  width: 90%;
  max-width: 1000px;
  gap: 2%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 100%;
  max-width: 235px;
  height: 235px;
  background-color: red;
  margin-bottom: 2%;
`;
export default Main;
