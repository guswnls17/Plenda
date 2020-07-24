import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';
import ModifyOperatingCommon from './PointSotreCommon/ModifyOperatingCommon';
import useInput from '../../../Common/Hooks/useInput';
import { useDispatch } from 'react-redux';
import { postOperating, getOperating } from '../../../store/modules/store';
import { useAlertState } from '../../../Common/Context/MenuContext';

const ContentsBody = styled.div`
  padding: 30px 60px 0 60px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

export default withRouter(({ match: {params}, history, operatingData }) => {  
  const dispatch = useDispatch()
  const alertState = useAlertState()

  const MonState = useInput(operatingData.hours.length !== 0 ? {...operatingData.hours[0], isClosed: operatingData.hours[0].isClosed === "Y" ? true : false} : {day: "MON", endsAt: "", open24: "N", breakBy: "", isClosed: false, startsAt: "", breakFrom: ""}); 
  const TueState = useInput(operatingData.hours.length !== 0 ? {...operatingData.hours[1], isClosed: operatingData.hours[1].isClosed === "Y" ? true : false} : {day: "TUE", endsAt: "", open24: "N", breakBy: "", isClosed: false, startsAt: "", breakFrom: ""});
  const WedState = useInput(operatingData.hours.length !== 0 ? {...operatingData.hours[2], isClosed: operatingData.hours[2].isClosed === "Y" ? true : false} : {day: "WED", endsAt: "", open24: "N", breakBy: "", isClosed: false, startsAt: "", breakFrom: ""});
  const ThuState = useInput(operatingData.hours.length !== 0 ? {...operatingData.hours[3], isClosed: operatingData.hours[3].isClosed === "Y" ? true : false} : {day: "THU", endsAt: "", open24: "N", breakBy: "", isClosed: false, startsAt: "", breakFrom: ""}); 
  const FriState = useInput(operatingData.hours.length !== 0 ? {...operatingData.hours[4], isClosed: operatingData.hours[4].isClosed === "Y" ? true : false} : {day: "FRI", endsAt: "", open24: "N", breakBy: "", isClosed: false, startsAt: "", breakFrom: ""}); 
  const SatState = useInput(operatingData.hours.length !== 0 ? {...operatingData.hours[5], isClosed: operatingData.hours[5].isClosed === "Y" ? true : false} : {day: "SAT", endsAt: "", open24: "N", breakBy: "", isClosed: false, startsAt: "", breakFrom: ""}); 
  const SunState = useInput(operatingData.hours.length !== 0 ? {...operatingData.hours[6], isClosed: operatingData.hours[6].isClosed === "Y" ? true : false} : {day: "SUN", endsAt: "", open24: "N", breakBy: "", isClosed: false, startsAt: "", breakFrom: ""}); 
  return (
    <ContentsTemplate bgColor={"#f8f8f8"}>
      <ContentsHeader
        title={"매장관리"}
        subTitle={"운영시간 수정하기"} 
        // LinkButton={navBarNum.value === 1 ? {
        //   text: "매장 등록하기",
        //   link: "/store/add"
        // } : ""}
        // navBarData={{
        //   num: navBarNum,
        //   data: [
        //     {
        //       text: "변경사항",
        //       link: "/store"
        //     },
        //     {
        //       text: "매장관리",
        //       link: "/store"
        //     }
        //   ]
        // }}
        UploadButton= {{
          closetext: "취소",
          uploadtext: "등록",
          closeClick: `/store/${params.brand}/point/${params.id}`,
          uploadClick: async() => {
            try {
              const data = await [ 
                {...MonState.value, isClosed: MonState.value.isClosed ? "Y" : "N"},
                {...TueState.value, isClosed: TueState.value.isClosed ? "Y" : "N"},
                {...WedState.value, isClosed: WedState.value.isClosed ? "Y" : "N"},
                {...ThuState.value, isClosed: ThuState.value.isClosed ? "Y" : "N"},
                {...FriState.value, isClosed: FriState.value.isClosed ? "Y" : "N"},
                {...SatState.value, isClosed: SatState.value.isClosed ? "Y" : "N"},
                {...SunState.value, isClosed: SunState.value.isClosed ? "Y" : "N"},
              ];
              const jsonData = await JSON.stringify(data)
              await dispatch(postOperating(params.brand, params.id, jsonData ))
              await dispatch(getOperating(params.brand, params.id))
              return history.push(`/store/${params.brand}/point/${params.id}`);
            } catch(e) {
              alertState.setValue({
                boolean: true, 
                text: e.response.data
              });
              console.log(e)
            }
          }
        }} 
      />
      <ContentsBody>
        <ModifyOperatingCommon
          operatingData={operatingData}
          MonState={MonState}
          TueState={TueState}
          WedState={WedState}
          ThuState={ThuState}
          FriState={FriState}
          SatState={SatState}
          SunState={SunState}
        />
      </ContentsBody>
    </ContentsTemplate>
  )
})