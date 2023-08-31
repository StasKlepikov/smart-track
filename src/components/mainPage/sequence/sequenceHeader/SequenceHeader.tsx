import './SequenceHeader.scss';

import { useDispatch } from 'react-redux';
import { changeModal } from '../../../../services/actions/modalAction';

import { ButtonAdd } from '../../../../utilities/buttonAdd/ButtonAdd';

export const SequenceHeader = () => {

    const dispatch = useDispatch();

    const handleIsOpen = () => {
        dispatch(changeModal({
            isOpen: true,
            mode: "add"
        }));
    };

    return (
        <div className="sequence__header"> 
            <div className="sequence__menu">
                
            </div>
            <ButtonAdd text={"Add new"} onClick={handleIsOpen}/>
        </div>
    );
 };