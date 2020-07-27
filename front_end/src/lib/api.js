import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://test.plendar.com/api/',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth'
    },
  });
  
  export const loaduser = () => instance.get('user/profile');
  export const login = (data) => instance.post('login', data);
  export const logout = () => instance.get('logout');
  export const getbrand = () => instance.get('admin/my_brands');
  export const patchBrand = (bs_id, data) => instance.post(`admin/${bs_id}/update`, data);
  export const getDetailbrand = (bs_id) => instance.get(`admin/${bs_id}/view`);
  export const getStoreList = ( bs_id ) => instance.get(`admin/${bs_id}/stores`);
  export const addStore = ( bs_id, data ) => instance.post(`admin/${bs_id}/add_store`, data);
  export const thumbnailImg = ( data ) => instance.post(`image/upload/thumbnail`, data);
  export const storeImg = ( data ) => instance.post(`image/upload/store`, data);
  export const markerImg = ( data ) => instance.post(`image/upload/marker`, data);
  export const tagsPost = ( bs_id, store_id, data ) => instance.post(`admin/${bs_id}/store/${store_id}/tags`, data);
  export const storeDelete = ( bs_id, store_id ) => instance.post(`admin/${bs_id}/store/${store_id}/close`);
  export const getPointStore = ( bs_id, store_id ) => instance.get(`admin/${bs_id}/store/${store_id}/basic`);
  export const getTags = ( bs_id, store_id ) => instance.get(`admin/${bs_id}/store/${store_id}/tags`);
  export const patchStore = ( bs_id, store_id, data ) => instance.post(`admin/${bs_id}/store/${store_id}/basic`, data);
  export const getOperating = ( bs_id, store_id ) => instance.get(`admin/${bs_id}/store/${store_id}/hours`);
  export const postOperating = ( bs_id, store_id, data ) => instance.post(`admin/${bs_id}/store/${store_id}/hours`, data);

  //메뉴판 등록
  export const addMenu = ( bs_id, data ) => instance.post(`admin/${bs_id}/menu/create_rev`, data);
