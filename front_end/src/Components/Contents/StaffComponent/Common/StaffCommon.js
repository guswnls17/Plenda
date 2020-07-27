import React from 'react';
import NoticeBord from '../../../../Common/Item/NoticeBord/NoticeBord';
import { useConfirmState } from '../../../../Common/Context/MenuContext';

const plendaNoticeData = [
  {
    id: "1",
    rank: "마스터",
    writer: "본사",
    name: "정현진",
    email: "guswnls17@nate.com",
  },
  {
    id: "2",    
    rank: "마스터",
    writer: "본사",
    name: "정현진",
    email: "guswnls17@nate.com",
  },
  {
    id: "3",
    rank: "매니저",
    writer: "본사",
    name: "정현진",
    email: "guswnls17@nate.com",
  },
  {
    id: "4",
    rank: "매니저",
    writer: "신림역점",
    name: "정현진",
    email: "guswnls17@nate.com",
  },
  {
    id: "5",
    rank: "스태프",
    writer: "신림역점",
    name: "정현진",
    email: "guswnls17@nate.com",
  },
  {
    id: "6",
    rank: "스태프",
    writer: "신림역점",
    name: "정현진",
    email: "guswnls17@nate.com",
  }
]

const storeData = [
  {
    "category": "본사"
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

const rankData = [
  {
    "category": "마스터"
  },
  {
    "category": "매니저"
  },
  {
    "category": "스태프"
  },
]

export default ({ staffSearchState }) => {
  const confirmState = useConfirmState()

  return (
    <NoticeBord
      link={""}
      data={plendaNoticeData}
      category={[
        {
          type: "text",
          toggleData: storeData,
          title: "지점",
          data: "writer",
          width: "18%",
          minwidth: 120
        },
        {
          type: "text",
          toggleData: rankData,
          title: "직급",
          data: "rank",
          width: "18%",
          minwidth: 120
        },
        {
          type: "text",
          title: "이름",
          data: "name",
          width: "18%",
          minwidth: 120
        },
        {
          type: "text",
          title: "이메일",
          data: "email",
          width: "26%",
          minwidth: 240
        },
        {
          type: "delete",
          title: "수정",
          width: "18%",
          minwidth: 120,
          modify: () => {
            staffSearchState.setValue(true)
          },
          delete: () => {
            confirmState.setValue({
              ...confirmState.value, 
              boolean: true,
              title: "",
              text: `username을 정말\n삭제하시겠습니까?`,
              trueOnClick: () => {}
            })
          }
        }
      ]}
    />
  )
}