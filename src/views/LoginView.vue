<template>
    <section class="bg-[#d3d3d3] bg-no-repeat bg-cover h-screen flex justify-between px-[15rem]  pt-[10rem] overflow-hidden">
        <div class="w-[50%]">
            <h1 class="text-6xl font-[900]">BIENVENIDO A CIPHER</h1>
            <p class="w-full text-3xl font-[300] leading-12 mt-3">Proteger nuestras cuentas es crucial por varias razones. En primer lugar, almacenan información personal y confidencial, como datos personales, bancarios, correos electrónicos, conversaciones privadas, fotos, vídeos, teléfonos, etc. Si alguien accediera a ellas, podría utilizar esta información, por ejemplo, para cometer fraudes en nuestro nombre o robar nuestra identidad.</p>
        </div>
        <Toaster richColors position="top-center" />
        <form @submit.prevent="loginUser" class="p-12 flex flex-col items-center justify-center w-1/4 h-[50vh] bg-white rounded-md gap-10 shadow-md animate__animated animate__backInRight">
            <h2 class="text-5xl font-[900]">Iniciar Sesión</h2>
            <p class="text-xl">Accede y gestiona tus contraseñas 🔏</p>
            <input type="email" name="" v-model="email" placeholder="Email" class="p-3 rounded-md outline-none text-xl text-center border-none bg-[#001d3cc4] text-white w-full">
            <input type="password" name="" v-model="password" placeholder="Password" class="p-3 rounded-md outline-none text-xl text-center border-none bg-[#001d3cc4] text-white w-full">
            <p class="text-xl">¿No tienes cuenta? <router-link class="text-blue-400" to="/register">Regístrate</router-link></p>
            <button type="submit" class="bg-black text-white hover:bg-[#00727ec4] p-3 rounded w-1/3 text-xl cursor-pointer transition delay-100 duration-200 ease-in-out hover:scale-105 ">Acceder</button>
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
  