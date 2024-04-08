const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const users = [
  "Juan",
  "Joselyn",
  "Astrid",
  "Maria",
  "Ignacia",
  "Javier",
  "Brian",
];

app.use(express.static("assets"));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/abracadabra/usuarios", (req, res) => res.json(users));

app.get("/abracadabra/conejo/:n", (req, res) => {
  const { n } = req.params;
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  const imageName = randomNumber == n ? "conejito.jpg" : "voldemort.jpg";
  res.sendFile(`${__dirname}/assets/img/${imageName}`);
});

app.get("/abracadabra/juegos/:usuarios", (req, res) =>
  res.sendFile(`${__dirname}/index.html`)
);

app.get("*", (req, res) => res.send("<h1>Esta página no existe</h1>"));

app.listen(port, () =>
  console.log(`Server listening on port http://localhost:${port}`)
);
