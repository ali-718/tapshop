import React from 'react'
import { TouchableOpacity,View,Image,Text } from 'react-native';
import {Icon} from 'native-base'

const Product = (props) => {
 
  return (
    <TouchableOpacity onPress={props.navigation} style={{marginLeft:10,marginTop:10,alignItems: 'center',}}>
        <Image source={props.Image} style={{width:160, height:150}} />
        <View style={{width:160,marginTop:5,alignItems:"flex-start",backgroundColor: props.back,}}>
        <Text style={{color:props.textColor,fontSize:12}}>{props.Name}</Text>
        <Text style={{color:props.textColor,fontSize:10}}><Icon name="cart" style={{fontSize:11, color:"green"}} /> {props.Price}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Product
