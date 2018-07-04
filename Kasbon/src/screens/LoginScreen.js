import React,{Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import color from '../common/color';

export default class LoginScreen extends Component{

    static navigationOptions = {
        title: 'Login',
        headerStyle: {
          backgroundColor: color.theme,
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            alignSelf:'center',
        },
      };

    render (){
        return (
            <View style={styles.content}>
                <Text style={styles.tips}>
                    LoginScreen
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content:{
        backgroundColor:'#ffffff',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    tips:{
        fontSize:20,
        color:'red',
    }
})