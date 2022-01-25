<template>
  <div class="nes-container container is-dark">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style scoped>
.container {
  width: 99vw;
  height: 99vh;
}
</style>