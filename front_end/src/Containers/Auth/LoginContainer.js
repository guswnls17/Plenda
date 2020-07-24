import React from 'react';
import LoginComponent from '../../Components/Auth/LoginComponent';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loaduser} from '../../store/modules/auth';

export default ({ alertState }) => {
  const dispatch = useDispatch();

  const LoginControl = async(email, password) => {
    await axios({
      method: 'post',
      url: 'https://cognito-idp.ap-northeast-2.amazonaws.com/',
      headers: {
        'Content-Type': 'application/x-amz-json-1.1',
        'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth'
      },  
      data: {
        "AuthParameters" : { 
          // "USERNAME" : "sung_kyuk@hotmail.com",
          // "PASSWORD" : "RkdTjdRb1!"
          "USERNAME" : email,
          "PASSWORD" : password
       },  
       "AuthFlow" : "USER_PASSWORD_AUTH",
       "ClientId" : "2336ir4k5ionlqc3pmkgppj44j"
      }   
    }).then((response) => {
      axios({
        method: 'get',
        url: 'http://test.plendar.com/api/login',
        withCredentials: true,
        params: {
          id_token: response.data.AuthenticationResult.IdToken
        },  
      }).then(() => {
        dispatch(loaduser())
      }).catch((error) => {
        alertState.setValue(true);
        console.log(error);
      }); 
    }).catch((error) => {
      alertState.setValue(true);
      console.log(error);
    }); 
  }

  // const TestHandler = () => {
  //   axios({
  //     method: 'get',
  //     url: 'http://test.plendar.com/api/user/profile',
  //     withCredentials: true,
  //   }).then((response) => {
  //     console.log(response)
  //   }).catch((error) => {
  //     console.log(error);
  //   }); 
  // }

  return (
    <LoginComponent alertState={alertState} LoginControl={LoginControl}/>
  )
}