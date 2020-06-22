import React from 'react';
import NoticeBord from '../../../../Common/Item/NoticeBord/NoticeBord';

const plendaNoticeData = [
  {
    id: "1",
    title: "매장사진 변경",
    writer: "신림역점",
    date: new Date()
  },
  {
    id: "2",    
    title: "매장사진 변경",
    writer: "신림역점",
    date: new Date()
  },
  {
    id: "3",
    title: "매장사진 변경",
    writer: "신림역점",
    date: new Date()
  },
  {
    id: "4",
    title: "매장사진 변경",
    writer: "신림역점",
    date: new Date()
  },
  {
    id: "5",
    title: "매장사진 변경",
    writer: "신림역점",
    date: new Date()
  },
  {
    id: "6",
    title: "매장사진 변경",
    writer: "신림역점",
    date: new Date()
  }
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
          width: "70%",
          minwidth: 240
        },
        {
          type: "text",
          // toggleData: storeData,
          title: "작성자",
          data: "writer",
          width: "15%",
          minwidth: 120
        },
        {
          type: "date",
          title: "날짜",
          data: "date",
          width: "15%",
          minwidth: 120
        }
      ]}
    />
  )
}