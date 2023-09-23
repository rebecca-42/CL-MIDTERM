window.addEventListener('load', function() {
    console.log('page is loaded')
    this.fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=eebfc32c49f98c3f7e17e3c912430c22")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
})