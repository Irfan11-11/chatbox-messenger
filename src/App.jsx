import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Main from './components/Main';
import { io } from 'socket.io-client';

const socket = io("https://uypdated-caht-server.onrender.com");

socket.on("connect", () => {
  console.log("Connected to server!");
});

socket.on("disconnect", () => {
  console.log("Disconnected from server!");
});

socket.on("error", (error) => {
  console.error("Socket error:", error);
});

function App() {
  return (
    <>
      <Main socket={socket} />
    </>
  );
}

export default App;