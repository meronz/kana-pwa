<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-between px-3 my-3">
          <span class="score-text">Score: {{ score }}</span>
          <span class="score-text">Errors: {{ totalErrorCount }}</span>
        </div>
      </div>
      <div class="">
        <div class="row justify-content-center my-3">
          <div class="col-centered char-card">
            <span class="charbig">{{ shownChar }}</span>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-centered mt-3">
            <input
              v-model="textValue"
              type="text"
              :class="inputTextClass"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-centered mt-3">
            <popover
              v-if="showTooltip"
              :content="getRomaji()"
              trigger="hover"
              placement="bottom"
            >
              <button id="tooltip-popover" class="btn btn-light">?</button>
            </popover>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src import HelloWorld from "@/components/HelloWorld.vue";
import { hiraganaToRomaji_Table, romajiToHiragana_Table } from "@/charTable.js";
import popover from "@/components/bootstrap/Popover.vue";

export default {
  name: "Home",
  components: { popover },

  data: () => {
    return {
      shownChar: "",
      textValue: "",
      inputTextClass: "",
      score: 0,
      errorCount: 0,
      totalErrorCount: 0
    };
  },

  methods: {
    getRomaji: function() {
      return hiraganaToRomaji_Table[this.shownChar];
    },

    getRandomHiragana: function() {
      var keys = Object.keys(romajiToHiragana_Table);
      return romajiToHiragana_Table[
        keys[Math.floor(keys.length * Math.random())]
      ];
    },

    clearError: function() {
      this.inputTextClass = "";
    },

    nextChar: function() {
      this.score++;
      this.errorCount = 0;
      this.textValue = "";
      this.clearError();
      this.shownChar = this.getRandomHiragana();
    },

    error: function() {
      this.inputTextClass = "error-input";
      this.errorCount++;
      this.totalErrorCount++;
    }
  },

  mounted: function() {
    this.shownChar = this.getRandomHiragana();
  },

  watch: {
    textValue: function(val) {
      let romaji = hiraganaToRomaji_Table[this.shownChar];
      val = val.toUpperCase();
      if (val.length == romaji.length) {
        if (romaji === val) {
          this.nextChar();
        } else {
          this.error();
        }
      } else {
        this.clearError();
      }
    }
  },

  computed: {
    showTooltip: function() {
      return this.errorCount >= 3;
    }
  }
};
</script>

<style scoped>
.score-text {
  font-size: 1dp;
}

.charbig {
  font-size: 5em;
  line-height: 1;
}

input {
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.error-input {
  border: 2px solid rgba(255, 0, 0, 0.5);
}

.col-centered {
  flex: 0 0 0%;
}

.char-card {
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
  background: rgb(246, 252, 255);
}
</style>
