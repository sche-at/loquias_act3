import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const TogglePicturesApp = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  const toggleImage = () => {
    setShowFirstImage(!showFirstImage);
  };




  return (
    <View style={styles.container}>
     <Image
        source={
          showFirstImage
            ? { uri: 'https://cdn.imgbin.com/9/1/3/imgbin-flashlight-n1GuuWEcGdL324nHrTmB3mTuy.jpg'}
            : { uri: 'https://cdn.xxl.thumbs.canstockphoto.com/flashlight-doodle-illustration-of-a-flashlight-eps-vectors_csp28590938.jpg'}
        }
        style={styles.image}
      />
      <Button title="Toggle Image" onPress={toggleImage} />
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default TogglePicturesApp;