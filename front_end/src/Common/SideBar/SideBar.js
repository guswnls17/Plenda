import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

import InfoIcon from '../../Images/infoIcon.png'

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 240px;
  height: 100vh;
  background-color: #455571;
  transition: margin-left 200ms ease-in-out;
  padding-top: 60px;

  @media (max-width: 1439px) {
    margin-left: ${props => props.sidebar ? "0px" : "-240px"};
    z-index: 200;
    padding-top: 0;
    transition: margin-left 200ms ease-in-out, z-index 400ms ease-in-out, padding-top 400ms ease-in-out;
  }
`

const BrandProfile = styled.div`
  padding: 30px 25px;
  padding-bottom: 20px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > div:nth-child(1) {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    overflow: hidden;

    & > img {
      width: 60px;
      object-fit: cover;
    }
  }

  & > div:nth-child(2) {
    margin-left: 14px;

    & > p:nth-child(1){
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: #FFFFFF;
    }
    & > p:nth-child(2){
      font-weight: 100;
      font-size: 11px;
      line-height: 16px;
      color: #FFFFFF;
    }
    & > p:nth-child(3){
      font-weight: 100;
      font-size: 11px;
      line-height: 16px;
      color: #FFFFFF;
    }
  }
`

const Menu = styled.div``

const Line = styled.div`
  display: flex;
  padding: 15px 0;

  & > div {
    margin-left: auto;
    border-bottom: 0.2px solid #aaa;
    width: calc(100% - 30px);
  }
`

const Item = styled.div`
  
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  & > a {
    padding: 18px 30px;
    padding-right: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > p {
      margin-left: 15px;
      font-size: 15px;
      color: #FFFFFF;
    }
  }

  & > .active {
    background-color: #253245;
  }
`

export default ({ sidebar }) => {

  return (
    <Sidebar sidebar={sidebar}>
      <BrandProfile>
        <div>
          <img alt="" src={"https://modo-phinf.pstatic.net/20190510_79/1557487249108wjhDH_JPEG/mosakOAmIU.jpeg?type=f320_320"} />
        </div>
        <div>
          <p>할리스커피</p>
          <p>본사</p>
          <p>마스터Master</p>
        </div>
      </BrandProfile>
      <Menu>
        <Item>
          <NavLink to={"/infobrand"} activeClassName={"active"}>
            <img alt="" src={InfoIcon} style={{ width: 20, marginTop: 3 }}/>
            <p>브랜드 정보</p>
          </NavLink>
        </Item>
        <Item>
          <NavLink strict to={"/notice"} activeClassName={"active"}>
            <img alt="" src={InfoIcon} style={{ width: 20 }}/>
            <p>공지사항</p>
          </NavLink>
        </Item>
        <Line>
          <div/>
        </Line>
        <Item>
          <NavLink to={"/dashbord"} activeClassName={"active"}>
            <img alt="" src={InfoIcon} style={{ width: 20 }}/>
            <p>대쉬보드</p>
          </NavLink>
        </Item>
        <Item>
          <NavLink to={"/store"} activeClassName={"active"}>
            <img alt="" src={InfoIcon} style={{ width: 20 }}/>
            <p>매장 관리</p>
          </NavLink>
        </Item>
        <Item>
          <NavLink to={"/brandinfo"} activeClassName={"active"}>
            <img alt="" src={InfoIcon} style={{ width: 20 }}/>
            <p>메뉴판 관리</p>
          </NavLink>
        </Item>
        <Item>
          <NavLink to={"/brandinfo"} activeClassName={"active"}>
            <img alt="" src={InfoIcon} style={{ width: 20 }}/>
            <p>스태프 관리</p>
          </NavLink>
        </Item>
        <Item>
          <NavLink to={"/brandinfo"} activeClassName={"active"}>
            <img alt="" src={InfoIcon} style={{ width: 20 }}/>
            <p>매출 관리</p>
          </NavLink>
        </Item>
      </Menu>
    </Sidebar> 
  )
}