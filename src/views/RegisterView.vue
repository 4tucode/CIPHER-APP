<template>
    <section>
        <Toaster richColors position="top-center" />
        <form @submit.prevent="registerUser">
            <input type="email" name="" v-model="email" placeholder="Email">
            <input type="password" name="" v-model="password" placeholder="Password">
            <button type="submit">Registrarse</button>
        </form>
    </section>
  </template>
  
  <script>
  import {mapActions, mapState} from 'vuex'
  import { Toaster, toast } from 'vue-sonner'
  export default {
    components:{Toaster},
        data(){
          return{
            email:'',
            password: ''
          }
        },
        computed:{
            ...mapState(['loginState'])
        },
        methods:{
            ...mapActions(['register']),
            registerUser(){
                // llamar a la accion
                this.register({email:this.email, password: this.password})
                setTimeout( ()=> {
                    if(this.loginState){
                    toast.success("Usuario registrado con éxito!😍")
                    setTimeout( ()=> {
                        this.$router.push({name:'passwords'})
                    }, 1000)
                    }else{
                        toast.error("Error al registrar usuario!👀")
                    }
                }, 1000)
            }
        }
  }
  </script>
  