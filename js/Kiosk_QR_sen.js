function getVideo() {
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getMedia({ video: true, audio: false },

        function (stream) {
            myVideoStream.srcObject = stream
            myVideoStream.play();
        },
        function (error) {
            alert('webcam not working');
        });
}
function startScan() {
    var video = document.getElementById("myVideo");
    var canvasElement = document.getElementById("myCanvas");
    var canvas = canvasElement.getContext("2d");

    function drawLine(begin, end, color) {
        canvas.beginPath();
        canvas.moveTo(begin.x, begin.y);
        canvas.lineTo(end.x, end.y);
        canvas.lineWidth = 4;
        canvas.strokeStyle = color;
        canvas.stroke();
    }

    // 카메라 사용시
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function (stream) {
        video.srcObject = stream;
        video.setAttribute("playsinline", true);      // iOS 사용시 전체 화면을 사용하지 않음을 전달
        video.play();
        requestAnimationFrame(tick);
    });

    function tick() {


        if (video.readyState === video.HAVE_ENOUGH_DATA) {

            canvasElement.hidden = false;


            // 읽어들이는 비디오 화면의 크기
            canvasElement.height = video.videoHeight;
            canvasElement.width = video.videoWidth;
            canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

            var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
            var code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: "dontInvert",
            });


            if (code) {

                drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF0000");
                drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF0000");
                drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF0000");
                drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF0000");
                restApi(code.data);

                return;
            }

        }
        requestAnimationFrame(tick);
    }
}




function restApi(num) {
    $.ajax({
        type: 'GET',
        url: "http://www.muinfilm.shop/kiosk/pin/" + num,
        dataType: 'text',
        success: function (data) {
            // success -> 인증성공 Alert 출력
            // 인증성공시 비활성화하기
            const obj = JSON.parse(data);

            if (obj.isSuccess == 'True') {
                // 세션에 저장해서 가지고 있기
                sessionStorage.setItem('orderName', obj.orderName); //유저 아이디
                sessionStorage.setItem('orderId', obj.orderId); //주문번호
                var pa = obj.orderName;
                let pase = pa.split(' ');
                sessionStorage.setItem('what_frame', pase[0][0]); // 어떤 상품?
                sessionStorage.setItem('count', pase[2][0]); // 매수
                sessionStorage.setItem('pin', num); // 핀번호

                if (sessionStorage.getItem('what_frame') === '4') // 상품 번호가 4컷
                {
                    location.href = "Kiosk_choose_frame_4.html";
                }
                else if (sessionStorage.getItem('what_frame') === '6')  // 상품 번호가 6컷
                {
                    location.href = "Kiosk_choose_frame_6.html";
                }
                else {
                    alert("실패");
                }

            }
            else if (obj.isSuccess == '이미 사용된번호 입니다.') {
                alert("이미 사용한 번호입니다. 다시 확인하여주세요.");
            }
            else {
                // 다시 확인하라는 alert 출력하기
                alert("잘 못 된 번호입니다. 다시 확인하여주세요.")
            }

        },
        error: function (result) {
            // error -> 인증실패 Alert 출력
            alert('오류입니다. 다시 시도 후 문제가 또 발생하면 안내자에게 문의해주세요.')
            // 인증실패시 에러메시지 출력
        }
    })
}



function send_lo() {
    var time = 30000;
    var intervalVar = setInterval(function () {
        location.href = "Kiosk_home.html"
    }, time);
}