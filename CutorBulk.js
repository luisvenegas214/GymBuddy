import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CutorBulk = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');
  const [decision, setDecision] = useState('');
  const [calories, setCalories] = useState('');
  const [fats, setFats] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [proteinIntakeOption, setProteinIntakeOption] = useState('1gPerPound');

  // Function to get the activity level multiplier
  const getActivityLevelMultiplier = () => {
    switch (activityLevel) {
      case 'sedentary':
        return 1.2;
      case 'lightlyActive':
        return 1.375;
      case 'moderatelyActive':
        return 1.55;
      case 'veryActive':
        return 1.725;
      case 'extremelyActive':
        return 1.9;
      default:
        return 1.2; // Default to sedentary
    }
  };

  // Function to calculate the protein factor
  const getProteinFactor = () => {
    switch (proteinIntakeOption) {
      case '1gPerPound':
        return 1.0;
      case '0.82gPerPound':
        return 0.82;
      case '1.5gPerPound':
        return 1.5;
      default:
        return 1.0; // Default to 1g per pound
    }
  };

  const calculateNutrition = () => {
    if (age && gender && height && weight && goal) {
      const heightInInches = height / 2.54; // Convert height to inches
      const weightInPounds = parseFloat(weight) * 2.20462; // Convert weight to pounds
  
      const bmi = (weightInPounds / (heightInInches * heightInInches)).toFixed(1);
  
      // Calculate BMR based on gender
      const bmr =
        gender === 'male'
          ? 88.362 + 13.397 * weightInPounds + 4.799 * heightInInches - 5.677 * age
          : 447.593 + 9.247 * weightInPounds + 3.098 * heightInInches - 4.33 * age;
  
      // Calculate TDEE using the activity level multiplier
      const activityLevelMultiplier = getActivityLevelMultiplier();
      const tdee = bmr * activityLevelMultiplier;
  
      // Adjust calories based on the selected goal
      const calorieFactor = goal === 'cut' ? 0.8 : 1.2;
      const dailyCalories = tdee * calorieFactor * 0.9; // Reduce calories by 10%
  
      // Calculate protein intake using the selected protein factor
      const proteinFactor = getProteinFactor();
      const dailyProtein = weightInPounds * proteinFactor;
  
      // Calculate fat intake
      const fatFactor = 0.25;
      const dailyFat = (dailyCalories * fatFactor) / 9; // 1g of fat = 9 calories
  
      // Calculate carbohydrate intake
      const carbFactor = 1 - proteinFactor - fatFactor;
      const dailyCarbs = (dailyCalories * carbFactor) / 4; // 1g of carbs = 4 calories
  
      // Update state variables with the calculated values
      setCalories(dailyCalories.toFixed(0));
      setProtein(dailyProtein.toFixed(0));
      setFats(dailyFat.toFixed(0));
      setCarbs(dailyCarbs.toFixed(0));
  
      // Determine decision based on BMI
      if (bmi < 18.5) {
        setDecision('Cut Down Weight');
      } else if (bmi < 24.9) {
        setDecision('Maintain');
      } else {
        setDecision('Bulk Up');
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <Text>Age:</Text>
      <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <Text>Gender:</Text>
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
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
      <Text>Goal:</Text>
      <Picker
        selectedValue={goal}
        onValueChange={(itemValue) => setGoal(itemValue)}
      >
        <Picker.Item label="Select Goal" value="" />
        <Picker.Item label="Cut" value="cut" />
        <Picker.Item label="Bulk" value="bulk" />
      </Picker>
      <Text>Activity Level:</Text>
      <Picker
        selectedValue={activityLevel}
        onValueChange={(itemValue) => setActivityLevel(itemValue)}
      >
        <Picker.Item label="Select Activity Level" value="" />
        <Picker.Item label="Sedentary" value="sedentary" />
        <Picker.Item label="Lightly Active" value="lightlyActive" />
        <Picker.Item label="Moderately Active" value="moderatelyActive" />
        <Picker.Item label="Very Active" value="veryActive" />
        <Picker.Item label="Extremely Active" value="extremelyActive" />
      </Picker>
      <Text>Protein Intake Option:</Text>
      <Picker
        selectedValue={proteinIntakeOption}
        onValueChange={(itemValue) => setProteinIntakeOption(itemValue)}
      >
        <Picker.Item label="1g per pound" value="1gPerPound" />
        <Picker.Item label="0.82g per pound" value="0.82gPerPound" />
        <Picker.Item label="1.5g per pound" value="1.5gPerPound" />
      </Picker>
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
