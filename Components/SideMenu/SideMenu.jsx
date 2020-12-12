import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import SvgUri from 'expo-svg-uri';
import { View } from 'native-base';
import React from 'react';
import { StyleSheet, ImageBackground, Button, Text} from 'react-native';
import { PrimaryColor } from '../../Constants/Colors/Color';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SideMenu({navigation}) {
  return (
    <DrawerContentScrollView>
     <View style={{flex:1, display:'flex', flexDirection:'column', height:'100%'}}>
      <View style={{flex:1}}>
      <View style={{ backgroundColor: PrimaryColor, height: "100%" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.closeDrawer()}
        >
          <Entypo
            name="cross"
            size={36}
            color="white"
            style={{ paddingTop: 10, paddingLeft: 10 }}
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: 60,
            
          }}
        >
          <SvgUri
            width="150"
            height="150"
            source={require("../../assets/logo.svg")}
          />
        </View>
      </View>
      </View>
      <View style={{flex:9, marginTop:20}}>
          <View>
          <TouchableOpacity  style={styles.drawerOptions} activeOpacity={0.7}>
          <SvgUri 
            width= "21"
            height="21"
            source={require('../../assets/user-profile.svg')}
            />
            <Text style={styles.drawerText}>My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.drawerOptions} activeOpacity={0.7}>
          <SvgUri 
            width= "21"
            height="21"
            source={require('../../assets/exercise.svg')}
            />
            <Text style={styles.drawerText}>Exercises</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.drawerOptions} activeOpacity={0.7}>
          <SvgUri 
            width= "21"
            height="21"
            source={require('../../assets/Experts.svg')}
            />
            <Text style={styles.drawerText}>Experts</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.drawerOptions} activeOpacity={0.7}>
          <SvgUri 
            width= "23"
            height="21"
            source={require('../../assets/meditation.svg')}
            />
            <Text style={styles.drawerText}>Meditations</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.stateDrawer} activeOpacity={0.7}>
          <View style={styles.drawerOptions}>
          <SvgUri 
            width= "23"
            height="21"
            source={require('../../assets/language.svg')}
            />
            <Text style={styles.drawerText}>Language options</Text>
          </View>
          <View  ><TouchableOpacity activeOpacity={0.7}><Text  style={styles.stateTxt}>Eng</Text></TouchableOpacity></View>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.drawerOptions} activeOpacity={0.7}>
          <SvgUri 
            width= "23"
            height="21"
            source={require('../../assets/premium-sub.svg')}
            />
            <Text style={styles.drawerText}>Premium Subscription</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.drawerOptions} activeOpacity={0.7}>
          <SvgUri 
            width= "23"
            height="21"
            source={require('../../assets/referral.svg')}
            />
            <Text style={styles.drawerText}>Refer a Friend</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.stateDrawer} activeOpacity={0.7}>
          <View style={styles.drawerOptions}>
          <SvgUri 
            width= "23"
            height="21"
            source={require('../../assets/notif.svg')}
            />
            <Text style={styles.drawerText}>Notification</Text>
          </View>
          <View  ><TouchableOpacity activeOpacity={0.7} ><Text style={styles.stateTxt}>On</Text></TouchableOpacity></View>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.drawerOptions} activeOpacity={0.7}>
          <SvgUri 
            width= "23"
            height="21"
            source={require('../../assets/rating.svg')}
            />
            <Text style={styles.drawerText}>Rate Us</Text>
          </TouchableOpacity>
          </View>
      </View>
      <View style={{flex:2, marginTop:90}}>
          <TouchableOpacity style={{display:'flex', flexDirection:'row',paddingHorizontal:10}} activeOpacity={0.8}>
            <SvgUri 
            width= "23"
            height="21"
            source={require('../../assets/logout.svg')}
            />
            <Text style={styles.drawerText}>Log Out</Text>
          </TouchableOpacity>
      </View>

      {/* <View style={{flex:1}}>
        <Text>Logout</Text>
      </View> */}
     </View>

      {/* DrawerOptions  */}

      
    </DrawerContentScrollView>
  );
    }
    const styles = StyleSheet.create({
      drawerOptions :{
        display: 'flex',
        flexDirection: 'row',
        paddingLeft:7,
        marginBottom: 16
      },
      drawerText : {
        paddingHorizontal:10,
        fontWeight:'800',
        fontSize: 15
      },
      stateDrawer:{
        justifyContent:'space-between',
        display: 'flex',
        flexDirection: 'row'
      },
      stateTxt:{
        paddingRight: 12,
        fontSize: 16,
        color: PrimaryColor,
        fontWeight: 'bold'
      }
    });