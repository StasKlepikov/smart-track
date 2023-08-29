import { AddDoctorAction, DeleteDoctorAction, EditDoctorAction, PutDoctorAction } from '../reducers/doctorsReducer';
import { AddDoctorPayload, Doctor, EditDoctorPayload } from './../typedef';


export const DOCTORS_PUT = 'doctors/put';
export const DOCTORS_ADD = 'doctors/add';
export const DOCTORS_EDIT = 'doctors/edit';
export const DOCTORS_DELETE = 'doctors/delete';

export const putDoctors = (payload: Doctor[]): PutDoctorAction => {
    return {
        type: DOCTORS_PUT,
        payload
    };
};
export const addDoctor = (doctor: AddDoctorPayload): AddDoctorAction => {
    return {
        type: DOCTORS_ADD,
        payload: doctor,
    }
};

export const editDoctor = (doctor: EditDoctorPayload): EditDoctorAction => {
    return {
        type: DOCTORS_EDIT,
        payload: doctor,
    }
};

export const deleteDoctor = (doctorId: string): DeleteDoctorAction => {
    return {
        type: DOCTORS_DELETE,
        payload: doctorId,
    }
};
