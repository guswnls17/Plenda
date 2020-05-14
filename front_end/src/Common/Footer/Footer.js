import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background: ${props => props.backgroundColor ? "#253245" : "rgba(255, 255, 255, 0.05)"};
  padding: 0 40px;

  & > p {
    font-size: 12px;
    color: #e8e8e8;
      font-weight: 300;

    & > span {
      font-weight: 500;
    }

    &:nth-child(1){
      margin-right: auto;
    }
    &:nth-child(2){
      margin-left: auto;
    }
  }

  @media (max-width: 1000px) {
    height: auto;
    position: relative;
    flex-direction: column;
    padding: 30px 40px;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 0;

    & > p {
      line-height: 20px;
      &:nth-child(1){
        margin-right: 0;
      }
      &:nth-child(2){
        margin-left: 0;
      }
    }
  }
`

export default ({ backgroundColor }) => {
  return (
    <Footer backgroundColor={backgroundColor}>
      {/* <p><span>PLENDA INFO</span>&nbsp;&nbsp;&nbsp;Adress: 서울시 강남구 테헤란로 477LD-B2-101&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Tel: 070-7633-5225&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Email: contact@plendar.com</p> */}
      <p><span>PLENDA INFO</span></p><br/>
      <p>Adress: 서울시 강남구 테헤란로 477LD-B2-101</p>
      <p>Tel: 070-7633-5225</p>
      <p>Email: contact@plendar.com</p><br/><br/>
      <p>PLENDAR Inc. All right Reserved.</p>
    </Footer>
  )
}