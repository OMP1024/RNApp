/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { RooterStack } from './src/components/RooterStack';
console.ignoredYellowBox = ['Remote debugger'];
console.disableYellowBox = true;
export default class App extends Component {
    render() {
        return  <RooterStack/>
    }
}

