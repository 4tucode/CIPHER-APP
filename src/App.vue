<template>
  <router-view/>
</template>
<script>
// import {auth} from '@/db/firebase'
export default{
  // mounted(){
  //   auth.onAuthStateChanged( (user)=> {
  //     if(user){
  //       const rutaActual = this.$route.name
  //       if(rutaActual === "passwords"){
  //         this.$router.push({name: 'passwords'})
  //       } 
  //     }else{
  //       this.$router.push({name: 'login'})
  //     }
  //   })
  // }
}
</script>
<style>
*{
  font-family: "Nunito", serif;
}
</style>
