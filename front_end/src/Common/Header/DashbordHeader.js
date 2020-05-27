import React from 'react';
import styled from 'styled-components';
import BasicToggle from '../Toggle/BasicToggle';

const DashbordHeader = styled.div`
  padding: 60px 20px 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  & > p {
    font-weight: 500;
    font-size: 24px;
    color: #000000;
  }

  & > div {
    margin-left: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    & > div + div {
      margin-left: 20px;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;

    & > div {
      margin-left: 0px;
      margin-top: 20px;
    }
  }
`

const storeData = [
  {
    "category": "서울대입구점"
  },
  {
    "category": "서울대입구점"
  },
  {
    "category": "서울대입구점"
  },
  {
    "category": "서울대입구점"
  },
  {
    "category": "서울대입구점"
  },
  {
    "category": "서울대입구점"
  },
  {
    "category": "서울대입구점"
  },
]

const revenueData = [
  {
    "category": "주간"
  },
  {
    "category": "월간"
  },
  {
    "category": "연간"
  },
]

export default ({ text, storeToggle=false, dateToggle=false }) => {

  return (
    <DashbordHeader>
      <p>{text}</p>
      <div>
        { storeToggle && 
          <BasicToggle
            fullText={"전체"}
            data={storeData}
          />
        }
        { dateToggle && 
          <BasicToggle
            fullText={""}
            data={revenueData}
          />
        }
      </div>
    </DashbordHeader>
  )
}