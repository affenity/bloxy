<p align="center">
  <img width="25%" height="25%" src="https://media.discordapp.net/attachments/513102278538821647/516007264717373451/0yellow_bloxy.png">
</p>

***


[![Bloxy](https://img.shields.io/npm/v/bloxy.svg?maxAge=3600&style=flat-square)](https://npmjs.com/package/bloxy)
[![Downloads](https://img.shields.io/npm/dt/bloxy.svg?maxAge=3600&style=flat-square)](https://npmjs.com/package/bloxy)
[![Discord](https://img.shields.io/badge/discord-roblox%20api%20chat-blue.svg?style=flat-square&logo=discord)](https://discord.gg/EDXNdAT)

[![NPM](https://nodei.co/npm/bloxy.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/bloxy)

# About

bloxy is a module for interacting with the [Roblox](https://www.roblox.com/) website and its API. It is object-oriented, which means you can have several users logged in at the same time, without a lot of effort.


# Installation

Make sure you've got [Node.js](https://nodejs.org/) installed and that you've got npm installed before proceeding.

Open up a terminal in the folder you want to install bloxy in and write in `npm install bloxy --save`, this will download & install bloxy and add it to your package.json file.



# Example usage

```JavaScript
const bloxy = require('bloxy');
const roblox = new bloxy();

roblox.login({
    username: "UsernameHere",
    password: "PasswordHere"
});

roblox.on('ready', function() {
    console.log("Logged in");
})

roblox.on('2fa', function (verify) {
    console.log("2FA is enabled on the account.");

    // ...Get the code
    verify(code);
});

```

***


# Links

- [Documentation](https://github.com/MartinRBX/bloxy/wiki)
- [Getting started](https://github.com/MartinRBX/bloxy/wiki/Getting-started)
- [Repository (Github)](https://github.com/MartinRBX/bloxy)
- [NPM](https://www.npmjs.com/package/bloxy)
- [Roblox API Discord Server](https://discord.gg/EDXNdAT)


# Contributing

If you'd like to contribute to bloxy, please visit the [GitHub page](https://github.com/MartinRBX/bloxy) and follow the pull requests / issue templates and follow them. 




# Help

If you don't understand some of the code in the examples, you need some help, or just a little push to get going, please join the [Roblox API Discord Server](https://discord.gg/EDXNdAT), there we will be able to quickly assist you with your issue.


# Information

Hi there, thank you for checking out bloxy. It's something I've been working on for some time and I appreciate that you found your way here.

Before you start using this module, I strongly recommend you to read the documentation for it, so you get to know how it works, and that you can see the parameters for each function, see all the classes' properties and methods, and stream events.

Bloxy was created since [roblox-js](https://github.com/sentanos/roblox-js) is no longer mainted properly by sentanos. (*Currently, the module is only being updated if there are major issues with it, AKA if it wouldn't work without the new fix at all*)


If there are any features that you'd like to have integrated with bloxy. Please submit an **issue** or dm me on Discord @ **Martini#0001**

Make sure to include as much information as possible.

# License 

## MIT



♥♥♥