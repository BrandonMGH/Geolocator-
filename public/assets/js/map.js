
        let initialLatitude = 51.505
        let initialLongitude = -0.09;

        let getGeloation = () => {
            if ("geolocation" in navigator) {
                console.log("Geolocation Available")
                navigator.geolocation.getCurrentPosition(position => {
                    console.log(position)
                    console.log(position.coords.latitude)
                    console.log(position.coords.longitude);
                    initialLatitude = position.coords.latitude
                    initialLongitude = position.coords.longitude
                    mapDisplay();
                });
            } else {
                console.log("Geolocation Not Available")
            }
        }
        const mymap = L.map('mapid').setView([0, 0], 0);

        const attribution =
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tiles = L.tileLayer(tileUrl, { attribution });
        tiles.addTo(mymap);;


        let mapDisplay = () => {

            mymap.setView([initialLatitude, initialLongitude], 12)

        }

        let myFunction = () => {
            document.getElementById("latitude").innerHTML = initialLatitude
            document.getElementById("longitude").innerHTML = initialLongitude
            getGeloation();
        }