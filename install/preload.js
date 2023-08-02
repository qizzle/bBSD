/*
    GPL-3.0 License

    Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
*/

const config = require("./bbsd/config/config.json");

const fs = require("fs");
const path = require("path");

// Adds the "Settings" page, the config page of bbsd, to the navbar
const addSettings = () => {
  let navbar = document.getElementsByClassName("navbar-nav")[0] ?? false;
  if (!navbar) return;

  let li = document.createElement("li");
  let a = document.createElement("a");

  li.classList = "nav-item";

  a.classList = "nav-link";
  a.href = "bbsd.html";
  a.innerText = "Settings";

  li.appendChild(a);
  navbar.appendChild(li);
};

// Loads translation file using config.json and the configured language
const lang = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "bbsd", "language", `${config.lang}.json`)
  )
);

// Translates the UI using the translation file provided in config.json (E.g. de-DE)
// -> is going to be reworked
const translateAll = () => {
  document
    .querySelectorAll(
      "a, h1, h2, h3, h4, h5, button, p, span, small, label, option"
    )
    .forEach((node) => {
      if (typeof lang.translate[node.innerText] === typeof undefined) return;
      node.innerText = node.innerText.replace(
        node.innerText,
        lang.translate[node.innerText]
      );
    });
};

// DOMContentLoaded

window.addEventListener("DOMContentLoaded", () => {
  if (!document.readyState === "complete") return;
  addSettings(); // Adds "Settings" element to navbar
  translateAll(); // Translates every element on the current page using the translation file in "./bbsd/language/LANG.json"
});
