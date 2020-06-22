import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import OptionToggle from '../../Toggle/OptionToggle';
import moment from 'moment';
import 'moment/locale/ko'

const ContentsBox = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  /* & > div + div {
    margin-top: 40px;
  } */
`

const Menu = styled.div`
  padding: 10px 20px 10px 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > a {
    width: 80%;
    & > p {
      font-weight: bold;
      font-size: 16px;
      line-height: 23px;
      color: #000000;
    }
    & > div {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      & > p {
        font-weight: 300;
        font-size: 12px;
        line-height: 17px;
        color: #000000;

        & + p {
          margin-left: 5px;
        }
      }
    }
  }

  & > div:nth-child(2) {
    margin-left: auto;
  }
`

export default ({ type, title, data, category, link, button, more }) => {
  return (
    <ContentsBox>
      <Menu>
        <Link to={link}>
          <p>{data.title}</p>
          <div>
            <p>{moment(data.start).format('YYYY.MM.D')}</p>
            <p> ~ </p>
            <p>{moment(data.end).format('YYYY.MM.D')}</p>
            <p>
              { type === "now" && "적용중" }
              { type === "next" && "적용예정" }
              { type === "end" && "만료됨" }
            </p>
          </div>
        </Link>
        <div>
          <OptionToggle
            data={[
              {"category": "수정하기"},
              {"category": "삭제하기"},
            ]}
          />
        </div>
      </Menu>
    </ContentsBox>
  )
}