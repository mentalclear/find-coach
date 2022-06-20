<template>
  <BaseCard>
    <h2> Find Your Coach</h2>
    <span class="filter-option">
      <label for="frontend">
        <input
          id="frontend"
          type="checkbox"
          checked
          @change="setFilter"
        >
        Frontend
      </label>
    </span>
    <span class="filter-option">
      <label for="backend">
        <input
          id="backend"
          type="checkbox"
          checked
          @change="setFilter"
        >
        Backend
      </label>
    </span>
    <span class="filter-option">
      <label for="career">
        <input
          id="career"
          type="checkbox"
          checked
          @change="setFilter"
        >
        Carrer
      </label>
    </span>
  </BaseCard>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
