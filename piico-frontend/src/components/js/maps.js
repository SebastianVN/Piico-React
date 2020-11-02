/* ------------- map amchart 1 start ------------ */

/**
 * SVG path for target icon
 */
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

/**
 * SVG path for plane icon
 */
var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

/**
 * Create the map
 */
var map = AmCharts.makeChart("mapamchart1", {
    "type": "map",
    "theme": "light",

    "dataProvider": {
        "map": "worldLow",
        "zoomLevel": 3.5,
        "zoomLongitude": -55,
        "zoomLatitude": 42,

        "lines": [{
            "id": "line1",
            "arc": -0.85,
            "alpha": 0.3,
            "latitudes": [48.8567, 43.8163, 34.3, 23],
            "longitudes": [2.3510, -79.4287, -118.15, -82]
        }, {
            "id": "line2",
            "alpha": 0,
            "color": "#000000",
            "latitudes": [48.8567, 43.8163, 34.3, 23],
            "longitudes": [2.3510, -79.4287, -118.15, -82]
        }],
        "images": [{
            "svgPath": targetSVG,
            "title": "Paris",
            "latitude": 48.8567,
            "longitude": 2.3510
        }, {
            "svgPath": targetSVG,
            "title": "Toronto",
            "latitude": 43.8163,
            "longitude": -79.4287
        }, {
            "svgPath": targetSVG,
            "title": "Los Angeles",
            "latitude": 34.3,
            "longitude": -118.15
        }, {
            "svgPath": targetSVG,
            "title": "Havana",
            "latitude": 23,
            "longitude": -82
        }, {
            "svgPath": planeSVG,
            "positionOnLine": 0,
            "color": "#000000",
            "alpha": 0.1,
            "animateAlongLine": true,
            "lineId": "line2",
            "flipDirection": true,
            "loop": true,
            "scale": 0.03,
            "positionScale": 1.3
        }, {
            "svgPath": planeSVG,
            "positionOnLine": 0,
            "color": "#585869",
            "animateAlongLine": true,
            "lineId": "line1",
            "flipDirection": true,
            "loop": true,
            "scale": 0.03,
            "positionScale": 1.8
        }]
    },

    "areasSettings": {
        "unlistedAreasColor": "#8dd9ef"
    },

    "imagesSettings": {
        "color": "#585869",
        "rollOverColor": "#585869",
        "selectedColor": "#585869",
        "pauseDuration": 0.2,
        "animationDuration": 2.5,
        "adjustAnimationSpeed": true
    },

    "linesSettings": {
        "color": "#585869",
        "alpha": 0.4
    },

    "export": {
        "enabled": false
    }

});

/* ------------- map amchart 1 END ------------ */

/* ------------- map amchart 2 start ------------ */

// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
// svg path for plane icon
var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";

