import './Modal.scss';

import { ButtonAdd } from '../../../utilities/buttonAdd/ButtonAdd';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Allert, AllertsState, Assistant, Doctor, Receptionist, RootState } from '../../../services/typedef';
import { changeModal } from '../../../services/actions/modalAction';
import { addDoctor, editDoctor } from '../../../services/actions/doctorsAction';
import { defaultDoctor, defaultWorker} from '../../../services/reducers/modalReducer';
import { API } from '../../../axios';
import { putAllerts } from '../../../services/actions/allertsAction';
import { AllertElement } from './allert/AllertElement';
import { Allerts } from '../allerts/Allerts';
import { addAssistants, editAssistants } from '../../../services/actions/assistantsAction';
import { addReceptionists, editReceptionists } from '../../../services/actions/receptionistsAction';

type WorkerActions<TWorker extends object> = {
    [key: string]: { worker: TWorker, action: Function }
};

export const Modal = () => {
    
    const dispatch = useDispatch();
    const { isOpen, mode, target, currentWorkerId, initialDoctor, initialAssistant, initialReceptionist } = useSelector((state: RootState) => state.modal);
    

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

    const handleAdd = () => { 
        const workerActions: WorkerActions<Omit<Doctor | Assistant | Receptionist, "id">> =
        {
            doctor: { 
                worker: initialDoctor,
                action: addDoctor
            },
            assistant: {
                worker: initialAssistant,
                action: addAssistants
            },
            receptionist: {
                worker: initialReceptionist,
                action: addReceptionists
            }
        };
        const workerAction = workerActions[target];
        if (!workerAction) return;
        const { worker, action } = workerAction;
        API.post(`/${target}s`, worker);
        dispatch(action(worker));
    };

    const handleEdit = () => { 
        const workerActions: WorkerActions<Partial <Doctor | Assistant | Receptionist>> =
        {
            doctor: { 
                worker: {
                    id: currentWorkerId,
                    ...initialDoctor
                },
                action: editDoctor
            },
            assistant: {
                worker: {
                    id: currentWorkerId,
                    ...initialAssistant
                },
                action: editAssistants
            },
            receptionist: {
                worker: {
                    id: currentWorkerId,
                    ...initialReceptionist
                },
                action: editReceptionists
            }
        };
        const workerAction = workerActions[target];
        if (!workerAction) return;
        const { worker, action } = workerAction;
        API.patch(`/${target}s/${currentWorkerId}`, worker);
        dispatch(action(worker));
    };

    const trimSpaces = (inputValue: string) => {
        return inputValue.replace(/\s+/g, ' ').trimStart();
    };

    const toUpperFirstLetter = (str: string) => {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

    const handleFieldChange = (field: keyof (Doctor | Assistant | Receptionist), value: string) => {
        const workerActions: WorkerActions<Omit<Doctor | Assistant | Receptionist, "id">> = {
            doctor: {
                worker: initialDoctor,
                action: (newDoctor: Omit<Doctor, "id">) => changeModal({initialDoctor: newDoctor})
            },
            assistant: {
                worker: initialAssistant,
                action: (newAssistant: Omit<Assistant, "id">) => changeModal({initialAssistant: newAssistant})
            },
            receptionist: {
                worker: initialReceptionist,
                action: (newReceptionist: Omit<Receptionist, "id">) => changeModal({initialReceptionist: newReceptionist})
            }
        };
        const workerAction = workerActions[target];
        if (!workerAction) return;
        const {worker, action } = workerAction
        const newWorker = { ...worker, [field]: trimSpaces(value) };
        dispatch(action(newWorker));
    };

    const getWorker = () => {
        switch (target) {
            case 'doctor':
                return initialDoctor;
            case 'assistant':
                return initialAssistant;
            case 'receptionist':
                return initialReceptionist;
            default: return undefined;
        }
    };

    return (
        <div className={isOpen ? "modal open" : "modal"}>
            <div
                className={isOpen ? "modal__content open" : "modal__content"}
                onClick={e => e.stopPropagation()}>
                <button
                    className="modalBtn"
                    onClick={() => { handleIsClose(); dispatch(changeModal({ isOpen: false, mode: '', initialDoctor: defaultDoctor , initialAssistant: defaultWorker, initialReceptionist: defaultWorker})) } }></button>
                <div className="modal__form">
                    <h2>{mode === "add" ? `Add new ${toUpperFirstLetter(target)}` : `Edit ${toUpperFirstLetter(target)}`}</h2>
                    <label htmlFor="name">Name</label>
                    <input
                        value={getWorker()?.fullname}
                        onChange={(e) => handleFieldChange('fullname', e.target.value)}
                        type="text"
                        placeholder='Steve Perry'/>
                    <label htmlFor="email">Email</label>
                    <input
                        value={getWorker()?.mail}
                        onChange={(e) => handleFieldChange('mail', e.target.value)}
                        type="text"
                        placeholder='example@mail.com'
                        maxLength={32}/>
                    <label htmlFor="phone number">Phone number</label>
                    <input
                        value={getWorker()?.phone}
                        onChange={(e) => handleFieldChange('phone', e.target.value)}
                        type="tel"
                        placeholder='+__-(___)-___-____'
                        maxLength={12}/>
                    {target==="doctor" &&  
                        <div className="modal__allerts">
                            <label htmlFor="allerts">Allerts</label>
                            <div className="allerts-container">
                                {allerts.map(
                                    (allert) =>
                                        <AllertElement
                                            allert={allert}
                                            checked={initialDoctor.allerts.some(
                                                (doctorAllert) => doctorAllert.id === allert.id)}
                                        />)}
                            </div>
                        </div>
                    }
                </div>
                <div className="modal__button">
                    <ButtonAdd text='Save' onClick={() => {
                        const modalWorker = getWorker();
                        if (!modalWorker?.fullname || !modalWorker.mail || !modalWorker.phone) return alert("Enter all fields, please!");
                        switch (mode) {
                            case 'add': handleAdd();
                                break;
                            case 'edit': handleEdit();
                                break;
                            default: console.log("Error! Try again!")
                        }
                        dispatch(changeModal({ isOpen: false, mode: '', initialDoctor: defaultDoctor, initialAssistant: defaultWorker, initialReceptionist: defaultWorker }) );
                    }} />
                </div>
            </div>
        </div>
    );
};
