import React, { Component } from 'react';
import { View, Text,ScrollView, TouchableOpacity,Image,BackHandler } from 'react-native';
import {Header, Title,Button, Left,Body, Icon,Item, Input, Label,Right} from 'native-base'
import ImagePicker from 'react-native-image-crop-picker';
import { Chip,HelperText } from 'react-native-paper';

export default class AddProduct extends Component {

    
    _didFocusSubscription;
    _willBlurSubscription;

    constructor(props){
        super(props);
        this.state = {
          color:props.state.color,
          text:props.state.text,
          background:props.state.background,
          clicked:"",
          status:props.state.statusBarColour,
          Lang:props.state.Lang,
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

    static navigationOptions =  {
        drawerLabel : "Sell an Item",
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
                <Chip icon="check" selected selectedColor="green" mode="outlined"  onPress={() => {this.setState({clicked:"New"})}}>{this.state.Lang == "en" ? "New" : "الجديد"}</Chip>
                <Chip mode="outlined" style={{marginLeft:10}} onPress={() => {this.setState({clicked:"Used"})}}>{this.state.Lang == "en" ? "Used" : "مستخدم"}</Chip>
              </View>
          )
        }
        
        if(this.state.clicked == "Used")
        {
          return(
              <View style={{flexDirection:"row"}}>
                <Chip mode="outlined"  onPress={() => {this.setState({clicked:"New"})}}>{this.state.Lang == "en" ? "New" : "الجديد"}</Chip>
                <Chip icon="check" selected style={{marginLeft:10}}  selectedColor="green" mode="outlined"  onPress={() => {this.setState({clicked:"Used"})}}>{this.state.Lang == "en" ? "Used" : "مستخدم"}</Chip>
              </View>
          )
        }

        if(this.state.clicked == "")
        {
          return(
              <View style={{flexDirection:"row"}}>
                <Chip mode="outlined"  onPress={() => {this.setState({clicked:"New"})}}>{this.state.Lang == "en" ? "New" : "الجديد"}</Chip>
                <Chip mode="outlined" style={{marginLeft:10}}  onPress={() => {this.setState({clicked:"Used"})}}>{this.state.Lang == "en" ? "Used" : "مستخدم"}</Chip>
              </View>
          )
        }
        
        
    }

