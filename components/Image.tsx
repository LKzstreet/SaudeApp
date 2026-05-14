import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 800,
    height: 140,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => (

      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://wordpress-cms-revista-prod-assets.quero.space/legacy_posts/post_images/32018/7b3c5bb401da576bd640addf39e16073920e351e.jpg?1603218870',
        }}
      />
     

  
);

export default DisplayAnImage;