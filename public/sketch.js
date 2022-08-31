let lat, lon;
const button = document.getElementById("submit");
const popapOne = document.querySelector('.popap__one');
const popapTwo = document.querySelector('.popap__two');


button.addEventListener("click", async (event) => {
const names = document.getElementById('names').value;

    if(names.search(/\d/) != -1 ){
        console.log('Error');
        popapTwo.style.display = "flex";
        return false;
    } else {
        popapOne.style.display = "flex";
    }

    const data = { lat, lon, names};
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };


const response = await fetch("/api", options);
const json = await response.json();
    console.log(json);
});

if ("geolocation" in navigator) {
console.log("geolocation available");
navigator.geolocation.getCurrentPosition(async (position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;

    document.getElementById("latitude").textContent = lat;
    document.getElementById("longitude").textContent = lon;
    
});
} else {
    console.log("geolocation not available");
}

