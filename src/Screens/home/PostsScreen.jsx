import {
  Image,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import currentUserPic from '../../images/currentUserPic.png';

export const PostsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile}>
        <Image source={currentUserPic} style={styles.userImage} />
        <View>
          <Text style={styles.userLogin}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <View style={styles.postsList}>
        {/* {posts.map(post => {
          return <PostItem key={post.id} post={post} />;
        })} */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: '#fff',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    marginBottom: 32,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userLogin: {
    color: '#212121',
    fontSize: 13,
  },
  userEmail: {
    color: '#757575',
    fontSize: 11,
  },
  postsList: {
    paddingBottom: 44,
  },
});
