export default {
  async contactCoach({ commit }, request) {
    const newRequest = {
      userEmail: request.email,
      message: request.message,
    };

    const response = await fetch(`https://vue-http-demo-7b2c7-default-rtdb.firebaseio.com/requests/${request.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest),
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Something went wrong sending request');
      throw error;
    }
    newRequest.id = responseData.name;
    newRequest.coachId = request.coachId;

    commit('addRequest', newRequest);
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(`https://vue-http-demo-7b2c7-default-rtdb.firebaseio.com/requests/${coachId}.json`);
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Something went wrong fetching requests');
      throw error;
    }

    const requests = [];
    Object.keys(responseData).forEach((key) => {
      const request = {
        id: key,
        coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    });

    context.commit('setRequests', requests);
  },
};
