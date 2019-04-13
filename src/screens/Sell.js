import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base';


export default class Sell extends Component {

  state = {
    Lang:"en",
    Items:[]
  }



  render() {

const NoValue = () =>  (<View style={{marginTop:20}}><Text> You have no Items on sale</Text></View>)

    return (
      <View style={{alignItems: 'center', flex:1}}>
        <TouchableOpacity activeOpacity={0.8} style={{width:"80%",height:50, backgroundColor: "green", marginTop:20, borderRadius:10}}>
          <View style={{width:"100%",alignItems: 'center', justifyContent: 'center', height:50, flexDirection:"row"}}>
            <Icon name="add" style={{fontSize: 20, color:"white"}} />
            <Text style={{color:"white", fontSize:15,marginLeft:5}}>Sell New Item</Text>
          </View>
        </TouchableOpacity>

        {this.state.Items.length < 1 ? <NoValue/> : <View style={{marginTop:20}}><Text>Ali</Text></View> }
      </View>
    )
  }
}
