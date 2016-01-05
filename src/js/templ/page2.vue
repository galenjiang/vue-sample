<style lang="sass" scoped >
$color: #f0f;
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
      msg: ['1','2','3']
    }
  },
  update: {

  }
}
</script>
