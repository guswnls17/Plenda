import React from 'react';
import styled from 'styled-components';
import LineInput from '../Input/LineInput';

import SearchIcon from '../Image/searchIcon.png'
import ProfileImg from '../../Images/profileImg.png'

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
  margin-top: 30px;

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

const SearchBox = styled.div`

  & > div {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #f8f8f8;
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

export default ({ value, setValue, addStaffState, staffSearchNum}) => {
  return (
    <Container>
      <Modal>
        <p>스태프 검색하기</p>
        <p>스태프로 지정할 사용자의 아이디 or 이메일을 검색해주세요.</p>
        <LineInput
          type={"text"}
          // title={"카테고리"}
          img={SearchIcon}
          placeholder={"스태프 이름 or  이메일을 검색해주세요."}
        />
        <SearchBox>
          <div onClick={() => {
              setValue(false)
              addStaffState.setValue(true)
              staffSearchNum.setValue(1)
            }}
          >
            <div>
              <img alt="" src={ProfileImg} />
            </div>
            <p>UserName</p>
            <p>guswnls17@nate.com</p>
          </div>
          <div>
            <div>
              <img alt="" src={ProfileImg} />
            </div>
            <p>UserName</p>
            <p>guswnls17@nate.com</p>
          </div>
        </SearchBox>
        <Button>
          <div onClick={() => setValue(false)}>
            <p>취소</p>
          </div>
        </Button>
      </Modal>
      <BlackBg/>
    </Container>
  )
}