import './Modal.scss';

import { ButtonAdd } from '../../../utilities/buttonAdd/ButtonAdd';

import { useSelector } from 'react-redux';
import { Doctor, RootState } from '../../../services/typedef';
import { useDispatch } from 'react-redux';
import { changeModal } from '../../../services/actions/modalAction';
import { useEffect, useState } from 'react';
import { addDoctor, editDoctor } from '../../../services/actions/doctorsAction';
import { Allert } from './allert/Allert';
import { defaultDoctor } from '../../../services/reducers/modalReducer';
import { API } from '../../../axios';

export const Modal = () => {

    const dispatch = useDispatch();
    const { isOpen, mode, currentDoctorId, initialDoctor } = useSelector((state: RootState) => state.modal);
    const [modalDoctor, setModalDoctor] = useState<Omit<Doctor, "id">>(initialDoctor);
    useEffect(() => { setModalDoctor(initialDoctor); console.log("initialDoctor: ", initialDoctor); }, [initialDoctor]);
    
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;
        const newDoctor = { ...modalDoctor, fullname: newName };
        dispatch(changeModal({ initialDoctor: newDoctor}));
    };

    const handleMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMail = e.target.value;
        const newDoctor = { ...modalDoctor, mail: newMail };
        dispatch(changeModal({ initialDoctor: newDoctor}));
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPhone = e.target.value;
        const newDoctor = { ...modalDoctor, phone: newPhone };
        dispatch(changeModal({ initialDoctor: newDoctor}));
    };

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
        dispatch(editDoctor({...initialDoctor, id: currentDoctorId}));
    };

    return (
        <div className={isOpen ? "modal open" : "modal"}>
            <div
                className={isOpen ? "modal__content open" : "modal__content"}
                onClick={e => e.stopPropagation()}>
                <button
                    className="modalBtn"
                    onClick={() => handleIsClose()}></button>
                <div className="modal__form">
                    <h2>{mode === "add" ? "Add new Doctor" : "Edit Doctor" }</h2>
                    <label htmlFor="name">Name</label>
                    <input
                        value={initialDoctor?.fullname}
                        onChange={handleNameChange}
                        type="text"
                        placeholder='Steve Perry' />
                    <label htmlFor="email">Email</label>
                    <input
                        value={initialDoctor?.mail}
                        onChange={handleMailChange}
                        type="text"
                        placeholder='example@mail.com' />
                    <label htmlFor="phone number">Phone number</label>
                    <input
                        value={initialDoctor?.phone}
                        onChange={handlePhoneChange}
                        type="text"
                        placeholder='+xx-(xxx)-xxx-xxxx' />
                    <div className="modal__allerts">
                        <label htmlFor="allerts">Allerts</label>
                        <div className="allerts-container">
                            <Allert />
                            <Allert />
                            <Allert />
                            <Allert />
                            <Allert />
                            <Allert />
                        </div>
                    </div>
                </div>
                <div className="modal__button">
                    <ButtonAdd text='Save' onClick={() => {
                        if (!modalDoctor.fullname || !modalDoctor.mail || !modalDoctor.phone) return alert("Enter, please!");
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
