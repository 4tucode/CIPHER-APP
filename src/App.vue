<template>
  <router-view/>
</template>
<script>
import {auth} from '@/db/firebase'
import {mapMutations} from 'vuex'
export default{
  methods:{
    ...mapMutations(['SET_USER_DATA']),
    asignarUsuario(){
      auth.onAuthStateChanged( (user)=> {
        if (user){
          this.SET_USER_DATA(user)
        }
      })
    }
  },
  mounted(){
    this.asignarUsuario()
  }
}
</script>
<style>
*{
  font-family: "Nunito", serif;
}
</style>
