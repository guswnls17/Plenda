import React from 'react';
import { useParams } from 'react-router-dom';
import NoticeBord from '../../../../Common/Item/NoticeBord/NoticeBord';
import { useConfirmState } from '../../../../Common/Context/MenuContext';

const plendaNoticeData = [
  {
    id: "1",
    title: "브랜드입니다. 점검안내1",
    writer: "할리스커피",
    date: new Date()
  },
  {
    id: "2",    
    title: "브랜드입니다. 점검안내2 매장 내 안전점검 관련 안내",
    writer: "할리스커피",
    date: new Date()
  },
  {
    id: "3",
    title: "브랜드입니다. 점검안내3",
    writer: "할리스커피",
    date: new Date()
  },
  {
    id: "4",
    title: "브랜드입니다. 점검안내4",
    writer: "할리스커피",
    date: new Date()
  },
  {
    id: "5",
    title: "브랜드입니다. 점검안내5",
    writer: "할리스커피",
    date: new Date()
  },
  {
    id: "6",
    title: "브랜드입니다. 점검안내6",
    writer: "할리스커피",
    date: new Date()
  }
]

export default () => {
  const params = useParams()
  const confirmState = useConfirmState()
  
  return (
    <NoticeBord
      link={`/notice/${params.brand}/postbrand`}
      data={plendaNoticeData}
      category={[
        {
          type: "title",
          title: "제목",
          data: "title",
          width: "64%",
          minwidth: 240
        },
        {
          type: "text",
          title: "작성자",
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
          title: "수정",
          width: "12%",
          minwidth: 100,
          modify: () => {},
          delete: () => {
            confirmState.setValue({
              ...confirmState.value, 
              boolean: true,
              title: "",
              text: "해당 공지사항을 \n정말 삭제하시겠습니까?",
              trueOnClick: () => {}
            })
          }
        }
      ]}
    />
  )
}