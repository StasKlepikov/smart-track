import { PayloadAction } from "@reduxjs/toolkit";
import { MODAL_CHANGE } from "../actions/modalAction";
import { ModalState } from "../typedef";

export const defaultDoctor = {
    fullname: '',
    mail: '',
    phone: '',
    room: '',
    allerts: [],
    createdAt: new Date()
};

const initialState = {
    isOpen: false,
    mode: "add",
    initialDoctor: defaultDoctor
};


export const modalReducer = (state = initialState, action: PayloadAction<ModalState>) => {
    switch (action.type) {
        case MODAL_CHANGE: {
            return {
                ...state, ...action.payload,
            }
        }
        default: return state;
    }
};
