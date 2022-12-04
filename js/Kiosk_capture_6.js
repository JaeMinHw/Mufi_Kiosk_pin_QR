var myVideoStream = document.getElementById('myVideo')     // make it a global variable
var imageList = [];
var imageList1 = [];
var count = -1;
var myStoredInterval = 0

var img = ['image0', 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10'];

function getVideo() {
  navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  navigator.getMedia({ video: true, audio: false },

    function (stream) {
      myVideoStream.srcObject = stream
      myVideoStream.play();
      return 11;
    },

    function (error) {
      alert('webcam not working');
    });

}

function takeSnapshot() {
  var myCanvasElement = document.getElementById('myCanvas');
  var myCTX = myCanvasElement.getContext('2d');
  myCTX.drawImage(myVideoStream, 0, 0, myCanvasElement.width, myCanvasElement.height);

  imageList[count] = myCanvasElement.toDataURL("image/png", 0.5);

  // 이미지 로드
  var myCanvasElement1 = document.getElementById('myCanvas1');
  var myCTX1 = myCanvasElement1.getContext('2d');

  var image = new Image();
  image.onload = function () {
    myCTX1.drawImage(image, 100, 25, 800, 450, 0, 0, 800, 450);

    imageList1[count] = myCanvasElement1.toDataURL("image/png", 0.5);

  };

  image.src = imageList[count];
  count++;
  if (count > 0) {
    handleSaveClick(count);
  }

}

function send1() {
  handleSaveClick(10);
  for (var i = 0; i < 10; i++) {
    console.log(img[i]);
    localStorage.setItem(img[i], imageList1[i]);
  }

  location.href = "before_photo_6.html";
}

function handleSaveClick(i) {
  var canvas = document.getElementById('myCanvas1');
  const image = canvas.toDataURL("image/png", 0.5);
  const link = document.createElement("a");


  link.href = image;
  // 사용자 id + 핀번호로 컴퓨터에 저장시키기
  link.src = "D:/Kiosk_photo/";
  link.download = sessionStorage.getItem('pin') + i + ".png";
  link.click();
}

