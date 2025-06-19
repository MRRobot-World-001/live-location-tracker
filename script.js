// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9WhKMPzVQWzwAs-1zVhJl0G-Dtz7UOL8",
  authDomain: "livelocationtracker-15014.firebaseapp.com",
  databaseURL: "https://livelocationtracker-15014-default-rtdb.firebaseio.com",
  projectId: "livelocationtracker-15014",
  storageBucket: "livelocationtracker-15014.firebasestorage.app",
  messagingSenderId: "707582072085",
  appId: "1:707582072085:web:afdafad4e49b3e2a3ec51c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


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
