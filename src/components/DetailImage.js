import React from "react";
import styled from "styled-components";



const DetailImage = () => {

    return (
        <>
        <Container>
            <StyledImage>
            <Div>

            </Div>
            </StyledImage>
            <ImageInfo>
                <h3>포켓몬 이름</h3>
                <InfoBox>
                    <Info><span>특성</span></Info> 
                    <Info>특성이에요ㅁㄴㅇㅁㅈㅇㅁㄴㅇㅁㅈㅇ</Info>
                    <Info><span>특성</span></Info> 
                    <Info>특성이에요ㅁㄴㅇㅁㅈㅇㅁㄴㅇㅁㅈㅇ</Info>
                    <Info><span>특성</span></Info> 
                    <Info>특성이에요ㅁㄴㅇㅁㅈㅇㅁㄴㅇㅁㅈㅇ</Info>
                </InfoBox>
            </ImageInfo>
            
        </Container>
        </>
    );
};

const Container = styled.div`
border: 1px solid gray;
margin: 0px auto;
margin-bottom: 30px;

width: 600px;
height: 400px;
display: flex;
jusfify-content: center;
`;

const StyledImage = styled.div`
width: 300px;
position: relative;
padding: 20px;
`;

const ImageInfo = styled.div`
margin-left: 10px;
margin-top: 50px;
width: 300px;
`;

const InfoBox = styled.div`
font-size: 13px;
`;

const Info = styled.div`
margin-bottom: 10px;
`

const Div = styled.div`
background-color: red;
margin-top: 30px;
width: 300px;
height: 300px;
`;

export default DetailImage;