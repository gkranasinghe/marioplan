const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('LOGIN_SUCCESS');
      return { ...state, authError: null };

    case 'LOGIN_ERROR':
      console.log('LOGIN_ERROR');
      return { ...state, authError: 'Login failed' };

    case 'SIGNOUT_SUCCESS':
      console.log('SIGNOUT_SUCCESS');
      return state;

    case 'SIGNOUT_ERROR':
      console.log('SIGNOUT_ERROR');
      return state;

    default:
      return state;
  }
};

export default authReducer;
