import { Provider } from 'react-redux';
import wrapper from '../store/configureStore';

const Providers = ({ children }) => {
    return <Provider store={wrapper}>{children}</Provider>;
};

export default Providers;
