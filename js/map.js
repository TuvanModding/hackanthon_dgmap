let map;

const object = [
  {
    name: "Кызыл",
    coords: {
      latitude: 51,
      longitude: 94
    }
  },
  {
    name: "Туран",
    coords: {
      latitude: 52,
      longitude: 93
    }
  },
  {name: 
    "Ак-Довурак",
    coords: {
      latitude: 53,
      longitude: 90
    }
  },
  {
    name: "Шагонар",
    coords: {
      latitude: 53.54,
      longitude: 91
    }
  },
  {
    name: "Чадан",
    coords: {
      latitude: 52.5,
      longitude: 90.54
    }
  }
]
const cities = []

DG.then(async function () {
  map = DG.map('map', {
    center: [51.98, 94.89],
    zoom: 13
  });

  object.forEach(async (item) => {
    const someMarker = await fetchData(item.coords.latitude, item.coords.longitude)

    DG.marker([someMarker.latitude, someMarker.longitude]).addTo(map).bindPopup(
      `<div>
        <ul>
        географические координаты
        <li>
          ${item.coords.latitude}
        </li>
        <li>
          ${item.coords.longitude}
        </li>
        </ul>
      </div>`
      )
  })

  DG.marker([51.98, 94.89]).addTo(map).bindPopup('Я попап!');
});
