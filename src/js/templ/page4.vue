<style lang="sass" scoped >
$color: #ffcc33;
.exp{
  background-color: $color;
 }
</style>

<template lang="jade">

  div(v-for="content in msg" class="exp" ) {{ content }} {{ item }}

</template>

<script lang="babel">
export default {
  props: ['item']
  ,
  data () {
    return {
      msg: ["4","4","4"]
    }
  },
  update: {

  }
}
</script>
