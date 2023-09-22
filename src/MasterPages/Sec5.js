import React from "react";
import styled from "styled-components";

const Section1 = styled.section`
  display: grid;
  grid-template-rows: 150px repeat(3, 100px 70px 10px);
  text-align: center; //center로 하지말고 Q 문장 옆에 슥 가지런하게 하면 좋겠는데
  align-items: center;
  font-size: 32px;
  font-weight: bold;
`;
const TextBox = styled.div``;
const Title = styled.h1`
  font-size: 52px;
`;

const Q1Box = styled.div``;
const Q1Text = styled.p``;
const R1Box = styled.div``;
const R1Text = styled.p`
  font-weight: normal;
`;

const Q2Box = styled.div``;
const Q2Text = styled.p``;
const R2Box = styled.div``;
const R2Text = styled.p`
  font-weight: normal;
`;

const Q3Box = styled.div``;
const Q3Text = styled.p``;
const R3Box = styled.div``;
const R3Text = styled.p`
  font-weight: normal;
`;

function Sec5() {
  return (
    <Section1>
      <TextBox>
        <Title>자주 묻는 질문</Title>
      </TextBox>
      <Q1Box>
        <Q1Text>▼신청 가격은 어떻게 되나요?</Q1Text>
      </Q1Box>
      <R1Box>
        <R1Text>신청 건당 50,000원입니다.</R1Text>
      </R1Box>
      <div></div>
      <Q2Box>
        <Q2Text>▼취미목록과 일정관리가이드는 언제쯤 오나요?</Q2Text>
      </Q2Box>
      <R2Box>
        <R2Text>최대 하루에서 최소 몇십분으로 소요됩니다.</R2Text>
      </R2Box>
      <div></div>
      <Q3Box>
        <Q3Text>▼서비스가 마음에 들지않아요. 환불해주세요</Q3Text>
      </Q3Box>
      <R3Box>
        <R3Text>
          원하시는 만족스러운 서비스를 제공하지 못해 죄송합니다. 환불
          처리하겠습니다.
        </R3Text>
      </R3Box>
    </Section1>
  );
}

export default Sec5;
