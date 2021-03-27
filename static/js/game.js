var socket = io.connect('http://' + document.domain + ':' + location.port);

socket.on("connect", () => {
    var name = prompt("Please enter your name");
    console.log(name)
    if(name != null){
        socket.emit("userJoined", name);
    }
});

socket.on("addUser", data => {
    console.log("Hello, " + data);
    $(".playersList").append("<p class='player'>" + data + "<p>");
})

