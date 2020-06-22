import React, { useEffect } from 'react';
import AddMenuContainer from '../../Containers/Contents/MenuContainer/AddMenuContainer';
import MenuCategoryModal from '../../Common/Modal/MenuCategoryModal';
import useInput from '../../Common/Hooks/useInput';
import AddMenuModal from '../../Common/Modal/AddMenuModal';
import OptionAddModal from '../../Common/Modal/OptionAddModal';

export default () => {
  const addCategorymodal = useInput(false)
  const addMenuNum = useInput(0)
  const addMenuModal = useInput(false)

  const AddOptionClick = () => {
    addMenuNum.setValue(1)
  }

  const AddOptionClose = () => {
    addMenuNum.setValue(0)
  }

  useEffect(() => {
    if(addCategorymodal.value || addMenuModal.value) {
      window.document.body.style.overflow = "hidden"
    } else {
      window.document.body.style.overflow = "auto"
    }
  }, [addCategorymodal.value, addMenuModal.value])

  return (
    <>
      <AddMenuContainer addCategorymodal={addCategorymodal} addMenuModal={addMenuModal}/>
      { addCategorymodal.value && 
        <MenuCategoryModal
          {...addCategorymodal}
        />
      }
      { addMenuModal.value && (
          addMenuNum.value === 0 ?
            <AddMenuModal
              {...addMenuModal}
              AddOptionClick={AddOptionClick}
            />
          :
          addMenuNum.value === 1 ?
            <OptionAddModal
              AddOptionClose={AddOptionClose}
            />
          :
          null
        )  
      }
    </>
  )
}