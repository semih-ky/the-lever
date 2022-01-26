<template>
  <Container>
    <Navbar />
    <GameArea />
  </Container>
</template>

<script>
import Container from './components/Container.vue'
import Navbar from './components/Navbar.vue'
import GameArea from './components/GameArea.vue'

export default {
  name: 'App',
  components: {
    Container,
    Navbar,
    GameArea
  }
}
</script>
