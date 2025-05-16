const day = document.getElementById("day");
const week = document.getElementById("week");
const month = document.getElementById("month");
const worldcup = document.getElementById("World")
const school = document.getElementById("School");
const year = document.getElementById("year");
const decade = document.getElementById("decade");
let howmonth = null
switch (new Date().getDay()) {
    case 0:
        howmonth = 31;
        break;
    case 1:
        if (new Date().getFullYear() % 4 == 0 && new Date().getFullYear() % 100 != 0 || new Date().getFullYear() % 400 == 0) {
            howmonth = 29;
        }
        else {
            howmonth = 28;
        }
        break;
    case 2:
        howmonth = 31;
        break;
    case 3:
        howmonth = 30;
        break;
    case 4:
        howmonth = 31;
        break;
    case 5:
        howmonth = 30;
        break;
    case 6:
        howmonth = 31;
        break;
    case 7:
        howmonth = 31;
        break;
    case 8:
        howmonth = 30;
        break;
    case 9:
        howmonth = 31;
        break;
    case 10:
        howmonth = 30;
        break;
    case 11:
        howmonth = 31;
        break;

}

let date = new Date();
day.innerHTML = ((24 - date.getHours()) + ":" + (60 - date.getMinutes()) + ":" + (60 - date.getSeconds())) + "<h1>Hour:Minutes:Seconds</h1>";
week.innerHTML = (7 - date.getDay()) + ":" + (24 - date.getHours()) + ":" + (60 - date.getMinutes()) + ":" + (60 - date.getSeconds()) + "<h1>Day:Hour:Minutes:Seconds</h1>";
month.innerHTML = (howmonth - date.getDate()) + ":" + (24 - date.getHours()) + ":" + (60 - date.getMinutes()) + ":" + (60 - date.getSeconds()) + "<h1>Day:Hour:Minutes:Seconds</h1>";
worldcup.innerHTML = (2 - date.getFullYear() % 4) + ":" + (5 - date.getMonth()) + ":" + (31 - date.getDate()) + ":" + (24 - date.getHours()) + ":" + (60 - date.getMinutes()) + ":" + (60 - date.getSeconds()) + "<h1>Year:Months:Day:Hour:Minutes:Seconds</h1>";
school.innerHTML = (2025 - date.getFullYear()) + ":" + (7 - date.getMonth()) + ":" + (31 - date.getDate()) + ":" + (24 - date.getHours()) + ":" + (60 - date.getMinutes()) + ":" + (60 - date.getSeconds()) + "<h1>Year:Months:Day:Hour:Minutes:Seconds</h1>";
year.innerHTML = (2025 - date.getFullYear()) + ":" + (10 - date.getMonth()) + ":" + (31 - date.getDate()) + ":" + (24 - date.getHours()) + ":" + (60 - date.getMinutes()) + ":" + (60 - date.getSeconds()) + "<h1>Year:Months:Day:Hour:Minutes:Seconds</h1>";
decade.innerHTML = (2029 - date.getFullYear()) + ":" + (10 - date.getMonth()) + ":" + (31 - date.getDate()) + ":" + (24 - date.getHours()) + ":" + (60 - date.getMinutes()) + ":" + (60 - date.getSeconds()) + "<h1>Year:Months:Day:Hour:Minutes:Seconds</h1>";

setInterval(() => {
    let date = new Date();
    day.innerHTML = ((24 - date.getHours()) + ":" + (60 - date.getMinutes()) + ":" + (60 - date.getSeconds())) + "<h1>Hour:Minutes:Seconds</h1>";
    week.innerHTML = (7 - date.getDay()) + ":" + (24 - date.getHours()) + ":" + (60 - date.getMinutes()) + ":" + (60 - date.getSeconds()) + "<h1>Day:Hour:Minutes:Seconds</h1>";
    month.innerHTML = (howmonth - date.getDate()) + ":" + (24 - date.getHours()) + ":" + (60 - date.getMinutes()) + ":" + (60 - date.getSeconds()) + "<h1>Day:Hour:Minutes:Seconds</h1>";
    worldcup.innerHTML = (2 - date.getFullYear() % 4) + ":" + (5 - date.getMonth()) + ":" + (31 - date.getDate()) + ":" + (24 - date.getHours()) + ":" + (60 - date.getMinutes()) + ":" + (60 - date.getSeconds()) + "<h1>Year:Months:Day:Hour:Minutes:Seconds</h1>";
    school.innerHTML = (2025 - date.getFullYear()) + ":" + (7 - date.getMonth()) + ":" + (31 - date.getDate()) + ":" + (24 - date.getHours()) + ":" + (60 - date.getMinutes()) + ":" + (60 - date.getSeconds()) + "<h1>Year:Months:Day:Hour:Minutes:Seconds</h1>";
    year.innerHTML = (2025 - date.getFullYear()) + ":" + (10 - date.getMonth()) + ":" + (31 - date.getDate()) + ":" + (24 - date.getHours()) + ":" + (60 - date.getMinutes()) + ":" + (60 - date.getSeconds()) + "<h1>Year:Months:Day:Hour:Minutes:Seconds</h1>";
    decade.innerHTML = (2029 - date.getFullYear()) + ":" + (10 - date.getMonth()) + ":" + (31 - date.getDate()) + ":" + (24 - date.getHours()) + ":" + (60 - date.getMinutes()) + ":" + (60 - date.getSeconds()) + "<h1>Year:Months:Day:Hour:Minutes:Seconds</h1>";
}

    , 1000);
