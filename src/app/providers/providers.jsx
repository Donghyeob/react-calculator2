import { Provider } from 'react-redux';
import wrapper from '../store/configureStore';

export const Providers = ({ children }) => {
    return <Provider store={wrapper}>{children}</Provider>;
};
