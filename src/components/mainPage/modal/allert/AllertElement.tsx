import './AllertElement.scss';

import { Allert } from '../../../../services/typedef';

export const AllertElement = ({ allert }: { allert: Allert }) => { 
    const allertColor = `rgba(${parseInt(allert.color.slice(1, 3), 16)}, ${parseInt(allert.color.slice(3, 5), 16)}, ${parseInt(allert.color.slice(5, 7), 16)}, 0.3)`;
    const style = {
        background: allertColor,
        border: `2px solid ${allert.color}`,
    };
    return (
        <label className="allert">
            <input type="checkbox" />
            <div className="checkmark" style={style}>
                <p>{allert.name}</p>
            </div>
        </label>
    );
};