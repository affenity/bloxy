"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilMergeDeep = void 0;
/* eslint-disable security/detect-object-injection */
function utilMergeDeep(baseObject, newObject) {
    const target = {};
    // Merge the object into the target object
    const internalMerger = (obj) => {
        for (const prop in obj) {
            // eslint-disable-next-line no-prototype-builtins
            if (obj.hasOwnProperty(prop)) {
                if (Object.prototype.toString.call(obj[prop]) === "[object Object]") {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    target[prop] = utilMergeDeep(target[prop], obj[prop]);
                }
                else {
                    // Otherwise, do a regular merge
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    target[prop] = obj[prop];
                }
            }
        }
    };
    internalMerger(baseObject);
    internalMerger(newObject);
    return target;
}
exports.utilMergeDeep = utilMergeDeep;
