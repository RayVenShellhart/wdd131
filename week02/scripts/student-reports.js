const DAYS = 6;
const LIMIT = 30;
const output = document.getElementsByTagName("ul")
const options = { weekday: 'long' };
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        {
            console.log(studentReport[i]);
    }}
}

let i = 0;
while (i > studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
    i++;
}

studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

for (let key in studentReport) {
    if (studentReport[key] < LIMIT) {
        console.log(studentReport[key])

    }
        
}

const today = new Date();
for (let i = 1; i <= DAYS; i++) {
    let nextday = new Date();
    nextday.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
    item = document.createElement("li");
    item.textContent = nextdaystring;
    output[0].appendChild(item);
}

const username = "";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? 'Guest' : username;

const article = document.querySelector('article');

article.innerHTML = 'innerHtml supports <strong>HTML</strong> tags. The textContent does not';

article.style.textAlign = 'right';

article.setAttribute('class', 'active'); //articleElement.classList.add('Active');

const paragragh = document.createElement('p');

article.appendChild(paragragh);
article.append(paragragh, 'Hello World Addition!');

article.removeChild(paragragh);
article.remove();
