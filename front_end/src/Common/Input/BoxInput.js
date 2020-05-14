import React, { useState } from 'react';
import styled from 'styled-components';

const BoxInput = styled.fieldset`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 10px;
  width:  100%;
  height: 58px;
  border: 1px solid white;
  border-radius: 4px; 
  padding: 0 10px;

  & > legend {
    font-family: "Noto Sans KR", 'Noto Sans', sans-serif;
    height: 12px;
    font-size: 12px;
    padding: ${props => props.focusState ? "0 10px" : "0px"};
    color: transparent;

    transition: ${props => props.focusState ? "max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms" : "max-width 50ms cubic-bezier(0.0, 0, 0.2, 1) 0ms"};
  }

  & > label {
    font-family: "Noto Sans KR", 'Noto Sans', sans-serif;
    position: absolute;
    top: 23px;
    left: 20px;
    width: 80%;
    font-size: 14px;
    color: #c8c8c8;
    transition: top 200ms cubic-bezier(0.0, 0, 0.2, 1), font-size 200ms cubic-bezier(0.0, 0, 0.2, 1);
    z-index: 10;
    font-weight: 300;
  }

  & .active {
    top: 0;
    font-size: 12px;
    width: auto;
    font-weight: 400;
    color: white;
  }

  & > input {
    border : 1px solid red;
    position: relative;
    width: 100%;
    height: 84%;
    border: none;
    font-size: 16px;
    color: white;
    background-color: transparent;
    z-index: 20;
    padding: 0 10px;
  }
`

export default ({ text, type, onChange, value, style }) => {
  const [focusState, setFocusState] = useState(false);

  return (
    <BoxInput focusState={focusState} style={style}>
      <legend>{focusState ? text : ""}</legend>
      <label for="input" className={focusState ? "active" : ""}>{text}</label>
      <input 
        id="input"
        type={type}
        onChange={onChange}
        value={value} 
        onFocus={()=>{
          setFocusState(true)
        }} 
        onBlur={(e) => {
          if(e.target.value !== ""){
            setFocusState(true)
          } else {
            setFocusState(false)
          }
        }}
      />
    </BoxInput>
  )
}