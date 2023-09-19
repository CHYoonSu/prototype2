import React from "react";
import styled from "styled-components";

const Section1 = styled.section`
  border-top: 1px solid black;
`;
const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 3fr;
  height: 100vh;
  width: 90%;
  margin: auto;
  column-gap: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const TitleBox = styled.div`
  grid-column: 1/-1;
`;
const Title = styled.h1`
  font-size: 52px;
`;
const Process1 = styled.div`
  width: auto;
  height: 300px;
  background-color: red;
`;
const Process2 = styled.div`
  width: auto;
  height: 300px;
  background-color: orange;
`;
const Process3 = styled.div`
  width: auto;
  height: 300px;
  background-color: yellow;
`;
const Process4 = styled.div`
  width: auto;
  height: 300px;
  background-color: green;
`;
const Process5 = styled.div`
  width: auto;
  height: 300px;
  background-color: darkblue;
`;
const Process6 = styled.div`
  width: auto;
  height: 300px;
  background-color: purple;
`;

function Sec4() {
  return (
    <Section1>
      <Wrap>
        <TitleBox>
          <Title>절차</Title>
        </TitleBox>
        <Process1>신청하기</Process1>
        <Process2>고객정보수집</Process2>
        <Process3>결제</Process3>
        <Process4>정보분석</Process4>
        <Process5>
          맞춤취미목록
          <br />
          제공
        </Process5>
        <Process6>
          일정관리
          <br />및<br />
          취미가이드라인
        </Process6>
      </Wrap>
    </Section1>
  );
}

export default Sec4;
