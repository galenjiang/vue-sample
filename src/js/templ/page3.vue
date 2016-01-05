<style lang="sass" scoped >
$color: #33ff99;
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
      msg: ["3","3","3"]
    }
  },
  update: {

  }
}
</script>
