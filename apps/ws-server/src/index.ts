import { WebSocketServer } from "ws";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@repo/backend-common/config'


const wss = new WebSocketServer({ port: 8080 });

function checkUser(token: string): string | null {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded === "string") {
        return null;
    }

    if (!decoded || !decoded.userId) {
        return null;
    }

    return decoded.userId;
}

wss.on("connection", (socket, req) => {
    const url = req.url
    if (!url)
        return;
    const queryParams = new URLSearchParams(url);
    const token = queryParams.get('token') || "";
    const userId = checkUser(token);

    if (!userId) {
        socket.close()
        return;
    }

    


    socket.on("message", () => {
        socket.send("Hello");
    })

})