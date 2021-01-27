/* eslint-disable security/detect-object-injection */
export const utilMergeDeep = (baseObject: Record<any, any>, newObject: Record<any, any>) => {
    const target = {};
    // Merge the object into the target object
    const internalMerger = (obj: Record<any, any>) => {
        for (const prop in obj) {
            // eslint-disable-next-line no-prototype-builtins
            if (obj.hasOwnProperty(prop)) {
                if (Object.prototype.toString.call(obj[prop]) === "[object Object]") {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    target[prop] = utilMergeDeep(target[prop] as Record<any, any>, obj[prop]);
                } else {
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
};
