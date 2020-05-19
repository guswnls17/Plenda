import React from 'react';
import styled from 'styled-components';
import ContentsTemplate from '../../Template/ContentsTemplate/ContentsTemplate';
import ContentsHeader from '../../../Common/Header/ContentsHeader';

const ContentsBody = styled.div`
  padding: 30px 40px 0 40px;

  @media (max-width: 1000px) {
    padding: 30px 20px 0 20px;
  }
`

const ContentsBox = styled.div`
  background-color: white;
  width: 100%;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

const ProfileImgInput = styled.div`
  & > div {
    & > input {
      display: none;
    }

    & > label {
      cursor: pointer;
      
      & > div {
        background-color: #FFFFFF;
        border: 1.5px dashed #C8C8C8;
        border-radius: 5px;
        width: 100px;
        height: 100px;
      }
    }
  }


`

export default () => {
  return (
    <ContentsTemplate sidebarBoolean={false} bgColor={"#f8f8f8"}>
      <ContentsHeader text={"브랜드"} />
      <ContentsBody>
        <ContentsBox>
          <ProfileImgInput>
            <p>브랜드 이미지</p>
            <div>
              <input id="imgInput" type="file"></input>
              <label for="imgInput">
                <div>

                </div>
              </label>
            </div>
          </ProfileImgInput>
        </ContentsBox>
      </ContentsBody>
    </ContentsTemplate>
  )
}