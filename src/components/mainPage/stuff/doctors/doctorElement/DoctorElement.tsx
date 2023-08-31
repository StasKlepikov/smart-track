import '../../StuffElement.scss';
import '../../../../../utilities/_variables.scss';

import { DoctorElementProps } from '../../../../../services/typedef';

import { DoctorMicroAllert } from './DoctorMicroAllert';
import { useDispatch } from 'react-redux';
import { changeModal } from '../../../../../services/actions/modalAction';
import { deleteDoctor } from '../../../../../services/actions/doctorsAction';
import { API } from '../../../../../axios';


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
        API.delete(`/doctors/${doctor.id}`)
        .then(response => {
            dispatch(deleteDoctor(doctor.id));
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className='worker-element'>
            <div className="worker__id">
                <h3>{index}</h3>
            </div>
            <div className="worker__name flex-element">
                <h3>{doctor.fullname}</h3>
            </div>
            <div className="worker__mail flex-element">
                <p>{doctor.mail}</p>
            </div>
            <div className="worker__phone flex-element">
                <p>{doctor.phone}</p>
            </div>
            <div className="worker__allerts flex-element">
                {doctor.allerts?.map((allert) => <DoctorMicroAllert allert={allert} />)}
            </div>
            <div className="worker__room flex-element">
                <p>Rooms {doctor.room}</p>
            </div>
            <div className="worker__btns">
                <button title='Edit' onClick={()=> handleEdit()}></button>
                <button title='Delete' onClick={() => handleDelete()}></button>
            </div>
        </div>
    );
};