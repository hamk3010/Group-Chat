
import React from 'react';
import {
  AsyncStorage,
  View,
  Alert,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './constants/styles';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import User from './User';

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

  state={
    phone: '',
    name: ''
  }

  handleChange = key => val =>{
    this.setState({ [key] : val })
  }

  //Play with Component did Mount
  componentDidMount(){
    AsyncStorage.getItem('userPhone').then(val => {
      if(val){
        this.setState({phone:val})
      }
    })
  }
  submitForm = async () => {
    if(this.state.phone.length < 10){
      Alert.alert('Error', 'Wrong phone number')
    }
    else if(this.state.name.length < 3){
      Alert.alert('Error', 'Please put a valid name')
    }
    else{
      //save user data
      await AsyncStorage.setItem('userPhone', this.state.phone)
      User.phone = this.state.phone;
      this.props.navigation.navigate('App');
    }
    
  }

  render() {
    return (
        <View style = {styles.container}>
          <TextInput
            placeholder = "Phone number"
            keyboardType = 'number-pad'
            style = {styles.input}
            values = {this.state.phone}
            onChangeText = {this.handleChange('phone')}
          />
          <TextInput
            placeholder = "Name"
            style = {styles.input}
            value = {this.state.name}
            values = {this.state.name}
            onChangeText = {this.handleChange('name')}
          />

          <TouchableOpacity onPress = {this.submitForm}>
            <Text style ={styles.btnText}>Enter</Text>
          </TouchableOpacity>
          </View>
        );
    }
  
};