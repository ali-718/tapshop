import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header, Title,Button, Left,Body, Icon,Tab, Tabs, TabHeading,Container} from 'native-base'
import SplashScreen from './splashScreen';
import Tabbar from './../components/Tabbar';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: "white",}}>
       <Container>
          <Header hasTabs style={{backgroundColor: "white",height:40,borderBottomWidth:1,borderBottomColor:"green",elevation:0}}  androidStatusBarColor="black">
              <Left>
                <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
                  <Icon name='menu' style={{color:"black"}}/>
                </Button>
              </Left>
              <Body>
                <Title style={{color:"black"}}>TapShop</Title>
              </Body>
          </Header>
          <Tabbar />
       </Container>
      </View>
    )
  }
}
