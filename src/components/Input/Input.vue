<template>
  <div class="md:w-1/2 px-3">
    <label :class="[hasError ? 'text-red-darker' : 'text-grey-darker']"
           class="block tracking-wide text-sm font-bold mb-2" >
      {{ label }}
    </label>
    <input
      :class="inputClass"
      :value="model"
      :type="type"
      :placeholder="placeholder"
      @input="onInput"
      @focus="onFocus">
  </div>
</template>
<script>
const TYPES = [
  'text',
  'password',
  'email',
  'number',
  'url',
  'tel',
  'search',
  'range',
  'color',
  'date',
  'time',
  'datetime',
  'datetime-local',
  'month',
  'week',
];

export default {
  name: 'RamroInput',
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator: type => TYPES.includes(type),
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false,
    },
    autocomplete: {
      type: String,
      default: null,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    label: String,
    placeholder: String,
    readOnly: [Boolean, String],
  },
  data() {
    return {
    };
  },
  computed: {
    model: {
      get() { return this.value; },
      set(value) { this.$emit('input', value); },
    },
    inputClass() {
      const classes = [
        'transition',
        'appearance-none',
        'block',
        'w-full',
        'border border-transparent',
        'text-grey-darker',
        'focus:outline-none',
        'border border-grey-light rounded py-3 px-3',
      ];
      if (this.hasError) {
        return classes.concat([
          'focus:bg-grey-lightest',
          'border-red',
        ]);
      }

      return classes.concat([
        'focus:bg-grey-lightest',
        'focus:border-primary-light',
      ]);
    },
  },
  methods: {
    onInput(e) {
      if (this.type === 'number') {
        this.model = Number(e.target.value);
      } else {
        this.model = e.target.value;
      }
    },
    onFocus() {
      this.$emit('focus');
    },
  },
};
</script>
