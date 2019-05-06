/**
 * Created by tx on 2019/5/4.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, Image,
} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";
import HomeScreen from "../pages/HomeScreen"
import RainScreen from "../pages/RainScreen"
import InfoScreen from "../pages/InfoScreen"
import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";

let msg = 3

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#fff',
            elevation: 0.5,
        },
        headerTitleStyle: {
            fontSize: 18,
            textAlign: "center",
            flex: 1
        }
    }
});

const InfoStack = createStackNavigator({
    Info: {
        screen: InfoScreen
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#fff',
            elevation: 0.5,
        },
        headerTitleStyle: {
            fontSize: 18,
            textAlign: "center",
            flex: 1
        }
    }
});


const rootTab = createBottomTabNavigator({
    home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: "主页",
            tabBarIcon: ({focused, tintColor}) => {
                let icon = focused ?
                    require('../resources/img/tabbar_icon_home_selected.png') :
                    require('../resources/img/tabbar_icon_home_default.png');
                return <Image source={icon} style={{width: 34, height: 26}}/>
            }
        }
    },
    info: {
        screen: InfoStack,
        navigationOptions: {
            tabBarLabel: "消息",
            tabBarIcon: ({focused, tintColor}) => {
                let icon = focused ?
                    require('../resources/img/mine_icon_message_selected.png') :
                    require('../resources/img/mine_icon_message_default.png');
                return <View>
                    {
                        msg > 0 ?
                            <View style={{
                                width:12,
                                height:12,
                                justifyContent:"center",
                                position: 'absolute',
                                zIndex: 9,
                                backgroundColor: "#FB3768",
                                borderRadius:6,
                                right:0,
                                top:-2,
                            }}>
                                <Text style={[{fontSize:10, color:"#fff", textAlign:"center",}]}>{msg}</Text>
                            </View> : null
                    }
                    <Image source={icon} style={{width: 34, height: 26}}/>
                </View>
            }
        }
    }
},{
    tabBarOptions: {
        activeTintColor: "#FB3768",
        inactiveTintColor: '#939393',
        allowFontScaling: false
    },
    navigationOptions: {
        header: null,
    },
    defaultNavigationOptions: ({navigation, screenProps}) => ({
        tabBarOnPress: (obj) => {
            const {routeName} = obj.navigation.state;
            if (routeName === "info") {
                msg = 0
            }
            obj.navigation.navigate(obj.navigation.state.key)
        }
    })
})


const AppStackNavigator = createStackNavigator({
    Tabs: {screen:rootTab},
    HomeScreen: {screen: HomeScreen},
    RainScreen: {screen: RainScreen}
},{
    defaultNavigationOptions:{
        headerStyle:{ //导航栏背景色
            backgroundColor:"#fff",
            elevation:0.5
        },
        headerTitleStyle: { //标题样式
            color: "#424242",
            fontSize: 18,
            textAlign: "center", //用于android 机型标题居中显示
            flex:1,
        },
        headerRight: <View/>,
        headerLeft: <View/>
    },
    transitionConfig: () => ({
        screenInterpolator: (sceneProps) => {
            return StackViewStyleInterpolator.forHorizontal(sceneProps)
        },
    }),
})
export default createAppContainer(AppStackNavigator)