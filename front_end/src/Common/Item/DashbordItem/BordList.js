import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko'
import BordTitle from './BordTitle';

import modifyImg from '../../Image/modify.png';
import deleteImg from '../../Image/delete.png';

const BordList = styled.div`
  padding: 15px 0;

  & > div {
    border-top: 1px solid #e8e8e8;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    & > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 20px 20px;
      height: 54px;
      overflow: hidden;

      & > p {
        overflow: hidden;
        text-overflow:ellipsis; 
        white-space:nowrap;
      }
    }

    & > .title {
      & > p {
        font-weight: 500;
        font-size: 14px;
        color: #000000;
      }
    }
    & > .text {
      justify-content: center;
      & > p {
        font-family: Noto Sans KR;
        font-size: 12px;
        color: #000000;
      }
    }
    & > .date {
      justify-content: center;
      & > p {
        font-family: Noto Sans KR;
        font-size: 12px;
        font-weight: 300;
        color: #888888;
      }
    }
  }
`

const Delete = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center !important;
  align-items: center;

  & > div {
    width: 18px;
    height: 18px;
    cursor: pointer;
    
    & + div {
      margin-left: 6px;
    }
    & > img {
      width: 18px;
      height: 18px;
    }
  }
`

export default ({ list }) => {
  return (
    <BordList>
    {
        list.title ? 
          <BordTitle style={{border: "none"}} text={list.title}/>
          :
          null
      }
      { list.data.map((data, index) => {
        return (
          <div key={index}>
            { list.category.map((category, index) => {
              return (
                category.type === "title" ? 
                  <div className="title" key={index} style={{width: category.width}}>
                    <p>{data[category.data] != null ? data[category.data] : "미등록"}</p>
                  </div>
                :
                category.type === "text" ? 
                  <div className="text" key={index} style={{width: category.width}}>
                    <p>{data[category.data] != null ? data[category.data] : "미등록"}</p>
                  </div>
                :
                category.type === "date" ? 
                  <div className="date" key={index} style={{width: category.width}}>
                    <p>{data[category.data] === null ? "" : moment(data.date).format('L')}</p>
                  </div>
                :
                category.type === "delete" ? 
                  <Delete key={index} style={{width: category.width, minWidth: category.minwidth }}>
                    <div onClick={category.modify}>
                      <img alt="" src={modifyImg} />
                    </div>
                    <div onClick={category.delete}>
                      <img alt="" src={deleteImg} />
                    </div>
                  </Delete>
                :
                null
              )
            })}
          </div>
        )
      })}
    </BordList>
  )
}