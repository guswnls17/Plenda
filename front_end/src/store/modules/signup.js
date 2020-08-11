import { createAction, handleActions } from 'redux-actions';
import produce from 'immer'; 

export const SIGN_UP_STATE = 'auth/LOAD_USER';

export const signupState = createAction(SIGN_UP_STATE);


const initialState = {
    email: null,
    name: null,
    password: null,
};


export default handleActions({ 
  [SIGN_UP_STATE]: (state, action) => 
    produce(state, draft => {
      draft.email = action.payload.email;
      draft.name = action.payload.name;
      draft.password = action.payload.password;
      // const { name, value } = action.payload;
      // draft[name] = value;
    }),
}, initialState);