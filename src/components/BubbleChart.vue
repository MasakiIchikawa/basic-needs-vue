<script setup lang="ts">
import { onMounted,watch } from 'vue'
import {useI18n} from 'vue-i18n'
import * as d3 from "d3"

type ChartData = {
	data:number[],
	labels:string[],
	backgroundColor:string[]
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
interface INode {
	index:number
	x:number
	y:number
	fx:number|null
	fy:number|null
	r:number
	txt:string
}
const createBubble = (chartData:ChartData) => {
	var width = document.querySelector('svg')?.clientWidth ?? 0
	var height = document.querySelector('svg')?.clientHeight ?? 0
	var rw,rh;
	var nodesData = [];
	
	// nodesDataにBubbleの大きさと位置、テキスト内容を格納
	for(var i=0,d=chartData.data.length;i<d;i++){
		var r = chartData.data[i]*20;
		rw = r + (width-2*r) * Math.random();
		rh = r + (height-2*r) * Math.random();
		nodesData.push(<INode>{
			index:i,
			x:rw,
			y:rh,
			r:r,
			txt:labels()[i]+":"+chartData.data[i]
		});
	}
	
	// ドラッグ可能なオブジェクトgを生成
	d3.select('svg').selectAll('g').remove()
	
	const drag = d3.drag<SVGCircleElement, INode>()
	.on('start',function (event,d){
		if(!event.active)simulation.alphaTarget(0.3).restart()
		d.fx = d.x
		d.fy = d.y
	})
	.on('drag',function (event,d){
		d.fx = event.x;
		d.fy = event.y;
	})
	.on('end',function (event,d){
		d.fx = null;
		d.fy = null;
	})

	var nodeGroup = d3.select('svg')
	.selectAll('g')
	.data<INode>(nodesData)
	.enter()
	.append<SVGCircleElement>('g')
	.call(drag)
	var colorScale = chartData.backgroundColor;

	// 色付き円circleを生成
	nodeGroup
	.append('circle')
	.attr('cx',function(d){return d.x;})
	.attr('cy',function(d){return d.y;})
	.attr('r',function(d){return d.r;})
	.attr('fill',function(d){return colorScale[d.index];});

	// 円の中心にテキストを配置
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
		'collide',d3.forceCollide().radius(function(d:any){return d.r*1.1})
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
<style scoped>
.border{
	border:none !important;
}
#graph{
	border-radius:20px;
	border:solid 4px #ffe1e1;
}
</style>

