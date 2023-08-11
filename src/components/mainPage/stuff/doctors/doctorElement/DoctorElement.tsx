import '../../StuffElement.scss';

import { DoctorElementProps } from '../../../../../services/typedef';

import { DoctorColors } from './doctorColors/DoctorColors';



export const DoctorElement = ({ doctor }: DoctorElementProps) => { 
    return (
        <div className='worker-element'>
            <div className="worker__id">
                <h3>{doctor.id}</h3>
            </div>
            <div className="worker__name">
                <h3>{doctor.fullname}</h3>
            </div>
            <div className="worker__mail">
                <p>{doctor.mail}</p>
            </div>
            <div className="worker__phone">
                <p>{doctor.telephone}</p>
            </div>
            <DoctorColors />
            <div className="worker__room">
                <p>Room: {doctor.room}</p>
            </div>
            <div className="worker__btns">
                <button className='edit-btn'></button>
                <button className='del-btn'></button>
            </div>
        </div>
    );
};