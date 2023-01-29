<template><div id="bnt-body">
<bnt-locale-header @fill-data="fillData" />
<main class="py-4">
	<div class="container form-group">
	<div class="card">
		<div class="card-header">{{$t('word.result_title')}}</div>
		<div class="card-body text-center">
			<div class="text-right" v-if="chart_type == 'radar'">
				<radar-chart :chart-data="chartData" />
				<a class="btn btn-primary" :href="change_chart_url">{{$t('word.display_bar2')}}</a>
			</div>
			<div class="text-right" v-else>
				<bar2-chart :chart-data="chartData" />
				<a class="btn btn-primary" :href="change_chart_url">{{$t('word.display_radar')}}</a>
			</div><br />

			<div class="border p-2 border-danger text-danger">
				{{$t('sentence.result_alert')}}
			</div><br />

			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-medkit need" :style="style0">
					{{$t('word.needs_label')[0]}}&nbsp;:&nbsp;{{needs[0]}}
				</div>
				<div class="col-md-9 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need0')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-heart need" :style="style1">
					{{$t('word.needs_label')[1]}}&nbsp;:&nbsp;{{needs[1]}}
				</div>
				<div class="col-md-9 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need1')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-medal need" :style="style2">
					{{$t('word.needs_label')[2]}}&nbsp;:&nbsp;{{needs[2]}}
				</div>
				<div class="col-md-9 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need2')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-dove need" :style="style3">
					{{$t('word.needs_label')[3]}}&nbsp;:&nbsp;{{needs[3]}}
				</div>
				<div class="col-md-9 raw_text text-left" style="white-space:pre-line">
					{{$t('sentence.content_need3')}}<br /><br />
				</div>
			</div>
			<div class="row border-top">
				<div class="col-md-3 label alert fas fa-grin-squint need" :style="style4">
					{{$t('word.needs_label')[4]}}&nbsp;:&nbsp;{{needs[4]}}
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

<script>
import RadarChart from "../RadarChart.vue";
import Bar2Chart from "../Bar2Chart.vue";
import Config from "../Const.vue";

export default{
	components:{RadarChart,Bar2Chart},
	data:function(){
		return{
			token:this.$route.params.token,
			chart_type:null,
			needs:[null,null,null,null,null],
			chartData:null,
			change_chart_url:null,
		}
	},
	methods:{
		fillData(){
			axios.post(Config.ROOT_PATH+"/bnt/get_result",{token:this.token})
			.then((res) => {
				console.log(res);
				this.needs = res.data;
				this.chart_type = this.$route.params.chart_type;
				if(this.chart_type == null){
					if(Math.random() > 0.5){
						this.chart_type = 'radar';
					}
					else{
						this.chart_type = "bar2";
					}
				}

				if(this.chart_type =='radar'){
					this.change_chart_url = Config.ROOT_PATH+"/bnt/result2/bar2/"+this.token;
					this.chartData = {
						labels:this.$t('word.needs_label'),
						datasets:[
							{
								data:res.data,
								backgroundColor:'rgba(54,162,235,0.2)',
								borderColor:'rgb(54,162,235)'
							}
						]
					};
				}
				else{
					this.change_chart_url = Config.ROOT_PATH+"/bnt/result2/radar/"+this.token;
					this.chartData = {
						labels:this.$t('word.needs_label'),
						datasets:[
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
				}
			});
		}
	},
	mounted(){
		this.fillData();
	},
	computed:{
		style0(){return {'--bgcolor':Config.NEEDS_COLOR[0]};},
		style1(){return {'--bgcolor':Config.NEEDS_COLOR[1]};},
		style2(){return {'--bgcolor':Config.NEEDS_COLOR[2]};},
		style3(){return {'--bgcolor':Config.NEEDS_COLOR[3]};},
		style4(){return {'--bgcolor':Config.NEEDS_COLOR[4]};},
	}
}
</script>

<style scoped>
.need{
	background-color:var(--bgcolor);
}
</style>
