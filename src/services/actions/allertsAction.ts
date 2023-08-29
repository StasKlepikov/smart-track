import { PutAllertAction } from '../reducers/allertsReducer';
import { AllertsState } from './../typedef';


export const ALLERTS_PUT = 'allerts/put';


export const putAllerts = (payload: AllertsState): PutAllertAction => {
    return {
        type: ALLERTS_PUT,
        payload
    };
};