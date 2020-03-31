import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import store from './store/configureStore'
import { saveState } from './store/localStorage';
import { Provider } from 'react-redux';

store.subscribe(() => {
    saveState(store.getState());
})

const Root = () => {
	return (
		
		<Provider store={store}>
      <App />
		</Provider>
	)
}

ReactDOM.render(<Root store={store} />, document.getElementById('root'));