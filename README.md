# bBSD

**Better Bot Studio for Discord** is a modification for [Bot Studio for Discord](https://store.steampowered.com/app/1118380/Bot_Studio_for_Discord/).

> W.I.P. Project

## About

**Better Bot Studio for Discord** has been created to provide highly requested features to [Bot Studio for Discord](https://store.steampowered.com/app/1118380/Bot_Studio_for_Discord/).
The developer is very quite on updates, so bBSD wants to change it by allowing the community to create own features.

> ❗ IMPORTANT ❗ By installing this modification you may violate against [Bot Studio for Discord](https://store.steampowered.com/app/1118380/Bot_Studio_for_Discord/)'s EULA.
> This modification doesn't ship with any code from the original product, except for the default theme, which is licensed under MIT.
> Don't create support tickets in the offical [Bot Studio for Discord Discord Server](https://discord.gg/discord-bot-studio-595001449696591873) for any app breaking bugs after installing this modification.

> Join our [Discord server](https://discord.gg/MYqMBZ2AEX) for help and feedback.

## Features

- Built-in themes (you now have dark mode!)
- Translations
- More in future!

## Translations

- [x] English (US)
- [ ] German (DE)

> Want to help translating BSD? Join our [Discord server](https://discord.gg/MYqMBZ2AEX)!

## Roadmap

- [ ] Add-ons (mods for the editor itself)

## Installation

Prerequisites:

- Legal copy of [Bot Studio for Discord](https://store.steampowered.com/app/1118380/Bot_Studio_for_Discord/)
- [NodeJS >v17](https://nodejs.org/)

Clone the project using **git** or download the source code using the **Download ZIP** button under the green **Code** button.

A gif showing the installation:
![installation](https://github.com/qizzle/bBSD/assets/52245845/016f45cb-ef4a-4985-af7f-705854573869)

A installation guide in text-format is accessible in INSTALL.txt

## Contributing

We invite everyone to help translating BSD to all languages.
Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## Technical

bBSD uses the **preload.js** file in BSD, which is imported by every HTML page of BSD, to create a new page, our Settings menu.
Themes are being inserted by replacing the **mb.css** file in **app/nodes** with new CSS code.
Translations also use the **preload.js** to watch for keywords and then replacing them.

## License

[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)

> This README is W.I.P.
> I'm not a native English speaker, so translation errors may happen, sorry!
