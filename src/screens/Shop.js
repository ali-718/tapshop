import React, { Component } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';
import Product from '../components/Product';
import laptop from '../assets/images/laptop.jpg';
import mobile from '../assets/images/mobile.jpg';
import clothing from '../assets/images/clothing.jpg';
import food from '../assets/images/food.jpg';
import accessories from '../assets/images/accessories.jpg';
import beauty from '../assets/images/beauty.jpg';

export default class Shop extends Component {
  
    constructor(props){
        super(props);
        this.state = {
          color:props.state.color,
          text:props.state.text,
          background:props.state.background,
          Lang:props.state.Lang
        }
      }

    render() {
    return (
        <ScrollView style={{flex:1}}>
            <View style={{flex:1,backgroundColor: this.state.background,}}>
                <View style={{marginTop:20,width:"100%",flexDirection:"row",}}>
                    <View style={{height: 200 ,alignItems: 'center',flexGrow:1}}>
                        <Product navigation={() => this.props.navigation("Display")} back={this.state.color} Lang={this.state.Lang} textColor={this.state.text} Name={this.state.Lang == "en" ? "Fashion and Clothing" : "الأزياء والملابس"} Price="33" Image={clothing} />
                    </View>
                    <View style={{height: 200,alignItems: 'flex-start', flexGrow:1}}>
                        <Product navigation={() => this.props.navigation("Display")} back={this.state.color} Lang={this.state.Lang} textColor={this.state.text} Name={this.state.Lang == "en" ? "Accessories" : "مستلزمات"} Price="76" Image={accessories} />
                    </View>
                </View>
                <View style={{marginTop:20,width:"100%",flexDirection:"row",}}>
                    <View style={{height: 200 ,alignItems: 'center',flexGrow:1}}>
                        <Product navigation={() => this.props.navigation("Display")} back={this.state.color} Lang={this.state.Lang} textColor={this.state.text} Name={this.state.Lang == "en" ? "Computer" : "الحاسوب"} Price="133" Image={laptop} />
                    </View>
                    <View style={{height: 200,alignItems: 'flex-start', flexGrow:1}}>
                        <Product navigation={() => this.props.navigation("Display")} back={this.state.color} Lang={this.state.Lang} textColor={this.state.text} Name={this.state.Lang == "en" ? "Gadgets" : "الأدوات"} Price="82" Image={mobile} />
                    </View>
                </View>
                <View style={{marginTop:20,width:"100%",flexDirection:"row",marginBottom:20}}>
                    <View style={{height: 200 ,alignItems: 'center',flexGrow:1}}>
                        <Product navigation={() => this.props.navigation("Display")} back={this.state.color} Lang={this.state.Lang} textColor={this.state.text} Name={this.state.Lang == "en" ? "Food and Products" : "المواد الغذائية والمنتجات"} Price="129" Image={food} />
                    </View>
                    <View style={{height: 200,alignItems: 'flex-start', flexGrow:1}}>
                        <Product navigation={() => this.props.navigation("Display")} back={this.state.color} Lang={this.state.Lang} textColor={this.state.text} Name={this.state.Lang == "en" ? "Health and Beauty" : "الصحة والجمال"} Price="69" Image={beauty} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
  }
}
