import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createDrawerNavigator,createAppContainer} from 'react-navigation'
import SplashScreen from './src/screens/splashScreen';
import Home from './src/screens/Home';
import AddProduct from './src/screens/AddProduct';
import Sell from './src/screens/Sell';

const Drawer = createDrawerNavigator({
    Splash:{
        screen:SplashScreen
    },
    Home:{
        screen:Home
    },
    Products:{
        screen:AddProduct
    },
    Sell:{
        screen:Sell
    }
},
{
    initialRouteName:"Home"
})

const AppContainer = createAppContainer(Drawer)

export default class includer extends Component {
    state = {
        color:"black"
    }
  render() {
    return (
            <AppContainer />
    )
  }
}
