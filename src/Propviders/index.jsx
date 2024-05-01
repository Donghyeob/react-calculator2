import wrapper from '../store/configureStore';
import { Provider } from 'react-redux';

const Providers = ({ children }) => {
    return <Provider store={wrapper}>{children}</Provider>;
};

export default Providers;
