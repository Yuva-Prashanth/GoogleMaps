mapboxgl.accessToken = 'pk.eyJ1IjoieXV2YXByYXNoYW50aDIwIiwiYSI6ImNsMmpxeTQ0czEwN2czY2x3a2s4cDV6M3IifQ.aJx2pg8QtZbVEcFxajRrYA';

        navigator.geolocation.getCurrentPosition(successLocation,
            errorLocation, {
                enableHighAccuracy:true
            })

            function successLocation(position){
                setupMap([position.coords.longitude, position.coords.latitude])
            }

            function errorLocation() {
                setupMap([-2.24, 53.48])
            }

            function setupMap(center){

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: center,
            zoom:15
        });

        const nav = new mapboxgl.NavigationControl();
            map.addControl(nav);

            var directions = new MapboxDirections({
                accessToken: mapboxgl.accessToken
              });
              
              map.addControl(directions, 'top-left');

         }