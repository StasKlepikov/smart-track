import '../../StuffElement.scss';


export const ReceptionistElement = () => { 
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
            <div className="worker__room">
                <p>Room: room</p>
            </div>
            <div className="worker__btns">
                <button></button>
                <button></button>
            </div>
        </div>
    );
};