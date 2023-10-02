import { v4 } from "uuid";
import { PayloadAction } from "@reduxjs/toolkit";
import { RECEPTIONISTS_PUT, RECEPTIONISTS_ADD, RECEPTIONISTS_EDIT, RECEPTIONISTS_DELETE } from "../actions/receptionistsAction";
import type { Receptionist, AddReceptionistPayload, EditReceptionistPayload, ReceptionistsState } from "../typedef";

const initialState: ReceptionistsState = {
    receptionists: []
};

export type PutReceptionisAction = PayloadAction<Receptionist[], typeof RECEPTIONISTS_PUT>;
export type AddReceptionisAction = PayloadAction<AddReceptionistPayload, typeof RECEPTIONISTS_ADD>;
export type EditReceptionisAction = PayloadAction<EditReceptionistPayload, typeof RECEPTIONISTS_EDIT>;
export type DeleteReceptionisAction = PayloadAction<string, typeof RECEPTIONISTS_DELETE>;
export type ReceptionisAction = PutReceptionisAction | AddReceptionisAction | EditReceptionisAction | DeleteReceptionisAction;

export const receptionistsReducer = (state = initialState, action: ReceptionisAction) => {
    switch (action.type) {
        case RECEPTIONISTS_PUT: {
            const receptionists = action.payload.map(receptionist => ({ ...receptionist, createdAt: new Date(receptionist.createdAt).toString() }));
            return {
                ...state, receptionists,
            };
        }
        case RECEPTIONISTS_ADD: { 
            const defaultValues = {
                id: v4(),
                createdAt: new Date().toString(),
                fullname: 'Name Surname',
                mail: 'mail@mail.com',
                phone: '+XX (XXX) XXX XXXX'
            }
            return {
                ...state, receptionists: [...state.receptionists, {...defaultValues, ...action.payload }]
            }
        }
        case RECEPTIONISTS_EDIT: {
            const updatedReceptionists = state.receptionists
                ?.map((receptionist: Receptionist) => {
                    if (receptionist.id === action.payload.id) {
                        return { ...action.payload };
                    }
                    return receptionist;
                });
            return { ...state, receptionists: updatedReceptionists };
        }
        case RECEPTIONISTS_DELETE: {
            const updatedReceptionists = state.receptionists
                .filter(receptionist => receptionist.id !== action.payload);
            return { ...state, receptionists: updatedReceptionists };
        }
        default: return state;
    }
};
