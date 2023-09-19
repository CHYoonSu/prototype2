import React from "react";
import styled from "styled-components";

const Section1 = styled.section`
  border-top: 1px solid black;
  background-color: beige;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  text-align: center;
  align-items: center;
  justify-content: center;
  line-height: 1.2em;
`;

const TitleBox = styled.div`
  grid-column: 1/-1;
`;
const Title = styled.h1`
  font-size: 52px;
`;
const BigBox = styled.div``;
const BigText = styled.p`
  font-size: 20px;
`;

const SmallBox = styled.div``;
const SmallText = styled.p`
  font-size: 12px;
`;
const ImgBox = styled.div`
  grid-row: 2/-1;
  grid-column: 2/-1;
  border: 1px solid black;
  width: auto;
  height: 300px;
`;
//const Img = styled.img``;
function Sec3() {
  return (
    <Section1>
      <TitleBox>
        <Title>일정 관리 시스템</Title>
      </TitleBox>
      <BigBox>
        <BigText>샬라샬라샬라</BigText>
      </BigBox>
      <SmallBox>
        <SmallText>나풀나풀</SmallText>
      </SmallBox>
      <ImgBox>
        Img
        <br />
        전체이미지도 고려해보자
      </ImgBox>
    </Section1>
  );
}

export default Sec3;
