import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base';

export default class Offers extends Component {

  constructor(props){
    super(props);
    this.state = {
      color:props.state.color,
      text:props.state.text,
      background:props.state.background,
      Items:[]
    }
  }

static navigationOptions = {
  drawerLabel: () => null
}

  render() {

const NoValue = () =>  (<View style={{marginTop:20}}><Text style={{color:this.state.text}}> Currently there are no offers</Text></View>)

    return (
      <View style={{alignItems: 'center', flex:1, backgroundColor:this.state.background,width:"100%"}}>
        {this.state.Items.length < 1 ? <NoValue/> : <View style={{marginTop:20}}><Text style={{color:this.state.text}}>Ali</Text></View> }
      </View>
    )
  }
}
