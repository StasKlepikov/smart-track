import '../StuffElement.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { putAssistants } from '../../../../services/actions/assistantsAction';
import { Assistant, AssistantsState } from '../../../../services/typedef';
import { API } from '../../../../axios';
import { AssistantElement } from './assistantElement/AssistantElement';

export const Assistants = () => {

    const dispatch = useDispatch();
    const assistants = useSelector<{ assistants: AssistantsState }, Assistant[]>(state => state.assistants.assistants);
    
    const getAssistants = async () => {
        const response = await API.get("/assistants");
        dispatch(putAssistants(response.data));      
    };

    useEffect(() => {getAssistants().then()}, []);

    return (
        <div className="element">
            {assistants?.map((assistant, index) => <AssistantElement assistant={assistant} index={ index + 1 } key={assistant.id}/>)}
        </div>
    );
 }