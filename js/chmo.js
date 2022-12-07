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