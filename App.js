import React, { Component } from 'react';
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