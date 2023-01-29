<script setup lang="ts">
	defineProps(['message'])
</script>

<template><div v-if="message != null" class="alert alert-success" style="margin:10px;"><ul>
	<li>{{message}}</li>
</ul></div></template>
