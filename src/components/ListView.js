import React from 'react'
import {Platform,TextInput, StyleSheet, Text, View,Image, TouchableOpacity,BackHandler,SafeAreaView,ScrollView,ImageBackground} from 'react-native';

const ListView = (props) => {
  return (
    <View style={{width:"100%",alignItems: 'center',}}>
       {props.Lang == "en" ?
       <TouchableOpacity onPress={() => props.navigation({Name:props.Name,Price:props.Price,Image:props.Image})} style={{flexDirection:"row",width:"100%",backgroundColor:props.back,alignItems:"flex-start"}}>
          <View style={{marginTop:10,width:80,}}>
            <Image style={{width:80,height:130,borderRadius:10,}} source={props.Image} />
          </View>
          <View style={{marginTop:10,marginLeft:10,width:"60%",height:130,}}>
              <Text style={{color:props.textColor,fontSize:20}}>
              {props.Name}
              </Text>
              <Text style={{color:props.textColor,fontSize:13,marginTop:10}}>
                  ${props.Price}
              </Text>
          </View>
          </TouchableOpacity>
         :
         <TouchableOpacity onPress={() => props.navigation({Name:props.Name,Price:props.Price,Image:props.Image})} style={{flexDirection:"row",width:"100%",backgroundColor:props.back,justifyContent:"flex-end"}}>
          <View style={{marginTop:20,width:"60%",height:130,alignItems: 'flex-end',marginRight:10}}>
              <Text style={{color:props.textColor,fontSize:20}}>
              {props.Name}
              </Text>
              <Text style={{color:props.textColor,fontSize:13,marginTop:10,alignItems:"flex-end"}}>
                  ${props.Price}
              </Text>
          </View>
          <View style={{marginTop:10,width:80,alignItems:"flex-end"}}>
            <Image style={{width:80,height:130,borderRadius:10,}} source={props.Image} />
          </View>
        </TouchableOpacity>
       }
       </View>
  )
}

export default ListView
