var nightModeOn = false;

function nightMode() {
    map = new google.maps.Map(
    document.getElementById("map_canvas"), 
    {
        center: {lat: userPos[0], lng: userPos[1]},
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.business',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
        ]
    });
}

function dayMode() {

    map = new google.maps.Map(
    
    document.getElementById("map_canvas"), 
    {
        center: {lat: userPos[0], lng: userPos[1]},
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles: [
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ]
    });
}

function openRoute(element){
  if(!tester)
    return;
  childrenList = $("#rightPanel").children();
  
  var eleNumber = element.id[5];
  
  for (var i = 1; i < childrenList.length; i++) {
    if(i == eleNumber){
      continue;
    }
    else{
      $(childrenList[i]).fadeOut("slow");  
      $(childrenList[i]).hide();
    }
  }
  routeEleList = $(element).children();
  for (var i = 0; i < 3; i++) {
    $(routeEleList[i]).hide();
  }

  $($(element).children()[3]).fadeIn("fast", function() {
    $(element).height(450);
  });
  tester = false;
}

function closeRoute(element){

  childrenList = $("#rightPanel").children();

  var eleNumber = $($(element).parent()).attr('id')[5];
  
  for (var i = 1; i < childrenList.length; i++) {
    if(i == eleNumber){
      continue;
    }
    else{
      $(childrenList[i]).fadeIn("slow");  
      $(childrenList[i]).show();
    }
  }
  routeEleList = $($(element).parent()).children();
  for (var i = 0; i < 3; i++) {
    $(routeEleList[i]).show();
  }

  $(element).fadeOut("fast", function() {
    $($(element).parent()).height(44);
  });
  setTimeout(function(){
    tester = true;
}, 1000);
}

function toggleNightModeShift(){
  $("#inputSlide").click();
  if(!nightModeOn){
    nightMode(); 
    $("#inputSlide").prop('checked', true);
  }
  else{
    dayMode();
    $("#inputSlide").prop('checked', false);
  }
  nightModeOn = !nightModeOn;
}

function populateData(data){
  for (var i = 0; i < data.length; i++) {
    console.log(data[i].M);
  }
}