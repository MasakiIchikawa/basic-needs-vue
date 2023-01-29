<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BootstrapVueNext from 'bootstrap-vue-next'
import BntHeader from './components/BntHeader.vue'
import BntFooter from './components/BntFooter.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

</script>

<template>
  <RouterView />
</template>

<style>
html{
	position:relative;
	min-height:100%;
	background-image:url('@/assets/img/back.jpg');
}
body{
	margin-bottom:60px;
	font-family:"M PLUS Rounded 1c";
}

.footer {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 70px;
	border-top:solid yellowgreen 10px;
	background-color:white;
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

.navbar{
	background-color:white;
	border-bottom:solid yellowgreen 10px;
}

#app{
	background-image:url('@/assets/img/back.jpg');
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
}
input.form-check-input{
	margin-bottom:10px;
}

.form-control{
	margin-bottom:5px;
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
.btn-outline-primary-ex{
	color:#3490dc;
	border-color:#3490dc;
	background-color:white;
}
.btn-outline-primary-ex:hover{
	color:#3490dc;
}
.btn-outline-primary-ex:focus{
	box-shadow:0 0 0 0;
}
#navbarSupportedContent{
  flex-grow:unset;
}
</style>
