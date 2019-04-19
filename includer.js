import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createDrawerNavigator,createAppContainer} from 'react-navigation'
import SplashScreen from './src/screens/splashScreen';
import Home from './src/screens/Home';
import AddProduct from './src/screens/AddProduct';
import Sell from './src/screens/Sell';
import Display from './src/screens/Display';
import Shop from './src/screens/Shop';

export default class Includer extends Component {

    static navigationOptions = {
        drawerLabel:() => null
    }

    
    state = {
        color:this.props.navigation.getParam('color','white'),
        text:this.props.navigation.getParam('text','black'),
        background:this.props.navigation.getParam('back','white'),
        statusBarColour:this.props.navigation.getParam('status','green')
    }

  render() {
    
        const Drawer = createDrawerNavigator({
            Splash:{
                screen:SplashScreen
            },
            Home:{
                screen: props => <Home state={this.state} navigation={props} />,
            },
            Products:{
                screen: props => <AddProduct state={this.state} navigation={props} />
            },
            Sell:{
                screen:props => <Sell state={this.state} navigation={props} />
            },
            Display:{
                screen:props => <Display state={this.state} navigation={props} />
            },
            Shop:{
                screen:props => <Shop state={this.state} navigation={props} />
            },
            Includer:{
                screen:Includer
            }
        },
        {
            initialRouteName:"Home"
        })

        const AppContainer = createAppContainer(Drawer)

    return (
            <AppContainer />
    )
  }
}
