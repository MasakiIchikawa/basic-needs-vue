<script setup lang="ts">
import {ref,reactive} from 'vue'
import {useI18n} from 'vue-i18n'
import {useStore} from 'vuex'
import axios from 'axios'
import {useRouter,useRoute} from 'vue-router'

const t = useI18n()
const store = useStore()
t.locale.value = store.state.lang

const route = useRoute()
const router = useRouter()
const questions = ref(null)
const question_text = ref('')
const q_index =ref(0)
const result = reactive({
	collaborator_id:route.params.collaborator_id,
	locale:t.locale.value,
	answers:[]
})

const getQuestions = () => {
	axios.get('/api/bnt/get_questions/'+t.locale.value)
	.then((res) => {
		questions.value = res.data;
		question_text.value = get_question_text();
	});
}
const question_next = (answer) => {
	if(answer != null){
		$set(result.answers,q_index,
			{
				id:questions.value[q_index.value].id,
				value:answer
			}
		);
	}
	if(q_index.value >= questions.length-1){
		display_loading();
		axios.post('/api/bnt/set_answers/',result)
		.then((res) => {
			$("#loading").remove();
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
		q_index.value++;
		var q_text = get_question_text();
		$('#question_card').fadeOut(500,function(){
			$('#ans'+answer).prop('checked',false);
			$('#question').text(q_text);
			$('#question_card').fadeIn();
		});
	}
}
const question_back = () => {
	if(q_index.value > 0){
		q_index.value--;
		var q_text = get_question_text();
		$('#question_card').fadeOut(500,function(){
			$('#question').text(q_text);
			$('#question_card').fadeIn();
		});
	}
}
const get_question_text = () => {
	return 'Q'+(q_index.value+1)+'.'+questions.value[q_index.value].text;
}
const display_loading = () => {
	var loading_html = "<div id='loading'><div class='loading_text'>現在解析中です</div></div>";
	if($("#loading").length == 0){
		$("body").append(loading_html);
	}
}

getQuestions()
</script>

<template><div id="bnt-body">
<bnt-header />
<main class="py-4">
	<div class="container form-group">
	<div class="card" id="question_card">
		<div class="card-header" id="question">{{question_text}}</div>
		<div class="card-body d-grid">
			<button id="ans5" class="btn btn-outline-primary-ex my-2" v-on:click="question_next(5)">{{$t('word.level5')}}</button>
			<button id="ans4" class="btn btn-outline-primary-ex my-2" v-on:click="question_next(4)">{{$t('word.level4')}}</button>
			<button id="ans3" class="btn btn-outline-primary-ex my-2" v-on:click="question_next(3)">{{$t('word.level3')}}</button>
			<button id="ans2" class="btn btn-outline-primary-ex my-2" v-on:click="question_next(2)">{{$t('word.level2')}}</button>
			<button id="ans1" class="btn btn-outline-primary-ex my-2" v-on:click="question_next(1)">{{$t('word.level1')}}</button>

			<div class="text-center">
				<button v-show="q_index > 0" class="btn btn-danger" v-on:click="question_back()">{{$t('word.back_before')}}</button>
			</div>
		</div>
	</div>
	</div>
</main>
<bnt-footer />
</div></template>



