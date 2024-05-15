import { useSelector } from 'react-redux';
import wrapper from '../../../app/store/configureStore';
import mainSlice from '../../../app/store/reducers/main';
import { scanInput } from './styled.css';

const onChangeInput = event => {
    wrapper.dispatch(mainSlice.actions.setScanValue(event.target.value));
};

export const ScanInput = () => {
    const scanValue = useSelector(state => state.main.scanValue);

    return <input className={scanInput} value={scanValue} onChange={onChangeInput} />;
};
