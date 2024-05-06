import { useSelector } from 'react-redux';
import wrapper from '../../../store/configureStore';
import { mainActions } from '../../../store/reducers/main';
import { ScanInput } from './Style/styled';

const onChangeInput = event => {
    wrapper.dispatch(mainActions.setScanValue(event.target.value));
};

const ScanInputEl = () => {
    const inputValue = useSelector(state => state.main.scanValue);

    return (
        <>
            <ScanInput value={inputValue} onChange={onChangeInput} />
        </>
    );
};

export default ScanInputEl;
