import React from 'react';
import { useHistory } from 'react-router-dom';
import 'cross-fetch/polyfill';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import EmailConfirmComponent from '../../Components/Auth/EmailConfirmComponent';

export default () => {
  let history = useHistory();

  function register(username, email, pwd) {
    var poolData = { UserPoolId : 'ap-northeast-2_BjAHN7nXO',
        ClientId : '2336ir4k5ionlqc3pmkgppj44j'
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var attributeList = [];
    
    var dataEmail = {
        Name : 'email',
        Value : email
    };
    
    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

    attributeList.push(attributeEmail);

    userPool.signUp(username, pwd, attributeList, null, function(err, result) {
      if (err) {
          alert(JSON.stringify(err));
          return;
      }
      let cognitoUser = result.user;
      console.log('user name is ' + cognitoUser.getUsername());

      var verificationCode = prompt('Please input verification code ' ,'');

      cognitoUser.confirmRegistration(verificationCode, true, function(err, result) {
          if (err) {
              alert(JSON.stringify(err));
              return;
          }
          alert(result);
          history.push("/");
      });
    });
  }

  return (
    <EmailConfirmComponent register={register}/>
  )
}