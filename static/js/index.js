const chart1Ctx = document.getElementById('chart1');
const chart2Ctx = document.getElementById('chart2');
const chart3Ctx = document.getElementById('chart3');
const chart4Ctx = document.getElementById('chart4');


function drawChart(path, ctx) {
    fetch(path)
        .then(response => response.json())
        .then(data => {
            const chart1 = new Chart(ctx, {
                type: 'line',
                data: data.data,
                options: data.options
            });
        });
}

drawChart('./static/data/chart1.json', chart1Ctx)
drawChart('./static/data/chart2.json', chart2Ctx)
drawChart('./static/data/chart3.json', chart3Ctx)
drawChart('./static/data/chart4.json', chart4Ctx)