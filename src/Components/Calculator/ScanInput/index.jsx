import { useSelector } from 'react-redux';
import wrapper from '../../../app/store/configureStore.js';
import mainSlice from '../../../app/store/reducers/main';
import { ScanInput } from './Style/styled';

const onChangeInput = event => {
    wrapper.dispatch(mainSlice.actions.setScanValue(event.target.value));
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
