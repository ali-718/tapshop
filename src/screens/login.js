import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput,BackHandler, TouchableOpacity, Dimensions,ScrollView } from 'react-native'
import Hr from "react-native-hr-component";
import facebook from '../assets/images/facebook.png';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Drawer,Left,Body,Title, Right } from 'native-base';

export default class Login extends Component {

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
      Email:"",
      Password:"",
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
    this.props.navigation.navigation.navigate('Home')
    return true
    }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

  LoginPress = () => {
    if(this.state.Email == "" || this.state.Password == "")
    {
      this.setState({
        borderColor:"red"
      })
      alert(this.state.Lang == "en" ? "Please Enter all Fields" : "الرجاء إدخال جميع الحقول")
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
        {this.state.Lang == "en" ? <Header hasTabs style={{backgroundColor:this.state.color,height:40,borderBottomWidth:1,borderBottomColor:"green",elevation:0}}  androidStatusBarColor={this.state.status}>
              <Left>
                <Button transparent onPress={() => this.props.navigation.navigation.toggleDrawer()}>
                  <Icon name='menu' style={{color:this.state.text}}/>
                </Button>
              </Left>
              <Left />
              <Body>
                <Title style={{color:this.state.text}}>TapShop</Title>
              </Body>
          </Header> : <Header hasTabs style={{backgroundColor:this.state.color,height:40,borderBottomWidth:1,borderBottomColor:"green",elevation:0}}  androidStatusBarColor={this.state.status}>
              <Left />
              <Left />
              <Left />
              <Body style={{alignItems: 'center',}}>
                <Title style={{color:this.state.text}}>TapShop</Title>
              </Body>
              <Right>
              <Button transparent onPress={() => this.props.navigation.navigation.toggleDrawer()}>
                  <Icon name='menu' style={{color:this.state.text}}/>
              </Button>
              </Right>
          </Header> }
            {/* Header ends here */}
        <ScrollView style={{flex:1,backgroundColor:this.state.back,width:"100%"}}>
        <View style={style.container}>
        <View style={{alignItems:"center"}}>
        </View>
        <View style={style.txtView}>
            <TextInput onChangeText={(val) => {this.setState({Email:val})}} value={this.state.Email} style={style.txtInput} placeholder={this.state.Lang == "en" ? "Username or Email" : "اسم المستخدم أو البريد الالكتروني"} placeholderTextColor={this.state.grey}></TextInput>
            <TextInput secureTextEntry={true} onChangeText={(val) => {this.setState({Password:val})}} value={this.state.Password} style={style.txtInput} placeholder={this.state.Lang == "en" ? "Password" : "كلمه السر"} placeholderTextColor={this.state.grey}></TextInput>
        </View>
        {this.state.Lang == "en" ? <View style={{width:"80%", alignItems:"flex-end"}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigation.navigate('Forgot',{Lang:this.state.Lang})}>
              <Text style={{fontSize:13, marginLeft:30, fontWeight:"bold",color:this.state.grey}}>{this.state.Lang == "en" ? "Forgot Password" : "هل نسيت كلمة المرور"}?</Text>
          </TouchableOpacity>
        </View> : <View style={{width:"98%", alignItems:"flex-start"}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigation.navigate('Forgot',{Lang:this.state.Lang})}>
              <Text style={{fontSize:13, marginLeft:30, fontWeight:"bold",color:this.state.grey}}>{this.state.Lang == "en" ? "Forgot Password" : "هل نسيت كلمة المرور"}</Text>
          </TouchableOpacity>
        </View>}
        <View style={style.loginBtnView}>
            <TouchableOpacity onPress={this.LoginPress} style={style.loginBtn}>
            <Text style={{color:"white", fontWeight:"bold"}}>{this.state.Lang == "en" ? "Login" : "تسجيل الدخول"}</Text>
            </TouchableOpacity>
            <Hr text={this.state.Lang == "en" ? "or" : "أو"} lineColor={this.state.grey} width={1}/>
            <TouchableOpacity style={style.loginBtn}>
            <Text style={{color:"white", fontWeight:"bold"}}><Image source={facebook} style={{borderRadius:5}}/> &nbsp;{this.state.Lang == "en" ? "Login with Facebook" : "تسجيل الدخول باستخدام الفيسبوك"}</Text>
            </TouchableOpacity>
        </View>
        <View style={style.bottomView}>
        <TouchableOpacity onPress={() => this.props.navigation.navigation.navigate('Signup')}><Text style={{paddingTop:"3%", fontSize:12,color:"black"}}>{this.state.Lang == "en" ? "Dont have an account" : "ليس لديك حساب"}<Text style={{fontWeight:"bold", color:"green"}}> {this.state.Lang == "en" ? "Signup" : "سجل"} </Text></Text></TouchableOpacity>
        </View>
        </View>
        </ScrollView>

        {/* Body ends here */}
        
    </View>
    )
  }
}
