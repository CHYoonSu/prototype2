import React from "react";
import styled from "styled-components";
import Mainpage from "./Mainpage";
import HeaderBox from "./HeaderBox";
import GlobalStyles from "./GlobalStyles";
import FooterBox from "./FooterBox";
//마스터페이지
const Wrap = styled.div`
  font-family: "NanumGothic", "serif";
  background-color: #f8f8f8;
`;

function App() {
  return (
    <Wrap>
      <GlobalStyles />
      <HeaderBox />
      <Mainpage />
      <FooterBox />
    </Wrap>
  );
}

export default App;
