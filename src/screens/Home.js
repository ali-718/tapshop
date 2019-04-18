import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header, Title,Button, Left,Body, Icon,Tab, Tabs, TabHeading,Container} from 'native-base'
import Tabbar from './../components/Tabbar';
import {connect} from 'react-redux'
import Shop from './../screens/Shop';
import Sell from './../screens/Sell';
import Offers from './../screens/Offers';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      color:props.state.color,
      text:props.state.text
    }
  }

  render() {
    console.log(this.state.color)
    return (
      <View style={{flex:1}}>
       <Container>
          <Header hasTabs style={{backgroundColor:"white",height:40,borderBottomWidth:1,borderBottomColor:"green",elevation:0}}  androidStatusBarColor="black">
              <Left>
                <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
                  <Icon name='menu' style={{color:"black"}}/>
                </Button>
              </Left>
              <Body>
                <Title style={{color:"black"}}>TapShop</Title>
              </Body>
          </Header>
          <Tabs tabContainerStyle={{height:40}} tabBarUnderlineStyle={{backgroundColor:"green"}}>
          <Tab activeTabStyle={{backgroundColor:"white"}} textStyle={{color:"black"}} tabStyle={{backgroundColor:"white"}} activeTextStyle={{color:"green",fontWeight:"normal"}} heading="Shop">
            <Shop />
          </Tab>
          <Tab activeTabStyle={{backgroundColor:"white"}} textStyle={{color:"black"}} tabStyle={{backgroundColor:"white"}} activeTextStyle={{color:"green",fontWeight:"normal"}} heading="Sell">
            <Sell products={() => this.props.navigation.navigate("Products")} />
          </Tab>
          <Tab activeTabStyle={{backgroundColor:"white"}} textStyle={{color:"black"}} tabStyle={{backgroundColor:"white"}} activeTextStyle={{color:"green",fontWeight:"normal"}} heading="Offers">
            <Offers />
          </Tab>
        </Tabs>
       </Container>
      </View>
    )
  }
}
