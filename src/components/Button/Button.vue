<template>
<button :class="[defaultClasses, getClasses]" @click="$emit('click')">
  <slot/>
</button>
</template>
<script>
export default {
  name: 'RamroButton',
  props: {
    type: {
      required: false,
      type: String,
    },
    variant: {
      required: false,
      type: String,
    },
  },
  data() {
    return {
      defaultClasses: [
        'appearance-none',
        'rounded',
        'block text-white text-sm shadow-border py-3 px-4 font-sans tracking-wide font-medium',
      ],
    };
  },
  computed: {
    getClasses() {
      if (this.variant === 'primary') {
        return 'bg-primary hover:bg-primary-dark text-white';
      }
      if (this.variant === 'success') {
        return 'bg-green hover:bg-green-dark text-white';
      }
      if (this.variant === 'danger') {
        return 'bg-red hover:bg-red-dark text-white';
      }
      return 'bg-grey-dark hover:bg-grey-darker text-grey-darkest';
    },
  },
};
</script>
