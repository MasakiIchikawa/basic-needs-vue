<script setup lang="ts">
import Config from "./Const.vue"
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
				{{$t('word.title') }}
			</div>
		</div>
	</div>
</nav>
</template>
<style scoped>
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
	padding-top:5px;
}
.navbar-brand .brand-right{
	float:right;
	margin-top:8px;
}
</style>