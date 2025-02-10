let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
let clock = document.getElementById("clock");
let dayitems = document.getElementById("dayitems");


let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayList = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function dayItemGenerate() {
    let timeData = new Date();
    let dateList = timeData.toString().split(" ");

    if (dateList[1].startsWith("Feb")) {
        return 29;
    } else if (dateList[1].startsWith("Apr") || dateList[1].startsWith("Jun") || dateList[1].startsWith("Sept") || dateList[1].startsWith("Nov")) {
        return 30;
    } else return 31;
}

for (let i = 1; i <= dayItemGenerate(); i++) {
    dayitems.innerHTML += `<p class="dayitem rounded-2 m-1">${i}</p>`;

}
setInterval(() => {
    let timeData = new Date();
    let dateList = timeData.toString().split(" ");
    year.innerText = dateList[3];
    clock.innerText = dateList[4];
    let dayItemsList = dayitems.querySelectorAll(".dayitem");

    dayItemsList.forEach((item) => {

        if (item.innerText === dateList[2]) {
            item.style.color = "#ffffff";
            item.style.border = "2px none";
            item.style.background = "var(--background-gradiant)";

        }
    });

    monthList.forEach((value, index) => {
        if (value.startsWith(dateList[1])) {
            month.innerText = value
        }
    });
    dayList.forEach((value, index) => {
        if (value.startsWith(dateList[0])) {
            day.innerText = value
        }
    });

    // if (data)
}, 1000);

