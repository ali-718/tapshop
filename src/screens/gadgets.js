import React, { Component } from 'react'
import { Text, View,BackHandler,ScrollView } from 'react-native'
import {Header, Title,Button, Left,Body, Icon,Tab, Tabs, TabHeading,Container} from 'native-base'
import ListView from './../components/ListView';
import Shorts from '../assets/images/bermuda_short.jpg';
import Shirt from '../assets/images/shirt.jpg';
import Tshirt from '../assets/images/black_shirt.jpg';
import Green from '../assets/images/green_shirt.jpg';
import Ladies from '../assets/images/ladies_shirt.jpg';
import White from '../assets/images/white_shirt.jpg';
import WhiteSecond from '../assets/images/white_shirt_second.jpg';
import Shoes from '../assets/images/shoes_second.jpg';
import Lawn from '../assets/images/women_lawn.jpg';
import Bag1 from '../assets/images/bag1.jpg';
import Bag2 from '../assets/images/bag2.jpg';
import LapBag from '../assets/images/lapbag.jpg';
import smallbag from '../assets/images/smallbag.jpeg';
import smartwatch from '../assets/images/smart.jpg';
import samsungfit from '../assets/images/samsungfit.jpg';
import omen from '../assets/images/omen.png';

export default class Gadgets extends Component {

  static navigationOptions  ={
    drawerLabel:() => null
  }
    
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
      <ScrollView style={{flex:1}}>
        <Header hasTabs style={{backgroundColor:this.state.color,height:40,borderBottomWidth:1,borderBottomColor:"green",elevation:0}}  androidStatusBarColor={this.state.status}>
              <Left>
                <Button transparent onPress={() => this.props.navigation.navigation.navigate("Home")}>
                  <Icon name='arrow-back' style={{color:this.state.text}}/>
                </Button>
              </Left>
              <Body>
                <Title style={{color:this.state.text}}>TapShop</Title>
              </Body>
        </Header>
        <View style={{flex:1,backgroundColor: this.state.background,width:"100%"}}>
            <View style={{width:"100%",alignItems: 'center',marginTop:10,marginBottom:10}}>
                <View style={{width:"90%"}}>
                    <ListView navigation={(val) => this.props.navigation.navigation.navigate("Item",val)} back={this.state.color} textColor={this.state.text} Name="HP Omen gaming laptop" Price="899.99" Image={omen} />
                </View>
                <View style={{width:"90%"}}>
                    <ListView navigation={(val) => this.props.navigation.navigation.navigate("Item",val)} back={this.state.color} textColor={this.state.text} Name="Orange ladies bag" Price="29.99" Image={Bag1} />
                </View>
                <View style={{width:"90%"}}>
                    <ListView navigation={(val) => this.props.navigation.navigation.navigate("Item",val)} back={this.state.color} textColor={this.state.text} Name="Wolf Leather bag" Price="44.99" Image={Bag2} />
                </View>
                <View style={{width:"90%"}}>
                    <ListView navigation={(val) => this.props.navigation.navigation.navigate("Item",val)} back={this.state.color} textColor={this.state.text} Name="Anti-theft Laptop bag" Price="19.99" Image={LapBag} />
                </View>
                <View style={{width:"90%"}}>
                    <ListView navigation={(val) => this.props.navigation.navigation.navigate("Item",val)} back={this.state.color} textColor={this.state.text} Name="Black HP laptop Bag" Price="39.99" Image={smallbag} />
                </View>
                <View style={{width:"90%"}}>
                    <ListView navigation={(val) => this.props.navigation.navigation.navigate("Item",val)} back={this.state.color} textColor={this.state.text} Name="Apple Smart Watch" Price="159.99" Image={smartwatch} />
                </View>
                <View style={{width:"90%"}}>
                    <ListView navigation={(val) => this.props.navigation.navigation.navigate("Item",val)} back={this.state.color} textColor={this.state.text} Name="Samsung Gear Fit2 Pro" Price="129.99" Image={samsungfit} />
                </View>
            </View>
        </View>
      </ScrollView>
    )
  }
}
