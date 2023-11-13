import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

import ChestWorkout from './ChestWorkout';
import BackWorkout from './BackWorkout';
import LegsWorkout from './LegsWorkout';
import ArmsWorkout from './ArmsWorkout';

const CustomButton = ({ title, onPress, imageSource }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Image source={imageSource} style={styles.buttonImage} />
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const Tab = createBottomTabNavigator();

const WorkoutScreen = () => {
  const navigation = useNavigation(); // Use useNavigation to get the navigation prop

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>What muscle are you working on?</Text>

      <CustomButton
        title="Chest"
        onPress={() => navigation.navigate('Chest')}
        imageSource={require('./chest.webp')} 
      />
      <CustomButton
        title="Back"
        onPress={() => navigation.navigate('Back')}
        imageSource={require('./back.jpeg')}
      />
      <CustomButton
        title="Legs"
        onPress={() => navigation.navigate('Legs')}
        imageSource={require('./legs.jpeg')}
      />
      <CustomButton
        title="Arms"
        onPress={() => navigation.navigate('Arms')}
        imageSource={require('./arm.webp')}
      />
    </View>
  );
};

const WorkOut = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Workout" component={WorkoutScreen} />
      <Tab.Screen name="Chest" component={ChestWorkout} />
      <Tab.Screen name="Back" component={BackWorkout} />
      <Tab.Screen name="Legs" component={LegsWorkout} />
      <Tab.Screen name="Arms" component={ArmsWorkout} />
    </Tab.Navigator>
  );
};

export default WorkOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  subText: {
    fontSize: 16,
    marginBottom: 0,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    margin: 10,
    width: 120,
  },
  buttonImage: {
    width: 100, // Reduce the width of the image
    height: 50, // Reduce the height of the image
    marginRight: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:18,
  },
});
