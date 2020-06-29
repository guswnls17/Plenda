import React from 'react'
import SignupContainer from '../../Containers/Auth/SignupContainer'
import useInput from '../../Common/Hooks/useInput';
import AlertModal from '../../Common/Modal/AlertModal';

export default () => {
  const alertState = useInput(false);

  return (
    <>
      <SignupContainer
        alertState={alertState}
      />
      {
        alertState.value &&
        <AlertModal
          {...alertState}
          text={`이용약관 동의 후\n회원가입이 가능합니다.`}
        />
      }
    </>
  )
}