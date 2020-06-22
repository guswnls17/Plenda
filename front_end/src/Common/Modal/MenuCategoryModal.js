import React from 'react';
import styled from 'styled-components';
import LineInput from '../Input/LineInput';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  position: relative;
  z-index: 200;
  padding: 30px;
  background-color: white;
  border-radius: 5px;
  width: 400px;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: calc(100% - 40px);
  }

  & > p:nth-child(1) {
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #000000;
  }
  & > p:nth-child(2) {
    margin-top: 4px;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
  }

  & > div {
    /* margin-top: 20px; */
  }
`

const BlackBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: black;
  opacity: 0.4;
`

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-top: 20px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #253245;
    border-radius: 4px;
    width: 80px;
    height: 28px;
    background-color: white;
    cursor: pointer;

    &:hover {
      background-color: #253245;

      & > p {
        color: white;
      }
    }

    & + div {
      margin-left: 10px;
    }

    & > p {
      font-size: 12px;
    }
  }
`
export default ({ value, setValue}) => {
  return (
    <Container>
      <Modal>
        <p>카테고리 추가하기</p>
        <p>추가하실 카테고리 이름을 입력해주세요.</p>
        <LineInput
          type={"text"}
          // title={"카테고리"}
          placeholder={"카테고리 이름을 입력해주세요."}
        />
        <Button>
          <div onClick={() => setValue(false)}>
            <p>취소</p>
          </div>
          <div>
            <p>추가</p>
          </div>
        </Button>
      </Modal>
      <BlackBg/>
    </Container>
  )
}