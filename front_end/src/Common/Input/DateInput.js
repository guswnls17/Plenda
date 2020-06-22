import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import ChackBox from '../ChackBox/ChackBox';
import chackdInput from '../Hooks/chackdInput';

const ContentsBox = styled.div``

const TimeLineItem = styled.div`
  & > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > p {
      /* margin-right: auto; */
      font-weight: 300;
      font-size: 12px;
      color: #000000;
    }

    & > div {
      margin-left: 20px;
    }
  }

  & > div:nth-child(2) {
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
      padding: 0 10px;

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
        padding: 0 10px;
        padding-bottom: 10px;
      }
    }
    & > div:nth-child(3) {
    }
  }
`

export default ({  data, title }) => {
  const infinity = chackdInput(false);

  return (
    <ContentsBox>
      <TimeLineItem>
        <div>
          <p>{title}</p>
          <ChackBox
            {...infinity}
            id={"infinity"}
            text={"시작일로 부터 무기한"}
            color={"#888"}
          />
        </div>
        <div>
          <TextField
            id="start"
            label="Birthday"
            type="date"
            defaultValue={data.value.start}
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              data.setValue({...data.value, start: moment(new Date()).format(e.target.value)})
            }}
          />
          <p>~</p>
          <TextField
            disabled={infinity.value}
            id="end"
            label="Birthday"
            type="date"
            defaultValue={data.value.end}
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              data.setValue({...data.value, end: moment(new Date()).format(e.target.value)})
            }}
          />
        </div>
      </TimeLineItem>
    </ContentsBox>
  )
}