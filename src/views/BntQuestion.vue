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
const question_number = ref('01')
const visible_question = ref(false)
const visible_loading = ref(false)
const q_index =ref(0)
const progressRate = ref(0)
const result = reactive({
	collaborator_id:route.params.collaborator_id,
	locale:t.locale.value,
	answers:{}
})

const getProgressRate = () => {
	return (q_index.value)/51*100
}
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
		question_text.value = getQuestionText()
		question_number.value = getQuestionNumber()
		progressRate.value = getProgressRate()
		event.checked = false
	}
}
const questionBack = (event) => {
	if(q_index.value > 0){
		visible_question.value = false
		q_index.value--;
		question_text.value = getQuestionText()
		question_number.value = getQuestionNumber()
		progressRate.value = getProgressRate()
		event.checked = false
	}
}
const getQuestionText = () => {
	return questions.value[q_index.value].text;
}
const getQuestionNumber = () => {
	var num = q_index.value+1
	return ( '00' + num ).slice( -2 )
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
		<div class="card-body">
			<div class="question_circle">
				<span class="question">Question</span><br />
				<span class="question_number">{{question_number}}</span>
			</div>
			<div id="question">
				<Transition name="fade" @after-leave="showQuestion"><span v-if="visible_question">{{question_text}}</span></Transition>
			</div>
			<div class="card-body d-grid">
				<button id="ans5" class="btn btn-outline-primary-ex my-2" v-on:click="questionNext($event,5)">
					<span class="btn-circle">5</span>
					<span class="level-text">{{$t('word.level5')}}</span>
				</button>
				<button id="ans4" class="btn btn-outline-primary-ex my-2" v-on:click="questionNext($event,4)">
					<span class="btn-circle">4</span>
					<span class="level-text">{{$t('word.level4')}}</span>
				</button>
				<button id="ans3" class="btn btn-outline-primary-ex my-2" v-on:click="questionNext($event,3)">
					<span class="btn-circle">3</span>
					<span class="level-text">{{$t('word.level3')}}</span>
				</button>
				<button id="ans2" class="btn btn-outline-primary-ex my-2" v-on:click="questionNext($event,2)">
					<span class="btn-circle">2</span>
					<span class="level-text">{{$t('word.level2')}}</span>
				</button>
				<button id="ans1" class="btn btn-outline-primary-ex my-2" v-on:click="questionNext($event,1)">
					<span class="btn-circle">1</span>
					<span class="level-text">{{$t('word.level1')}}</span>
				</button>
				<div class="text-center">
					<button v-show="q_index > 0" class="btn btn-danger btn-back" v-on:click="questionBack($event)">
						<i class="fas fa-angle-left"></i>&nbsp;
						{{$t('word.back_before')}}
					</button>
				</div>
			</div>
			<div class="progress-frame"><div class="progress">
			  <div class="progress-bar" role="progressbar" :style="'width:'+progressRate+'%;'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
			  <div class="progress-point" :style="'left:'+progressRate+'%;'">●</div>
			</div></div>
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
#question_card{
	padding:0 20px 0 20px;
}
.question_circle{
	width: 100px;
    background-color: #ffa89e;
    border-radius: 50%;
    height: 100px;
    margin: auto;
    text-align: center;
    padding-top: 20px;
    color: white;
    font-weight: 700;
}
.question_number{
	font-size:2em;
}
#question{
	text-align:center;
	margin-top:20px;
}
.btn-outline-primary-ex{
	padding: 2px;
    border-radius: 30px;
    font-weight: 600;
    color: #ffa89e;
    border-color: #ffa89e;
	background-color:white;
	height:50px;
}
.btn-circle{
    float: left;
    background-color: #ffa89e;
    color: white;
    padding: 8px 16px 3px 16px;
    border-radius: 20px;
    height:40px;
}
.level-text{
	padding: 8px;
    display: block;
    text-align: center;
}
.progress-frame{
	position:relative;
}
.progress{
	background-color:#ffeae9;
	height:8px;
	margin:0 auto 20px auto;
	position:flex;
}
.progress-bar{
	background-color:#ffa89e;
}
.progress-point{
	font-size: 20px;
	position: absolute;
	bottom: -10px;
	margin-left:-10px;
	color: #ffa39c;
}
</style>



