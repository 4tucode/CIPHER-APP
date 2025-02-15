import { createStore } from 'vuex'
import { auth } from '@/db/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {db} from '@/db/firebase'
import {doc, setDoc, getDoc} from 'firebase/firestore'
export default createStore({
  state: {
    user: {
      user: null
    },
    paswords:[],
    loginState: false
  },
  getters: {
  },
  mutations: {
    SET_LOGIN_STATE(state, st){
      state.loginState = st
    },
    SET_USER_DATA(state, user){
      state.user = user
    }
  },
  actions: {
    async register({commit}, data){
      try {
        const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password)
        commit('SET_USER_DATA', userCredentials.user)
        commit('SET_LOGIN_STATE', true)
      } catch (error) {
        commit('SET_LOGIN_STATE', false)
        console.error(error.message); 
      }
    },
    async login({commit}, data){
      try {
        const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password)
        commit('SET_USER_DATA', userCredentials.user)
        commit('SET_LOGIN_STATE', true)
      } catch (error) {
        commit('SET_LOGIN_STATE', false)
        console.error(error.message); 
      }
    },
    async addPassword({state}, newPassword){
      if (!state.user) return
      console.log(state.passwords);
      
      try {      
        state.passwords.push(newPassword)  
        let newPasswords = {
          passwords: state.passwords
        }
        const docRef = doc ( db, "users", state.user.uid )
        await setDoc(docRef, newPasswords)
      } catch (error) {
        console.log("Problemas", error.message)
      }
    },
    async getPasswords({state}){
      if (!state.user) return
      try {
        const docRef = doc ( db, "users", state.user.uid )
        const docSnap = await getDoc(docRef)
        // si no encuentro al usuario en la tabla de la base de datos
        if(docSnap.data() == undefined){
          state.passwords = [] // devuelvo un array vacío
        }else{
          if(docSnap.exists){
            state.passwords = docSnap.data().passwords
          }else{
            console.log("Problemas",);
          }
        } 
      } catch (error) {
        console.log(error.message);
      }
    }
  },
})
