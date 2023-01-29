import { createApp } from 'vue'
import {createStore} from 'vuex'
import {createI18n} from 'vue-i18n'
import App from './App.vue'
import router from './router'

//import VueSession from "vue-session"
import {messages,dateTimeFormats,numberFormats} from "./vue_lang/index.js"
import Config from "./components/Const.vue";

import GuestMenu from "./components/GuestMenu.vue"
import ErrorMessage from "./components/ErrorMessage.vue"
import InfoMessage from "./components/InfoMessage.vue"

import BntLocaleHeader from "./components/BntLocaleHeader.vue"
import BntHeader from "./components/BntHeader.vue"
import BntFooter from "./components/BntFooter.vue"
import BntWaitModal from './views/BntWaitModal.vue'

const language = 
  (window.navigator.languages && window.navigator.languages[0]) ||
	window.navigator.language;

const i18n = createI18n({
  locale: language,
  fallbackLocale:'ja',
  allowComposition: true,
  messages: messages,
  dateTimeFormats:dateTimeFormats,
  numberFormats:numberFormats
})

const store = createStore({
  state:{
    lang:language
  },
  mutations:{
    setLang(state,value){
      state.lang = value
    }
  },
  actions:{},
  modules:{}
})

const app = createApp(App)

app.use(i18n)
app.use(store)
app.use(router)

app.component('guest-menu',GuestMenu)
app.component('error-message',ErrorMessage)
app.component('info-message',InfoMessage)
app.component('bnt-wait-modal',BntWaitModal)
app.component('bnt-locale-header',BntLocaleHeader)
app.component('bnt-header',BntHeader)
app.component('bnt-footer',BntFooter)

app.mount('#app')
