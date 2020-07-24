import { createAction, handleActions } from 'redux-actions';
import produce from 'immer'; 
import { pender } from 'redux-pender';
import * as api from '../../lib/api';

export const GET_STORE_LIST = 'store/GET_STORE_LIST';
export const ADD_STORE = 'store/ADD_STORE';
export const THUMB_NAIL_IMG = 'store/THUMB_NAIL_IMG';
export const STORE_IMG = 'store/STORE_IMG';
export const MARKER_IMG = 'store/MARKER_IMG';
export const TAGS_POST = 'store/TAGS_POST';
export const STORE_DELETE = 'store/STORE_DELETE';
export const GET_POINT_STORE = 'store/GET_POINT_STORE';
export const GET_TAGS = 'store/GET_TAGS';
export const PATCH_STORE = 'store/PATCH_STORE';
export const GET_OPERATING = 'store/GET_OPERATING';
export const POST_OPERATING = 'store/POST_OPERATING';

export const getStoreList = createAction(GET_STORE_LIST, api.getStoreList);
export const addStore = createAction(ADD_STORE, api.addStore);
export const thumbnailImg = createAction(THUMB_NAIL_IMG, api.thumbnailImg);
export const storeImgUpload = createAction(STORE_IMG, api.storeImg);
export const markerImgUpload = createAction(MARKER_IMG, api.markerImg);
export const tagsPost = createAction(TAGS_POST, api.tagsPost);
export const storeDelete = createAction(STORE_DELETE, api.storeDelete);
export const getPointStore = createAction(GET_POINT_STORE, api.getPointStore);
export const getTags = createAction(GET_TAGS, api.getTags);
export const patchStore = createAction(PATCH_STORE, api.patchStore);
export const getOperating = createAction(GET_OPERATING, api.getOperating);
export const postOperating = createAction(POST_OPERATING, api.postOperating);

const initialState = {
    store: "",
    point: "",
    tags: "",
    operating: "",
    errMessage: ""
};

export default handleActions({ 
    ...pender({
        type: GET_STORE_LIST,
        onSuccess: (state, action) => 
            produce(state, draft => {
                draft.store = action.payload.data;
            }),
    }),
    ...pender({
        type: GET_POINT_STORE,
        onSuccess: (state, action) => 
            produce(state, draft => {
                draft.point = action.payload.data;
            }),
    }),
    ...pender({
        type: GET_TAGS,
        onSuccess: (state, action) => 
            produce(state, draft => {
                draft.tags = action.payload.data;
            }),
    }),
    ...pender({
        type: GET_OPERATING,
        onSuccess: (state, action) => 
            produce(state, draft => {
                draft.operating = action.payload.data;
            }),
    }),
    ...pender({
        type: POST_OPERATING,
        onError: (state, action) => 
            produce (state, draft => {
                draft.errMessage = action.payload.response.data;
            }),
    }),
}, initialState);