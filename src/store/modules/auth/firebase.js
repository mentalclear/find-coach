const interactWithFirebase = async (context, payload, url, mode) => {
  const response = await fetch(`${url}${process.env.VUE_APP_FIREBASE_API_KEY}`, {
    method: 'POST',
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    }),
  });

  const responseData = await response.json();

  if (!response.ok) {
    console.log(responseData);
    const modeMesage = mode === 'login' ? 'logging in a' : 'signing up a new';
    const errMessage = `Something went wrong ${modeMesage} user`;
    throw new Error(`${errMessage}: ${responseData.error.message}` || errMessage);
  }

  console.log(responseData);
  context.commit('setUser', {
    token: responseData.idToken,
    userId: responseData.localId,
    tokenExpiration: responseData.expiresIn,
  });
};

export default interactWithFirebase;
