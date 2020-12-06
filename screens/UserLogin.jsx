import { Form, View } from 'native-base';
import React, { useState } from 'react'
import { Image, StyleSheet, Text , TextInput, TouchableOpacity} from 'react-native'
import HeaderApp from '../Components/HeaderApp';

export default UserLogin = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
    return (
      <>
        <View style={{ flex: 1, backgroundColor: "#fff", marginTop: 10 }}>
          <HeaderApp />
          <View style={styles.mainLogin}>
          <Image style={styles.logo} source={require('../assets/login.png')}/>
          <View style={styles.form}>
            <Text style={styles.textLogin}>Please Login</Text>
            <Form>
                <TextInput value={userName} onChangeText={(e) => setUserName(e)} style={styles.input} placeholder="Username"/>
                <TextInput value={password} onChangeText={(e) => setPassword(e)} style={styles.input} placeholder="Password"/>
            </Form>
            <Text style={styles.forgot}>Forgot Password?</Text>
            <View style={styles.rightTextWrapper}>
        <TouchableOpacity activeOpacity={0.9} style={styles.nxtBtn}>
          <Text style={styles.rightText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
            </View>
          
          </View>
       
        </View>
      

      </>
    );
}

const styles = StyleSheet.create({

  mainLogin :{
      marginBottom: 510,
      justifyContent: 'center',
      alignItems: 'center',
  },
  logo :{
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginTop: 470,
  },
  form :{
      marginBottom: 320,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    width: 310,
    marginVertical: 7,
    paddingVertical: 15,
    paddingHorizontal:20,
    borderRadius: 100,

  },
  textLogin : {
    textAlign: 'center',
    marginVertical: 18,
  },
  forgot : {
    fontSize: 14,
    textAlign: 'right',
    paddingRight: 8
  },
  rightTextWrapper: {
    alignItems: "center",
    textAlign: "center",
    paddingTop: 20
  },
  rightText: {
    color: "#fff",
    fontSize: 12,
  },
  nxtBtn: {
    backgroundColor: "#32C553",
    padding: 15,
    width: 293,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 15,
  },
});