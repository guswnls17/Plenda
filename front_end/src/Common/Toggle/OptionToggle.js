import React, { useEffect } from 'react';
import styled from 'styled-components';
import useInput from '../Hooks/chackdInput';

const ToggleContainer = styled.div`
  position: relative;
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 40px;
    height: 40px;
    
    & > div {
      width: 3px;
      height: 3px;
      background-color: #444;
      border-radius: 3px;

      & + div {
        margin-top: 4px;
      }
    }
  }

  & > div:nth-child(2) {
    z-index: 50;
    display: ${props => props.toggleBoolean ? "block" : "none"};
    position: absolute;
    top: 60px;
    right: -20px;
    width: 140px;
    max-height: 164px;
    overflow: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    padding: 10px 0;
    background-color: white;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);

    &::-webkit-scrollbar { 
      display: none !important; 
    }

    & > div {
      text-align: center;
      width: 140px;
      padding: 10px 0;
      cursor: pointer;

      & > p {
        width: 100%;
        height: 100%;
        font-size: 14px;
        color: black;
      }
    }
  }
`

export default ({ data=[] }) => {
  const toggleBoolean = useInput(false);

  const ToggleBooleanHandler = () => {
    toggleBoolean.setValue(!toggleBoolean.value);
  }

  useEffect(() => {
    if(toggleBoolean.value === true) {
      document.addEventListener("click", ToggleBooleanHandler)
      return () => document.removeEventListener("click", ToggleBooleanHandler);
    }
  })

  return (
    <ToggleContainer toggleBoolean={toggleBoolean.value} onClick={ToggleBooleanHandler}>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        {
          data.map((item, index)=> {
            return (
              <div key={index} onClick={item.onClick}>
                <p>{item.category}</p>
              </div>
            )
          })
        }
      </div>
    </ToggleContainer>
  )
}