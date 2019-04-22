import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,TouchableOpacity,ScrollView,BackHandler } from 'react-native';
import {Header, Title,Button, Left,Body, Icon,Tab, Tabs, TabHeading,Container} from 'native-base'
import Zaaviyah from '../assets/images/zaaviyah.jpg'

export default class Contact extends Component {

    _didFocusSubscription;
    _willBlurSubscription;
    
    constructor(props) {
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
        this.props.navigation.navigation.navigate('Account')
        return true
        }
    
      componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
      }

  render() {
    return (
      <ScrollView style={{flex:1}}>
       {/* Header */}
       <Header hasTabs style={{backgroundColor:this.state.color,height:40,borderBottomWidth:1,borderBottomColor:"green",elevation:0}}  androidStatusBarColor={this.state.status}>
              <Left>
                <Button transparent onPress={() => this.props.navigation.navigation.navigate("Account")}>
                  <Icon name='arrow-back' style={{color:this.state.text}}/>
                </Button>
              </Left>
              <Body>
                <Title style={{color:this.state.text}}>TapShop</Title>
              </Body>
          </Header>
        {/* Header ends here */}
        <View style={{flex:1,width:"100%",backgroundColor:this.state.color}}>
            <View style={{alignItems:"center"}}>
                <Image source={Zaaviyah} style={{width:200,height:200}} />
            </View>
            <View style={{alignItems:"center",marginTop: 20,}}>
                <Icon name="envelope" type="FontAwesome" style={{fontSize:40,color:this.state.text}} />
                <Text style={{color:this.state.text}}>info@zaaviyah.com</Text>
                <Text style={{color:this.state.text}}>contact@zaaviyah.com </Text>
                <Text style={{color:this.state.text}}>careers@zaaviyah.com</Text>
            </View>
            <View style={{alignItems:"center",marginTop: 40,}}>
                <Icon name="phone" type="FontAwesome" style={{fontSize:40,color:this.state.text}} />
                <Text style={{color:this.state.text}}>+971 4 2575928</Text>
            </View>
            <View style={{alignItems:"center",marginTop: 40,margin: 50,marginLeft: 60,}}>
                <Icon name="pin" style={{fontSize:40,color:this.state.text}} />
                <Text style={{color:this.state.text,}}>{this.state.Lang == "en" ? "403 Dubai Building,Damascus st,Al Qusaus 4 P.O.Box 35538, Dubai United Arab Emirates" : "403 مبنى دبي ، شارع دمشق ، القصيص 4 ص ب 35538 ​​، دبي ، الإمارات العربية المتحدة"}</Text>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
    Header:{
        width:"100%",
        height:50,
        backgroundColor: 'white',
        flexDirection: 'row',
      }
})
