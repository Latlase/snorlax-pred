var ujson = {{ u|tojson|safe }};
var SQL = ujson[0];
// var SQL = 38;
window.feed = function(callback) {
  var tick = {};
  tick.plot0 = SQL;
  callback(JSON.stringify(tick));
};

var myConfig = {
 	type: "gauge",
 	globals: {
 	  fontSize: 25
 	},
 	plotarea:{
 	  marginTop:80
 	},
 	plot:{
 	  size:'100%',
 	  valueBox: {
 	    placement: 'center',
 	    text:'%v', //default
 	    fontSize:35,
 	    rules:[
 	      {
 	        rule: '%v >= 50',
 	        text: '%v<br>EXCELLENT'
 	      },
 	      {
 	        rule: '%v < 50 && %v > 0',
 	        text: '%v<br>Good'
 	      },
 	      {
 	        rule: '%v < -50 && %v > 0',
 	        text: '%v<br>Fair'
 	      },
 	      {
 	        rule: '%v <  -50',
 	        text: '%v<br>Bad'
 	      }   
 	    ]
 	  }
 	},
  tooltip:{
    borderRadius:5
  },
 	scaleR:{
	  aperture:200,
	  minValue:-50,
	  maxValue:50,
	  step:1,
	  center:{
	    visible:false
	  },
	  tick:{
	    visible:false
	  },
	  item:{
	    offsetR:0,
	    rules:[
	      {
	        rule:'%i == 9',
	        offsetX:15
	      }
	    ]
	  },
	  // labels:['-100','','','','10','40','70','75','','100'],
	  ring:{
	    size:50,
	    rules:[
	      {
	        rule:'%v <= -30',
	        backgroundColor:'#66EE66'
	      },
	      {
	        rule:'%v > -30 && %v < -10',
	        backgroundColor:'#99EE99'
	      },
        	      {
	        rule:'%v >= -10 && %v < 10',
	        backgroundColor:'#AAAAAA'
	      },
	      {
	        rule:'%v >= 10 && %v < 30',
	        backgroundColor:'#EEAAAA'
	      },
	      {
	        rule:'%v >= 30',
	        backgroundColor:'#EE5555'
	      }      
	    ]
	  }
 	},
  refresh:{  
      type:"feed",
      transport:"js",
      url:"feed()",
      interval:1500,
      resetTimeout:1000
  },
	series : [
		{
			values : [SQL], // starting value
			backgroundColor:'#333333',
	    indicator:[5,10,5,5,0.75],
	    animation:{  
        effect:2,
        method:1,
        sequence:4,
        speed: 1000
     },
		}
	]
};

zingchart.render({ 
	id : 'guage', 
	data : myConfig, 
	height: '90%', 
	width: '100%'
});

