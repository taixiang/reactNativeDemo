五一佳节匆匆而过，有人选择在外面看人山人海，有人选择宅在家中度过五一，也有人依然坚守在第一线，致敬！   
这是坚持学习`react-native`的第二篇文章，可能会迟到，但是绝不会缺席，这篇要涉及到的是[`react-navigation`](https://reactnavigation.org/)，也是rn社区主推的一个导航库。   

网上关于`react-navigation`的基本使用也是一抓一大把，这里对于它的使用不做过多介绍，主要记录使用过程中的其他问题。

因为android 和iOS 手机的不同，导航栏的显示也不太一样，而这篇文章会尽量的配置属性，让两端的导航栏样式、页面跳转的动画保持一致，同时还会介绍底部导航栏添加角标的方法。     

这里使用的是**3.9.1版本**，网上好多文章是2.x版本的，用法基本大同小异。

#### android 导航栏标题居中适配    
默认情况下，iOS的标题居中显示，而android的则不！！！
![](https://user-gold-cdn.xitu.io/2019/5/4/16a81d27b8295397?w=838&h=158&f=png&s=5622)   

**解决**：`createStackNavigator`的`defaultNavigationOptions`属性里配置`textAlign`和`flex`
```
const AppStackNavigator = createStackNavigator({
    HomeScreen: {screen: HomeScreen},
    RainScreen: {screen: RainScreen}
},{
    defaultNavigationOptions:{
        ...
        headerTitleStyle: { 
            ...
            textAlign: "center", //用于android 机型标题居中显示
            flex:1
        }
    }
})
```
**注**：android机型标题默认不居中，`textAlign`和`flex`的属性配置用于android机型标题居中显示。    
在这种情况下，如果配置了`headerLeft`或者`headerRight` 属性，会出现标题偏移的现象。   
![](https://user-gold-cdn.xitu.io/2019/5/4/16a81c0a99da9cfa?w=848&h=160&f=png&s=11239)    
直接在`defaultNavigationOptions`里配置空view的`headerLeft`和`headerRight`
```
    defaultNavigationOptions:{
        ...
        headerTitleStyle: {
            ...
            textAlign: "center", //用于android 机型标题居中显示
            flex:1,
        },
        headerRight: <View/>,
        headerLeft: <View/>
    }
```
这时候标题居中，同时可以在各自的页面里面去重写`headerLeft`的样式。    
#### android 导航栏去除阴影样式
android的导航栏还有阴影的样式，添加`elevation` 设置阴影的偏移量
```
defaultNavigationOptions:{
    headerStyle:{
        backgroundColor:"#fff",
        elevation:0.5
    },
    ...
}
```
![](https://user-gold-cdn.xitu.io/2019/5/4/16a81c87013f3353?w=842&h=158&f=png&s=11143)
至此的导航栏的效果跟iOS基本保持一致。

#### android 页面跳转动画，自右向左打开
默认的android页面跳转是自下而上打开页面，而要与iOS的保持一致的自右向左，配置`transitionConfig`属性。
```
const AppStackNavigator = createStackNavigator({
    HomeScreen: {screen: HomeScreen},
    ...
},{
    defaultNavigationOptions:{
        ...
    },
    transitionConfig: () => ({
        screenInterpolator: (sceneProps) => {
            return StackViewStyleInterpolator.forHorizontal(sceneProps)
        },
    }),
})
```

#### 底部导航添加消息角标
有时候我们会遇到这样的需求，在底部导航处添加消息的角标，提醒用户阅读的。     
![](https://user-gold-cdn.xitu.io/2019/5/6/16a8b416246b5623?w=668&h=102&f=png&s=7855)    
在`tabBarIcon`的属性里直接添加图标显示的，这里的`msg`变量数值是全局的，只做演示使用，实际项目里可以根据接口返回数据，可以搭配mobx 一起使用。

```
const rootTab = createBottomTabNavigator({
    ...
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
    ...
    defaultNavigationOptions: ({navigation, screenProps}) => ({
        tabBarOnPress: (obj) => {
            //点击的时候清除消息
            const {routeName} = obj.navigation.state;
            if (routeName === "info") {
                msg = 0
            }
            obj.navigation.navigate(obj.navigation.state.key)
        }
    })
})
```

以上几点是在`react-navigation`的使用过程中遇到的问题以及解决方法，相关代码已经传到了github上[https://github.com/taixiang/reactNativeDemo](https://github.com/taixiang/reactNativeDemo)，仅供参考，如果有更好的方式 欢迎一起学习研究。    

 
欢迎关注我的个人博客：[https://www.manjiexiang.cn/](https://www.manjiexiang.cn/)  

更多精彩欢迎关注微信号：春风十里不如认识你  
一起学习，一起进步，欢迎上车，有问题随时联系，一起解决！！！

![](https://user-gold-cdn.xitu.io/2018/8/12/1652cd77eaebeb98?w=900&h=540&f=jpeg&s=64949)    