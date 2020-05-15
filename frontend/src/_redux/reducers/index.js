import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'

import authenticateReducer from './authenticateReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
    token: authenticateReducer,
    data: dataReducer,
    toastr: toastrReducer
});

export default rootReducer;