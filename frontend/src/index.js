import React from 'react';
import ReactDOM from 'react-dom';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import ReduxToastr from 'react-redux-toastr';

import App from './App';

import { Provider } from 'react-redux';
import store from './_redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ReduxToastr
      timeOut={2000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick />
  </Provider>,
  document.getElementById('root')
);