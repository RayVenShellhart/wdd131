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

// hamburger

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// products

const products = [
    {
        name: "Deime Air Fryer",
        stars: 4.5,
        price: 39.99,
        imageUrl: "images/deime.webp",
        link: "https://www.amazon.com/Airfryer-Digital-Compact-Nonstick-Dishwasher/dp/B0DD12R7MY/ref=sr_1_67?dib=eyJ2IjoiMSJ9.E9_1o3mxK8DmR-VbVahSOERkYga3gaHueKM88Ue2MaVgp4a1q_wirQ-TkLscbXdqCUbjtao9kGbJuavpESiZ81NoXhEU0FnyJ3hKpZZiL6dEmI01I7-Oje6MnW2iuupx9G0O5JAK7qdRyp8GaWWUgXkx3P8TaFBWDzboASbD_Bmr9KeM43B-H02USNdjNoHoaWghOneGUhwXZc8NC7zGqwyeJ1rmJJEmd65lFEHRGsxWgtUQWuJA6fP-kO_mZionu2_eBDSiUUyI-USyUmFKLhPHq-nGzyh5hAx_QY9mwRA.VjZWqOV2AxXD4gqde0aBPvI8IEuO4l7X3zdIJwCZ_FE&dib_tag=se&keywords=airfryers&qid=1744316893&s=home-garden&sr=1-67&xpid=KzwbyAcBzDF-j&th=1"
    },

    {
        name: "BLACK+DECKERCrisp 'N Bake Air Fry",
        stars: 4.3,
        price: 39.96,
        imageUrl: "images/decker.webp",
        link: "https://www.amazon.com/BLACK-DECKER-TO1787SS-Functions-Stainless/dp/B0CKLXZRMC/ref=sr_1_27?dib=eyJ2IjoiMSJ9.JvIQTiQYIa-7vH5--3jg96PTpPQcmrf9V16IHsmG2BUskF_tEUGKI5iX5PquVrz6kK9AMSjSyn_oazzmM3rU5iHtKJ0kmujmnUr9WBoJaFpDkYxCtiFh52TZabGL7hRAmCr848IBeA6sBhdTiFmzdn29bNApkrFOE7kXO0LJmx0kiW8Y5GROuGAalkVpJ_ZaQIgX91UFd-XA-TPcHU3gG_q3GGv0Zi4pfgDpGHVLodcjuPIIsbzja0FERNb1ePIZabROP5iWww0nIM2a79X6HPXrli5Jm9y1kXEQrF_AOMs.9Fo06d3n47O4ja3yYKVias_pm003PngoKX6bBKC7OS0&dib_tag=se&keywords=airfryers&qid=1744316054&s=home-garden&sr=1-27&th=1"
    },

    {
        name: "InstantVortex Multi-Use Air Fryer",
        stars: 4.4,
        price: 149.99,
        imageUrl: "images/instant.webp",
        link: "https://www.amazon.com/Instant-Vortex-Plus-Rotisserie-10/dp/B07VM28XTR/ref=sr_1_29?dib=eyJ2IjoiMSJ9.JvIQTiQYIa-7vH5--3jg96PTpPQcmrf9V16IHsmG2BUskF_tEUGKI5iX5PquVrz6kK9AMSjSyn_oazzmM3rU5iHtKJ0kmujmnUr9WBoJaFpDkYxCtiFh52TZabGL7hRAmCr848IBeA6sBhdTiFmzdn29bNApkrFOE7kXO0LJmx0kiW8Y5GROuGAalkVpJ_ZaQIgX91UFd-XA-TPcHU3gG_q3GGv0Zi4pfgDpGHVLodcjuPIIsbzja0FERNb1ePIZabROP5iWww0nIM2a79X6HPXrli5Jm9y1kXEQrF_AOMs.9Fo06d3n47O4ja3yYKVias_pm003PngoKX6bBKC7OS0&dib_tag=se&keywords=airfryers&qid=1744316054&s=home-garden&sr=1-29&th=1"
    },
    
    {
        name: "CRUX x Marshmello Digital Air Fryer",
        stars: 4.4,
        price: 49.99,
        imageUrl: "images/crux.webp",
        link: "https://www.amazon.com/Marshmello-TurboCrisp-Technology-Temperature-Programmable/dp/B0C188CYLW/ref=sr_1_53?dib=eyJ2IjoiMSJ9.E9_1o3mxK8DmR-VbVahSOERkYga3gaHueKM88Ue2MaVgp4a1q_wirQ-TkLscbXdqCUbjtao9kGbJuavpESiZ81NoXhEU0FnyJ3hKpZZiL6dEmI01I7-Oje6MnW2iuupx9G0O5JAK7qdRyp8GaWWUgXkx3P8TaFBWDzboASbD_Bmr9KeM43B-H02USNdjNoHoaWghOneGUhwXZc8NC7zGqwyeJ1rmJJEmd65lFEHRGsxWgtUQWuJA6fP-kO_mZionu2_eBDSiUUyI-USyUmFKLhPHq-nGzyh5hAx_QY9mwRA.VjZWqOV2AxXD4gqde0aBPvI8IEuO4l7X3zdIJwCZ_FE&dib_tag=se&keywords=airfryers&qid=1744316893&s=home-garden&sr=1-53&xpid=KzwbyAcBzDF-j&th=1"
    },

    {
        name: "bella Slim Air Fryer",
        stars: 4.5,
        price: 49.99,
        imageUrl: "images/bella.webp",
        link: "https://www.amazon.com/Fits-anywhereTM-Kitchenware-EverGoodTM-Adjustable-Temperature/dp/B0CYJDVT31/ref=sr_1_14?dib=eyJ2IjoiMSJ9.JvIQTiQYIa-7vH5--3jg96PTpPQcmrf9V16IHsmG2BUskF_tEUGKI5iX5PquVrz6kK9AMSjSyn_oazzmM3rU5iHtKJ0kmujmnUr9WBoJaFpDkYxCtiFh52TZabGL7hRAmCr848IBeA6sBhdTiFmzdn29bNApkrFOE7kXO0LJmx0kiW8Y5GROuGAalkVpJ_ZaQIgX91UFd-XA-TPcHU3gG_q3GGv0Zi4pfgDpGHVLodcjuPIIsbzja0FERNb1ePIZabROP5iWww0nIM2a79X6HPXrli5Jm9y1kXEQrF_AOMs.9Fo06d3n47O4ja3yYKVias_pm003PngoKX6bBKC7OS0&dib_tag=se&keywords=airfryers&qid=1744316054&s=home-garden&sr=1-14&th=1"
    },

    {
        name: "Ninja Air Fryer",
        stars: 4.6,
        price: 219.99,
        imageUrl: "images/ninja.webp",
        link: "https://www.amazon.com/Ninja-DoubleStack-2-Basket-Technology-SL201/dp/B0D4RDV53M/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.JvIQTiQYIa-7vH5--3jg96PTpPQcmrf9V16IHsmG2BUskF_tEUGKI5iX5PquVrz6D35wjhQnelTgDPoq2RUzFh1uiHhyf92Q7IjejMFZGDBMtG4rZKsvyP6iOuQDjt-EspvzFy_gaRoP4-kQmPtcrRX2unGKVP9eqKmpw7amSdYKvB1dKSICdUCv9lStQBgxQIgX91UFd-XA-TPcHU3gG30fMBWwJ1KtgGxp6OCSNFc.6ZlCv-_UMWWHOcDYIZOtTkyuRV02UdpPCl2FoADZGag&dib_tag=se&keywords=airfryers&qid=1744316015&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
    },

    {
        name: "COSORI Air Fryer",
        stars: 4.8,
        price: 99.99,
        imageUrl: "images/cosori.webp",
        link: "https://www.amazon.com/COSORI-Compact-Recipes-Dehydrate-Dishwasher/dp/B0C33CHG99/ref=sr_1_3?dib=eyJ2IjoiMSJ9.JvIQTiQYIa-7vH5--3jg96PTpPQcmrf9V16IHsmG2BUskF_tEUGKI5iX5PquVrz6D35wjhQnelTgDPoq2RUzFh1uiHhyf92Q7IjejMFZGDBMtG4rZKsvyP6iOuQDjt-EspvzFy_gaRoP4-kQmPtcrRX2unGKVP9eqKmpw7amSdYKvB1dKSICdUCv9lStQBgxQIgX91UFd-XA-TPcHU3gG30fMBWwJ1KtgGxp6OCSNFc.6ZlCv-_UMWWHOcDYIZOtTkyuRV02UdpPCl2FoADZGag&dib_tag=se&keywords=airfryers&qid=1744316015&sr=8-3&th=1"
    },

    {
        name: "Emeril Lagasse Air Fryer",
        stars: 4.5,
        price: 192.36,
        imageUrl: "images/Emeril.webp",
        link: "https://www.amazon.com/Emeril-Lagasse-Convection-Toaster-Stainless/dp/B09B7SB46R/ref=sr_1_2_sspa?dib=eyJ2IjoiMSJ9.JvIQTiQYIa-7vH5--3jg96PTpPQcmrf9V16IHsmG2BUskF_tEUGKI5iX5PquVrz6D35wjhQnelTgDPoq2RUzFh1uiHhyf92Q7IjejMFZGDBMtG4rZKsvyP6iOuQDjt-EspvzFy_gaRoP4-kQmPtcrRX2unGKVP9eqKmpw7amSdYKvB1dKSICdUCv9lStQBgxQIgX91UFd-XA-TPcHU3gG30fMBWwJ1KtgGxp6OCSNFc.6ZlCv-_UMWWHOcDYIZOtTkyuRV02UdpPCl2FoADZGag&dib_tag=se&keywords=airfryers&qid=1744316015&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
    },

    {
        name: "Chefman Mini Air Fryer",
        stars: 4.5,
        price: 44.99,
        imageUrl: "images/chefman.webp",
        link: 'https://www.amazon.com/CHEFMAN-Mini-Air-Fryer-Space-Saving/dp/B0DC11YH4J/ref=sr_1_9?dib=eyJ2IjoiMSJ9.JvIQTiQYIa-7vH5--3jg96PTpPQcmrf9V16IHsmG2BUskF_tEUGKI5iX5PquVrz6kK9AMSjSyn_oazzmM3rU5iHtKJ0kmujmnUr9WBoJaFpDkYxCtiFh52TZabGL7hRAmCr848IBeA6sBhdTiFmzdn29bNApkrFOE7kXO0LJmx0kiW8Y5GROuGAalkVpJ_ZaQIgX91UFd-XA-TPcHU3gG_q3GGv0Zi4pfgDpGHVLodcjuPIIsbzja0FERNb1ePIZabROP5iWww0nIM2a79X6HPXrli5Jm9y1kXEQrF_AOMs.9Fo06d3n47O4ja3yYKVias_pm003PngoKX6bBKC7OS0&dib_tag=se&keywords=airfryers&qid=1744316054&s=home-garden&sr=1-9&th=1'
    }

    

];

