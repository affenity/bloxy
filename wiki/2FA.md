## Intro
Yes, you read it. bloxy supports 2FA.
This page will explain how to use it, and give an example of how to use it.


(Note: If you are using cookies to log in with, you are already logged in using your account, so you don't have to do this. Also note that if you are only signed in to a single device, and you log out, the cookie you provided will be invalid instantly)

Now, in the getting started tutorial, you saw how to install this module, and initialize it. This tutorial, will take it from the point where you initialized the bloxy client.

Meaning, the code looks like this:

```JavaScript
let bloxy = require('bloxy');
let roblox = new bloxy();
```

## Continuing
Now, when creating a bloxy client, it takes the following parameters.

```
> new bloxy(settings)

settings {
   type: 'username' | 'phone' | 'mail',
   value: 'username' | '1234' | 'mail@mail.com',
   password: 'Password',
}

-- OR you can sign in using cookies

settings {
   cookie: 'cookie'
}
```

Meaning, you can sign in using either username/phone/mail and the password, OR using the .ROBLOSECURITY cookie of your account. bloxy will automatically validate the credentials you input to make sure that they follow either of those options.

Now, you have to login, and that's pretty easy.

```JavaScript

let bloxy = require('bloxy')

let bloxyClient = new bloxy({
   type: 'username',
   value: 'username',
   password: 'password'
})

bloxyClient.login();

bloxyClient.on('ready', function() {

})
```

After you have logged in, you can use all methods BloxyClient has to offer, which contains *all* the methods available of bloxy. But if your account has 2FA enabled, you cannot use methods that require you to be signed in.

Now, this is where 2FA comes. Roblox sends you a 2FA code to your email (or phone?), and then you input it, and you get access to the roblox website. This is almost exactly what bloxy also does as well. How you get your verification code, and then verifies it, is up to you. I only added 2FA support.

Now, in the full bloxy class, there is a property called "twostep" (accessed like: roblox.twostep).


These are the properties and functions of that property.
``` 
twostep {
   enabled: true | false,
   ticket: 'string',
   type: 'email',
   user: 'username'
   verified: true | false,
   verify: AsyncFunction(code)
}
``` 

Now, consider the following code:


## Example

```JavaScript

let bloxy = require('bloxy')

let roblox = new bloxy({
    username: 'Username',
    password: 'Password'
})

roblox.login();

roblox.on('ready', function() {
    if (roblox._setup.authTab.TwoStep.enabled == true) {
        roblox._setup.authTab.TwoStep.verify('3123211').then(success=>{
            console.log("2FA Success: " + success);
        })
    }
})
```

What this code does, is that it first requires the `bloxy` module, then intializes a new bloxy client with login credentials, then logs in. It emits 'ready' whenever the user has successfully logged in and is ready to proceed.

Then, it checks if twostep is enabled on the account, and if it is, it called the function verify and gave the verification code as a paremeter.

If that was very complicated, I've made a layout below


## Split up
required bloxy
```JavaScript
let bloxy = require('bloxy')
```

created bloxy client
```JavaScript
let roblox = new bloxy()
```

entered the login credentials
```JavaScript
let roblox = new bloxy({
    username: 'Username',
    password: 'Password'
})
```

logs in
```JavaScript
roblox.login()
```

gets the full bloxy client 
```JavaScript
roblox.on('ready', function () {

})
```

Checks if the user has 2FA enabled and verifies with the verification code from Roblox
```JavaScript
if (roblox._setup.authTab.TwoStep.enabled) {
    roblox._setup.authTab.TwoStep.verify('3123211').then(success=>{
        console.log(success);
    })
}
```

That is pretty much how to use 2FA with bloxy.
Thanks for reading!