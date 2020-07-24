import React from 'react';
import styled from 'styled-components';
import TimeBorad from '../../../../Common/Item/Borad/TimeBorad';

const Container = styled.div`

  & > div + div {
    margin-top: 40px;
  }
`

export default ({ 
  MonState,
  TueState,
  WedState,
  ThuState,
  FriState,
  SatState,
  SunState
}) => {

  const toggledata = [
    {
      "category": "매장운영"
    },
    {
      "category": "매장휴무"
    },
  ]
  
  return (
    <Container>
      <TimeBorad
        title={"월요일"}
        data={MonState}
        toggle={toggledata}
      />
      <TimeBorad
        title={"화요일"}
        data={TueState}
        toggle={toggledata}
      />
      <TimeBorad
        title={"수요일"}
        data={WedState}
        toggle={toggledata}
      />
      <TimeBorad
        title={"목요일"}
        data={ThuState}
        toggle={toggledata}
      />
      <TimeBorad
        title={"금요일"}
        data={FriState}
        toggle={toggledata}
      />
      <TimeBorad
        title={"토요일"}
        data={SatState}
        toggle={toggledata}
      />
      <TimeBorad
        title={"일요일"}
        data={SunState}
        toggle={toggledata}
      />
    </Container>
  )
}