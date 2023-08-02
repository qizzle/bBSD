/*
    GPL-3.0 License

    Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
*/

const fs = require("fs");
const path = require("path");
const config = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "config", "config.json"))
);

var bbsd = {};

// Returns a list of all themes and information
bbsd.loadThemesDetails = (dir, themes) => {
  fs.readdirSync(dir).forEach((theme) => {
    if (theme.endsWith(".md")) return;
    themes.push(
      JSON.parse(
        fs.readFileSync(
          path.join(dir, theme, `${theme.toLowerCase()}.theme.json`)
        )
      )
    );
  });
  return themes;
};

bbsd.loadLanguageDetails = (dir, languages) => {
  fs.readdirSync(dir).forEach((language) => {
    if (language.endsWith(".md")) return;
    languages.push(JSON.parse(fs.readFileSync(path.join(dir, language))));
  });
  return languages;
};
// Adds all html objects of var "themes" into var "group"
bbsd.addThemes = (themes, group) => {
  if (typeof themes !== typeof []) return;
  themes.forEach((theme) => {
    let button = document.createElement("button");
    let div = document.createElement("div");
    let title = document.createElement("h5");
    let version = document.createElement("small");
    let description = document.createElement("p");
    let author = document.createElement("small");

    // If true adds additional "active" class to button
    if (config.theme == theme.title.toLowerCase()) {
      button.classList = "list-group-item list-group-item-action active";
    } else {
      button.classList = "list-group-item list-group-item-action";
    }

    div.classList = "d-flex w-100 justify-content-between";
    title.classList = "mb-1";
    description.classList = "mb-1";

    button.onclick = function () {
      bbsd.changeTheme(theme.title.toLowerCase());
    };

    title.innerText = theme.title;
    version.innerText = theme.version;
    description.innerText = theme.description;
    author.innerText = `by ${theme.author}`;

    div.appendChild(title);
    div.appendChild(version);
    button.appendChild(div);
    button.appendChild(description);
    button.appendChild(author);

    group.appendChild(button);
  });
};

bbsd.addLanguages = (translations, group) => {
  if (typeof translations !== typeof []) return;
  translations.forEach((translation) => {
    let button = document.createElement("button");
    let div = document.createElement("div");
    let title = document.createElement("h5");
    let version = document.createElement("small");
    let author = document.createElement("small");

    // If true adds additional "active" class to button
    if (config.lang == translation.detail.title) {
      button.classList = "list-group-item list-group-item-action active";
    } else {
      button.classList = "list-group-item list-group-item-action";
    }

    div.classList = "d-flex w-100 justify-content-between";
    title.classList = "mb-1";

    title.innerText = `${translation.detail.nativeTag[0]} (${translation.detail.englishTag[0]})`;
    version.innerText = translation.detail.translationVersion;
    author.innerText = `by ${translation.detail.author.toString()}`;

    button.onclick = function () {
      bbsd.changeLanguage(translation.detail.title);
    };

    div.appendChild(title);
    div.appendChild(version);
    button.appendChild(div);
    button.appendChild(author);

    group.appendChild(button);
  });
};

bbsd.changeTheme = (theme) => {
  fs.writeFileSync(
    path.join(__dirname, "..", "config", "config.json"),
    JSON.stringify({ lang: config.lang, theme: theme, version: config.version })
  );
  let style = fs.readFileSync(
    path.join(
      __dirname,
      "..",
      "themes",
      theme.toLowerCase(),
      `${theme.toLowerCase()}.theme.css`
    )
  );
  fs.writeFileSync(path.join(__dirname, "..", "..", "nodes", "mb.css"), style);
  location.reload();
};

bbsd.changeLanguage = (lang) => {
  fs.writeFileSync(
    path.join(__dirname, "..", "config", "config.json"),
    JSON.stringify({ lang: lang, theme: config.theme, version: config.version })
  );
  location.reload();
};

// Opens the Directory in Windows Explorer
bbsd.openDirectory = (dir) => {
  require("child_process").exec(`start "" "${path.join(__dirname, dir)}"`);
};

module.exports = bbsd;
