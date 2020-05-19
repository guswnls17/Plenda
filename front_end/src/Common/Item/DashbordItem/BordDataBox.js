import React from 'react';
import styled from 'styled-components';
import BordTitle from './BordTitle';


const BorderContents = styled.div`
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  height: 80px;
  background: #F2F2F2;
  border-radius: 4px;

  & > p {
    font-weight: bold;
    font-size: 16px;
    color: #000000;
  }
`

const StaffBox = styled.div`
  padding: 0 20px;
  display: flex;
  flex: row;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  height: 80px;
  background: #F2F2F2;
  border-radius: 4px;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div {
      padding: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 36px;
      height: 36px;
      border-radius: 40px;

      & > p {
        font-weight: bold;
        font-size: 16px;
        color: #FFFFFF;
      }
    }

    & > p {
      margin-top: 8px;
      font-size: 10px;
      color: #000000;
    }

  }
`

export default ({ ContentsData }) => {
  return (
    <BorderContents>
      { ContentsData.map((item, index) => {
        return (
          item.type === "text" ? 
            <div key={index}>
              <BordTitle text={item.title} />
              <ContentsBox>
                <p>{item.data}</p>
              </ContentsBox>
            </div>
          : 
          item.type === "staff" ? 
            <div key={index}>
              <BordTitle text={item.title} />
              <StaffBox>
                <div>
                  <div style={{backgroundColor: "#F2C94C"}}>
                    <p>{item.data.master}</p>
                  </div>
                  <p>Master</p>
                </div>
                <div>
                  <div style={{backgroundColor: "#6FCF97"}}>
                    <p>{item.data.manager}</p>
                  </div>
                  <p>Manager</p>
                </div>
                <div>
                  <div style={{backgroundColor: "#56CCF2"}}>
                    <p>{item.data.staff}</p>
                  </div>
                  <p>Staff</p>
                </div>
              </StaffBox>
            </div>
          : 
          null
        )
      })}
    </BorderContents>
  )
}