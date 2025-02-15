<template>
  <section class="bg-[#eeeeee] bg-no-repeat bg-cover h-screen flex justify-between px-[15rem]  pt-[10rem] overflow-hidden">
    <div class="w-[50%]">
      <h1 class="text-6xl font-[900]">TUS CONTRASEÑAS SEGURAS</h1>
      <p class="w-full text-3xl font-[300] leading-12 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore totam voluptatem facilis illo delectus soluta molestiae quaerat ipsum consectetur, accusamus quisquam sit veniam vero qui accusantium, laboriosam mollitia necessitatibus.</p>
      <button @click="showFormNewPassword" class="bg-black text-white hover:bg-[#00727ec4] p-3 rounded w-1/5 text-md cursor-pointer transition delay-100 duration-200 ease-in-out hover:scale-105 ">Añadir contraseña</button>
      <div v-if="showForm" class="">
        <form @submit.prevent="addNewPassword">
          <div class="">
            <label for="password">Servicio</label>
            <input type="text" v-model="nameService" placeholder="Escribe el nombre del servicio">
          </div>
          <div class="">
            <label for="password">Contraseña</label>
            <input type="text" v-model="passwordService" placeholder="Escribe la contraseña">
          </div>
          <button type="submit" class="bg-black text-white hover:bg-[#00727ec4] p-3 rounded w-1/3 text-xl cursor-pointer transition delay-100 duration-200 ease-in-out hover:scale-105 ">Añadir</button>
        </form>
        <button @click="logout" class="bg-black text-white hover:bg-[#00727ec4] p-3 rounded w-1/3 text-xl cursor-pointer transition delay-100 duration-200 ease-in-out hover:scale-105 ">Cerrar sesión</button>
      </div>
    </div>
    <div class="w-[50%] p-5 flex content-start flex-wrap gap-2">
      <div class="p-5 w-[30%] h-30 flex flex-col justify-center bg-white shadow-md rounded-md cursor-pointer" v-for="(password, index) in passwords" :key="index">
        <h3 class="font-bold text-xl ">{{ password.service }}</h3>
        <p>{{ "*".repeat(password.password.length)  }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import {signOut} from 'firebase/auth'
import {auth} from '@/db/firebase'
import {mapActions, mapState} from 'vuex'
export default {
  data(){
    return{
      nameService: '',
      passwordService: '',
      showForm: false
    }
  },
  computed:{
    ...mapState(['passwords'])
  },
  methods:{
    ...mapActions(['addPassword', 'getPasswords']),
    addNewPassword(){
      this.addPassword({service:this.nameService, password: this.passwordService})
    },
    async logout(){
      try {
        await signOut(auth)
      } catch (error) {
        console.log(error.message);
      }
    },
    showFormNewPassword(){
      this.showForm = !this.showForm
    }
  },
  mounted(){
    this.getPasswords()  
  }
}
</script>
