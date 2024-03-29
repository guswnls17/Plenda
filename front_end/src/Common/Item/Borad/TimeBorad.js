import React, { useEffect } from 'react';
import styled from 'styled-components';
import BasicToggle from '../../../Common/Toggle/BasicToggle';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

const ContentsBox = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px 40px;
  padding-bottom: 40px;

  & > div + div {
    margin-top: 40px;
  }
`

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > p {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }

  & > div {
    margin-left: 60px;
  }
`

const TimeLineItem = styled.div`
  & > p {
    margin-right: auto;
    font-weight: 300;
    font-size: 12px;
    color: #000000;
  }

  & > div {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    & > p {
      margin: 0 40px;
      margin-top: 12px;
      font-size: 12px;

      @media (max-width: 600px) {
        margin: 0;
        margin-left: 20px;
      }
    }
    & > div {
      width: calc(50% - 45px );
      min-width: 200px;

      @media (max-width: 600px) {
        width: calc(100% - 28px );
      }
      
      & > .MuiInput-underline:before{
        border-bottom: 1px solid #e8e8e8;
      }
      & > .MuiInput-underline:after{
        border-bottom: 2px solid #253245;
      }

      & > label {
        display: none;
      }
      & > div {
        padding-bottom: 10px;
      }
    }
    & > div:nth-child(3) {
    }
  }
`

export default ({ title, data, toggle }) => {
  
  useEffect(() => {
    if(!data.value.startsAt){
      data.setValue({...data.value, startsAt: moment(new Date()).format("09:00")})
    }
    if(!data.value.endsAt){
      data.setValue({...data.value, endsAt: moment(new Date()).format("22:00")})
    }
    if(!data.value.breakFrom){
      data.setValue({...data.value, breakFrom: moment(new Date()).format("15:00")})
    }
    if(!data.value.breakBy){
      data.setValue({...data.value, breakBy: moment(new Date()).format("16:00")})
    }
  })

  return (
    <ContentsBox>
      <Top>
        <p>{title}</p>
        <BasicToggle
          type="time"
          fullText={""}
          data={toggle}
          controlData={data}
        />
      </Top>
      <TimeLineItem className={"aaaa"}>
        <p>운영시간</p>
        <div>
          <TextField
            disabled={data.value.isClosed}
            id="time"
            label="Alarm clock"
            type="time"
            // value={data.value.startsAt ? data.value.startsAt : "09:00"}
            defaultValue={data.value.startsAt ? data.value.startsAt : "09:00"}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(e) => {
              data.setValue({...data.value, startsAt: moment(new Date()).format(e.target.value)})
            }}
          />
          <p>~</p>
          <TextField
            disabled={data.value.isClosed}
            id="time"
            label="Alarm clock"
            type="time"
            // value={data.value.endsAt ? data.value.endsAt : "22:00"}
            defaultValue={data.value.endsAt ? data.value.endsAt : "22:00"}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(e) => {
              data.setValue({...data.value, endsAt: moment(new Date()).format(e.target.value)})
            }}
          />
        </div>
      </TimeLineItem>
      <TimeLineItem className={"aaaa"}>
        <p>브레이크타임</p>
        <div>
          <TextField
            disabled={data.value.isClosed}
            id="time"
            label="Alarm clock"
            type="time"
            // value={data.value.breakFrom ? data.value.breakFrom : "14:00"}
            defaultValue={data.value.breakFrom ? data.value.breakFrom : "14:00"}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(e) => {
              data.setValue({...data.value, breakFrom: moment(new Date()).format(e.target.value)})
            }}
          />
          <p>~</p>
          <TextField
            disabled={data.value.isClosed}
            id="time"
            label="Alarm clock"
            type="time"
            // value={data.value.breakBy ? data.value.breakBy : "15:00"}
            defaultValue={data.value.breakBy ? data.value.breakBy : "15:00"}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(e) => {
              data.setValue({...data.value, breakBy: moment(new Date()).format(e.target.value)})
            }}
          />
        </div>
      </TimeLineItem>
    </ContentsBox>
  )
}