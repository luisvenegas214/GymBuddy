import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const FoodLog = () => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [fats, setFats] = useState('');
  const [carbs, setCarbs] = useState('');
  const [foodLog, setFoodLog] = useState([]);

  const addFood = () => {
    if (foodName && calories && protein && fats && carbs) {
      const newFoodEntry = {
        id: Date.now().toString(),
        foodName,
        calories: parseInt(calories),
        protein: parseFloat(protein),
        fats: parseFloat(fats),
        carbs: parseFloat(carbs),
      };

      setFoodLog((prevFoodLog) => [...prevFoodLog, newFoodEntry]);
      setFoodName('');
      setCalories('');
      setProtein('');
      setFats('');
      setCarbs('');
    }
  };

  const deleteFood = (id) => {
    setFoodLog((prevFoodLog) => prevFoodLog.filter((item) => item.id !== id));
  };

  const calculateTotalCalories = () => {
    return foodLog.reduce((total, entry) => total + entry.calories, 0);
  };

  const calculateTotalProtein = () => {
    return foodLog.reduce((total, entry) => total + entry.protein, 0);
  };

  const calculateTotalFats = () => {
    return foodLog.reduce((total, entry) => total + entry.fats, 0);
  };

  const calculateTotalCarbs = () => {
    return foodLog.reduce((total, entry) => total + entry.carbs, 0);
  };

  const renderFoodEntry = ({ item }) => (
    <View style={styles.foodEntry}>
      <Text>{item.foodName}</Text>
      <Text>{item.calories} kcal</Text>
      <Text>Protein: {item.protein} g</Text>
      <Text>Fats: {item.fats} g</Text>
      <Text>Carbs: {item.carbs} g</Text>
      <TouchableOpacity onPress={() => deleteFood(item.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Food Name:</Text>
      <TextInput
        style={styles.input}
        value={foodName}
        onChangeText={(text) => setFoodName(text)}
      />
      <Text>Calories:</Text>
      <TextInput
        style={styles.input}
        value={calories}
        onChangeText={(text) => setCalories(text)}
        keyboardType="numeric"
      />
      <Text>Protein (g):</Text>
      <TextInput
        style={styles.input}
        value={protein}
        onChangeText={(text) => setProtein(text)}
        keyboardType="numeric"
      />
      <Text>Fats (g):</Text>
      <TextInput
        style={styles.input}
        value={fats}
        onChangeText={(text) => setFats(text)}
        keyboardType="numeric"
      />
      <Text>Carbs (g):</Text>
      <TextInput
        style={styles.input}
        value={carbs}
        onChangeText={(text) => setCarbs(text)}
        keyboardType="numeric"
      />
      <Button title="Add Food" onPress={addFood} />
      <Text style={styles.totalCalories}>Total Calories: {calculateTotalCalories()} kcal</Text>
      <Text style={styles.totalProtein}>Total Protein: {calculateTotalProtein()} g</Text>
      <Text style={styles.totalFats}>Total Fats: {calculateTotalFats()} g</Text>
      <Text style={styles.totalCarbs}>Total Carbs: {calculateTotalCarbs()} g</Text>
      <FlatList
        data={foodLog}
        renderItem={renderFoodEntry}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  foodEntry: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
  },
  deleteButton: {
    color: 'red',
  },
  totalCalories: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  totalProtein: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  totalFats: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  totalCarbs: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default FoodLog;
