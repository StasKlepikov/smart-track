import { PayloadAction } from "@reduxjs/toolkit";
import type { AllertsState } from "../typedef";
import { ALLERTS_PUT } from "../actions/allertsAction";


const initialState: AllertsState = {
    allerts: []
};

export type PutAllertAction = PayloadAction<AllertsState, typeof ALLERTS_PUT>;

export const allertsReducer = (state = initialState, action: PutAllertAction) => {
    switch (action.type) {
        case ALLERTS_PUT: {
            return {
                ...state, ...action.payload,
            };
        }
        default: return state;
    }
};
