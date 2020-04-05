export const signIn = (credentails) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentails.email, credentails.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth()
      .signOut()
      .then(() => {
        console.log('Signed Out');
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'SIGNOUT_ERROR', err });
      });
  };
};
