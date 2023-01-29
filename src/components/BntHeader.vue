<script setup lang="ts">
import Config from "./Const.vue"
</script>
<template>
<nav class="navbar navbar-expand-md navbar-light navbar-laravel">
	<div class="container">
		<div><a class="navbar-brand" :href="Config.ROOT_PATH">
			<img width="30" src="../assets/img/logo.png" />
			{{$t('word.title') }}
		</a></div>
		<div class="navbar-collapse" id="navbarSupportedContent">
			<!-- Left Side Of Navbar -->
			<ul class="navbar-nav ml-auto">
			</ul>
			<!-- Right Side Of Navbar -->
			<ul class="navbar-nav ml-auto"><li class="nav-item">
			</li></ul>
		</div>
	</div>
</nav>
</template>
