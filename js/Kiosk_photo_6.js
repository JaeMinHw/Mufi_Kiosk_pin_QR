var click_img = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var click = 0;
var count = 0;
let filterarr = [];
let arr_6 = [];
var img = ['image0', 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9'];
var arr = ['myCanvas0', 'myCanvas1', 'myCanvas2', 'myCanvas3', 'myCanvas4', 'myCanvas5', 'myCanvas6', 'myCanvas7', 'myCanvas8', 'myCanvas9', 'myCanvas10', 'myCanvas11'];


function frame_pri() {
    var canvas2 = document.getElementById('myCanvas11');
    var context2 = canvas2.getContext('2d');

    frame_info = sessionStorage.getItem('frame')
    let img2 = new Image();
    img2.src = ("../image_6/" + frame_info + ".png");
    img2.onload = function () {
        context2.drawImage(img2, 0, 0, 640, 950);
    }
}

function pri(num) {
    document.getElementById(arr[num]).src = localStorage.getItem(img[num]);
}

function oncl(who) {
    var canvas2 = document.getElementById('myCanvas11');
    var context2 = canvas2.getContext('2d');
    let img2 = new Image();
    if (click_img[who] == 0) {
        if (count < 6) {
            document.getElementById(arr[who]).style.opacity = "0.3";
            click_img[who] = 1;
            arr_6[count] = img[who];
            count++;
            filterarr.push(img[who]);
            console.log(arr_6);
            btnDisabled();
            img2.src = localStorage.getItem(img[who]);
            // 클릭된 이미지 출력
            if (count == 1) {
                img2.onload = function () {
                    context2.drawImage(img2, 47, 150, 264, 175);
                }
            }
            else if (count == 2) {
                img2.onload = function () {
                    context2.drawImage(img2, 47, 342, 264, 175);
                }
            }
            else if (count == 3) {
                img2.onload = function () {
                    context2.drawImage(img2, 47, 534, 264, 175);
                }
            }
            else if (count == 4) {
                img2.onload = function () {
                    context2.drawImage(img2, 330, 150, 264, 175);
                }
            }
            else if (count == 5) {
                img2.onload = function () {
                    context2.drawImage(img2, 330, 342, 264, 175);
                }
            }
            else if (count == 6) {
                img2.onload = function () {
                    context2.drawImage(img2, 330, 534, 264, 175);
                }
            }
        }
        else {
            alert("6장을 선택하셨습니다.");
        }

    }
    else if (click_img[who] == 1) {
        document.getElementById(arr[who]).style.opacity = "1.0";
        click_img[who] = 0;

        context2.clearRect(47, 150, 264, 175);
        context2.clearRect(47, 342, 264, 175);
        context2.clearRect(47, 534, 264, 175);
        context2.clearRect(330, 150, 264, 175);
        context2.clearRect(330, 342, 264, 175);
        context2.clearRect(330, 534, 264, 175);

        count--;
        filterarr = filterarr.filter((element) => element !== img[who]);
        console.log(filterarr);


        btnDisabled();

        for (let i = 0; i < filterarr.length; i++) {
            let img2 = new Image();
            img2.src = localStorage.getItem(filterarr[i]);
            // 클릭된 이미지 출력
            if (i == 0) {
                img2.onload = function () {
                    context2.drawImage(img2, 47, 150, 264, 175);
                }
            }
            else if (i == 1) {
                img2.onload = function () {
                    context2.drawImage(img2, 47, 342, 264, 175);
                }
            }
            else if (i == 2) {
                img2.onload = function () {
                    context2.drawImage(img2, 47, 534, 264, 175);
                }
            }
            else if (i == 3) {
                img2.onload = function () {
                    context2.drawImage(img2, 330, 150, 264, 175);
                }
            }
            else if (i == 4) {
                img2.onload = function () {
                    context2.drawImage(img2, 330, 342, 264, 175);
                }
            }
            else if (i == 5) {
                img2.onload = function () {
                    context2.drawImage(img2, 330, 534, 264, 175);
                }
            }
        }

        // 클릭된 이미지 빼기 프레임 안에 들어있는 사진을 클릭하면 빠지게
    }
    if (count == 6) {
        btnActive();
    }
}


function btnActive() {
    const target = document.getElementById('target_btn');
    target.style.display = 'block';
}

function btnDisabled() {
    const target = document.getElementById('target_btn');
    target.style.display = 'none';
}

function finish() {
    if (count == 6) {
        localStorage.setItem("arr1", JSON.stringify(filterarr));
        location.href = "Kiosk_merge_6.html";
    }

    else {
        alert("사진을 6장 선택해주세요");
    }
}

window.onload = function () {
    var total_time = 60;
    total_inter = setInterval(function () {
        document.getElementById("time").innerHTML = total_time + "초";
        total_time--;

        if (total_time < 0) {
            clearInterval(total_inter);

            if (filterarr.length == 0) {
                // 6장 랜덤으로 선택 해주고 location.href
                rand_photo(6);
            }
            else if (filterarr.length == 1) {
                // 5장 랜덤으로 선택 해주고 location.href
                rand_photo(5);

            }
            else if (filterarr.length == 2) {
                // 4장 랜덤으로 선택 해주고 location.href
                rand_photo(4);
            }
            else if (filterarr.length == 3) {
                // 3장 랜덤으로 선택 해주고 location.href
                rand_photo(3);
            }
            else if (filterarr.length == 4) {
                // 2장 랜덤으로 선택 해주고 location.href
                rand_photo(2);
            }
            else if (filterarr.length == 5) {
                // 1장 랜덤으로 선택 해주고 location.href
                rand_photo(1);
            }

            localStorage.setItem("arr1", JSON.stringify(filterarr));
            location.href = "Kiosk_merge_6.html";
        }
    }, 1000);

}

function rand_photo(not_num) {
    var rand_count = 0;
    for (var i = 0; i < 10; i = i + 3) {
        if (i == 0) {
            i = 0;
        }
        else {
            i = i % 10;
        }

        if (rand_count < not_num) {
            if (!filterarr.includes(img[i])) {
                filterarr.push(img[i]);
                rand_count++;
            }
        }

    }
}