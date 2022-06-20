import interactWithFirebase from './firebase';

export default {
  async login(context, payload) {
    const logInURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
    await interactWithFirebase(context, payload, logInURL, 'login');
    // const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API_KEY}`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: payload.email,
    //     password: payload.password,
    //     returnSecureToken: true,
    //   }),
    // });

    // const responseData = await response.json();

    // if (!response.ok) {
    //   console.log(responseData);
    //   const errMessage = 'Something went wrong registering a new user';
    //   throw new Error(`${errMessage}: ${responseData.error.message}` || errMessage);
    // }

    // console.log(responseData);
    // context.commit('setUser', {
    //   token: responseData.idToken,
    //   userId: responseData.localId,
    //   tokenExpiration: responseData.expiresIn,
    // });
  },
  async signup(context, payload) {
    const signUpURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
    await interactWithFirebase(context, payload, signUpURL, 'signup');
    //   const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API_KEY}`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email: payload.email,
    //       password: payload.password,
    //       returnSecureToken: true,
    //     }),
    //   });

    //   const responseData = await response.json();

    //   if (!response.ok) {
    //     console.log(responseData);
    //     const errMessage = 'Something went wrong registering a new user';
    //     throw new Error(`${errMessage}: ${responseData.error.message}` || errMessage);
    //   }

  //   console.log(responseData);
  //   context.commit('setUser', {
  //     token: responseData.idToken,
  //     userId: responseData.localId,
  //     tokenExpiration: responseData.expiresIn,
  //   });
  // },
  },
};
