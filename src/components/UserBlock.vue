<template>
  <div class="user-block">
    <span>{{ weight }}</span>
    <span class="kg">kg</span>
  </div>
</template>

<script>
export default {
  name: 'UserBlock',
  props: {
    weight: Number,
  }
};
</script>

<style scoped>
.user-block {
  background-color: #209CEE;
  padding: 0.5rem;
}
.kg {
  font-size: 8px;
  color: black;
}
</style>