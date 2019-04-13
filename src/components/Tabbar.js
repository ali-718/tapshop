import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import Shop from '../screens/Shop';
import Sell from './../screens/Sell';
import Offers from './../screens/Offers';
import Discussion from './../screens/Discussion';

const Tabbar = createMaterialTopTabNavigator({
  Shops:{
    screen:Shop
  },
  Sell:{
      screen:Sell
  },
  Offers:{
      screen:Offers
  },
  Discussion:{
      screen:Discussion,
      
  }
},
{
    tabBarOptions:{
        activeTintColor:"green",
        inactiveTintColor:"black",
        activeBackgroundColor:"yellow",
        pressColor:"white",
        inactiveBackgroundColor:"white",
        style:{backgroundColor: "white",elevation:0},
        indicatorStyle:{backgroundColor:"green"},
        showIcon:"true",
        iconStyle:{height:0},
        upperCaseLabel:false
    },
    backBehavior:"history"
})

export default createAppContainer(Tabbar);
