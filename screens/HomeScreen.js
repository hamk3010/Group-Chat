import React from 'react';
import {View, Text, AsyncStorage,TouchableOpacity } from 'react-native';
import User from './User';
import style from './constants/styles';


export default class HomeScreen extends React.Component{

    static navigationOptions = {
        title: "Chats"
    }


    __logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    render(){
        return(
            <View style = {style.container}>
                <Text>
                    {User.phone}
                </Text>
                <TouchableOpacity onPress={this.__logOut}>
                    <Text>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}