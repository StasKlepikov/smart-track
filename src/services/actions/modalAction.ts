import { ModalState } from "../typedef";

export const MODAL_CHANGE = 'modal/change';

export const changeModal = (payload: Partial<ModalState>) => {
    return {
        type: MODAL_CHANGE,
        payload 
    }
}
