<template>
  <div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      list:[]
    }
  },
  onLoad (option){
    console.log(option.type)
    this.list = require('@/data/' + option.type + '.json')
    console.log(this.list)
  },
  methods: {
  },

  created () {
  }
}
</script>

<style scoped>
</style>