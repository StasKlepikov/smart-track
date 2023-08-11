import './MainPage.scss';

import { Outlet } from 'react-router-dom';

import { SideBar } from './sidebar/SideBar';


export const MainPage = () => { 
    return (
        <div className='mainPage'>
            <SideBar />
            <Outlet />
        </div>
    );
}