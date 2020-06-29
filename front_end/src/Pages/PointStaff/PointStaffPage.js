import React, { useEffect } from 'react';
import PointStaffContainer from '../../Containers/Contents/PointStaffContainer/PointStaffContainer';
import StaffSearchModal from '../../Common/Modal/StaffSearchModal';
import AddStaffModal from '../../Common/Modal/AddStaffModal';
import useInput from '../../Common/Hooks/useInput';


export default () => {
  const staffSearchState = useInput(false)
  const addStaffState = useInput(false)
  const staffSearchNum = useInput(0)

  useEffect(() => {
    if(staffSearchState.value) {
      window.document.body.style.overflow = "hidden"
    } else {
      window.document.body.style.overflow = "auto"
    }
  }, [staffSearchState.value])

  return (
    <>
      <PointStaffContainer 
        staffSearchState={staffSearchState}
      />
      {staffSearchState.value && staffSearchNum.value === 0 && 
        <StaffSearchModal
          {...staffSearchState}
          addStaffState={addStaffState}
          staffSearchNum={staffSearchNum}
        />
      }
      {addStaffState.value && staffSearchNum.value === 1 && 
        <AddStaffModal
          {...addStaffState}
          staffSearchState={staffSearchState}
          staffSearchNum={staffSearchNum}
        />
      }
    </>
  )
}