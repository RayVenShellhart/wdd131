// form.js was clashing with the html so I had to give review.html its own js.
// review confirmatiom

const visitsDisplay = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 1;

if (numVisits !== 1) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first review. YAY!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

// basic footer content

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