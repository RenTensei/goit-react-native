import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

import AppRoutes from '../enums/AppRoutes';
import { LoginScreen } from '../Screens/auth/LoginScreen';
import { RegistrationScreen } from '../Screens/auth/RegistrationScreen';
import { CreatePostsScreen } from '../Screens/home/CreatePostsScreen';
import { PostsScreen } from '../Screens/home/PostsScreen';
import { Home } from '../Screens/home/Home';
import { useDispatch, useSelector } from 'react-redux';
import AuthActions from '../store/auth/authActions';
import { useEffect } from 'react';
import { selectIsLoggedIn } from '../store/auth/authSelectors';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default Routes = () => {
  const { navigate } = useNavigation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate(AppRoutes.LOGIN);
    } else {
      navigate(AppRoutes.HOME);
    }
  }, [isLoggedIn]);

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
