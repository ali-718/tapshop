import React, { Component } from 'react'
import {Platform,TextInput, StyleSheet,Text, View,Image,TouchableOpacity,SafeAreaView,BackHandler,Dimensions,ScrollView,ImageBackground} from 'react-native';
import {Header,Button,Input,Left,Body,Right,Icon,Footer,FooterTab,Container,Tabs,TabHeading,Tab,Title} from 'native-base'
import Modal from "react-native-modal";
import AutoHeightImage from 'react-native-auto-height-image';

export default class Item extends Component {

    static navigationOptions = {
        drawerLabel:() => null
    }

    _didFocusSubscription;
    _willBlurSubscription;

    constructor(props){
        super(props);
        this.state = {
          color:props.state.color,
          text:props.state.text,
          background:props.state.background,
          status:props.state.statusBarColour,
          isModalVisible:false,
          HeartColor:props.state.text,
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


    HeartColor = () =>{
        if(this.state.HeartColor == "black" || this.state.HeartColor == "white")
        {
          this.setState({
            HeartColor:"red"
          })
        }
        else{
          this.setState({
            HeartColor:this.state.text
          })
        }
      }

  render() {

      const Image = this.props.navigation.navigation.getParam("Image");
      const Name = this.props.navigation.navigation.getParam("Name");
      const Price = this.props.navigation.navigation.getParam("Price");
      const Lorem = " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      const Lorem_Arabic = "أبجد هوز هو مجرد دمية النص لصناعة الطباعة والتنضيد. كان   هو النص الوهمي القياسي في هذه الصناعة منذ القرن الخامس عشر الميلادي ، عندما أخذت طابعة غير معروفة لوحًا من نوعه وتدافعت عليه لصنع كتاب نموذج للعينات. لقد نجا ليس فقط خمسة قرون ، ولكن أيضا قفزة في التنضيد الإلكتروني ، تبقى دون تغيير أساسي. لقد تم نشره في الستينيات من القرن الماضي من خلال إصدار أوراق  التي تحتوي على مقاطع   ، ومؤخراً مع برامج النشر المكتبي مثل   بما في ذلك إصدارات ."

    return (
        <View style={{flex:1}}>
            <ScrollView style={{flex:1}}>
                <Header hasTabs style={{backgroundColor:this.state.background,height:40,borderBottomWidth:1,borderBottomColor:"green",elevation:0}}  androidStatusBarColor={this.state.status}>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.navigation.navigate('Home')}>
                    <Icon name='arrow-back' style={{color:this.state.text}}/>
                    </Button>
                </Left>
                <Body>
                    <Title style={{color:this.state.text}}>TapShop</Title>
                </Body>
                </Header>
                <View style={{width:'100%',alignItems:"center",flex:1,backgroundColor:this.state.background,paddingBottom:10}}>
                            <View style={{width:"100%",backgroundColor:"white"}}>
                                <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}} style={{alignItems: 'center',}} activeOpacity={0.8}>
                                    <ImageBackground  source={Image} style={{width:"99%",height:250,alignItems:"flex-start"}}>
                                    </ImageBackground>
                                </TouchableOpacity>  
                            </View>
                            <View style={{alignItems:"center",paddingTop: 20,}}>
                                <Text style={{fontSize:20,color:this.state.text}}>
                                {Name}
                                </Text>
                                <Text style={{fontSize:15,color:this.state.text,marginTop:10}}>
                                ${Price}
                                </Text>
                            </View>
                            <View style={{flexDirection:"row",marginTop:10,justifyContent: 'center',}}>
                                <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                                <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                                <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                                <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                                <Icon name="star" style={{fontSize:20,color:"#fff700"}} />
                                <Text style={{color:this.state.text,marginLeft:5}}> (1) {this.state.Lang == "en" ? "Reviews" : "التعليقات"}</Text>
                            </View>
                        </View>
                        <View>
                            <Tabs tabBarActiveTextColor="rgb(0,0,0)" tabBarUnderlineStyle={{backgroundColor:'green'}}>
                            <Tab
                                activeTextStyle={{color: this.state.text, fontWeight: 'bold'}}
                                heading={
                                <TabHeading style={{backgroundColor: this.state.background}} >
                                <Text style={{color:this.state.text}}>{this.state.Lang == "en" ? "Description" : "وصف"}</Text>
                                </TabHeading>
                                }>
                                <ScrollView style={{backgroundColor: this.state.background,}}>
                                    <View style={{width:'100%',alignItems: 'center',}}>
                                        <View style={{width:"80%",marginTop:20,marginBottom:20}}>
                                            {this.state.Lang =="en" ? <View style={{flexDirection:"row",alignItems: 'center',}}>
                                                <Icon name="circle" type="FontAwesome" style={{fontSize:7,color:this.state.text}} />
                                                <Text style={{marginLeft:10,color:this.state.text}}>Woven Cotton</Text>
                                            </View> : <View style={{flexDirection:"row",alignItems: 'center',justifyContent:"flex-end"}}>
                                                <Text style={{marginRight:10,color:this.state.text}}>القطن المنسوج</Text>
                                                <Icon name="circle" type="FontAwesome" style={{fontSize:7,color:this.state.text}} />
                                            </View>}
                                            {this.state.Lang =="en" ? <View style={{flexDirection:"row",alignItems: 'center',}}>
                                                <Icon name="circle" type="FontAwesome" style={{fontSize:7,color:this.state.text}} />
                                                <Text style={{marginLeft:10,color:this.state.text}}>Seude Leather</Text>
                                            </View> : <View style={{flexDirection:"row",alignItems: 'center',justifyContent:"flex-end"}}>
                                                <Text style={{marginRight:10,color:this.state.text}}>جلد سويدي</Text>
                                                <Icon name="circle" type="FontAwesome" style={{fontSize:7,color:this.state.text}} />
                                            </View>}
                                            {this.state.Lang =="en" ? <View style={{flexDirection:"row",alignItems: 'center',}}>
                                                <Icon name="circle" type="FontAwesome" style={{fontSize:7,color:this.state.text}} />
                                                <Text style={{marginLeft:10,color:this.state.text}}>Magnetic Press</Text>
                                            </View> : <View style={{flexDirection:"row",alignItems: 'center',justifyContent:"flex-end"}}>
                                                <Text style={{marginRight:10,color:this.state.text}}>الصحافة المغناطيسية</Text>
                                                <Icon name="circle" type="FontAwesome" style={{fontSize:7,color:this.state.text}} />
                                            </View>}
                                            {this.state.Lang =="en" ? <View style={{flexDirection:"row",alignItems: 'center',}}>
                                                <Icon name="circle" type="FontAwesome" style={{fontSize:7,color:this.state.text}} />
                                                <Text style={{marginLeft:10,color:this.state.text}}>Zipped Pocket</Text>
                                            </View> : <View style={{flexDirection:"row",alignItems: 'center',justifyContent:"flex-end"}}>
                                                <Text style={{marginRight:10,color:this.state.text}}>مضغوط الجيب</Text>
                                                <Icon name="circle" type="FontAwesome" style={{fontSize:7,color:this.state.text}} />
                                            </View>}
                                            {this.state.Lang =="en" ? <View style={{flexDirection:"row",alignItems: 'center',}}>
                                                <Icon name="circle" type="FontAwesome" style={{fontSize:7,color:this.state.text}} />
                                                <Text style={{marginLeft:10,color:this.state.text}}>Not Wash</Text>
                                            </View> : <View style={{flexDirection:"row",alignItems: 'center',justifyContent:"flex-end"}}>
                                                <Text style={{marginRight:10,color:this.state.text}}>لا يغسل</Text>
                                                <Icon name="circle" type="FontAwesome" style={{fontSize:7,color:this.state.text}} />
                                            </View>}
                                        </View>
                                    </View>
                                </ScrollView>
                            </Tab>
                            <Tab 
                                heading={ 
                                <TabHeading  style={{backgroundColor: this.state.background}}>
                                <Text style={{color:this.state.text}}>{this.state.Lang == "en" ? "Feature" : "خاصية"}</Text>
                                </TabHeading>
                                }>
                                <ScrollView style={{backgroundColor: this.state.background,}}>
                                    <View style={{width:'100%',alignItems: 'center',}}>
                                    <View style={{width:"90%",marginTop:20,marginBottom:20}}>
                                        <Text style={{color:this.state.text}}>
                                       {this.state.Lang == "en" ? Lorem :  Lorem_Arabic}
                                        </Text>
                                    </View>
                                    </View>
                                </ScrollView>
                            </Tab>
                            <Tab
                                heading={ 
                                <TabHeading  style={{backgroundColor: this.state.background}}>
                                <Text style={{color:this.state.text}}>{this.state.Lang == "en" ? "Reviews" : "استعراض"}</Text>
                                </TabHeading>
                                }>
                                <ScrollView style={{backgroundColor: this.state.background,}}>
                                   {this.state.Lang == "en" ? <View style={{width:'100%',alignItems: 'center',borderBottomWidth:0.7,borderColor:"grey",paddingBottom: 10,}}>
                                    <View style={{width:"90%",marginTop:20,marginBottom:20}}>
                                        <View>
                                        <Text style={{fontSize:17,color:this.state.text,fontWeight:"bold"}}>Sophia Kennedy</Text>
                                        <Text style={{fontSize:13,color:this.state.text,marginTop:10}}>Amazing Design</Text>
                                        <View style={{width:"100%",flexDirection:"row"}}>
                                            <View style={{width:"50%",alignItems:"flex-start"}}>
                                            <Text style={{fontSize:13,color:this.state.text,marginTop:10}}>{new Date().getUTCDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear() }</Text>
                                            </View>
                                            <View style={{width:"50%",justifyContent:"flex-end",flexDirection:"row",alignItems: 'center',}}>
                                            <Icon name="star" style={{fontSize:15,color:"#fff700"}} />
                                            <Icon name="star" style={{fontSize:15,color:"#fff700"}} />    
                                            <Icon name="star" style={{fontSize:15,color:"#fff700"}} />
                                            <Icon name="star" style={{fontSize:15,color:"#fff700"}} />
                                            <Icon name="star" style={{fontSize:15,color:"#fff700"}} />
                                            </View>
                                        </View>
                                        </View>
                                    </View>
                                    </View> : 
                                <View style={{width:'100%',alignItems: 'center',borderBottomWidth:0.7,borderColor:"grey",paddingBottom: 10,}}>
                                <View style={{width:"90%",marginTop:20,marginBottom:20}}>
                                  <View>
                                    <Text style={{fontSize:17,color:"black",fontWeight:"bold"}}>صوفيا كينيدي</Text>
                                    <Text style={{fontSize:13,color:"black",marginTop:10}}>تصميم مذهل</Text>
                                    <View style={{width:"100%",flexDirection:"row"}}>
                                      <View style={{width:"50%",alignItems:"flex-start"}}>
                                      <Text style={{fontSize:13,color:"black",marginTop:10}}>{new Date().getUTCDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear() }</Text>
                                      </View>
                                      <View style={{width:"50%",justifyContent:"flex-end",flexDirection:"row",alignItems: 'center',}}>
                                        <Icon name="star" style={{fontSize:15,color:"#fff700"}} />
                                        <Icon name="star" style={{fontSize:15,color:"#fff700"}} />    
                                        <Icon name="star" style={{fontSize:15,color:"#fff700"}} />
                                        <Icon name="star" style={{fontSize:15,color:"#fff700"}} />
                                        <Icon name="star" style={{fontSize:15,color:"#fff700"}} />
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>}
                                </ScrollView>
                            </Tab>
                            </Tabs>
                        </View>

                        {/* Modal starts */} 
                        <Modal style={{width:"100%",height:"100%"}} onBackButtonPress={() => {this.setState({isModalVisible: false})}} animationInTiming={700} animationOutTiming={700} backdropOpacity={0.5} isVisible={this.state.isModalVisible}>
                            <View style={{backgroundColor:"white",marginTop:10,marginLeft:-20,marginBottom:10,borderRadius:10,width:"100%"}}>
                            <View style={{width:"100%",alignItems:"flex-end",marginTop:10}}>
                                <TouchableOpacity onPress={() => {this.setState({isModalVisible:!this.state.isModalVisible})}}>
                                <Icon name="times" type="FontAwesome" style={{marginRight: 20,}}/>
                                </TouchableOpacity>
                            </View>
                            <AutoHeightImage width={Dimensions.get('window').width} source={Image} />
                            </View>
                        </Modal>
                        {/* Modal ends */}
                </ScrollView>

                {/* Buy now Tab */}
                <View style={{width:"100%",flexDirection:"row",height:40,backgroundColor:this.state.background}}>
                    <View style={{width:"50%",height:40,flexDirection:"row",alignItems:"center"}}>
                        <View style={{flexGrow:1,alignItems:"center"}}>
                            <Icon name="share-alt" type="FontAwesome" style={{fontSize:20,color:this.state.text}} />
                        </View>
                        <View style={{flexGrow:1,alignItems:"center"}}>
                            <Icon name="favorite-border" onPress={this.HeartColor} type="MaterialIcons" style={{fontSize:20,color:this.state.HeartColor}}/>
                        </View>
                        <View style={{flexGrow:1,alignItems:"center"}}>
                            <Icon name="cart" style={{fontSize:20,color:this.state.text}}/>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigation.navigate("CreditCard")} activeOpacity={0.7} style={{width:"50%",backgroundColor:"green",height:40,justifyContent: 'center',alignItems: 'center',}}>
                        <Text style={{color:"white",fontWeight:"bold"}}>{this.state.Lang == "en" ? "BUY NOW" : "اشتري الآن"}</Text>
                    </TouchableOpacity>
                </View>
                {/* Buy now Tab ends */}
            </View>    
    )
  }
}
