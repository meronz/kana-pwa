<template>
  <div class="">
    <div class="flex justify-items-stretch justify-between">
      <span class="mx-8 p-4">{{ `${t("play.score")}: ${score}` }}</span>

      <span class="mx-8 p-4">{{
        `${t("play.errors")}: ${totalErrorCount}`
      }}</span>
    </div>
    <div class="flex justify-center">
      <div class="flex-col text-gray-800 dark:text-gray-300">
        <div
          class="bg-white dark:bg-gray-600 h-24 w-24 p-4 mt-4 mx-auto rounded-3xl shadow-md text-center text-6xl"
        >
          <span>{{ shownChar }}</span>
        </div>
      </div>
    </div>
    <div class="flex flex-1 h-96 justify-center items-end">
      <!-- <div class=""> -->

      <div class="flex flex-wrap">
        <div
          v-for="(item, index) in suggestions"
          :key="index"
          class="w-1/2 flex justify-center"
        >
          <button
            class="w-24 my-2 p-2 rounded-3xl bg-white bg-opacity-30 hide-focused text-xl"
            v-on:click="textValue = item"
          >
            {{ item }}
          </button>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });
</script>

<script>
import { hiraganaToRomaji_Table, romajiToHiragana_Table } from "../charTable.js";

export default {
  data: () => {
    return {
      shownChar: "",
      suggestions: [],
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

    getSuggestions: function() {
      let suggestions = [];
      var keys = Object.keys(hiraganaToRomaji_Table);

      for (let i = 0; i < 5; i++) {
        const s = hiraganaToRomaji_Table[
          keys[Math.floor(keys.length * Math.random())]
        ];

        if(s == this.getRomaji()) {
          i--;
          continue;
        }

        suggestions.push(s);
      }

      suggestions.push(this.getRomaji());
      return this.shuffle(suggestions);
    },

    shuffle: function(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
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
      this.suggestions = this.getSuggestions();
    },

    error: function() {
      this.inputTextClass = "error-input";
      this.errorCount++;
      this.totalErrorCount++;
    }
  },

  mounted: function() {
    this.shownChar = this.getRandomHiragana();
    this.suggestions = this.getSuggestions();
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
