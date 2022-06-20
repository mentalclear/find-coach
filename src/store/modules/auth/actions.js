import interactWithFirebase from './firebase';

export default {
  async login(context, payload) {
    const logInURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
    await interactWithFirebase(context, payload, logInURL, 'login');
  },
  async signup(context, payload) {
    const signUpURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
    await interactWithFirebase(context, payload, signUpURL, 'signup');
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },
};
