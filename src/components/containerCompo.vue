<template>
  <div>
    <postCompo/>
    <postCompo/>
    <postCompo/>
  </div>
</template>

<script>
import postCompo from './postCompo.vue'
export default {
    name:'containerCompo',
    components:{
        postCompo
    }
}
</script>

<style>
    div{
        background-color: bisque;
    }
</style>