import { ScanInput } from '../../../features/scan';
import { PrintDisplay } from '../../../features/print';
import { Buttons } from '../../../features/buttons/index.jsx';
import { calculator } from './styled.css';

export const Calculator = () => {
    return (
        <div className={calculator}>
            <ScanInput />
            <PrintDisplay />
            <Buttons />
        </div>
    );
};
