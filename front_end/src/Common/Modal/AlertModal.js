import React from 'react';
import styled from 'styled-components';

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
  background-color: white;
  border-radius: 5px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  /* @media (max-width: 500px) {
    width: calc(100% - 40px);
  } */

  & > p {
    margin-top: 50px;
    font-size: 14px;
    text-align: center;
    line-height: 22px;
    color: #000000;
    word-break: break-all;
    word-wrap: break-word;
    white-space: pre-line;
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
  margin-top: 40px;
  padding: 10px;
  border-top: 1px solid #e8e8e8;
  width: 100%;
  cursor: pointer;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 80px;
    height: 28px;
    background-color: white;

    & + div {
      margin-left: 10px;
    }

    & > p {
      font-size: 14px;
    }
  }
`
export default ({ value, setValue, text}) => {
  return (
    <Container>
      <Modal>
        <p>{text}</p>
        <Button onClick={() => setValue(false)}>
          <div>
            <p>확인</p>
          </div>
        </Button>
      </Modal>
      <BlackBg/>
    </Container>
  )
}