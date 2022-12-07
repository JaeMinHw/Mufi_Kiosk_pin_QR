var img = ['image0', 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7']
var output = [];
var arr1;

function frame_show() {

  var canvas2 = document.getElementById('myCanvas2');
  var context2 = canvas2.getContext('2d');

  let backImg = new Image();
  let img2 = new Image();
  let img3 = new Image();
  let img4 = new Image();
  let img5 = new Image();

  output = localStorage.getItem("arr1");
  arr1 = JSON.parse(output);
  what_frame = sessionStorage.getItem('frame')
  backImg.src = ("../image_4/" + what_frame + ".png");
  backImg.onload = function () {
    context2.drawImage(backImg, 0, 0);
    img2.src = localStorage.getItem(arr1[0]);
    img2.onload = function () {
      context2.drawImage(img2, 430, 1173, 1818, 1212);
      context2.drawImage(img2, 2863, 1173, 1818, 1212);
      img3.src = localStorage.getItem(arr1[1]);
      img3.onload = function () {
        context2.drawImage(img3, 430, 2540, 1818, 1212);
        context2.drawImage(img3, 2870, 2540, 1818, 1212);
        img4.src = localStorage.getItem(arr1[2]);
        img4.onload = function () {
          context2.drawImage(img4, 430, 3910, 1818, 1212);
          context2.drawImage(img4, 2865, 3910, 1818, 1212);
          img5.src = localStorage.getItem(arr1[3]);
          img5.onload = function () {
            context2.drawImage(img5, 430, 5280, 1818, 1212);
            context2.drawImage(img5, 2863, 5285, 1818, 1212);
            // setTimeout(() => handleSaveClick(0), 3000);
          }

        }
      }
    }
  }
  saveImage();
  setTimeout(() => handleSaveClick(0), 3000);
}


function frame_show1() {

  var canvas2 = document.getElementById('myCanvas3');
  var context2 = canvas2.getContext('2d');

  let backImg = new Image();
  let img2 = new Image();
  let img3 = new Image();
  let img4 = new Image();
  let img5 = new Image();

  output = localStorage.getItem("arr1");
  arr1 = JSON.parse(output);
  what_frame = sessionStorage.getItem('frame')
  backImg.src = ("../image_4/" + what_frame + ".png");
  backImg.onload = function () {
    context2.drawImage(backImg, 0, 0, 640, 950);
    img2.src = localStorage.getItem(arr1[0]);
    img2.onload = function () {
      context2.drawImage(img2, 55, 145, 228, 151);
      context2.drawImage(img2, 360, 146, 228, 151);
      img3.src = localStorage.getItem(arr1[1]);
      img3.onload = function () {
        context2.drawImage(img3, 55, 315, 228, 151);
        context2.drawImage(img3, 360, 316, 228, 151);
        img4.src = localStorage.getItem(arr1[2]);
        img4.onload = function () {
          context2.drawImage(img4, 55, 486, 228, 151);
          context2.drawImage(img4, 360, 486, 228, 151);
          img5.src = localStorage.getItem(arr1[3]);
          img5.onload = function () {
            context2.drawImage(img5, 55, 656, 228, 151);
            context2.drawImage(img5, 360, 656, 228, 151);
          }

        }
      }
    }
  }
}

function saveImage() {
  var int_cut = parseInt(sessionStorage.getItem('count'));
  var cut_4 = int_cut / 2;

  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:5000/send/img/file/9/' + sessionStorage.getItem('orderId') + '/' + cut_4 + '/' + sessionStorage.getItem('pin'),
    dataType: 'text',
    success: function (data) {
      console.log(data);
    },
    error: function (result) {
      // error -> 인증실패 Alert 출력
      alert('오류입니다. 다시 시도 후 문제가 또 발생하면 안내자에게 문의해주세요.')
      // 인증실패시 에러메시지 출력
    }
  })

}




function day_re() {
  var date = new Date();
  var year = date.getFullYear();
  var year = String(year);
  var yy = year.substring(2, 4);
  var month = new String(date.getMonth() + 1);
  var day = new String(date.getDate());

  // 한자리수일 경우 0을 채워준다.
  if (month.length == 1) {
    month = "0" + month;
  }
  if (day.length == 1) {
    day = "0" + day;
  }


  return (yy + month + day);

}
function handleSaveClick(i) {

  var canvas = document.getElementById('myCanvas2');
  const image = canvas.toDataURL();
  const link = document.createElement("a");


  link.href = image;
  // 사용자 id + 핀번호로 컴퓨터에 저장시키기
  link.src = "D:/Kiosk_photo/";
  link.download = sessionStorage.getItem('pin') + i + ".png";
  link.click();

}

window.onload = function () {
  let probar = document.getElementById('probar');
  let progress = 0;
  const interver = setInterval(() => {
    progress = progress + 5;
    probar.style.width = '' + progress + '%';
    if (progress == 100) {
      clearInterval(interver);
      location.href = 'Kiosk_ending.html';
    }
  }, 300);
}
