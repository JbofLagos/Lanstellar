"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/fast-copy";
exports.ids = ["vendor-chunks/fast-copy"];
exports.modules = {

/***/ "(ssr)/./node_modules/fast-copy/dist/cjs/index.cjs":
/*!***************************************************!*\
  !*** ./node_modules/fast-copy/dist/cjs/index.cjs ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar toStringFunction = Function.prototype.toString;\nvar create = Object.create;\nvar toStringObject = Object.prototype.toString;\n/**\n * @classdesc Fallback cache for when WeakMap is not natively supported\n */\nvar LegacyCache = /** @class */ (function () {\n    function LegacyCache() {\n        this._keys = [];\n        this._values = [];\n    }\n    LegacyCache.prototype.has = function (key) {\n        return !!~this._keys.indexOf(key);\n    };\n    LegacyCache.prototype.get = function (key) {\n        return this._values[this._keys.indexOf(key)];\n    };\n    LegacyCache.prototype.set = function (key, value) {\n        this._keys.push(key);\n        this._values.push(value);\n    };\n    return LegacyCache;\n}());\nfunction createCacheLegacy() {\n    return new LegacyCache();\n}\nfunction createCacheModern() {\n    return new WeakMap();\n}\n/**\n * Get a new cache object to prevent circular references.\n */\nvar createCache = typeof WeakMap !== 'undefined' ? createCacheModern : createCacheLegacy;\n/**\n * Get an empty version of the object with the same prototype it has.\n */\nfunction getCleanClone(prototype) {\n    if (!prototype) {\n        return create(null);\n    }\n    var Constructor = prototype.constructor;\n    if (Constructor === Object) {\n        return prototype === Object.prototype ? {} : create(prototype);\n    }\n    if (Constructor &&\n        ~toStringFunction.call(Constructor).indexOf('[native code]')) {\n        try {\n            return new Constructor();\n        }\n        catch (_a) { }\n    }\n    return create(prototype);\n}\nfunction getRegExpFlagsLegacy(regExp) {\n    var flags = '';\n    if (regExp.global) {\n        flags += 'g';\n    }\n    if (regExp.ignoreCase) {\n        flags += 'i';\n    }\n    if (regExp.multiline) {\n        flags += 'm';\n    }\n    if (regExp.unicode) {\n        flags += 'u';\n    }\n    if (regExp.sticky) {\n        flags += 'y';\n    }\n    return flags;\n}\nfunction getRegExpFlagsModern(regExp) {\n    return regExp.flags;\n}\n/**\n * Get the flags to apply to the copied regexp.\n */\nvar getRegExpFlags = /test/g.flags === 'g' ? getRegExpFlagsModern : getRegExpFlagsLegacy;\nfunction getTagLegacy(value) {\n    var type = toStringObject.call(value);\n    return type.substring(8, type.length - 1);\n}\nfunction getTagModern(value) {\n    return value[Symbol.toStringTag] || getTagLegacy(value);\n}\n/**\n * Get the tag of the value passed, so that the correct copier can be used.\n */\nvar getTag = typeof Symbol !== 'undefined' ? getTagModern : getTagLegacy;\n\nvar defineProperty = Object.defineProperty, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar _a = Object.prototype, hasOwnProperty = _a.hasOwnProperty, propertyIsEnumerable = _a.propertyIsEnumerable;\nvar SUPPORTS_SYMBOL = typeof getOwnPropertySymbols === 'function';\nfunction getStrictPropertiesModern(object) {\n    return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));\n}\n/**\n * Get the properites used when copying objects strictly. This includes both keys and symbols.\n */\nvar getStrictProperties = SUPPORTS_SYMBOL\n    ? getStrictPropertiesModern\n    : getOwnPropertyNames;\n/**\n * Striclty copy all properties contained on the object.\n */\nfunction copyOwnPropertiesStrict(value, clone, state) {\n    var properties = getStrictProperties(value);\n    for (var index = 0, length_1 = properties.length, property = void 0, descriptor = void 0; index < length_1; ++index) {\n        property = properties[index];\n        if (property === 'callee' || property === 'caller') {\n            continue;\n        }\n        descriptor = getOwnPropertyDescriptor(value, property);\n        if (!descriptor) {\n            // In extra edge cases where the property descriptor cannot be retrived, fall back to\n            // the loose assignment.\n            clone[property] = state.copier(value[property], state);\n            continue;\n        }\n        // Only clone the value if actually a value, not a getter / setter.\n        if (!descriptor.get && !descriptor.set) {\n            descriptor.value = state.copier(descriptor.value, state);\n        }\n        try {\n            defineProperty(clone, property, descriptor);\n        }\n        catch (error) {\n            // Tee above can fail on node in edge cases, so fall back to the loose assignment.\n            clone[property] = descriptor.value;\n        }\n    }\n    return clone;\n}\n/**\n * Deeply copy the indexed values in the array.\n */\nfunction copyArrayLoose(array, state) {\n    var clone = new state.Constructor();\n    // set in the cache immediately to be able to reuse the object recursively\n    state.cache.set(array, clone);\n    for (var index = 0, length_2 = array.length; index < length_2; ++index) {\n        clone[index] = state.copier(array[index], state);\n    }\n    return clone;\n}\n/**\n * Deeply copy the indexed values in the array, as well as any custom properties.\n */\nfunction copyArrayStrict(array, state) {\n    var clone = new state.Constructor();\n    // set in the cache immediately to be able to reuse the object recursively\n    state.cache.set(array, clone);\n    return copyOwnPropertiesStrict(array, clone, state);\n}\n/**\n * Copy the contents of the ArrayBuffer.\n */\nfunction copyArrayBuffer(arrayBuffer, _state) {\n    return arrayBuffer.slice(0);\n}\n/**\n * Create a new Blob with the contents of the original.\n */\nfunction copyBlob(blob, _state) {\n    return blob.slice(0, blob.size, blob.type);\n}\n/**\n * Create a new DataView with the contents of the original.\n */\nfunction copyDataView(dataView, state) {\n    return new state.Constructor(copyArrayBuffer(dataView.buffer));\n}\n/**\n * Create a new Date based on the time of the original.\n */\nfunction copyDate(date, state) {\n    return new state.Constructor(date.getTime());\n}\n/**\n * Deeply copy the keys and values of the original.\n */\nfunction copyMapLoose(map, state) {\n    var clone = new state.Constructor();\n    // set in the cache immediately to be able to reuse the object recursively\n    state.cache.set(map, clone);\n    map.forEach(function (value, key) {\n        clone.set(key, state.copier(value, state));\n    });\n    return clone;\n}\n/**\n * Deeply copy the keys and values of the original, as well as any custom properties.\n */\nfunction copyMapStrict(map, state) {\n    return copyOwnPropertiesStrict(map, copyMapLoose(map, state), state);\n}\nfunction copyObjectLooseLegacy(object, state) {\n    var clone = getCleanClone(state.prototype);\n    // set in the cache immediately to be able to reuse the object recursively\n    state.cache.set(object, clone);\n    for (var key in object) {\n        if (hasOwnProperty.call(object, key)) {\n            clone[key] = state.copier(object[key], state);\n        }\n    }\n    return clone;\n}\nfunction copyObjectLooseModern(object, state) {\n    var clone = getCleanClone(state.prototype);\n    // set in the cache immediately to be able to reuse the object recursively\n    state.cache.set(object, clone);\n    for (var key in object) {\n        if (hasOwnProperty.call(object, key)) {\n            clone[key] = state.copier(object[key], state);\n        }\n    }\n    var symbols = getOwnPropertySymbols(object);\n    for (var index = 0, length_3 = symbols.length, symbol = void 0; index < length_3; ++index) {\n        symbol = symbols[index];\n        if (propertyIsEnumerable.call(object, symbol)) {\n            clone[symbol] = state.copier(object[symbol], state);\n        }\n    }\n    return clone;\n}\n/**\n * Deeply copy the properties (keys and symbols) and values of the original.\n */\nvar copyObjectLoose = SUPPORTS_SYMBOL\n    ? copyObjectLooseModern\n    : copyObjectLooseLegacy;\n/**\n * Deeply copy the properties (keys and symbols) and values of the original, as well\n * as any hidden or non-enumerable properties.\n */\nfunction copyObjectStrict(object, state) {\n    var clone = getCleanClone(state.prototype);\n    // set in the cache immediately to be able to reuse the object recursively\n    state.cache.set(object, clone);\n    return copyOwnPropertiesStrict(object, clone, state);\n}\n/**\n * Create a new primitive wrapper from the value of the original.\n */\nfunction copyPrimitiveWrapper(primitiveObject, state) {\n    return new state.Constructor(primitiveObject.valueOf());\n}\n/**\n * Create a new RegExp based on the value and flags of the original.\n */\nfunction copyRegExp(regExp, state) {\n    var clone = new state.Constructor(regExp.source, getRegExpFlags(regExp));\n    clone.lastIndex = regExp.lastIndex;\n    return clone;\n}\n/**\n * Return the original value (an identity function).\n *\n * @note\n * THis is used for objects that cannot be copied, such as WeakMap.\n */\nfunction copySelf(value, _state) {\n    return value;\n}\n/**\n * Deeply copy the values of the original.\n */\nfunction copySetLoose(set, state) {\n    var clone = new state.Constructor();\n    // set in the cache immediately to be able to reuse the object recursively\n    state.cache.set(set, clone);\n    set.forEach(function (value) {\n        clone.add(state.copier(value, state));\n    });\n    return clone;\n}\n/**\n * Deeply copy the values of the original, as well as any custom properties.\n */\nfunction copySetStrict(set, state) {\n    return copyOwnPropertiesStrict(set, copySetLoose(set, state), state);\n}\n\nvar isArray = Array.isArray;\nvar assign = Object.assign;\nvar getPrototypeOf = Object.getPrototypeOf || (function (obj) { return obj.__proto__; });\nvar DEFAULT_LOOSE_OPTIONS = {\n    array: copyArrayLoose,\n    arrayBuffer: copyArrayBuffer,\n    blob: copyBlob,\n    dataView: copyDataView,\n    date: copyDate,\n    error: copySelf,\n    map: copyMapLoose,\n    object: copyObjectLoose,\n    regExp: copyRegExp,\n    set: copySetLoose,\n};\nvar DEFAULT_STRICT_OPTIONS = assign({}, DEFAULT_LOOSE_OPTIONS, {\n    array: copyArrayStrict,\n    map: copyMapStrict,\n    object: copyObjectStrict,\n    set: copySetStrict,\n});\n/**\n * Get the copiers used for each specific object tag.\n */\nfunction getTagSpecificCopiers(options) {\n    return {\n        Arguments: options.object,\n        Array: options.array,\n        ArrayBuffer: options.arrayBuffer,\n        Blob: options.blob,\n        Boolean: copyPrimitiveWrapper,\n        DataView: options.dataView,\n        Date: options.date,\n        Error: options.error,\n        Float32Array: options.arrayBuffer,\n        Float64Array: options.arrayBuffer,\n        Int8Array: options.arrayBuffer,\n        Int16Array: options.arrayBuffer,\n        Int32Array: options.arrayBuffer,\n        Map: options.map,\n        Number: copyPrimitiveWrapper,\n        Object: options.object,\n        Promise: copySelf,\n        RegExp: options.regExp,\n        Set: options.set,\n        String: copyPrimitiveWrapper,\n        WeakMap: copySelf,\n        WeakSet: copySelf,\n        Uint8Array: options.arrayBuffer,\n        Uint8ClampedArray: options.arrayBuffer,\n        Uint16Array: options.arrayBuffer,\n        Uint32Array: options.arrayBuffer,\n        Uint64Array: options.arrayBuffer,\n    };\n}\n/**\n * Create a custom copier based on the object-specific copy methods passed.\n */\nfunction createCopier(options) {\n    var normalizedOptions = assign({}, DEFAULT_LOOSE_OPTIONS, options);\n    var tagSpecificCopiers = getTagSpecificCopiers(normalizedOptions);\n    var array = tagSpecificCopiers.Array, object = tagSpecificCopiers.Object;\n    function copier(value, state) {\n        state.prototype = state.Constructor = undefined;\n        if (!value || typeof value !== 'object') {\n            return value;\n        }\n        if (state.cache.has(value)) {\n            return state.cache.get(value);\n        }\n        state.prototype = getPrototypeOf(value);\n        state.Constructor = state.prototype && state.prototype.constructor;\n        // plain objects\n        if (!state.Constructor || state.Constructor === Object) {\n            return object(value, state);\n        }\n        // arrays\n        if (isArray(value)) {\n            return array(value, state);\n        }\n        var tagSpecificCopier = tagSpecificCopiers[getTag(value)];\n        if (tagSpecificCopier) {\n            return tagSpecificCopier(value, state);\n        }\n        return typeof value.then === 'function' ? value : object(value, state);\n    }\n    return function copy(value) {\n        return copier(value, {\n            Constructor: undefined,\n            cache: createCache(),\n            copier: copier,\n            prototype: undefined,\n        });\n    };\n}\n/**\n * Create a custom copier based on the object-specific copy methods passed, defaulting to the\n * same internals as `copyStrict`.\n */\nfunction createStrictCopier(options) {\n    return createCopier(assign({}, DEFAULT_STRICT_OPTIONS, options));\n}\n/**\n * Copy an value deeply as much as possible, where strict recreation of object properties\n * are maintained. All properties (including non-enumerable ones) are copied with their\n * original property descriptors on both objects and arrays.\n */\nvar copyStrict = createStrictCopier({});\n/**\n * Copy an value deeply as much as possible.\n */\nvar index = createCopier({});\n\nexports.copyStrict = copyStrict;\nexports.createCopier = createCopier;\nexports.createStrictCopier = createStrictCopier;\nexports[\"default\"] = index;\n//# sourceMappingURL=index.cjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZmFzdC1jb3B5L2Rpc3QvY2pzL2luZGV4LmNqcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGQUE4RixrQkFBa0I7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxrQkFBa0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxrQkFBa0I7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0VBQWdFLHVCQUF1QjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsMEJBQTBCO0FBQzFCLGtCQUFlO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5zdGVsbGFyLy4vbm9kZV9tb2R1bGVzL2Zhc3QtY29weS9kaXN0L2Nqcy9pbmRleC5janM/NTEwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB0b1N0cmluZ0Z1bmN0aW9uID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgdG9TdHJpbmdPYmplY3QgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuLyoqXG4gKiBAY2xhc3NkZXNjIEZhbGxiYWNrIGNhY2hlIGZvciB3aGVuIFdlYWtNYXAgaXMgbm90IG5hdGl2ZWx5IHN1cHBvcnRlZFxuICovXG52YXIgTGVnYWN5Q2FjaGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGVnYWN5Q2FjaGUoKSB7XG4gICAgICAgIHRoaXMuX2tleXMgPSBbXTtcbiAgICAgICAgdGhpcy5fdmFsdWVzID0gW107XG4gICAgfVxuICAgIExlZ2FjeUNhY2hlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiAhIX50aGlzLl9rZXlzLmluZGV4T2Yoa2V5KTtcbiAgICB9O1xuICAgIExlZ2FjeUNhY2hlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZXNbdGhpcy5fa2V5cy5pbmRleE9mKGtleSldO1xuICAgIH07XG4gICAgTGVnYWN5Q2FjaGUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2tleXMucHVzaChrZXkpO1xuICAgICAgICB0aGlzLl92YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gTGVnYWN5Q2FjaGU7XG59KCkpO1xuZnVuY3Rpb24gY3JlYXRlQ2FjaGVMZWdhY3koKSB7XG4gICAgcmV0dXJuIG5ldyBMZWdhY3lDYWNoZSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlQ2FjaGVNb2Rlcm4oKSB7XG4gICAgcmV0dXJuIG5ldyBXZWFrTWFwKCk7XG59XG4vKipcbiAqIEdldCBhIG5ldyBjYWNoZSBvYmplY3QgdG8gcHJldmVudCBjaXJjdWxhciByZWZlcmVuY2VzLlxuICovXG52YXIgY3JlYXRlQ2FjaGUgPSB0eXBlb2YgV2Vha01hcCAhPT0gJ3VuZGVmaW5lZCcgPyBjcmVhdGVDYWNoZU1vZGVybiA6IGNyZWF0ZUNhY2hlTGVnYWN5O1xuLyoqXG4gKiBHZXQgYW4gZW1wdHkgdmVyc2lvbiBvZiB0aGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgcHJvdG90eXBlIGl0IGhhcy5cbiAqL1xuZnVuY3Rpb24gZ2V0Q2xlYW5DbG9uZShwcm90b3R5cGUpIHtcbiAgICBpZiAoIXByb3RvdHlwZSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlKG51bGwpO1xuICAgIH1cbiAgICB2YXIgQ29uc3RydWN0b3IgPSBwcm90b3R5cGUuY29uc3RydWN0b3I7XG4gICAgaWYgKENvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZSA/IHt9IDogY3JlYXRlKHByb3RvdHlwZSk7XG4gICAgfVxuICAgIGlmIChDb25zdHJ1Y3RvciAmJlxuICAgICAgICB+dG9TdHJpbmdGdW5jdGlvbi5jYWxsKENvbnN0cnVjdG9yKS5pbmRleE9mKCdbbmF0aXZlIGNvZGVdJykpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHsgfVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlKHByb3RvdHlwZSk7XG59XG5mdW5jdGlvbiBnZXRSZWdFeHBGbGFnc0xlZ2FjeShyZWdFeHApIHtcbiAgICB2YXIgZmxhZ3MgPSAnJztcbiAgICBpZiAocmVnRXhwLmdsb2JhbCkge1xuICAgICAgICBmbGFncyArPSAnZyc7XG4gICAgfVxuICAgIGlmIChyZWdFeHAuaWdub3JlQ2FzZSkge1xuICAgICAgICBmbGFncyArPSAnaSc7XG4gICAgfVxuICAgIGlmIChyZWdFeHAubXVsdGlsaW5lKSB7XG4gICAgICAgIGZsYWdzICs9ICdtJztcbiAgICB9XG4gICAgaWYgKHJlZ0V4cC51bmljb2RlKSB7XG4gICAgICAgIGZsYWdzICs9ICd1JztcbiAgICB9XG4gICAgaWYgKHJlZ0V4cC5zdGlja3kpIHtcbiAgICAgICAgZmxhZ3MgKz0gJ3knO1xuICAgIH1cbiAgICByZXR1cm4gZmxhZ3M7XG59XG5mdW5jdGlvbiBnZXRSZWdFeHBGbGFnc01vZGVybihyZWdFeHApIHtcbiAgICByZXR1cm4gcmVnRXhwLmZsYWdzO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIHRvIGFwcGx5IHRvIHRoZSBjb3BpZWQgcmVnZXhwLlxuICovXG52YXIgZ2V0UmVnRXhwRmxhZ3MgPSAvdGVzdC9nLmZsYWdzID09PSAnZycgPyBnZXRSZWdFeHBGbGFnc01vZGVybiA6IGdldFJlZ0V4cEZsYWdzTGVnYWN5O1xuZnVuY3Rpb24gZ2V0VGFnTGVnYWN5KHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSB0b1N0cmluZ09iamVjdC5jYWxsKHZhbHVlKTtcbiAgICByZXR1cm4gdHlwZS5zdWJzdHJpbmcoOCwgdHlwZS5sZW5ndGggLSAxKTtcbn1cbmZ1bmN0aW9uIGdldFRhZ01vZGVybih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IGdldFRhZ0xlZ2FjeSh2YWx1ZSk7XG59XG4vKipcbiAqIEdldCB0aGUgdGFnIG9mIHRoZSB2YWx1ZSBwYXNzZWQsIHNvIHRoYXQgdGhlIGNvcnJlY3QgY29waWVyIGNhbiBiZSB1c2VkLlxuICovXG52YXIgZ2V0VGFnID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBnZXRUYWdNb2Rlcm4gOiBnZXRUYWdMZWdhY3k7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciwgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIF9hID0gT2JqZWN0LnByb3RvdHlwZSwgaGFzT3duUHJvcGVydHkgPSBfYS5oYXNPd25Qcm9wZXJ0eSwgcHJvcGVydHlJc0VudW1lcmFibGUgPSBfYS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTVVBQT1JUU19TWU1CT0wgPSB0eXBlb2YgZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nO1xuZnVuY3Rpb24gZ2V0U3RyaWN0UHJvcGVydGllc01vZGVybihvYmplY3QpIHtcbiAgICByZXR1cm4gZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KSk7XG59XG4vKipcbiAqIEdldCB0aGUgcHJvcGVyaXRlcyB1c2VkIHdoZW4gY29weWluZyBvYmplY3RzIHN0cmljdGx5LiBUaGlzIGluY2x1ZGVzIGJvdGgga2V5cyBhbmQgc3ltYm9scy5cbiAqL1xudmFyIGdldFN0cmljdFByb3BlcnRpZXMgPSBTVVBQT1JUU19TWU1CT0xcbiAgICA/IGdldFN0cmljdFByb3BlcnRpZXNNb2Rlcm5cbiAgICA6IGdldE93blByb3BlcnR5TmFtZXM7XG4vKipcbiAqIFN0cmljbHR5IGNvcHkgYWxsIHByb3BlcnRpZXMgY29udGFpbmVkIG9uIHRoZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPd25Qcm9wZXJ0aWVzU3RyaWN0KHZhbHVlLCBjbG9uZSwgc3RhdGUpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IGdldFN0cmljdFByb3BlcnRpZXModmFsdWUpO1xuICAgIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoXzEgPSBwcm9wZXJ0aWVzLmxlbmd0aCwgcHJvcGVydHkgPSB2b2lkIDAsIGRlc2NyaXB0b3IgPSB2b2lkIDA7IGluZGV4IDwgbGVuZ3RoXzE7ICsraW5kZXgpIHtcbiAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0aWVzW2luZGV4XTtcbiAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnY2FsbGVlJyB8fCBwcm9wZXJ0eSA9PT0gJ2NhbGxlcicpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIHByb3BlcnR5KTtcbiAgICAgICAgaWYgKCFkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICAvLyBJbiBleHRyYSBlZGdlIGNhc2VzIHdoZXJlIHRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIGNhbm5vdCBiZSByZXRyaXZlZCwgZmFsbCBiYWNrIHRvXG4gICAgICAgICAgICAvLyB0aGUgbG9vc2UgYXNzaWdubWVudC5cbiAgICAgICAgICAgIGNsb25lW3Byb3BlcnR5XSA9IHN0YXRlLmNvcGllcih2YWx1ZVtwcm9wZXJ0eV0sIHN0YXRlKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE9ubHkgY2xvbmUgdGhlIHZhbHVlIGlmIGFjdHVhbGx5IGEgdmFsdWUsIG5vdCBhIGdldHRlciAvIHNldHRlci5cbiAgICAgICAgaWYgKCFkZXNjcmlwdG9yLmdldCAmJiAhZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBzdGF0ZS5jb3BpZXIoZGVzY3JpcHRvci52YWx1ZSwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShjbG9uZSwgcHJvcGVydHksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gVGVlIGFib3ZlIGNhbiBmYWlsIG9uIG5vZGUgaW4gZWRnZSBjYXNlcywgc28gZmFsbCBiYWNrIHRvIHRoZSBsb29zZSBhc3NpZ25tZW50LlxuICAgICAgICAgICAgY2xvbmVbcHJvcGVydHldID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xvbmU7XG59XG4vKipcbiAqIERlZXBseSBjb3B5IHRoZSBpbmRleGVkIHZhbHVlcyBpbiB0aGUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheUxvb3NlKGFycmF5LCBzdGF0ZSkge1xuICAgIHZhciBjbG9uZSA9IG5ldyBzdGF0ZS5Db25zdHJ1Y3RvcigpO1xuICAgIC8vIHNldCBpbiB0aGUgY2FjaGUgaW1tZWRpYXRlbHkgdG8gYmUgYWJsZSB0byByZXVzZSB0aGUgb2JqZWN0IHJlY3Vyc2l2ZWx5XG4gICAgc3RhdGUuY2FjaGUuc2V0KGFycmF5LCBjbG9uZSk7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGhfMiA9IGFycmF5Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGhfMjsgKytpbmRleCkge1xuICAgICAgICBjbG9uZVtpbmRleF0gPSBzdGF0ZS5jb3BpZXIoYXJyYXlbaW5kZXhdLCBzdGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBjbG9uZTtcbn1cbi8qKlxuICogRGVlcGx5IGNvcHkgdGhlIGluZGV4ZWQgdmFsdWVzIGluIHRoZSBhcnJheSwgYXMgd2VsbCBhcyBhbnkgY3VzdG9tIHByb3BlcnRpZXMuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheVN0cmljdChhcnJheSwgc3RhdGUpIHtcbiAgICB2YXIgY2xvbmUgPSBuZXcgc3RhdGUuQ29uc3RydWN0b3IoKTtcbiAgICAvLyBzZXQgaW4gdGhlIGNhY2hlIGltbWVkaWF0ZWx5IHRvIGJlIGFibGUgdG8gcmV1c2UgdGhlIG9iamVjdCByZWN1cnNpdmVseVxuICAgIHN0YXRlLmNhY2hlLnNldChhcnJheSwgY2xvbmUpO1xuICAgIHJldHVybiBjb3B5T3duUHJvcGVydGllc1N0cmljdChhcnJheSwgY2xvbmUsIHN0YXRlKTtcbn1cbi8qKlxuICogQ29weSB0aGUgY29udGVudHMgb2YgdGhlIEFycmF5QnVmZmVyLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIsIF9zdGF0ZSkge1xuICAgIHJldHVybiBhcnJheUJ1ZmZlci5zbGljZSgwKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgbmV3IEJsb2Igd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIG9yaWdpbmFsLlxuICovXG5mdW5jdGlvbiBjb3B5QmxvYihibG9iLCBfc3RhdGUpIHtcbiAgICByZXR1cm4gYmxvYi5zbGljZSgwLCBibG9iLnNpemUsIGJsb2IudHlwZSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBEYXRhVmlldyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgb3JpZ2luYWwuXG4gKi9cbmZ1bmN0aW9uIGNvcHlEYXRhVmlldyhkYXRhVmlldywgc3RhdGUpIHtcbiAgICByZXR1cm4gbmV3IHN0YXRlLkNvbnN0cnVjdG9yKGNvcHlBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgbmV3IERhdGUgYmFzZWQgb24gdGhlIHRpbWUgb2YgdGhlIG9yaWdpbmFsLlxuICovXG5mdW5jdGlvbiBjb3B5RGF0ZShkYXRlLCBzdGF0ZSkge1xuICAgIHJldHVybiBuZXcgc3RhdGUuQ29uc3RydWN0b3IoZGF0ZS5nZXRUaW1lKCkpO1xufVxuLyoqXG4gKiBEZWVwbHkgY29weSB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIHRoZSBvcmlnaW5hbC5cbiAqL1xuZnVuY3Rpb24gY29weU1hcExvb3NlKG1hcCwgc3RhdGUpIHtcbiAgICB2YXIgY2xvbmUgPSBuZXcgc3RhdGUuQ29uc3RydWN0b3IoKTtcbiAgICAvLyBzZXQgaW4gdGhlIGNhY2hlIGltbWVkaWF0ZWx5IHRvIGJlIGFibGUgdG8gcmV1c2UgdGhlIG9iamVjdCByZWN1cnNpdmVseVxuICAgIHN0YXRlLmNhY2hlLnNldChtYXAsIGNsb25lKTtcbiAgICBtYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBjbG9uZS5zZXQoa2V5LCBzdGF0ZS5jb3BpZXIodmFsdWUsIHN0YXRlKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNsb25lO1xufVxuLyoqXG4gKiBEZWVwbHkgY29weSB0aGUga2V5cyBhbmQgdmFsdWVzIG9mIHRoZSBvcmlnaW5hbCwgYXMgd2VsbCBhcyBhbnkgY3VzdG9tIHByb3BlcnRpZXMuXG4gKi9cbmZ1bmN0aW9uIGNvcHlNYXBTdHJpY3QobWFwLCBzdGF0ZSkge1xuICAgIHJldHVybiBjb3B5T3duUHJvcGVydGllc1N0cmljdChtYXAsIGNvcHlNYXBMb29zZShtYXAsIHN0YXRlKSwgc3RhdGUpO1xufVxuZnVuY3Rpb24gY29weU9iamVjdExvb3NlTGVnYWN5KG9iamVjdCwgc3RhdGUpIHtcbiAgICB2YXIgY2xvbmUgPSBnZXRDbGVhbkNsb25lKHN0YXRlLnByb3RvdHlwZSk7XG4gICAgLy8gc2V0IGluIHRoZSBjYWNoZSBpbW1lZGlhdGVseSB0byBiZSBhYmxlIHRvIHJldXNlIHRoZSBvYmplY3QgcmVjdXJzaXZlbHlcbiAgICBzdGF0ZS5jYWNoZS5zZXQob2JqZWN0LCBjbG9uZSk7XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgIGNsb25lW2tleV0gPSBzdGF0ZS5jb3BpZXIob2JqZWN0W2tleV0sIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xvbmU7XG59XG5mdW5jdGlvbiBjb3B5T2JqZWN0TG9vc2VNb2Rlcm4ob2JqZWN0LCBzdGF0ZSkge1xuICAgIHZhciBjbG9uZSA9IGdldENsZWFuQ2xvbmUoc3RhdGUucHJvdG90eXBlKTtcbiAgICAvLyBzZXQgaW4gdGhlIGNhY2hlIGltbWVkaWF0ZWx5IHRvIGJlIGFibGUgdG8gcmV1c2UgdGhlIG9iamVjdCByZWN1cnNpdmVseVxuICAgIHN0YXRlLmNhY2hlLnNldChvYmplY3QsIGNsb25lKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgICAgICAgY2xvbmVba2V5XSA9IHN0YXRlLmNvcGllcihvYmplY3Rba2V5XSwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGhfMyA9IHN5bWJvbHMubGVuZ3RoLCBzeW1ib2wgPSB2b2lkIDA7IGluZGV4IDwgbGVuZ3RoXzM7ICsraW5kZXgpIHtcbiAgICAgICAgc3ltYm9sID0gc3ltYm9sc1tpbmRleF07XG4gICAgICAgIGlmIChwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKSkge1xuICAgICAgICAgICAgY2xvbmVbc3ltYm9sXSA9IHN0YXRlLmNvcGllcihvYmplY3Rbc3ltYm9sXSwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbG9uZTtcbn1cbi8qKlxuICogRGVlcGx5IGNvcHkgdGhlIHByb3BlcnRpZXMgKGtleXMgYW5kIHN5bWJvbHMpIGFuZCB2YWx1ZXMgb2YgdGhlIG9yaWdpbmFsLlxuICovXG52YXIgY29weU9iamVjdExvb3NlID0gU1VQUE9SVFNfU1lNQk9MXG4gICAgPyBjb3B5T2JqZWN0TG9vc2VNb2Rlcm5cbiAgICA6IGNvcHlPYmplY3RMb29zZUxlZ2FjeTtcbi8qKlxuICogRGVlcGx5IGNvcHkgdGhlIHByb3BlcnRpZXMgKGtleXMgYW5kIHN5bWJvbHMpIGFuZCB2YWx1ZXMgb2YgdGhlIG9yaWdpbmFsLCBhcyB3ZWxsXG4gKiBhcyBhbnkgaGlkZGVuIG9yIG5vbi1lbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3RTdHJpY3Qob2JqZWN0LCBzdGF0ZSkge1xuICAgIHZhciBjbG9uZSA9IGdldENsZWFuQ2xvbmUoc3RhdGUucHJvdG90eXBlKTtcbiAgICAvLyBzZXQgaW4gdGhlIGNhY2hlIGltbWVkaWF0ZWx5IHRvIGJlIGFibGUgdG8gcmV1c2UgdGhlIG9iamVjdCByZWN1cnNpdmVseVxuICAgIHN0YXRlLmNhY2hlLnNldChvYmplY3QsIGNsb25lKTtcbiAgICByZXR1cm4gY29weU93blByb3BlcnRpZXNTdHJpY3Qob2JqZWN0LCBjbG9uZSwgc3RhdGUpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgcHJpbWl0aXZlIHdyYXBwZXIgZnJvbSB0aGUgdmFsdWUgb2YgdGhlIG9yaWdpbmFsLlxuICovXG5mdW5jdGlvbiBjb3B5UHJpbWl0aXZlV3JhcHBlcihwcmltaXRpdmVPYmplY3QsIHN0YXRlKSB7XG4gICAgcmV0dXJuIG5ldyBzdGF0ZS5Db25zdHJ1Y3RvcihwcmltaXRpdmVPYmplY3QudmFsdWVPZigpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgbmV3IFJlZ0V4cCBiYXNlZCBvbiB0aGUgdmFsdWUgYW5kIGZsYWdzIG9mIHRoZSBvcmlnaW5hbC5cbiAqL1xuZnVuY3Rpb24gY29weVJlZ0V4cChyZWdFeHAsIHN0YXRlKSB7XG4gICAgdmFyIGNsb25lID0gbmV3IHN0YXRlLkNvbnN0cnVjdG9yKHJlZ0V4cC5zb3VyY2UsIGdldFJlZ0V4cEZsYWdzKHJlZ0V4cCkpO1xuICAgIGNsb25lLmxhc3RJbmRleCA9IHJlZ0V4cC5sYXN0SW5kZXg7XG4gICAgcmV0dXJuIGNsb25lO1xufVxuLyoqXG4gKiBSZXR1cm4gdGhlIG9yaWdpbmFsIHZhbHVlIChhbiBpZGVudGl0eSBmdW5jdGlvbikuXG4gKlxuICogQG5vdGVcbiAqIFRIaXMgaXMgdXNlZCBmb3Igb2JqZWN0cyB0aGF0IGNhbm5vdCBiZSBjb3BpZWQsIHN1Y2ggYXMgV2Vha01hcC5cbiAqL1xuZnVuY3Rpb24gY29weVNlbGYodmFsdWUsIF9zdGF0ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogRGVlcGx5IGNvcHkgdGhlIHZhbHVlcyBvZiB0aGUgb3JpZ2luYWwuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTZXRMb29zZShzZXQsIHN0YXRlKSB7XG4gICAgdmFyIGNsb25lID0gbmV3IHN0YXRlLkNvbnN0cnVjdG9yKCk7XG4gICAgLy8gc2V0IGluIHRoZSBjYWNoZSBpbW1lZGlhdGVseSB0byBiZSBhYmxlIHRvIHJldXNlIHRoZSBvYmplY3QgcmVjdXJzaXZlbHlcbiAgICBzdGF0ZS5jYWNoZS5zZXQoc2V0LCBjbG9uZSk7XG4gICAgc2V0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGNsb25lLmFkZChzdGF0ZS5jb3BpZXIodmFsdWUsIHN0YXRlKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNsb25lO1xufVxuLyoqXG4gKiBEZWVwbHkgY29weSB0aGUgdmFsdWVzIG9mIHRoZSBvcmlnaW5hbCwgYXMgd2VsbCBhcyBhbnkgY3VzdG9tIHByb3BlcnRpZXMuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTZXRTdHJpY3Qoc2V0LCBzdGF0ZSkge1xuICAgIHJldHVybiBjb3B5T3duUHJvcGVydGllc1N0cmljdChzZXQsIGNvcHlTZXRMb29zZShzZXQsIHN0YXRlKSwgc3RhdGUpO1xufVxuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCAoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqLl9fcHJvdG9fXzsgfSk7XG52YXIgREVGQVVMVF9MT09TRV9PUFRJT05TID0ge1xuICAgIGFycmF5OiBjb3B5QXJyYXlMb29zZSxcbiAgICBhcnJheUJ1ZmZlcjogY29weUFycmF5QnVmZmVyLFxuICAgIGJsb2I6IGNvcHlCbG9iLFxuICAgIGRhdGFWaWV3OiBjb3B5RGF0YVZpZXcsXG4gICAgZGF0ZTogY29weURhdGUsXG4gICAgZXJyb3I6IGNvcHlTZWxmLFxuICAgIG1hcDogY29weU1hcExvb3NlLFxuICAgIG9iamVjdDogY29weU9iamVjdExvb3NlLFxuICAgIHJlZ0V4cDogY29weVJlZ0V4cCxcbiAgICBzZXQ6IGNvcHlTZXRMb29zZSxcbn07XG52YXIgREVGQVVMVF9TVFJJQ1RfT1BUSU9OUyA9IGFzc2lnbih7fSwgREVGQVVMVF9MT09TRV9PUFRJT05TLCB7XG4gICAgYXJyYXk6IGNvcHlBcnJheVN0cmljdCxcbiAgICBtYXA6IGNvcHlNYXBTdHJpY3QsXG4gICAgb2JqZWN0OiBjb3B5T2JqZWN0U3RyaWN0LFxuICAgIHNldDogY29weVNldFN0cmljdCxcbn0pO1xuLyoqXG4gKiBHZXQgdGhlIGNvcGllcnMgdXNlZCBmb3IgZWFjaCBzcGVjaWZpYyBvYmplY3QgdGFnLlxuICovXG5mdW5jdGlvbiBnZXRUYWdTcGVjaWZpY0NvcGllcnMob3B0aW9ucykge1xuICAgIHJldHVybiB7XG4gICAgICAgIEFyZ3VtZW50czogb3B0aW9ucy5vYmplY3QsXG4gICAgICAgIEFycmF5OiBvcHRpb25zLmFycmF5LFxuICAgICAgICBBcnJheUJ1ZmZlcjogb3B0aW9ucy5hcnJheUJ1ZmZlcixcbiAgICAgICAgQmxvYjogb3B0aW9ucy5ibG9iLFxuICAgICAgICBCb29sZWFuOiBjb3B5UHJpbWl0aXZlV3JhcHBlcixcbiAgICAgICAgRGF0YVZpZXc6IG9wdGlvbnMuZGF0YVZpZXcsXG4gICAgICAgIERhdGU6IG9wdGlvbnMuZGF0ZSxcbiAgICAgICAgRXJyb3I6IG9wdGlvbnMuZXJyb3IsXG4gICAgICAgIEZsb2F0MzJBcnJheTogb3B0aW9ucy5hcnJheUJ1ZmZlcixcbiAgICAgICAgRmxvYXQ2NEFycmF5OiBvcHRpb25zLmFycmF5QnVmZmVyLFxuICAgICAgICBJbnQ4QXJyYXk6IG9wdGlvbnMuYXJyYXlCdWZmZXIsXG4gICAgICAgIEludDE2QXJyYXk6IG9wdGlvbnMuYXJyYXlCdWZmZXIsXG4gICAgICAgIEludDMyQXJyYXk6IG9wdGlvbnMuYXJyYXlCdWZmZXIsXG4gICAgICAgIE1hcDogb3B0aW9ucy5tYXAsXG4gICAgICAgIE51bWJlcjogY29weVByaW1pdGl2ZVdyYXBwZXIsXG4gICAgICAgIE9iamVjdDogb3B0aW9ucy5vYmplY3QsXG4gICAgICAgIFByb21pc2U6IGNvcHlTZWxmLFxuICAgICAgICBSZWdFeHA6IG9wdGlvbnMucmVnRXhwLFxuICAgICAgICBTZXQ6IG9wdGlvbnMuc2V0LFxuICAgICAgICBTdHJpbmc6IGNvcHlQcmltaXRpdmVXcmFwcGVyLFxuICAgICAgICBXZWFrTWFwOiBjb3B5U2VsZixcbiAgICAgICAgV2Vha1NldDogY29weVNlbGYsXG4gICAgICAgIFVpbnQ4QXJyYXk6IG9wdGlvbnMuYXJyYXlCdWZmZXIsXG4gICAgICAgIFVpbnQ4Q2xhbXBlZEFycmF5OiBvcHRpb25zLmFycmF5QnVmZmVyLFxuICAgICAgICBVaW50MTZBcnJheTogb3B0aW9ucy5hcnJheUJ1ZmZlcixcbiAgICAgICAgVWludDMyQXJyYXk6IG9wdGlvbnMuYXJyYXlCdWZmZXIsXG4gICAgICAgIFVpbnQ2NEFycmF5OiBvcHRpb25zLmFycmF5QnVmZmVyLFxuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZSBhIGN1c3RvbSBjb3BpZXIgYmFzZWQgb24gdGhlIG9iamVjdC1zcGVjaWZpYyBjb3B5IG1ldGhvZHMgcGFzc2VkLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDb3BpZXIob3B0aW9ucykge1xuICAgIHZhciBub3JtYWxpemVkT3B0aW9ucyA9IGFzc2lnbih7fSwgREVGQVVMVF9MT09TRV9PUFRJT05TLCBvcHRpb25zKTtcbiAgICB2YXIgdGFnU3BlY2lmaWNDb3BpZXJzID0gZ2V0VGFnU3BlY2lmaWNDb3BpZXJzKG5vcm1hbGl6ZWRPcHRpb25zKTtcbiAgICB2YXIgYXJyYXkgPSB0YWdTcGVjaWZpY0NvcGllcnMuQXJyYXksIG9iamVjdCA9IHRhZ1NwZWNpZmljQ29waWVycy5PYmplY3Q7XG4gICAgZnVuY3Rpb24gY29waWVyKHZhbHVlLCBzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5wcm90b3R5cGUgPSBzdGF0ZS5Db25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLmNhY2hlLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5jYWNoZS5nZXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgICAgICAgc3RhdGUuQ29uc3RydWN0b3IgPSBzdGF0ZS5wcm90b3R5cGUgJiYgc3RhdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yO1xuICAgICAgICAvLyBwbGFpbiBvYmplY3RzXG4gICAgICAgIGlmICghc3RhdGUuQ29uc3RydWN0b3IgfHwgc3RhdGUuQ29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdCh2YWx1ZSwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFycmF5c1xuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheSh2YWx1ZSwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0YWdTcGVjaWZpY0NvcGllciA9IHRhZ1NwZWNpZmljQ29waWVyc1tnZXRUYWcodmFsdWUpXTtcbiAgICAgICAgaWYgKHRhZ1NwZWNpZmljQ29waWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFnU3BlY2lmaWNDb3BpZXIodmFsdWUsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicgPyB2YWx1ZSA6IG9iamVjdCh2YWx1ZSwgc3RhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gY29weSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gY29waWVyKHZhbHVlLCB7XG4gICAgICAgICAgICBDb25zdHJ1Y3RvcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY2FjaGU6IGNyZWF0ZUNhY2hlKCksXG4gICAgICAgICAgICBjb3BpZXI6IGNvcGllcixcbiAgICAgICAgICAgIHByb3RvdHlwZTogdW5kZWZpbmVkLFxuICAgICAgICB9KTtcbiAgICB9O1xufVxuLyoqXG4gKiBDcmVhdGUgYSBjdXN0b20gY29waWVyIGJhc2VkIG9uIHRoZSBvYmplY3Qtc3BlY2lmaWMgY29weSBtZXRob2RzIHBhc3NlZCwgZGVmYXVsdGluZyB0byB0aGVcbiAqIHNhbWUgaW50ZXJuYWxzIGFzIGBjb3B5U3RyaWN0YC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlU3RyaWN0Q29waWVyKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY3JlYXRlQ29waWVyKGFzc2lnbih7fSwgREVGQVVMVF9TVFJJQ1RfT1BUSU9OUywgb3B0aW9ucykpO1xufVxuLyoqXG4gKiBDb3B5IGFuIHZhbHVlIGRlZXBseSBhcyBtdWNoIGFzIHBvc3NpYmxlLCB3aGVyZSBzdHJpY3QgcmVjcmVhdGlvbiBvZiBvYmplY3QgcHJvcGVydGllc1xuICogYXJlIG1haW50YWluZWQuIEFsbCBwcm9wZXJ0aWVzIChpbmNsdWRpbmcgbm9uLWVudW1lcmFibGUgb25lcykgYXJlIGNvcGllZCB3aXRoIHRoZWlyXG4gKiBvcmlnaW5hbCBwcm9wZXJ0eSBkZXNjcmlwdG9ycyBvbiBib3RoIG9iamVjdHMgYW5kIGFycmF5cy5cbiAqL1xudmFyIGNvcHlTdHJpY3QgPSBjcmVhdGVTdHJpY3RDb3BpZXIoe30pO1xuLyoqXG4gKiBDb3B5IGFuIHZhbHVlIGRlZXBseSBhcyBtdWNoIGFzIHBvc3NpYmxlLlxuICovXG52YXIgaW5kZXggPSBjcmVhdGVDb3BpZXIoe30pO1xuXG5leHBvcnRzLmNvcHlTdHJpY3QgPSBjb3B5U3RyaWN0O1xuZXhwb3J0cy5jcmVhdGVDb3BpZXIgPSBjcmVhdGVDb3BpZXI7XG5leHBvcnRzLmNyZWF0ZVN0cmljdENvcGllciA9IGNyZWF0ZVN0cmljdENvcGllcjtcbmV4cG9ydHMuZGVmYXVsdCA9IGluZGV4O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguY2pzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/fast-copy/dist/cjs/index.cjs\n");

/***/ })

};
;