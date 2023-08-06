import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

import AppRoutes from '../enums/AppRoutes';
import { LoginScreen } from '../Screens/auth/LoginScreen';
import { RegistrationScreen } from '../Screens/auth/RegistrationScreen';
import { CreatePostsScreen } from '../Screens/home/CreatePostsScreen';
import { PostsScreen } from '../Screens/home/PostsScreen';
import { Home } from '../Screens/home/Home';

const Stack = createStackNavigator();

export default Routes = () => {
  return (
    <Stack.Navigator initialRouteName={AppRoutes.LOGIN}>
      <Stack.Screen
        name={AppRoutes.LOGIN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AppRoutes.REGISTRATION}
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AppRoutes.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
