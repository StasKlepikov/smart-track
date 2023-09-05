import { AddAssistantAction, DeleteAssistantAction, EditAssistantAction, PutAssistantAction } from '../reducers/assistantsReducer';
import { AddDoctorPayload, Doctor, EditDoctorPayload } from '../typedef';

export const ASSISTANTS_PUT = 'assistants/put';
export const ASSISTANTS_ADD = 'assistants/add';
export const ASSISTANTS_EDIT = 'assistants/edit';
export const ASSISTANTS_DELETE = 'assistants/delete';

export const putAssistants = (payload: Doctor[]): PutAssistantAction => {
    return {
        type: ASSISTANTS_PUT,
        payload
    };
};
export const addAssistants = (assistant: AddDoctorPayload): AddAssistantAction => {
    return {
        type: ASSISTANTS_ADD,
        payload: assistant,
    }
};

export const editAssistants = (assistant: EditDoctorPayload): EditAssistantAction => {
    return {
        type: ASSISTANTS_EDIT,
        payload: assistant,
    }
};

export const deleteAssistants = (assistantId: string): DeleteAssistantAction => {
    return {
        type: ASSISTANTS_DELETE,
        payload: assistantId,
    }
};
