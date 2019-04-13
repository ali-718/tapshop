import React, { Component } from 'react';
import { View, Text,ScrollView, TouchableOpacity,Image } from 'react-native';
import {Header, Title,Button, Left,Body, Icon,Tab, Tabs, TabHeading,Container} from 'native-base'
import ImagePicker from 'react-native-image-crop-picker';

export default class AddProduct extends Component {

    Imager = () => {
        ImagePicker.openPicker({
            multiple: true
          }).then(images => {
              console.log(images)
          });

         
      }

  render() {
    return (
        <ScrollView style={{flex:1}}>
            <View style={{flex:1}}>
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
                <View style={{alignItems: 'center', width:"100%"}}>
                    <TouchableOpacity onPress={this.Imager} activeOpacity={0.7} style={{backgroundColor: "gainsboro",borderColor:"lightgrey",borderWidth:1,width:"80%",marginTop:30, height:100,alignItems: 'center', justifyContent: 'center',}}>
                        <Icon name="camera" />
                        <Text>Tap to add photo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
  }
}
