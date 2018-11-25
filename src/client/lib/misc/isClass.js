

module.exports = function (obj, compareClass) {
	let objType = typeof(obj);


	if (objType === "object") {
		if (Array.isArray(obj)) {
			// Is an array
			return (obj.every(x=>x instanceof compareClass));
		} else if (!(obj instanceof compareClass)) {    
			// Is an object
			return (Object.keys(obj).every(k=>obj[k] instanceof compareClass));
		} else {
			return (obj instanceof compareClass);
		}
	} else return false;
};