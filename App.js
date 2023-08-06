import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useDispatch } from 'react-redux';

import { store } from './src/store/store';
import Routes from './src/components/routes';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
