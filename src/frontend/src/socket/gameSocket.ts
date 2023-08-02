import api from "@/api";
import { io } from "socket.io-client";

const socketGame = io(api.getUri() + "game", {
    withCredentials: true,
});

export default socketGame;