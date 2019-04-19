import React, { Component } from 'react'
import { Text, View,BackHandler } from 'react-native'
import clothing from '../assets/images/clothing.jpg';
import {Header, Title,Button, Left,Body, Icon,Tab, Tabs, TabHeading,Container} from 'native-base'
import ListView from './../components/ListView';

export default class Display extends Component {
    
    _didFocusSubscription;
    _willBlurSubscription;

    constructor(props){
        super(props);
        this.state = {
          color:props.state.color,
          text:props.state.text,
          background:props.state.background,
          status:props.state.statusBarColour,
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
          this.props.navigation.navigation.navigate('Home')
          return true
        }
    
      componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
      }



  render() {
    return (
      <View style={{flex:1}}>
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
        <View style={{flex:1,backgroundColor: this.state.background,width:"100%"}}>
            <View style={{width:"100%",alignItems: 'center',marginTop:10}}>
                <View style={{width:"90%"}}>
                    <ListView back={this.state.color} textColor={this.state.text} Name="Men's Shirt" Price="33" Image={clothing} />
                </View>
            </View>
        </View>
      </View>
    )
  }
}
