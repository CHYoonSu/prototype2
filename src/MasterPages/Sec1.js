import React from "react";
import styled from "styled-components";

const Section1 = styled.section`
  display: grid;
  grid-template-rows: 8fr 1fr 3fr;
  justify-content: center;
  align-items: center;
  line-height: 1.2em;
`;
const HeadBox = styled.div`
  width: 800px;
`;
const TextBox = styled.div``;
const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

const HeadText = styled.h1`
  text-align: center;
  line-height: 1.2em;
  font-size: 96px;
  margin-top: 100px;
`;
const ContentText = styled.p`
  text-align: center;
  line-height: 1.2em;
  font-size: 20px;
  margin-top: 30px;
`;
const GoBtn = styled.button`
  display: block;
  background-color: #efceff;
  width: 220px;
  height: 60px;
  text-align: center;
  line-height: 1.2em;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 30px;
  margin-bottom: 130px;
`;
function Sec1() {
  return (
    <Section1>
      <HeadBox>
        <HeadText>나에게 맞는 취미와 시간관리</HeadText>
        <ContentText>
          자신에게 맞는 취미를 발견하고, 더 의미 있는 시간을 보내세요!
        </ContentText>
      </HeadBox>

      <TextBox></TextBox>
      <BtnBox>
        <GoBtn>알아보기</GoBtn>
      </BtnBox>
    </Section1>
  );
}

export default Sec1;
