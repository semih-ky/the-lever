<template>
  <div style="position: relative;">
    <button
      v-if="!isStart"
      @click="startGame"
      type="button"
      class="nes-btn is-success start-button"
    >
      Start!
    </button>
    <div class="container">
      <div class="lever-area">
        <div class="col" v-for="column in gameArea.column" :key="column">
          <div class="row" v-for="row in gameArea.row" :key="row">
            <div v-if="userBlock.row === row && userBlock.column === column">
              <user-block :weight="userBlock.weight" />
            </div>
          </div>
        </div>
      </div>
      <Lever :userBlock="userBlock" :pcBlock="pcBlock" :fallSide="fallSide" />
    </div>
    <section>
      <dialog class="nes-dialog is-dark is-rounded" :id="dialogId">
        <form method="dialog">
          <p class="nes-text is-error">Game Over!</p>
          <menu class="dialog-menu">
            <button @click="cancelHandler" class="nes-btn is-default">
              Cancel
            </button>
            <button @click="restart" class="nes-btn is-primary">Restart</button>
          </menu>
        </form>
      </dialog>
    </section>
  </div>
</template>

<script>
import Lever from './Lever.vue';
import UserBlock from './UserBlock.vue';
import { GAME_AREA, LEVER_LENGTH } from '../constants/constants';
import { checkWin, randomizeBlocks } from '../utils/util';
export default {
  name: 'GameArea',
  components: {
    Lever,
    'user-block': UserBlock,
  },
  data() {
    return {
      isStart: false,
      gameArea: GAME_AREA,
      leverLength: LEVER_LENGTH,
      userBlock: {
        row: 0,
        column: 1,
        weight: 0,
      },
      pcBlock: {
        column: 0,
        weight: 0,
      },
      intervalID: null,
      fallSide: '',
      isWin: false,
      dialogId: 'dialog-dark-rounded',
      windowEventHandler: (e) => {
        switch (e.code) {
          case 'ArrowRight':
            if (this.userBlock.column === this.leverLength / 2) break;
            this.$set(this.userBlock, 'column', this.userBlock.column + 1);
            break;
          case 'ArrowLeft':
            if (this.userBlock.column === 1) break;
            this.$set(this.userBlock, 'column', this.userBlock.column - 1);
            break;
          default:
            return;
        }
      },
    };
  },
  methods: {
    startGame() {
      if (!this.isStart) {
        this.$store.commit('reset');
      }
      this.isStart = true;
      this.userBlock = { row: 0, column: 1, weight: 0 };
      this.fallSide = '';
      const { pcBlock, userBlock } = randomizeBlocks();
      this.$set(this.pcBlock, 'weight', pcBlock.pcWeight);
      this.$set(this.pcBlock, 'column', pcBlock.pcColumn);

      this.$set(this.userBlock, 'weight', userBlock.userWeight);

      let interval = setInterval(() => {
        let newValue = this.userBlock.row + 1;
        this.$set(this.userBlock, 'row', newValue);
      }, 750);

      this.intervalID = interval;

      window.addEventListener('keydown', this.windowEventHandler);
    },
    restart() {
      this.$store.commit('reset');
      this.startGame();
    },
    cancelHandler() {
      this.isStart = false;
    },
  },
  watch: {
    userBlock: {
      handler: function (val) {
        if (val.row > this.gameArea.row + 1) {
          clearInterval(this.intervalID);
          window.removeEventListener('keydown', this.windowEventHandler);
          const { isWin, fallSide } = checkWin(this.userBlock, this.pcBlock);
          console.log(isWin, fallSide);
          this.fallSide = fallSide;
          if (fallSide) {
            document.getElementById(this.dialogId).showModal();
          }
          if (isWin) {
            this.$store.commit('increment');
            this.startGame();
          }
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lever-area {
  display: flex;
}
.col {
  display: flex;
  flex-direction: column;
}
.row {
  width: 100px;
  height: 50px;
  /* border: 1px solid #e76e55; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-block {
  background-color: #209cee;
  padding: 0.5rem;
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
.start-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-60px);
}
</style>
