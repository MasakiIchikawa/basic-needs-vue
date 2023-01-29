<template><div id="bnt-body">
<bnt-header />
<main class="py-4">
	<div class="container form-group">
	<div class="card">
		<div class="card-header"></div>
		<div class="card-body" style="white-space:pre-line;">
			{{$t('sentence.end_message')}}<br />
			<br />
			<div class="text-center"><router-link :to="{name:'bnt.result',params:{token:this.token}}">
				<button class="btn btn-success">{{$t('word.display_result')}}</button>
			</router-link></div>
		</div>
	</div>
	</div>
</main>
<bnt-footer />
</div></template>

<script>
export default{
	data:function(){
		return {
			token:this.$route.params.token
		}
	},
	methods:{
	},
	mounted(){}
}</script>
