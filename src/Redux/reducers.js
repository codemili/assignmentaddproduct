import {combineReducers} from 'redux';
import shopData from './shopData';


import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['shop'],
};

const rootReducer = combineReducers({
  shop: shopData,
});

export default persistReducer(persistConfig, rootReducer);