import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../styleSheet';
import mountainsImg from '../../images/mountains.png';
import { FormInputs } from '../../components/FormInputs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppRoutes from '../../enums/AppRoutes';

export const LoginScreen = () => {
  const [focusedField, setFocusedField] = useState(false);

  const navigation = useNavigation();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
    navigation.navigate(AppRoutes.HOME);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.registrationScreen}>
      <ImageBackground
        style={styles.mountainsImgBackground}
        source={mountainsImg}
      >
        <View style={[styles.formWrapper, styles.formLoginWrapper]}>
          <Text style={styles.title}>Увійти</Text>

          <View style={styles.inputList}>
            <FormInputs
              inputControl={{ control, focusedField, setFocusedField }}
            />
          </View>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.primaryBtnText}>Увійти</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigation.navigate(AppRoutes.REGISTRATION)}
          >
            <Text style={styles.secondaryBtnText}>
              Немає акаунту?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>
                Зареєструватися
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};
