<template>
    <section class="bg-[#d3d3d3] bg-no-repeat bg-cover h-screen flex justify-between px-[15rem]  pt-[10rem] overflow-hidden">
        <Toaster richColors position="top-center" />
        <div class="w-[50%]">
            <h1 class="text-6xl font-[900]">Los usuarios son el eslabón más débil y la principal vulnerabilidad</h1>
            <p class="w-full text-3xl font-[300] leading-12 mt-5">El 39% de filtraciones de información es debida a la pérdida del dispositivo móvil en el área de trabajo y el 34% en un vehículo (Verizon Data Breach Report).</p>
            <hr class="my-7">
            <p class="w-full text-3xl font-[300] leading-12 mt-3">Las empresas necesitan aproximadamente 191 días para detectar una filtración de datos y además necesitan 66 días para contenerla (Cost of Data Breach Study - Ponemon Institute for IBM Security).</p>
            <hr class="my-7">
            <p class="w-full text-3xl font-[300] leading-12 mt-3">1 de cada 3 personas abre emails de phishing, mientras que 1 de cada 5 abre archivos adjuntos maliciosos (Verizon Data Breach Report).</p>
            
        </div>
        <form @submit.prevent="registerUser" class="p-12 flex flex-col items-center justify-center w-1/4 h-[50vh] bg-white rounded-md gap-10 shadow-md animate__animated animate__backInRight">
            <h2 class="text-5xl font-[900]">Regístrate</h2>
            <p class="text-xl">Crea una cuenta para entrar 😎</p>
            <input type="email" name="" v-model="email" placeholder="Email" class="p-3 rounded-md outline-none text-xl text-center border-none bg-[#001d3cc4] text-white w-full">
            <input type="password" name="" v-model="password" placeholder="Password" class="p-3 rounded-md outline-none text-xl text-center border-none bg-[#001d3cc4] text-white w-full">
            <p class="text-xl">¿Ya tienes cuenta? <router-link class="text-blue-400" to="/">Inicia sesión</router-link></p>
            <button type="submit" class="bg-black text-white hover:bg-[#00727ec4] p-3 rounded w-1/3 text-xl cursor-pointer transition delay-100 duration-200 ease-in-out hover:scale-105 ">Registrarse</button>
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
  