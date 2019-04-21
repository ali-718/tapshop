import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity,Switch,Image,StyleSheet,BackHandler } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Drawer,Left,Title,Body } from 'native-base';
import Person from '../assets/images/Account_Person.png';
import Modal from "react-native-modal";

export default class Account extends Component {

  _didFocusSubscription;
  _willBlurSubscription;
  
  constructor(props) {
      super(props);
      this.state = {
        color:props.state.color,
        text:props.state.text,
        back:props.state.backgroundColor,
        status:props.state.statusBarColour,
        navigation:props.navigation,
        switch1:props.state.color == 'grey' ? true : false,
        switchLang:false,
        Wishlist:0,
        Lang:"en",
        isModalVisible:false,
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
  

  render() {
    const Account_English = (<ScrollView>
      <View style={{width:"100%",alignItems:"center",backgroundColor: this.state.color,}}>
        <View style={{flexDirection:"row",width:'90%',height:130,alignItems:"center",backgroundColor: this.state.color,}}>
            <View style={{marginLeft:10,width:80,}}>
              <Image style={{width:80,height:80,}} source={Person} />
            </View>
            <View style={{marginLeft:10,width:"60%",height:100,justifyContent: 'center',}}>
              <Text style={{color:this.state.text,fontSize:30,fontWeight:"bold"}}>
              Guest
              </Text>
              <TouchableOpacity style={{marginTop:20}} onPress={() => this.props.navigation.navigate('Login',{Lang:this.state.Lang})}>
                  <Text style={{fontSize:12,color:this.state.text}}>
                  Login
                  </Text>
              </TouchableOpacity> 
            </View>
        </View>
      </View>
      <TouchableOpacity style={{width:"100%",alignItems:"center",marginTop:10, height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: this.state.color,}}>
        <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
          <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
            <Text style={{fontSize:17,color:this.state.text}}>Wishlist ({this.state.Wishlist})</Text>
          </View>
          <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
            <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,color:this.state.text}} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.setState({isModalVisible:!this.state.isModalVisible})} style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: this.state.color,}}>
        <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
          <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
            <Text style={{fontSize:17,color:this.state.text}}>Language</Text>
          </View>
          <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
          <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,color:this.state.text}} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: this.state.color,}}>
        <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
          <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
            <Text style={{fontSize:17,color:this.state.text}}>Dark Theme</Text>
          </View>
          <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
          <Switch value={this.state.switch1} onValueChange={ this.state.color == "grey" ? () => this.props.navigation.navigation.navigate("Includer") : () => this.props.navigation.navigation.navigate("Includer",{text:"white",color:"grey",back:"grey",status:"grey",grey:"white"})}/>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigation.navigate('Contact')} style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: this.state.color,}}>
        <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
          <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
            <Text style={{fontSize:17,color:this.state.text}}>Contact us</Text>
          </View>
          <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
            <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,color:this.state.text}} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigation.navigate('About')} style={{width:"100%",alignItems:"center", height:60,borderBottomWidth: 0.7,borderColor: "silver",backgroundColor: this.state.color,}}>
        <View style={{width:"90%",height:60,justifyContent: 'center',flexDirection: 'row'}}>
          <View style={{flexGrow:1,alignItems:"flex-start",justifyContent: 'center'}}>
            <Text style={{fontSize:17,color:this.state.text}}>About us</Text>
          </View>
          <View style={{flexGrow:1,alignItems:"flex-end",justifyContent: 'center',}}>
            <Icon name="keyboard-arrow-right" type="MaterialIcons" style={{fontSize: 20,color:this.state.text}} />
          </View>
        </View>
      </TouchableOpacity>
  </ScrollView>
  )

    return (
        <View style={{flex:1,width:"100%",backgroundColor: this.state.color,}}>
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
          {/* Body starts */}
        
          {/* Body ends here */}
              {Account_English}
    

        {/* Modal starts */}
      <Modal style={{justifyContent:"flex-end",height:"50%",margin: 0,}} onBackButtonPress={() => {this.setState({isModalVisible: false})}} animationInTiming={700} animationOutTiming={700} backdropOpacity={0.5} isVisible={this.state.isModalVisible}>
            <View style={{backgroundColor: this.state.color,marginTop:10,marginLeft:10,marginRight:10,borderRadius:10}}>
                <View style={{alignItems:"flex-end",marginTop:10}}>
                    <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}}>
                    <Icon name="times" type="FontAwesome" style={{marginRight: 20,}}/>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:"center",marginTop:10,flexDirection:"row",width:"100%",alignItems: 'center',height:80,backgroundColor: "green"}}>
                    <TouchableOpacity onPress={() => this.setState({isModalVisible:!this.state.isModalVisible})} style={{width:"40%",alignItems: 'center',height:70,borderRadius:10,justifyContent: 'center',}}>
                        <Text style={{color:"white"}}>English</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:"center",marginTop:10,flexDirection:"row",width:"100%",alignItems: 'center',height:80}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Index',{Lang:"ar"})} style={{width:"40%",alignItems: 'center',height:70,borderRadius:10,justifyContent: 'center'}}>
                        <Text style={{color:this.state.text}}>عربى</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        {/* Modal ends */} 
      </View>
    );
  }
}

const style = StyleSheet.create({
  Header:{
    width:"100%",
    height:50,
    backgroundColor: 'white',
    flexDirection: 'row',
  }
})