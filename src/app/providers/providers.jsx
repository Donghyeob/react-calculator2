import { Provider } from 'react-redux';
import wrapper from '../store/configureStore.js';

export const Providers = ({ children }) => {
    return <Provider store={wrapper}>{children}</Provider>;
};
