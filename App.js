import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loading from './src/Screen/loading';
import login from './src/Screen/login';
import register from './src/Screen/register';


const Stack = createNativeStackNavigator()
const App = () => {

  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen name="Loading" component={loading}/>
      <Stack.Screen name="Login" component={login}/>
      <Stack.Screen name="Register" component={register}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
