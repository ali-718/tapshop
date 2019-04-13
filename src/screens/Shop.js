import React, { Component } from 'react'
import { Text, View,ScrollView } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';
import Product from '../components/Product';
import laptop from '../assets/images/laptop.jpg';
import mobile from '../assets/images/mobile.jpg';
import clothing from '../assets/images/clothing.jpg';
import food from '../assets/images/food.jpg';
import accessories from '../assets/images/accessories.jpg';
import beauty from '../assets/images/beauty.jpg';

export default class Shop extends Component {
  render() {
    return (
        <ScrollView style={{flex:1}}>
            <View style={{flex:1}}>
                <View style={{marginTop:20,width:"100%",flexDirection:"row",}}>
                    <View style={{height: 200 ,alignItems: 'center',flexGrow:1}}>
                        <Product Name="Fashion and Clothing" Price="33" Image={clothing} />
                    </View>
                    <View style={{height: 200,alignItems: 'flex-start', flexGrow:1}}>
                        <Product Name="Accessories" Price="76" Image={accessories} />
                    </View>
                </View>
                <View style={{marginTop:20,width:"100%",flexDirection:"row",}}>
                    <View style={{height: 200 ,alignItems: 'center',flexGrow:1}}>
                        <Product Name="Computers" Price="133" Image={laptop} />
                    </View>
                    <View style={{height: 200,alignItems: 'flex-start', flexGrow:1}}>
                        <Product Name="Gadgets" Price="82" Image={accessories} />
                    </View>
                </View>
                <View style={{marginTop:20,width:"100%",flexDirection:"row",}}>
                    <View style={{height: 200 ,alignItems: 'center',flexGrow:1}}>
                        <Product Name="Food Products" Price="129" Image={food} />
                    </View>
                    <View style={{height: 200,alignItems: 'flex-start', flexGrow:1}}>
                        <Product Name="Health and Beauty" Price="69" Image={beauty} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
  }
}
