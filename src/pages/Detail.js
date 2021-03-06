import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Detail = () => {
  const params = useParams();
  const detail_id = params.id;
  const pokemonId = Number(params.id) + 1;
  const [comments, setComment] = useState([]);

  const [info, setInfo] = useState({
    id: 0,
    name: "name",
    imageUrl: "",
    num: "000",
    element: [],
    info: "...",
    likesCnt: 0,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://13.124.220.124/detail/${pokemonId}`).then((response) => {
      setData(response.data);
      console.log(pokemonId);
    });
    axios.get(`http://13.124.220.124/comment/${pokemonId}`).then((response) => {
      // setComment(response.data);
      console.log(response);
    });
  }, []);

  const deletePost = (id) => {
    axios.delete(`http://13.124.220.124/${id}`).then((response) => {
      setData((current) => current.filter((v) => v.id !== id));
    });
  };

  const input_text = useRef(null);

  return (
    <>
      <Header />
      {/* 이미지 div */}
      <Container>
        <ContainerImage>
          <ImageDiv>
            <Div>
              <img
                style={{ width: "300px", height: "300px" }}
                src={data?.imageUrl}
              />
            </Div>
            <button
              onClick={() => {
                if (data?.likeByMe) {
                  axios
                    .post(`http://localhost:5001/pokemon/${detail_id}`, {
                      // behavior: "unlike",
                      likesCnt: data.likesCnt - 1,
                    })
                    .then((response) => {
                      setData((current) => ({
                        ...current,
                        //   behavior: "unlike",
                        likesCnt: current.likesCnt - 1,
                      }));
                    });
                } else {
                  axios
                    .post(`http://localhost:5001/pokemon/${detail_id}`, {
                      // behavior: "like",
                      likesCnt: data.likesCnt + 1,
                    })
                    .then((response) => {
                      setData((current) => ({
                        ...current,
                        //   behavior: "like",
                        likesCnt: current.likesCnt + 1,
                      }));
                    });
                }
              }}
            >
              {data?.likeByMe && "[ME]"} 좋아요 {data?.likesCnt}
            </button>
          </ImageDiv>
          <InfoDiv>
            <InfoBox>
              <Info>
                <h1>{data?.num}</h1>
              </Info>
              <Info>
                <h1>{data?.name}</h1>
              </Info>
              <Info>
                <InfoTitle>특성</InfoTitle>
              </Info>
              <Info>{data?.element}</Info>
              <Info>
                <InfoTitle>설명</InfoTitle>
              </Info>
              <Info>{data?.info}</Info>
            </InfoBox>
          </InfoDiv>
        </ContainerImage>

        {/* 인풋 div */}
        <InputDiv>
          <Input type="text" ref={input_text} />
          <Button
            onClick={() => {
              if (data?.likeByMe) {
                axios
                  .post(`http://13.124.220.124/like/${pokemonId}`, {
                    // behavior: "unlike",
                    likesCnt: data.likesCnt - 1,
                  })
                  .then((response) => {
                    setData((current) => ({
                      ...current,
                      //   behavior: "unlike",
                      likesCnt: current.likesCnt - 1,
                    }));
                  });
              } else {
                axios
                  .post(`http://13.124.220.124/like/${pokemonId}`, {
                    // behavior: "like",
                    likesCnt: data.likesCnt + 1,
                  })
                  .then((response) => {
                    setData((current) => ({
                      ...current,
                      //   behavior: "like",
                      likesCnt: current.likesCnt + 1,
                    }));
                  });
              }
            }}
          >
            버튼
          </Button>
        </InputDiv>
        <div>
          <Ul>
            {comments.map((comment, index) => {
              return (
                <div key={index}>
                  <div>
                    <TitleP>
                      <span>{comment.nickname}</span>
                      <span> | </span>
                      <span>{comment.createdAt}</span>
                    </TitleP>
                  </div>

                  <div>
                    <CommentP>
                      <span>{comment.comment}</span>
                    </CommentP>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        axios
                          .patch(`http://13.124.220.124/comment/${pokemonId}`, {
                            comment: input_text.current.value,
                          })
                          .then((response) => {
                            setComment((current) =>
                              current.map((value) => {
                                if (comment.id === value.id) {
                                  value.comment = input_text.current.value;
                                }
                                return value;
                              })
                            );
                          });
                      }}
                    >
                      수정
                    </button>
                    <button
                      onClick={() => {
                        axios
                          .delete(`http://13.124.220.124/comment/${pokemonId}`)
                          .then((response) => {
                            setComment((current) =>
                              current.filter((value) => {
                                return comment.id !== value.id;
                              })
                            );
                          });
                      }}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              );
            })}
          </Ul>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding-top: 40px;
`;

const ContainerImage = styled.div`
  border: 1px solid gray;
  margin: 0px auto;
  margin-bottom: 30px;
  width: 600px;
  height: 400px;
  display: flex;
  jusfify-content: center;
`;

const ImageDiv = styled.div`
  width: 300px;
  position: relative;
  padding: 20px;
`;

const Div = styled.div`
  background-color: skyblue;
  margin-bottom: 1px;
  margin-top: 30px;
  width: 300px;
  height: 300px;
`;

const InfoDiv = styled.div`
  margin-left: 10px;
  margin-top: 50px;
  width: 300px;
`;

const InfoBox = styled.div`
  font-size: 13px;
`;

const Info = styled.div`
  margin-bottom: 10px;
`;

const InfoTitle = styled.h1`
  font-size: 15px;
`;

const Button = styled.button`
  height: 25px;
`;

const Input = styled.input`
  margin-bottom: 30px;
  margin-right: 10px;
  width: 540px;
  height: 19px;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
`;

const InputDiv = styled.div`
  text-align: center;
`;

const Ul = styled.ul`
  margin: 0px auto;
  width: 560px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  jusfify-content: center;
`;

const TitleP = styled.p`
  display: grid;
  grid-template-columns: 100px 20px 100px;
  font-size: 13px;
`;

const CommentP = styled.p`
  font-size: 15px;
`;

export default Detail;
