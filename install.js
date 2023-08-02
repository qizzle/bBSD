const util = require("util");
const path = require("path");
const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const exec = util.promisify(require("child_process").exec);

readline.question(
  "Path for Bot Studio for Discord. See INSTALL.txt for help.\n",
  async (dir) => {
    console.log("Installing...");
    exec(
      `npx asar extract "${path.join(
        dir,
        "dist",
        "win-unpacked",
        "resources",
        "app.asar"
      )}" "${path.join(dir, "dist", "win-unpacked", "resources", "app")}"`
    ).then(async () => {
      await fs.cpSync(
        path.join(__dirname, "install"),
        path.join(dir, "dist", "win-unpacked", "resources", "app"),
        { recursive: true }
      );
      console.log("Installed bBSD successfully!");
    });

    readline.close();
  }
);
