import './Stuff.scss';

import { Outlet } from 'react-router-dom';
import { StuffHeader } from './stuffHeader/StuffHeader';

export const Stuff = () => { 
    return (
        <div className="stuff">
            <StuffHeader/>
            <Outlet />
        </div>
    );
}
