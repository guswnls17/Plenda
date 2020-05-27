import React from 'react';
import styled from 'styled-components';

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
    & > p {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #000000;
    }
  }
  & > div:nth-child(2){
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-bottom: 2px;

    & > div {
      padding: 0 20px; 
    }

    & > div:nth-child(1){ 
      & > p {
        font-size: 12px;
        line-height: 18px;
        color: #000000;
      }
    }
    & > div:nth-child(2){
      & > p {
        font-weight: 300;
        font-size: 12px;
        line-height: 18px;
        color: #444444;
      }
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;

    & > div:nth-child(2) {
      margin-left: 0;
      margin-top: 20px;
      padding: 0 22px; 

      & > div {
        padding: 0;

        & + div {
          margin-left: 10px;
        }
      }
    }
  }
`
const TextBord = styled.div`
  padding: 30px 30px 60px 30px;

  & > p {
    white-space:pre;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    color: #000000;
  }
`

export default () => {
  return (
    <ContentsBox>
      <TitleBord>
        <div>
          <p>결재시스템 점검안내</p>
        </div>
        <div>
          <div>
            <p>플렌다</p>
          </div>
          <div>
            <p>2020.04.20</p>
          </div>
        </div>
      </TitleBord>
      <TextBord>
        <p>{"2020.04.30 이후 부터 결재시스템이\n더 좋은 시스템으로 변경될 예정입니다.\n플랜다 고객님들께서는 이점 유의하시기 바랍니다."}</p>
      </TextBord>
    </ContentsBox>
  )
}