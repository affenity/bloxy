This will be a quick "start-up guide", useful for new developers to see how this module works.

(I recommend using Visual Studio Code, as it has great debugging tools, and it supports JSDOC which means that you can see documentation while coding, and see the parameters without checking the docs. Download link to Visual Studio Code is [here](https://code.visualstudio.com/download)

<br>

### Installing the module

You need to have [NodeJS](https://nodejs.org) on whatever system that you use, download either the featured or latest version. 

To install the module to your current project, open up the terminal in your directory, and enter `npm install bloxy`, wait for the installation to finish.
That's it, no more, no less.


### Setting up and preparing to use the module

Now, once you have installed the module and you're ready to code, let's begin this little journey.
First, in your code, you have to *require* bloxy.

```JavaScript
let bloxy = require('bloxy')
```

Pretty easy if you ask me.
Now, enough chit-chat, it's time to begin for real (for real this time).

Now, you just required the module, but that is not enough to get things working.
bloxy is built up by classes (for documentation, see MDN's tutorial [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

You have to initialize bloxy before you can start using it, consider the code below:

```JavaScript
let bloxy = require('bloxy');
let roblox = new bloxy();
```

After you have done that, the variable "roblox" now has access to all methods and properties shown in the [BloxyClient](https://github.com/MartinRBX/bloxy/wiki/BloxyClient) page.
When initializing a bloxy client, you *can* also provide login credentials.
The new version of bloxy actually supports 2FA (two factor authentication) that roblox has added.
A tutorial on how to use it, can be found [here](https://github.com/MartinRBX/bloxy/wiki/Using-2FA-(two-factor-authentication))