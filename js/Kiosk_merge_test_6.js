var img = ['image0', 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10']
var output = [];
var arr1;
var what_frame;

function frame_show() {

  var canvas2 = document.getElementById('myCanvas2');
  var context2 = canvas2.getContext('2d');

  let backImg = new Image();
  let img2 = new Image();
  let img3 = new Image();
  let img4 = new Image();
  let img5 = new Image();
  let img6 = new Image();
  let img7 = new Image();

  output = localStorage.getItem("arr1");
  arr1 = JSON.parse(output);

  what_frame = sessionStorage.getItem('frame');
  backImg.src = ("../image_6/" + what_frame + ".png");

  backImg.onload = function () {
    context2.drawImage(backImg, 0, 0);
    img2.src = localStorage.getItem(arr1[0]);
    img2.onload = function () {
      context2.drawImage(img2, 371, 1207, 2110, 1406);
      img3.src = localStorage.getItem(arr1[1]);
      img3.onload = function () {
        context2.drawImage(img3, 371, 2748, 2110, 1406);
        img4.src = localStorage.getItem(arr1[2]);
        img4.onload = function () {
          context2.drawImage(img4, 371, 4305, 2110, 1406);
          img5.src = localStorage.getItem(arr1[3]);
          img5.onload = function () {
            context2.drawImage(img5, 2630, 1207, 2110, 1406);
            img6.src = localStorage.getItem(arr1[4]);
            img6.onload = function () {
              context2.drawImage(img6, 2631, 2748, 2110, 1406);
              img7.src = localStorage.getItem(arr1[5]);
              img7.onload = function () {
                context2.drawImage(img7, 2632, 4305, 2110, 1406);

              }
            }
          }
        }
      }
    }
  }
  saveImage();
  setTimeout(() => handleSaveClick(0), 3000);
}


function frame_show1() {

  var canvas3 = document.getElementById('myCanvas3');
  var context2 = canvas3.getContext('2d');

  let backImg = new Image();
  let img2 = new Image();
  let img3 = new Image();
  let img4 = new Image();
  let img5 = new Image();
  let img6 = new Image();
  let img7 = new Image();

  output = localStorage.getItem("arr1");
  arr1 = JSON.parse(output);

  what_frame = sessionStorage.getItem('frame');
  backImg.src = ("../image_6/" + what_frame + ".png");

  backImg.onload = function () {
    context2.drawImage(backImg, 0, 0, 640, 950);
    img2.src = localStorage.getItem(arr1[0]);
    img2.onload = function () {
      context2.drawImage(img2, 47, 150, 264, 175);
      img3.src = localStorage.getItem(arr1[1]);
      img3.onload = function () {
        context2.drawImage(img3, 47, 342, 264, 175);
        img4.src = localStorage.getItem(arr1[2]);
        img4.onload = function () {
          context2.drawImage(img4, 47, 534, 264, 175);
          img5.src = localStorage.getItem(arr1[3]);
          img5.onload = function () {
            context2.drawImage(img5, 330, 150, 264, 175);
            img6.src = localStorage.getItem(arr1[4]);
            img6.onload = function () {
              context2.drawImage(img6, 330, 342, 264, 175);
              img7.src = localStorage.getItem(arr1[5]);
              img7.onload = function () {
                context2.drawImage(img7, 330, 534, 264, 175);

              }
            }
          }
        }
      }
    }
  }


}



function saveImage() {
  var int_cut = parseInt(sessionStorage.getItem('count'));
  var cut_6 = int_cut;

  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:5000/send/img/file/11/' + sessionStorage.getItem('orderId') + '/' + cut_6 + '/' + sessionStorage.getItem('pin'),
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
  chmod();
}

function chmod() {
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:5000/chmod/' + sessionStorage.getItem('pin'),
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
