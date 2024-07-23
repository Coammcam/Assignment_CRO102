import {View, Text} from 'react-native';
import React from 'react';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import DailyReflections from './src/screens/DailyReflections';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Boarding from './src/screens/Boarding';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import Profile from './src/screens/Profile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Boarding">
          <Stack.Screen name="Boarding" component={Boarding} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="DailyReflections" component={DailyReflections} />
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

  // return <Profile />;

};

export default App;

// const App = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{headerShown: false}}
//           initialRouteName="Boarding">
//           <Stack.Screen name="Boarding" component={Boarding} />
//           <Stack.Screen name="SignUp" component={SignUp} />
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="DailyReflections" component={DailyReflections} />
//           <Stack.Screen
//             name="BottomTabNavigator"
//             component={BottomTabNavigator}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// };
