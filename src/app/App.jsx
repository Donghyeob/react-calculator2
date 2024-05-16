import { Calculator } from '../pages/Calculator';
import { app } from './styles/styles.css';

function App() {
    return (
        <div className={`${app}`}>
            <Calculator />
        </div>
    );
}

export default App;
