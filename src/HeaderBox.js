import React from "react";
import styled from "styled-components";
const HeaderLine = styled.header`
  position: fixed;
  background-color: white;
  text-align: center;
  width: 100%;
  height: 60px;
`;
function HeaderBox() {
  return <HeaderLine>Header</HeaderLine>;
}

export default HeaderBox;
