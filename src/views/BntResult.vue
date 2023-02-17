<script setup lang="ts">
import { ref,reactive,defineComponent,onMounted } from "vue";
import BubbleChart from "@/components/BubbleChart.vue"
import {Config} from "@/components/Const.vue"
import {useRoute} from "vue-router"
import axios from "axios"
import {useI18n} from "vue-i18n"

defineComponent({
	BubbleChart
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
const change_chart_url = ref('')
const bubble1 = ref()
const fillData = () => {
	axios.post("/api/bnt/get_result",{token:token})
	.then((res) => {
		console.log(res)
		change_chart_url.value = "/result2/"+token
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
		bubble1.value.createBubble(chartData)
	})
}
const style0 = () => { return {'--bgcolor':Config.NEEDS_COLOR[0]}}
const style1 = () => {return{'--bgcolor':Config.NEEDS_COLOR[1]}}
const style2 = () => {return{'--bgcolor':Config.NEEDS_COLOR[2]}}
const style3 = () => {return{'--bgcolor':Config.NEEDS_COLOR[3]}}
const style4 = () => {return{'--bgcolor':Config.NEEDS_COLOR[4]}}
onMounted(() => {
	fillData()
})
</script>

<template><div id="bnt-body">
<bnt-locale-header @fill-data="fillData" />
<main class="py-4">
	<div class="container form-group">
	<div class="card">
		<div class="card-header">{{$t('word.result_title')}}</div>
		<div class="card-body text-center">
			<bubble-chart :chart-data="chartData" ref="bubble1" />
			<br />
			<div class="border p-2 border-danger text-danger">
				{{$t('sentence.result_alert')}}
			</div><br />
			<a class="btn btn-primary" :href="change_chart_url">{{$t('word.display_graph')}}</a><br /><br />

			<div class="row border-top">
				<div class="col-md-4 label alert fas fa-medkit need" :style="style0">
					{{$t('word.needs_survival')}}&nbsp;:&nbsp;{{needs[0]}}
				</div>
				<div class="col-md-8 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need0')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-4 label alert fas fa-heart need" :style="style1">
					{{$t('word.needs_love')}}&nbsp;:&nbsp;{{needs[1]}}
				</div>
				<div class="col-md-8 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need1')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-4 label alert fas fa-medal need" :style="style2">
					{{$t('word.needs_power')}}&nbsp;:&nbsp;{{needs[2]}}
				</div>
				<div class="col-md-8 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need2')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-4 label alert fas fa-dove need" :style="style3">
					{{$t('word.needs_freedom')}}&nbsp;:&nbsp;{{needs[3]}}
				</div>
				<div class="col-md-8 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need3')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-4 label alert fas fa-grin-squint need" :style="style4">
					{{$t('word.needs_fun')}}&nbsp;:&nbsp;{{needs[4]}}
				</div>
				<div class="col-md-8 raw_text text-left" style="white-space:pre-line">
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

