import './ButtonAdd.scss';

export const ButtonAdd = ({ text, onClick }: { text: string, onClick: React.MouseEventHandler<HTMLButtonElement> }) => { 
    return (
        <button
            className='button-add'
            onClick={onClick}>
            {text}
        </button>
    );
};