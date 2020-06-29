import React from 'react'
import LoginContainer from '../../Containers/Auth/LoginContainer'
import AlertModal from '../../Common/Modal/AlertModal'
import useInput from '../../Common/Hooks/useInput'

export default () => {
  const alertState = useInput(false);
  return (
    <>
      <LoginContainer alertState={alertState}/>
      {
        alertState.value &&
        <AlertModal
          {...alertState}
          text={`아이디와 비밀번호를\n다시 한 번 확인해주세요.`}
        />
      }
    </>
  )
}