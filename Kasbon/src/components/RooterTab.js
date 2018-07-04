import React from "react";
import HomeScreen from "../screens/HomeScreen";
import BorrowScreen from '../screens/BorrowScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RecordScreen from '../screens/RecordScreen';
import DetailScreen from "../screens/DetailScreen";
import TabBarItem from './TabBarItem';
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom
} from 'react-navigation';
import color from "../common/color";

const HomeStack = StackNavigator({
    Home: HomeScreen,
    Borrow: BorrowScreen
});

const RecordStack = StackNavigator({
    Record: RecordScreen,
    Detail: DetailScreen
});

const ProfileStack = StackNavigator({
    Profile: ProfileScreen,
    Detail: DetailScreen
});

export const RooterTab = TabNavigator({
    Home: HomeStack,
    Record: RecordStack,
    Profile: ProfileStack
}, {
      navigationOptions: ({ navigation }) => 
        {
            const {routeName} = navigation.state;
            let title;
            let normalImage;
            switch (routeName) {
                case 'Home':{
                                title = 'Home';
                                normalImage = require('../../images/tab/home_click.png');
                            }break;
                case 'Record':{
                                title = 'Pinjaman saya',
                                normalImage = require('../../images/tab/lending_records_click.png');
                            }break;
                case 'Profile':{
                                title = 'Profil';
                                normalImage = require('../../images/tab/profile_click.png');
                            }break;
                default:break;
            }
            return {
                tabBarIcon: ({focused,tintColor}) => {
                    return <TabBarItem normalImage = {normalImage}
                    focused = {focused}
                    tintColor = {tintColor} />
                },
                tabBarLabel:title
            }
        },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: color.theme,
        inactiveTintColor: color.tabbartitle,
    },
    lazy:true,
    animationEnabled: true,
    swipeEnabled: false,
});
