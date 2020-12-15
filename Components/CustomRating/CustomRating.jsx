import React, {useState, useEffect} from 'react'
import {  StyleSheet, Text, View,Platform, TouchableOpacity, Image } from 'react-native';


export default CustomRatingBar = () => {
    const [defaultRating, setDefaultRating] = useState(2);
    // To set the max number of Stars
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  
    // Filled Star. You can also give the path from local
    const starImageFilled =
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    // Empty Star. You can also give the path from local
    const starImageCorner =
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={key}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
        <Text style={{marginLeft:8, textAlign:'center', fontSize: 12}}>{defaultRating}.0</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({

    customRatingBarStyle: {
      justifyContent: 'center',
      flexDirection: 'row',
      marginVertical: 2
  },
    starImageStyle: {
      width: 15,
      height: 15,
      resizeMode: 'cover',
    },
    
  });