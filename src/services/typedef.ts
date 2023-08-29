export interface Doctor {
    id: string;
    createdAt: Date;
    fullname: string;
    mail: string;
    phone: string;
    room: string; 
    allerts: Allert[];
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
    room: string; // Под вопросом (возможно убрать)
    allerts: Allert[];
};

export type EditDoctorPayload = Pick<Doctor, 'id'> & Partial<AddDoctorPayload>;

export interface DoctorsState { 
    doctors: Doctor[];
};
export interface AllertsState { 
    allerts: Allert[];
};

export interface DoctorElementProps{ 
    doctor: Doctor;
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
};
