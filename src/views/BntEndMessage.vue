<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import {useRoute} from 'vue-router'

const {t} = useI18n()
const route = useRoute()

const token = route.params.token
</script>

<template><div id="bnt-body">
<bnt-header />
<main class="py-4">
	<div class="container form-group">
	<div class="card">
		<div class="card-body" style="white-space:pre-line;">
			{{$t('sentence.end_message')}}<br />
			<br />
			<div class="text-center"><router-link :to="{name:'bnt.result',params:{token:token}}">
				<button class="btn btn-success">{{t('word.display_result')}}</button>
			</router-link></div>
		</div>
	</div>
	</div>
</main>
<bnt-footer />
</div></template>
