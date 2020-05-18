import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ko'

const Container = styled.div`
  margin: 0 15px;
  min-width: 300px;
`

const Bord = styled.div`
  background: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`

const BordHeader = styled.div`
  padding: 20px 0;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 70px;
    height: 70px;
    top: -20px;
    left: 15px;
    background: ${props => props.iconBoxColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    & > img {
      width: 30px;
    }
  } 

  & > p {
    margin-left: 110px;
    font-weight: bold;
    font-size: 16px;
    color: #000000;
  }

  & > a {
    margin-top: 2px;
    margin-left: auto;
    margin-right: 20px;
    cursor: pointer;

    & > p {
      font-weight: 300;
      font-size: 14px;
      color: #000000;
    }
  }
`

const BordBody = styled.div`

`

const BordList = styled.div`
  padding: 15px 0;

  & > div {
    border-top: 1px solid #e8e8e8;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    & > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 20px 20px;
      height: 54px;
      overflow: hidden;

      & > p {
        overflow: hidden;
        text-overflow:ellipsis; 
        white-space:nowrap;
      }
    }

    & > .title {
      & > p {
        font-weight: 500;
        font-size: 14px;
        color: #000000;
      }
    }
    & > .text {
      justify-content: center;
      & > p {
        font-family: Noto Sans KR;
        font-size: 12px;
        color: #000000;
      }
    }
    & > .date {
      justify-content: center;
      & > p {
        font-family: Noto Sans KR;
        font-size: 12px;
        font-weight: 300;
        color: #888888;
      }
    }
  }
`

const TitleBox = styled.div`
  margin-right: auto;
  padding: 15px 20px;

  & > p {
    font-weight: 300;
    font-size: 12px;
    color: #000000;
  }
`

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

export default ({ 
  style, 
  minHeight=0,
  bordTitle, 
  iconBoxColor, 
  iconBoxImg, 
  data=[], 
  category=[], 
  listTitle, 
  ContentsData=[], 
}) => {

  return (
    <Container style={style}>
      <Bord style={{minHeight: minHeight}}>
        <BordHeader iconBoxColor={iconBoxColor}>
          <div><img alt="" src={iconBoxImg}/></div>
          <p>{bordTitle}</p>
          <Link>
            <p>more ›</p>
          </Link>
        </BordHeader>
        <BordBody>
          <BorderContents>
            { ContentsData.map((item, index) => {
              return (
                item.type === "text" ? 
                  <div key={index}>
                    <TitleBox>
                      <p>{item.title}</p>
                    </TitleBox>
                    <ContentsBox>
                      <p>{item.data}</p>
                    </ContentsBox>
                  </div>
                : 
                item.type === "staff" ? 
                  <div key={index}>
                    <TitleBox>
                      <p>{item.title}</p>
                    </TitleBox>
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
          <BordList>
            {
              listTitle && 
                <TitleBox style={{border: "none"}}>
                  <p>{listTitle}</p>
                </TitleBox>
            }
            { data.map((data, index) => {
              return (
                <div key={index}>
                  { category.map((category, index) => {
                    return (
                      category.type === "title" ? 
                        <div className="title" key={index} style={{width: category.width}}>
                          <p>{data[category.data] != null ? data[category.data] : "미등록"}</p>
                        </div>
                      :
                      category.type === "text" ? 
                        <div className="text" key={index} style={{width: category.width}}>
                          <p>{data[category.data] != null ? data[category.data] : "미등록"}</p>
                        </div>
                      :
                      category.type === "date" ? 
                        <div className="date" key={index} style={{width: category.width}}>
                          <p>{data[category.data] === null ? "" : moment(data.date).format('L')}</p>
                        </div>
                      :
                      null
                    )
                  })}
                </div>
              )
            })}
          </BordList>
        </BordBody>
      </Bord>
    </Container>
  )
}