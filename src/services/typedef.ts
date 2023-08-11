export interface Doctor {
    createdAt: Date;
    fullname: string;
    mail: string;
    telephone: string;
    id: string;
    room: string;
}

export interface DoctorsState { 
    doctors: Doctor[]  
} 

export interface DoctorElementProps{ 
    doctor: Doctor;
}