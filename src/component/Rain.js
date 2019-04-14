import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

const range = count => {
    const array = [];
    for (let i = 0; i < count; i++) {
        array.push(i);
    }
    return array;
};


export default class Rain extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentWidth: 0,
            parentHeight: 0,
        };
    }

    _onLayout = (event) => {
        this.setState({
            parentWidth: event.nativeEvent.layout.width,
            parentHeight: event.nativeEvent.layout.height,
        })
    }

    _FailAnimation = ({style, duration, delay, startY, speed, children}) => {
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

    _imgRandom = (imgs) => {
        let r = Math.ceil(Math.random() * imgs.length);
        return <Image resizeMode={"center"} source={imgs[r-1]}/>
    }

    render() {

        let FailAnimation = this._FailAnimation;
        let SwingAnimation = this._SwingAnimation;

        const {
            imgs,
            count, //一次下落的数量
            duration, //时长
            startY = -50, //起始下落距顶部位置
            speed = 100,
        } = this.props

        return (
            <View style={{position: "absolute", bottom: 0, left: 0, right: 0, top: 0}}
                  onLayout={this._onLayout}>
                {
                    range(count).map((i) => (
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
                }
            </View>
        )
    }

}

