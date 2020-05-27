import React from 'react';
import styled from 'styled-components';
import useInput from '../../../../Common/Hooks/useInput';

const ContentsBox = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px 20px 20px 20px;
`

const TitleBord = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  border-bottom: 1px solid #e8e8e8;
  padding: 20px 0;

  & > div:nth-child(1){
    padding: 0 20px;
    width: 100%;

    & > input {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #000000;
      border: none;
      width: 100%;
    }
  }
`
const TextBord = styled.div`
  padding: 30px 30px 40px 30px;

  & > textarea {
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    /* height: ${props => props.textAreaHeight + "px"}; */
    min-height: 52px;
    color: #000000;
    width: 100%;
    border: none;
    outline: none;
    overflow: hidden;
    resize: none;
  }
`

export default () => {
  const textAreaHeight = useInput(26)

  return (
    <ContentsBox>
      <TitleBord>
        <div>
          <input type="text" placeholder="제목을 입력해주세요." />
          {/* <p>결재시스템 점검안내</p> */}
        </div>
      </TitleBord>
      <TextBord textAreaHeight={textAreaHeight.value}>
        <textarea 
          placeholder="내용을 입력해주세요." 
          onKeyDown={(e) => {
            e.target.style.height = "52px";
            e.target.style.height = e.target.scrollHeight + 26 + "px";
          }}
          onKeyUp={(e) => {
            e.target.style.height = "52px";
            e.target.style.height = e.target.scrollHeight + 26 + "px";
          }}
        />
      </TextBord>
    </ContentsBox>
  )
}