var map = AmCharts.makeChart("mapamchart2", {
    "type": "map",
    "theme": "none",
    "dataProvider": {
        "map": "worldLow",
        "zoomLevel": 3.5,
        "zoomLongitude": -20.1341,
        "zoomLatitude": 49.1712,

        "lines": [{
            "latitudes": [51.5002, 50.4422],
            "longitudes": [-0.1262, 30.5367]
        }, {
            "latitudes": [51.5002, 46.9480],
            "longitudes": [-0.1262, 7.4481]
        }, {
            "latitudes": [51.5002, 59.3328],
            "longitudes": [-0.1262, 18.0645]
        }, {
            "latitudes": [51.5002, 40.4167],
            "longitudes": [-0.1262, -3.7033]
        }, {
            "latitudes": [51.5002, 46.0514],
            "longitudes": [-0.1262, 14.5060]
        }, {
            "latitudes": [51.5002, 48.2116],
            "longitudes": [-0.1262, 17.1547]
        }, {
            "latitudes": [51.5002, 44.8048],
            "longitudes": [-0.1262, 20.4781]
        }, {
            "latitudes": [51.5002, 55.7558],
            "longitudes": [-0.1262, 37.6176]
        }, {
            "latitudes": [51.5002, 38.7072],
            "longitudes": [-0.1262, -9.1355]
        }, {
            "latitudes": [51.5002, 54.6896],
            "longitudes": [-0.1262, 25.2799]
        }, {
            "latitudes": [51.5002, 64.1353],
            "longitudes": [-0.1262, -21.8952]
        }, {
            "latitudes": [51.5002, 40.4300],
            "longitudes": [-0.1262, -74.0000]
        }],
        "images": [{
            "id": "london",
            "svgPath": targetSVG,
            "title": "London",
            "latitude": 51.5002,
            "longitude": -0.1262,
            "scale": 1
        }, {
            "svgPath": targetSVG,
            "title": "Brussels",
            "latitude": 50.8371,
            "longitude": 4.3676,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Prague",
            "latitude": 50.0878,
            "longitude": 14.4205,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Athens",
            "latitude": 37.9792,
            "longitude": 23.7166,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Reykjavik",
            "latitude": 64.1353,
            "longitude": -21.8952,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Dublin",
            "latitude": 53.3441,
            "longitude": -6.2675,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Oslo",
            "latitude": 59.9138,
            "longitude": 10.7387,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Lisbon",
            "latitude": 38.7072,
            "longitude": -9.1355,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Moscow",
            "latitude": 55.7558,
            "longitude": 37.6176,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Belgrade",
            "latitude": 44.8048,
            "longitude": 20.4781,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Bratislava",
            "latitude": 48.2116,
            "longitude": 17.1547,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Ljubljana",
            "latitude": 46.0514,
            "longitude": 14.5060,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Madrid",
            "latitude": 40.4167,
            "longitude": -3.7033,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Stockholm",
            "latitude": 59.3328,
            "longitude": 18.0645,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Bern",
            "latitude": 46.9480,
            "longitude": 7.4481,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Kiev",
            "latitude": 50.4422,
            "longitude": 30.5367,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "Paris",
            "latitude": 48.8567,
            "longitude": 2.3510,
            "scale": 0.5
        }, {
            "svgPath": targetSVG,
            "title": "New York",
            "latitude": 40.43,
            "longitude": -74,
            "scale": 0.5
        }]
    },

    "areasSettings": {
        "unlistedAreasColor": "#D1F0F9",
        "unlistedAreasAlpha": 0.9
    },

    "imagesSettings": {
        "color": "#815EF6",
        "rollOverColor": "#815EF6",
        "selectedColor": "#815EF6"
    },

    "linesSettings": {
        "arc": -0.7, // this makes lines curved. Use value from -1 to 1
        "arrow": "middle",
        "color": "#815EF6",
        "alpha": 0.4,
        "arrowAlpha": 1,
        "arrowSize": 4
    },
    "zoomControl": {
        "gridHeight": 100,
        "draggerAlpha": 1,
        "gridAlpha": 0.2
    },

    "backgroundZoomsToTop": true,
    "linesAboveImages": true,

    "export": {
        "enabled": false
    }
});

/* ------------- map amchart 2 END ------------ */

/* ------------- map amchart 3 start ------------ */
var map = AmCharts.makeChart("mapamchart3", {

    "type": "map",
    "theme": "light",
    "projection": "miller",

    "dataProvider": {
        "map": "worldLow",
        "getAreasFromMap": true
    },
    "areasSettings": {
        "autoZoom": true,
        "selectedColor": "#637CE3"
    },
    "smallMap": {},
    "export": {
        "enabled": true,
        "position": "bottom-right"
    },
    "export": {
        "enabled": false
    }
});

/* ------------- map amchart 3 END ------------ */

