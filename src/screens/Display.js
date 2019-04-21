import React, { Component } from 'react'
import { Text, View,BackHandler,ScrollView } from 'react-native'
import clothing from '../assets/images/clothing.jpg';
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
import Girl3 from '../assets/images/girl4.jpg';

export default class Display extends Component {

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
                    <ListView navigation={(val) => this.props.navigation.navigation.navigate("Item",val)} back={this.state.color} textColor={this.state.text} Name="Bermuda Shorts by Armani" Price="19.99" Image={Shorts} />
                </View>
                <View style={{width:"90%"}}>
                    <ListView navigation={(val) => this.props.navigation.navigation.navigate("Item",val)} back={this.state.color} textColor={this.state.text} Name="Men's Blue Shirt by Levis" Price="29.99" Image={Shirt} />
                </View>
                <View style={{width:"90%"}}>
                    <ListView navigation={(val) => this.props.navigation.navigation.navigate("Item",val)} back={this.state.color} textColor={this.state.text} Name="Men's Black Shirt by Armani" Price="34.99" Image={Tshirt} />
                </View>
                <View style={{width:"90%"}}>
                    <ListView navigation={(val) => this.props.navigation.navigation.navigate("Item",val)} back={this.state.color} textColor={this.state.text} Name="Men's Plain Green Shirt" Price="29.99" Image={Green} />
                </View>
                <View style={{width:"90%"}}>
                    <ListView navigation={(val) => this.props.navigation.navigation.navigate("Item",val)} back={this.state.color} textColor={this.state.text} Name="Ladies Shirt by Gucci" Price="49.99" Image={Ladies} />
                </View>
                <View style={{width:"90%"}}>
                    <ListView navigation={(val) => this.props.navigation.navigation.navigate("Item",val)} back={this.state.color} textColor={this.state.text} Name="Men's Plain White Shirt" Price="16.99" Image={White} />
                </View>
                <View style={{width:"90%"}}>
                    <ListView navigation={(val) => this.props.navigation.navigation.navigate("Item",val)} back={this.state.color} textColor={this.state.text} Name="Men's White Shirt by Levis" Price="39.99" Image={WhiteSecond} />
                </View>
            </View>
        </View>
      </ScrollView>
    )
  }
}
