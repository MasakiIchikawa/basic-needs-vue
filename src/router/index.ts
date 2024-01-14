import { createRouter, createWebHistory } from 'vue-router'

import BntIndex from "../views/BntIndex.vue"
import BntQuestion from "../views/BntQuestion.vue"
import BntQuestionnaire from "../views/BntQuestionnaire.vue"
import BntEndMessage from "../views/BntEndMessage.vue"
import BntResult from "../views/BntResult.vue"
import BntResult2 from "../views/BntResult2.vue"
import BntResult3 from "../views/BntResult3.vue"
import AboutBasicNeeds from "../views/AboutBasicNeeds.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/',name:'index',component:BntIndex},
    {path:'/question',name:'bnt.question',component:BntQuestion},
    {path:'/questionnaire',name:'bnt.questionnaire',component:BntQuestionnaire},
    {path:'/end_message',name:'bnt.end_message',component:BntEndMessage},
    {path:'/result/:token',name:'bnt.result/:token',component:BntResult},
    {path:'/result/',name:'bnt.result',component:BntResult},
    {path:'/result2/:token',name:'bnt.result2/:token',component:BntResult2},
    {path:'/result3/:token',name:'bnt.result3/:token',component:BntResult3},
    {path:'/about_basic_needs',name:'bnt.about_basic_needs',component:AboutBasicNeeds},
  ]
})
export default router
