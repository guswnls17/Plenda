import React from 'react';
import styled from 'styled-components';
import useInput from '../Hooks/chackdInput';

const ToggleContainer = styled.div`
  position: relative;
  width: 140px;
  padding: 15px 0;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

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

export default ({ data=[], fullText=true }) => {
  const toggleBoolean = useInput(false);
  const toggleText = useInput(fullText ? "전체" : data[0].category);

  const ToggleBooleanHandler = () => {
    toggleBoolean.setValue(!toggleBoolean.value);
  }

  // useEffect(() => {
  //   if(toggleBoolean.value === true) {
  //     document.addEventListener("click", ToggleBooleanHandler)
  //     return () => document.removeEventListener("click", ToggleBooleanHandler);
  //   }
  // })

  return (
    <ToggleContainer toggleBoolean={toggleBoolean.value} onClick={ToggleBooleanHandler}>
      <div>
        <p>{toggleText.value}</p>
        <div></div>
      </div>
      <div>
        {
          fullText &&
            <div onClick={() => {toggleText.setValue("전체")}}>
              <p>전체</p>
            </div> 
        }
        {
          data.map((item, index)=> {
            return (
              <div key={index} onClick={() => {toggleText.setValue(item.category)}}>
                <p>{item.category}</p>
              </div>
            )
          })
        }
      </div>
    </ToggleContainer>
  )
}