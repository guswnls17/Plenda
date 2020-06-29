import React from 'react';
import styled from 'styled-components';
import BasicToggle from '../../../../Common/Toggle/BasicToggle';
import useInput from '../../../../Common/Hooks/useInput';
import DateInput from '../../../../Common/Input/DateInput';
import moment from 'moment';
import 'moment/locale/ko';
import NoticeBord from '../../../../Common/Item/NoticeBord/NoticeBord';

const Container = styled.div`

`

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  & > div:nth-child(2) {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > div + div {
      margin-left: 20px;
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: -10px;

    & > div:nth-child(2) {
      margin-top: 10px;
      margin-left: 0;
    }
  }
`

const Body = styled.div`
  margin-top: 30px;
`

export default () => {
  const toggleTextState = useInput("전체매장");
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
  const togglePaymentState = useInput("결제상태");
  const togglePaymentMenu = [
    {
      "category": "결제완료"
    },
    {
      "category": "결제취소"
    },
    {
      "category": "수령"
    }
  ]
  const applyDate = useInput({
    start: moment(new Date()).format('YYYY-MM-D'),
    end: moment(new Date()).format('YYYY-MM-D')
  });

  const plendaNoticeData = [
    {
      id: "1",
      date: new Date(),
      writer: "신림역점",
      orderNum: "332045621",
      goods: "아메리카노",
      price: "4,000원",
      state: "결제완료",
    },
    {
      id: "1",
      date: new Date(),
      writer: "신림역점",
      orderNum: "332045621",
      goods: "아메리카노",
      price: "4,000원",
      state: "결제완료",
    },
  ]

  return (
    <Container>
      <Top>
        <DateInput
          // title={"메뉴적용날짜"}
          data={applyDate}
          borderColor={"1px solid #c8c8c8"}
        />
        <div>
          <BasicToggle
            data={optionMenu}
            // style={{width: "60%"}}
            fullText={"전체매장"}
            toggleTextState={toggleTextState}
          />
          <BasicToggle
            data={togglePaymentMenu}
            fullText={"결제상태"}
            // style={{width: "60%"}}
            toggleTextState={togglePaymentState}
          />
        </div>
      </Top>
      <Body>
      <NoticeBord
        link={""}
        data={plendaNoticeData}
        category={[
          {
            type: "date",
            title: "주문일자",
            data: "date",
            width: "16%",
            minwidth: 120
          },
          {
            type: "text",
            title: "매장",
            data: "writer",
            width: "16%",
            minwidth: 120
          },
          {
            type: "text",
            title: "주문번호",
            data: "orderNum",
            width: "16%",
            minwidth: 120
          },
          {
            type: "text",
            title: "상품",
            data: "goods",
            width: "16%",
            minwidth: 120
          },
          {
            type: "text",
            title: "금액",
            data: "price",
            width: "16%",
            minwidth: 120
          },
          {
            type: "text",
            title: "상태",
            data: "state",
            width: "16%",
            minwidth: 120
          },
        ]}
      />
      </Body>
    </Container>
  )
}