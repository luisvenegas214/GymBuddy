import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WorkOut from './WorkOut';
import CutorBulk from './CutorBulk';
import FoodLog from './FoodLog';
import AboutPage from './AboutPage';
import ProgressPage from './ProgressPage';
import { Image }from 'react-native';



const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Lift Buddy" component={Main}/>
        <Stack.Screen name="WorkOut" component={WorkOut}/>
        <Stack.Screen name="CutorBulk" component={CutorBulk} />
        <Stack.Screen name="FoodLog" component={FoodLog}/>
        <Stack.Screen name ="ProgressPage" component={ProgressPage}/>
        <Stack.Screen name="AboutPage" component={AboutPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);
const Main = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image source={require('./image.png')} style={styles.image} />
        <Text style={styles.mainText}>Welcome to Lift Buddy</Text>
        <Text style={styles.subText}>Choose an option to get started:</Text>
        <CustomButton
          title="Go to WorkOut"
          onPress={() => navigation.navigate('WorkOut')}
        />
        <CustomButton
          title="Go to CutorBulk"
          onPress={() => navigation.navigate('CutorBulk')}
        />
        <CustomButton
          title="FoodLog"
          onPress={() => navigation.navigate('FoodLog')}
        />
        <CustomButton
          title="Progress"
          onPress={() => navigation.navigate('ProgressPage')}
        />
         <CustomButton
          title="AboutPage"
          onPress={() => navigation.navigate('AboutPage')}
        />
      </View>
    );
  };

export default function App() {
  return <Navigation/>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Change background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20, // Adjust spacing
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#D3D3D3', // Change button background color
    borderRadius: 10,
    padding: 10,
    margin: 10,

  },
  buttonText: {
    fontWeight:'bold',
    fontSize:18,
  }
});



