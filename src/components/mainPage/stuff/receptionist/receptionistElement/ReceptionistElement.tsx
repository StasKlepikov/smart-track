import { useDispatch } from 'react-redux';
import { ReceptionistElementProps } from '../../../../../services/typedef';
import '../../StuffElement.scss';
import { changeModal } from '../../../../../services/actions/modalAction';
import { API } from '../../../../../axios';
import { deleteReceptionists } from '../../../../../services/actions/receptionistsAction';


export const ReceptionistElement = ({ receptionist, index }: ReceptionistElementProps) => { 

    const dispatch = useDispatch();

    const handleEdit = () => {
        const { id , ...initialReceptionist} = receptionist;
        dispatch(changeModal({
            isOpen: true,
            mode: 'edit',
            currentWorkerId: id,
            initialReceptionist
        }));
    };

    const handleDelete = () => {
        API.delete(`/receptionists/${receptionist.id}`)
        .then(response => {
            dispatch(deleteReceptionists(receptionist.id));
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
                <h3>{receptionist.fullname}</h3>
            </div>
            <div className="worker__mail flex-element">
                <p>{receptionist.mail}</p>
            </div>
            <div className="worker__phone flex-element">
                <p>{receptionist.phone}</p>
            </div>
            <div className="worker__btns flex-element">
                <button title='Edit' onClick={() => handleEdit()}></button>
                <button title='Delete' onClick={() => handleDelete()}></button>
            </div>
        </div>
    );
};