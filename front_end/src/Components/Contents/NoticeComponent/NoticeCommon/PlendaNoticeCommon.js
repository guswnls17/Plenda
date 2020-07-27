import React from 'react';
import { useParams } from 'react-router-dom';
import NoticeBord from '../../../../Common/Item/NoticeBord/NoticeBord';

const plendaNoticeData = [
  {
    id: "1",
    title: "결재시스템 점검안내1",
    writer: "플렌다",
    date: new Date()
  },
  {
    id: "2",
    title: "결재시스템 점검안내2 매장 내 안전점검 관련 안내",
    writer: "플렌다",
    date: new Date()
  },
  {
    id: "3",
    title: "결재시스템 점검안내3",
    writer: "플렌다",
    date: new Date()
  },
  {
    id: "4",
    title: "결재시스템 점검안내4",
    writer: "플렌다",
    date: new Date()
  },
  {
    id: "5",
    title: "결재시스템 점검안내5",
    writer: "플렌다",
    date: new Date()
  },
  {
    id: "6",
    title: "결재시스템 점검안내6",
    writer: "플렌다",
    date: new Date()
  }
]

export default () => {
  const params = useParams()

  return (
    <NoticeBord
      link={`/notice/${params.brand}/postplenda`}
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