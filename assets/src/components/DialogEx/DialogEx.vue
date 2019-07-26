<template>
    <div id="dialog_ex">
      Dialog
    </div>
</template>

<script>
    export default {
        name: "dialog",
        data() {
            return {}
        }
    }
</script>

<style scoped>
#dialog_ex{
  position: fixed;
  width: 500px;
  height: 500px;
  letf:0;
  top:0;
  z-index: 10000;
  background-color: #00000050;
}
</style>
