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


export default class HeadLeft extends Component {
    render() {
        const {onPress,style} = this.props;
        return (
            <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
                <Image source={require('../resources/img/arrow_left_gray.png')}/>
                <Text style={{fontSize:16,color:"#939393",marginLeft:5}}>返回</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
});