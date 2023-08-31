
import '../../StuffElement.scss';


export const AssistantElement = () => { 
    return (
        <div className='worker-element'>
            <div className="worker__id">
                <h3>id</h3>
            </div>
            <div className="worker__name flex-element">
                <h3>fullname</h3>
            </div>
            <div className="worker__mail flex-element">
                <p>mail</p>
            </div>
            <div className="worker__phone flex-element">
                <p>telephone</p>
            </div>
            <div className="worker__btns flex-element">
                <button title='Edit'></button>
                <button title='Delete'></button>
            </div>
        </div>
    );
};