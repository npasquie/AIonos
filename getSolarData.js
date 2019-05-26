function solarData() {
    var getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            var status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            } else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    };
    getJSON('https://services.swpc.noaa.gov/json/f107_cm_flux.json',
        function(err, data) {
            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {

            }
        });
    data1=JSON.parse(data);
    dataPoints=[];
    data1.forEach(function(time_tag, flux){
        dataPoints.push({x:time_tag, y:flux})
    });
    return dataPoints;
}