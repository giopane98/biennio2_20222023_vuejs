const setupChart = (data) => {
  console.log(data)
  const temps = data.list.map(i => Math.round(i.main.temp - 273.15));
  const dates = data.list.map(i => i.dt_txt);
  //console.log(dates)
  var options = {
    series: [{
      name: 'temperature',
      //data: [10,20,30],
      data: temps,
    }],
    chart: {
      height: 350,
      type: 'bar'
    },
    colors: ['#FF69B4', '#800080'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'string',
      categories: dates
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}

const loadData = (lat, lng) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&lat=${lat}&lon=${lng}&appid=ca0bc81789a77b485742ed7b77c9a1b9`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const elementList = document.getElementById("weather");
      data.list.forEach(item => {
        const date = new Date(item.dt_txt)
        const dateString = date.toLocaleDateString('it-IT', {
          short: 'long',
          day: '2-digit',
          month: 'short',
          //year: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        })
        const datelElement = `<div class="date">${dateString}</div>`;
        const textElement = `<div class="text">${item.weather[0].main}</div>`;
        const iconElement = `<img class="icon" src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" />`
        elementList.innerHTML += `<li>
        ${iconElement}
        ${datelElement} 
        ${textElement}
      </li>`
        //console.log(dateString)
      });
      setupChart(data);
    });
  console.log
}

document.addEventListener("DOMContentLoaded", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    loadData(lat, lng)
  });
});