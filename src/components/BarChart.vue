<script setup lang="ts">
import { defineComponent,reactive,onUpdated,onMounted } from 'vue';
import {Bar} from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title, 
  Tooltip, 
  Legend, 
  BarElement, 
  CategoryScale, 
  LinearScale,
} from 'chart.js'
import type {ChartData} from 'chart.js'
import {Config} from '../components/Const.vue'
import {useI18n} from "vue-i18n"
import { ref } from 'vue';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

defineComponent({ Bar })
const {t} = useI18n()
const props = defineProps<{
  needsData:number[],
  needsLabel:string[],
}>()
const data = ref<ChartData<'bar'>>({
  datasets: []
})
const createData=()=>({
    labels:[
      props.needsLabel[0],
      props.needsLabel[1],
      props.needsLabel[2],
      props.needsLabel[3],
      props.needsLabel[4]
    ],
    datasets: [ {
      data:[
        props.needsData[0],
        props.needsData[1],
        props.needsData[2],
        props.needsData[3],
        props.needsData[4]
      ],
			backgroundColor:Config.NEEDS_COLOR
    } ]
})
const options = reactive({
  responsive:true,
  responsiveAnimationDuration:0,
  maintainAspectRatio:true,
  scales:{
    y:{min:0,max:5}
  },
  plugins:{
    legend:false
  }
})
onMounted(()=>{
  data.value = createData()
})
onUpdated(()=>{
  data.value = createData()
})
</script>

<template>
  <span class="hidden">{{ props.needsData[0] }}</span>
  <Bar
    id="my-chart-id"
    :options="options"
    :data="data"
  />{{ props.needsLabel[0] }}
</template>
<style scoped>
.hidden{
  font-size:1px;
  opacity: 0;
}
</style>
