const express = require('express')
const app = express()

app.use(express.json())

let botStatus = {
  status: "offline",
  ping: 0,
  grupos: 0,
  mensagens: 0,
  uptime: 0
}

// ROTA GET (SITE VAI USAR)
app.get('/api/status', (req, res) => {
  res.json(botStatus)
})

// ROTA POST (SUA BOT VAI ENVIAR)
app.post('/api/status', (req, res) => {
  botStatus = {
    ...botStatus,
    ...req.body,
    uptime: process.uptime()
  }
  res.json({ ok: true })
})

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000')
})
