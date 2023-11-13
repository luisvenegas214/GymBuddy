import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CutorBulk = () => {
  // const [age, setAge] = useState('');
  // const [gender, setGender] = useState('');
  // const [height, setHeight] = useState('');
  // const [weight, setWeight] = useState('');
  // const [goal, setGoal] = useState('');
  // const [decision, setDecision] = useState('');
  // const [calories, setCalories] = useState('');
  // const [fats, setFats] = useState('');
  // const [protein, setProtein] = useState('');
  // const [carbs, setCarbs] = useState('');

  // const calculateNutrition = () => {
  //   if (age && gender && height && weight && goal) {
  //     const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);

  //     let calorieFactor = 0;
  //     let proteinFactor = 0;
  //     let fatFactor = 0;
  //     let carbFactor = 0;

  //     if (goal === 'cut') {
  //       calorieFactor = 0.8; // Reducing calorie intake for weight loss
  //       proteinFactor = 2.2; // Higher protein intake for weight loss
  //       fatFactor = 0.25; // Moderate fat intake
  //       carbFactor = 0.45; // Lower carbohydrate intake
  //     } else if (goal === 'bulk') {
  //       calorieFactor = 1.2; // Increasing calorie intake for bulking up
  //       proteinFactor = 1.8; // Moderate protein intake
  //       fatFactor = 0.3; // Moderate fat intake
  //       carbFactor = 0.55; // Higher carbohydrate intake for bulking
  //     }

  //     // Calculate calorie intake
  //     const bmr = gender === 'male' ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age) : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  //     const tdee = bmr * calorieFactor;
  //     const dailyCalories = tdee;

  //     // Calculate protein intake
  //     const dailyProtein = weight * proteinFactor;

  //     // Calculate fat intake
  //     const dailyFat = (dailyCalories * fatFactor) / 9;

  //     // Calculate carbohydrate intake
  //     const dailyCarbs = (dailyCalories * carbFactor) / 4;

  //     setCalories(dailyCalories.toFixed(0));
  //     setProtein(dailyProtein.toFixed(0));
  //     setFats(dailyFat.toFixed(0));
  //     setCarbs(dailyCarbs.toFixed(0));

  //     if (bmi < 18.5) {
  //       setDecision('Cut Down Weight');
  //     } else if (bmi < 24.9) {
  //       setDecision('Maintain');
  //     } else {
  //       setDecision('Bulk Up');
  //     }
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text>Age:</Text>
      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <Text>Gender:</Text>
      <TextInput
        value={gender}
        onChangeText={(text) => setGender(text)}
      />
      <Text>Height (cm):</Text>
      <TextInput
        value={height}
        onChangeText={(text) => setHeight(text)}
        keyboardType="numeric"
      />
      <Text>Weight (kg):</Text>
      <TextInput
        value={weight}
        onChangeText={(text) => setWeight(text)}
        keyboardType="numeric"
      />
      <Text>Goal (bulk or cut):</Text>
      <TextInput
        value={goal}
        onChangeText={(text) => setGoal(text.toLowerCase())}
      />
      <Button title="Calculate Nutrition" onPress={calculateNutrition} />
      <Text style={styles.decision}>{decision}</Text>
      <Text style={styles.nutrition}>
        Calories: {calories} kcal
        {'\n'}
        Protein: {protein} grams
        {'\n'}
        Fats: {fats} grams
        {'\n'}
        Carbohydrates: {carbs} grams
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  decision: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  nutrition: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default CutorBulk;
