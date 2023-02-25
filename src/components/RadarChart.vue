<script setup lang="ts">
import { defineComponent,defineExpose,reactive,onUpdated,onMounted } from 'vue';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'
import {Config} from '../components/Const.vue'
import {useI18n} from "vue-i18n"
import { ref } from 'vue';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

defineComponent({Radar})
const {t} = useI18n()
const radarChart = ref()
const props = defineProps<{
  needsData:number[],
}>()
const data = ref<ChartData<'radar'>>({
  datasets: []
})
const createData = () => ({
	labels: [
		t('word.needs_survival'),
		t('word.needs_love'),
		t('word.needs_power'),
		t('word.needs_freedom'),
		t('word.needs_fun')
	],
	datasets: [
		{
			backgroundColor:'rgba(0, 0, 0, 0)',
			borderColor:'rgb(54,162,235)',
			pointBackgroundColor: 'rgba(54,162,235,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(179,181,198,1)',
			pointRadius:10,
			data:props.needsData
		}
	]
})
const options = reactive({
	responsive:true,
	responsiveAnimationDuration:0,
	maintainAspectRatio:true,
	layout:{padding:0},
	legend:{display:false},
  scales: {
      r: {
          suggestedMin: 0,
          suggestedMax: 5
      }
  },
  scale:{
		pointLabels:{fontSize:16},
		angleLines:{display:true},
		ticks:{stepSize:1}
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
  <Radar :data="data" :options="options" />
</template>

