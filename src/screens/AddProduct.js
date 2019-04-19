import React, { Component } from 'react';
import { View, Text,ScrollView, TouchableOpacity,Image } from 'react-native';
import {Header, Title,Button, Left,Body, Icon,Item, Input, Label} from 'native-base'
import ImagePicker from 'react-native-image-crop-picker';
import { Chip,HelperText } from 'react-native-paper';

export default class AddProduct extends Component {

    constructor(props){
        super(props);
        this.state = {
          color:props.state.color,
          text:props.state.text,
          background:props.state.background,
          clicked:"",
          status:props.state.statusBarColour
        }
      }
    static navigationOptions =  {
        tabBarLabel : () => null,
    }

    Imager = () => {
        ImagePicker.openPicker({
            multiple: true
          }).then(images => {
              console.log(images)
          });  
      }

  render() {

    const Chips = () => {
        if(this.state.clicked == "New")
        {
          return(
              <View style={{flexDirection:"row"}}>
                <Chip icon="check" selected selectedColor="green" mode="outlined"  onPress={() => {this.setState({clicked:"New"})}}>New</Chip>
                <Chip mode="outlined" style={{marginLeft:10}} onPress={() => {this.setState({clicked:"Used"})}}>Used</Chip>
              </View>
          )
        }
        
        if(this.state.clicked == "Used")
        {
          return(
              <View style={{flexDirection:"row"}}>
                <Chip mode="outlined"  onPress={() => {this.setState({clicked:"New"})}}>New</Chip>
                <Chip icon="check" selected style={{marginLeft:10}}  selectedColor="green" mode="outlined"  onPress={() => {this.setState({clicked:"Used"})}}>Used</Chip>
              </View>
          )
        }

        if(this.state.clicked == "")
        {
          return(
              <View style={{flexDirection:"row"}}>
                <Chip mode="outlined"  onPress={() => {this.setState({clicked:"New"})}}>New</Chip>
                <Chip mode="outlined" style={{marginLeft:10}}  onPress={() => {this.setState({clicked:"Used"})}}>Used</Chip>
              </View>
          )
        }
        
        
    }

    return (
        <ScrollView style={{flex:1}}>
            <View style={{flex:1,width:"100%",backgroundColor:this.state.background}}>
                <Header hasTabs style={{backgroundColor: this.state.background,height:40,borderBottomWidth:1,borderBottomColor:"green",elevation:0}}  androidStatusBarColor={this.state.status}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigation.navigate("Home")}>
                        <Icon name='arrow-back' style={{color:this.state.text}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color:this.state.text}}>TapShop</Title>
                    </Body>
                </Header>
                <View style={{alignItems: 'center', width:"100%"}}>
                    <TouchableOpacity onPress={this.Imager} activeOpacity={0.7} style={{backgroundColor: "gainsboro",borderColor:"lightgrey",borderWidth:1,width:"80%",marginTop:30, height:100,alignItems: 'center', justifyContent: 'center',}}>
                        <Icon name="camera" />
                        <Text>Tap to add photo</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:"80%", justifyContent: 'center', flexDirection:"row",marginTop:20}}>
                    <View style={{width:"40%",alignItems: 'center',justifyContent: 'flex-end', height:45}}>
                        <Icon name="phone-portrait" />
                    </View>
                    <View style={{width:"60%",justifyContent: 'flex-end'}}>
                    <Item floatingLabel>
                        <Label style={{color:this.state.text}}>Title</Label>
                        <Input />
                    </Item>
                    </View>
                </View>
                <View style={{width:"80%", justifyContent: 'center', flexDirection:"row",marginTop:20}}>
                    <View style={{width:"40%",alignItems: 'center',justifyContent: 'flex-end', height:45}}>
                        <Icon name="pin" />
                    </View>
                    <View style={{width:"60%",justifyContent: 'flex-end'}}>
                    <Item floatingLabel>
                        <Label style={{color:this.state.text}}>Location</Label>
                        <Input />
                    </Item>
                    </View>
                </View>
                <View style={{width:"100%",justifyContent: 'center', alignItems: 'center', marginTop:40}}>
                    <Text style={{marginBottom:10,color:this.state.text}}>Condition</Text>
                    {<Chips />}
                </View>
                <View style={{width:"80%", justifyContent: 'center', flexDirection:"row",marginTop:20}}>
                    <View style={{width:"40%",alignItems: 'center',justifyContent: 'flex-end', height:45}}>
                        <Icon name="dollar-sign" type="FontAwesome5" />
                    </View>
                    <View style={{width:"60%",justifyContent: 'flex-end'}}>
                    <Item floatingLabel>
                        <Label style={{color:this.state.text}}>Selling Price</Label>
                        <Input />
                    </Item>
                    </View>
                </View>
                <View style={{width:"100%", alignItems: 'center', marginTop:40}}>
                    <View style={{width:"80%",alignItems: 'center',}}>
                        <Text style={{fontSize:18,color:this.state.text}}>Details</Text>
                        <Text style={{fontSize:10}}>
                            Anything you want buyers to know.
                        </Text>
                        <Item bordered={true}>
                            <Input />
                        </Item>
                    </View>
                </View>
                <View style={{alignItems: 'center', flex:1,marginTop:20,marginBottom:30}}>
                    <TouchableOpacity activeOpacity={0.8} style={{width:"80%",height:50, backgroundColor: "green", marginTop:20, borderRadius:10}}>
                        <View style={{width:"100%",alignItems: 'center', justifyContent: 'center', height:50,}}>
                            <Text style={{color:"white", fontSize:15,marginLeft:5}}>Post</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{width:"80%",height:50,borderWidth:1, borderColor: "green", marginTop:10, borderRadius:10}}>
                        <View style={{width:"100%",alignItems: 'center', justifyContent: 'center', height:50,}}>
                            <Text style={{color:"green", fontSize:15,marginLeft:5}}>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
  }
}
