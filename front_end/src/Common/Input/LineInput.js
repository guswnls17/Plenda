import React from 'react';
import styled from 'styled-components';
import useInput from '../Hooks/useInput';

const LineInput = styled.div`
  position: relative;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    margin-right: auto;
    font-weight: ${props => props.inputFocus ? `500` : `300`};
    font-size: 12px;
    color: ${props => props.inputFocus ? `#253245` : `#000000`};
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  }

  & > div {
    width: 100%;

    & > input {
      padding: 30px 20px 15px 20px;
      border: none;
      width: 100%;
      font-size: 16px;

      &::placeholder {
        font-size: 14px;
        color: #aaa;
        font-weight: 100;
      }
    }

    & > input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button { 
      -webkit-appearance: none; 
      -moz-appearance: none; 
      appearance: none; 
    } 

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0;
      width: 100%;
      transform: ${props => props.inputFocus ? `scaleX(1)` : `scaleX(0)`};
      transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
      border: 1px solid #253245;
    }
  }
`

export default ({ title, type, onChange, value, placeholder }) => {
  const inputFocus = useInput(false)

  return (
    <LineInput inputFocus={inputFocus.value}>
      <p>{title}</p>
      <div>
        <input
          value={value}
          onChange={onChange}
          type={type} 
          placeholder={placeholder}
          onFocus={() => {inputFocus.setValue(true)}}
          onBlur={() => {inputFocus.setValue(false)}}
        />
      </div>
    </LineInput>
  )
}