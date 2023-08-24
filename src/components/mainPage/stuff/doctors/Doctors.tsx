import '../StuffElement.scss';

import { API } from '../../../../axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { putDoctors } from '../../../../services/actions/doctorsAction';
import { useEffect } from 'react';
import { Doctor, DoctorsState } from '../../../../services/typedef';

import { DoctorElement } from './doctorElement/DoctorElement';

export const Doctors = () => {

    const dispatch = useDispatch();
    const doctors = useSelector<{ doctors: DoctorsState }, Doctor[]>(state => state.doctors.doctors);
    
    const getDoctors = async () => {
        const response = await API.get("/doctors");
        dispatch(putDoctors(response.data));      
    };

    useEffect(() => {getDoctors().then()}, []);

    return (
        <div className="element">
            {doctors?.map((doctor, index) => <DoctorElement doctor={doctor} index={ index + 1 } key={doctor.id} />)}
        </div>
    );
}
