<script setup lang="ts">
import {ref,reactive,onMounted} from 'vue'
import {useI18n} from 'vue-i18n'
import axios from 'axios'
import {useRouter,useRoute} from 'vue-router'

const t = useI18n()
const route = useRoute()
const router = useRouter()
const questions = ref(null)
const question_text = ref('')
const visible_question = ref(false)
const visible_loading = ref(false)
const q_index =ref(0)
const result = reactive({
	collaborator_id:route.params.collaborator_id,
	locale:t.locale.value,
	answers:{}
})

const getQuestions = () => {
	axios.get('/api/bnt/get_questions/'+t.locale.value)
	.then((res) => {
		questions.value = res.data;
		question_text.value = getQuestionText();
	});
}
const questionNext = (event,answer:number) => {
	if(answer != null){
		result.answers[q_index.value]={
			id:questions.value[q_index.value].id,
			value:answer
		}
	}
	if(q_index.value >= questions.length-1){
		displayLoading();
		axios.post('/api/bnt/set_answers/',result)
		.then((res) => {
			visible_loading.value = false
			var params = res.data;
			params['collaborator_id'] = result.collaborator_id;
			if(params['q_flg'] == true){
				router.push({name:'bnt.questionnaire',params:params});
			}
			else{
				router.push({name:'bnt.end_message',params:params});
			}
		})
		.catch(err => {
			alert(t('sentence.analyse_error'));
		});
	}
	else{
		visible_question.value = false
		q_index.value++;
		var q_text = getQuestionText()
		question_text.value = q_text
		event.checked = false
	}
}
const questionBack = (event) => {
	if(q_index.value > 0){
		visible_question.value = false
		q_index.value--;
		var q_text = get_question_text()
		question_text.value = q_text
		event.checked = false
	}
}
const getQuestionText = () => {
	return 'Q'+(q_index.value+1)+'.'+questions.value[q_index.value].text;
}
const displayLoading = () => {
	visible_loading.value=true
}
const showQuestion = () => {
	visible_question.value = true
}

onMounted(() => {
	getQuestions()
	showQuestion()
})
</script>

<template><div id="bnt-body">
<bnt-header />
<main class="py-4">
	<div v-if="visible_loading" id="loading"><div class='loading_text'>$t('sentence.loading')</div></div>
	<div v-if="!visible_loading" class="container form-group">
	<div class="card" id="question_card">
		<div class="card-header" id="question">
			<Transition name="fade" @after-leave="showQuestion"><span v-if="visible_question">{{question_text}}</span></Transition>
		</div>
		<div class="card-body d-grid">
			<button id="ans5" class="btn btn-outline-primary-ex my-2" v-on:click="questionNext($event,5)">{{$t('word.level5')}}</button>
			<button id="ans4" class="btn btn-outline-primary-ex my-2" v-on:click="questionNext($event,4)">{{$t('word.level4')}}</button>
			<button id="ans3" class="btn btn-outline-primary-ex my-2" v-on:click="questionNext($event,3)">{{$t('word.level3')}}</button>
			<button id="ans2" class="btn btn-outline-primary-ex my-2" v-on:click="questionNext($event,2)">{{$t('word.level2')}}</button>
			<button id="ans1" class="btn btn-outline-primary-ex my-2" v-on:click="questionNext($event,1)">{{$t('word.level1')}}</button>

			<div class="text-center">
				<button v-show="q_index > 0" class="btn btn-danger" v-on:click="questionBack($event)">{{$t('word.back_before')}}</button>
			</div>
		</div>
	</div>
	</div>
</main>
<bnt-footer />
</div></template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
 
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>



