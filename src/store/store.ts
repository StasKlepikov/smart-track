import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

import { doctorsReducer } from '../services/reducers/doctorsReducer';

const combinedReducer = combineReducers({
    doctors: doctorsReducer
})
const store = configureStore({ reducer: combinedReducer, devTools: { name: 'Store' } })

export default store;