const getRoles = require('./getRoles.js');
var groupClass = require('../class.js');


module.exports = async function (groupId, args) {
    
    var newPromise = new Promise(function (resolve, reject) {
        getRoles(groupId, args).then(roles => {
            var rank = args.rank;
            var name = args.name;
            var id = args.id;
            if (rank) {
                if (rank > 255 || rank <= 0) reject("Please give a valid rank number between 0 and 255")
            }

            var found = {}
            var result = [];
            for (var x = 0; x < roles.length; x++) {
                var role = roles[x];

                var find;
                if (rank && role.Rank == rank) {
                    find = role
                } else if (name && role.Name.toLowerCase() == name.toLowerCase()) {
                    find = role
                } else if (id && id == role.Id) {
                    find = role
                }


                if (find != null) {
                    result[0] = find;
                    resolve(find);
                }
            }

            resolve(result[0]);
        })
    })
    let getRole = await newPromise;
    if (getRole!=null) return new groupClass.GroupRole(getRole, groupId, {jar:args.jar, xcsrf:args.xcsrf});
    return null;
}