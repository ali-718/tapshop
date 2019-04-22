import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createDrawerNavigator,createAppContainer} from 'react-navigation'
import SplashScreen from './src/screens/splashScreen';
import Home from './src/screens/Home';
import AddProduct from './src/screens/AddProduct';
import Sell from './src/screens/Sell';
import Display from './src/screens/Display';
import Shop from './src/screens/Shop';
import Item from './src/screens/Item';
import NavigationOptions from './src/components/drawer';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import Forgot from './src/screens/forgot';
import About from './src/screens/About';
import Account from './src/screens/Account';
import Contact from './src/screens/contact';
import Accessories from './src/screens/Accessories';
import Laptops from './src/screens/laptops';
import Gadgets from './src/screens/gadgets';
import RNCreditCard from './src/screens/creditCard';

export default class Includer extends Component {

    static navigationOptions = {
        drawerLabel:() => null
    }

    
    state = {
        color:this.props.navigation.getParam('color','white'),
        text:this.props.navigation.getParam('text','black'),
        background:this.props.navigation.getParam('back','white'),
        statusBarColour:this.props.navigation.getParam('status','green'),
        grey:this.props.navigation.getParam('grey',"#686868"),
        Lang:this.props.navigation.getParam('Lang',"en")
    }

  render() {
    
        const Drawer = createDrawerNavigator({
            Splash:{
                screen:SplashScreen,
                navigationOptions:{
                    drawerLockMode:"locked-closed"
                }
            },
            Home:{
                screen: props => <Home state={this.state} navigation={props} />,
                navigationOptions:{
                    drawerLabel:this.state.Lang == "en" ? "Home" : "الصفحة الرئيسية"
                }
            },
            Display:{
                screen:props => <Display state={this.state} navigation={props} />,
                navigationOptions:{
                    drawerLabel:() => null
                }
            },
            Accessories:{
                screen:props => <Accessories state={this.state} navigation={props} />,
                navigationOptions:{
                    drawerLabel:() => null
                }
            },
            Laptops:{
                screen:props => <Laptops state={this.state} navigation={props} />,
                navigationOptions:{
                    drawerLabel:() => null
                }
            },
            Gadgets:{
                screen:props => <Gadgets state={this.state} navigation={props} />,
                navigationOptions:{
                    drawerLabel:() => null
                }
            },
            Item:{
                screen:props => <Item state={this.state} navigation={props} />,
                navigationOptions:{
                    drawerLabel:() => null
                }
            },
            AddProduct:{
                screen:props => <AddProduct state={this.state} navigation={props} />,
                navigationOptions:{
                    drawerLabel:this.state.Lang == "en" ? "Sell an Item" : "بيع غرض"
                }
            },
            Login:{
                screen:props => <Login state={this.state} navigation={props} />,
                navigationOptions:{
                    drawerLabel:this.state.Lang == "en" ? "Login" : "تسجيل الدخول"
                }
            },
            Forgot:{
                screen:props => <Forgot state={this.state} navigation={props} />,
                navigationOptions:{
                    drawerLabel:() => null
                }
            },
            Signup:{
                screen:props => <Signup state={this.state} navigation={props} />,
                navigationOptions:{
                    drawerLabel:() => null
                }
            },
            About:{
                screen:props => <About state={this.state} navigation={props} />,
                navigationOptions:{
                    drawerLabel:() => null
                }
            },
            CreditCard:{
                screen:(props) => <RNCreditCard state={this.state} {...props} />,
                navigationOptions:{
                    drawerLabel:() => null
                }
            },
            Contact:{
                screen:props => <Contact state={this.state} navigation={props} />,
                navigationOptions:{
                    drawerLabel:() => null
                }
            },
            Account:{
                screen:props => <Account state={this.state} navigation={props} />,
                navigationOptions:{
                    drawerLabel:this.state.Lang == "en" ? "Account" : "الحساب"
                }             
            },
            Includer:{
                screen:Includer,
                navigationOptions:{
                    drawerLockMode:"locked-closed"
                }
            }
        },
        {
            contentComponent:(props) => <NavigationOptions state={this.state} {...props}/>,
            contentOptions:{
            activeTintColor:"green",
            inactiveTintColor:this.state.text,
            activeBackgroundColor:"rgba(0,0,0,0)",
            inactiveBackgroundColor:"rgba(0,0,0,0)",
        },
        drawerPosition:this.state.Lang == "en" ? "left" : "right",
        initialRouteName:"Splash"
          },)

        const AppContainer = createAppContainer(Drawer)

    return (
            <AppContainer />
    )
  }
}
