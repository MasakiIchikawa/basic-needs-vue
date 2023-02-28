<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import {useStore} from 'vuex'
import {useI18n} from 'vue-i18n'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const store = useStore()
const t = useI18n()

onMounted(() => {
	if(store.state.lang){
		t.locale.value = store.state.lang
	}
})

</script>

<template>
  <RouterView />
</template>

<style>
html{
	position:relative;
	min-height:100%;
	background-color:#f7f3f2;
	color:#2c2300;
}
body{
	margin-bottom:60px;
}
body > .container {
	padding: 60px 15px 0;
}

.container .text-muted {
	margin: 20px 0;
}
 
.footer > .container {
	padding-right: 15px;
	padding-left: 15px;
	padding-top: 5px;
	padding-bottom: 5px;
	text-align: center;
}

.form-group .row{
	margin-bottom:10px;
}
.form-group .raw_text{
	font-size:16px;
	margin-top:7px;
}
.form-group .label{
	font-size:16px;
	margin-top:7px;
	font-weight:600;
}
.card{
	margin-bottom:10px;
	border-radius:20px;
}

.form-table{
	width:100%;
	display:table;
}
.form-table td,.form-table th{
	border:1px solid #dde2e6;
}

.form-group .icon{
	padding-left:0px;
	padding-top:10px;
}

#app{
	background-color:#f7f3f2;
}

.card-body{
	color:#2c2300;
}
.card-body .header-img{
	max-width:100%;
}
.point div{
	font-weight:bold;
	font-size:18px;
	margin-bottom:10px;
}

.card img{
	max-width:100%;
}

.btn{
	margin-bottom:3px;
	background-color:#ffa89e;
	border-color:#ffa89e;
	border-radius:20px;
	margin-top:20px;
}
input.form-check-input{
	margin-bottom:10px;
}

.form-control,.form-select{
	margin-bottom:5px;
	background-color:#faf8f9;
}

.modal-body .icon{
	margin-top:auto;
	margin-bottom:auto;
	padding-bottom:5px;
}

@media(max-width:768px){
	.navbar .container{
		display:block;
		text-align:center;
	}
	.navbar-brand{
		font-size:1em;
	}
}

ul.small{
	padding-left:20px;
}

/* 基本的欲求テスト用特殊クラス */
.btn-outline-primary-ex:hover{
	color:#3490dc;
}
.btn-outline-primary-ex:focus{
	box-shadow:0 0 0 0;
}
#navbarSupportedContent{
  flex-grow:unset;
}

.badge-danger{
	background-color:#2c2400;
	border-radius:2px;
}
</style>
