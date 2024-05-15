import { button } from './styled.css';

export const Button = ({ onClick, text }) => {
    return (
        <div className={button} onClick={onClick}>
            {text}
        </div>
    );
};
