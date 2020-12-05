import React from 'react'
import { Container, Header, Left, Right, Button, Icon, Text } from 'native-base';
import {StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default HeaderApp = (props) => {

  const navigation = useNavigation()
  return (
      <>
        <Container>
          <Header style={{marginTop: 20, padding:10 ,backgroundColor: '#F8F9F9'}}>
            <Left>
              <Button transparent>
                <Icon name="arrow-back" style={{color:'black'}} />
              </Button>
            </Left>
            <Right>
              <Button onPress={()=>navigation.navigate("Information")} bordered light style={styles.skipBtn}>
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
  borderColor: 'lightgray',
  height: 32,
  borderRadius: 100
}
})
