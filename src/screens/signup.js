import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput,BackHandler, TouchableOpacity, Dimensions,ScrollView } from 'react-native'
import Hr from "react-native-hr-component";
import facebook from '../assets/images/facebook.png';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Drawer,Left,Body,Title } from 'native-base';

export default class Signup extends Component {

  _didFocusSubscription;
  _willBlurSubscription;
  
  constructor(props) {
    super(props);
    this.state = {
      color:props.state.color,
      text:props.state.text,
      back:props.state.backgroundColor,
      status:props.state.statusBarColour,
      grey:props.state.grey,
      borderColor:"black",
      Username:"",
      Email:"",
      Phone:"",
      Password:"",
      ConfirmPassword:"",
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

  LoginPress = () => {
    if(this.state.Email == "" || this.state.Password == "" || this.state.Phone == "" || this.state.ConfirmPassword == "" || this.state.ConfirmPassword != this.state.Password)
    {
      this.setState({
        borderColor:"red"
      })
      alert("Please Enter all Fields")
    }
    else{
      this.setState({
          borderColor:"black"
      })
      this.props.navigation.navigation.navigate("CreditCard")
      }
    }

  render() {
    
const style = StyleSheet.create({
  container:{
    flex:1,
   alignItems:"center",
   backgroundColor:this.state.back,
   width:"100%",
 },
  insta:{
    width:220, 
   height:82,
   marginTop:30
 },
 txtView:{marginTop:50, 
   width:"80%", 
   alignItems:"center"
 },
 txtInput:{
      borderColor:this.state.borderColor,
      borderWidth:1,
      width:"100%",
      borderRadius:5,
      backgroundColor:"rgba(220,220,220,0.3)",
      marginTop:10
  },
  loginBtnView:{
   width:"80%", 
   alignItems:"center",
   flex:0.8
  },
  loginBtn:{
    backgroundColor:'green',
    width:"100%",
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
    marginTop:10
  },
  bottomView:{ 
    flex:0.2,  
    width:"100%", 
    justifyContent:"flex-start", 
    alignItems:"center" ,
    marginBottom: 20,
 },
 Header:{
   width:"100%",
   height:50,
   backgroundColor:this.state.back,
   flexDirection: 'row',
 }
}
)


    return (
        <View style={{flex:1,width:"100%",backgroundColor:this.state.color}}>
        {/* Header */}
        <Header hasTabs style={{backgroundColor:this.state.color,height:40,borderBottomWidth:1,borderBottomColor:"green",elevation:0}}  androidStatusBarColor={this.state.status}>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.navigation.toggleDrawer()}>
                    <Icon name='menu' style={{color:this.state.text}}/>
                    </Button>
                </Left>
                <Body>
                    <Title style={{color:this.state.text}}>TapShop</Title>
                </Body>
            </Header>
            {/* Header ends here */}
        <ScrollView style={{flex:1,backgroundColor:this.state.back,width:"100%"}}>
        <View style={style.container}>
        <View style={{alignItems:"center"}}>
        {/* <Image source={Logo} style={style.insta}></Image> */}
        </View>
        <View style={style.txtView}>
            <TextInput onChangeText={(val) => {this.setState({Usernmae:val})}} value={this.state.Email} style={style.txtInput} placeholder="Username" placeholderTextColor={this.state.grey}></TextInput>
            <TextInput onChangeText={(val) => {this.setState({Email:val})}} value={this.state.Email} style={style.txtInput} placeholder="Email" placeholderTextColor={this.state.grey}></TextInput>
            <TextInput onChangeText={(val) => {this.setState({Phone:val})}} value={this.state.Email} style={style.txtInput} placeholder="Phone" placeholderTextColor={this.state.grey}></TextInput>
            <TextInput onChangeText={(val) => {this.setState({Password:val})}} value={this.state.Email} style={style.txtInput} placeholder="Password" placeholderTextColor={this.state.grey}></TextInput>
            <TextInput secureTextEntry={true} onChangeText={(val) => {this.setState({ConfirmPassword:val})}} value={this.state.Password} style={style.txtInput} placeholderTextColor={this.state.grey} placeholder="Confirm Password"></TextInput>
        </View>
        <View style={style.loginBtnView}>
            <TouchableOpacity onPress={this.LoginPress} style={style.loginBtn}>
            <Text style={{color:"white", fontWeight:"bold"}}>Register</Text>
            </TouchableOpacity>
            <Hr text="or" lineColor="#C0C0C0" width={1}/>
            <TouchableOpacity style={style.loginBtn}>
            <Text style={{color:"white", fontWeight:"bold"}}><Image source={facebook} style={{borderRadius:5}}/> &nbsp;Login with Facebook</Text>
            </TouchableOpacity>
        </View>
        <View style={style.bottomView}>
        <TouchableOpacity onPress={() => this.props.navigation.navigation.navigate('Login')}><Text style={{paddingTop:"3%", fontSize:12,color:"black"}}>Do you have an account <Text style={{fontWeight:"bold", color:"green"}}>Signin</Text></Text></TouchableOpacity>
        </View>
        </View>
        </ScrollView>

        {/* Body ends here */}
        
    </View>
    )
  }
}
