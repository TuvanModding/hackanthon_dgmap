var map;

DG.then(function () {
  map = DG.map('map', {
    center: [51.98, 94.89],
    zoom: 13
  });

  DG.marker([51.98, 94.89]).addTo(map).bindPopup('Я попап!');
});