import {
  TouchableWithoutFeedback,
  View,
  Pressable,
  Image,
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

import AppRoutes from '../../enums/AppRoutes';

export const CreatePostsScreen = () => {
  const [uriImg, setUriImg] = useState(null);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const canSubmitPost = title && uriImg;

  const { navigate } = useNavigation();

  const handleTakePhoto = async () => {
    // на емуляторі/симуляторі камера не працює,
    // нажаль на моб.пристрої також нема можливості перевірити
    // const response = ImagePicker.launchCameraAsync();
    try {
      const libraryPerm = await MediaLibrary.requestPermissionsAsync();
      if (!libraryPerm.granted) {
        throw new Error('Permission to camera was denied!');
      }

      const { canceled, assets } = await ImagePicker.launchImageLibraryAsync();
      if (!canceled) {
        await MediaLibrary.createAssetAsync(assets[0].uri);
        setUriImg(assets[0].uri);
      }
    } catch (error) {
      alert(error.message || 'something went wrong, try again!');
    }
  };

  const getLocation = async () => {
    const locationPerm = await Location.requestForegroundPermissionsAsync();
    if (!locationPerm.granted) {
      throw new Error('Permission to location was denied!');
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({
      accuracy: Location.LocationAccuracy.Low,
    });

    return `${latitude} / ${longitude}`;
  };

  const handleSubmitPost = async () => {
    if (!location) setLocation(await getLocation());
    console.log({ title, location: location ? location : await getLocation() });
    navigate(AppRoutes.POSTS);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        {uriImg ? (
          <Image source={{ uri: uriImg }} style={styles.imageWrapper} />
        ) : (
          <View style={styles.imageWrapper}>
            <View style={styles.photoView}>
              <Pressable style={styles.cameraBtn} onPress={handleTakePhoto}>
                <FontAwesome name="camera" size={24} color="#BDBDBD" />
              </Pressable>
            </View>
          </View>
        )}

        <Text style={styles.text}>Завантажте фото</Text>

        <View style={styles.inputBox}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
              inputMode="text"
              onChangeText={s => setTitle(s)}
              value={title}
            />
          </View>

          <View style={styles.inputWrapper}>
            <EvilIcons name="location" size={24} color="#BDBDBD" />
            <TextInput
              style={styles.input}
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
              inputMode="text"
              onChangeText={s => setLocation(s)}
              value={location}
            />
          </View>
        </View>
        <Pressable
          style={[styles.submitBtn, canSubmitPost && styles.activeBtn]}
          onPress={canSubmitPost ? handleSubmitPost : null}
        >
          <Text
            style={[styles.submitBtnText, canSubmitPost && styles.textActive]}
          >
            Опублікувати
          </Text>
        </Pressable>
      </KeyboardAwareScrollView>

      <Pressable
        style={styles.resetBtn}
        onPress={() => {
          setUriImg(null);
          setTitle('');
          setLocation('');
        }}
      >
        <EvilIcons name="trash" size={30} color="#BDBDBD" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 34,
  },
  imageWrapper: {
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
  },
  photoView: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderRadius: 8,
  },
  cameraImg: {
    width: 24,
    height: 24,
  },
  cameraBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  text: {
    textAlign: 'center',
    marginTop: 8,
    color: '#BDBDBD',
    fontSize: 16,
  },
  inputBox: {
    marginVertical: 32,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 16,
    color: '#212121',
    paddingLeft: 8,
  },
  submitBtn: {
    alignItems: 'center',
    padding: 16,
    fontSize: 16,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
  },
  activeBtn: {
    backgroundColor: '#FF6C00',
  },
  submitBtnText: {
    color: '#BDBDBD',
    fontSize: 16,
  },
  textActive: {
    color: '#ffffff',
  },
  resetBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
  },
});
