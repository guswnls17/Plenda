import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import List from '../../List/List';
import TextLineItem from '../LineItem/TextLineItem';
import ImgLineItem from '../LineItem/ImgLineItem';
// import OptionToggle from '../../Toggle/OptionToggle';
import moment from 'moment';
import 'moment/locale/ko'

const ContentsBox = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;

  /* & > div + div {
    margin-top: 40px;
  } */
`

const Header = styled.div`
  padding: 20px 30px 20px 30px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;

    color: #000000;
  }
  & > a {
    margin-left: auto;
    & > p {
      font-weight: 300;
      font-size: 14px;
      line-height: 23px;
      color: #000000;
    }
  }
`

const Body = styled.div`
  padding: 0 30px;
`

const Button = styled.div`
  margin-left: auto;
  margin-top: 30px;
  margin-right: 10px;
  margin-bottom: 20px;
  width: 100px;
  height: 32px;
  background: #1DE6BA;
  border-radius: 4px;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & > p {
      font-size: 14px;
      color: #253245;
    }
  }
`

const Closed = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #e8e8e8;

  & > div {
    margin-top: 20px;
    margin-left: 20px;
    
    & > p {
      font-size: 14px;
      line-height: 20px;
      color: #000000;
    }
  }
`

const Payment = styled.div`
  padding: 30px 10px 20px 10px;

  & > div + div {
    margin-top: 30px;
  }
`

const ZeroPay = styled.div`
  padding: 30px 10px 20px 10px;
`

const Delete = styled.div`
  padding: 30px 10px 20px 10px;

  & > p {
    font-size: 14px;
    line-height: 20px;
    color: #000000;

    &:nth-child(2) {
      margin-top: 10px;
      font-weight: 500;
    }
  }
`

const Menu = styled.div`
  padding: 30px 10px 20px 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > div:nth-child(1) {
    & > p {
      font-weight: bold;
      font-size: 16px;
      line-height: 23px;
      color: #000000;
    }
    & > div {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      & > p {
        font-weight: 300;
        font-size: 12px;
        line-height: 17px;
        color: #000000;

        & + p {
          margin-left: 5px;
        }
      }
    }
  }

  & > div:nth-child(2) {
    margin-left: auto;
  }
`

export default ({ type, title, data, category, link, button, more }) => {
  return (
    <ContentsBox>
      <Header>
        <p>{title}</p>
        { more &&
          <Link to={more.link}>
            <p>more ›</p>
          </Link>
        }
      </Header>
      <Body>
        { type === "time" &&
            <List
              list={{
                data: data,
                category: category,
                link: link
              }}
            />
        }
        { type === "closed" &&
          <Closed>
            {data.map((item, index) => {
              return (
                <div key={index}><p>{item}</p></div>
              )
            })}
          </Closed>
        }
        { type === "payment" &&
          <Payment>
            <TextLineItem title={"은행명"} text={data.bank} type={"text"} />
            <TextLineItem title={"계좌번호"} text={data.account} type={"text"} />
            <TextLineItem title={"예금주명"} text={data.name} type={"text"} />
          </Payment>
        }
        { type === "zeropay" &&
          <ZeroPay>
            <ImgLineItem
              {...data}
              title={"QR코드"}
              imgWidth={"100px"}
              imgHeight={"100px"}
            />
          </ZeroPay>
        }
        { type === "delete" &&
          <Delete>
            <p>매장 삭제를 진행하는 경우 매장에 관련된 정보가 모두 삭제되며 모든 정보는 복구가 불가능합니다. 재등록 시 모든 정보는 다시 입력하셔야합니다.</p>
            <p>그래도 매장 삭제하기를 진행하시겠습니까?</p>
          </Delete>
        }
        { type === "menu" &&
          <Menu>
            <div>
              <p>{data.value.title}</p>
              <div>
                <p>{moment(data.value.start).format('YYYY.MM.D')}</p>
                <p> ~ </p>
                <p>{moment(data.value.end).format('YYYY.MM.D')}</p>
                <p>
                  { title === "현재 적용중인 메뉴판" && "적용중" }
                  { title === "다음 시즌 적용 메뉴판" && "적용예정" }
                  { title === "시즌 기간이 지나간 메뉴판" && "만료됨" }
                </p>
              </div>
            </div>
            {/* <div>
              <OptionToggle
                data={[
                  {"category": "삭제"},
                ]}
              />
            </div> */}
          </Menu>
        }
        {
          button && 
            <Button onClick={button.onClick}>
              <Link to={button.link}>
                <p>{ button.text ? button.text : "수정" }</p>
              </Link>
            </Button>
        }
      </Body>
    </ContentsBox>
  )
}