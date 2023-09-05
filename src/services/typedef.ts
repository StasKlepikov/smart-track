export interface Doctor {
    id: string;
    createdAt: Date;
    fullname: string;
    mail: string;
    phone: string;
    room: string; 
    allerts: Allert[];
};

export interface Assistant {
    id: string;
    createdAt: Date;
    fullname: string;
    mail: string;
    phone: string;
};

export interface Allert { 
    id: string;
    name: string;
    color: string;
};

export interface AddDoctorPayload { 
    fullname: string;
    mail: string;
    phone: string;
    room: string;
    allerts: Allert[];
};

export interface AddAssistantPayload { 
    fullname: string;
    mail: string;
    phone: string;
};

export type EditDoctorPayload = Pick<Doctor, 'id'> & Partial<AddDoctorPayload>;

export type EditAssistantPayload = Pick<Assistant, 'id'> & Partial<AddAssistantPayload>;

export interface DoctorsState { 
    doctors: Doctor[];
};

export interface AssistantsState { 
    assistants: Assistant[];
};
export interface AllertsState { 
    allerts: Allert[];
};

export interface DoctorElementProps{ 
    doctor: Doctor;
    index: number;
};

export interface AssistantElementProps{ 
    assistant: Assistant;
    index: number;
};

export interface ModalState {
    currentDoctorId?: string;
    initialDoctor: Omit <Doctor, "id">;
    isOpen: boolean;
    mode: string;
};

export interface RootState {
    modal: ModalState;
    doctors: DoctorsState;
    assistant: Assistant;
};
