import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './src/reducers/colorReducer'
import {createStackNavigator,createAppContainer} from 'react-navigation'

import Includer from './includer'

export default class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}


const DrawerNav = createStackNavigator({
  Home:{
    screen:Includer
  }
},
{
  headerMode:"none"
}
)

const AppContainer = createAppContainer(DrawerNav)