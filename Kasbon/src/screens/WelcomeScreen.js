import React,{Component} from 'react';
import {View, StyleSheet, Text,Button} from 'react-native';

export default class WelcomeScreen extends Component{
    render (){
        return (
            <View style={styles.content}>
                <Text style={styles.tips}>
                 WelcomeScreen
                </Text>
                <Button
          title="Register"
          onPress={() => this.props.navigation.push('Register')}
        />
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.push('Login')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
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