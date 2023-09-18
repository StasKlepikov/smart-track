import './AllertElement.scss';

import { Allert, RootState } from '../../../../services/typedef';
import { useDispatch } from 'react-redux';
import { defaultWorker } from '../../../../services/reducers/modalReducer';
import { changeModal } from '../../../../services/actions/modalAction';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const AllertElement = ({ allert, checked }: { allert: Allert, checked: boolean }) => { 
    const dispatch = useDispatch();
    const { initialDoctor } = useSelector((state: RootState) => state.modal);

    const allertColor = `rgba(${parseInt(allert.color.slice(1, 3), 16)}, ${parseInt(allert.color.slice(3, 5), 16)}, ${parseInt(allert.color.slice(5, 7), 16)}, 0.3)`;

    const style = {
        background: allertColor,
        border: `2px solid ${allert.color}`,
    };


    const changeAllertState: React.ChangeEventHandler<HTMLInputElement> = (event) => { 
        const allerts = event.target.checked
            ? [...initialDoctor.allerts, allert]
            : initialDoctor.allerts.filter(({ id }) => id !== allert.id);
        dispatch(changeModal({
            initialDoctor: {
                ...initialDoctor,
                allerts
            }
        }));
    };

    return (
        <label className="allert">
            <input type="checkbox"
                checked={checked}
                onChange={changeAllertState}/>
            <div className="checkmark" style={style}>
                <p>{allert.name}</p>
            </div>
        </label>
    );
};