import React from 'react';
import styled from 'styled-components';
import OptionToggle from '../../Toggle/OptionToggle';

const StoreItem = styled.div`
  width: 100%;
  border-radius: 5px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 14px 20px;
  cursor: pointer;

  & + div {
    margin-top: 10px;
  }

  & > div:nth-child(1) {
    width: 80px;
    height: 60px;
    overflow: hidden;
    border-radius: 5px;

    & > img {
      width: 80px;
      height: 60px;
      object-fit: cover;
    }
  }

  & > div:nth-child(2){
    margin-left: 14px;

    & > p:nth-child(1){
      font-size: 16px;
      line-height: 23px;
      font-weight: 500;
      color: #000000;
    }

    & > p:nth-child(2){
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 17px;
      color: #000000;
    }
  }

  & > div:nth-child(3){
    margin-left: auto;
  }
`

export default ({ data }) => {
  return (
    <div>
      { data.map((item, index) => {
          return (
            <StoreItem key={index}>
              <div>
                <img alt="" src={item.img} />
              </div>
              <div>
                <p>{item.store}</p>
                <p>{item.manager}</p>
              </div>
              <div>
                <OptionToggle
                  data={[
                    {"category": "삭제"},
                  ]}
                />
              </div>
            </StoreItem>
          )
        })
      }
    </div>
  )
}