function page_count(address) {
    var time = 5000;
    var intervalVar = setInterval(function () {
        location.href = address;
        clearInterval(intervalVar);
    }, time);
}

function time_cou() {
    var total_time = 5;
    total_inter = setInterval(function () {
        document.getElementById("time").innerHTML = total_time + "초";
        total_time--;

        if (total_time < 0) {
            clearInterval(total_inter);

        }
    }, 1000);

}

function time_cou() {
    var total_time = 30;
    total_inter = setInterval(function () {
        document.getElementById("time").innerHTML = total_time + "초";
        total_time--;

        if (total_time < 0) {
            clearInterval(total_inter);
            location.href = "Kiosk_home.html";
        }
    }, 1000);

}

function page_time_cou() {
    var total_time = 30;
    total_inter = setInterval(function () {
        document.getElementById("time").innerHTML = total_time + "초";
        total_time--;

        if (total_time < 0) {
            if (sessionStorage.getItem('frame') === null) {
                sessionStorage.setItem('frame', 'cb_frame1');
            }
            location.href = "before_start_4.html";
            clearInterval(total_inter);

        }
    }, 1000, total_time);

}

function cap_time_cou() {
    var total_time = 9;
    total_inter = setInterval(function () {

        document.getElementById("time").innerHTML = total_time;
        total_time--;

        if (total_time < 0) {
            total_time = 9;
        }
    }, 1000, 8);

}

function print_cou(num) {
    var total_count = 0;
    document.getElementById("photo_co").innerHTML = '0' + '/' + num;
    total_co = setInterval(function () {
        total_count++;
        document.getElementById("photo_co").innerHTML = total_count + '/' + num;

        if (total_count > num + 2) {
            clearInterval(total_count);
        }
    }, 10000, num);
}