import React from "react";
import styled, { keyframes } from "styled-components";
//import { useInView } from "react-intersection-observer";
import { FaClockRotateLeft, FaPersonHarassing } from "react-icons/fa6";
import { PiCalendarDuotone } from "react-icons/pi";
import { BsFire } from "react-icons/bs";
/////////이미지 구할 때 까지 아이콘 사용
const Section1 = styled.section`
  // #faf6ff 하얀색과 비슷한 보라 #EFE6FF 옅은 보라   #009ac3
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  font-weight: 700;
  width: 75%;
  margin: auto;
`;

const Color = styled.span`
  color: #8f78c3;
`;
const Title = styled.h2`
  margin-top: 72px;
  font-size: 52px;
  line-height: 1.7em;
`;
const SubTitle = styled.p`
  margin-top: 20px;
  font-size: 25px;
`;
const ReasonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  font-size: 25px;
`;
const EachBox = styled.div`
  margin-top: 50px;
  padding: 30px;
`;
// const BoxImg = styled.img`
//   margin-top: 20px;
//   object-fit: cover;
//   width: 50%;
//   height: 30%;
// `;
const BoxTitle = styled.h3`
  margin-top: 30px;
`;
const BoxText = styled.p`
  color: #4e4e4eff;
  margin-top: 30px;
  font-weight: 500;
  font-size: 15px;
  line-height: 2em;
`;

const slice = keyframes` 
  0%{
    transform: translateY(40%);
    opacity: 0;
  }
  100%{
    transform: translateY(0%);
    opacity: 1;
  }
`;

function Sec2() {
  return (
    <Section1>
      <Wrap>
        <Title>
          왜 <Color>취미 서비스</Color>를 할까?
        </Title>
        <SubTitle>당신의 더 나은 삶을 위한 4가지</SubTitle>
        <ReasonBox>
          <EachBox>
            <FaPersonHarassing size={"100px"}></FaPersonHarassing>
            {/* <BoxImg
              src="https://cdn.pixabay.com/photo/2022/01/05/17/54/investigation-6917679_1280.png"
              alt="맞춤 취미 추천"
            ></BoxImg> */}
            <BoxTitle>맞춤 취미 추천</BoxTitle>
            <BoxText>
              고객님의 취향, 관심사, 성격 분석
              <br />
              즐거움과 만족감 선사
              <br /> 새로운 취미를 통한 더 나은 일상
            </BoxText>
          </EachBox>
          <EachBox>
            <PiCalendarDuotone size={"100px"}></PiCalendarDuotone>
            {/* <BoxImg
              src="https://cdn.pixabay.com/photo/2016/07/28/20/42/icon-1549619_1280.png"
              alt="계획 가이드"
            ></BoxImg> */}
            <BoxTitle>맞춤 계획 가이드</BoxTitle>
            <BoxText>
              개인의 일정과 최적화된 계획가이드.
              <br />
              목표와 성장에 맞춘 개인 맞춤형 가이드
            </BoxText>
          </EachBox>
          <EachBox>
            <FaClockRotateLeft size={"100px"}></FaClockRotateLeft>
            {/* <BoxImg
              src="https://cdn.pixabay.com/photo/2022/08/22/10/43/time-7403391_1280.png"
              alt="시간절약"
            ></BoxImg> */}
            <BoxTitle>시간절약</BoxTitle>
            <BoxText>
              빠르고 효율적인 일정계획
              <br />
              바쁜 일상 속 일정
            </BoxText>
          </EachBox>
          <EachBox>
            <BsFire size={"100px"}></BsFire>
            {/* <BoxImg
              src="https://cdn.pixabay.com/photo/2016/03/31/18/25/fire-1294356_1280.png"
              alt="동기부여"
            ></BoxImg> */}
            <BoxTitle>모티베이션</BoxTitle>
            <BoxText>
              지속적인 동기부여 제공
              <br />
              취미를 통한 성취감
            </BoxText>
          </EachBox>
        </ReasonBox>
      </Wrap>
    </Section1>
  );
}

export default Sec2;
