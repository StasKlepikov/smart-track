import './StuffHeader.scss';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeModal } from '../../../../services/actions/modalAction';

import { ButtonAdd } from '../../../../utilities/buttonAdd/ButtonAdd';

export const StuffHeader = () => {

    const dispatch = useDispatch();

    const handleIsOpen = () => {
        dispatch(changeModal({
            isOpen: true,
            mode: "add",
        }));
    };

    return (
        <div className="stuff__header">
                <div className="stuff__nav">
                    <ul>
                        <NavLink
                            to="/stuff"
                            className={({ isActive }) => (isActive ? "active" : "pending")
                            } end><li>Doctors</li></NavLink>
                        <NavLink
                            to="/stuff/assistants"
                            className={({ isActive }) => (isActive ? "active" : "pending") 
                            }><li>Assistants</li></NavLink>
                        <NavLink
                            to="/stuff/receptionist"
                            className={({ isActive }) => (isActive ? "active" : "pending")
                            }><li>Receptionists</li></NavLink>
                    </ul>
                </div>
                <ButtonAdd text={"Add new"} onClick={handleIsOpen}/>
            </div>
    );
 };