    return (
        <ScrollView style={{flex:1}}>
            <View style={{flex:1,width:"100%",backgroundColor:this.state.background}}>
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
                <View style={{alignItems: 'center', width:"100%"}}>
                    <TouchableOpacity onPress={this.Imager} activeOpacity={0.7} style={{backgroundColor: "gainsboro",borderColor:"lightgrey",borderWidth:1,width:"80%",marginTop:30, height:100,alignItems: 'center', justifyContent: 'center',}}>
                        <Icon name="camera" />
                        <Text>{this.state.Lang == "en" ? "Tap to add photo" : "انقر لإضافة الصورة"}</Text>
                    </TouchableOpacity>
                </View>
               { this.state.Lang == "en" ? <View style={{width:"80%", justifyContent: 'center', flexDirection:"row",marginTop:20}}>
                    <View style={{width:"40%",alignItems: 'center',justifyContent: 'flex-end', height:45}}>
                        <Icon name="phone-portrait" />
                    </View>
                    <View style={{width:"60%",justifyContent: 'flex-end'}}>
                    <Item floatingLabel>
                        <Label style={{color:this.state.text}}>Title</Label>
                        <Input />
                    </Item>
                    </View>
                </View> : <View style={{width:"100%",alignItems: 'center',}}><View style={{width:"80%", justifyContent: 'center',alignItems: 'center', flexDirection:"row",marginTop:20}}>
                    <View style={{width:"60%",justifyContent: 'flex-end'}}>
                        <Item floatingLabel>
                            <Label style={{color:this.state.text}}>عنوان</Label>
                            <Input />
                        </Item>
                    </View>
                    <View style={{width:"40%",alignItems: 'center',justifyContent: 'flex-end', height:45}}>
                        <Icon name="phone-portrait" />
                    </View>
                </View></View>}
                { this.state.Lang == "en" ? <View style={{width:"80%", justifyContent: 'center', flexDirection:"row",marginTop:20}}>
                    <View style={{width:"40%",alignItems: 'center',justifyContent: 'flex-end', height:45}}>
                        <Icon name="pin" />
                    </View>
                    <View style={{width:"60%",justifyContent: 'flex-end'}}>
                    <Item floatingLabel>
                        <Label style={{color:this.state.text}}>Location</Label>
                        <Input />
                    </Item>
                    </View>
                </View> : <View style={{width:"100%",alignItems: 'center',}}><View style={{width:"80%", justifyContent: 'center',alignItems: 'center', flexDirection:"row",marginTop:20}}>
                    <View style={{width:"60%",justifyContent: 'flex-end'}}>
                        <Item floatingLabel>
                            <Label style={{color:this.state.text}}>موقعك</Label>
                            <Input />
                        </Item>
                    </View>
                    <View style={{width:"40%",alignItems: 'center',justifyContent: 'flex-end', height:45}}>
                        <Icon name="pin" />
                    </View>
                </View></View>}
                <View style={{width:"100%",justifyContent: 'center', alignItems: 'center', marginTop:40}}>
                    <Text style={{marginBottom:10,color:this.state.text}}>Condition</Text>
                    {<Chips />}
                </View>
                { this.state.Lang == "en" ? <View style={{width:"80%", justifyContent: 'center', flexDirection:"row",marginTop:20}}>
                    <View style={{width:"40%",alignItems: 'center',justifyContent: 'flex-end', height:45}}>
                        <Icon name="dollar-sign" type="FontAwesome5" />
                    </View>
                    <View style={{width:"60%",justifyContent: 'flex-end'}}>
                    <Item floatingLabel>
                        <Label style={{color:this.state.text}}>Selling Price</Label>
                        <Input keyboardType="numeric" />
                    </Item>
                    </View>
                </View> : <View style={{width:"100%",alignItems: 'center',}}><View style={{width:"80%", justifyContent: 'center',alignItems: 'center', flexDirection:"row",marginTop:20}}>
                    <View style={{width:"60%",justifyContent: 'flex-end'}}>
                        <Item floatingLabel>
                            <Label style={{color:this.state.text}}>سعر البيع</Label>
                            <Input keyboardType="numeric" />
                        </Item>
                    </View>
                    <View style={{width:"40%",alignItems: 'center',justifyContent: 'flex-end', height:45}}>
                        <Icon name="dollar-sign" type="FontAwesome5" />
                    </View>
                </View></View>}
                <View style={{width:"100%", alignItems: 'center', marginTop:40}}>
                    <View style={{width:"80%",alignItems: 'center',}}>
                        <Text style={{fontSize:18,color:this.state.text}}>{this.state.Lang == "en" ? "Details" : "تفاصيل"}</Text>
                        <Text style={{fontSize:10}}>
                        {this.state.Lang == "en" ? "Anything you want buyers to know" : "أي شيء تريد أن يعرفه المشترون."}
                        </Text>
                        <Item bordered={true}>
                            <Input />
                        </Item>
                    </View>
                </View>
                <View style={{alignItems: 'center', flex:1,marginTop:20,marginBottom:30}}>
                    <TouchableOpacity activeOpacity={0.8} style={{width:"80%",height:50, backgroundColor: "green", marginTop:20, borderRadius:10}}>
                        <View style={{width:"100%",alignItems: 'center', justifyContent: 'center', height:50,}}>
                            <Text style={{color:"white", fontSize:15,marginLeft:5}}>{this.state.Lang == "en" ? "Post" : "بريد"}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigation.navigate("Home")} activeOpacity={0.8} style={{width:"80%",height:50,borderWidth:1, borderColor: "green", marginTop:10, borderRadius:10}}>
                        <View style={{width:"100%",alignItems: 'center', justifyContent: 'center', height:50,}}>
                            <Text style={{color:"green", fontSize:15,marginLeft:5}}>{this.state.Lang == "en" ? "Cancel" : "إلغاء"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
  }
}
