import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,TouchableOpacity,ScrollView,BackHandler } from 'react-native';
import {Header, Title,Button, Left,Body, Icon,Tab, Tabs, TabHeading,Container} from 'native-base'
import Zaaviyah from '../assets/images/zaaviyah.jpg'

export default class About extends Component {

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
        this.props.navigation.navigation.navigate('Account')
        return true
        }
    
      componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
      }

  render() {

    const Lorem = " This page is designed to help businesses, especially BBB Accredited Businesses, create an online privacy notice for use on the Internet. A privacy notice should be based on the following five elements:Notice (what personal information is being collected on the site)Choice (what options the customer has about how/whether personal data is collected and used)Access (how a customer can see what data has been collected and change/correct it if necessary)Security (state how any data that is collected is stored/protected)Redress (what customer can do if privacy policy is not met)Whatever final notice you develop is up to you, and will be your responsibility to maintain. The Better Business Bureau does not recommend any one set of privacy practices, nor any single privacy notice.Below is a sample privacy notice that you may want to use as a guide for your privacy notice. Note that there is a place for your company name or URL in the first paragraph and a place for your phone number and email address in the last paragraph. Please make sure to personalize these. DO NOT simply cut-and-paste this policy as is."
    const Lorem_Arabic = "تم تصميم هذه الصفحة لمساعدة الشركات ، وخاصة BBB Accredited Businesses ، على إنشاء إشعار خصوصية عبر الإنترنت للاستخدام على الإنترنت. يجب أن يستند إشعار الخصوصية إلى العناصر الخمسة التالية: إشعار (ما هي المعلومات الشخصية التي يتم جمعها على الموقع) الاختيار (ما هي الخيارات التي لدى العميل حول كيفية / ما إذا كان يتم جمع البيانات الشخصية واستخدامها) الوصول (كيف يمكن للعميل معرفة ما تم جمع البيانات وتغييرها / تصحيحها إذا لزم الأمر) الأمان (حدد كيفية تخزين / حماية أي بيانات يتم جمعها) جبر (ما يمكن للعميل القيام به إذا لم يتم الوفاء بسياسة الخصوصية) أيًا كان الإخطار النهائي الذي تقوم بتطويره يرجع إليك ، سوف تكون مسؤوليتك للحفاظ على. لا يوصي مكتب الأعمال الأفضل بأي مجموعة واحدة من ممارسات الخصوصية ، أو أي إشعار خصوصية واحد. أدناه نموذج إشعار خصوصية قد ترغب في استخدامه كدليل لإشعار الخصوصية الخاص بك. لاحظ أن هناك مكانًا لاسم شركتك أو عنوان URL الخاص بها في الفقرة الأولى ومكانًا لرقم هاتفك وعنوان بريدك الإلكتروني في الفقرة الأخيرة. يرجى التأكد من تخصيص هذه. لا تقم ببساطة بقص هذه السياسة ولصقها كما هي."

    return (
      <ScrollView style={{backgroundColor: this.state.back, flex:1,width:"100%",}}>
       {/* Header */}
       <Header hasTabs style={{backgroundColor:this.state.color,height:40,borderBottomWidth:1,borderBottomColor:"green",elevation:0}}  androidStatusBarColor={this.state.status}>
              <Left>
                <Button transparent onPress={() => this.props.navigation.navigation.navigate("Account")}>
                  <Icon name='arrow-back' style={{color:this.state.text}}/>
                </Button>
              </Left>
              <Body>
                <Title style={{color:this.state.text}}>TapShop</Title>
              </Body>
          </Header>
        {/* Header ends here */}
        <View style={{flex:1,width:"100%",backgroundColor: this.state.color,}}>
            <View style={{alignItems:"center"}}>
                <Image source={Zaaviyah} style={{width:200,height:200}} />
            </View>
            <View style={{alignItems:"center"}}>
                <Text style={{color:this.state.text,margin:20}}>
               {this.state.Lang == "en" ? Lorem : Lorem_Arabic}
                </Text>
            </View>
        </View>
      </ScrollView>
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
