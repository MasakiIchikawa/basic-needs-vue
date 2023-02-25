<script setup lang="ts">
import { defineComponent,defineExpose,reactive,onUpdated,onMounted } from 'vue';
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
}>()
const data = ref<ChartData<'bar'>>({
  datasets: []
})
const createData=()=>({
    labels:[
      t('word.needs_survival'),
      t('word.needs_love'),
      t('word.needs_power'),
      t('word.needs_freedom'),
      t('word.needs_fun')
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
const updateChart = () => {
  data.value = createData()
}
defineExpose({
  updateChart
})
</script>

<template>
  <Bar
    id="my-chart-id"
    :options="options"
    :data="data"
  />
</template>
