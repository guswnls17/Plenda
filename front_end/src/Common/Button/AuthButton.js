import React from 'react';
import styled from 'styled-components';

const BasicButton = styled.button`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: 48px;
  background-color: #1DE6BA;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  & > h1 {
    font-size: 16px;
    font-weight: bold;
  }
`

export default ({ text, style, onClick }) => {
  
  return (
    <BasicButton type="submit" style={style} onClick={onClick}>
      <h1>{text}</h1>
    </BasicButton>
  )
}