import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createDrawerNavigator,createAppContainer} from 'react-navigation'
import SplashScreen from './src/screens/splashScreen';
import Home from './src/screens/Home';

const Drawer = createDrawerNavigator({
    Splash:{
        screen:SplashScreen
    },
    Home:{
        screen:Home
    }
},
{
    initialRouteName:"Home"
})

export default AppContainer = createAppContainer(Drawer)