import './Modal.scss';

import { ButtonAdd } from '../../../utilities/buttonAdd/ButtonAdd';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Allert, AllertsState, Doctor, EditDoctorPayload, RootState } from '../../../services/typedef';
import { changeModal } from '../../../services/actions/modalAction';
import { addDoctor, editDoctor } from '../../../services/actions/doctorsAction';
import { defaultDoctor } from '../../../services/reducers/modalReducer';
import { API } from '../../../axios';
import { putAllerts } from '../../../services/actions/allertsAction';
import { AllertElement } from './allert/AllertElement';
import { Allerts } from '../allerts/Allerts';


export const Modal = () => {
    
    const dispatch = useDispatch();
    const { isOpen, mode, currentDoctorId, initialDoctor } = useSelector((state: RootState) => state.modal);
    const [modalDoctor, setModalDoctor] = useState<Omit<Doctor, "id">>(initialDoctor);
    useEffect(() => setModalDoctor(initialDoctor), [initialDoctor]);

    const allerts = useSelector<{ allerts: AllertsState }, Allert[]>(state => state.allerts.allerts);
    
    const getAllerts = async () => {
        const response = await API.get("/allerts");
        dispatch(putAllerts({ allerts: response.data }));      
    };

    useEffect(() => {
        getAllerts()
            .then()
            .catch((err) => console.log("Allert`s error: ", err));
    }, []);

    const handleIsClose = () => {
        dispatch(changeModal({
            isOpen: false,
            mode: '',
        }));
    };

    const handleAddDoctor = () => { 
        if (!initialDoctor) return;
        API.post("/doctors", initialDoctor);
        dispatch(addDoctor(initialDoctor));
    };

    const handleEditDoctor = () => { 
        if (!initialDoctor || !currentDoctorId) return;

        const updatedDoctor: EditDoctorPayload = {
            id: currentDoctorId,
            fullname: initialDoctor.fullname,
            mail: initialDoctor.mail,
            phone: initialDoctor.phone,
            room: initialDoctor.room,
        };
        
        API.patch(`/doctors/${currentDoctorId}`, updatedDoctor)
            .then(response => {
                dispatch(editDoctor(updatedDoctor));
            })
            .catch(error => {
                console.log(error);
            });
    };

    const trimSpaces = (inputValue: string) => {
        return inputValue.replace(/\s+/g, ' ').trim();
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;
        const newDoctor = { ...modalDoctor, fullname: trimSpaces(newName) };
        dispatch(changeModal({ initialDoctor: newDoctor}));
    };

    const handleMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMail = e.target.value;
        const newDoctor = { ...modalDoctor, mail: trimSpaces(newMail) };
        dispatch(changeModal({ initialDoctor: newDoctor}));
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPhone = e.target.value;
        const newDoctor = { ...modalDoctor, phone: trimSpaces(newPhone) };
        dispatch(changeModal({ initialDoctor: newDoctor}));
    };

    return (
        <div className={isOpen ? "modal open" : "modal"}>
            <div
                className={isOpen ? "modal__content open" : "modal__content"}
                onClick={e => e.stopPropagation()}>
                <button
                    className="modalBtn"
                    onClick={() => { handleIsClose(); dispatch(changeModal({ isOpen: false, mode: '', initialDoctor: defaultDoctor })) } }></button>
                <div className="modal__form">
                    <h2>{mode === "add" ? "Add new Doctor" : "Edit Doctor"}</h2>
                    <label htmlFor="name">Name</label>
                    <input
                        value={initialDoctor?.fullname}
                        onChange={handleNameChange}
                        type="text"
                        placeholder='Steve Perry'/>
                    <label htmlFor="email">Email</label>
                    <input
                        value={initialDoctor?.mail}
                        onChange={handleMailChange}
                        type="text"
                        placeholder='example@mail.com'
                        maxLength={32}/>
                    <label htmlFor="phone number">Phone number</label>
                    <input
                        value={initialDoctor?.phone}
                        onChange={handlePhoneChange}
                        type="text"
                        placeholder='+__-(___)-___-____'
                        maxLength={12}/>
                    <div className="modal__allerts">
                        <label htmlFor="allerts">Allerts</label>
                        <div className="allerts-container">
                            {allerts.map((allert) => <AllertElement allert={ allert } />)}
                        </div>
                    </div>
                </div>
                <div className="modal__button">
                    <ButtonAdd text='Save' onClick={() => {
                        if (!modalDoctor.fullname || !modalDoctor.mail || !modalDoctor.phone) return alert("Enter all fields, please!");
                        mode === 'add'
                            ? handleAddDoctor()
                            : handleEditDoctor();
                        dispatch(changeModal({ isOpen: false, mode: '', initialDoctor: defaultDoctor }) );
                    }} />
                </div>
            </div>
        </div>
    );
};
