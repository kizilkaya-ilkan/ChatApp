import React,{Component} from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,  
    Text,
    TextInput,
    Button,
  } from 'react-native';
 
  export default class Register extends Component{
    constructor(){
      super();
      this.state = ({
        kuladi:'',
        kulkey:''
      });
    }
    render(){
      const {kuladi,kulkey} = this.state;
        return(
            <View style={styles.Main}>
              <View style={styles.textinput}>
                   <Text style={styles.Text}>Kullanici Adı</Text>
                    <TextInput
                    style={styles.text}
                    value={kuladi}
                    onChangeText={(kuladi)=>this.setState({kuladi})} 
                    placeholder='  Notlarım'></TextInput>
                    <Text style={styles.Text}>Kullanici Şifresi</Text>
                     <TextInput
                    style={styles.text}
                    value={kulkey}
                    onChangeText={(kulkey)=>this.setState({kulkey})} 
                    placeholder='  Notlarım'></TextInput>
                    <View style={{margin:20}}>
                    <Button style={styles.button} title='Kayıt Ol'></Button>
                    </View>
              </View>
            </View>
        )
    }
  }
  const styles =  StyleSheet.create({
    Main:{
        flex:1,
        backgroundColor:'#FFFFFF',
    },
    textinput:{
      justifyContent:'center',
      flexDirection:'column',
      flex:1,
      margin:50,
      marginBottom: '80%'
    },
    Text:{
      fontSize: 20,
      marginBottom:10,
      marginTop:10,
      fontWeight: "bold",
    },
    text:{
      paddingHorizontal:10,
      borderColor:'gray',
      borderWidth:2,
      textAlign:'left',
      borderRadius:10,
    },
})