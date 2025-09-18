const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Archivos estáticos (sirve HTML, CSS, JS, imágenes, etc.)
// ⚠️ Se desactiva el autoindex para que no cargue index.html por defecto
app.use(express.static(path.join(__dirname), { index: false }));

// Ruta principal -> siempre Menu.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// WebSocket básico (para multijugador futuro)
io.on("connection", (socket) => {
  console.log("Jugador conectado:", socket.id);

  socket.on("playerMove", (data) => {
    socket.broadcast.emit("playerMove", data);
  });

  socket.on("disconnect", () => {
    console.log("Jugador desconectado:", socket.id);
  });
});

// Fallback -> cualquier ruta inválida redirige al menú
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
