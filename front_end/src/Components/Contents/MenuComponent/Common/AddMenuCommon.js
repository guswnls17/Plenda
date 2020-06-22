import React from 'react';
import styled from 'styled-components';
import LineInput from '../../../../Common/Input/LineInput';
import DateInput from '../../../../Common/Input/DateInput';
import useInput from '../../../../Common/Hooks/useInput';
import moment from 'moment';
import 'moment/locale/ko';
import NoticeBord from '../../../../Common/Item/NoticeBord/NoticeBord';

const ContentsBox = styled.div``

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #000000;
  }

  & > div {
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #253245;
    padding: 8px 20px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: #253245;

      & > p {
        color: white;
      }
    }

    & > p {
      font-size: 12px;
    }
  }
`
const Header = styled.div`
  padding: 40px 40px 30px 40px;
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  & > div + div {
    margin-top: 30px;
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

export default ({addCategorymodal, addMenuModal}) => {
  const applyDate = useInput({
    start: moment(new Date()).format('YYYY-MM-D'),
    end: moment(new Date()).format('YYYY-MM-D')
  });

  const categoryData = useInput([
    // {category: "메인"},
    // {category: "음료"},
    // {category: "디저트"},
  ])

  return (
    <ContentsBox>
      <Title style={{paddingBottom: 20}}>
        <p>메뉴판 명 / 적용날짜 등록하기</p>
      </Title>
      <Header>
        <LineInput
          // {...account}
          title={"메뉴판 명"}
          type={"text"}
          placeholder={"메뉴판 이름을 입력해주세요."}
        />
        <DateInput
          title={"메뉴적용날짜"}
          data={applyDate}
        />
      </Header>
      <Title style={{paddingBottom: 10, paddingTop: 30}}>
        <p>상세 메뉴 등록하기</p>
        <div onClick={() => {addCategorymodal.setValue(true)}}>
          <p>카테고리 등록+</p>
        </div>
      </Title>
      <Body>
        <MenuBox>
          { categoryData.value &&
            categoryData.value.map((item, index) => {
              return (
                <p key={index}>{item.category}</p>
              )
            })
          }
          <p style={{fontSize: 13, color: "#c8c8c8"}}>메뉴 카테고리를 추가해주세요.</p>
        </MenuBox>
        <ListBox>
        <NoticeBord
          link={""}
          data={plendaNoticeData}
          page={false}
          button={{
            text: "추가하기",
            onClick: () => addMenuModal.setValue(true),
          }}
          category={[
            {
              type: "text",
              title: "카테고리",
              data: "category",
              width: "12%",
              minwidth: 120
            },
            {
              type: "img",
              title: "이미지",
              data: "img",
              width: "12%",
              minwidth: 120
            },
            {
              type: "text",
              title: "메뉴명",
              data: "menuname",
              width: "12%",
              minwidth: 120
            },
            {
              type: "text",
              title: "가격",
              data: "price",
              width: "12%",
              minwidth: 120
            },
            {
              type: "text",
              title: "설명",
              data: "explanation",
              width: "28%",
              minwidth: 240
            },
            {
              type: "text",
              title: "옵션",
              data: "option",
              width: "12%",
              minwidth: 120
            },
            {
              type: "delete",
              title: "수정",
              // data: "option",
              modify: () => addMenuModal.setValue(true),
              delete: () => {},
              width: "12%",
              minwidth: 120
            }
          ]}
        />
        </ListBox>
      </Body>
    </ContentsBox>
  )
}

