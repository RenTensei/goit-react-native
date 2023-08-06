import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import mountainsImg from '../../images/mountains.png';
import removeIconBtnImg from '../../images/remove.png';
import addIconBtnImg from '../../images/add.png';

// mock
import posts from '../../mock/posts';
import { PostItem } from '../../components/PostItem';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {
  // selector in future
  const avatarURL = null;

  const { navigate } = useNavigation();

  return (
    <ImageBackground style={styles.mountainsBgImage} source={mountainsImg}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity
            style={styles.userAvatarWrapper}
            // onPress={avatarURL ? removeAvatar : selectAvatar}
          >
            {avatarURL && (
              <Image style={styles.userAvatar} source={{ uri: avatarURL }} />
            )}
            <View style={styles.photoBtn}>
              <Image
                source={avatarURL ? removeIconBtnImg : addIconBtnImg}
                style={{ width: 30, height: 30 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ position: 'absolute', top: 22, right: 16 }}
            onPress={() => navigate(AppRoutes.LOGIN)}
          >
            <Feather name="log-out" size={24} color="#cbcdcf" />
          </TouchableOpacity>

          <Text style={styles.userName}>Natali Natali</Text>
          <View style={styles.postsList}>
            {posts.map(post => (
              <PostItem key={post.id} post={post} />
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mountainsBgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    paddingTop: 170,
  },
  profile: {
    flex: 1,
    paddingTop: 92,
    paddingBottom: 45,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userAvatarWrapper: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -60 }],
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  userAvatar: {
    height: '100%',
    borderRadius: 16,
  },
  photoBtn: {
    position: 'absolute',
    zIndex: 69,
    right: -14,
    bottom: 14,
  },
  userName: {
    color: '#212121',
    fontSize: 30,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 32,
  },
  postsList: {
    flex: 1,
  },
});
