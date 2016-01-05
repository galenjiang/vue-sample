<style lang="sass" scoped >
$color: #f00;
.exp{
  background-color: $color;
 }
</style>

<template lang="jade">

  div(v-for="item in msg" class="exp" ) {{ item }}
  span {{ parentData }}
</template>

<script lang="babel">
export default {
  props: ['parentData'],
  data () {
    return {
      msg: ['a','b','c']
    }
  },
  update: {
  }
}
</script>
