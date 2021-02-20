<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { Popover } from "bootstrap";

export default {
  name: "Popover",
  props: {
    content: {
      required: false,
      default: ""
    },
    title: {
      required: false,
      default: ""
    },
    trigger: {
      default: "click"
    },
    delay: {
      default: 0
    },
    html: {
      default: false
    },
    placement: {
      default: "auto"
    }
  },
  mounted() {
    // pass bootstrap popover options from props
    var options = this.$props;
    var ele = this.$slots.default[0].elm;
    new Popover(ele, options);
  }
};
</script>
