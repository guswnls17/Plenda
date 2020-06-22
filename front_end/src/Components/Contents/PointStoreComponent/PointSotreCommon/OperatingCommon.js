import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ContentsBorad from '../../../../Common/Item/Borad/ContentsBorad';

const Container = styled.div`
  & > div + div {
    margin-top: 20px;
  }
`

export default withRouter(({ match }) => {
  const plendaNoticeData = [
    {
      day: "월요일",
      time: "10:00 AM ~ 02:00 AM",
      brake: "02:00 PM ~ 04:00 PM",
    },
    {
      day: "월요일",
      time: "10:00 AM ~ 02:00 AM",
      brake: "02:00 PM ~ 04:00 PM",
    },
    {
      day: "월요일",
      time: "10:00 AM ~ 02:00 AM",
      brake: "02:00 PM ~ 04:00 PM",
    },
    {
      day: "월요일",
      time: "10:00 AM ~ 02:00 AM",
      brake: "02:00 PM ~ 04:00 PM",
    },
    {
      day: "월요일",
      time: "10:00 AM ~ 02:00 AM",
      brake: "02:00 PM ~ 04:00 PM",
    },
    {
      day: "월요일",
      time: "10:00 AM ~ 02:00 AM",
      brake: "02:00 PM ~ 04:00 PM",
    },
    {
      day: "월요일",
      time: "10:00 AM ~ 02:00 AM",
      brake: "02:00 PM ~ 04:00 PM",
    },
    {
      day: "월요일",
      time: "10:00 AM ~ 02:00 AM",
      brake: "02:00 PM ~ 04:00 PM",
    },
  ]

  return (
    <Container>
      <ContentsBorad
        title={"운영시간"}
        type={"time"}
        data={plendaNoticeData}
        button={{
          // text:"삭제하기",
          link: `/store/point/operating/${match.params.id}`,
          onClick:()=>{},
        }}
        category={[
          {
            type: "bigtext",
            title: "일시",
            data: "day",
            width: "33%",
            minwidth: 160
          },
          {
            type: "bigtext",
            title: "운영시간",
            data: "time",
            width: "33%",
            minwidth: 240
          },
          {
            type: "bigtext",
            title: "브레이크타임",
            data: "brake",
            width: "33%",
            minwidth: 240
          }
        ]}
      />
      <ContentsBorad
        title={"임시휴무일"}
        type={"closed"}
        data={["2020.06.11(목요일) ~ 2020.06.20(화요일)", "2020.06.11(목요일) ~ 2020.06.20(화요일)", "2020.06.11(목요일) ~ 2020.06.20(화요일)"]}
        button={{
          // text:"삭제하기",
          link: "/store/point/1/operating",
          onClick:()=>{},
        }}
      />
    </Container>
  )
})