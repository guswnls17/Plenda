import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const BoxInput = styled.fieldset`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 10px;
  width:  100%;
  height: 58px;
  border: ${props => props.errState ? "1px solid #EB5757" : "1px solid white"};;
  border-radius: 4px; 
  padding: 0 10px;

  /* @media (max-width: 400px ){
    width: 90%;
  } */

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
    color: ${props => props.errState ? "#EB5757" : "#c8c8c8"};
    transition: top 200ms cubic-bezier(0.0, 0, 0.2, 1), font-size 200ms cubic-bezier(0.0, 0, 0.2, 1);
    z-index: 10;
    font-weight: 300;
  }

  & .active {
    top: 0;
    font-size: 12px;
    width: auto;
    font-weight: 400;
    color: ${props => props.errState ? "#EB5757" : "white"};
  }

  & > input {
    border : 1px solid red;
    position: relative;
    width: 100%;
    height: 84%;
    border: none;
    font-size: 16px;
    color: ${props => props.errState ? "#EB5757" : "white"};
    background-color: transparent;
    z-index: 20;
    padding: 0 10px;
  }
`

const ErrText = styled.div`
  margin-top: ${props => props.errText ? "10px" : 0};
  margin-right: auto;
  & > p {
    font-size: 12px;
    color: #EB5757;
  }
`

export default ({ text, type, onChange, value, style, errState=false, errText }) => {
  const [focusState, setFocusState] = useState(false);

  return (
    <Container>
      <BoxInput focusState={focusState} style={style} errState={errState.value ? errState.value : false}>
        <legend>{focusState ? text : ""}</legend>
        <label htmlFor="input" className={focusState ? "active" : ""}>{text}</label>
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
      {
        errState.value &&
        <ErrText errText={errText}>
          <p>{errText}</p>
        </ErrText>
      }
    </Container>
  )
}