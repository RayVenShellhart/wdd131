const year = document.querySelector("#year")
    
const today = new Date();
const short = document.querySelector("#short");

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// const lastModified = document.lastModified;
// document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

// alert(document.lastModified);

let oLastModif = new Date(document.lastModified);

let nLastModif = Date.parse(document.lastModified);



// short.innerHTMLIntl = `Short: <p id="lastModified">${new Intl.DateTimeFormat("en-US", {dateStyle: "short"}).format(nLastModif)}</p>`


// short.innerHTML = `Short: <p id="lastModified">${new Intl.DateTimeFormat(
//     "en-US",
//     {
//         // dateStyle: "short"
//     }
// ).format(nLastModif)}</p>`;

lastModified.innerHTML = `<p id="lastModified">Last Modified: ${new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}).format(nLastModif)}</p>`;