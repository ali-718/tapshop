import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base';


export default class Sell extends Component {

  constructor(props){
    super(props);
    this.state = {
      color:props.state.color,
      text:props.state.text,
      background:props.state.background,
      Lang:props.state.Lang,
      Items:[]
    }
  }

static navigationOptions = {
  drawerLabel: () => null
}

  render() {

const NoValue = () =>  (<View style={{marginTop:20}}><Text style={{color:this.state.text}}>{this.state.Lang == "en" ? "You have no Items on sale" : "لا يوجد لديك عناصر للبيع"}</Text></View>)

    return (
      <View style={{alignItems: 'center', flex:1, backgroundColor:this.state.background,width:"100%"}}>
        <TouchableOpacity onPress={this.props.products} activeOpacity={0.8} style={{width:"80%",height:50, backgroundColor: "green", marginTop:20, borderRadius:10}}>
          <View style={{width:"100%",alignItems: 'center', justifyContent: 'center', height:50, flexDirection:"row"}}>
            <Icon name="add" style={{fontSize: 20, color:"white"}} />
            <Text style={{color:"white", fontSize:15,marginLeft:5}}>{this.state.Lang == "en" ? "Sell New Item" : "بيع عنصر جديد"}</Text>
          </View>
        </TouchableOpacity>
  
        {this.state.Items.length < 1 ? <NoValue/> : <View style={{marginTop:20}}><Text style={{color:this.state.text}}>{this.state.Lang == "en" ? "Items for sale" : "سلع للبيع"}</Text></View> }
      </View>
    )
  }
}
