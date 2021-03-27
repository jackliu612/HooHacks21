var socket = io.connect('http://' + document.domain + ':' + location.port);

socket.on("connect", () => {
    var name = prompt("Please enter your name");
    console.log(name)
    if(name != null){
        socket.emit("userJoined", name);
    }
});



