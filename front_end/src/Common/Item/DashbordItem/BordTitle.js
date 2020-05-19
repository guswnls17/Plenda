import React from 'react';
import styled from 'styled-components';

const TitleBox = styled.div`
  margin-right: auto;
  padding: 15px 20px;

  & > p {
    font-weight: 300;
    font-size: 12px;
    color: #000000;
  }
`

export default ({ text }) => {
  return (
    <TitleBox style={{border: "none"}}>
      <p>{text}</p>
    </TitleBox>
  )
}