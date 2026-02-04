import { WebSocketServer } from "ws";

const wss =new WebSocketServer({port:8080});

// connection event 

wss.on('connection',(socket,request)=>{
    const ip =request.socket.remoteAddress
})
