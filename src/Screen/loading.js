import React, {Component} from 'react';
import {
    View,  
    Text,
  } from 'react-native';

  export default class Loading extends Component{
    render(){
        setTimeout(() => {
           this.props.navigation.navigate('Login')
          }, 5000);
        
        return(
            <View><Text>Loading Ekranındasınız</Text></View>
        )
    }
  }