import { v4 } from "uuid";
import { PayloadAction } from "@reduxjs/toolkit";
import { DOCTORS_ADD, DOCTORS_DELETE, DOCTORS_EDIT, DOCTORS_PUT } from "../actions/doctorsAction";
import type { AddDoctorPayload, Doctor, DoctorsState, EditDoctorPayload } from "../typedef";


const initialState: DoctorsState = {
    doctors: []
};

export type PutDoctorAction = PayloadAction<Doctor[], typeof DOCTORS_PUT>;
export type AddDoctorAction = PayloadAction<AddDoctorPayload, typeof DOCTORS_ADD>;
export type EditDoctorAction = PayloadAction<EditDoctorPayload, typeof DOCTORS_EDIT>;
export type DeleteDoctorAction = PayloadAction<string, typeof DOCTORS_DELETE>;
export type DoctorAction = PutDoctorAction | AddDoctorAction | EditDoctorAction | DeleteDoctorAction;

export const doctorsReducer = (state = initialState, action: DoctorAction) => {
    switch (action.type) {
        case DOCTORS_PUT: {
            const doctors = action.payload.map(doctor => ({ ...doctor, createdAt: new Date(doctor.createdAt).toString() }));
            return {
                ...state, doctors,
            };
        }
        case DOCTORS_ADD: { 
            const defaultValues = {
                id: v4(),
                createdAt: new Date().toString(),
                fullname: 'Name Surname',
                mail: 'mail@mail.com',
                phone: '+XX (XXX) XXX XXXX',
                room: 'room',
                allerts: []
            }
            return {
                ...state, doctors: [...state.doctors, {...defaultValues, ...action.payload }]
            }
        }
        case DOCTORS_EDIT: {
            const updatedDoctors = state.doctors
                ?.map((doctor: Doctor) => {
                    if (doctor.id === action.payload.id) {
                        return { ...action.payload };
                    }
                    return doctor;
                });
            return {...state, doctors: updatedDoctors };
        }
        case DOCTORS_DELETE: {
            const updatedDoctors = state.doctors
                .filter(doctor => doctor.id !== action.payload);
            return { ...state, doctors: updatedDoctors };
        }
        default: return state;
    }
};
