import './Allert.scss';

export const Allert = () => { 
    return (
        <label className="allert">
            <input type="checkbox" />
            <div className="checkmark">
                 <p>Text</p>
            </div>
        </label>
    );
};