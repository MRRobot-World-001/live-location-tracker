const status = document.getElementById("status");
const locationDisplay = document.getElementById("location");
const mapLink = document.getElementById("mapLink");

function updateLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const accuracy = position.coords.accuracy;

  locationDisplay.textContent = `Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ±${accuracy}m`;
  mapLink.href = `https://www.google.com/maps?q=${latitude},${longitude}`;
  mapLink.textContent = "View on Google Maps";
  status.textContent = "Live location updated!";
}

function handleError(error) {
  status.textContent = "Error getting location: " + error.message;
}

if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition(updateLocation, handleError, {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 5000
  });
} else {
  status.textContent = "Geolocation is not supported by your browser.";
}
