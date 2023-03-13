<script setup lang="ts">
import { ref,reactive,defineComponent,onMounted,onUpdated } from "vue";
import BubbleChart from "@/components/BubbleChart.vue"
import NeedsDescription from "@/components/NeedsDescription.vue"
import {Config} from "@/components/Const"
import {useRoute} from "vue-router"
import axios from "axios"
import {useI18n} from "vue-i18n"

defineComponent({
	BubbleChart,
	NeedsDescription
})
const route = useRoute()
const token = route.params.token
const {t} = useI18n()
const chart_type = ref(null)
const needs = ref([0,0,0,0,0])
const chartData = reactive({
	labels:['','','','',''],
	data:[0,0,0,0,0],
	backgroundColor:['','','','','']
})
const bubble1 = ref()
let loaded = 0
const fillData = () => {
	axios.post("/api/bnt/get_result",{token:token})
	.then((res) => {
		console.log(res)
		needs.value = res.data
		chartData['labels'] = [
			t('word.needs_survival'),
			t('word.needs_love'),
			t('word.needs_power'),
			t('word.needs_freedom'),
			t('word.needs_fun')
		]
		chartData['data'] = res.data
		chartData['backgroundColor'] = Config.NEEDS_COLOR
	})
}
const style0 = () => { return Config.NEEDS_COLOR[0]}
const style1 = () => {return Config.NEEDS_COLOR[1]}
const style2 = () => {return Config.NEEDS_COLOR[2]}
const style3 = () => {return Config.NEEDS_COLOR[3]}
const style4 = () => {return Config.NEEDS_COLOR[4]}
onMounted(() => {
	fillData()
	loaded=1
})
</script>

<template><div id="bnt-body">
<bnt-locale-header @fill-data="fillData" />
<main class="py-4">
	<div class="container form-group"><div class="card">
		<div class="card-body text-center">
			<h1>{{t('word.result_title')}}</h1>
			<span class="result">RESULT</span><br />
			<br />
			{{t('sentence.send_email_message')}}<br />
			<br />
			<bubble-chart v-if="loaded" :chart-data="chartData" ref="bubble1" />
			<br />
			<div class="result_alert">
				{{t('sentence.result_alert')}}
			</div><br />
			<router-link :to="`/result2/${token}`" class="btn btn-graph">
				{{t('word.display_graph')}}
				<span class="fas fa-caret-right"></span>
			</router-link>
			<br /><br />
			<needs-description :needs-data="needs" />
		</div>
	</div></div>
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

