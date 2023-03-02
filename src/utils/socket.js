import socketio from "socket.io-client"
export const io = socketio.connect(process.env.REACT_APP_API_URL)