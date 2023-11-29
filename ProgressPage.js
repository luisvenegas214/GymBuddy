import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { request, PERMISSIONS, check, RESULTS } from 'react-native-permissions';

const ProgressPage = () => {
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);

  // Check and request camera permission
  useEffect(() => {
    const requestCameraPermission = async () => {
      const result = await check(PERMISSIONS.IOS.CAMERA);
      if (result === RESULTS.DENIED) {
        const permissionResult = await request(PERMISSIONS.IOS.CAMERA);
        if (permissionResult === RESULTS.GRANTED) {
          console.log('Camera permission granted');
        } else {
          console.log('Camera permission denied');
        }
      }
    };
    requestCameraPermission();
  }, []);

  const handleImagePick = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response.uri);
      }
    });
  };

  const takePicture = () => {
    const options = {
      title: 'Take Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        setImage(response.uri);
      }
    });
  };

  const saveProgress = () => {
    // Implement logic to save progress data (image, date, weight)
    console.log('Save Progress:', { date, weight, image });
    // You can save this data to a database or storage.
  };

  return (
    <View style={styles.container}>
      <Text>Date:</Text>
      <TextInput
        value={date}
        onChangeText={(text) => setDate(text)}
        keyboardType="numeric"
      />
      <Text>Weight (lbs):</Text>
      <TextInput
        value={weight}
        onChangeText={(text) => setWeight(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={handleImagePick}>
        <View style={styles.imagePicker}>
          {image ? (
            <Image source={{ uri: image }} style={styles.imagePreview} />
          ) : (
            <Text>Select Image</Text>
          )}
        </View>
      </TouchableOpacity>
      <Button title="Take Picture" onPress={takePicture} />
      <Button title="Save Progress" onPress={saveProgress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imagePicker: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ProgressPage;
