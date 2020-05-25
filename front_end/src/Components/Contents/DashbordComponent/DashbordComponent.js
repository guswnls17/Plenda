import React from 'react';
import styled from 'styled-components';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import DashbordHeader from '../../../Common/Header/DashbordHeader';
import DashbordItem from '../../../Common/Item/DashbordItem/DashbordItem';

import NoticeIcon from '../../../Images/noticeIcon.png'

const ContentsBody = styled.div`
  padding: 0 40px;
  width: 100%;

  @media (max-width: 600px) {
    padding: 0;
  }
`

const DashbordItemBox = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;

    & > div + div {
      margin-top: 50px;
    }
  }
`

export default () => {

  const plendaNoticeData = [
    {
      title: "결재시스템 점검안내1",
      writer: "플렌다",
      date: new Date()
    },
    {
      title: "결재시스템 점검안내2 매장 내 안전점검 관련 안내",
      writer: "플렌다",
      date: new Date()
    },
    {
      title: "결재시스템 점검안내3",
      writer: "플렌다",
      date: new Date()
    },
    {
      title: "결재시스템 점검안내4",
      writer: "플렌다",
      date: new Date()
    },
    {
      title: "결재시스템 점검안내5",
      writer: "플렌다",
      date: new Date()
    },
    {
      title: "결재시스템 점검안내6",
      writer: "플렌다",
      date: new Date()
    },
  ]

  const BrandNoticeData = [
    {
      title: "여름 메뉴 이벤트관련 안내",
      writer: "할리스커피",
      date: new Date()
    },
    {
      title: "매장 내 안전점검 관련 안내",
      writer: "할리스커피",
      date: new Date()
    },
    {
      title: "매니저 교육 일시 및 장소 안내",
      writer: "할리스커피",
      date: new Date()
    },
  ]

  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsBody>
        <DashbordItemBox style={{marginTop: 60}}>
          <DashbordItem
            style={{flex: 1}}
            minHeight={362}
            bordHeader={{
              title: "플렌다 공지사항",
              iconBoxColor: "#F2C94C",
              iconBoxImg: NoticeIcon
            }}
            list={{
              title: "",
              data: plendaNoticeData.slice(0, 5),
              category: [
                {
                  type: "title",
                  data: "title",
                  width: "50%"
                },
                {
                  type: "text",
                  data: "writer",
                  width: "25%"
                },
                {
                  type: "date",
                  data: "date",
                  width: "25%"
                }
              ]
            }}
          />
          <DashbordItem 
            style={{flex: 1}}
            minHeight={362}
            bordHeader={{
              title: "브랜드 공지사항",
              iconBoxColor: "#6FCF97",
              iconBoxImg: NoticeIcon
            }}
            list={{
              title: "",
              data: BrandNoticeData.slice(0, 5),
              category: [
                {
                  type: "title",
                  data: "title",
                  width: "50%"
                },
                {
                  type: "text",
                  data: "writer",
                  width: "25%"
                },
                {
                  type: "date",
                  data: "date",
                  width: "25%"
                }
              ]
            }}
          />
        </DashbordItemBox>

        {/* 두번째 대쉬보드 라인 */}
        <DashbordHeader
          text={"매장관리"}
          storeToggle={true}
          dateToggle={false}
        />
        <DashbordItemBox style={{marginTop: 60}}>
          <DashbordItem 
            style={{flex: 1}}
            minHeight={415}
            bordHeader={{
              title: "매장정보 변경사항",
              iconBoxColor: "#56CCF2",
              iconBoxImg: NoticeIcon
            }}
            list={{
              title: "",
              data: plendaNoticeData.slice(0, 6),
              category: [
                {
                  type: "title",
                  data: "title",
                  width: "50%"
                },
                {
                  type: "text",
                  data: "writer",
                  width: "25%"
                },
                {
                  type: "date",
                  data: "date",
                  width: "25%"
                }
              ]
            }}
          />
          <DashbordItem 
            style={{flex: 1}}
            minHeight={415}
            bordHeader={{
              title: "적용중인 메뉴판",
              iconBoxColor: "#F2C94C",
              iconBoxImg: NoticeIcon
            }}
            ContentsData={[
              {
                type: "text",
                title: "현재 적용중인 메뉴판",
                data: "2019 가을 메뉴"
              }
            ]}
            list={{
              title: "메뉴판 변경사항",
              data: plendaNoticeData.slice(0, 3),
              category: [
                {
                  type: "title",
                  data: "title",
                  width: "50%"
                },
                {
                  type: "text",
                  data: "writer",
                  width: "25%"
                },
                {
                  type: "date",
                  data: "date",
                  width: "25%"
                }
              ]
            }}
          />
          <DashbordItem 
            style={{flex: 1}}
            minHeight={415}
            bordHeader={{
              title: "스태프 관리",
              iconBoxColor: "#6FCF97",
              iconBoxImg: NoticeIcon
            }}
            ContentsData={[
              {
                type: "staff",
                title: "스태프 현황",
                data: {master: 3, manager: 2, staff: 5}
              }
            ]}
            list={{
              title: "스태프 변경사항",
              data: BrandNoticeData.slice(0, 3),
              category: [
                {
                  type: "title",
                  data: "title",
                  width: "50%"
                },
                {
                  type: "text",
                  data: "writer",
                  width: "25%"
                },
                {
                  type: "date",
                  data: "date",
                  width: "25%"
                }
              ]
            }}
          />
        </DashbordItemBox>

        {/* 세번째 대쉬보드 라인 */}
        <DashbordHeader
          text={"매출관리"}
          storeToggle={true}
          dateToggle={true}
        />
        <DashbordItemBox style={{marginTop: 60}}>
          <DashbordItem 
            style={{flex: 3}}
            minHeight={415}
            bordHeader={{
              title: "매출관리 그래프",
              iconBoxColor: "#6FCF97",
              iconBoxImg: NoticeIcon
            }}
            chartBoolean={true}
          />
          <DashbordItem 
            style={{flex: 2}}
            minHeight={415}
            bordHeader={{
              title: "매출현황요약",
              iconBoxColor: "#F2C94C",
              iconBoxImg: NoticeIcon
            }}
            ContentsData={[
              {
                type: "text",
                title: "주간 총 주문건수",
                data: "100,000 건"
              },
              {
                type: "text",
                title: "주간 총 매출액",
                data: "100,00,000 원"
              }
            ]}
          />
        </DashbordItemBox>
      </ContentsBody>
    </ContentsTemplate> 
  )
}