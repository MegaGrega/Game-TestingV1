var socket = io();


$("#test").click(()=>{
    socket.emit('test',{
        text:'I clicked a button'
    })
})