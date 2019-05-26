

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send(`
        <!DOCTYPE HTML>
        <html>
            <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
            <script>
                var ts2 = 1484418600000;
    var dates = [];
    var spikes = [5, -5, 3, -3, 8, -8]
    for (var i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      var innerArr = [ts2, dataSeries[1][i].value];
      dates.push(innerArr)
    }

    class LineChart extends React.Component {
      
      constructor(props) {
        super(props);

        this.state = {
          options: {
            chart: {
              stacked: false,
              zoom: {
                type: 'x',
                enabled: true
              },
              toolbar: {
                autoSelected: 'zoom'
              }
            },
            plotOptions: {
              line: {
                curve: 'smooth',
              }
            },
            dataLabels: {
              enabled: false
            },

            markers: {
              size: 0,
              style: 'full',
            },
            //colors: ['#0165fc'],
            title: {
              text: 'Stock Price Movement',
              align: 'left'
            },
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
              },
            },
            yaxis: {
              min: 20000000,
              max: 250000000,
              labels: {
                formatter: function (val) {
                  return (val / 1000000).toFixed(0);
                },
              },
              title: {
                text: 'Price'
              },
            },
            xaxis: {
              type: 'datetime',
            },

            tooltip: {
              shared: false,
              y: {
                formatter: function (val) {
                  return (val / 1000000).toFixed(0)
                }
              }
            }
          },
          series: [{
            name: 'XYZ MOTORS',
            data: dates
          }],
        }
      }

      render() {

        return (
          

          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" height="350" />
          </div>
  

        );
      }
    }

    const domContainer = document.querySelector('#app');
    ReactDOM.render(React.createElement(LineChart), domContainer);
            </script>
            <body>
            <div id="app"></div>
            <div class="app"></div>
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" height="350" />
                bjr
            </body>
        </html>

    `)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})