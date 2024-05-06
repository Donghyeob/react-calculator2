import { useSelector } from 'react-redux';
import { PrintDisplay } from './Style/styled';

const PrintDisplayEl = () => {
    const resultValue = useSelector(state => state.main.result);

    return <PrintDisplay>{resultValue}</PrintDisplay>;
};

export default PrintDisplayEl;
