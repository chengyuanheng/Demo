function loadChart(){
	draw_line(document.getElementById('myChart1').getContext('2d'));
	draw_Bar(document.getElementById('myChart2').getContext('2d'));
	draw_Radar(document.getElementById('myChart3').getContext('2d'));
	draw_PolarArea(document.getElementById('myChart4').getContext('2d'));
	draw_Pie(document.getElementById('myChart5').getContext('2d'));
	draw_Doughnut(document.getElementById('myChart6').getContext('2d'));
}

function draw_line(ctx){
	new Chart(ctx).Line(fetch_data1());
}

function draw_Bar(ctx){
	new Chart(ctx).Bar(fetch_data1());
}

function draw_Radar(ctx){
	new Chart(ctx).Radar(fetch_data1());
}

function draw_PolarArea(ctx){
	new Chart(ctx).PolarArea(fetch_data2());
}

function draw_Pie(ctx){
	new Chart(ctx).Pie(fetch_data2());
}

function draw_Doughnut(ctx){
	new Chart(ctx).Doughnut(fetch_data2());
}

function fetch_data1(){
	var data = {
		labels   : ["January","February","March","April","May","June","July"],
		datasets : [{
						fillColor : "rgba(220,220,220,0.5)",
						strokeColor : "rgba(220,220,220,1)",
						pointColor : "rgba(220,220,220,1)",
						pointStrokeColor : "#fff",
						data : [65,59,90,81,56,55,40]
					},{
						fillColor : "rgba(151,187,205,0.5)",
						strokeColor : "rgba(151,187,205,1)",
						pointColor : "rgba(151,187,205,1)",
						pointStrokeColor : "#fff",
						data : [28,48,40,19,96,27,100]
					}]
	}
	return data
}

function fetch_data2(){
	var data = [{
					value: 30,
					color:"#F7464A"
				},{
					value : 50,
					color : "#E2EAE9"
				},{
					value : 100,
					color : "#D4CCC5"
				},{
					value : 40,
					color : "#949FB1"
				},{
					value : 120,
					color : "#4D5360"
				}]
	return data
}


window.onload=loadChart