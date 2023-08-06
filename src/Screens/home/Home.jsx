import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import AppRoutes from '../../enums/AppRoutes';
import { PostsScreen } from './PostsScreen';
import { CreatePostsScreen } from './CreatePostsScreen';
import { CommentsScreen } from './CommentsScreen';
import { ProfileScreen } from './ProfileScreen';
import { MapScreen } from './MapScreen';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../store/auth/authSelectors';
import { useEffect } from 'react';
import AuthActions from '../../store/auth/authActions';

const BottomTab = createBottomTabNavigator();

export const Home = () => {
  const { navigate, canGoBack, goBack } = useNavigation();

  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const goBackButton = () => (
    <TouchableOpacity
      style={{ marginLeft: 16 }}
      hitSlop={{ left: 16, right: 32 }}
      onPress={() => navigate(AppRoutes.POSTS)}
    >
      <Feather name="arrow-left" size={24} color="#171717" />
    </TouchableOpacity>
  );

  const logOutButton = () => (
    <TouchableOpacity
      style={{ padding: 10 }}
      onPress={() => dispatch(AuthActions.logOut())}
    >
      <Feather name="log-out" size={24} color="#cbcdcf" />
    </TouchableOpacity>
  );

  return (
    <BottomTab.Navigator
      initialRouteName={AppRoutes.POSTS}
      screenOptions={{
        tabBarStyle: {
          height: 84,
          paddingHorizontal: 70,
          paddingTop: 10,
          paddingBottom: 34,
        },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#FF6C00',
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'rgba(33, 33, 33, 0.8)',
        tabBarItemStyle: {
          width: 70,
          height: 40,
          borderRadius: 20,
        },
        headerTitleStyle: {
          fontSize: 17,
          fontWeight: 500,
        },
      }}
    >
      <BottomTab.Screen
        name={AppRoutes.POSTS}
        component={PostsScreen}
        options={{
          title: 'Публікації',
          headerRight: logOutButton,
          tabBarIcon: ({ color }) => (
            <Feather name="grid" color={color} size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name={AppRoutes.CREATE_POSTS}
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
          tabBarStyle: {
            display: 'none',
          },
          headerLeft: goBackButton,
          tabBarIcon: ({ color }) => (
            <Feather name="plus" color={color} size={22} />
          ),
        }}
      />
      <BottomTab.Screen
        name={AppRoutes.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name={AppRoutes.COMMENTS}
        component={CommentsScreen}
        options={{
          title: 'Коментарі',
          headerLeft: goBackButton,
          tabBarButton: () => null,
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
      <BottomTab.Screen
        name={AppRoutes.MAP}
        component={MapScreen}
        options={{
          title: 'Геолокація',
          headerLeft: goBackButton,
          tabBarButton: () => null,
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
    </BottomTab.Navigator>
  );
};
