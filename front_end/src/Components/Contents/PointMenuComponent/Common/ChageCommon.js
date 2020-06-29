import React from 'react';
import NoticeBord from '../../../../Common/Item/NoticeBord/NoticeBord';

const plendaNoticeData = [
  {
    id: "1",
    title: "아메리카노 2000원‣  3000원 인상",
    writer: "신림역점",
    date: new Date()
  },
  {
    id: "2",    
    title: "아메리카노 2000원‣  3000원 인상",
    writer: "신림역점",
    date: new Date()
  },
  {
    id: "3",
    title: "아메리카노 2000원‣  3000원 인상",
    writer: "신림역점",
    date: new Date()
  },
  {
    id: "4",
    title: "아메리카노 2000원‣  3000원 인상",
    writer: "신림역점",
    date: new Date()
  },
  {
    id: "5",
    title: "아메리카노 2000원‣  3000원 인상",
    writer: "신림역점",
    date: new Date()
  },
  {
    id: "6",
    title: "아메리카노 2000원‣  3000원 인상",
    writer: "신림역점",
    date: new Date()
  }
]

const storeData = [
  {
    "category": "서울대입구점"
  },
  {
    "category": "서울대입구점"
  },
  {
    "category": "서울대입구점"
  },
  {
    "category": "서울대입구점"
  },
  {
    "category": "서울대입구점"
  },
  {
    "category": "서울대입구점"
  },
  {
    "category": "서울대입구점"
  },
]

export default () => {
  return (
    <NoticeBord
      link={""}
      data={plendaNoticeData}
      category={[
        {
          type: "title",
          title: "제목",
          data: "title",
          width: "61%",
          minwidth: 240
        },
        {
          type: "text",
          toggleData: storeData,
          title: "지점",
          data: "writer",
          width: "12%",
          minwidth: 100
        },
        {
          type: "date",
          title: "날짜",
          data: "date",
          width: "12%",
          minwidth: 100
        },
        {
          type: "delete",
          title: "상태",
          // data: "date",
          width: "12%",
          minwidth: 100
        }
      ]}
    />
  )
}