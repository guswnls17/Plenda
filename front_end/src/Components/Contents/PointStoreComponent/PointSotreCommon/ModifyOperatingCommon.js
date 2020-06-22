import React from 'react';
import styled from 'styled-components';
import useInput from '../../../../Common/Hooks/chackdInput';
import moment from 'moment';
import TimeBorad from '../../../../Common/Item/Borad/TimeBorad';

const Container = styled.div`

  & > div + div {
    margin-top: 40px;
  }
`

export default ({ data, category, link }) => {
  const toggledata = [
    {
      "category": "매장운영"
    },
    {
      "category": "매장휴무"
    },
  ]

  const Monday = useInput({
    openstore: true,
    operating: {
      start: moment(new Date()).format('09:00'),
      end: moment(new Date()).format('22:00')
    },
    braketime: {
      start: moment(new Date()).format('15:00'),
      end: moment(new Date()).format('17:00')
    }
  });
  const Tuesday = useInput({
    openstore: true,
    operating: {
      start: moment(new Date()).format('09:00'),
      end: moment(new Date()).format('22:00')
    },
    braketime: {
      start: moment(new Date()).format('15:00'),
      end: moment(new Date()).format('17:00')
    }
  });
  const Wednesday = useInput({
    openstore: true,
    operating: {
      start: moment(new Date()).format('09:00'),
      end: moment(new Date()).format('22:00')
    },
    braketime: {
      start: moment(new Date()).format('15:00'),
      end: moment(new Date()).format('17:00')
    }
  });
  const Thursday = useInput({
    openstore: true,
    operating: {
      start: moment(new Date()).format('09:00'),
      end: moment(new Date()).format('22:00')
    },
    braketime: {
      start: moment(new Date()).format('15:00'),
      end: moment(new Date()).format('17:00')
    }
  });
  const Friday = useInput({
    openstore: true,
    operating: {
      start: moment(new Date()).format('09:00'),
      end: moment(new Date()).format('22:00')
    },
    braketime: {
      start: moment(new Date()).format('15:00'),
      end: moment(new Date()).format('17:00')
    }
  });
  const Saturday = useInput({
    openstore: true,
    operating: {
      start: moment(new Date()).format('09:00'),
      end: moment(new Date()).format('22:00')
    },
    braketime: {
      start: moment(new Date()).format('15:00'),
      end: moment(new Date()).format('17:00')
    }
  });
  const Sunday = useInput({
    openstore: true,
    operating: {
      start: moment(new Date()).format('09:00'),
      end: moment(new Date()).format('22:00')
    },
    braketime: {
      start: moment(new Date()).format('15:00'),
      end: moment(new Date()).format('17:00')
    }
  });
  
  return (
    <Container>
      <TimeBorad
        title={"월요일"}
        data={Monday}
        toggle={toggledata}
      />
      <TimeBorad
        title={"화요일"}
        data={Tuesday}
        toggle={toggledata}
      />
      <TimeBorad
        title={"수요일"}
        data={Wednesday}
        toggle={toggledata}
      />
      <TimeBorad
        title={"목요일"}
        data={Thursday}
        toggle={toggledata}
      />
      <TimeBorad
        title={"금요일"}
        data={Friday}
        toggle={toggledata}
      />
      <TimeBorad
        title={"토요일"}
        data={Saturday}
        toggle={toggledata}
      />
      <TimeBorad
        title={"일요일"}
        data={Sunday}
        toggle={toggledata}
      />
    </Container>
  )
}