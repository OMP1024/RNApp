import React,{Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class GoJekScreen  extends Component{
    render (){
        return (
            <View style={styles.content}>
                <Text style={styles.tips}>
                GoJekScreen
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