/* ------------- map amchart 4 start ------------ */
var map = AmCharts.makeChart("mapamchart4", {

    "type": "map",
    "theme": "light",

    "dragMap": false,
    "projection": "eckert3",

    "areasSettings": {
        "autoZoom": false,
        "rollOverOutlineColor": "#000000",
        "selectedColor": "#000000",
        "outlineAlpha": 1,
        "outlineColor": "#FFFFFF",
        "outlineThickness": 1,
        "color": "#000000"
    },

    "dataProvider": {
        "map": "continentsLow",

        "areas": [{
            "id": "africa",
            "title": "Africa",
            "pattern": {
                "url": "https://www.amcharts.com/lib/3/patterns/black/pattern1.png",
                "width": 4,
                "height": 4
            }
        }, {
            "id": "asia",
            "title": "Asia",
            "pattern": {
                "url": "https://www.amcharts.com/lib/3/patterns/black/pattern2.png",
                "width": 4,
                "height": 4
            }
        }, {
            "id": "australia",
            "title": "Australia",
            "pattern": {
                "url": "https://www.amcharts.com/lib/3/patterns/black/pattern3.png",
                "width": 4,
                "height": 4,
                "color": "#BBBB00"
            }
        }, {
            "id": "europe",
            "title": "Europe",
            "pattern": {
                "url": "https://www.amcharts.com/lib/3/patterns/black/pattern4.png",
                "width": 4,
                "height": 4
            }
        }, {
            "id": "north_america",
            "title": "North America",
            "pattern": {
                "url": "https://www.amcharts.com/lib/3/patterns/black/pattern5.png",
                "width": 4,
                "height": 4
            }
        }, {
            "id": "south_america",
            "title": "South America",
            "pattern": {
                "url": "https://www.amcharts.com/lib/3/patterns/black/pattern6.png",
                "width": 4,
                "height": 4
            }
        }]
    },
    "zoomControl": {
        "panControlEnabled": false,
        "zoomControlEnabled": false,
        "homeButtonEnabled": false
    },
    "export": {
        "enabled": false
    }

});

/* ------------- map amchart 4 END ------------ */

/* ------------- map amchart 5 start ------------ */
/**
 * Define SVG path for target icon
 */
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

/**
 * Create the map
 */
var map = AmCharts.makeChart("mapamchart5", {
    "type": "map",
    "projection": "winkel3",
    "theme": "light",
    "imagesSettings": {
        "rollOverColor": "#089282",
        "rollOverScale": 3,
        "selectedScale": 3,
        "selectedColor": "#089282",
        "color": "#13564e"
    },

    "areasSettings": {
        "unlistedAreasColor": "#15A892",
        "outlineThickness": 0.1
    },

    "dataProvider": {
        "map": "worldLow",
        "images": [{
            "svgPath": targetSVG,
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "San Buenaventura Bogotá - Estación 1",
            "latitude": 4.6473,
            "longitude": -74.0962
        }, {
            "svgPath": targetSVG,
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "San Buenaventura Medellín - Estación 2",
            "latitude": 6.2518401,
            "longitude": -75.563591
        }, {
            "svgPath": targetSVG,
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "San Buenaventura Cali - Estación 3",
            "latitude": 3.42158,
            "longitude": -76.5205
        }]
    },
    "export": {
        "enabled": false
    }
});

/* ------------- map amchart 5 END ------------ */

/* ------------- map amchart 6 start ------------ */

/**
 * Create a map
 */
