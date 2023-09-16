import React from "react";
import styled from "styled-components";
const HeaderLine = styled.header`
  position: fixed;
  background-color: white;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
`;
function HeaderBox() {
  return <HeaderLine></HeaderLine>;
}

export default HeaderBox;
