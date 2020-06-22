import React from 'react';
import styled from 'styled-components';
import OptionToggle from '../../../../Common/Toggle/OptionToggle';
import NoticeBord from '../../../../Common/Item/NoticeBord/NoticeBord';

const ContentsBox = styled.div``

const Header = styled.div`
  padding: 10px 20px 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  & > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    & > p:nth-child(1) {
      font-weight: bold;
      font-size: 20px;
      line-height: 38px;
      color: #000000;
      padding: 0 10px;
    }

    & > p:nth-child(2) {
      padding: 0 10px;
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
    }
  }


  & > div:nth-child(2) {
    margin-left: auto;
  }
`
const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
const MenuBox = styled.div`
  margin-top: 10px;
  width: 250px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  min-height: 40px;
  padding: 20px 0;

  & > p {
    padding: 12px 30px;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: none;
    overflow-x: auto;
    -ms-overflow-style: none;
    padding-right: 100px;

    &::-webkit-scrollbar { 
      display: none !important; 
    }

    & > p {
      padding: 5px 30px;
      word-break: keep-all;
      word-wrap: normal;
    }
  }
`

const ListBox = styled.div`
  margin-top: 10px;
  margin-left: auto;
  width: calc(100% - 260px);
  /* border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  min-height: 40px;
  padding: 20px 0; */

  @media (max-width: 1000px) {
    width: 100%;
  }
`

export default () => {
  const plendaNoticeData = [
    {
      id: "1",
      category: "메인",
      img: "https://www.paris.co.kr/wp-content/uploads/%E1%84%8B%E1%85%A1%E1%84%86%E1%85%A6%E1%84%85%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%82%E1%85%A9-1280x1280.jpg",
      menuname: "아메리카노",
      price: "8000원",
      explanation: "맛있는 아메리카노를 제공합니다.",
      option: "2개"
    },
    {
      id: "1",
      category: "메인",
      img: "https://www.paris.co.kr/wp-content/uploads/%E1%84%8B%E1%85%A1%E1%84%86%E1%85%A6%E1%84%85%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%82%E1%85%A9-1280x1280.jpg",
      menuname: "아메리카노",
      price: "8000원",
      explanation: "맛있는 아메리카노를 제공합니다.",
      option: "2개"
    },
    {
      id: "1",
      category: "메인",
      img: "https://www.paris.co.kr/wp-content/uploads/%E1%84%8B%E1%85%A1%E1%84%86%E1%85%A6%E1%84%85%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%82%E1%85%A9-1280x1280.jpg",
      menuname: "아메리카노",
      price: "8000원",
      explanation: "맛있는 아메리카노를 제공합니다.",
      option: "2개"
    },
  ]

  return (
    <ContentsBox>
      <Header>
        <div>
          <p>5월 가정의달 이벤트 메뉴</p>
          <p>2020. 04 . 22 ~ 2020.08.20 적용중</p>
        </div>
        <OptionToggle
          data={[
            {"category": "수정하기"},
            {"category": "삭제하기"},
          ]}
        />
      </Header>
      <Body>
        <MenuBox>
          <p>메인</p>
          <p>음료</p>
          <p>디저트</p>
        </MenuBox>
        <ListBox>
        <NoticeBord
          link={""}
          data={plendaNoticeData}
          page={false}
          category={[
            {
              type: "text",
              title: "카테고리",
              data: "category",
              width: "13%",
              minwidth: 120
            },
            {
              type: "img",
              title: "이미지",
              data: "img",
              width: "13%",
              minwidth: 120
            },
            {
              type: "text",
              title: "메뉴명",
              data: "menuname",
              width: "13%",
              minwidth: 120
            },
            {
              type: "text",
              title: "가격",
              data: "price",
              width: "13%",
              minwidth: 120
            },
            {
              type: "text",
              title: "설명",
              data: "explanation",
              width: "35%",
              minwidth: 240
            },
            {
              type: "text",
              title: "옵션",
              data: "option",
              width: "13%",
              minwidth: 120
            }
          ]}
        />
        </ListBox>
      </Body>
    </ContentsBox>
  )
}