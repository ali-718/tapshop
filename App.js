import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import AppContainer from './includer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './src/reducers/colorReducer'

const Store = createStore(Reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={Store} >
       <AppContainer />
      </Provider>
    );
  }
}