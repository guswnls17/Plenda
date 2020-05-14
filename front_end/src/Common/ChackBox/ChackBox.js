import React from 'react';
import styled from 'styled-components';

import Chack from './Chack.svg'

const ChackBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > input {
    display: none;
  }

  & > input:checked + label {
    & > div {
      background-color: #1DE6BA;
    }
    & > p {
      /* font-weight: bold; */
    }
  }

  & > label {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
      background-color: #e8e8e8;
      border-radius: 2px;

      & > img {
        margin-top: 2px;
        width: 12px;
      }
    }
    & > p {
      margin-top: 1px;
      margin-left: 10px;
      font-size: ${props => props.fontWeight ? "13px" : "12px"};
      color: white;
      font-weight: ${props => props.fontWeight ? "500" : "300"};
    }
  }

  & > p {
    margin-left: 14px;
    margin-top: 3px;
    font-size: 10px;
    color: white;
    font-weight: 300;
    text-decoration-line: underline;
    cursor: pointer;
  }
`

export default ({ text, id, onChange, value, style, fontWeight, onClick, view }) => {
  return (
    <ChackBox style={style} fontWeight={fontWeight}>
      <input 
        id={id}
        type="checkbox" 
        onChange={onChange}
        checked={value} 
      />
      <label for={id} onClick={onClick}>
        <div>
          <img alt="" src={Chack} />
        </div>
        <p>{text}</p>
      </label>
      { view &&  <p>자세히보기</p>}
    </ChackBox>
  )
}