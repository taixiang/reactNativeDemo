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


export default class InfoScreen extends Component {


    static navigationOptions = ({ navigation}) => {
        return {
            headerTitle: '消息',
        }
    }

    render() {
        return (
            <View>
                <Text>info</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({});