var pagesArr = [];

function createArrs() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "TextFile\\links.txt", true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var pageStr = rawFile.responseText;
                let strSplit = pageStr.split("\n")
                console.log(strSplit)
                for (let index = 0; index < strSplit.length; index++) {
                    const element = strSplit[index];
                    self.pagesArr.push(element.toString())
                }
                console.log(pagesArr)
                createBtns()
            }
        }
    };
    rawFile.send(null);
}

function mainBtnClicked() {
    for (let index = 0; index < pagesArr.length; index++) {
        const element = pagesArr[index];
        var target = "_blank"
        window.open(element, target);
    }
    window.close()
}

function mainBtnCategory(min, max) {
    for (let index = min; index <= max; index++) {
        const element = pagesArr[index];
        var target = "_blank"
        window.open(element, target);
    }
    window.close()
}

function createBtns() {
    let btnCode = "";
    for (let index = 0; index < pagesArr.length; index++) {
        const element = pagesArr[index];
        btnCode += `
        <a href="${element}" class="buttons" target="_blank">
            ${element}
        </a>
        `;
    }
    document.getElementById("pagesButtonCollections").innerHTML = btnCode;
}

// Function membaca waktu dan tanggal
function display_c() {
    var refresh = 1000;
    mytime = setTimeout("display_ct()", refresh);
}

function display_ct() {
    var x = new Date();
    // date part ///
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var dayofweek = weekday[x.getDay()];
    var monthArr = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    var month = monthArr[x.getMonth()];
    var day = x.getDate();
    var year = x.getFullYear();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    var x3 = dayofweek + ", " + day + " " + month + " " + year;

    // time part //
    var hour = x.getHours();
    var minute = x.getMinutes();
    var second = x.getSeconds();

    var greet = "Hello!";
    if (hour < 3) {
        greet = "Good Night!";
    } else if (hour < 12) {
        greet = "Good Morning!";
    } else if (hour < 17) {
        greet = "Good Afternoon!";
    } else if (hour < 22) {
        greet = "Good Evening!";
    } else {
        greet = "Good Night!";
    }

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    var x3 = x3 + "<br>" + hour + ":" + minute + ":" + second;

    document.getElementById("ct").innerHTML = x3;
    document.getElementById("greeting").innerHTML = greet;
    display_c();
}

// Ketika pagee loaded
function pageLoaded() {
    createArrs()
    display_ct()
}
