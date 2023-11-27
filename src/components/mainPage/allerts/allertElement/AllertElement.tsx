import './AllertElement.scss';
import { AllertElementProps } from '../../../../services/typedef';
import { API } from '../../../../axios';
import { useDispatch } from 'react-redux';
import { deleteAllert } from '../../../../services/actions/allertsAction';

export const AllertElement = ({ allert, index }: AllertElementProps) => {
    const dispatch = useDispatch();

    const allertColor = `rgba(${parseInt(allert.color.slice(1, 3), 16)}, ${parseInt(allert.color.slice(3, 5), 16)}, ${parseInt(allert.color.slice(5, 7), 16)}, 0.3)`;

    const handleDelete = () => {
        API.delete(`/allerts/${allert.id}`)
            .then(response => {
                dispatch(deleteAllert(allert.id));
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div className='allert-element'>
            <div className="allert__id">
                <h3>{index}</h3>
            </div>
            <div className="allert__name flex-element">
                <h3>{allert.name}</h3>
            </div>
            <div className="allert__marker flex-element">
                <span style={{ background: allertColor, outline: `2px solid ${allert.color}` }}></span>
            </div>
            <div className="allert__btns">
                <button title='Edit'></button>
                <button title='Delete' onClick={() => handleDelete()}></button>
            </div>
        </div>
    );
};