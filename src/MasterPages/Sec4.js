import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const Section1 = styled.section`
  background-color: #f8f8f8ff;
`;
const Wrap = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const IDK = styled.span`
  display: block;
  width: 100%;
  margin-top: 30px;
`;
const Title = styled.h2`
  font-size: 52px;
  font-weight: 700;
  margin-top: 50px;
`;
const SubTitle = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin-top: 50px;
`;
const Blank = styled.div`
  height: 50px;
`;
const ProcessLayOut = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr 1fr 0.3fr 1fr 0.3fr 1fr;
  width: 80%;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
const Arrow = styled.div`
  .Ar {
    color: #845ec2;
  }
`;
const ProcessBox = styled.div`
  border: 1px solid black;
  border: 2px;
  box-shadow: 0 5px 20px 0 #f0f2f2;
  background-color: white;
`;
const Box = styled.div`
  margin-top: 15px;
`;
const Number = styled.div`
  border: 1px solid #845ec2;
  border-radius: 30px;
  width: 20%;
  margin: auto;
  color: #845ec2;
`;
const Content = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin-top: 15px;
`;
const Img = styled.img`
  width: 100%;
  height: 250px;
  margin-top: 30px;
`;
function Sec4() {
  return (
    <Section1>
      <Wrap>
        <IDK>절차</IDK>
        <Title>상담신청을 통한 서비스 제공</Title>
        <SubTitle>체계적인 과정을 통한 맞춤취미추천</SubTitle>
        <Blank></Blank>
        <ProcessLayOut>
          <ProcessBox>
            <Box>
              <Number>1단계</Number>
              <Content>신청하기</Content>
            </Box>
            <Img></Img>
          </ProcessBox>
          <Arrow>
            <IoIosArrowForward className="Ar"></IoIosArrowForward>
          </Arrow>
          <ProcessBox>
            <Box>
              <Number>2단계</Number>
              <Content>맞춤 취미 제공</Content>
            </Box>
            <Img></Img>
          </ProcessBox>
          <Arrow>
            <IoIosArrowForward className="Ar"></IoIosArrowForward>
          </Arrow>
          <ProcessBox>
            <Box>
              <Number>3단계</Number>
              <Content>일정관리 가이드</Content>
            </Box>
            <Img></Img>
          </ProcessBox>
          <Arrow>
            <IoIosArrowForward className="Ar"></IoIosArrowForward>
          </Arrow>
          <ProcessBox>
            <Box>
              <Number>4단계</Number>
              <Content>지속적인 관리</Content>
            </Box>
            <Img></Img>
          </ProcessBox>
        </ProcessLayOut>
      </Wrap>
    </Section1>
  );
}

export default Sec4;
