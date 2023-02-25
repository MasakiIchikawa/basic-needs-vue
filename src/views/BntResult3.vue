<script setup lang="ts">
import {useRoute} from "vue-router"
import axios from "axios"
import {useI18n} from "vue-i18n"
import RadarChart from "../components/RadarChart.vue";
import {onMounted,onUpdated,defineComponent,ref,reactive } from "vue"
import {Config} from '../components/Const.vue'

defineComponent({RadarChart})
const route = useRoute()
const {t} = useI18n()
const token = route.params.token
const needsData = reactive([0,0,0,0,0])
const chart_type = ref('')
const radarChart = ref()

const fillData= () => {
	axios.post("/api/bnt/get_result",{token:token})
	.then((res) => {
		console.log(res);
		needsData[0] = res.data[0]
		needsData[1] = res.data[1]
		needsData[2] = res.data[2]
		needsData[3] = res.data[3]
		needsData[4] = res.data[4]
		chart_type.value = route.params.chart_type;
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
		<div class="card-header">{{$t('word.result_title')}}</div>
		<div class="card-body text-center">
			<div class="text-right">
				<radar-chart ref="radarChart" :needsData="needsData" />
				<router-link :to="`/result2/${token}`" class="btn btn-primary">{{$t('word.display_bar')}}</router-link>
			</div><br />

			<div class="border p-2 border-danger text-danger">
				{{$t('sentence.result_alert')}}
			</div><br />

			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-medkit need" :style="style0">
					{{t('word.needs_survival')}}&nbsp;:&nbsp;{{needsData[0]}}
				</div>
				<div class="col-md-9 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need0')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-heart need" :style="style1">
					{{t('word.needs_love')}}&nbsp;:&nbsp;{{needsData[1]}}
				</div>
				<div class="col-md-9 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need1')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-medal need" :style="style2">
					{{t('word.needs_power')}}&nbsp;:&nbsp;{{needsData[2]}}
				</div>
				<div class="col-md-9 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need2')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-dove need" :style="style3">
					{{t('word.needs_freedom')}}&nbsp;:&nbsp;{{needsData[3]}}
				</div>
				<div class="col-md-9 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need3')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-grin-squint need" :style="style4">
					{{t('word.needs_fun')}}&nbsp;:&nbsp;{{needsData[4]}}
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
