<script>
import {Radar,mixins} from 'vue-chartjs';

export default{
	extends:Radar,
	mixins:[mixins.reactiveProp],
	props:['chartData'],
	name:'RadarChart',
	data:function(){
		return{
			options:null
		}
	},
	mounted(){
		this.options = {
			responsive:true,
			responsiveAnimationDuration:0,
			maintainAspectRatio:true,
			layout:{padding:0},
			legend:{display:false},
			scale:{
				pointLabels:{fontSize:16},
				angleLines:{display:true},
				ticks:{min:0,max:5,stepSize:1}
			}
		};

		this.renderChart(this.chartData,this.options);
	}
}

</script>
