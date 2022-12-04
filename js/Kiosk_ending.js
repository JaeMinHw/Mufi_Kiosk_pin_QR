function send_home() {
    var total_time = 5;
    total_inter = setInterval(function () {
        document.getElementById("time").innerHTML = total_time + "초";
        total_time--;

        if (total_time < 0) {
            if (sessionStorage.getItem('frame') === null) {
                sessionStorage.setItem('frame', 'cb_frame1');
            }
            location.href = "Kiosk_home.html";
            clearInterval(total_inter);

        }
    }, 1000);
}

function send_picture() {
    let formData = new FormData();
    let files;
}