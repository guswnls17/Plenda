import React from 'react';
import NoticeBord from '../../../../Common/Item/NoticeBord/NoticeBord';

const plendaNoticeData = [
  {
    id: "1",
    title: "아메리카노 2000원‣  3000원 인상",
    writer: "username(매니저)",
    date: new Date()
  },
  {
    id: "2",    
    title: "아메리카노 2000원‣  3000원 인상",
    writer: "username(매니저)",
    date: new Date()
  },
  {
    id: "3",
    title: "아메리카노 2000원‣  3000원 인상",
    writer: "username(매니저)",
    date: new Date()
  },
  {
    id: "4",
    title: "아메리카노 2000원‣  3000원 인상",
    writer: "username(매니저)",
    date: new Date()
  },
  {
    id: "5",
    title: "아메리카노 2000원‣  3000원 인상",
    writer: "username(매니저)",
    date: new Date()
  },
  {
    id: "6",
    title: "아메리카노 2000원‣  3000원 인상",
    writer: "username(매니저)",
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