import { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import defaultPhoto from '../../images/sunset.png';
import { Ionicons } from '@expo/vector-icons';

import posts from '../../mock/posts';
import { CommentItem } from '../../components/CommentItem';
const currentPost = posts[1];

export const CommentsScreen = () => {
  const [photoPath, setPhotoPath] = useState(null);

  const commentsAvailable = currentPost?.comments.length > 0;

  return (
    <>
      <View style={styles.photoWrapper}>
        <Image
          source={photoPath ? { uri: photoPath } : defaultPhoto}
          style={styles.photo}
        />
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        scrollEnabled={false}
      >
        <View style={{ /* paddingBottom: 32,*/ flex: 1 }}>
          <ScrollView>
            {commentsAvailable ? (
              <View style={styles.commentsList}>
                {currentPost.comments.map(comment => (
                  <CommentItem key={comment.id} comment={comment} />
                ))}
              </View>
            ) : (
              <Text style={styles.infoForUser}>В коментарях пусто!</Text>
            )}
          </ScrollView>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Коментувати..."
            placeholderTextColor="#BDBDBD"
          />
          <TouchableOpacity style={styles.pushBtn}>
            <Ionicons name="arrow-up-circle" size={34} color="#FF6C00" />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 34,
    backgroundColor: '#fff',
  },
  infoForUser: {
    color: '#BDBDBD',
    textAlign: 'center',
  },
  commentsList: {
    rowGap: 24,
    // paddingBottom: 32,
  },
  photoWrapper: {
    paddingTop: 32,
    height: 272,
    backgroundColor: '#fff',
  },

  photo: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  input: {
    height: 50,
    paddingLeft: 16,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 100,
  },
  pushBtn: {
    position: 'absolute',
    right: 8,
    bottom: 7,
  },
});
