import React from 'react'
import { Container, Header, Left, Right, Button, Icon, } from 'native-base';
import {StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Text} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


export default HeaderApp = (props) => {


  const navigation = useNavigation()
  console.log(navigation)
  return (
      <>
        <Container>
          <Header style={{flex:1,marginTop: 23, justifyContent:'center', alignItems:'center', padding:32 ,backgroundColor: '#F8F9F9'}}>
            <Left>
              <Button onPress={() => navigation.goBack()} transparent>
              <MaterialIcons name="arrow-back-ios" size={24} color="black" />
              </Button>
            </Left>
            <Right>
              <Button onPress={()=>navigation.navigate("Information")} bordered  style={styles.skipBtn}>
                  <Text style={styles.text}>{props.btnName}</Text>
              </Button>
            </Right>
          </Header>
        </Container>
      </>
    );
}

const styles = StyleSheet.create({ 
text:{
  color: 'black',
  fontSize: 12,
},
skipBtn :{
  borderColor: '#F8F9F9',
  height: 32,
  borderRadius: 100,
  width: 90  ,
  justifyContent: 'center',
  alignItems: 'center',
}
})
