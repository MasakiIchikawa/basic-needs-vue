<script>
import {HorizontalBar,mixins} from 'vue-chartjs';
const{reactiveProp} = mixins;

export default{
	extends:HorizontalBar,
	mixins:[reactiveProp],
	props:['chartData'],
	name:'BarChart',
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
			scales:{
				xAxes:[{
					ticks:{min:0,max:5,stepSize:1}
				}]
			}
		};

		this.renderChart(this.chartData,this.options);
	}
}

</script>
