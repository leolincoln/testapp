$(function(){
        $('#container').highcharts({
chart: {
type: 'area'
},
title: {
text: 'Expected Bounce Rate'
},
subtitle: {
text: 'Source: <a href="http://www.google.com/analytics/">'+
'Google Analytics</a>'
},
xAxis: {
allowDecimals: false,
labels: {
formatter: function() {
return this.value; // clean, unformatted number for year
}
}
},
yAxis: {
title: {
text: 'Expected bounce rate'
       },
labels: {
formatter: function() {
               return this.value 
           }
        }
       },
tooltip: {
pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
         },
plotOptions: {
area: {
pointStart: 20140101,
            marker: {
enabled: false,
         symbol: 'circle',
         radius: 2,
         states: {
hover: {
enabled: true
       }
         }
            }
      }
             },
series: [{
name: 'Average',
      data: [0.66,0.64, 0.65, 0.63, 0.64, 0.67, 0.61, 0.65, 0.66, 0.67 ]
        }, {
name: 'Your Company',
      data: [0.33,0.34,0.39,0.46,0.47,0.50,0.65,0.66,0.67,0.70]
        }]
});
});


