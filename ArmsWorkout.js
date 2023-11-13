import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { exerciseOptions, fetchData } from './FetchData';

const ArmsWorkout = () => {
  const [chestWorkouts, setChestWorkouts] = useState([]);

  useEffect(() => {
    const fetchChestWorkouts = async () => {
      try {
        const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper arms';
        const response = await fetchData(url, exerciseOptions);

        if (Array.isArray(response)) {
          setChestWorkouts(response);
        }
      } catch (error) {
        console.error('Error fetching chest workouts:', error);
      }
    };

    fetchChestWorkouts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Arms Workouts</Text>
      <FlatList
        data={chestWorkouts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            {item.gifUrl && (
              <Image
                source={{ uri: item.gifUrl }}
                style={styles.gif}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  gif: {
    width: '100%',
    height: 200, // Adjust the height as needed
  },
});

export default ArmsWorkout;

