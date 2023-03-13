<script setup lang="ts">
import {reactive} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {useI18n} from 'vue-i18n'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const {t} = useI18n()

var blankErrors: Array<String> = []
const errors = reactive(blankErrors)
const result = reactive({
	token:route.params.token,
	collaborator_id:route.params.collaborator_id,
	sex:null,
	birth_year:null,
	marriage:null,
	job:null,
	other_job:null,
	world_area:null
})
const getSexSelect = () => {
	return [
		{value:null,text:""},
		{value:1,text:t('word.male')},
		{value:2,text:t('word.female')}
	]
}
const getWorldAreaSelect = () =>{
	return [
		{value:null,text:""},
		{value:1,text:t('word.africa')},
		{value:2,text:t('word.asia')},
		{value:3,text:t('word.europe')},
		{value:4,text:t('word.south_america')},
		{value:5,text:t('word.north_america')},
		{value:6,text:t('word.oceania')}
	]
}
const getMarriageSelect = () => {
	return [
		{value:null,text:""},
		{value:1,text:t('word.single')},
		{value:2,text:t('word.married')}
	]
}
const getJobSelect = () => {
	return [
		{value:null,text:""},
		{value:1,text:t('word.company_employee')},
		{value:2,text:t('word.student')},
		{value:3,text:t('word.civil_servant')},
		{value:4,text:t('word.self_employed')},
		{value:5,text:t('word.parttimer')},
		{value:6,text:t('word.housemaker')},
		{value:7,text:t('word.group_staff')},
		{value:99,text:t('word.other')}
	]
}

const set_questionnaire = () => {
	// validation
	if(result.sex == null){
		var target = t('word.sex');
		errors.push(t('validate.require',{target:target}));
	}
	if(result.birth_year == null){
		var target = t('word.birth_year');
		errors.push(t('validate.require',{target:target}));
	}
	else if(result.birth_year > 3000 || result.birth_year < 1900){
		var target = t('word.birth_year');
		errors.push(t('validate.year',{target:target}));
	}
	if(result.marriage == null){
		var target = t('word.marriage');
		errors.push(t('validate.require',{target:target}));
	}
	if(result.job == null){
		var target = t('word.job');
		errors.push(t('validate.require',{target:target}));
	}
	else if(result.job == 99 && result.other_job == null){
		var target = t('word.othor_job');
		errors.push(t('validate.require',{target:target}));
	}
	if(result.world_area == null){
		errors.push(t('validate.require',{target:t('word.world_area')}));
	}

	if(errors.length == 0){
		// register result
		axios.post('/api/bnt/set_questionnaire',result)
		.then((res) => {
			console.log(res);
			router.push({name:'bnt.end_message',params:{token:result.token}});
		});
	}
}
</script>

<template><div id="bnt-body">
<bnt-header />
<main class="py-4">
	<div class="container form-group">
	<div class="card">
		<div class="card-body">
			{{t('sentence.questionnaire_title')}}<br /><br />
			<error-message :errors="errors" />
			<div class="row">
				<div class="label col-md-3">{{t('word.sex')}}</div>
				<div class="col-md-2">
					<b-form-select v-model="result.sex" :options="getSexSelect()" />
				</div>
			</div>
			<div class="row">
				<div class="label col-md-3">{{t('word.birth_year')}}</div>
				<b-input-group id="birthyear" :prepend="t('word.year_prepend')" :append="t('word.year_append')">
					<b-form-input type="number" name="birth_year" v-model="result.birth_year" :placeholder="t('word.birth_year_placeholder')" />
				</b-input-group>
			</div>
			<div class="row">
				<div class="label col-md-3">{{t('word.marriage')}}</div>
				<div class="col-md-2">
					<b-form-select v-model="result.marriage" :options="getMarriageSelect()" />
				</div>
			</div>
			<div class="row">
				<div class="label col-md-3">{{t('word.job')}}</div>
				<div class="col-md-2">
					<b-form-select v-model="result.job" :options="getJobSelect()" />
				</div>
				<div class="col-md-5">
					<input v-if="result.job==99" type="text" class="form-control" v-model="result.other_job" :placeholder="t('word.other_job')" />
				</div>
			</div>
			<div class="row">
				<div class="label col-md-3">{{t('word.world_area')}}</div>
				<div class="col-md-2">
					<b-form-select v-model="result.world_area" :options="getWorldAreaSelect()" />
				</div>
			</div>

			<div class="text-center"><button class="btn btn-primary" v-on:click="set_questionnaire()">{{t('word.complete')}}</button></div>
		</div>
	</div>
	</div>
</main>
<bnt-footer />
</div></template>

<style scoped>
#birthyear{
	max-width:250px;
}
input[name='birth_year']{
	margin-bottom:0px;
}
</style>