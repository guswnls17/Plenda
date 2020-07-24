import { configureStore, createSlice } from "@reduxjs/toolkit";
import * as api from '../../lib/api';

const auth = createSlice({
    name: "authReducer",
    initialState: {
        login: {
            user: null, //유저 정보
            logInErrorMessage: '',
        },
        signUp: {
            signUpErrorMessage: '',
        },
        find: {
            emailPopup: false,
            findErrorMessage: '',
        },
        popUp: false,
    },
    reducers: {
        loaduser: (state, action) => {
            state.login.user = api.loaduser;
        }
    }
  });

  export const { loaduser } = auth.actions;

  export default auth.reducer;
