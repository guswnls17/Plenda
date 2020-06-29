import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';

import arrow from '../../../Images/arrow.png';
import ContentsBorad from '../../../Common/Item/Borad/ContentsBorad';

const ContentsBody = styled.div`
  padding: 30px 40px;

  @media (max-width: 1000px) {
    padding: 30px 20px;
  }

  & > a {
    display: block;

    & + a {
      margin-top: 10px;
    }

    & + div {
      margin-top: 10px;
    }
  }
`

const SettingButton = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px 30px 20px 30px;
  display: flex;
  flex-direction: row;
  cursor: pointer;

  @media (max-width: 1000px) {
    padding: 20px;
  }

  & > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #000000;
  }

  & > img {
    margin-left: auto;
    height: 16px;
  }
`

export default ({ confirmState }) => {

  return (
    <ContentsTemplate sidebarBoolean={false} >
      <ContentsHeader 
        title={"설정"} 
      />
      <ContentsBody>
        <Link>
          <SettingButton>
            <p>서비스 이용약관</p>
            <img alt="" src={arrow} />
          </SettingButton>
        </Link>
        <Link to="/pwchange">
          <SettingButton>
            <p>비밀번호 변경하기</p>
            <img alt="" src={arrow} />
          </SettingButton>
        </Link>
        <ContentsBorad
          type="delete"
          title={"회원 탈퇴하기"}
          deleteText={{
            text1: "회원탈퇴를 진행할 경우 플렌다의 서비스를 더이상 이용하실 수 없습니다. 또한 현재 회원님이 보유하신 정보가 모두 삭제되며 다시 복구가 되지 않습니다.",
            text2: "그래도 회원탈퇴를 진행하시겠습니까?"
          }}
          button={{
            text: "삭제하기",
            onClick: () => confirmState.setValue(true)
          }}
        />
      </ContentsBody>
    </ContentsTemplate> 
  )
}