const All = document.querySelector("#all");
const AirFryerAbove = document.querySelector("#above");
const AirFryerBelow = document.querySelector("#below");
const RatingAbove = document.querySelector("#four-above");
const RatingBelow = document.querySelector("#four-below");

AirfryerCard(products)

All.addEventListener("click", () => {
    AirfryerCard(products.filter(products => products))
})

AirFryerAbove.addEventListener("click", () => {
    AirfryerCard(products.filter(products => products.price >= 100))
});

AirFryerBelow.addEventListener("click", () => {
    AirfryerCard(products.filter(products => products.price < 100))
});

RatingAbove.addEventListener("click", () => {
    AirfryerCard(products.filter(products => products.stars >= 4.5))
});

RatingBelow.addEventListener("click", () => {
    AirfryerCard(products.filter(products => products.stars < 4.5))
});

function AirfryerCard(filteredProducts) {
    document.querySelector(".products").innerHTML = "";
    filteredProducts.forEach(products => {
        let card = document.createElement("section");
        let productName = document.createElement("h3");
        let productStars = document.createElement("p");
        let productPrice = document.createElement("P");
        let img = document.createElement("img")
        let productLink = document.createElement("p")
        
        productName.textContent = products.name;
        productStars.innerHTML = `<span class="label">Rating:</span> ${products.stars}`;
        productPrice.innerHTML = `<span class="label">Price:</span> ${products.price}`;
        productLink.innerHTML = `<a href="${products.link}">Link</a>`;
        img.setAttribute("src", products.imageUrl);
        img.setAttribute("alt", `${products.imageUrl}`);
        img.setAttribute("loading", "lazy");  
        img.setAttribute("width", "400px");
        img.setAttribute("height", "auto");


        

        card.appendChild(productName);
        card.appendChild(productStars);
        card.appendChild(productPrice);
        card.appendChild(img);
        card.appendChild(productLink);


        document.querySelector(".products").appendChild(card)
    })
}