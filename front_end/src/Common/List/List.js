import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ko';
import ListToggle from '../Toggle/ListToggle';

import modifyImg from '../Image/modify.png';
import deleteImg from '../Image/delete.png';

const List = styled.div`
  padding: 15px 0;
  padding-top: 10px;
  overflow: auto;
  /* -ms-overflow-style: none;

  &::-webkit-scrollbar { 
    display: none; 
  } */
`

const ItemList = styled.div`
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  & > div, a{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 20px;
  }

  & .title {
    & > p {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
    }
  }
  & .text {
    justify-content: center;
    & > p {
      font-family: Noto Sans KR;
      font-size: 12px;
      line-height: 18px;
      color: #000000;
    }
  }
  & .date {
    justify-content: center;
    & > p {
      font-family: Noto Sans KR;
      font-size: 12px;
      line-height: 18px;
      font-weight: 300;
      color: #888888;
    }
  }
`

const CategoryMenu = styled.div`
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 20px;
      height: 54px;

      & > p {
        font-weight: 600;
        font-size: 14px;
        color: #000000;
      }
    }
`

const ImgContainer = styled.div`
  & > div {
    width: 40px;
    height: 40px;
    background-color: #c8c8c8;
    border-radius: 4px;
    overflow: hidden;

    & > img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }
`

const Delete = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center !important;
  align-items: center;

  & > div {
    width: 20px;
    height: 20px;
    cursor: pointer;
    
    & + div {
      margin-left: 10px;
    }
    & > img {
      width: 20px;
      height: 20px;
    }
  }
`

export default ({ list }) => {
  

  const minWidthHandler = () => {
    let minWidth = 0;
    for (const key in list.category) {
      minWidth = minWidth + list.category[key].minwidth;
    }
    return minWidth
  }

  return (
    <List>
      <CategoryMenu style={{minWidth: minWidthHandler()}}>
        {
          list.category.map((item, index) => {
            return (
              !item.toggleData ? 
                <div key={index} style={{width: item.width, justifyContent: item.type === "title" && "flex-start", minWidth: item.minwidth }}>
                  <p>{item.title}</p>
                </div>
                :
                <div key={index} style={{width: item.width, justifyContent: item.type === "title" && "flex-start", minWidth: item.minwidth }}>
                  <ListToggle
                    fullText={item.title}
                    data={item.toggleData}
                  />
                </div>
            )
          })
        }
      </CategoryMenu>
      { list.data.map((data, index) => {
        return (
          <ItemList key={index} style={{minWidth: minWidthHandler()}}>
            { list.category.map((category, index) => {
              return (
                category.type === "title" ?
                  (list.link ?
                    <Link to={`${list.link}/${data["id"]}` } className="title" key={index} style={{width: category.width, minWidth: category.minwidth}}>
                      <p>{data[category.data] != null ? data[category.data] : "미등록"}</p>
                    </Link>
                    :
                    <div className="title" key={index} style={{width: category.width, minWidth: category.minwidth}}>
                      <p>{data[category.data] != null ? data[category.data] : "미등록"}</p>
                    </div>
                  )
                :
                category.type === "text" ? 
                  <div className="text" key={index} style={{width: category.width, minWidth: category.minwidth }}>
                    <p>{data[category.data] != null ? data[category.data] : "미등록"}</p>
                  </div>
                :
                category.type === "img" ? 
                  <ImgContainer className="text" key={index} style={{width: category.width, minWidth: category.minwidth }}>
                    <div>
                      <img alt="" src={data[category.data] != null ? data[category.data] : "미등록"} />
                    </div>
                  </ImgContainer>
                :
                category.type === "bigtext" ? 
                  <div className="text" key={index} style={{width: category.width, minWidth: category.minwidth }}>
                    <p style={{ fontSize: 14}}>{data[category.data] != null ? data[category.data] : "미등록"}</p>
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
                category.type === "date" ? 
                  <div className="date" key={index} style={{width: category.width, minWidth: category.minwidth }}>
                    <p>{data[category.data] === null ? "" : moment(data.date).format('L')}</p>
                  </div>
                :
                null
              )
            })}
          </ItemList>
        )
      })}
    </List>
  )
}