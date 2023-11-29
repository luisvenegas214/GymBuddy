import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lift Buddy</Text>
      <Text style={styles.description}>
        Hello and thank you for choosing Lift Buddy, your dedicated fitness companion. This app is designed to provide you with everything you need for your fitness journey, including a food log, a variety of exercise routines to follow, a progress page to track your achievements, and a calculator to determine your goal-specific macronutrients.
      </Text>
      <Text style={styles.note}>
        Please note that this app is continually evolving to meet your fitness needs, and some features may still be under development.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  note: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
  },
});

export default AboutPage;
