<template><div id="bnt-body">
<bnt-header />
<main class="py-4">
	<div class="container form-group">
	<div class="card">
		<div class="card-header">{{$t('sentence.questionnaire_title')}}</div>
		<div class="card-body">
			<error-message :errors="errors" />
			<div class="row">
				<div class="label col-md-3">{{$t('word.sex')}}</div>
				<div class="col-md-2"><select class="form-control" name="sex" v-model="result.sex">
					<option value="" />
					<option v-for="option in $t('word.sex_select')" v-bind:value="option.id">{{option.name}}</option>
				</select></div>
			</div>
			<div class="row">
				<div class="label col-md-2">{{$t('word.birth_year')}}</div>
				<div class="col-md-3 input-group">
					<div v-if="$i18n.locale=='ja'" class="input-group-prepend">
						<span class="input-group-text">西暦</span>
					</div>
					<input type="number" class="form-control" name="birth_year" v-model="result.birth_year" :placeholder="$t('word.birth_year_placeholder')">
					<div v-if="$i18n.locale=='ja'" class="input-group-prepend">
						<span class="input-group-text">年</span>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="label col-md-3">{{$t('word.marriage')}}</div>
				<div class="col-md-2"><select class="form-control" name="marriage" v-model="result.marriage">
					<option value="" />
					<option v-for="option in $t('word.marriage_select')" v-bind:value="option.id">{{option.name}}</option>
				</select></div>
			</div>
			<div class="row">
				<div class="label col-md-3">{{$t('word.job')}}</div>
				<div class="col-md-2">
					<select class="form-control" name="job" v-model="result.job">
						<option value="" />
						<option v-for="option in $t('word.job_select')" v-bind:value="option.id">{{option.name}}</option>
					</select>
				</div>
				<div class="col-md-5">
					<input v-if="result.job==99" type="text" class="form-control" v-model="result.other_job" :placeholder="$t('word.other_job')" />
				</div>
			</div>
			<div class="row">
				<div class="label col-md-3">{{$t('word.world_area')}}</div>
				<div class="col-md-2">
					<select class="form-control" name="world_area" v-model="result.world_area">
						<option value="" />
						<option v-for="option in $t('word.world_area_select')" v-bind:value="option.id">{{option.name}}</option>
					</select>
				</div>
			</div>

			<div class="text-center"><button class="btn btn-primary" v-on:click="set_questionnaire()">{{$t('word.complete')}}</button></div>
		</div>
	</div>
	</div>
</main>
<bnt-footer />
</div></template>

<script>
import Config from "../Const.vue"

export default{
	data:function(){
		return{
			errors:[],
			result:{
				token:this.$route.params.token,
				collaborator_id:this.$route.params.collaborator_id,
				sex:null,
				birth_year:null,
				marriage:null,
				job:null,
				other_job:null,
				world_area:null
			}
		}
	},
	methods:{
		set_questionnaire(){
			// validation
			this.errors = [];
			if(this.result.sex == null){
				var target = this.$t('word.sex');
				this.errors.push(this.$t('validate.require',{target:target}));
			}
			if(this.result.birth_year == null){
				var target = this.$t('word.birth_year');
				this.errors.push(this.$t('validate.require',{target:target}));
			}
			else if(this.result.birth_year > 3000 || this.result.birth_year < 1900){
				var target = this.$t('word.birth_year');
				this.errors.push(this.$t('validate.year',{target:target}));
			}
			if(this.result.marriage == null){
				var target = this.$t('word.marriage');
				this.errors.push(this.$t('validate.require',{target:target}));
			}
			if(this.result.job == null){
				var target = this.$t('word.job');
				this.errors.push(this.$t('validate.require',{target:target}));
			}
			else if(this.result.job == 99 && this.result.other_job == null){
				var target = this.$t('word.othor_job');
				this.errors.push(this.$t('validate.require',{target:target}));
			}
			if(this.result.world_area == null){
				var target = this.$t('word.world_area');
				this.errors.push(this.$t('validate.require',{target:target}));
			}

			if(this.errors.length == 0){
				// register result
				axios.post(Config.ROOT_PATH+'/bnt/set_questionnaire',this.result)
				.then((res) => {
					console.log(res);
					this.$router.push({name:'bnt.end_message',params:{token:this.result.token}});
				});
			}
		}
	},
	mounted(){
	}
}
</script>
