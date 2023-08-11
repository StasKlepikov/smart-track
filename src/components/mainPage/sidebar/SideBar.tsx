import './SideBar.scss';

import { NavLink } from 'react-router-dom';

import { DashboardIcon } from './dashboardIcon/DashboardIcon';
import { StuffIcon } from './stuffIcon/StuffIcon';
import { AllertsIcon } from './allertsIcon/AllertsIcon';
import { SequenceIcon } from './sequenceIcon/SequenceIcon';

export const SideBar = () => { 
    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <p>Logo</p>
            </div>
            <div className="sidebar__nav">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "pending")}>
                    <div className="nav-item">
                        <DashboardIcon />
                        <p>Dashboard</p>
                    </div>
                </NavLink>
                <NavLink
                    to="/stuff"
                    className={({ isActive }) => (isActive ? "active" : "pending")}>
                    <div className="nav-item">
                        <StuffIcon />
                        <p>Stuff</p>
                    </div>
                </NavLink>
                <NavLink
                    to="/allerts"
                    className={({ isActive }) => (isActive ? "active" : "pending")}>
                    <div className="nav-item">
                        <AllertsIcon />
                        <p>Allerts</p>
                    </div>
                </NavLink>
                <NavLink
                    to="/sequence"
                    className={({ isActive }) => (isActive ? "active" : "pending")}>
                    <div className="nav-item">
                        <SequenceIcon/>
                        <p>Sequence</p>
                    </div>
                </NavLink>
            </div>
        </div>
    );
} 