var map = AmCharts.makeChart("mapamchart6", {
    "type": "map",
    "theme": "light",
    "projection": "winkel3",

    /**
     * Data Provider
     * The images contains pie chart information
     * The handler for `positionChanged` event will take care
     * of creating external elements, position them and create
     * Pie chart instances in them
     */
    "dataProvider": {
        "map": "continentsLow",
        "images": [{
            "title": "North America",
            "latitude": 39.563353,
            "longitude": -99.316406,
            "width": 150,
            "height": 150,
            "pie": {
                "type": "pie",
                "pullOutRadius": 0,
                "labelRadius": 0,
                "dataProvider": [{
                    "category": "Category #1",
                    "value": 1200
                }, {
                    "category": "Category #2",
                    "value": 500
                }, {
                    "category": "Category #3",
                    "value": 765
                }, {
                    "category": "Category #4",
                    "value": 260
                }],
                "labelText": "[[value]]%",
                "valueField": "value",
                "titleField": "category"
            }
        }, {
            "title": "Europe",
            "latitude": 50.896104,
            "longitude": 19.160156,
            "width": 200,
            "height": 200,
            "pie": {
                "type": "pie",
                "pullOutRadius": 0,
                "labelRadius": 0,
                "radius": "10%",
                "dataProvider": [{
                    "category": "Category #1",
                    "value": 200
                }, {
                    "category": "Category #2",
                    "value": 600
                }, {
                    "category": "Category #3",
                    "value": 350
                }],
                "labelText": "",
                "valueField": "value",
                "titleField": "category"
            }
        }, {
            "title": "Asia",
            "latitude": 47.212106,
            "longitude": 103.183594,
            "width": 200,
            "height": 200,
            "pie": {
                "type": "pie",
                "pullOutRadius": 0,
                "labelRadius": 0,
                "radius": "10%",
                "dataProvider": [{
                    "category": "Category #1",
                    "value": 352
                }, {
                    "category": "Category #2",
                    "value": 266
                }, {
                    "category": "Category #3",
                    "value": 512
                }, {
                    "category": "Category #4",
                    "value": 199
                }],
                "labelText": "",
                "valueField": "value",
                "titleField": "category"
            }
        }, {
            "title": "Africa",
            "latitude": 11.081385,
            "longitude": 21.621094,
            "width": 200,
            "height": 200,
            "pie": {
                "type": "pie",
                "pullOutRadius": 0,
                "labelRadius": 0,
                "radius": "10%",
                "dataProvider": [{
                    "category": "Category #1",
                    "value": 200
                }, {
                    "category": "Category #2",
                    "value": 300
                }, {
                    "category": "Category #3",
                    "value": 599
                }, {
                    "category": "Category #4",
                    "value": 512
                }],
                "labelText": "",
                "valueField": "value",
                "titleField": "category"
            }
        }]
    },

    /**
     * Add event to execute when the map is zoomed/moved
     * It also is executed when the map first loads
     */
    "listeners": [{
        "event": "positionChanged",
        "method": updateCustomMarkers
    }]
});

/**
 * Creates and positions custom markers (pie charts)
 */
function updateCustomMarkers(event) {
    // get map object
    var map = event.chart;

    // go through all of the images
    for (var x = 0; x < map.dataProvider.images.length; x++) {

        // get MapImage object
        var image = map.dataProvider.images[x];

        // Is it a Pie?
        if (image.pie === undefined) {
            continue;
        }

        // create id
        if (image.id === undefined) {
            image.id = "amcharts_pie_" + x;
        }
        // Add theme
        if ("undefined" == typeof image.pie.theme) {
            image.pie.theme = map.theme;
        }

        // check if it has corresponding HTML element
        if ("undefined" == typeof image.externalElement) {
            image.externalElement = createCustomMarker(image);
        }

        // reposition the element accoridng to coordinates
        var xy = map.coordinatesToStageXY(image.longitude, image.latitude);
        image.externalElement.style.top = xy.y + "px";
        image.externalElement.style.left = xy.x + "px";
        image.externalElement.style.marginTop = Math.round(image.height / -2) + "px";
        image.externalElement.style.marginLeft = Math.round(image.width / -2) + "px";
    }
}

/**
 * Creates a custom map marker - a div for container and a
 * pie chart in it
 */
function createCustomMarker(image) {

    // Create chart container
    var holder = document.createElement("div");
    holder.id = image.id;
    holder.title = image.title;
    holder.style.position = "absolute";
    holder.style.width = image.width + "px";
    holder.style.height = image.height + "px";

    // Append the chart container to the map container
    image.chart.chartDiv.appendChild(holder);

    // Create a pie chart
    var chart = AmCharts.makeChart(image.id, image.pie);

    return holder;
}

