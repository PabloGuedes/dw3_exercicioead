const express = require("express");
const app = express();
const PORT = 25000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { titulo: "Sistema de Salas de Aula" });
});

app.get("/manutencao", (req, res) => {
  const salas = [
    {
      id: 1,
      descricao: "Sala 101",
      localizacao: "Prédio A",
      capacidade: 30,
      removido: false,
    },
    {
      id: 2,
      descricao: "Sala 102",
      localizacao: "Prédio B",
      capacidade: 25,
      removido: false,
    },
  ];

  res.render("manutSalaDeAula", { salas });
});

app.listen(PORT, () => {
  console.log(`Servidor EJS rodando na porta ${PORT}`);
});
