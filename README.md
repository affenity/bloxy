<p align="center">
  <img width="25%" height="25%" src="https://media.discordapp.net/attachments/513102278538821647/516007264717373451/0yellow_bloxy.png">
</p>

***

<div align="center">
<br>
    <p>
    <a href="https://npmjs.com/package/bloxy"><img src="https://img.shields.io/npm/v/bloxy.svg?maxAge=3600&style=flat-square" alt="NPM"></a>
    <a href="https://npmjs.com/package/bloxy"><img src="https://img.shields.io/npm/dt/bloxy.svg?maxAge=3600&style=flat-square" alt="Downloads"></a>
<a href="https://app.fossa.io/projects/git%2Bgithub.com%2FVisualizememe%2Fbloxy?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2FVisualizememe%2Fbloxy.svg?type=shield"/></a>
<a href="https://discord.gg/EDXNdAT"><img src="https://img.shields.io/badge/discord-roblox%20api%20chat-blue.svg?style=flat-square&logo=discord" alt="Roblox API Discord"></a>
<a href="https://www.codacy.com/manual/martin_47/bloxy?utm_source=github.com&utm_medium=referral&utm_content=Visualizememe/bloxy&utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/560bc4f4762842f5b014a880e488d64d?isInternal=true" alt="Codacy grade B"></a>      

</p>
<br>
<p>
<a href="https://www.npmjs.com/package/bloxy"><img src="https://nodei.co/npm/bloxy.png?downloads=true&downloadRank=true&stars=true" alt="NPM Package"></a>
</p>
</div>

# Warning
You are currently viewing the dev version of bloxy, it can be unstable as it has not been tested properly.
Additionally, in order to install the dev version, you need to type in: 

```npm install visualizememe/bloxy#dev```

## About

A powerful Node.JS module that lets you interact with the Roblox Web API easily, fast and reliably.
- It is object-oriented (OO)
- It's got great documentation
- Predictable method -and property names
- Highest coverage of the api of all the other modules on NPM!

## Getting Started

Bloxy has 4 dependencies:

- [**request**](https://www.npmjs.com/package/request) - To easily deal with HTTP requests
- [**node-cache**](https://www.npmjs.com/package/node-cache) - Used for caching
- [**signalr-client**](https://www.npmjs.com/package/signalr-client) - To connect with a WebSocket endpoint
- [**@hapi/joi**](https://npmjs.com/package/@hapi/joi) - To deal with type validation

Make sure you are able to install each and every one of these packages as they are all vital to the functionality of this module!

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

## Versioning
<details><summary>Release history</summary>

| Version | Date | Description |
| ------------ | -------- | ------------------ |
| 4.0.0 | 21-07-2019 | v4 Release of bloxy (finally!) |

</details>


## Examples
Check out below for some examples of how to use bloxy!

---

<details><summary>Logging in</summary>

<h5>With cookies</h5>


```js
const bloxy = require("bloxy");
const roblox = new bloxy.Client({
    cookie: ".ROBLOSECURITY"
});

roblox.login().then( (user) => {
    console.log(`Logged in as ${roblox.user.id}`);
    // --> "Logged in as 1234" 
});
```

</details>

<details><summary>Promoting a user</summary>

```js
const bloxy = require("bloxy");
const roblox = new bloxy({
    cookie: ""
});

roblox.login().then( async () => {
    const group = await roblox.getGroup(12345);
    const promoted = await group.promote(12345);
    	
    console.log(`Promoted user to ${promoted.name}`);
    // --> "Promoted user to <name>"
});
```
</details>

## Acknowledgements

* **Sentanos** - *For helpful solutions and ideas* - [roblox-js](https://github.com/sentanos/roblox-js)


## License

This project is licensed under the MIT License.


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FVisualizememe%2Fbloxy.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FVisualizememe%2Fbloxy?ref=badge_large)
