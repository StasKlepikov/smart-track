import { AddAllertAction, DeleteAllertAction, PutAllertAction } from '../reducers/allertsReducer';
import { AddAllertPayload, AllertsState } from './../typedef';


export const ALLERTS_PUT = 'allerts/put';
export const ALLERTS_ADD = 'allerts/add';
export const ALLERTS_DELETE = 'allerts/delete';


export const putAllerts = (payload: AllertsState): PutAllertAction => {
    return {
        type: ALLERTS_PUT,
        payload
    };
};

export const addAllert = (allert: AddAllertPayload): AddAllertAction => {
    return {
        type: ALLERTS_ADD,
        payload: allert,
    }
};

export const deleteAllert = (allertId: string): DeleteAllertAction => {
    return {
        type: ALLERTS_DELETE,
        payload: allertId,
    }
 };