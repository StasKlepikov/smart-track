import { v4 } from "uuid";
import { PayloadAction } from "@reduxjs/toolkit";
import type { AddAllertPayload, AllertsState } from "../typedef";
import { ALLERTS_ADD, ALLERTS_DELETE, ALLERTS_PUT } from "../actions/allertsAction";



const initialState: AllertsState = {
    allerts: []
};

export type PutAllertAction = PayloadAction<AllertsState, typeof ALLERTS_PUT>;
export type AddAllertAction = PayloadAction<AddAllertPayload, typeof ALLERTS_ADD>;
export type DeleteAllertAction = PayloadAction<string, typeof ALLERTS_DELETE>
export type AllertAction = PutAllertAction | AddAllertAction | DeleteAllertAction;

export const allertsReducer = (state = initialState, action: AllertAction) => {
    switch (action.type) {
        case ALLERTS_PUT: {
            return {
                ...state, ...action.payload,
            };
        }
        case ALLERTS_ADD: { 
            const defaultValues = {
                id: v4(),
                name: 'Name marker',
                color: '#000000'
            }
            return {
                ...state, allerts: [...state.allerts, {...defaultValues, ...action.payload }]
            }
        }
        case ALLERTS_DELETE: { 
            const updatedAllerts = state.allerts
                .filter(allert => allert.id !== action.payload);
            return {...state, allerts: updatedAllerts};
        }
        default: return state;
    }
};
