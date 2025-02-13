<template>
  <section>
    <div class="">
      <h1>TUS CONTRASEÑAS SEGURAS</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore totam voluptatem facilis illo delectus soluta molestiae quaerat ipsum consectetur, accusamus quisquam sit veniam vero qui accusantium, laboriosam mollitia necessitatibus.</p>
      <button @click="addPassword">Añadir contraseña</button>
      <div class="">
        <form @submit.prevent="addNewPassword">
          <div class="">
            <label for="password">Servicio</label>
            <input type="text" v-model="nameService" placeholder="Escribe el nombre del servicio">
          </div>
          <div class="">
            <label for="password">Contraseña</label>
            <input type="text" v-model="passwordService" placeholder="Escribe la contraseña">
          </div>
          <button type="submit">Añadir</button>
        </form>
        <button @click="logout">Cerrar sesión</button>
      </div>
    </div>
    <div class="">
      <div class="border p-5 " v-for="(password, index) in passwords" :key="index">
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
    }
  },
  mounted(){
    this.getPasswords()  
  }
}
</script>
