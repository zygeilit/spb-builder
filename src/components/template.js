
<template>
  {{ #slots }}
  <slot name="{{ name }}"></slot>
  {{ /slots }}
</template>

<script>
  export default {
    name: '{ type }',

    props: {
      {{ #props }}
      '{{ name }}': {
        'type': '{{ type }}',
        'default': {{ default }}
      }
      {{ /props }}
    },

    mounted () {
      {{ #events }}
      {{ #triggerOn.mountd }}
      this.$emit('{{type}}')
      {{ /triggerOn.mountd }}
      {{ /events }}
    },

    methods: {
      {{ #events }}
      {{type}}Handler (e) {
        this.$emit('{{type}}', {
          {{ #arguments }}
          '{{ name }}': {{ default }},
          {{ /arguments}}
        })
      },
      {{ /events }}
    }
  }
</script>
