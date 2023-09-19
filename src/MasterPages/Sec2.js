import React from "react";
import styled from "styled-components";

const Section1 = styled.section`
  border-top: 1px solid black;
  background-color: #fff5ff;
  text-align: center;
`;
const HobbyBox1 = styled.div``;
const HobbyBox2 = styled.div``;
const HobbyBox3 = styled.div``;
const HobbyBox4 = styled.div``;
const HobbyBox5 = styled.div``;
const HobbyBox6 = styled.div``;
const HobbyBox7 = styled.div``;
const HobbyBox8 = styled.div``;
const Hobbys = styled.div`
  width: 85%;
  height: 100vh;
  margin: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

function Sec2() {
  return (
    <Section1>
      <Hobbys>
        <HobbyBox1>
          <img alt="즐거움"></img>
          {/* 추후에 이미지랑 설명 디자인해야함 */}
        </HobbyBox1>
        <HobbyBox2>
          <p>설명(즐거움)</p>
        </HobbyBox2>
        <HobbyBox3>휴식</HobbyBox3>
        <HobbyBox4>설명(휴식)</HobbyBox4>
        <HobbyBox5>설명(성취감)</HobbyBox5>
        <HobbyBox6>성취감</HobbyBox6>
        <HobbyBox7>자기계발</HobbyBox7>
        <HobbyBox8>설명(자기계발)</HobbyBox8>
      </Hobbys>
    </Section1>
  );
}

export default Sec2;
