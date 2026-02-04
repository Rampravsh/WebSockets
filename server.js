import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// 0:connecting
// 1:open(the only state where you can safely .send())
// 2:closing
// 3:closed

// connection event

wss.on("connection", (socket, request) => {
  const ip = request.socket.remoteAddress;
  socket.on("message", (rawData) => {
    const message = rawData.toString();
    console.log({ rawData });

    wss.clients.forEach((client) => {
      if (client.readyState == 1) {
        client.send(`Server Broadcast: ${message}`);
      }
    });
  });
});
