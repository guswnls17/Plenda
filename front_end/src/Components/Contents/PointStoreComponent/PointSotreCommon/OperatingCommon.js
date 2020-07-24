import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ContentsBorad from '../../../../Common/Item/Borad/ContentsBorad';

const Container = styled.div`
  & > div + div {
    margin-top: 20px;
  }
`

export default withRouter(({ match, CloseModalBoolean, operatingData }) => {
  const plendaNoticeData = [
    {
      day: "월요일",
      time: operatingData.hours.length !== 0 ? (operatingData.hours[0].isClosed === "N" ? (operatingData.hours[0].open24 !== "Y" ? `${operatingData.hours[0].startsAt ? operatingData.hours[0].startsAt : "미등록"} ~ ${operatingData.hours[0].endsAt ? operatingData.hours[0].endsAt : "미등록"}` : "24시간 영업") : "휴무일") : "미등록",
      brake: operatingData.hours.length !== 0 ? (operatingData.hours[0].isClosed === "N" ? (operatingData.hours[0].open24 !== "Y" ? `${operatingData.hours[0].breakFrom ? operatingData.hours[0].breakFrom : "미등록"} ~ ${operatingData.hours[0].breakBy ? operatingData.hours[0].breakBy : "미등록"}` : "없음") : "없음" ) : "미등록",
    },
    {
      day: "화요일",
      time: operatingData.hours.length !== 0 ? (operatingData.hours[1].isClosed === "N" ? (operatingData.hours[1].open24 !== "Y" ? `${operatingData.hours[1].startsAt ? operatingData.hours[1].startsAt : "미등록"} ~ ${operatingData.hours[1].endsAt ? operatingData.hours[1].endsAt : "미등록"}` : "24시간 영업") : "휴무일") : "미등록",
      brake: operatingData.hours.length !== 0 ? (operatingData.hours[1].isClosed === "N" ? (operatingData.hours[1].open24 !== "Y" ? `${operatingData.hours[1].breakFrom ? operatingData.hours[1].breakFrom : "미등록"} ~ ${operatingData.hours[1].breakBy ? operatingData.hours[1].breakBy : "미등록"}` : "없음") : "없음" ) : "미등록",
    },
    {
      day: "수요일",
      time: operatingData.hours.length !== 0 ? (operatingData.hours[2].isClosed === "N" ? (operatingData.hours[2].open24 !== "Y" ? `${operatingData.hours[2].startsAt ? operatingData.hours[2].startsAt : "미등록"} ~ ${operatingData.hours[2].endsAt ? operatingData.hours[2].endsAt : "미등록"}` : "24시간 영업") : "휴무일") : "미등록",
      brake: operatingData.hours.length !== 0 ? (operatingData.hours[2].isClosed === "N" ? (operatingData.hours[2].open24 !== "Y" ? `${operatingData.hours[2].breakFrom ? operatingData.hours[2].breakFrom : "미등록"} ~ ${operatingData.hours[2].breakBy ? operatingData.hours[2].breakBy : "미등록"}` : "없음") : "없음" ) : "미등록",
    },
    {
      day: "목요일",
      time: operatingData.hours.length !== 0 ? (operatingData.hours[3].isClosed === "N" ? (operatingData.hours[3].open24 !== "Y" ? `${operatingData.hours[3].startsAt ? operatingData.hours[3].startsAt : "미등록"} ~ ${operatingData.hours[3].endsAt ? operatingData.hours[3].endsAt : "미등록"}` : "24시간 영업") : "휴무일") : "미등록",
      brake: operatingData.hours.length !== 0 ? (operatingData.hours[3].isClosed === "N" ? (operatingData.hours[3].open24 !== "Y" ? `${operatingData.hours[3].breakFrom ? operatingData.hours[3].breakFrom : "미등록"} ~ ${operatingData.hours[3].breakBy ? operatingData.hours[3].breakBy : "미등록"}` : "없음") : "없음" ) : "미등록",
    },
    {
      day: "금요일",
      time: operatingData.hours.length !== 0 ? (operatingData.hours[4].isClosed === "N" ? (operatingData.hours[4].open24 !== "Y" ? `${operatingData.hours[4].startsAt ? operatingData.hours[4].startsAt : "미등록"} ~ ${operatingData.hours[4].endsAt ? operatingData.hours[4].endsAt : "미등록"}` : "24시간 영업") : "휴무일") : "미등록",
      brake: operatingData.hours.length !== 0 ? (operatingData.hours[4].isClosed === "N" ? (operatingData.hours[4].open24 !== "Y" ? `${operatingData.hours[4].breakFrom ? operatingData.hours[4].breakFrom : "미등록"} ~ ${operatingData.hours[4].breakBy ? operatingData.hours[4].breakBy : "미등록"}` : "없음") : "없음" ) : "미등록",
    },
    {
      day: "토요일",
      time: operatingData.hours.length !== 0 ? (operatingData.hours[5].isClosed === "N" ? (operatingData.hours[5].open24 !== "Y" ? `${operatingData.hours[5].startsAt ? operatingData.hours[5].startsAt : "미등록"} ~ ${operatingData.hours[5].endsAt ? operatingData.hours[5].endsAt : "미등록"}` : "24시간 영업") : "휴무일") : "미등록",
      brake: operatingData.hours.length !== 0 ? (operatingData.hours[5].isClosed === "N" ? (operatingData.hours[5].open24 !== "Y" ? `${operatingData.hours[5].breakFrom ? operatingData.hours[5].breakFrom : "미등록"} ~ ${operatingData.hours[5].breakBy ? operatingData.hours[5].breakBy : "미등록"}` : "없음") : "없음" ) : "미등록",
    },
    {
      day: "일요일",
      time: operatingData.hours.length !== 0 ? (operatingData.hours[6].isClosed === "N" ? (operatingData.hours[6].open24 !== "Y" ? `${operatingData.hours[6].startsAt ? operatingData.hours[6].startsAt : "미등록"} ~ ${operatingData.hours[6].endsAt ? operatingData.hours[6].endsAt : "미등록"}` : "24시간 영업") : "휴무일") : "미등록",
      brake: operatingData.hours.length !== 0 ? (operatingData.hours[6].isClosed === "N" ? (operatingData.hours[6].open24 !== "Y" ? `${operatingData.hours[6].breakFrom ? operatingData.hours[6].breakFrom : "미등록"} ~ ${operatingData.hours[6].breakBy ? operatingData.hours[6].breakBy : "미등록"}` : "없음") : "없음" ) : "미등록",
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
          link: `/store/${match.params.brand}/point/operating/${match.params.id}`,
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
          text:"추가하기",
          // link: "/store/point/1/operating",
          onClick:()=>{CloseModalBoolean.setValue(true)},
        }}
      />
    </Container>
  )
})