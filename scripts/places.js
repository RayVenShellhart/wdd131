// Time

const year = document.querySelector("#year")

const today = new Date();
const short = document.querySelector("#short");

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);

let nLastModif = Date.parse(document.lastModified);


lastModified.innerHTML = `<p id="lastModified">Last Modified: ${new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}).format(nLastModif)}</p>`;

// Windchill
// Wind Chill(T wc ​)=35.74+0.6215T air ​ −35.75V 0.16+0.4275T air ​ V 0.16
// Twc = windchill farenheight
// V = windspeed
// Tair = temp
// to round number to 0.1 = (n * 10) / 10

let temp = 47.1;
let windspeed = 15;


if (temp <= 50 && windspeed > 3) {

    function calculateWindChill(temprature, wind) {
        return Math.round((35.74 + 0.6215 * temprature - 35.75 * wind ** 0.16 + 0.4275 * temprature * wind ** 0.16) * 10) / 10
    }

    windChill.innerHTML = `<p id="windChill">WindChill: ${calculateWindChill(temp, windspeed)}°f`
}
else {
    windChill.innerHTML = `<p id="windChill">N/A`
}