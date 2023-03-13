<script setup lang="ts">
import { ref } from "vue";
import {Config} from "../components/Const"
import {useI18n} from "vue-i18n"

const props = defineProps<{
  needsData:number[],
}>()
const needs = ref([0,0,0,0,0])

const {t} = useI18n()
const style0 = () => { return Config.NEEDS_COLOR[0]}
const style1 = () => {return Config.NEEDS_COLOR[1]}
const style2 = () => {return Config.NEEDS_COLOR[2]}
const style3 = () => {return Config.NEEDS_COLOR[3]}
const style4 = () => {return Config.NEEDS_COLOR[4]}
</script>

<template>
	<div>
		<div class="row">
			<div class="col-md-5 label">
				<div class="input-group">
					<div class="input-group-text need-label" :style="'border-color:'+style0()+';'">
						<span class="fas fa-medkit" />{{t('word.needs_survival')}}
					</div>
					<div class="input-group-text" :style="'background-color:'+style0()+';border-color:'+style0()+';'">{{props.needsData[0]}}</div>
				</div>
			</div>
			<div class="col-md-7 raw_text text-left d-flex align-content-center" style="white-space:pre-line">
				<span>{{t('sentence.content_need0')}}</span><br /><br />
			</div>
		</div>
		<div class="row">
			<div class="col-md-5 label">
				<div class="input-group">
					<div class="input-group-text need-label" :style="'border-color:'+style1()+';'">
						<span class="fas fa-heart" />{{t('word.needs_love')}}
					</div>
					<div class="input-group-text" :style="'background-color:'+style1()+';border-color:'+style1()+';'">{{props.needsData[1]}}</div>
				</div>
			</div>
			<div class="col-md-7 raw_text text-left d-flex align-content-center" style="white-space:pre-line">
				<span>{{t('sentence.content_need1')}}</span><br /><br />
			</div>
		</div>
		<div class="row">
			<div class="col-md-5 label">
				<div class="input-group">
					<div class="input-group-text need-label" :style="'border-color:'+style2()+';'">
						<span class="fas fa-medal" />{{t('word.needs_power')}}
					</div>
					<div class="input-group-text" :style="'background-color:'+style2()+';border-color:'+style2()+';'">{{props.needsData[2]}}</div>
				</div>
			</div>
			<div class="col-md-7 raw_text text-left d-flex align-content-center" style="white-space:pre-line">
				<span>{{t('sentence.content_need2')}}</span><br /><br />
			</div>
		</div>
		<div class="row">
			<div class="col-md-5 label">
				<div class="input-group">
					<div class="input-group-text need-label" :style="'border-color:'+style3()+';'">
						<span class="fas fa-dove" />{{t('word.needs_freedom')}}
					</div>
					<div class="input-group-text" :style="'background-color:'+style3()+';border-color:'+style3()+';'">{{props.needsData[3]}}</div>
				</div>
			</div>
			<div class="col-md-7 raw_text text-left d-flex align-content-center" style="white-space:pre-line">
				<span>{{t('sentence.content_need3')}}</span><br /><br />
			</div>
		</div>
		<div class="row">
			<div class="col-md-5 label">
				<div class="input-group">
					<div class="input-group-text need-label" :style="'border-color:'+style4()+';'">
						<span class="fas fa-grin-squint" />{{t('word.needs_fun')}}
					</div>
					<div class="input-group-text" :style="'background-color:'+style4()+';border-color:'+style4()+';'">{{props.needsData[4]}}</div>
				</div>
			</div>
			<div class="col-md-7 raw_text text-left d-flex align-content-center" style="white-space:pre-line">
				<span>{{t('sentence.content_need4')}}</span><br /><br />
			</div>
		</div>
		<br />
		<div class="text-start ct-content">{{t('sentence.ct_content')}}</div>
		<div class="text-center">
			<a target="_blank" class="btn btn-oneday" href="https://peace-tea.jp/ct/ct-oneday/">
				{{t('word.rt_oneday')}}
				<span class="fas fa-caret-right"></span>
			</a>
		</div>
	</div>
</template>

<style scoped>
.align-content-center span{
	margin:auto 0 auto 0;
	text-align:left;
}
.btn-oneday{
	background-color: #ffa89e;
    color: white;
    padding: 15px 60px 15px 40px;
    border-radius: 40px;
    font-weight: 600;
}
.fa-caret-right{
	position: absolute;
    right: 20px;
    top: 35%;
}
.input-group{
	justify-content:center;
	margin-bottom:20px;
	margin-top:20px;
}
.input-group-text{
	border-radius:30px;
	padding:15px 20px;
	border-width:4px;
	font-weight:700;
}
.need-label{
	background-color:white;
}
.ct-content{
	font-size:0.8em;
}
</style>

