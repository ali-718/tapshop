import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createDrawerNavigator,createAppContainer} from 'react-navigation'
import SplashScreen from './src/screens/splashScreen';
import Home from './src/screens/Home';
import AddProduct from './src/screens/AddProduct';

const Drawer = createDrawerNavigator({
    Splash:{
        screen:SplashScreen
    },
    Home:{
        screen:Home
    },
    Products:{
        screen:AddProduct
    }
},
{
    initialRouteName:"Products"
})

export default AppContainer = createAppContainer(Drawer)