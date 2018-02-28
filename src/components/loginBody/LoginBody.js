/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.loginBody}>
      <View style={styles.login}>
          <Text style={styles.loginText}>Login</Text>
          </View>
          <View>
          <Text style={styles.username}>Username</Text>
          <View style={styles.input}>
          <TextInput editable="true" style={styles.text} />
          </View>
          <View style={styles.buttonView}>
              <Button title='Login' tyle={styles.button} color="black"/>
          </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loginBody:{
    height:'50%',
    width:'100%',
        // justifyContent: 'space-between',
        flexDirection :'column',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      },
      text :{
        fontSize: 20,
        fontWeight: '800',
        width:'100%',
      },
      input : {
        borderWidth: 3,
        borderColor: 'black',
        height: 50,
        width: 300,
      },
      login:{
        textAlign:'left',
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:250,
        marginBottom:50,
        marginTop:20,
      },
      loginText:{
        fontSize:25,
        fontWeight: '800',
      },
      username:{
        fontSize:20,
        fontWeight:'800',
      },
      buttonView : {
        marginTop:60,
        marginLeft:50,
        width:180,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
      },
      button : {
        color: 'black',
        borderColor: 'black',
        fontWeight:'bold',
      }
      
});
