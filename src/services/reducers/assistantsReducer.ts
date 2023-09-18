import { v4 } from "uuid";
import { PayloadAction } from "@reduxjs/toolkit";
import { ASSISTANTS_ADD, ASSISTANTS_DELETE, ASSISTANTS_EDIT, ASSISTANTS_PUT } from "../actions/assistantsAction";
import type {  AddAssistantPayload, Assistant, AssistantsState, EditAssistantPayload } from "../typedef";


const initialState: AssistantsState = {
    assistants: []
};

export type PutAssistantAction = PayloadAction<Assistant[], typeof ASSISTANTS_PUT>;
export type AddAssistantAction = PayloadAction<AddAssistantPayload, typeof ASSISTANTS_ADD>;
export type EditAssistantAction = PayloadAction<EditAssistantPayload, typeof ASSISTANTS_EDIT>;
export type DeleteAssistantAction = PayloadAction<string, typeof ASSISTANTS_DELETE>;
export type AssistantAction = PutAssistantAction | AddAssistantAction | EditAssistantAction | DeleteAssistantAction;

export const assistantsReducer = (state = initialState, action: AssistantAction) => {
    switch (action.type) {
        case ASSISTANTS_PUT: {
            const assistants = action.payload.map(assistant => ({ ...assistant, createdAt: new Date(assistant.createdAt).toString() }));
            return {
                ...state, assistants,
            };
        }
        case ASSISTANTS_ADD: { 
            const defaultValues = {
                id: v4(),
                createdAt: new Date().toString(),
                fullname: 'Name Surname',
                mail: 'mail@mail.com',
                phone: '+XX (XXX) XXX XXXX'
            }
            return {
                ...state, assistants: [...state.assistants, {...defaultValues, ...action.payload }]
            }
        }
        case ASSISTANTS_EDIT: {
            const updatedAssistants = state.assistants
                ?.map((assistant: Assistant) => {
                    if (assistant.id === action.payload.id) {
                        return { ...action.payload };
                    }
                    return assistant;
                });
            return {...state, assistants: updatedAssistants };
        }
        case ASSISTANTS_DELETE: {
            const updatedAssistants = state.assistants
                .filter(assistant => assistant.id !== action.payload);
            return { ...state, assistants: updatedAssistants };
        }
        default: return state;
    }
};
