import React from "react";
import styled from "styled-components";

const Wrap = styled.div``;
const FirstSec = styled.section`
  height: 600px;
  border-bottom: 1px solid black;
  background-image: url("https://as2.ftcdn.net/v2/jpg/06/11/40/05/1000_F_611400567_1ylq27TNO5sDGwX1zX9X9c6o4R3GsKjZ.jpg");
  filter: brightness(50%);
  background-repeat: no-repeat;
  background-size: cover;
`;

const SecSec = styled.section`
  height: 700px;
  border-bottom: 1px solid black;
  background-color: green;
`;
const TirdSec = styled.section`
  height: 700px;
  border-bottom: 1px solid black;
`;
function Mainpage() {
  return (
    <Wrap>
      <FirstSec></FirstSec>
      <SecSec></SecSec>
      <TirdSec></TirdSec>
    </Wrap>
  );
}

export default Mainpage;
