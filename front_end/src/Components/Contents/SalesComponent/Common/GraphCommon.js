import React from 'react';
import styled from 'styled-components';
import BordChart from '../../../../Common/Item/DashbordItem/BordChart';
import BasicToggle from '../../../../Common/Toggle/BasicToggle';
import useInput from '../../../../Common/Hooks/useInput';

const Container = styled.div`

`
const Borad = styled.div`
  display: flex;
  flex-direction: row;

  & > div + div {
    margin-left: 30px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    & > div + div {
      margin-left: 0;
      margin-top: 30px;
    }
  }
`
const BoradItem = styled.div`
  background-color: white;
  flex: 1;
  margin-top: 20px;

  & > div.header {
    padding: 20px 20px 15px 20px;
    border-bottom: 1px solid #e8e8e8;

    & > p {
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
    }
  }

  & > div.item {
    padding: 20px 20px 0 20px;

    & > p {
      font-size: 12px;
      line-height: 18px;
      color: #000000;
    }

    & > div {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 60px;
      background-color: #F2F2F2;
      border-radius: 4px;

      & > p {
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #000000;
      }
    }
  }

  & > div:last-child {
    padding-top: 10px;
    padding-bottom: 30px;
  }
`
const Graph = styled.div`
  margin-top: 30px;

  & > div {
    background-color: white;
    padding: 20px;

    @media (max-width: 1000px) {
      padding: 20px 0;
    }
  }
`

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  & > div + div {
    margin-left: 20px;
  }

  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
`

export default () => {
  const toggleTextState = useInput("전체매장");
  const optionMenu = [
    {
      "category": "신림역점"
    },
    {
      "category": "신대방네거리점"
    },
    {
      "category": "강남역점"
    }
  ]
  const toggleDayState = useInput("주간");
  const toggleDayMenu = [
    {
      "category": "주간"
    },
    {
      "category": "월간"
    },
    {
      "category": "연간"
    }
  ]

  return (
    <Container>
      <Top>
        <BasicToggle
          data={optionMenu}
          // style={{width: "60%"}}
          fullText={"전체매장"}
          toggleTextState={toggleTextState}
        />
        <BasicToggle
          data={toggleDayMenu}
          // style={{width: "60%"}}
          toggleTextState={toggleDayState}
        />
      </Top>
      <Borad>
        <BoradItem>
          <div className="header">
            <p>오늘 주문수 및 매출액</p>
          </div>
          <div className="item">
            <p>오늘 총 주문 건수</p>
            <div>
              <p>100,000건</p>
            </div>
          </div>
          <div className="item">
            <p>오늘 총 매출액</p>
            <div>
              <p>100,000,000원</p>
            </div>
          </div>
        </BoradItem>
        <BoradItem>
          <div className="header">
            <p>어제 주문수 및 매출액</p>
          </div>
          <div className="item">
            <p>어제 총 주문 건수</p>
            <div>
              <p>100,000건</p>
            </div>
          </div>
          <div className="item">
            <p>어제 총 매출액</p>
            <div>
              <p>100,000,000원</p>
            </div>
          </div>
        </BoradItem>
        <BoradItem>
          <div className="header">
            <p>이번주 주문수 및 매출액</p>
          </div>
          <div className="item">
            <p>이번주 총 주문 건수</p>
            <div>
              <p>100,000건</p>
            </div>
          </div>
          <div className="item">
            <p>이번주 총 매출액</p>
            <div>
              <p>100,000,000원</p>
            </div>
          </div>
        </BoradItem>
      </Borad>
      <Graph>
        <div>
          <BordChart
            height={400}
          />
        </div>
      </Graph>
    </Container>
  )
}