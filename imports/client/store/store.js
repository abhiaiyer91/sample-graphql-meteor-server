import { createStore } from 'redux';
import rootReducer from '/imports/client/reducers/rootReducer';
const Store = createStore(rootReducer);
export default Store;
