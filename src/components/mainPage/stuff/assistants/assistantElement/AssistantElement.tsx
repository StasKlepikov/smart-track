import '../../StuffElement.scss';

import { useDispatch } from 'react-redux';
import { AssistantElementProps } from '../../../../../services/typedef';
import { API } from '../../../../../axios';
import { deleteAssistants } from '../../../../../services/actions/assistantsAction';

export const AssistantElement = ({ assistant, index }: AssistantElementProps) => { 
    const dispatch = useDispatch();

    const handleDelete = () => {
        API.delete(`/assistants/${assistant.id}`)
        .then(response => {
            dispatch(deleteAssistants(assistant.id));
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
                <h3>{assistant.fullname}</h3>
            </div>
            <div className="worker__mail flex-element">
                <p>{assistant.mail}</p>
            </div>
            <div className="worker__phone flex-element">
                <p>{assistant.phone}</p>
            </div>
            <div className="worker__btns flex-element">
                <button title='Edit'></button>
                <button title='Delete' onClick={() => handleDelete()}></button>
            </div>
        </div>
    );
};