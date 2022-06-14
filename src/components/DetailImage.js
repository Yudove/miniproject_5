import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


import axios from "axios";



const DetailImage = () => {

    const params = useParams();
    const post_index = params.index;

    const [data, setData] = useState({
        id:0,
        name:"name",
        imageUrl:"",
        num:"000",
        element:[],
        info:"...",
        likesCnt:0
    });

    useEffect(async () => {
        const {data} = await axios.get("http://localhost:5001/pokemon");
        console.log('poke', data);
        setData(data[0]);
    }, []);
    
    console.log('data', data);

    return (
        <>
        <Container>
            <StyledImage>
            <Div>
            <img style={{width: "300px", height: "300px"}} src={data.imageUrl}/>
            </Div>
            </StyledImage>
            <ImageInfo>
                <h3></h3>
                <InfoBox> 
                    <Info><h1>{data.num}</h1></Info>
                    <Info><h1>{data.name}</h1></Info>
                    <Info><InfoTitle>특성</InfoTitle></Info> 
                    <Info>{data.element}</Info>
                    <Info><InfoTitle>설명</InfoTitle></Info> 
                    <Info>{data.info}</Info>
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
background-color: skyblue;
margin-top: 30px;
width: 300px;
height: 300px;
`;

const InfoTitle = styled.h1`
font-size: 15px;
`

export default DetailImage;