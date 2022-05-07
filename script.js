const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoia2FyYW5iaGFza2FyIiwiYSI6ImNsMWVzbnpsNjAxamgzY3F1dzgxOG1vajIifQ.frmPgyeIuzdQhzyNxvrECg";

function setLocation(centerPostion) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: centerPostion, // starting position [lng, lat]
    zoom: 15, // starting zoom
  });
  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    "top-left"
  );
}
navigator.geolocation.getCurrentPosition(success, error, {
  enableHighAccuracy: true,
});

function success(position) {
  setLocation([position.coords.longitude, position.coords.latitude]);
}
function error() {
  setLocation([-2.24, 53.48]);
  console.log("error");
}
