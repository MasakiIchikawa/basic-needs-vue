<script setup lang="ts">
import { useI18n } from "vue-i18n";

const {t} = useI18n()
</script>
<template>
<footer class="footer">
	<div class="container text-center">
		<a target="peace-with" href="https://peace-tea.jp/ct/contact">
			Copyright(c) All Rights Reserved.<br />
			{{t('word.developer_name')}}
		</a>
	</div>
</footer>
</template>
<style scoped>
.footer{
	background-color:#2c2400;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 60px;
}
.footer a{
	color:white;
}
@media (min-width:768px){
	.footer a{
		font-size:0.8em;
	}
}
@media (max-width:768px){
	.footer a{
		font-size:2vw;
	}
}
.footer > .container {
	padding-right: 15px;
	padding-left: 15px;
	padding-top: 5px;
	padding-bottom: 5px;
	text-align: center;
}
</style>
