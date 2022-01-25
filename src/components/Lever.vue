<template>
  <div style="position: relative">
    <div
      :class="`lever-main ${
        fallSide === 'user' ? 'user-fall' : fallSide === 'pc' ? 'pc-fall' : ''
      }`"
    >
      <div class="lever-box" v-for="column in leverLength / 2" :key="column">
        <div v-if="userBlock.column === column && userBlock.row > gameArea.row">
          <user-block :weight="userBlock.weight" />
        </div>
      </div>
      <div
        class="lever-box"
        v-for="column in leverLength / 2"
        :key="column + leverLength / 2"
      >
        <div v-if="pcBlock.column === column">
          <pc-block :weight="pcBlock.weight" />
        </div>
      </div>
    </div>
    <div class="divider">
      <i class="nes-icon is-large star"></i>
    </div>
  </div>
</template>

<script>
import { LEVER_LENGTH, GAME_AREA } from '../constants/constants';
import PCBlock from './PCBlock.vue';
import UserBlock from './UserBlock.vue';

export default {
  name: 'Lever',
  components: {
    'pc-block': PCBlock,
    'user-block': UserBlock,
  },
  props: {
    userBlock: Object,
    pcBlock: Object,
    fallSide: String,
  },
  data() {
    return {
      leverLength: LEVER_LENGTH,
      gameArea: GAME_AREA,
    };
  },
};
</script>

<style scoped>
.lever-main {
  display: flex;
}
.lever-box {
  width: 100px;
  height: 50px;
  /* border: 0.5px solid white; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.lever-box::after {
  content: '';
  display: block;
  position: absolute;
  bottom: -50px;
  width: 100px;
  height: 50px;
  background-color: blue;
  border: 0.5px solid white;
}
.divider {
  position: absolute;
  top: 62px;
  left: 370px;
}
.pc-block {
  background-color: #f7d51d;
  color: darkred;
  padding: 0.5rem;
}
.kg {
  font-size: 8px;
  color: black;
}
.user-fall {
  transform: rotate(-10deg);
}
.pc-fall {
  transform: rotate(10deg);
}
</style>
