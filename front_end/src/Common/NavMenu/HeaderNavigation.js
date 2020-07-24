import React, { memo } from 'react';
import styled from 'styled-components';

const HeaderNavigation = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
  overflow: hidden;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
      display: none;
  }

  &::after{
    content: "";
    position: absolute;
    bottom: -1px;
    left: ${props => props.navBarNum * 140 + "px"};
    width: 140px;
    border: 1px solid black;
    transition: left 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;

    @media (max-width: 1000px) {
      width: 120px;
      left: ${props => props.navBarNum * 120 + "px"};
    }
  }

  & > div {

    & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    padding: 10px;
    cursor: pointer;

      & > p {
        font-size: 16px;
        text-align: center;
        color: #000000;
      }

      @media (max-width: 1000px) {
        width: 120px;

        & > p {
          font-size: 14px;
        }
      }
    }
  }
`

export default memo(({ navBarData }) => {

  return (
    <HeaderNavigation navBarNum={navBarData.num.value}>
      {
        navBarData.data.map((item, index) => {
          return (
            <div 
              key={index} 
              onClick={() => {
                navBarData.num.setValue(index)
              }}
            >
              <div>
                <p style={{fontWeight: navBarData.num.value === index ? 500 : 100}}>{item.text}</p>
              </div>
            </div>
          )
        })
      }
    </HeaderNavigation>
  )
})