<template>
  <Container>
    <Navbar @start-game="startGame" />
    <GameArea :isStart="isStart" @init-game="initGame" />
  </Container>
</template>

<script>
import Container from './components/Container.vue'
import Navbar from './components/Navbar.vue'
import GameArea from './components/GameArea.vue'

export default {
  name: 'App',
  data() {
    return {
      isStart: false,
    }
  },
  methods: {
    startGame() {
      if (!this.isStart) {
        this.isStart = true;
      }
    },
    initGame() {
      this.isStart = false;
    }
  },
  components: {
    Container,
    Navbar,
    GameArea
  }
}
</script>
