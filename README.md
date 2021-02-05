<p align="center">
  <img width="25%" height="25%" src="https://media.discordapp.net/attachments/513102278538821647/516007264717373451/0yellow_bloxy.png">
</p>

***

<div align="center">
    <p>

[![NPM](https://img.shields.io/npm/v/bloxy.svg?maxAge=3600&style=flat-square)](https://npmjs.com/package/bloxy)
[![CircleCI](https://circleci.com/gh/Visualizememe/bloxy.svg?style=svg)](https://circleci.com/gh/Visualizememe/bloxy)
[![codecov](https://codecov.io/gh/Visualizememe/bloxy/branch/main/graph/badge.svg)](https://codecov.io/gh/Visualizememe/bloxy)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9dee8c70dd8e402f9a2f97831b98a723)](https://www.codacy.com/gh/Visualizememe/bloxy/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Visualizememe/bloxy&amp;utm_campaign=Badge_Grade)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FVisualizememe%2Fbloxy.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FVisualizememe%2Fbloxy?ref=badge_shield)
[![Dependencies Status](https://status.david-dm.org/gh/Visualizememe/bloxy.svg)](https://david-dm.org/Visualizememe/bloxy)
<a href="https://discord.gg/EDXNdAT"><img src="https://img.shields.io/badge/discord-roblox%20api%20chat-blue.svg?style=flat-square&logo=discord" alt="Roblox API Discord"></a>
</p>

<p>
<br/>
<a href="https://www.npmjs.com/package/bloxy"><img src="https://nodei.co/npm/bloxy.png?downloads=true&downloadRank=true&stars=true" alt="NPM Package"></a>
</p>
</div>

----

## About
*This version is currently in development and may have unforeseen and/or untested bugs.
If you find any, please, open up an issue / pull request, so we can make bloxy better together*


A powerful Node.JS module that lets you interact with the Roblox Web API easily, fast and reliably.
- It is object-oriented (OO)
- It's got great documentation
- Predictable method -and property names
- Highest coverage of the api of all the other modules on NPM!

## Getting Started

Bloxy has 5 dependencies:

- [**got**](https://www.npmjs.com/package/got) - To handle the HTTP requests (bloxy allows your own)
- [**lodash**](https://www.npmjs.com/package/lodash) - For various purposes
- [**signalr-client**](https://www.npmjs.com/package/signalr-client) - To connect with the WebSocket endpoints
- [**tough-cookie**](https://npmjs.com/package/tough-cookie) - For everything cookie-related
- [**tslib**](https://npmjs.com/package/tslib) Necessary with built TypeScript projects :)

Make sure you are able to install each one of these packages, as they are all vital to the functionality of this module!

### Prerequisites

To be able to use bloxy, here's what you need to know:

- some knowledge of OOP and how it works
- knowledge about JS
- <s>a computer</s>

### Installing

Installing bloxy is easy! Simply enter the following command, and you should be good to go👍

```
npm install bloxy --save
```

Installing the dependencies may take longer!

## Contributing

Please, before making an issue or pull request, please make sure you have done this already:
- **Made sure there are no similar issues / PRs like this** - if so, rather give them a comment!
- **Asked for help in the *[Roblox API Community]()*** - Sometimes, even the best of us need help.
- (Issues only) **Follow the style / template as shown in [example-issue]()** - Consistency works!


## Examples
Check out below for some examples of how to use bloxy!

---

<details><summary>Logging in</summary>

<h5>With cookies</h5>


```js
// In an async environment
const bloxy = require("bloxy");
const client = new bloxy.Client({
    credentials: {
        cookie: "cookie"
    }
});

const authenticatedUser = await client.login();
console.log(`Logged in as ${authenticatedUser.id}`) // --> "Logged in as X"
```

</details>

<details><summary>Giving a user a certain role</summary>

```js
const bloxy = require("bloxy");
const client = new bloxy.Client({
    credentials: {
        cookie: "cookie"
    }
});

await client.login();

const group = await client.getGroup(3544434);
await group.updateMember(
    321, // User id
    123 // Role id
);
```
</details>

## Acknowledgements

* **Sentanos** - *For helpful solutions and ideas* - [roblox-js](https://github.com/sentanos/roblox-js)


## License

This project is licensed under the MIT License.


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FVisualizememe%2Fbloxy.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FVisualizememe%2Fbloxy?ref=badge_large)
