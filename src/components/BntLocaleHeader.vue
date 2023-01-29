<script setup lang="ts">
import { useI18n } from "vue-i18n";
import {useStore} from 'vuex'

const t = useI18n()
const store = useStore()

const changeLocale = () => {
	var lang=(t.locale.value==='ja')?'en':'ja'
	t.locale.value = lang
	store.commit('setLang',lang)
}
</script>

<template>
<nav class="navbar navbar-expand-md navbar-light navbar-laravel">
	<div class="container">
			<div class="navbar-brand"><a href="/">
					<img width="30" src="../assets/img/logo.png" />
			{{$t('word.title') }}
		</a></div>
		<div class="navbar-collapse" id="navbarSupportedContent">
			<!-- Left Side Of Navbar -->
			<ul class="navbar-nav ml-auto">
			</ul>
			<!-- Right Side Of Navbar -->
			<ul class="navbar-nav ml-auto"><li class="nav-item">
				<button type="button" class="btn btn-light" @click="changeLocale">
					{{$t('word.change_locale')}}
				</button>
			</li></ul>
		</div>
	</div>
</nav>
</template>
