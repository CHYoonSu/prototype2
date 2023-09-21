import React from "react";
import styled from "styled-components";

const HeaderLine = styled.header`
  position: fixed;
  background-color: white;
  text-align: center;
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 10px 0px gray;
`;
const LayOutBox = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 0;
  height: 60px;
`;
////////////////////////////////Logo
const LogBox = styled.a`
  grid-column: 1/2;
  height: 60px;
  border: 1px solid black;
`;
const LogoImg = styled.img`
  height: 60px;
  width: auto;
  object-fit: cover;
`;
///////////////////////////////////Menu
const MenuBox = styled.ul`
  display: block;
  grid-column: 2/5;
  height: 60px;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;

const BlandBox = styled.li`
  //브랜드소개
  display: block;
  flex-grow: 1;
`;
const AppBox = styled.li`
  //신청하기
  display: block;
  flex-grow: 1;
`;
const QnABox = styled.li`
  //QnA
  display: block;
  flex-grow: 1;
`;
const ReviewBox = styled.li`
  //후기
  display: block;
  flex-grow: 1;
`;
///////////////////////////////////Blank
const BlankBox = styled.div`
  height: 60px;
  border: 1px solid black;
  grid-column: 5/8;
`;
///////////////////////////////Login
const LoginBox = styled.div`
  height: 60px;
  border: 1px solid black;
  grid-column: 8/-1;
`;
const ImeA = styled.a`
  color: black;
`;
function HeaderBox() {
  return (
    <HeaderLine>
      <LayOutBox>
        <LogBox>
          <LogoImg
            src="https://cdn.pixabay.com/photo/2016/06/28/13/51/dog-1484728_640.png"
            alt="LOGO"
          ></LogoImg>
        </LogBox>
        <MenuBox>
          <BlandBox>
            <ImeA href="./BlandPage.js">
              <span>브랜드</span>
            </ImeA>
          </BlandBox>
          <AppBox>
            <ImeA href="./ApplicationPage.js">
              <span>신청하기</span>
            </ImeA>
          </AppBox>
          <QnABox>
            <ImeA href="./QnAPage.js" target="_blank">
              <span>QnA</span>
            </ImeA>
          </QnABox>
          <ReviewBox>
            <ImeA href="./ReviewPage.js">
              <span>후기</span>
            </ImeA>
          </ReviewBox>
        </MenuBox>
        <BlankBox></BlankBox>
        <LoginBox>Login</LoginBox>
      </LayOutBox>
    </HeaderLine>
  );
}

export default HeaderBox;
