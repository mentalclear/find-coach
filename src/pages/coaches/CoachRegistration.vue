<template>
  <section>
    <BaseCard>
      <h2>Register as a coach now!</h2>
      <CoachForm @save-data="saveData" />
    </BaseCard>
  </section>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm.vue';

export default {
  components: { CoachForm },

  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      // Redirect to here after saving form data.
      // replace() disallow surf back to form instead of push().
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style>
</style>
