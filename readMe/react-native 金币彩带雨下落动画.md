日常项目中，经常遇到一些表情雨/金币雨/彩带雨 等下落的动画，之前做android原生的时候，写过类似的效果，主要通过自定义view 在`onDraw`里绘制下落的过程，具体可以看下我的这篇github地址[android 仿微信表情雨下落](https://github.com/taixiang/rain_emoji)，现在转战 `react-native`，同样可以实现这样的效果，主要用到的动画库 [react-native-animatable](https://github.com/oblador/react-native-animatable)    

![](https://user-gold-cdn.xitu.io/2019/4/14/16a1ae038906ec02?w=306&h=500&f=jpeg&s=24631)  

安装 `yarn add react-native-animatable`库   

主要用到的动画是移动下落，即`translateY`，从屏幕顶部下落至底部，同时过程中可以左右摇摆，每次随机图片下落。 
```
_FailAnimation = ({style,duration,delay,startY,speed,children}) => {
    return <Animatable.View //下落动画
        style={style}
        duration={duration}
        delay={delay}
        animation={{
            from: {translateY: startY},
            to: {translateY: this.state.parentHeight + speed}
        }}
        easing={t => Math.pow(t, 1.2)}
        useNativeDriver>
        {children}
    </Animatable.View>
}

_SwingAnimation = ({delay, duration, children}) => {
    return <Animatable.View  //左右摇摆动画
        animation={{
            0: {
                translateX: -12,
                rotate: '10deg',
            },
            0.5: {
                translateX: 0,
                rotate: '0deg',
            },
            1: {
                translateX: 12,
                rotate: '-10deg',
            },
        }}
        delay={delay}
        duration={duration}
        direction="alternate"
        easing="ease-in-out"
        iterationCount="infinite"
        useNativeDriver>
        {children}
    </Animatable.View>
}
```
主要用到的动画，动画是可以相互嵌套的
```
range(count).map((i) =>(
    <FailAnimation
        key={i}
        startY={startY}
        speed={speed}
        style={{
            position: "absolute",
            left: Math.random() * this.state.parentWidth
        }}
        duration={duration}
        delay={i * (duration / count)}
    >

        <SwingAnimation
            delay={Math.random() * duration }
            duration={duration}
            >
            {this._imgRandom(imgs)}
        </SwingAnimation>
    </FailAnimation>
))
```
通过外部传属性`imgs`图片数组
```
<Rain
    imgs={imgs}
    count={35}
    duration={1500}>
</Rain>
```
 源代码github地址 [https://github.com/taixiang/reactNativeDemo](https://github.com/taixiang/reactNativeDemo)    
 
 这个github地址里后续会记录平时学习工作中用到的rn方面的知识点，这会是一个长期的过程，我自己也会坚持下去。    
 
 
欢迎关注我的个人博客：[https://www.manjiexiang.cn/](https://www.manjiexiang.cn/)  

更多精彩欢迎关注微信号：春风十里不如认识你  
一起学习，一起进步，欢迎上车，有问题随时联系，一起解决！！！

![](https://user-gold-cdn.xitu.io/2018/8/12/1652cd77eaebeb98?w=900&h=540&f=jpeg&s=64949)    
