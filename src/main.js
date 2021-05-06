import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueFinalModal from 'vue-final-modal'
//import firebase from 'firebase'

// const config = {
//     apiKey: "AIzaSyCt12ZlwrbY0uhR8c-naoIKMrJ3gS7gOs8",
//     authDomain: "intern2021-app.firebaseapp.com",
//     projectId: "intern2021-app",
//     storageBucket: "intern2021-app.appspot.com",
//     messagingSenderId: "22286398275",
//     appId: "1:22286398275:web:55174b74372bbedef935f6",
//     measurementId: "G-T8VCPP7CF0",
//   };

// firebase.initializeApp(config)  


const Vue = createApp(App);



Vue.use(VueFinalModal())
Vue.use(store).use(router).mount('#app')
