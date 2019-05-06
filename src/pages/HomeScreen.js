/**
 * Created by tx on 2019/5/4.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


export default class HomeScreen extends Component {

    static navigationOptions = {
        headerTitle: '首页',
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate("RainScreen")
                }}>
                    <Text>页面跳转</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#f5f5f5",
        justifyContent:"center",
        alignItems:"center"
    }
});