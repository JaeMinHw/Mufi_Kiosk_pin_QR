let filterarr = [];
var count1 = 0;
var total_inter;

let arr = ['myCanvas0', 'myCanvas1', 'myCanvas2', 'myCanvas3', 'myCanvas4', 'myCanvas5', 'myCanvas6', 'myCanvas7', 'myCanvas8', 'myCanvas9', 'myCanvas10', 'myCanvas11', 'myCanvas12', 'myCanvas13'];
var frame_lis = ['cb_frame1', 'cb_frame2', 'cb_frame3', 'cb_frame4', 'cb_frame5', 'cb_frame6', 'cb_frame7', 'cb_frame8', 'cb_frame9', 'cb_frame10', 'cb_frame11', 'cb_frame12', 'cb_frame13', 'cb_frame14'];

function count(type) {

    // 더하기/빼기
    if (type === 'cb_frame1') {
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.opacity = "1.0";
            filterarr = [];
        }
        document.getElementById('myCanvas0').style.opacity = "0.3";
        filterarr.push(type);
        console.log(filterarr);
        sessionStorage.setItem('frame', 'cb_frame1');
        btnActive();
    } else if (type === 'cb_frame2') {
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.opacity = "1.0";
            filterarr = [];
        }
        document.getElementById('myCanvas1').style.opacity = "0.3";
        filterarr.push(type);
        console.log(filterarr);
        sessionStorage.setItem('frame', 'cb_frame2');
        btnActive();
    }

    else if (type === 'cb_frame3') {
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.opacity = "1.0";
            filterarr = [];
        }
        document.getElementById('myCanvas2').style.opacity = "0.3";
        filterarr.push(type);
        console.log(filterarr);
        sessionStorage.setItem('frame', "cb_frame3");
        btnActive();
    }
    else if (type === 'cb_frame4') {
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.opacity = "1.0";
            filterarr = [];
        }
        document.getElementById('myCanvas3').style.opacity = "0.3";
        filterarr.push(type);
        console.log(filterarr);
        sessionStorage.setItem('frame', 'cb_frame4');
        btnActive();
    }

    else if (type === 'cb_frame5') {
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.opacity = "1.0";
            filterarr = [];
        }
        document.getElementById('myCanvas4').style.opacity = "0.3";
        filterarr.push(type);
        console.log(filterarr);
        sessionStorage.setItem('frame', "cb_frame5");
        btnActive();
    }
    else if (type === 'cb_frame6') {
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.opacity = "1.0";
            filterarr = [];
        }
        document.getElementById('myCanvas5').style.opacity = "0.3";
        filterarr.push(type);
        console.log(filterarr);
        sessionStorage.setItem('frame', "cb_frame6");
        btnActive();
    }
    else if (type === 'cb_frame7') {
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.opacity = "1.0";
            filterarr = [];
        }
        document.getElementById('myCanvas6').style.opacity = "0.3";
        filterarr.push(type);
        console.log(filterarr);
        sessionStorage.setItem('frame', "cb_frame7");
        btnActive();
    }
    else if (type === 'cb_frame8') {
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.opacity = "1.0";
            filterarr = [];
        }
        document.getElementById('myCanvas7').style.opacity = "0.3";
        filterarr.push(type);
        console.log(filterarr);
        sessionStorage.setItem('frame', "cb_frame8");
        btnActive();
    }
    else if (type === 'cb_frame9') {
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.opacity = "1.0";
            filterarr = [];
        }
        document.getElementById('myCanvas8').style.opacity = "0.3";
        filterarr.push(type);
        console.log(filterarr);
        sessionStorage.setItem('frame', "cb_frame9");
        btnActive();
    }
    else if (type === 'cb_frame10') {
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.opacity = "1.0";
            filterarr = [];
        }
        document.getElementById('myCanvas9').style.opacity = "0.3";
        filterarr.push(type);
        console.log(filterarr);
        sessionStorage.setItem('frame', "cb_frame10");
        btnActive();
    }
    else if (type === 'cb_frame11') {
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.opacity = "1.0";
            filterarr = [];
        }
        document.getElementById('myCanvas10').style.opacity = "0.3";
        filterarr.push(type);
        console.log(filterarr);
        sessionStorage.setItem('frame', "cb_frame11");
        btnActive();
    }
    else if (type === 'cb_frame12') {
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.opacity = "1.0";
            filterarr = [];
        }
        document.getElementById('myCanvas11').style.opacity = "0.3";
        filterarr.push(type);
        console.log(filterarr);
        sessionStorage.setItem('frame', "cb_frame12");
        btnActive();
    }
    else if (type === 'cb_frame13') {
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.opacity = "1.0";
            filterarr = [];
        }
        document.getElementById('myCanvas12').style.opacity = "0.3";
        filterarr.push(type);
        console.log(filterarr);
        sessionStorage.setItem('frame', "cb_frame13");
        btnActive();
    }
    else if (type === 'cb_frame14') {
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.opacity = "1.0";
            filterarr = [];
        }
        document.getElementById('myCanvas13').style.opacity = "0.3";
        filterarr.push(type);
        console.log(filterarr);
        sessionStorage.setItem('frame', "cb_frame14");
        btnActive();
    }


}


function click_frame() {
    clearInterval(total_inter);
    //location.href = "Kiosk_photo_4.html";
    location.href = "before_start_4.html";
}

function btnActive() {
    const target = document.getElementById('button');
    target.style.display = 'block';
}

function btnDisabled() {
    const target = document.getElementById('button');
    target.style.display = 'none';
}

function time_cou() {
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