import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './router';

class app extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyD0e2AjZuqDANzN9nJFVVJvt3R89O7Gpgc',
      authDomain: 'manager-f0f19.firebaseapp.com',
      databaseURL: 'https://manager-f0f19.firebaseio.com',
      projectId: 'manager-f0f19',
      storageBucket: '',
      messagingSenderId: '1070409858852'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}


export default app;
