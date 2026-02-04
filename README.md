# WebSocket Chat

This is a simple WebSocket chat application that allows multiple clients to connect and broadcast messages to each other in real-time.

## Project Structure

- `index.html`: The frontend of the chat application. It establishes a WebSocket connection with the server, sends messages, and displays the chat log.
- `server.js`: The backend WebSocket server. It listens for incoming connections, receives messages from clients, and broadcasts them to all connected clients.
- `package.json`: Contains project metadata and dependencies.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository or download the source code.
2.  Open a terminal in the project directory.
3.  Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

1.  **Start the WebSocket server:**

    In your terminal, run the following command:

    ```bash
    node server.js
    ```

    The server will start, and you will see the message "WebSocket Server is live on ws://localhost:8080".

2.  **Open the chat client:**

    Open the `index.html` file in your web browser. You can do this by double-clicking the file or by using a local web server.

3.  **Start chatting:**

    The client will automatically connect to the server. You can now send messages using the input field, and they will be broadcasted to all connected clients.

## How It Works

- The client-side code in `index.html` uses the `WebSocket` API to connect to the server.
- The server-side code in `server.js` uses the `ws` library to create a WebSocket server.
- When a client sends a message, the server receives it and then iterates through all connected clients, sending the message to each one.
- The clients receive the broadcasted messages and display them in the chat log.
