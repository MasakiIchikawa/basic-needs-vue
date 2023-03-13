<script setup lang="ts">
import { useI18n } from "vue-i18n";
import {useStore} from 'vuex'

const {t,locale} = useI18n()
const store = useStore()

const changeLocale = () => {
	var lang=(locale.value==='ja')?'en':'ja'
	locale.value = lang
	store.commit('setLang',lang)
}
</script>

<template>
<nav class="navbar navbar-expand-md navbar-light navbar-laravel">
	<div class="container">
		<div class="navbar-brand">
			<div class="brand-left"><a href="/">
				<img width="150" src="../assets/img/logo.png" />
				<img width="30" src="../assets/img/rt_logo.png" />
			</a></div>
			<div class="brand-right">
				{{t('word.title') }}
				<button type="button" class="btn btn-light" @click="changeLocale">
				{{t('word.change_locale')}}
				</button>
			</div>
		</div>
	</div>
</nav>
</template>
<style scoped>
.btn{
	margin-bottom: initial;
    border-radius: 20px;
    margin-top: initial;
    border-color:gray;
    margin-left:10px;
    background-color:white;
}
@media (max-width:768px){
	.navbar{
		background-color:white;
	}
}
.navbar-brand{
	margin-right:0;
	width:100%;
	font-weight:700;
}
.navbar-brand img{
	margin-right:10px;
}
.navbar-brand a{
	color:var(--bs-navbar-hover-color);
	text-decoration:none;
}
.navbar-brand .brand-left{
	float:left;
	height:40px;
	padding-top:2px;
}
.navbar-brand .brand-right{
	float:right;
}
@media(max-width:768px){
	.navbar .container{
		display:block;
		text-align:center;
	}
	.navbar-brand{
		font-size:3.5vw;
	}
}
</style>