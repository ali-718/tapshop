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
      text:props.state.text,
      back:props.state.backgroundColor,
      status:props.state.statusBarColour,
      navigation:props.navigation
    }
  }

  render() {
    console.log(this.props)
    return (
      <View style={{flex:1}}>
       <Container>
          <Header hasTabs style={{backgroundColor:this.state.color,height:40,borderBottomWidth:1,borderBottomColor:"green",elevation:0}}  androidStatusBarColor={this.state.status}>
              <Left>
                <Button transparent onPress={() => this.props.navigation.navigation.toggleDrawer()}>
                  <Icon name='menu' style={{color:this.state.text}}/>
                </Button>
              </Left>
              <Body>
                <Title style={{color:this.state.text}}>TapShop</Title>
              </Body>
          </Header>
          <Tabs tabContainerStyle={{height:40}} tabBarUnderlineStyle={{backgroundColor:"green"}}>
          <Tab activeTabStyle={{backgroundColor:this.state.color}} textStyle={{color:this.state.text}} tabStyle={{backgroundColor:this.state.color}} activeTextStyle={{color:"green",fontWeight:"normal"}} heading="Shop">
            <Shop navigation={(val) => this.props.navigation.navigation.navigate(val)} state={this.props.state} />
          </Tab>
          <Tab activeTabStyle={{backgroundColor:this.state.color}} textStyle={{color:this.state.text}} tabStyle={{backgroundColor:this.state.color}} activeTextStyle={{color:"green",fontWeight:"normal"}} heading="Sell">
            <Sell state={this.props.state} Includer={() => this.props.navigation.navigation.navigate("Includer",{text:"white",color:"grey",back:"grey",status:"grey"})} products={() => this.props.navigation.navigation.navigate("Products")} />
          </Tab>
          <Tab activeTabStyle={{backgroundColor:this.state.color}} textStyle={{color:this.state.text}} tabStyle={{backgroundColor:this.state.color}} activeTextStyle={{color:"green",fontWeight:"normal"}} heading="Offers">
            <Offers state={this.props.state} />
          </Tab>
        </Tabs>
       </Container>
      </View>
    )
  }
}
