import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import _globalStyles from '_utils/global-styles';
import Main from 'containers/Main/Main';

render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('app')
);