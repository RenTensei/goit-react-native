import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mountainsImgBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  // forms
  registrationScreen: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  formWrapper: {
    backgroundColor: '#fff',

    paddingTop: 92,
    paddingBottom: 78,
    paddingHorizontal: 16,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  formLoginWrapper: {
    paddingTop: 32,
    paddingBottom: 144,
  },

  userIconUri: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -60 }],
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },

  addIconBtn: {
    position: 'absolute',
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
  },

  title: {
    marginBottom: 32,
    color: '#212121',
    fontSize: 30,
    // fontWeight: 500,
    textAlign: 'center',
  },

  // inputs
  inputList: {
    rowGap: 16,
  },

  input: {
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },

  inputFocused: {
    borderColor: '#FF6C00',
    backgroundColor: '#fff',
  },

  togglePasswordBtn: {
    position: 'absolute',
    right: 16,
    top: 16,
  },

  errorMessage: {
    position: 'absolute',
    left: 16,
    bottom: 0,
    color: 'red',
  },

  // btn
  primaryBtn: {
    alignItems: 'center',
    marginTop: 43,
    marginBottom: 16,

    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },

  primaryBtnText: {
    color: '#fff',
    // fontWeight: 'bold',
  },

  secondaryBtn: {
    alignItems: 'center',
  },

  secondaryBtnText: {
    color: '#1B4371',
  },
});
