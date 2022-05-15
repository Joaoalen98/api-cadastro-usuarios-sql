import app from "./src/server.js";

const porta = process.env.PORT || 8000

app.listen(porta, () => {
  console.log(`servidor rodando na porta ${porta}`)
});