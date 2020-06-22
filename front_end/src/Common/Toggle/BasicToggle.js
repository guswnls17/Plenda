import React, { useEffect } from 'react';
import styled from 'styled-components';
import useInput from '../Hooks/chackdInput';

const ToggleContainer = styled.div`
  position: relative;
  width: 140px;
  padding: 15px 0;
  border-bottom: 1px solid #c8c8c8;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;

  & > div:nth-child(1) {
    width: 100%;
    
    & > p {
      overflow: hidden;
      text-overflow:ellipsis; 
      white-space:nowrap;
      width: 120px;
      text-align: center;
      padding: 0 10px;
      font-size: 14px;
    }

    & > div {
      margin-left: auto;
      margin-right: 10px;
      margin-top: -6px;
      width: 0px;
      height: 0px;
      border-top: 4px solid black;
      border-bottom: 3px solid transparent;
      border-right: 3px solid transparent;
      border-left: 3px solid  transparent;
    }
  }

  & > div:nth-child(2) {
    z-index: 50;
    display: ${props => props.toggleBoolean ? "block" : "none"};
    position: absolute;
    top: 52px;
    width: 140px;
    max-height: 164px;
    overflow: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    padding: 10px 0;
    background-color: white;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    cursor: pointer;

    &::-webkit-scrollbar { 
      display: none !important; 
    }

    & > div {
      text-align: center;
      width: 140px;
      padding: 10px 0;

      & > p {
        width: 100%;
        height: 100%;
        font-size: 14px;
        color: black;
      }
    }
  }
`

export default ({ data=[], fullText, controlData, type, style, toggleTextState }) => {
  const toggleBoolean = useInput(false);
  const toggleText = useInput(fullText ? fullText : data[0].category);

  const ToggleBooleanHandler = () => {
    toggleBoolean.setValue(!toggleBoolean.value);
  }

  // useEffect(() => {
  //   if(toggleBoolean.value === true) {
  //     document.addEventListener("click", ToggleBooleanHandler)
  //     return () => document.removeEventListener("click", ToggleBooleanHandler);
  //   }
  // })

  useEffect(() => {
    if(type === "time"){
      if(controlData.value.openstore === true) {
        toggleText.setValue("매장운영")
      } else {
        toggleText.setValue("매장휴무")
      }
    }
  })

  return (
    <ToggleContainer toggleBoolean={toggleBoolean.value} onClick={ToggleBooleanHandler} style={style}>
      <div>
        <p>{toggleTextState ? toggleTextState.value : toggleText.value}</p>
        <div></div>
      </div>
      <div>
        {
          fullText &&
            <div onClick={() => {
              toggleText.setValue("전체")}}
            >
              <p>전체</p>
            </div> 
        }
        {
          data.map((item, index)=> {
            return (
              <div key={index} 
                onClick={() => {
                  if(toggleTextState) {
                    toggleTextState.setValue(item.category)
                  } else {
                    toggleText.setValue(item.category)
                  }
                  if(type === "time") {
                    if(item.category === "매장운영"){
                      controlData.setValue({...controlData.value, openstore: true})
                    } else {
                      controlData.setValue({...controlData.value, openstore: false})
                    }
                  }
                }}
              >
                <p>{item.category}</p>
              </div>
            )
          })
        }
      </div>
    </ToggleContainer>
  )
}