import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Icon} from 'native-base';

export default class Discussion extends Component {
    

    static navigationOptions =  {
        tabBarLabel : () => null,
        tabBarIcon : ({tintColor}) => <Icon name="mail-outline" type="MaterialIcons" style={{fontSize: 25,color:tintColor}} />
    }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
