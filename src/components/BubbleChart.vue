<script setup lang="ts">
import { onMounted,watch } from 'vue'
import {useI18n} from 'vue-i18n'
type ChartData = {
	data:number[],
	labels:String[],
	backgroundColor:String[]
}
const props = defineProps([
	'chartData'
])
const {t} = useI18n()
const name = 'BubbleChart'
const data = () => {
	return props.chartData
}
const labels = () => ([
	t('word.needs_survival'),
	t('word.needs_love'),
	t('word.needs_power'),
	t('word.needs_freedom'),
	t('word.needs_fun')
])
const createBubble = (chartData:ChartData) => {
	var width = document.querySelector('svg').clientWidth;
	var height = document.querySelector('svg').clientHeight;
	var rw,rh;
	var nodesData = [];
	for(var i=0,d=chartData.data.length;i<d;i++){
		var r = chartData.data[i]*20;
		rw = r + (width-2*r) * Math.random();
		rh = r + (height-2*r) * Math.random();
		nodesData.push({
			index:i,
			x:rw,
			y:rh,
			r:r,
			txt:labels()[i]+":"+chartData.data[i]
		});
	}
	d3.select('svg').selectAll('g').remove();
	var nodeGroup = d3.select('svg')
	.selectAll('g')
	.data(nodesData)
	.enter()
	.append('g')
	.call(
		d3.drag()
		.on('start',function (d){
			if(!d3.event.active)simulation.alphaTarget(0.3).restart();
			d.fx = d.x;
			d.fy = d.y;
		})
		.on('drag',function (d){
			d.fx = d3.event.x;
			d.fy = d3.event.y;
		})
		.on('end',function (d){
			d.fx = null;
			d.fy = null;
		})
	);
	var colorScale = chartData.backgroundColor;

	nodeGroup
	.append('circle')
	.attr('cx',function(d){return d.x;})
	.attr('cy',function(d){return d.y;})
	.attr('r',function(d){return d.r;})
	.attr('fill',function(d){return colorScale[d.index];});
	nodeGroup
	.append('text')
	.attr('x',function(d){return d.x;})
	.attr('y',function(d){return d.y;})
	.attr('text-anchor','middle')
	.attr('dominant-baseline','middle')
	.style('fill','#000')
	.text(function(d){return d.txt;});
	var simulation = d3.forceSimulation()
	.force(
		'collide',d3.forceCollide().radius(function(d){return d.r*1.1;})
	)
	.force('charge',d3.forceManyBody())
	.force(
		'x',d3.forceX().strength(0.03).x(width/2)
	)
	.force(
		'y',d3.forceY().strength(0.03).y(height/2)
	);
	simulation.nodes(nodesData).on('tick',function (){
		nodeGroup.select('circle')
		.attr('cx',function(d){return d.x;})
		.attr('cy',function(d){return d.y;});
		nodeGroup.select('text')
		.attr('x',function(d){return d.x;})
		.attr('y',function(d){return d.y;});
	});
}
defineExpose({
	createBubble
})
onMounted(()=>{
	createBubble(props.chartData)
})
watch(labels,()=>{
	createBubble(props.chartData)
})
</script>
<template>
<div class="border">
	<svg id="graph" width="100%" height="500"></svg>
</div>
</template>

