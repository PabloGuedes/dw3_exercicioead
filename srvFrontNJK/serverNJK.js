const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const PORT = 26000;

nunjucks.configure("views", {
  express: app,
  noCache: true,
  autoescape: true,
});

app.get("/", (req, res) => {
  res.render("index.njk", { titulo: "Sistema de Salas de Aula" });
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

  res.render("manutSalaDeAula.njk", { salas });
});

app.listen(PORT, () => {
  console.log(`Servidor Nunjucks rodando na porta ${PORT}`);
});
