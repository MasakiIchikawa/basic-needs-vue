<script setup lang="ts">
import {reactive} from "vue"
import {useI18n} from 'vue-i18n'
import axios from 'axios'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {Config} from "@/components/Const"

const {t} = useI18n()
const store = useStore()
const router = useRouter()
var blankErrors: Array<String> = []
const errors = reactive(blankErrors)
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
		axios.post(Config.API_URL+'/set_collaborator/',result)
		.then((res) => {
			console.log(res)
			store.commit('setCollaboratorId',res.data)
			router.push({name:'bnt.question'});
		})
		.catch(error => {
			console.log(error.response);
		})
	}
}
const getLocale = () => {
	return store.state.lang
}
</script>

<template>
	<div id="bnt-body">
	<bnt-locale-header />
	<main class="py-4">
		<div class="container form-group">
		<div class="card">
			<div class="card-body" style="white-space:pre-line;">
				<div v-if="getLocale() == 'ja'" class="typo pc">
					<img class="typo-copy" src="../assets/img/copy_pc.png" /><br />
					<div class="title title-jp">{{t('word.title')}}</div>
					<div class="text-center">
						<span class="subtitle">BASIC NEEDS SURVEY</span>
					</div>
				</div>
				<div v-if="getLocale() == 'en'" class="typo pc">
					<div class="text-center">
						<span class="subtitle">With somewone important</span>
					</div>
					<div v-if="getLocale() == 'en'" class="title title-en">{{t('word.title')}}</div>
				</div>
				<div v-if="getLocale() == 'ja'" class="typo sp">
					<img class="typo-copy" src="../assets/img/copy_sp.png" /><br />
					<div class="title title-jp">{{t('word.sp_title')}}</div>
					<div class="text-center">
						<span class="subtitle">BASIC NEEDS SURVEY</span>
					</div>
				</div>
				<div v-if="getLocale() == 'en'" class="typo sp">
					<div class="text-center">
						<span class="subtitle">With somewone important</span>
					</div>
					<div class="title title-en">{{t('word.title')}}</div>
				</div>
				<br />
				<div class="pc description"><div class="row">
					<div class="col-md-6 start-description">
						{{t('sentence.start_description')}}<br />
						{{t('sentence.start_description2')}}
					</div>
					<div class="sample col-md-6 text-center">
						<img v-if="getLocale() == 'ja'" src="../assets/img/pc_sample.jpg" />
						<img v-if="getLocale() == 'en'" src="../assets/img/pc_sample_en.jpg" />
					</div><br />
				</div></div>
				<div class="sp">
					<div class="start-description">
						{{t('sentence.start_description')}}
					</div><br />
					<div class="sample text-center">
						<img v-if="getLocale() =='ja'" src="../assets/img/sp_sample.jpg" />
						<img v-if="getLocale() == 'en'" src="../assets/img/sp_sample_en.jpg" />
					</div><br />
					<div class="start-description">{{t('sentence.start_description2')}}</div><br />
				</div>
				<error-message :errors="errors" />
				<div class="row">
					<div class="col-md-3 label">
						{{t('word.email')}}
						<span class="badge badge-danger">{{t('word.require')}}</span>
					</div>
					<div class="col-md-6 my-4">
						<input type="email" class="form-control" v-model="result.email" />
					</div>
				</div>
				<div class="note">
					{{t('sentence.privacy_comment')}}<br />
					{{t('sentence.email_note')}}<br />
				</div>
				<br />
				<div class="text-center"><button class="btn btn-success btn-start" v-on:click="set_collaborator()">{{t('word.start')}}</button></div>
				<hr />
				<div class="note text-center">
					{{t('sentence.privacy_agree')}}<br />
					<a href="https://peace-tea.jp/ct/privacy-policy">{{t('word.privacy_policy')}}</a>
				</div>
			</div>
		</div>
		</div>
	</main>
	<bnt-footer />
	</div>
</template>

<style scoped>
.title{
    letter-spacing: 6px;
    color: #2c2300;
}
.subtitle{
	background-color: #ffaca4;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    margin-left: auto;
}
@media (min-width: 768px){
	.pc{display:block;}
	.sp{display:none;}
	.title-jp{
	    padding-top: 30px;
		font-size:52px;
	}
	.title-en{
		font-size:52px;
	}
	.card{
		border-radius:20px;
		border:none;
	}
	.typo{
	    margin: 20px auto 0 auto;
	    width: 580px;
	    text-align: center;
    }
	.typo-copy{
		width:200px;
		float:left;
	}
	.description{
		width:80%;
		margin:0 auto 0 auto;
	}
	.start-description{
		font-size:1em;
		text-align:left;
		line-height: 40px;
    	margin: auto;
    }
	.sample{
		padding: 20px;
		background-color: #f6f2f1;
		border-radius: 15px;
		margin:0 auto 0 auto;
	}
    .label{
    	text-align:right;
    }
    .note{
    	font-size:0.5em;
    	width:750px;
    	margin:0 auto 0 auto;
    }
}
@media (max-width:768px){
	.pc{display:none;}
	.sp{display:block;}
	.title-jp{
	    padding-top: 30px;
		font-size:15vw;
	}
	.title-en{
	    padding-top: 30px;
		font-size:34px;
		text-align:center;
	}
	.typo{
		width:80%;
		margin:50px auto 0 auto;
	}
	.typo-copy{
		width:70%;
		float:right;
	}
	.start-description{
		font-size:3.5vw;
		text-align:center;
	}
	.sample{
		width: 80%;
		padding: 20px;
		background-color: #f6f2f1;
		border-radius: 15px;
		margin:0 auto 0 auto;
	}
	.note{
		font-size:3vw;
	}
}
.btn-start{
	border-radius: 50px;
    padding: 20px 70px 20px 50px;
    background-color: #ffaca4;
    border-color: #ffaca4;
    font-weight: 550;
}
.btn-start:before {
  content: "";
  position: absolute;
  top: 46%;
  right: 35px;
  width: 10px;
  height: 2px;
  background: #fff;
  transform: rotate(45deg);
}

.btn-start:after {
  content: "";
  position: absolute;
  top: 54%;
  right: 35px;
  width: 10px;
  height: 2px;
  background: #fff;
  transform: rotate(-45deg);
}
</style>
