const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = process.env.PORT || 5000;

//de css, img en js map in de public map gebruiken
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public.css"));
app.use("/img", express.static(__dirname + "public.img"));
app.use("/js", express.static(__dirname + "public.js"));

//express layout mobiel formaat en ejs gebruiken
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded());

app.set("layout", "./layouts/format");
app.set("view engine", "ejs");

//local storage
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}

//bestanden definieren
app.get("/", (req, res) => {
  let item = JSON.parse(localStorage.getItem("data"));

  res.render("index", {
    item: item,
  });
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/form2", (req, res) => {
  res.render("form2");
});

app.post("/opslaan1", (req, res) => {
  let gebruiker = {
    naam: req.body.naam,
    email: req.body.email,
    geslacht: req.body.geslacht,
    maat: req.body.maat,
    kleur: req.body.kleur,
    text: req.body.text,
  };

  console.log(
    "naam: " +
      gebruiker.naam +
      ", " +
      "email: " +
      gebruiker.email +
      ", " +
      "geslacht: " +
      gebruiker.geslacht +
      ", " +
      "maat: " +
      gebruiker.maat +
      ", " +
      "kleur: " +
      gebruiker.kleur +
      ", " +
      "tekst: " +
      gebruiker.text
  );

  const jsonArr = JSON.stringify(gebruiker);
  localStorage.setItem("data", jsonArr);

  console.log(jsonArr);

  res.render("opslaan1", {
    gebruiker: gebruiker,
  });
});

app.get("/overzicht", (req, res) => {
  let item = JSON.parse(localStorage.getItem("data"));
  let item2 = JSON.parse(localStorage.getItem("data2"));

  console.log(item);
  res.render("overzicht", {
    item: item,
    item2: item2,
  });
});

app.get("/verwijderd", (req, res) => {
  let item = JSON.parse(localStorage.getItem("data"));
  let item2 = JSON.parse(localStorage.getItem("data2"));
  localStorage.removeItem("data");
  localStorage.removeItem("data2");
  res.render("verwijderd", {
    item: item,
    item2: item2,
  });
});

app.get("/wijzigen", (req, res) => {
  let item = JSON.parse(localStorage.getItem("data"));
  console.log(item);
  res.render("wijzigen", {
    item: item,
  });
});

app.get("/wijzigen2", (req, res) => {
  let item2 = JSON.parse(localStorage.getItem("data2"));
  console.log(item2);
  res.render("wijzigen2", {
    item2: item2,
  });
});

app.get("/bestellen", (req, res) => {
  let item = JSON.parse(localStorage.getItem("data"));
  let item2 = JSON.parse(localStorage.getItem("data2"));

  console.log(item + item2);
  res.render("bestellen", {
    item: item,
    item2: item2,
  });
});

app.post("/opslaan2", (req, res) => {
  let gebruiker = {
    naam: req.body.naam,
    email: req.body.email,
    geslacht: req.body.geslacht,
    maat: req.body.maat,
    kleur: req.body.kleur,
    text: req.body.text,
  };

  console.log(
    "naam: " +
      gebruiker.naam +
      ", " +
      "email: " +
      gebruiker.email +
      ", " +
      "geslacht: " +
      gebruiker.geslacht +
      ", " +
      "maat: " +
      gebruiker.maat +
      ", " +
      "kleur: " +
      gebruiker.kleur +
      ", " +
      "tekst: " +
      gebruiker.text
  );

  const jsonArr = JSON.stringify(gebruiker);
  localStorage.setItem("data2", jsonArr);

  console.log(jsonArr);

  res.render("opslaan2", {
    gebruiker: gebruiker,
  });
});

//404
app.use(function (req, res) {
  res.status(404).render("404");
});

//app geeft de port terug
app.listen(port, () => {
  console.log("Server is aan");
});
