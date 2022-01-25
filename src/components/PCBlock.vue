<template>
  <div class="pc-block">
    <span>{{weight}}</span>
    <span class="kg">kg</span>
  </div>
</template>

<script>
export default {
  name: 'PCBlock',
  props: {
    weight: Number,
  }
};
</script>

<style scoped>
.pc-block {
  background-color: #f7d51d;
  color: darkred;
  padding: 0.5rem;
}
.kg {
  font-size: 8px;
  color: black;
}
</style>