import { useSelector } from 'react-redux';
import { printDisplay } from './styled.css';

export const PrintDisplay = () => {
    const display = useSelector(state => state.main.result);

    return <div className={printDisplay}>{display}</div>;
};
