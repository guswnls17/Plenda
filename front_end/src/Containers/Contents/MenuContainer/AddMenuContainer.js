import React from 'react';
import AddMenuComponent from '../../../Components/Contents/MenuComponent/AddMenuComponent';


export default ({ addCategorymodal, addMenuModal }) => {
  return (
    <AddMenuComponent 
      addCategorymodal={addCategorymodal}
      addMenuModal={addMenuModal}
    />
  )
}