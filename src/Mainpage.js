import React from "react";
import styled from "styled-components";

const Wrap = styled.div``;
const ImgBox = styled.div`
  //이미지 박스
  position: absolute; //position말고 grid나 flexbox를 이용해서 레이아웃 잡야아 함. 추후에 수정
  width: 643px; //이번에는 간략한 레이아웃만 잡아봄.
  height: 530px; //흠냐
  top: 120px;
  border: 1px solid black;
  left: 830px;
`;

const FirstSec = styled.section`
  position: relative;
  height: 780px;
  border-bottom: 1px solid black;
`;

const SecSec = styled.section`
  height: 700px;
  border-bottom: 1px solid black;
  background-color: gray;
`;
const TirdSec = styled.section`
  height: 700px;
  border-bottom: 1px solid black;
`;

const DivBox1 = styled.div`
  position: absolute;
  border: 1px solid black;
  width: 615px;
  height: 90px;
  left: 30px;
  top: 130px;
`;
const DivBox2 = styled.div`
  position: absolute;
  border: 1px solid black;
  width: 380px;
  height: 250px;
  left: 30px;
  top: 250px;
`;
const DivBox3 = styled.div`
  position: absolute;
  border: 1px solid black;
  width: 780px;
  height: 45px;
  left: 30px;
  top: 530px;
`;
const DivBox4 = styled.div`
  position: absolute;
  border: 1px solid black;
  width: 190px;
  height: 45px;
  left: 30px;
  top: 610px;
`;
// const HBox = styled.h3`
//   line-height: 1.5;
//   position: absolute;
//   left: 30px;
//   top: 130px;
// `;
// const Pbox1 = styled.p`
//   line-height: 1.5;
//   position: absolute;
//   left: 30px;
//   top: 150px;
// `;
function Mainpage() {
  return (
    <Wrap>
      <FirstSec>
        <ImgBox />
        <DivBox1>
          <h1>우린 변화를 원한다. </h1>
        </DivBox1>
        <DivBox2>
          <div>더 나은 내일을 위해</div>
          <div>더 나은 나를 위해</div>
          <div>더 나은 인생을 위해</div>
        </DivBox2>
        <DivBox3>
          <div>사소한 변화로 당신의 변화를 이끌어내줄 취미 컨설턴트</div>
        </DivBox3>
        <DivBox4>
          <div>하비드림.</div>
        </DivBox4>
      </FirstSec>
      <SecSec></SecSec>
      <TirdSec></TirdSec>
    </Wrap>
  );
}

export default Mainpage;
