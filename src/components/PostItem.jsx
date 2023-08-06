import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  FontAwesome,
  AntDesign,
  Feather,
  MaterialIcons,
} from '@expo/vector-icons';
import AppRoutes from '../enums/AppRoutes';

export const PostItem = ({ post }) => {
  const { id, image, name, comments, likes, place, location } = post;

  const { navigation } = useNavigation();
  const isAnyComment = comments.length > 0;
  // const isAnyLike = likes > 0;

  return (
    <View style={styles.postItem}>
      <View style={styles.pictureWrapper}>
        <Image source={image} style={styles.picture} />
      </View>
      <Text style={styles.title}>{name}</Text>

      <View style={styles.info}>
        <View style={styles.statistics}>
          <TouchableOpacity
            style={styles.statItem}
            onPress={() => navigation(AppRoutes.COMMENTS, { postId: id })}
          >
            <MaterialIcons
              name={isAnyComment ? 'comment' : 'add-comment'}
              size={24}
              color={isAnyComment ? '#FF6C00' : '#5c5c5c'}
              style={{ paddingTop: 2 }}
            />
            <Text
              style={[styles.statText, !isAnyComment && styles.transparent]}
            >
              {comments.length}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.statItem}
            onPress={() => console.log('liked')}
          >
            <AntDesign
              name="like2"
              size={22}
              color={likes > 0 ? '#FF6C00' : '#5c5c5c'}
              style={{ paddingVertical: 2 }}
            />
            <Text style={styles.statText}>{likes}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.statItem}
          // onPress={() => navigation('', { postLocation: location })}
        >
          <Feather name="map-pin" size={24} color="#5c5c5c" />
          <Text style={[styles.statText, styles.underline]}>{place}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postItem: {
    flexDirection: 'column',
    marginBottom: 32,
  },
  pictureWrapper: {
    height: 280,
    width: '100%',
  },
  picture: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  title: {
    marginVertical: 8,
    color: '#212121',
    fontSize: 16,
    fontWeight: 500,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statistics: {
    flexDirection: 'row',
    columnGap: 24,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    color: '#212121',
    fontSize: 16,
    marginLeft: 6,
  },
  transparent: {
    color: '#BDBDBD',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
