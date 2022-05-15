function init() {
    let map = new ymaps.Map("map", {
        //longitude and latitude
        center: [55.7346709766185,37.58575521630452],
        zoom: 16
    });
}

//init fires once the script is ready 
ymaps.ready(init);

