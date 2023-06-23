import {createStoreHook} from "react-redux";

import reducer from './reducers.js';

const store = createStoreHook(reducer);

export default store;