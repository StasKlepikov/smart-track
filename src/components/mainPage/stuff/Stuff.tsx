import './Stuff.scss';

import { Outlet, NavLink } from 'react-router-dom';

export const Stuff = () => { 
    return (
        <div className="stuff">
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
                            }><li>Receptionist</li></NavLink>
                    </ul>
                </div>
                <button className='stuff__addBtn'>Add new</button>
            </div>
            <Outlet />
        </div>

    );
}
