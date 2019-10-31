module.exports = (withObj, toClass) => {
	const objType = typeof withObj;

	// Making sure it's an object, if not, it's not a class. Return false
	if (objType !== "object") return false;


	// --> If the withObj is an array, compare each value with toClass and make sure it's the same class
	if (Array.isArray(withObj) && !Array.isArray(toClass)) {
		return withObj.every(x => x instanceof toClass);

		// --> If withObj and toClass are arrays, compare each value with each other
	} else if (Array.isArray(withObj) && Array.isArray(toClass)) {
		return withObj.every(obj => toClass.some(cls => obj instanceof cls));

		// --> If withObj is not an array, but toClass is, check if withObj is the class of any value in toClass
	} else if (!Array.isArray(withObj) && Array.isArray(toClass)) {
		return toClass.some(cls => withObj instanceof cls);

		// --> Just check the type, dude
	} else { return withObj instanceof toClass; }
};
