import React from 'react';
import styled from 'styled-components';
import nullDataImg from '../../../Images/nullDataImg.png';

const NullContainer = styled.div`
  padding-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > img {
    object-fit: cover;
    width: 180px;
  }

  & > p {
    margin-top: 20px;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    font-weight: 300;
    color: #000000;
    white-space:pre;
  }
`

export default ({ text }) => {
  return (
    <NullContainer>
      <img alt="" src={nullDataImg} />
      <p>{text}</p>
    </NullContainer>    
  )
}