import React from "react";
import styled from "styled-components";
import Sec1 from "./MasterPages/Sec1"; //마스터페이지 각 섹션 나눔
import Sec2 from "./MasterPages/Sec2";
import Sec3 from "./MasterPages/Sec3";
import Sec4 from "./MasterPages/Sec4";
import Sec5 from "./MasterPages/Sec5";

const Wrap = styled.div`
  //  padding-top: 60px;
  display: grid;
  grid-template-rows: repeat(5, 1fr); //총 5개의 섹션이 존재
`;

function Mainpage() {
  return (
    <Wrap>
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
    </Wrap>
  );
}

export default Mainpage;
