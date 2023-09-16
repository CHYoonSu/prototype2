import React from "react";
import styled from "styled-components";
import Mainpage from "./Mainpage";
import HeaderBox from "./HeaderBox";
import GlobalStyles from "./GlobalStyles";
const Wrap = styled.div``;

function App() {
  return (
    <Wrap>
      <GlobalStyles />
      <HeaderBox />
      <Mainpage />
    </Wrap>
  );
}

export default App;
