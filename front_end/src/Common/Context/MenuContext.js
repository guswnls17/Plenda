import React, { createContext, useContext } from "react";
import useInput from "../Hooks/useInput";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const NoticeNavNum = useInput(0);
  const StoreNavNum = useInput(0);

  return (
    <MenuContext.Provider value={{ NoticeNavNum, StoreNavNum }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useNoticeNavNum = () => {
  const { NoticeNavNum } = useContext(MenuContext);
  return NoticeNavNum;
};

export const useStoreNavNum = () => {
  const { StoreNavNum } = useContext(MenuContext);
  return StoreNavNum;
};