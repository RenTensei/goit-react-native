import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppRoutes from '../../enums/AppRoutes';
import { PostsScreen } from './PostsScreen';
import { TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CreatePostsScreen } from './CreatePostsScreen';

const BottomTab = createBottomTabNavigator();

export const Home = () => {
  const { navigate, goBack } = useNavigation();

  const goBackButton = () => (
    <TouchableOpacity
      style={{ marginLeft: 16 }}
      hitSlop={{ left: 16, right: 32 }}
      onPress={goBack}
    >
      <Feather name="arrow-left" size={24} color="#171717" />
    </TouchableOpacity>
  );

  const logOutButton = () => (
    <TouchableOpacity style={{ padding: 10 }}>
      <Feather name="log-out" size={24} color="#cbcdcf" />
    </TouchableOpacity>
  );

  return (
    <BottomTab.Navigator
      initialRouteName={AppRoutes.CREATE_POSTS}
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
          tabBarIcon: ({ color }) => <Feather name="grid" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={AppRoutes.CREATE_POSTS}
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
          tabBarStyle: {
            height: 0,
          },
          headerLeft: goBackButton,
          tabBarIcon: ({ color }) => <Feather name="plus" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
