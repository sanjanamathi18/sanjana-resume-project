import { Server } from "./server.js";

const serverInstance = new Server();
const server = serverInstance.getApp();
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});