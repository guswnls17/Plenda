import React from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
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
  padding: 30px 0;
  background-color: white;
  border-radius: 5px;
  width: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar { 
    display: none !important; 
  }

  & > div:nth-child(3) {
    position: relative;
    padding: 0 30px;
  } 

  @media (max-width: 600px) {
    width: calc(100% - 40px);

    & > div:nth-child(3) {
      margin-top: 10px;
      padding: 0;
    }
  }

  & > p:nth-child(1) {
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #000000;
    padding: 0 30px;
  }
  & > p:nth-child(2) {
    margin-top: 4px;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    padding: 0 30px;
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
  margin-top: 30px;
  padding: 0 30px;

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
export default ({ value, setValue, adress, basicAdress, detailAdress, adressModalNum}) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    basicAdress.setValue(fullAddress)
    adressModalNum.setValue(1)
    console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }
  
  return (
    <Container>
      {
        adressModalNum.value === 0 &&
        <Modal>
          <p>주소찾기</p>
          <p>찾으실 주소를 입력해주세요.</p>
          <div>
            <DaumPostcode
              onComplete={handleComplete}
              style={{marginTop: 10, overflow: "hidden"}}
            />
          </div>
          <Button>
            <div onClick={() => setValue(false)}>
              <p>취소</p>
            </div>
          </Button>
        </Modal>
      }
      {
        adressModalNum.value === 1 &&
        <Modal>
          <p>상세주소 입력하기</p>
          <p>{"주소: " + basicAdress.value}</p>
          <div>
            <LineInput
              {...detailAdress}
              type={"text"}
              // title={}
              placeholder={"상세주소를 입력해주세요."}
            />
          </div>
          <Button>
            <div onClick={() => adressModalNum.setValue(0)}>
              <p>취소</p>
            </div>
            <div onClick={async() => {
              await setValue(false)
              await adressModalNum.setValue(0)
              await adress.setValue(basicAdress.value + " " + detailAdress.value)
              await basicAdress.setValue("")
              await detailAdress.setValue("")
            }}>
              <p>확인</p>
            </div>
          </Button>
        </Modal>
      }
      <BlackBg/>
    </Container>
  )
}