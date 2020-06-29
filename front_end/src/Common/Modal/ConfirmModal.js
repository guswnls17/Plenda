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

  /* @media (max-width: 500px) {
    width: calc(100% - 40px);
  } */

  & > h1 {
    margin-top: ${props => props.title ? "40px" : 0 };
    font-weight: bold;
    font-size: 16px;
  }
  & > p {
    margin-top: ${props => props.title ? "20px" : "50px" };
    font-size: 14px;
    text-align: center;
    line-height: 22px;
    color: #000000;
    white-space:pre;
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

  & > div:nth-child(1) {
    border-right: 1px solid #eee;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 28px;
    background-color: white;
    width: 50%;

    & + div {
      margin-left: 10px;
    }

    & > p {
      font-size: 14px;
    }
  }
`
export default ({ value, setValue, text, title}) => {
  return (
    <Container>
      <Modal title={title}>
        {title &&
          <h1>{title}</h1>
        }
        <p>{text}</p>
        <Button >
          <div onClick={() => setValue(false)}>
            <p>취소</p>
          </div>
          <div onClick={() => {}}>
            <p>확인</p>
          </div>
        </Button>
      </Modal>
      <BlackBg/>
    </Container>
  )
}