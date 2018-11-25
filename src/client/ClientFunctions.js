/* eslint-disable indent */
const EventEmitter = require("events");
const fs           = require("fs");
const path         = require("path");

class ClientFunctions extends EventEmitter {

	constructor () {
		super();


		let data = fs.readdirSync(path.join(__dirname, "./methods/"));

        for (let num=0;num<data.length;num++) {

            let fileName = data[num];
            let name = fileName.split(".")[0];

            let file = require(path.join(__dirname, "./methods/", fileName));

            let conf = file.conf;
            conf.required = conf.required || {};


            this[name] = function (...args) {
                let params = [...args];
                
                if (conf.required.auth == true && !this._setup.authorized) throw new Error(`Function ${conf.name} requires you to be signed in.`);
                if (conf.required.params > params.length) throw new Error(`Function ${conf.name} requires you to provide ${conf.required.params} parameters, you only provided ${params.length}. Following parameters required: ${conf.params.map(x=>`\n- ${x}`)}`);


                return file.run.bind(this)(...args);
            };

        }

    }

}

module.exports = ClientFunctions;