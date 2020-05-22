import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import InstructionScreen from './screens/InstructionScreen'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import {Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen'


function LogoTitle() {
  return (
    <Image
      style={{ width: '90%', height: 50 }}
      source={require('./assets/Logo-small.png')}
    />
  );
}

export default class App extends React.Component {
  componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
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
                headerTitle: props => <LogoTitle {...props} /> ,
                headerStyle: {
                  backgroundColor: '#DFDADA',
                  borderBottomWidth: 1,
                  elevation: 0,
                  shadowOffset: 0
                }
              }} />
            <Stack.Screen 
              name="GameOver" 
              component={GameOverScreen}
              options={{
                headerShown: false
                }
              } />
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
