<script setup lang="ts">
import {reactive} from "vue"
import {useI18n} from 'vue-i18n'
import axios from 'axios'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'

const {t} = useI18n()
const store = useStore()
const router = useRouter()
const errors = reactive([])
const result = reactive({
	email:null,
	locale:store.state.lang
})

const set_collaborator = () => {
	if(result.email == null){
		var target = t('word.email');
		errors.push(t('validate.require',{target:target}));
	}
	else{
		axios.post('/api/bnt/set_collaborator/',result)
		.then((res) => {
			console.log(res);
			router.push({name:'bnt.question',params:{collaborator_id:res.data}});
		})
		.catch(error => {
			console.log(error.response);
		})
	}
}
</script>

<template>
	<div id="bnt-body">
	<bnt-locale-header />
	<main class="py-4">
		<div class="container form-group">
		<div class="card">
			<div class="card-body" style="white-space:pre-line;">
				{{$t('sentence.start_message')}}<br /><br />
			</div>
		</div>
		<div class="card">
			<div class="card-header">{{$t('sentence.start_title')}}</div>
			<div class="card-body" style="white-space:pre-line;">
				{{$t('sentence.start_description')}}<br />
				<div class="card" style="margin:10px;">
					<div class="card-header">{{$t('sentence.example_question')}}</div>
					<div class="card-body d-grid">
						<button class="btn btn-outline-primary my-2" disabled>{{$t('word.level5')}}</button>
						<button class="btn btn-outline-primary my-2" disabled>{{$t('word.level4')}}</button>
						<button class="btn btn-outline-primary my-2" disabled>{{$t('word.level3')}}</button>
						<button class="btn btn-outline-primary my-2" disabled>{{$t('word.level2')}}</button>
						<button class="btn btn-outline-primary my-2" disabled>{{$t('word.level1')}}</button>
					</div>
				</div>
				<error-message :errors="errors" />
				<div class="row">
					<div class="col-md-3 label">
						{{$t('word.email')}}
						<span class="badge badge-danger">{{$t('word.require')}}</span>
					</div>
					<div class="col-md-6 my-4">
						<input type="email" class="form-control" v-model="result.email" />
					</div>
				</div>
				<span class="text-danger">{{$t('sentence.privacy_comment')}}</span>
				{{$t('sentence.email_note')}}<br />
				<br />
				<div class="text-center"><button class="btn btn-success" v-on:click="set_collaborator()">{{$t('word.start')}}</button></div>
				<hr />
				<div class="small text-center">
					{{$t('sentence.privacy_agree')}}<br />
					<a href="https://peace-tea.jp/ct/privacy-policy">{{$t('word.privacy_policy')}}</a>
				</div>
			</div>
		</div>
		<hr />
		<ul class="small">
			<li>{{$t('sentence.copyright')}}</li>
			<li>{{$t('sentence.copyright2')}}</li>
			<li>{{$t('sentence.copyright3')}}</li>
		</ul>
		</div>
	</main>
	<bnt-footer />
	</div>
</template>

<style scoped>
</style>
