window.onload = function () {

            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                zoomEnabled: true,
                title:{
                    text: "Prediction"
                },
                axisY :{
                    includeZero:false
                },
                theme: "dark2",
                data: data  // random generator below
            });
            chart.render();

        }

        var limit = 35+40+10;

        var y = 0;
        var data = [];
        var dataSeries = { type: "line" };
        var dataPoints = [];
        // varier entre 0 et 0.00003
        let i = 0;
        while(i<35){
            dataPoints.push({
                x: i - limit / 2,
                y: y
            });
            i++;
        }
        y = 0.000025;
        while(i<35+40){
            y += ((Math.random()-0.5) * 0.000005);
            dataPoints.push({
                x: i - limit / 2,
                y: y
            });
            i++;
        }
        dataSeries.dataPoints = dataPoints;
        data.push(dataSeries);