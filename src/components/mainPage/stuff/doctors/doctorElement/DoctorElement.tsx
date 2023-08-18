import '../../StuffElement.scss';
import '../../../../../utilities/_variables.scss';

import { DoctorElementProps } from '../../../../../services/typedef';

import { DoctorMicroAllert } from './DoctorMicroAllert';
import { useDispatch } from 'react-redux';
import { changeModal } from '../../../../../services/actions/modalAction';
import { deleteDoctor } from '../../../../../services/actions/doctorsAction';



export const DoctorElement = ({ doctor, index }: DoctorElementProps) => { 
    const dispatch = useDispatch();

    const handleEdit = () => {
        const { id , ...initialDoctor} = doctor;
        dispatch(changeModal({
            isOpen: true,
            mode: 'edit',
            currentDoctorId: id,
            initialDoctor
        }));
    };

    const handleDelete = () => {
        dispatch(deleteDoctor(doctor.id));
    };

    return (
        <div className='worker-element'>
            <div className="worker__id">
                <h3>{index}</h3>
            </div>
            <div className="worker__name">
                <h3>{doctor.fullname}</h3>
            </div>
            <div className="worker__mail">
                <p>{doctor.mail}</p>
            </div>
            <div className="worker__phone">
                <p>{doctor.phone}</p>
            </div>
            {doctor.allerts.map((allert) => <DoctorMicroAllert allert={allert} />)}
            <div className="worker__room">
                <p>Room: {doctor.room}</p>
            </div>
            <div className="worker__btns">
                <button title='Edit' onClick={()=> handleEdit()}></button>
                <button title='Delete' onClick={() => handleDelete()}></button>
            </div>
        </div>
    );
};