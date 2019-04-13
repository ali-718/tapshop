import React, { Component } from 'react'
import { Text, View,Animated,Image, Dimensions } from 'react-native'
import Splash from '../assets/images/Splash.jpeg' 
import {Icon} from 'native-base'

export default class SplashScreen extends Component{

    state = {
        animation : new Animated.Value(1)
    }

    static navigationOptions = {
        drawerLabel : () => null
    }

    componentDidMount()
    {
        setTimeout(() => {
            this.Animation()            
        }, 2000);

    }

    Animation = () => {
        Animated.timing(this.state.animation,{
            toValue:2,
            duration:800
        }).start(
            () => {
                this.props.navigation.navigate("Home")
            }
        )
    }


  render() {

    const TranslationY = this.state.animation.interpolate({
        inputRange:[1,2],
        outputRange:[0,-Dimensions.get('window').height]
    })

    const animatedStyle={
           transform: [
               {
               translateY:TranslationY,
           },
        ]
    }

    return (
      <View style={{flex:1,justifyContent: 'center', alignItems: 'center',backgroundColor: "white",}}>
        <Animated.View style={[animatedStyle,{height:200}]}>
            <Image source={Splash} style={[{width:100,height:150}]}  />
        </Animated.View>
      </View>
    )
  }
}
