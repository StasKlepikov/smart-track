import { AddReceptionisAction, DeleteReceptionisAction, EditReceptionisAction, PutReceptionisAction } from '../reducers/receptionistsReducer';
import { AddReceptionistPayload, EditReceptionistPayload, Receptionist } from '../typedef';

export const RECEPTIONISTS_PUT = 'receptionists/put';
export const RECEPTIONISTS_ADD = 'receptionists/add';
export const RECEPTIONISTS_EDIT = 'receptionists/edit';
export const RECEPTIONISTS_DELETE = 'receptionists/delete';

export const putReceptionists = (payload: Receptionist[]): PutReceptionisAction => {
    return {
        type: RECEPTIONISTS_PUT,
        payload
    };
};
export const addReceptionists = (receptionist: AddReceptionistPayload): AddReceptionisAction => {
    return {
        type: RECEPTIONISTS_ADD,
        payload: receptionist,
    }
};

export const editReceptionists = (receptionist: EditReceptionistPayload): EditReceptionisAction => {
    return {
        type: RECEPTIONISTS_EDIT,
        payload: receptionist,
    }
};

export const deleteReceptionists = (receptionistId: string): DeleteReceptionisAction => {
    return {
        type: RECEPTIONISTS_DELETE,
        payload: receptionistId,
    }
};