/* ------------- map amchart 6 END ------------ */

/* ------------- map amchart 7 start ------------ */
var map = AmCharts.makeChart("seomap", {
    "type": "map",
    "theme": "light",
    "projection": "miller",

    "imagesSettings": {
        "rollOverColor": "#089282",
        "rollOverScale": 3,
        "selectedScale": 3,
        "selectedColor": "#089282",
        "color": "#13564e"
    },

    "areasSettings": {
        "unlistedAreasColor": "#15A892"
    },

    "dataProvider": {
        "map": "worldLow",
        "images": [{
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Brussels",
            "latitude": 50.8371,
            "longitude": 4.3676
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Copenhagen",
            "latitude": 55.6763,
            "longitude": 12.5681
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Paris",
            "latitude": 48.8567,
            "longitude": 2.3510
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Reykjavik",
            "latitude": 64.1353,
            "longitude": -21.8952
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Moscow",
            "latitude": 55.7558,
            "longitude": 37.6176
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Madrid",
            "latitude": 40.4167,
            "longitude": -3.7033
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "London",
            "latitude": 51.5002,
            "longitude": -0.1262,
            "url": "http://www.google.co.uk"
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Peking",
            "latitude": 39.9056,
            "longitude": 116.3958
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "New Delhi",
            "latitude": 28.6353,
            "longitude": 77.2250
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Tokyo",
            "latitude": 35.6785,
            "longitude": 139.6823,
            "url": "http://www.google.co.jp"
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Ankara",
            "latitude": 39.9439,
            "longitude": 32.8560
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Buenos Aires",
            "latitude": -34.6118,
            "longitude": -58.4173
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Brasilia",
            "latitude": -15.7801,
            "longitude": -47.9292
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Ottawa",
            "latitude": 45.4235,
            "longitude": -75.6979
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Washington",
            "latitude": 38.8921,
            "longitude": -77.0241
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Kinshasa",
            "latitude": -4.3369,
            "longitude": 15.3271
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Cairo",
            "latitude": 30.0571,
            "longitude": 31.2272
        }, {
            "zoomLevel": 5,
            "scale": 0.5,
            "title": "Pretoria",
            "latitude": -25.7463,
            "longitude": 28.1876
        }]
    }
});

// add events to recalculate map position when the map is moved or zoomed
map.addListener("positionChanged", updateCustomMarkers);

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers(event) {
    // get map object
    var map = event.chart;

    // go through all of the images
    for (var x in map.dataProvider.images) {
        // get MapImage object
        var image = map.dataProvider.images[x];

        // check if it has corresponding HTML element
        if ('undefined' == typeof image.externalElement)
            image.externalElement = createCustomMarker(image);

        // reposition the element accoridng to coordinates
        var xy = map.coordinatesToStageXY(image.longitude, image.latitude);
        image.externalElement.style.top = xy.y + 'px';
        image.externalElement.style.left = xy.x + 'px';
    }
}

// this function creates and returns a new marker element
function createCustomMarker(image) {
    // create holder
    var holder = document.createElement('div');
    holder.className = 'map-marker';
    holder.title = image.title;
    holder.style.position = 'absolute';

    // maybe add a link to it?
    if (undefined != image.url) {
        holder.onclick = function() {
            window.location.href = image.url;
        };
        holder.className += ' map-clickable';
    }

    // create dot
    var dot = document.createElement('div');
    dot.className = 'dot';
    holder.appendChild(dot);

    // create pulse
    var pulse = document.createElement('div');
    pulse.className = 'pulse';
    holder.appendChild(pulse);

    // append the marker to the map container
    image.chart.chartDiv.appendChild(holder);

    return holder;
}
/* ------------- map amchart 7 END ------------ */