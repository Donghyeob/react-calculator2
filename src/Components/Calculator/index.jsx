import ScanInputEl from './ScanInput/index';
import PrintDisplayEl from './PrintDisplay/index';
import CalculatorButtons from './CalculatorButtons/index';
import { Calculator } from './Style/styled';

const CalculatorEl = () => {
    return (
        <Calculator>
            <ScanInputEl />
            <PrintDisplayEl />
            <CalculatorButtons />
        </Calculator>
    );
};

export default CalculatorEl;
