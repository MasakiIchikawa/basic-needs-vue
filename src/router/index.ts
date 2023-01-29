import { createRouter, createWebHistory } from 'vue-router'

import BntIndex from "../views/BntIndex.vue"
import BntQuestion from "../views/BntQuestion.vue";
/*
import BntQuestionnaire from "../views/BntQuestionnaire.vue";
import BntEndMessage from "../views/BntEndMessage.vue";
import BntResult from "../views/BntResult.vue";
import BntResult2 from "../views/BntResult2.vue";
*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/',name:'index',component:BntIndex},
    {path:'/question',name:'bnt.question',component:BntQuestion},
    /*
    {path:Config.ROOT_PATH+'questionnaire',name:'bnt.questionnaire',component:BntQuestionnaire},
    {path:Config.ROOT_PATH+'end_message',name:'bnt.end_message',component:BntEndMessage},
    {path:Config.ROOT_PATH+'result/:token',name:'bnt.result',component:BntResult},
    {path:Config.ROOT_PATH+'result2/:token',name:'bnt.result2',component:BntResult2},
    {path:Config.ROOT_PATH+'result2/:chart_type/:token',name:'bnt.result2',component:BntResult2},
    */
  ]
})
export default router
