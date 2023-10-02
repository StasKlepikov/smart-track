
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

import { doctorsReducer } from '../services/reducers/doctorsReducer';
import { assistantsReducer } from '../services/reducers/assistantsReducer';
import { receptionistsReducer } from '../services/reducers/receptionistsReducer';
import { modalReducer } from '../services/reducers/modalReducer';
import { allertsReducer } from '../services/reducers/allertsReducer';

const combinedReducer = combineReducers({
    doctors: doctorsReducer,
    assistants: assistantsReducer,
    receptionists: receptionistsReducer,
    allerts: allertsReducer,
    modal: modalReducer,
})
const store = configureStore({ reducer: combinedReducer, devTools: { name: 'Store' } })

export default store;