<script setup lang="ts">
import { defineComponent,reactive } from 'vue';
import {Bar} from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

defineComponent({ Bar })
//defineProps(['chartData'])

const chartData=reactive({
    labels: [ 'January', 'February', 'March' ],
    datasets: [ { data: [40, 20, 12] } ]
})
const options = reactive({
  responsive:true,
  responsiveAnimationDuration:0,
  maintainAspectRatio:true,
  layout:{padding:0},
  legend:{display:false},
  scales:{
    xAxes:[{
      ticks:{min:0,max:5,stepSize:1}
    }]
  }
})
</script>

<template>
  <Bar
    id="my-chart-id"
    :options="options"
    :data="chartData"
  />
</template>
