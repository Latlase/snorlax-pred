var options1 = {
    type: 'doughnut',
    data: {
      labels: ["Red", "Orange", "Green"],
      datasets: [
         {
                  label: '# of Votes',
                  data: [33, 33, 33],
                  backgroundColor: [
                      'rgba(231, 76, 60, 1)',
                      'rgba(255, 164, 46, 1)',
                      'rgba(46, 204, 113, 1)'
                  ],
                  borderColor: [
                      'rgba(255, 255, 255 ,1)',
                      'rgba(255, 255, 255 ,1)',
                      'rgba(255, 255, 255 ,1)'
                  ],
                  borderWidth: 5
              }
          ]
    },
    options: {
     rotation: 1 * Math.PI,
              circumference: 1 * Math.PI,
              legend: {
                  display: false
              },
              tooltip: {
                  enabled: false
              },
              cutoutPercentage: 95
    }
  }
  
  var ctx1 = document.getElementById('speedometer').getContext('2d');
  new Chart(ctx1, options1);
  
  var options2 = {
    type: 'doughnut',
    data: {
     labels: ["", "Purple", ""],
              datasets: [
                 {
                      data: [88.5, 1,10.5],
                      backgroundColor: [
                          "rgba(0,0,0,0)",
                           "rgba(255,255,255,1)",
                            "rgba(0,0,0,0)",
                      ],
                       borderColor: [
                      'rgba(0, 0, 0 ,0)',
                       'rgba(46, 204, 113, 1)',
                      'rgba(0, 0, 0 ,0)'
                  ],
                  borderWidth: 3
                    
                  }]
    },
    options: {
      cutoutPercentage: 95,
       rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
              legend: {
                  display: false
              },
              tooltips: {
                  enabled: false
              }
    }
  }
  
  var ctx2 = document.getElementById('secondContainer').getContext('2d');
  new Chart(ctx2, options2);