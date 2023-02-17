<script setup lang="ts">
import {useRoute} from "vue-router"
import axios from "axios"
import {useI18n} from "vue-i18n"
//import RadarChart from "../components/RadarChart.vue";
import BarChart from "../components/BarChart.vue";
import { onMounted,defineComponent,ref,reactive } from "vue"
import {Config} from '../components/Const.vue'

defineComponent({BarChart})
const route = useRoute()
const {t} = useI18n()
const token = route.params.token
const needs = ref([null,null,null,null,null])
const chartData = reactive({
	labels:['','','','',''],
	datasets:[{}]
})
const chart_type = ref('')
const change_chart_url = ref('')
const needsLabel = [
	t('word.needs_survival'),
	t('word.needs_love'),
	t('word.needs_power'),
	t('word.needs_freedom'),
	t('word.needs_fun')
]

const fillData= () => {
	axios.post("/api/bnt/get_result",{token:token})
	.then((res) => {
		console.log(res);
		needs.value = res.data;
		chart_type.value = route.params.chart_type;
		if(chart_type.value == ''){
			if(Math.random() > 0.5){
				chart_type.value = 'radar';
			}
			else{
				chart_type.value = "bar";
			}
		}

		if(chart_type.value =='radar'){
			change_chart_url.value = "/api/bnt/result2/bar/"+token;
			chartData['labels'] = needsLabel,
			chartData['datasets'] = [{
						data:res.data,
						backgroundColor:'rgba(54,162,235,0.2)',
						borderColor:'rgb(54,162,235)'
			}]
		}
		else{
			change_chart_url.value = "/api/bnt/result2/radar/"+token;
			chartData['labels'] = needsLabel,
			chartData['datasets'] = [
				{
					data:res.data,
					borderColor:'#CFD8DC',
					fill:false,
					type:'line',
					lineTension:0
				},
				{
					data:res.data,
					backgroundColor:Config.NEEDS_COLOR
				}
			]
		}
	})
}
onMounted(()=>{
	fillData();
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
		<div class="card-header">{{$t('word.result_title')}}</div>
		<div class="card-body text-center">
			<div class="text-right" v-if="chart_type == 'radar'">
				<radar-chart :chart-data="chartData" />
				<a class="btn btn-primary" :href="change_chart_url">{{$t('word.display_bar')}}</a>
			</div>
			<div class="text-right" v-else>
				<bar-chart :chart-data="chartData" />
				<a class="btn btn-primary" :href="change_chart_url">{{$t('word.display_radar')}}</a>
			</div><br />

			<div class="border p-2 border-danger text-danger">
				{{$t('sentence.result_alert')}}
			</div><br />

			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-medkit need" :style="style0">
					{{needsLabel[0]}}&nbsp;:&nbsp;{{needs[0]}}
				</div>
				<div class="col-md-9 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need0')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-heart need" :style="style1">
					{{needsLabel[1]}}&nbsp;:&nbsp;{{needs[1]}}
				</div>
				<div class="col-md-9 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need1')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-medal need" :style="style2">
					{{needsLabel[2]}}&nbsp;:&nbsp;{{needs[2]}}
				</div>
				<div class="col-md-9 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need2')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-dove need" :style="style3">
					{{needsLabel[3]}}&nbsp;:&nbsp;{{needs[3]}}
				</div>
				<div class="col-md-9 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need3')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-grin-squint need" :style="style4">
					{{needsLabel[4]}}&nbsp;:&nbsp;{{needs[4]}}
				</div>
				<div class="col-md-9 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need4')}}<br /><br />
				</div>
			</div>
			<hr />
			<div class="text-left">{{$t('sentence.ct_content')}}</div>
			<div class="text-center"><a target="_blank" href="https://choicetheorist.com">{{$t('word.rtnpo_name')}}</a></div>

		</div>
	</div>

	<div class="card"><div class="card-body" style="white-space:bre-wrap;">
		{{$t('sentence.send_email_message')}}<br />
	</div></div>

	</div>
</main>
<bnt-footer />
</div></template>

<style scoped>
.need{
	background-color:var(--bgcolor);
}
</style>
