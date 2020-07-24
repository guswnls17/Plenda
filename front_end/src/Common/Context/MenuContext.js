import React, { createContext, useContext } from "react";
import useInput from "../Hooks/useInput";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const NoticeNavNum = useInput(0);
  const StoreNavNum = useInput(0);
  const PointStoreNavNum = useInput(0);
  const MenuNavNum = useInput(0);
  const PointMenuNavNum = useInput(0);
  const StaffNavNum = useInput(0);
  const PointStaffNavNum = useInput(0);
  const SalesNavNum = useInput(0);

  const confirmState = useInput({
    boolean: false,
    title: "",
    text: "",
    trueOnClick: () => {}
  })

  const alertState = useInput({
    boolean: false,
    text: "",
  })

  const adressState = useInput({
    adressModalNum: 0,
    boolean: false,
    adress: ""
  })

  return (
    <MenuContext.Provider value={{ 
      NoticeNavNum, 
      StoreNavNum, 
      PointStoreNavNum, 
      MenuNavNum, 
      PointMenuNavNum, 
      StaffNavNum, 
      PointStaffNavNum, 
      SalesNavNum,
      confirmState,
      alertState,
      adressState
    }}>
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

export const usePointStoreNavNum = () => {
  const { PointStoreNavNum } = useContext(MenuContext);
  return PointStoreNavNum;
};

export const useMenuNavNum = () => {
  const { MenuNavNum } = useContext(MenuContext);
  return MenuNavNum;
};

export const usePointMenuNavNum = () => {
  const { PointMenuNavNum } = useContext(MenuContext);
  return PointMenuNavNum;
};

export const useStaffNavNum = () => {
  const { StaffNavNum } = useContext(MenuContext);
  return StaffNavNum;
};

export const usePointStaffNavNum = () => {
  const { PointStaffNavNum } = useContext(MenuContext);
  return PointStaffNavNum;
};

export const useSalesNavNum = () => {
  const { SalesNavNum } = useContext(MenuContext);
  return SalesNavNum;
};

export const useConfirmState = () => {
  const { confirmState } = useContext(MenuContext);
  return confirmState;
};

export const useAlertState = () => {
  const { alertState } = useContext(MenuContext);
  return alertState;
};

export const useAdressState = () => {
  const { adressState } = useContext(MenuContext);
  return adressState;
};