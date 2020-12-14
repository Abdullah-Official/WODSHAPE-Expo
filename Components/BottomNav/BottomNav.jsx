import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native'
import { Container, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
import { PrimaryColor } from '../../Constants/Colors/Color';
import { useNavigation } from '@react-navigation/native';

export default BottomNav = () => {
  const navigation = useNavigation()
    return (
      <>
            <Container style={{backgroundColor: PrimaryColor, lineHeight: 30}}>

<Footer>
    <FooterTab style={{backgroundColor: PrimaryColor, }}>
        <Button style={styles.btnBot}>
        <Image source={require('../../assets/discover.png')} style={{height: 33, width: 33}} />
            <Text style={styles.botText}>Discover</Text>
        </Button>
        <Button onPress={() => navigation.navigate("SearchProfessional")} style={styles.btnBot}>
            <Image source={require('../../assets/nutrition.png')} style={{height: 33, width: 33}} />
            <Text style={styles.botText}>Professionals</Text>
        </Button>
        <Button style={styles.btnBot}>
        <Image source={require('../../assets/progress.png')} style={{height: 33, width: 33}} />
            <Text style={styles.botText}>My Progress</Text>
        </Button>
        <Button  style={styles.btnBot}>
        <Image source={require('../../assets/about.png')} style={{height: 33 , width: 76}} />
            <Text style={styles.botText}>About me</Text>
        </Button>
    </FooterTab>
</Footer>
</Container>
        
      </>
    );
}

const styles = StyleSheet.create({
    botText :{
        color: '#fff',
        fontSize: 12,
    },
    btnBot : {
        paddingVertical: 10 ,
    }

});
