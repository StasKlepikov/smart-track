
import { PayloadAction } from "@reduxjs/toolkit";
import { DOCTORS_PUT } from "../actions/doctorsAction";
import type { Doctor, DoctorsState } from "../typedef";

const initialState: DoctorsState = {
    doctors: []
};

export const doctorsReducer = (state = initialState, action: PayloadAction<Doctor[]>) => {
    switch (action.type) {
        case DOCTORS_PUT: {
            return {
                ...state, doctors: [...action.payload],
            };
        }
        default: return state;
    }
};
