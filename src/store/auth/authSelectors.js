const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUser = state => state.auth.user;

const selectUserID = state => state.auth.user.uid;

const selectUserName = state => state.auth.user.name;

export { selectIsLoggedIn, selectUser, selectUserID, selectUserName };
