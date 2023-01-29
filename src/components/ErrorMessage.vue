<script setup lang="ts">
	defineProps(['errors'])
</script>

<template><div v-if="errors.length > 0" class="alert alert-danger" style="margin:10px;"><ul>
	<li v-for="(error,key) in errors">{{error}}</li>
</ul></div></template>
