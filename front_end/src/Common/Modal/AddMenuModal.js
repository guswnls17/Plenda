import React from 'react';
import styled from 'styled-components';
import LineInput from '../Input/LineInput';
import useInput from '../Hooks/useInput';
import ImgInput from '../Input/ImgInput';
import TextLineItem from '../Item/LineItem/TextLineItem';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import ChackBox from '../ChackBox/ChackBox';
import chackdInput from '../Hooks/chackdInput';

import modifyImg from '../Image/modify.png';
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
  width: 480px;
  display: flex;
  flex-direction: column;
  max-height: 80%;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar { 
      display: none !important; 
    }

  @media (max-width: 500px) {
    width: calc(100% - 40px);
  }

  & > div {
    flex-shrink: 0;
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
    margin-top: 20px;
  }

  & > div:nth-child(3) {
    margin-top: 30px;
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
  padding-top: 30px;

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

const TimeLineItem = styled.div`
  & > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
    & > p {
      font-weight: 300;
      font-size: 12px;
      color: #000000;
    }

    & > div {
      margin-left: 20px;
    }
  }

  & > div:nth-child(2) {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    & > p {
      margin: 0 40px;
      margin-top: 12px;
      font-size: 12px;

      @media (max-width: 400px) {
        margin: 0;
        margin-left: 20px;
      }
    }
    & > div {
      width: calc(50% - 45px );
      min-width: 120px;

      @media (max-width: 600px) {
        width: calc(100% - 90px );
      }
      
      & > .MuiInput-underline:before{
        border-bottom: 1px solid #e8e8e8;
      }
      & > .MuiInput-underline:after{
        border-bottom: 2px solid #253245;
      }

      & > label {
        display: none;
      }
      & > div {
        padding: 0 10px;
        padding-bottom: 10px;

        & > input {
          font-size: 16px;
        }
      }
    }
    & > div:nth-child(3) {
    }
  }
`

const Aption = styled.div`
  & > div:nth-child(1) {
    & > p {
      font-weight: 300;
      font-size: 12px;
      color: #000000;
    }
  }

  & > div:nth-child(2) {
    margin-top: 15px;
    padding: 0 10px;

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 2px 10px;

      & > p {
        font-weight: 300;
        font-size: 12px;
        line-height: 17px;
        color: #000000;
      }

      &.optionHeader {
        margin-top: 0;
        padding: 0;

        & > p {
          font-size: 14px;
          line-height: 20px;
          color: #000000;
        }
        & > p:nth-child(1) {
          font-weight: bold;
        } 
        & > p:nth-child(2) {
          font-weight: 300;
        } 
      }

      &.optionItem {
        margin-top: 5px;
        flex-direction: column;
        align-items: flex-start;

        & > p {
          margin-top: 4px;
        }
      }

      &.addOption {
        margin-top: 20px;
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
    }
  }
`

const Delete = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center !important;
  align-items: center;
  margin-left: auto;

  & > div {
    width: 18px;
    height: 18px;
    cursor: pointer;
    
    & + div {
      margin-left: 5px;
    }
    & > img {
      width: 18px;
      height: 18px;
    }
  }
`

export default ({ value, setValue, AddOptionClick}) => {
  const imgData = useInput([
    {
      img: "",
      preView: "",
    }
  ]);
  const usetitme = chackdInput(false);
  const timeData = useInput({
    openstore: true,
    operating: {
      start: moment(new Date()).format('09:00'),
      end: moment(new Date()).format('22:00')
    }
  });
  
  return (
    <Container>
      <Modal>
        <p>메뉴 수정하기</p>
        <p>수정하실 메뉴 정보를 입력해주세요.</p>
        <TextLineItem title={"카테고리"} text={"음료"} type={"text"} />
        <ImgInput
          {...imgData}
          title={"이미지"}
          imgWidth={"80px"}
          imgHeight={"80px"}
        />
        <LineInput
          type={"text"}
          title={"메뉴명"}
          placeholder={"메뉴명을 입력해주세요."}
        />
        <LineInput
          type={"text"}
          title={"가격"}
          placeholder={"메뉴명을 입력해주세요."}
        />
        <LineInput
          type={"textarea"}
          title={"설명"}
          placeholder={"메뉴에 대한 설명을 입력해주세요."}
        />
        <TimeLineItem className={"aaaa"}>
          <div>
            <p>판매시간</p>
            <ChackBox
              {...usetitme}
              id={"usetitme"}
              text={"사용하기"}
              color={"#888"}
            />
          </div>
          <div>
            <TextField
              disabled={!usetitme.value}
              id="time"
              label="Alarm clock"
              type="time"
              defaultValue={timeData.value.operating.start}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              onChange={(e) => {
                timeData.setValue({...timeData.value, operating:{...timeData.value.operating, start: moment(new Date()).format(e.target.value)}})
              }}
            />
            <p>~</p>
            <TextField
              disabled={!usetitme.value}
              id="time"
              label="Alarm clock"
              type="time"
              defaultValue={timeData.value.operating.end}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              onChange={(e) => {
                timeData.setValue({...timeData.value, operating:{...timeData.value.operating, end: moment(new Date()).format(e.target.value)}})
              }}
            />
          </div>
        </TimeLineItem>
        <Aption>
          <div>
            <p>옵션</p>
          </div>
          <div>
            <div className={"optionHeader"}>
              <p>음료 선택 1</p>
              <p>(선택형)</p>
              <p>(필수)</p>
              {/* <p>(추가형)</p>
              <p>(1~3개 선택 가능)</p> */}
              <Delete>
                <div>
                  <img alt="" src={modifyImg} />
                </div>
                <div>
                  <img alt="" src={deleteImg} />
                </div>
              </Delete>
            </div>
            <div className={"optionItem"}>
              <p>• 아메리카노 - 레귤러/핫 | +500원 </p>
              <p>• 아메리카노 - 레귤러/핫 | +500원 </p>
            </div>
            <div className={"addOption"} onClick={AddOptionClick}> 
              <p>옵션추가+</p>
            </div>
          </div>
        </Aption>
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