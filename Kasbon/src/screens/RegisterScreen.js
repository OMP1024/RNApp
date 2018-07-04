import React,{Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class RegisterScreen extends Component{

    static navigationOptions = {
        header:null
    };
    
    render (){
        return (
            <View style={styles.content}>
                <Text style={styles.tips} onPress={() => this.props.navigation.push('Login')}>
                RegisterScreen 
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