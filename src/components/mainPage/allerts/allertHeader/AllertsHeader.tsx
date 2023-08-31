import { useDispatch } from 'react-redux';
import { ButtonAdd } from '../../../../utilities/buttonAdd/ButtonAdd';
import './AllertsHeader.scss';
import { changeModal } from '../../../../services/actions/modalAction';

export const AllertsHeader = () => {

    const dispatch = useDispatch();

    const handleIsOpen = () => {
        dispatch(changeModal({
            isOpen: true,
            mode: "addAllerts"
        }));
    };

    return (
        <div className="allerts__header"> 
            <ButtonAdd text={"Add new"} onClick={handleIsOpen}/>
        </div>
    );
 };