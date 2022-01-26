<template>
  <div class="navbar-container">
    <div class="navbar-main">

      <div class="nav-item">
        <span class="brand-the nes-text is-error">the</span>
        <span class="brand-lever nes-text is-error">LEVER</span>
      </div>

      <div class="nav-item">
        Score: <span class="nes-text is-success">{{ score }}</span>
      </div>
      
      <div class="nav-end">
        <a
          href="https://nostalgic-css.github.io/NES.css/"
          target="_blank"
          class="nes-badge"
        >
          <span class="is-primary">NES.css</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    score() {
      return this.$store.state.score;
    }
  }
};
</script>

<style scoped>
.navbar-container {
  /* margin: -1.5rem -2rem; */
  border-bottom: 1px solid #e76e55;
  padding-bottom: 1rem;
}
.navbar-main {
  display: flex;
  align-items: center;
  width: 100%;
  /* padding: 1.5rem 2rem; */
}
.nav-item {
  flex-grow: 1;
}
.nav-end {
  margin-left: auto;
}
.brand-the {
  display: inline-block;
  transform: translateY(-16px);
  font-size: 8px;
}
.brand-lever {
  font-size: 24px;
}
</style>
