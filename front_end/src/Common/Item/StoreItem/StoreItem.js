import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import OptionToggle from '../../Toggle/OptionToggle';
import { useConfirmState } from '../../Context/MenuContext';
import StoreBasicImg from '../../../Images/storeBasicImg.png'

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

  & > a {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

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
        margin-top: 4px;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 17px;
        color: #000000;
      }
    }
  }


  & > div{
    margin-left: auto;
  }
`

export default ({ data, option=true, link, optionClick, storeDelete }) => {
  let params = useParams();
  const confirmState = useConfirmState();

  return (
    <div>
      { data.map((item, index) => {
          return (
            <StoreItem key={index}>
              <Link to={link + item.store_id}>
                <div>
                  <img alt="" src={item.thumbnail ? `http://test.plendar.com/api/image/fetch/thumbnail/${item.thumbnail}` : StoreBasicImg} />
                </div>
                <div>
                  <p>{item.alter_name}</p>
                  <p>{item.role ? item.role : "미등록" }</p>
                  <p>{item.manager}</p>
                </div>
              </Link>
              {option &&
                <div>
                  <OptionToggle
                    data={[
                      {
                        category: "삭제",
                        onClick: () => {
                          try {
                            confirmState.setValue({
                              boolean: true,
                              title: "메뉴판 변경사항",
                              text: "신림역점 매장을\n정말 삭제하시겠습니까?",
                              trueOnClick: async() => {
                                await storeDelete(params.brand, item.store_id)
                                confirmState.setValue({...confirmState, boolean: false})
                              }
                            });
                          } catch(e) {
                            console.log(e);
                            alert(e);
                          }
                        }
                      },
                    ]}
                  />
                </div>
              }
            </StoreItem>
          )
        })
      }
    </div>
  )
}