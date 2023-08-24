
import '../../StuffElement.scss';


export const AssistantElement = () => { 
    return (
        <div className='worker-element'>
            <div className="worker__id">
                <h3>id</h3>
            </div>
            <div className="worker__name">
                <h3>fullname</h3>
            </div>
            <div className="worker__mail">
                <p>mail</p>
            </div>
            <div className="worker__phone">
                <p>telephone</p>
            </div>
            <div className="worker__btns">
                <button title='Edit'></button>
                <button title='Delete'></button>
            </div>
        </div>
    );
};