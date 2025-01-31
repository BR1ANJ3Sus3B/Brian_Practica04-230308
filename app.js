import express from 'express';
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid'; // Generador de identificadores únicos
import os from 'os';

// Mapa para almacenar sesiones en memoria (RAM)
const sessions = new Map();

const app = express();
const PORT = 3000;

// Ruta para obtener el estado de la sesión
app.get("/status", (req, res) => {
    const { sessionId } = req.query;
    if (!sessionId || !sessions.has(sessionId)) {
        return res.status(404).json({ message: "Sesión no encontrada" });
    }

    const session = sessions.get(sessionId);
    session.inactivityDuration = calculateInactivityTime(session.lastAccesed);

    res.status(200).json({
        sessionId: session.sessionId,
        email: session.email,
        nickname: session.nickname,
        clientIP: session.clientInfo.ip,
        clientMAC: session.clientInfo.mac,
        serverIP: session.serverInfo.ip,
        serverMAC: session.serverInfo.mac,
        createdAt: session.createdAt,
        lastAccessed: session.lastAccesed,
        inactivityDuration: session.inactivityDuration.formatted,
    });
});

// Ruta para obtener todas las sesiones activas
app.get("/Sessions", (req, res) => {
    const activeSessions = Array.from(sessions.values()).map((session) => {
        const inactivity = calculateInactivityTime(session.lastAccesed);

        return {
            sessionId: session.sessionId,
            email: session.email,
            nickname: session.nickname,
            serverIP: session.serverInfo.ip,
            serverMAC: session.serverInfo.mac,
            createdAt: session.createdAt,
            lastAccesed: session.lastAccesed,
            inactivityDuration: inactivity.formatted,
        };
    });

    res.status(200).json(activeSessions);
});


// Servidor en escucha
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
    console.log(`Información del servidor:`, getServerInfo());
});
