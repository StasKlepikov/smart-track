import './NotFoundPage.scss';

import { Link } from 'react-router-dom';

export const NotFoundPage = () => { 
    return (
        <div className='not-found-page'>
            <p>Oops... Something went <span>wrong</span>.<br/>Page <span>not</span> found :(</p>
            <Link to="/" className='not-found-page__link'>Go back!</Link>
        </div>
    );
}