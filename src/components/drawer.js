import React from 'react';
import { Text, View, SafeAreaView, Image, ScrollView, StyleSheet, TouchableOpacity,BackHandler } from 'react-native';
import Person from '../assets/images/Account_Person.png';
import {DrawerItems} from 'react-navigation';


const NavigationOptions = (props) => (
    <SafeAreaView style={{flex:1,backgroundColor:props.state.background}}>
    <View style={{alignItems:"center"}}>
   <View style={styles.DrawerView}>
    <Image source={Person} style={{width:90, height:90, borderRadius:50}} />
    <Text style={{color:props.state.text,fontWeight:"bold", fontSize:20}}>{props.state.Lang == "en" ? "Guest" : "زائر"}</Text>
    <Text style={{color:props.state.text}}>info@apptron.com</Text>
   </View>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
      {console.log(props)}
    </ScrollView>      
    </SafeAreaView>
  );

  
const styles = StyleSheet.create({
    DrawerView:{
      height:150,
      width:"90%", 
      alignItems:'center', 
      justifyContent: 'center', 
      borderBottomWidth: 2, 
      borderColor: 'white',
      marginBottom: 20,
    },
    DrawerIcon:{
      width:24,
      height:24,
      color:"white"
    }
  })

  export default NavigationOptions;