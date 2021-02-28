<template>
  <div>
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
        <div class="mt-4 lg:mt-16">
          <input
            class="bg-white dark:bg-gray-600 text-center rounded-3xl border border-transparent focus:outline-none focus:ring-0 focus:border-transparent"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            type="text"
            v-model="textValue"
          />
        </div>
        <div class="">
          <button
            v-if="showTooltip"
            class="has-tooltip mt-16 mx-auto text-xl text-center text-white border border-3 border-white rounded-full h-8 w-8 flex items-center justify-center focus:outline-none focus:ring-0"
          >
            <span
              class="tooltip text-gray-800 dark:text-gray-300 dark:text-white bg-white dark:bg-gray-600 p-3 -mb-24 rounded"
              >{{ getRomaji() }}</span
            >
            ?
          </button>
        </div>
      </div>
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
