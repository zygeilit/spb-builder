
<template>
  <slot name="main"></slot>
  <slot name="right"></slot>
</template>

<script>
  export default {
    name: '{ type }',

    props: {
      'mainPadding': {
        'type': 'Number',
        'default': 15
      }
      'canFolding': {
        'type': 'Boolean',
        'default': true
      }
      'isClosed': {
        'type': 'Boolean',
        'default': false
      }
      'mainContainer': {
        'type': 'Object',
        'default': [object Object]
      }
    },

    mounted () {
      this.$emit('onFolding')
    },

    methods: {
      onFoldingHandler (e) {
        this.$emit('onFolding', {
          'isClosed': false,
        })
      },
    }
  }
</script>
