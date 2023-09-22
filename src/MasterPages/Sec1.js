import React from "react";
import styled, { keyframes } from "styled-components";

const Section1 = styled.section`
  justify-content: center;
  align-items: center;
`;

const opacity = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const HeadBox = styled.div``;
const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 45px;

  gap: 40px;
`;

const HeadTitle = styled.h1`
  text-align: center;
  line-height: 1.2em;
  font-size: 52px;
  font-weight: 700;
  animation: ${opacity} 2s ease-out;
  margin-top: 150px;
`;
const SubTitle = styled.p`
  text-align: center;
  line-height: 1.6em;
  font-size: 23px;
  margin-top: 30px;
  animation: ${opacity} 1s;
`;
const GoBtn = styled.button`
  display: block;
  background-color: white;

  margin-top: 30px;
  flex-basis: 220px;
  height: 60px;
  text-align: center;
  line-height: 1.2em;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid #66449c;
  margin-top: 30px;
`;

const Consult = styled.button`
  display: block;
  margin-top: 30px;
  flex-basis: 220px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  background-color: #66449c;
`;
const Color = styled.span`
  color: #845ec2;
`;
function Sec1() {
  return (
    <Section1>
      <HeadBox>
        <HeadTitle>
          나만을 위한 <Color>맞춤 취미</Color>서비스
        </HeadTitle>
        <SubTitle>
          당신만의 특별한 시간을 위한 맞춤 취미 서비스
          <br />
          효율적인 일정 관리까지, 우리와 함께 하세요.
        </SubTitle>
      </HeadBox>

      <BtnBox>
        <GoBtn>알아보기</GoBtn>
        <Consult>상담하기</Consult>
      </BtnBox>
    </Section1>
  );
}

export default Sec1;
