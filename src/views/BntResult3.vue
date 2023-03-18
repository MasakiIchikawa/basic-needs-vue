<script setup lang="ts">
import {useRoute} from "vue-router"
import axios from "axios"
import {useI18n} from "vue-i18n"
import RadarChart from "../components/RadarChart.vue";
import NeedsDescription from "@/components/NeedsDescription.vue"
import {onMounted,onUpdated,defineComponent,ref,reactive } from "vue"
import {Config} from '../components/Const'

defineComponent({
	RadarChart,
	NeedsDescription
})
const route = useRoute()
const {t} = useI18n()
const token = route.params.token
const needsData = reactive([0,0,0,0,0])
const chart_type = ref('')
const radarChart = ref()

const fillData= () => {
	axios.post(Config.API_URL+"/get_result",{token:token})
	.then((res) => {
		console.log(res)
		needsData[0] = res.data[0]
		needsData[1] = res.data[1]
		needsData[2] = res.data[2]
		needsData[3] = res.data[3]
		needsData[4] = res.data[4]
		chart_type.value = route.params.chart_type as string
		radarChart.value.updateChart()
	})
}
onMounted(()=>{
	fillData()
})
onUpdated(()=>{
	radarChart.value.updateChart()
})
const style0 = () => {return {'--bgcolor':Config.NEEDS_COLOR[0]};}
const style1 = () => {return {'--bgcolor':Config.NEEDS_COLOR[1]};}
const style2 = () => {return {'--bgcolor':Config.NEEDS_COLOR[2]};}
const style3 = () => {return {'--bgcolor':Config.NEEDS_COLOR[3]};}
const style4 = () => {return {'--bgcolor':Config.NEEDS_COLOR[4]};}
</script>

<template><div id="bnt-body">
<bnt-locale-header @fill-data="fillData" />
<main class="py-4">
	<div class="container form-group">
	<div class="card">
		<div class="card-body text-center">
			<h1>{{t('word.result_title')}}</h1>
			<span class="result">RESULT</span><br />
			<br />
			<div class="text-right">
				<radar-chart ref="radarChart" :needsData="needsData" />
				<router-link :to="`/result2/${token}`" class="btn btn-primary">{{t('word.display_bar')}}</router-link>
			</div><br />

			<div class="result_alert">
				{{t('sentence.result_alert')}}
			</div><br />
			<router-link :to="`/result2/${token}`" class="btn btn-graph">
				{{t('word.display_graph')}}
				<span class="fas fa-caret-right"></span>
			</router-link>
			<br /><br />
			<needs-description :needs-data="needsData" />
		</div>
	</div>
	</div>
</main>
<bnt-footer />
</div></template>

<style scoped>
h1{
	font-size:4em;
}
.result{
	background: #ffa89e;
    color: white;
    border-radius: 5px;
    padding: 3px 10px;
    letter-spacing: 3px;
}
.need{
	background-color:var(--bgcolor);
}
.card{
	white-space:pre-line;
}
.result_alert{
	color:#ff8075;
}
.btn-graph{
	background-color: white;
    color: #ffa89e;
    padding: 15px 60px 15px 40px;
    border-radius: 30px;
    font-weight: 600;
}
.fa-caret-right{
	position: absolute;
    right: 20px;
    top: 35%;
}
@media (max-width:768px){
	h1{
		font-size:10vw;
	}
	.result_alert{
		font-size:3vw;
	}
}
</style>
