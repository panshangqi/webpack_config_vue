<template>
  <div id="about">
    <span v-if="seen">About</span>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'this is about ',
      seen: true
    }
  }
}
</script>
