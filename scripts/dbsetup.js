#!/usr/bin/env node

import { spawn } from "node:child_process";

const env = { ...process.env };

<<<<<<< HEAD
await exec("npx", ["next", "build", "--experimental-build-mode", "generate"]);

// launch application
const [command, ...args] = process.argv.slice(2);
if (!command) {
  throw new Error("Missing command to launch after database setup");
}
await exec(command, args);

function exec(command, args = []) {
  const child = spawn(command, args, { stdio: "inherit", env });
=======
await exec("npx next build --experimental-build-mode generate");

// launch application
await exec(process.argv.slice(2).join(" "));

function exec(command) {
  const child = spawn(command, { shell: true, stdio: "inherit", env });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  return new Promise((resolve, reject) => {
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
<<<<<<< HEAD
        reject(new Error(`${[command, ...args].join(" ")} failed rc=${code}`));
=======
        reject(new Error(`${command} failed rc=${code}`));
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      }
    });
  });
}
