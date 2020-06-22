import React, { useEffect } from 'react';
import StaffContainer from '../../Containers/Contents/StaffContainer/StaffContainer';
import useInput from '../../Common/Hooks/useInput';
import StaffSearchModal from '../../Common/Modal/StaffSearchModal';
import AddStaffModal from '../../Common/Modal/AddStaffModal';


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
      <StaffContainer staffSearchState={staffSearchState}/>
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