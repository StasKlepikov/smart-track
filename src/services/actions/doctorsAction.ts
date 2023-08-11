import type { Doctor } from "../typedef";

export const DOCTORS_PUT = 'doctors/put';

export const putDoctors = (payload: Doctor[]) => {
    return {
        type: DOCTORS_PUT,
        payload
    };
};
