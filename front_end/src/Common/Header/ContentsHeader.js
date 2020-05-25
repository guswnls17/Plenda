import React, { memo } from 'react';
import styled from 'styled-components';
import BasicButton from '../Button/BasicButton';
import HeaderNavigation from '../NavMenu/HeaderNavigation';

const ContentsHeader = styled.div`
  
`

const HeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
  height: 80px;
  padding-top: 20px;

  & > div:nth-child(1) {
      margin-right: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

    & > p:nth-child(2), p:nth-child(3) {
      margin-left: 10px;
      margin-top: auto;
      margin-bottom: 1px;
      font-weight: 300;
      font-size: 14px;
    }

    & > p:nth-child(1) {
      font-weight: bold;
      font-size: 24px;
    }
  }
`

const UploadButtonBox = styled.div`
  display: flex;
  flex-direction: row;

  & > div + div {
    margin-left: 20px;
  }
`

const HeaderBottom = styled.div`
  margin: 0 40px;
  padding-top: 20px;
  border-bottom: 1px solid #cccccc;
`

// LinkButton={{
//   text: "",
//   link: ""
// }}

// UploadButton= {{
//   closetext: "",
//   uploadtext: "",
//   closeClick: "",
//   uploadClick: ""
// }} 

export default memo(({ 
  title,
  subTitle,
  UploadButton,
  LinkButton,
  navBarData
}) => {

  return (
    <ContentsHeader>
      <HeaderTop>
        <div>
          <p>{title}</p>
          {subTitle &&
            <>
              <p>›    </p>
              <p>{subTitle}</p>
            </>
          }
        </div>
        { LinkButton &&
          <BasicButton
            text={LinkButton.text}
            link={LinkButton.link}
          />
        }
        { UploadButton && 
          <UploadButtonBox>
            <BasicButton
              text={UploadButton.closetext}
              link={UploadButton.closeClick}
            />
            <BasicButton
              text={UploadButton.uploadtext}
              onClick={UploadButton.uploadClick}
            />
          </UploadButtonBox>
        }
      </HeaderTop>
      <HeaderBottom>
        {navBarData &&
          <HeaderNavigation
            navBarData={navBarData}
          />
        }
      </HeaderBottom>
    </ContentsHeader> 
  )
})