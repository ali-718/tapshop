import React, { Component } from 'react'
import { Text, View,BackHandler } from 'react-native'
import {Header, Title,Button, Left,Body, Icon,Tab, Tabs, TabHeading,Container, Right} from 'native-base'
import Shop from './../screens/Shop';
import Sell from './../screens/Sell';
import Offers from './Discussion';

export default class Home extends Component {

  _didFocusSubscription;
  _willBlurSubscription;

  constructor(props){
    super(props);
    this.state = {
      color:props.state.color,
      text:props.state.text,
      back:props.state.backgroundColor,
      status:props.state.statusBarColour,
      navigation:props.navigation,
      Lang:props.state.Lang
    }
    this._didFocusSubscription = props.navigation.navigation.addListener('didFocus', payload =>
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
  );
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.navigation.addListener('willBlur', payload =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
  }

  onBackButtonPressAndroid = () => {
      BackHandler.exitApp();
      return true
    }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

  render() {
    console.log(this.props)
    return (
      <View style={{flex:1}}>
       <Container>
          {this.state.Lang == "en" ? <Header hasTabs style={{backgroundColor:this.state.color,height:40,borderBottomWidth:1,borderBottomColor:"green",elevation:0}}  androidStatusBarColor={this.state.status}>
              <Left>
                <Button transparent onPress={() => this.props.navigation.navigation.toggleDrawer()}>
                  <Icon name='menu' style={{color:this.state.text}}/>
                </Button>
              </Left>
              <Left />
              <Body>
                <Title style={{color:this.state.text}}>TapShop</Title>
              </Body>
          </Header> : <Header hasTabs style={{backgroundColor:this.state.color,height:40,borderBottomWidth:1,borderBottomColor:"green",elevation:0}}  androidStatusBarColor={this.state.status}>
              <Left />
              <Left />
              <Left />
              <Body style={{alignItems: 'center',}}>
                <Title style={{color:this.state.text}}>TapShop</Title>
              </Body>
              <Right>
              <Button transparent onPress={() => this.props.navigation.navigation.toggleDrawer()}>
                  <Icon name='menu' style={{color:this.state.text}}/>
              </Button>
              </Right>
          </Header> }
          <Tabs tabContainerStyle={{height:40}} tabBarUnderlineStyle={{backgroundColor:"green"}}>
          <Tab activeTabStyle={{backgroundColor:this.state.color}} textStyle={{color:this.state.text}} tabStyle={{backgroundColor:this.state.color}} activeTextStyle={{color:"green",fontWeight:"normal"}} heading={this.state.Lang == "en" ? "Shop" : "متجر"}>
            <Shop navigation={(val) => this.props.navigation.navigation.navigate(val)} state={this.props.state} />
          </Tab>
          <Tab activeTabStyle={{backgroundColor:this.state.color}} textStyle={{color:this.state.text}} tabStyle={{backgroundColor:this.state.color}} activeTextStyle={{color:"green",fontWeight:"normal"}} heading={this.state.Lang == "en" ? "Sell" : "يبيع"}>
            <Sell state={this.props.state} products={() => this.props.navigation.navigation.navigate("AddProduct")} />
          </Tab>
          <Tab activeTabStyle={{backgroundColor:this.state.color}} textStyle={{color:this.state.text}} tabStyle={{backgroundColor:this.state.color}} activeTextStyle={{color:"green",fontWeight:"normal"}} heading={this.state.Lang == "en" ? "Offers" : "عروض"}>
            <Offers state={this.props.state} />
          </Tab>
        </Tabs>
       </Container>
      </View>
    )
  }
}
