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

  @media (max-width: 1000px) {
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   height: auto;
   margin: 10px 20px;

   & > div + div {
     margin-top: 20px;
   } 
  }

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
      @media (max-width: 1000px) {
        font-size: 12px;
      }
    }

    & > p:nth-child(1) {
      font-weight: bold;
      font-size: 24px;

      @media (max-width: 1000px) {
        font-size: 18px;
      }
    }
  }
`

const UploadButtonBox = styled.div`
  display: flex;
  flex-direction: row;

  & > div + div {
    margin-left: 10px;
  }
 `

const HeaderBottom = styled.div`
  margin: 0 40px;
  padding-top: 20px;
  border-bottom: 1px solid #cccccc;

  @media (max-width: 1000px) {
    margin: 0 20px;
  }
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
            onClick={LinkButton.onClick}
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