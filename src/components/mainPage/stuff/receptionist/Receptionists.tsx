import '../StuffElement.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { putReceptionists } from '../../../../services/actions/receptionistsAction';
import { Receptionist, ReceptionistsState } from '../../../../services/typedef';
import { API } from '../../../../axios';
import { ReceptionistElement } from './receptionistElement/ReceptionistElement';
import { changeModal } from '../../../../services/actions/modalAction';

export const Receptionists = () => {

    const dispatch = useDispatch();
    const receptionists = useSelector<{ receptionists: ReceptionistsState }, Receptionist[]>(state => state.receptionists.receptionists);
    
    const getReceptionists = async () => {
        const response = await API.get("/receptionists");
        dispatch(putReceptionists(response.data));      
    };

    useEffect(() => {
        getReceptionists().then();
        dispatch(changeModal({target: "receptionist"}));
    }, []);

    return (
        <div className="element">
            {receptionists?.map((receptionist, index) => <ReceptionistElement receptionist={receptionist} index={ index + 1 } key={receptionist.id}/>)}
        </div>
    );
}