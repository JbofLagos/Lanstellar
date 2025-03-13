"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/destr";
exports.ids = ["vendor-chunks/destr"];
exports.modules = {

/***/ "(ssr)/./node_modules/destr/dist/index.mjs":
/*!*******************************************!*\
  !*** ./node_modules/destr/dist/index.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ destr),\n/* harmony export */   destr: () => (/* binding */ destr),\n/* harmony export */   safeDestr: () => (/* binding */ safeDestr)\n/* harmony export */ });\nconst suspectProtoRx = /\"(?:_|\\\\u0{2}5[Ff]){2}(?:p|\\\\u0{2}70)(?:r|\\\\u0{2}72)(?:o|\\\\u0{2}6[Ff])(?:t|\\\\u0{2}74)(?:o|\\\\u0{2}6[Ff])(?:_|\\\\u0{2}5[Ff]){2}\"\\s*:/;\nconst suspectConstructorRx = /\"(?:c|\\\\u0063)(?:o|\\\\u006[Ff])(?:n|\\\\u006[Ee])(?:s|\\\\u0073)(?:t|\\\\u0074)(?:r|\\\\u0072)(?:u|\\\\u0075)(?:c|\\\\u0063)(?:t|\\\\u0074)(?:o|\\\\u006[Ff])(?:r|\\\\u0072)\"\\s*:/;\nconst JsonSigRx = /^\\s*[\"[{]|^\\s*-?\\d{1,16}(\\.\\d{1,17})?([Ee][+-]?\\d+)?\\s*$/;\nfunction jsonParseTransform(key, value) {\n  if (key === \"__proto__\" || key === \"constructor\" && value && typeof value === \"object\" && \"prototype\" in value) {\n    warnKeyDropped(key);\n    return;\n  }\n  return value;\n}\nfunction warnKeyDropped(key) {\n  console.warn(`[destr] Dropping \"${key}\" key to prevent prototype pollution.`);\n}\nfunction destr(value, options = {}) {\n  if (typeof value !== \"string\") {\n    return value;\n  }\n  const _value = value.trim();\n  if (\n    // eslint-disable-next-line unicorn/prefer-at\n    value[0] === '\"' && value.endsWith('\"') && !value.includes(\"\\\\\")\n  ) {\n    return _value.slice(1, -1);\n  }\n  if (_value.length <= 9) {\n    const _lval = _value.toLowerCase();\n    if (_lval === \"true\") {\n      return true;\n    }\n    if (_lval === \"false\") {\n      return false;\n    }\n    if (_lval === \"undefined\") {\n      return void 0;\n    }\n    if (_lval === \"null\") {\n      return null;\n    }\n    if (_lval === \"nan\") {\n      return Number.NaN;\n    }\n    if (_lval === \"infinity\") {\n      return Number.POSITIVE_INFINITY;\n    }\n    if (_lval === \"-infinity\") {\n      return Number.NEGATIVE_INFINITY;\n    }\n  }\n  if (!JsonSigRx.test(value)) {\n    if (options.strict) {\n      throw new SyntaxError(\"[destr] Invalid JSON\");\n    }\n    return value;\n  }\n  try {\n    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {\n      if (options.strict) {\n        throw new Error(\"[destr] Possible prototype pollution\");\n      }\n      return JSON.parse(value, jsonParseTransform);\n    }\n    return JSON.parse(value);\n  } catch (error) {\n    if (options.strict) {\n      throw error;\n    }\n    return value;\n  }\n}\nfunction safeDestr(value, options = {}) {\n  return destr(value, { ...options, strict: true });\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVzdHIvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUNBQW1DLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUU7QUFDcEo7QUFDQSwyQkFBMkIsV0FBVyxLQUFLLE1BQU0sS0FBSztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLElBQUk7QUFDeEM7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qyx3QkFBd0IsMEJBQTBCO0FBQ2xEOztBQUU4QyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbnN0ZWxsYXIvLi9ub2RlX21vZHVsZXMvZGVzdHIvZGlzdC9pbmRleC5tanM/MjVmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdXNwZWN0UHJvdG9SeCA9IC9cIig/Ol98XFxcXHUwezJ9NVtGZl0pezJ9KD86cHxcXFxcdTB7Mn03MCkoPzpyfFxcXFx1MHsyfTcyKSg/Om98XFxcXHUwezJ9NltGZl0pKD86dHxcXFxcdTB7Mn03NCkoPzpvfFxcXFx1MHsyfTZbRmZdKSg/Ol98XFxcXHUwezJ9NVtGZl0pezJ9XCJcXHMqOi87XG5jb25zdCBzdXNwZWN0Q29uc3RydWN0b3JSeCA9IC9cIig/OmN8XFxcXHUwMDYzKSg/Om98XFxcXHUwMDZbRmZdKSg/Om58XFxcXHUwMDZbRWVdKSg/OnN8XFxcXHUwMDczKSg/OnR8XFxcXHUwMDc0KSg/OnJ8XFxcXHUwMDcyKSg/OnV8XFxcXHUwMDc1KSg/OmN8XFxcXHUwMDYzKSg/OnR8XFxcXHUwMDc0KSg/Om98XFxcXHUwMDZbRmZdKSg/OnJ8XFxcXHUwMDcyKVwiXFxzKjovO1xuY29uc3QgSnNvblNpZ1J4ID0gL15cXHMqW1wiW3tdfF5cXHMqLT9cXGR7MSwxNn0oXFwuXFxkezEsMTd9KT8oW0VlXVsrLV0/XFxkKyk/XFxzKiQvO1xuZnVuY3Rpb24ganNvblBhcnNlVHJhbnNmb3JtKGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PT0gXCJfX3Byb3RvX19cIiB8fCBrZXkgPT09IFwiY29uc3RydWN0b3JcIiAmJiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgXCJwcm90b3R5cGVcIiBpbiB2YWx1ZSkge1xuICAgIHdhcm5LZXlEcm9wcGVkKGtleSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHdhcm5LZXlEcm9wcGVkKGtleSkge1xuICBjb25zb2xlLndhcm4oYFtkZXN0cl0gRHJvcHBpbmcgXCIke2tleX1cIiBrZXkgdG8gcHJldmVudCBwcm90b3R5cGUgcG9sbHV0aW9uLmApO1xufVxuZnVuY3Rpb24gZGVzdHIodmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGNvbnN0IF92YWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgaWYgKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1hdFxuICAgIHZhbHVlWzBdID09PSAnXCInICYmIHZhbHVlLmVuZHNXaXRoKCdcIicpICYmICF2YWx1ZS5pbmNsdWRlcyhcIlxcXFxcIilcbiAgKSB7XG4gICAgcmV0dXJuIF92YWx1ZS5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKF92YWx1ZS5sZW5ndGggPD0gOSkge1xuICAgIGNvbnN0IF9sdmFsID0gX3ZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKF9sdmFsID09PSBcInRydWVcIikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChfbHZhbCA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChfbHZhbCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG4gICAgaWYgKF9sdmFsID09PSBcIm51bGxcIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChfbHZhbCA9PT0gXCJuYW5cIikge1xuICAgICAgcmV0dXJuIE51bWJlci5OYU47XG4gICAgfVxuICAgIGlmIChfbHZhbCA9PT0gXCJpbmZpbml0eVwiKSB7XG4gICAgICByZXR1cm4gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIH1cbiAgICBpZiAoX2x2YWwgPT09IFwiLWluZmluaXR5XCIpIHtcbiAgICAgIHJldHVybiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgfVxuICB9XG4gIGlmICghSnNvblNpZ1J4LnRlc3QodmFsdWUpKSB7XG4gICAgaWYgKG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJbZGVzdHJdIEludmFsaWQgSlNPTlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKHN1c3BlY3RQcm90b1J4LnRlc3QodmFsdWUpIHx8IHN1c3BlY3RDb25zdHJ1Y3RvclJ4LnRlc3QodmFsdWUpKSB7XG4gICAgICBpZiAob3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW2Rlc3RyXSBQb3NzaWJsZSBwcm90b3R5cGUgcG9sbHV0aW9uXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUsIGpzb25QYXJzZVRyYW5zZm9ybSk7XG4gICAgfVxuICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAob3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIHNhZmVEZXN0cih2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBkZXN0cih2YWx1ZSwgeyAuLi5vcHRpb25zLCBzdHJpY3Q6IHRydWUgfSk7XG59XG5cbmV4cG9ydCB7IGRlc3RyIGFzIGRlZmF1bHQsIGRlc3RyLCBzYWZlRGVzdHIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/destr/dist/index.mjs\n");

/***/ })

};
;