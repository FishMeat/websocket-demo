var noticeSocket = function () {
    var s = new SockJS('/portfolio');
    var stompClient = Stomp.over(s);
    stompClient.connect({}, function () {
        console.log('notice socket connected!');
        stompClient.subscribe('/topic/testWebSocket', function (data) {
            console.log('successed!');
        });
    });
};

noticeSocket();