<template>
  <div>
    <section>
      <BaseCard>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </BaseCard>
    </section>
    <section>
      <BaseCard>
        <header>
          <h2>Interested? Reach out now!</h2>
          <!-- <BaseButton
          link
          :to="contactLink"
        >
          Contact
        </BaseButton> -->
          <RouterView />
        </header>
      </BaseCard>
    </section>
    <section>
      <BaseCard>
        <BaseBadge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        />
        <p>{{ description }}</p>
      </BaseCard>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
    },
    contactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches']
      .find((coach) => coach.id === this.id);
  },
};

</script>

<style>
</style>
