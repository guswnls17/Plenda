import { createAction, handleActions } from 'redux-actions';
import produce from 'immer'; 
import { pender } from 'redux-pender';
import * as api from '../../lib/api';

export const LOAD_USER = 'auth/LOAD_USER';
export const LOGIN = 'auth/LOGIN';
export const LOGOUT = 'auth/LOGOUT';
export const GET_BRAND = 'auth/GET_BRAND';
export const PATCH_BRAND = 'auth/PATCH_BRAND';
export const GET_DETAIL_BRAND = 'auth/GET_DETAIL_BRAND';

export const loaduser = createAction(LOAD_USER, api.loaduser);
export const login = createAction(LOGIN, api.login);
export const logout = createAction(LOGOUT, api.logout);
export const getbrand = createAction(GET_BRAND, api.getbrand);
export const patchBrand = createAction(PATCH_BRAND, api.patchBrand);
export const getDetailbrand = createAction(GET_DETAIL_BRAND, api.getDetailbrand);


const initialState = {
    user: null, //유저 정보
    brand: "", //qm
    detailBrand: ""
};


export default handleActions({ 
    ...pender({
        type: LOAD_USER,
        onSuccess: (state, action) => 
            produce(state, draft => {
                draft.user = action.payload.data;
            }),
    }),
    ...pender({
        type: LOGOUT,
        onSuccess: (state, action) => 
            produce(state, draft => {
                draft.user = null;
            }),
        }),
    ...pender({
        type: GET_BRAND,
        onSuccess: (state, action) => 
            produce(state, draft => {
                draft.brand = action.payload.data;
            }),
    }),
    ...pender({
        type: GET_DETAIL_BRAND,
        onSuccess: (state, action) => 
            produce(state, draft => {
                draft.detailBrand = action.payload.data;
            }),
    }),
}, initialState);