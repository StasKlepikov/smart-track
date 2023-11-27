import './Allerts.scss';

import { AllertsHeader } from './allertHeader/AllertsHeader';
import { AllertElement } from './allertElement/AllertElement';
import { useDispatch } from 'react-redux';
import { API } from '../../../axios';
import { putAllerts } from '../../../services/actions/allertsAction';
import { useSelector } from 'react-redux';
import { Allert, AllertsState } from '../../../services/typedef';
import { useEffect } from 'react';

export const Allerts = () => { 

    const dispatch = useDispatch();
    const allerts = useSelector<{allerts: AllertsState}, Allert[]>(state => state.allerts.allerts)

    const getAllerts = async () => { 
        const response = await API.get("/allerts");
        dispatch(putAllerts(response.data));
    };

    useEffect(() => {
        getAllerts()
            .then()
            .catch((err) => console.log("Allert`s error: ", err));
    }, []);

    return (
        <div className="allerts">
            <AllertsHeader />
            <div className="allerts__container">
                {allerts.map((allert, index) => <AllertElement allert={allert} index={index + 1} key={allert.id}/>)}
            </div>
        </div>
    );
}