import React from 'react';
import styled from 'styled-components';
import LineInput from '../Input/LineInput';
import BasicToggle from '../Toggle/BasicToggle';
import useInput from '../Hooks/useInput';
import chackdInput from '../Hooks/chackdInput';

import deleteImg from '../Image/delete.png';

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

const ToggleBox = styled.div`
  margin-top: 30px;

  & > div:nth-child(1) {
    & > p {
      font-weight: 300;
      font-size: 12px;
      color: #000000;
    }
  }
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

const LineInputBox = styled.div`
  padding-top: 25px;
`

const Maximum = styled.div`
  & > div:nth-child(1) {
    & > p {
      font-weight: 300;
      font-size: 12px;
      color: #000000;
    }
  }
  & > div:nth-child(2) {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    & > p { 
      margin: 0 20px;
      font-size: 14px;
    }

    & > input {
      width: calc(50% - 27px);
      border: none;
      border-bottom: 1px solid #e8e8e8;
      line-height: 40px;
      padding: 0 20px;
      font-size: 14px;
    }
  }
`

const OptionMenuBox = styled.div`
  margin-top: 25px;

  & > div:nth-child(1) {
    & > p {
      font-weight: 300;
      font-size: 12px;
      color: #000000;
    }
  }

  & > div:nth-child(2) {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > div > input {
      border: none;
      line-height: 30px;
      padding: 0 10px;
      width: 99%;
      font-size: 14px;
    }

    & > div > input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    & > div:nth-child(1) {
      width: calc(50% - 17px);
      height: auto;
      border: 1px solid black;
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 6px;
      width: calc(50% - 17px);
      height: auto;
      border: 1px solid black;
      & > input {
        width: calc(100% - 20px);
      }
      & > p {
        font-size: 14px;
      }
    }
    & > div:nth-child(3){
      margin-left: auto;
      cursor: pointer;

      & > img {
        width: 18px;
        height: 18px;
      }
    }
  }
  & > .addOption {
    margin-top: 10px;
    border: 1px dashed #000000;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & > p {
      font-size: 12px;
      line-height: 17px;
      color: #000000;
    }
  }
`

export default ({ value, setValue, AddOptionClose}) => {
  const toggleTextState = useInput("추가형");
  const optionMenu = [
    {
      "category": "추가형"
    },
    {
      "category": "선택형"
    }
  ]
  const needful = chackdInput(false);

  return (
    <Container>
      <Modal>
        <p>옵션 추가하기</p>
        <p>추가하실 메뉴 옵션 정보를 입력해주세요.</p>
        <ToggleBox>
          <div>
            <p>옵션형태</p>
          </div>
          <BasicToggle
            data={optionMenu}
            // style={{width: "100%"}}
            toggleTextState={toggleTextState}
          />
        </ToggleBox>
        <LineInputBox>
          <LineInput
            type={"text"}
            title={"옵션명"}
            placeholder={"옵션명을 입력해주세요."}
            chackState={toggleTextState.value === "선택형" && {
              state: needful,
              id: "needful",
              text: "필수",
              color: "#888"
            }}
          />
        </LineInputBox>
        {toggleTextState.value === "추가형" &&
          <LineInputBox>
            <Maximum>
              <div>
                <p>최대수량</p>
              </div>
              <div>
                <input type="number" placeholder="최소 수량"/>
                <p>~</p>
                <input type="number" placeholder="최대 수량"/>
              </div>
            </Maximum>
          </LineInputBox>
        }
        <OptionMenuBox>
          <div>
            <p>옵션메뉴</p>
          </div>
          <div>
            <div>
              <input type="text" placeholder="옵션 메뉴 입력"/>
            </div>
            <div>
              <input type="number" placeholder="예) 500"/>
              <p>원</p>
            </div>
            <div>
              <img alt="" src={deleteImg}/>
            </div>
          </div>
          <div className={"addOption"} onClick={() => {}}> 
            <p>옵션메뉴추가+</p>
          </div>
        </OptionMenuBox>
        <Button>
          <div onClick={AddOptionClose}>
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