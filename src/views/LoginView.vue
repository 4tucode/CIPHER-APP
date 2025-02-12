<template>
    <section>
        <Toaster richColors position="top-center" />
        <form @submit.prevent="loginUser">
            <input type="email" name="" v-model="email" placeholder="Email">
            <input type="password" name="" v-model="password" placeholder="Password">
            <p>¿No tienes cuenta? <router-link to="/register">Regístrate</router-link></p>
            <button type="submit">Acceder</button>
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
            ...mapActions(['login']),
            loginUser(){
                // llamar a la accion
                this.login({email:this.email, password: this.password})
                setTimeout( ()=> {
                    if(this.loginState){
                    toast.success("Acceso concedido! ✌")
                    setTimeout( ()=> {
                        this.$router.push({name:'passwords'})
                    }, 1000)
                    }else{
                        toast.error("Acceso denegado!👀")
                    }
                }, 1000)
            }
        }
  }
  </script>
  