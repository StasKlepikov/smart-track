import './MainPage.scss';

import { Outlet } from 'react-router-dom';
import { SideBar } from './sidebar/SideBar';
import { Modal } from './modal/Modal';

export const MainPage = () => { 
    return (
        <div className='mainPage'>
            <SideBar />
            <Outlet />
            <Modal />
        </div>
    );
}