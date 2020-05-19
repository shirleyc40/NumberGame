import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import InstructionScreen from './screens/InstructionScreen'
import GameScreen from './screens/GameScreen'



export default class App extends React.Component {
  render() {
    const Stack = createStackNavigator();
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
              options={{ headerShown: false }}
              />
            <Stack.Screen 
              name="Instructions" 
              component={InstructionScreen}
              options={{
                title: '',
                headerStyle: {
                backgroundColor: '#9B8AB9',
                borderBottomWidth: 0,
                elevation: 0
                }
              }} />
            <Stack.Screen 
              name="Game" 
              component={GameScreen}
              options={{
                title: '',
                headerStyle: {
                backgroundColor: '#DFDADA',
                borderBottomWidth: 1,
                elevation: 0
                }
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
  }
}

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1
//   }
// });
