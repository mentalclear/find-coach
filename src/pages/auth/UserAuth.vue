<template>
  <div>
    <BaseDialog
      :show="!!error"
      title="An error occured..."
      @close="handleError"
    >
      {{ error }}
    </BaseDialog>
    <BaseDialog
      :show="isLoading"
      title="Authenticating..."
      fixed
    >
      <BaseSpinner />
    </BaseDialog>
    <BaseCard>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail
            <input
              id="email"
              v-model.trim="email"
              type="email"
            >
          </label>
        </div>
        <div class="form-control">
          <label for="password">Password
            <input
              id="password"
              v-model.trim="password"
              type="password"
            >
          </label>
        </div>
        <p v-if="!formIsValid">
          Please enter correct email and password. Pasword must be at least 6 char long!
        </p>
        <BaseButton>{{ submitButtonCaption }}</BaseButton>
        <BaseButton
          type="button"
          mode="flat"
          @click="switchAuthMode"
        >
          {{ switchModeButtonCaption }}
        </BaseButton>
      </form>
    </BaseCard>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Log In';
      }
      return 'Sign Up';
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Sign Up';
      }
      return 'Log In';
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false;
      }
      this.isLoading = true;
      try {
        const signUpPayload = {
          email: this.email,
          password: this.password,
        };
        if (this.mode === 'login') {
          await this.$store.dispatch('login', signUpPayload);
        } else {
          await this.$store.dispatch('signup', signUpPayload);
        }
      } catch (error) {
        this.error = error.message || 'Somethign went wrong signing up';
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

</style>
