import {
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
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';

import mountainsImg from '../../images/mountains.png';
import removeIconBtnImg from '../../images/remove.png';
import addIconBtnImg from '../../images/add.png';
import { styles } from '../styleSheet';
import { FormInputs } from '../../components/FormInputs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../enums/AppRoutes';
import { useDispatch, useSelector } from 'react-redux';
import AuthActions from '../../store/auth/authActions';
import { selectIsLoggedIn } from '../../store/auth/authSelectors';

export const RegistrationScreen = () => {
  const [userIconUri, setUserIconUri] = useState(null);
  const [focusedField, setFocusedField] = useState(false);

  const { navigate } = useNavigation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(AppRoutes.HOME);
    }
  }, [isLoggedIn]);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      login: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = formdata => {
    // console.log(formdata);
    dispatch(
      AuthActions.register({
        email: formdata.email,
        password: formdata.password,
        name: formdata.login,
        userIconUri,
      })
    );
  };

  const selectIcon = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0]);
      setUserIconUri(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.registrationScreen}>
      <ImageBackground
        style={styles.mountainsImgBackground}
        source={mountainsImg}
      >
        <View style={styles.formWrapper}>
          <View style={styles.userIconUri}>
            {userIconUri && (
              <Image
                style={{ flex: 1, borderRadius: 16 }}
                source={{ uri: userIconUri }}
              />
            )}

            <TouchableOpacity
              style={styles.addIconBtn}
              onPress={userIconUri ? () => setUserIconUri(null) : selectIcon}
            >
              <Image
                source={userIconUri ? removeIconBtnImg : addIconBtnImg}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Реєстрація</Text>

          <View style={styles.inputList}>
            <Controller
              control={control}
              name="login"
              rules={{ required: true }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <View>
                  <TextInput
                    style={[
                      styles.input,
                      focusedField === 'login' && styles.inputFocused,
                    ]}
                    placeholder="Логін"
                    onChangeText={onChange}
                    onFocus={() => setFocusedField('login')}
                    onBlur={() => setFocusedField('')}
                    value={value}
                  />
                  {error && (
                    <Text style={styles.errorMessage}>Login is required.</Text>
                  )}
                </View>
              )}
            />

            <FormInputs
              inputControl={{ control, focusedField, setFocusedField }}
            />
          </View>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.primaryBtnText}>Зареєструватися</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigate(AppRoutes.LOGIN)}
          >
            <Text style={styles.secondaryBtnText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};
