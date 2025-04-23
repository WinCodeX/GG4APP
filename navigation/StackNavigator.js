import BottomTabNavigator from './BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthLoadingScreen from '../screens/AuthLoadingScreen'; // adjust path if needed
import LoginScreen from '../screens/LoginScreen'; // adjust path if needed
import SignupScreen from '../screens/SignupScreen'; // adjust path if needed
import HomeScreen from '../screens/HomeScreen'; // adjust path if needed
import TrackScreen from '../screens/TrackScreen'; // adjust path if needed
import ChatScreen from '../screens/ChatScreen'; // adjust path if needed

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AuthLoading">
      <Stack.Screen
        name="AuthLoading"
        component={AuthLoadingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Main" component={BottomTabNavigator} />
      <Stack.Screen name="TrackScreen" component={TrackScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} /> 
      
  

    </Stack.Navigator>
  );
}
// Removed misplaced initialRouteName
