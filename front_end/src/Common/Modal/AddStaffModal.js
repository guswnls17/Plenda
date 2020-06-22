import React from 'react';
import styled from 'styled-components';

import ProfileImg from '../../Images/profileImg.png'
import useInput from '../Hooks/useInput';
import BasicToggle from '../Toggle/BasicToggle';

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

  & > div:nth-child(3) {
    margin-top: 10px;
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
  margin-top: 40px;

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

const StaffInfo = styled.div`
  padding-top: 10px;

  & > div:nth-child(1) {
    & > p {
      font-weight: 300;
      font-size: 12px;
      color: #000000;
    }
  }

  & > div:nth-child(2) {
    padding: 18px 10px 15px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
    cursor: pointer;

    & > div {
      width: 30px;
      height: 30px;
      border-radius: 30px;
      overflow: hidden;

      & > img {
        width: 30px;
        height: 30px;
      }
    }

    & > p {
      margin-left: 10px;
      &:nth-child(2){
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
      }
      &:nth-child(3){
        font-weight: 300;
        font-size: 10px;
        line-height: 14px;
        color: #888888;
      }
    }
  }
`

const ToggleBox = styled.div`
  margin-top: 20px;

  & > div:nth-child(1) {
    & > p {
      font-weight: 300;
      font-size: 12px;
      color: #000000;
    }
  }
`

export default ({ value, setValue, staffSearchState, staffSearchNum}) => {
  const toggleTextState = useInput("신림역점");
  const optionMenu = [
    {
      "category": "신림역점"
    },
    {
      "category": "신대방네거리점"
    },
    {
      "category": "강남역점"
    }
  ]
  const toggleRoleState = useInput("마스터");
  const toleToggle = [
    {
      "category": "마스터"
    },
    {
      "category": "매니저"
    },
    {
      "category": "스태프"
    }
  ]

  return (
    <Container>
      <Modal>
        <p>스태프 추가하기</p>
        <p>스태프의 지점 및 역활을 지정해주세요.</p>
        <StaffInfo>
          <div>
            <p>스태프</p>
          </div>
          <div>
            <div>
              <img alt="" src={ProfileImg} />
            </div>
            <p>UserName</p>
            <p>guswnls17@nate.com</p>
          </div>
        </StaffInfo>
        <ToggleBox>
          <div>
            <p>매장선택</p>
          </div>
          <BasicToggle
            data={optionMenu}
            style={{width: "60%"}}
            toggleTextState={toggleTextState}
          />
        </ToggleBox>
        <ToggleBox>
          <div>
            <p>역활선택</p>
          </div>
          <BasicToggle
            data={toleToggle}
            style={{width: "60%"}}
            toggleTextState={toggleRoleState}
          />
        </ToggleBox>
        <Button>
          <div onClick={() => {
              setValue(false)
              staffSearchState.setValue(true)
              staffSearchNum.setValue(0)
            }}
          >
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