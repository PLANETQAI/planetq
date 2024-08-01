/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerPreview"],{

/***/ "./node_modules/react-player/lazy/Preview.js":
/*!***************************************************!*\
  !*** ./node_modules/react-player/lazy/Preview.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Preview_exports = {};\n__export(Preview_exports, {\n  default: () => Preview\n});\nmodule.exports = __toCommonJS(Preview_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst ICON_SIZE = \"64px\";\nconst cache = {};\nclass Preview extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"mounted\", false);\n    __publicField(this, \"state\", {\n      image: null\n    });\n    __publicField(this, \"handleKeyPress\", (e) => {\n      if (e.key === \"Enter\" || e.key === \" \") {\n        this.props.onClick();\n      }\n    });\n  }\n  componentDidMount() {\n    this.mounted = true;\n    this.fetchImage(this.props);\n  }\n  componentDidUpdate(prevProps) {\n    const { url, light } = this.props;\n    if (prevProps.url !== url || prevProps.light !== light) {\n      this.fetchImage(this.props);\n    }\n  }\n  componentWillUnmount() {\n    this.mounted = false;\n  }\n  fetchImage({ url, light, oEmbedUrl }) {\n    if (import_react.default.isValidElement(light)) {\n      return;\n    }\n    if (typeof light === \"string\") {\n      this.setState({ image: light });\n      return;\n    }\n    if (cache[url]) {\n      this.setState({ image: cache[url] });\n      return;\n    }\n    this.setState({ image: null });\n    return window.fetch(oEmbedUrl.replace(\"{url}\", url)).then((response) => response.json()).then((data) => {\n      if (data.thumbnail_url && this.mounted) {\n        const image = data.thumbnail_url.replace(\"height=100\", \"height=480\").replace(\"-d_295x166\", \"-d_640\");\n        this.setState({ image });\n        cache[url] = image;\n      }\n    });\n  }\n  render() {\n    const { light, onClick, playIcon, previewTabIndex } = this.props;\n    const { image } = this.state;\n    const isElement = import_react.default.isValidElement(light);\n    const flexCenter = {\n      display: \"flex\",\n      alignItems: \"center\",\n      justifyContent: \"center\"\n    };\n    const styles = {\n      preview: {\n        width: \"100%\",\n        height: \"100%\",\n        backgroundImage: image && !isElement ? `url(${image})` : void 0,\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        cursor: \"pointer\",\n        ...flexCenter\n      },\n      shadow: {\n        background: \"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)\",\n        borderRadius: ICON_SIZE,\n        width: ICON_SIZE,\n        height: ICON_SIZE,\n        position: isElement ? \"absolute\" : void 0,\n        ...flexCenter\n      },\n      playIcon: {\n        borderStyle: \"solid\",\n        borderWidth: \"16px 0 16px 26px\",\n        borderColor: \"transparent transparent transparent white\",\n        marginLeft: \"7px\"\n      }\n    };\n    const defaultPlayIcon = /* @__PURE__ */ import_react.default.createElement(\"div\", { style: styles.shadow, className: \"react-player__shadow\" }, /* @__PURE__ */ import_react.default.createElement(\"div\", { style: styles.playIcon, className: \"react-player__play-icon\" }));\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"div\",\n      {\n        style: styles.preview,\n        className: \"react-player__preview\",\n        onClick,\n        tabIndex: previewTabIndex,\n        onKeyPress: this.handleKeyPress\n      },\n      isElement ? light : null,\n      playIcon || defaultPlayIcon\n    );\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xhenkvUHJldmlldy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsNkRBQTZEO0FBQzNJO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNEZBQTRGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSw4QkFBOEI7QUFDdkc7QUFDQTtBQUNBLG9EQUFvRCxrQkFBa0IsYUFBYTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLDRDQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYztBQUNwQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQyw0Q0FBNEMsSUFBSTtBQUNoRDtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWSw0Q0FBNEM7QUFDeEQsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELE1BQU07QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0YseURBQXlELDhEQUE4RCw4REFBOEQ7QUFDN1E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGF6eS9QcmV2aWV3LmpzP2E1MWYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvRVNNID0gKG1vZCwgaXNOb2RlTW9kZSwgdGFyZ2V0KSA9PiAodGFyZ2V0ID0gbW9kICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kKSkgOiB7fSwgX19jb3B5UHJvcHMoXG4gIC8vIElmIHRoZSBpbXBvcnRlciBpcyBpbiBub2RlIGNvbXBhdGliaWxpdHkgbW9kZSBvciB0aGlzIGlzIG5vdCBhbiBFU01cbiAgLy8gZmlsZSB0aGF0IGhhcyBiZWVuIGNvbnZlcnRlZCB0byBhIENvbW1vbkpTIGZpbGUgdXNpbmcgYSBCYWJlbC1cbiAgLy8gY29tcGF0aWJsZSB0cmFuc2Zvcm0gKGkuZS4gXCJfX2VzTW9kdWxlXCIgaGFzIG5vdCBiZWVuIHNldCksIHRoZW4gc2V0XG4gIC8vIFwiZGVmYXVsdFwiIHRvIHRoZSBDb21tb25KUyBcIm1vZHVsZS5leHBvcnRzXCIgZm9yIG5vZGUgY29tcGF0aWJpbGl0eS5cbiAgaXNOb2RlTW9kZSB8fCAhbW9kIHx8ICFtb2QuX19lc01vZHVsZSA/IF9fZGVmUHJvcCh0YXJnZXQsIFwiZGVmYXVsdFwiLCB7IHZhbHVlOiBtb2QsIGVudW1lcmFibGU6IHRydWUgfSkgOiB0YXJnZXQsXG4gIG1vZFxuKSk7XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ge1xuICBfX2RlZk5vcm1hbFByb3Aob2JqLCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiID8ga2V5ICsgXCJcIiA6IGtleSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIFByZXZpZXdfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoUHJldmlld19leHBvcnRzLCB7XG4gIGRlZmF1bHQ6ICgpID0+IFByZXZpZXdcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoUHJldmlld19leHBvcnRzKTtcbnZhciBpbXBvcnRfcmVhY3QgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCBJQ09OX1NJWkUgPSBcIjY0cHhcIjtcbmNvbnN0IGNhY2hlID0ge307XG5jbGFzcyBQcmV2aWV3IGV4dGVuZHMgaW1wb3J0X3JlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm1vdW50ZWRcIiwgZmFsc2UpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJzdGF0ZVwiLCB7XG4gICAgICBpbWFnZTogbnVsbFxuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJoYW5kbGVLZXlQcmVzc1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5mZXRjaEltYWdlKHRoaXMucHJvcHMpO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7IHVybCwgbGlnaHQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHByZXZQcm9wcy51cmwgIT09IHVybCB8fCBwcmV2UHJvcHMubGlnaHQgIT09IGxpZ2h0KSB7XG4gICAgICB0aGlzLmZldGNoSW1hZ2UodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICB9XG4gIGZldGNoSW1hZ2UoeyB1cmwsIGxpZ2h0LCBvRW1iZWRVcmwgfSkge1xuICAgIGlmIChpbXBvcnRfcmVhY3QuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChsaWdodCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsaWdodCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlOiBsaWdodCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlW3VybF0pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogY2FjaGVbdXJsXSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlOiBudWxsIH0pO1xuICAgIHJldHVybiB3aW5kb3cuZmV0Y2gob0VtYmVkVXJsLnJlcGxhY2UoXCJ7dXJsfVwiLCB1cmwpKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS50aHVtYm5haWxfdXJsICYmIHRoaXMubW91bnRlZCkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRhdGEudGh1bWJuYWlsX3VybC5yZXBsYWNlKFwiaGVpZ2h0PTEwMFwiLCBcImhlaWdodD00ODBcIikucmVwbGFjZShcIi1kXzI5NXgxNjZcIiwgXCItZF82NDBcIik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZSB9KTtcbiAgICAgICAgY2FjaGVbdXJsXSA9IGltYWdlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxpZ2h0LCBvbkNsaWNrLCBwbGF5SWNvbiwgcHJldmlld1RhYkluZGV4IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaW1hZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaXNFbGVtZW50ID0gaW1wb3J0X3JlYWN0LmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQobGlnaHQpO1xuICAgIGNvbnN0IGZsZXhDZW50ZXIgPSB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuICAgIH07XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgcHJldmlldzoge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogaW1hZ2UgJiYgIWlzRWxlbWVudCA/IGB1cmwoJHtpbWFnZX0pYCA6IHZvaWQgMCxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAuLi5mbGV4Q2VudGVyXG4gICAgICB9LFxuICAgICAgc2hhZG93OiB7XG4gICAgICAgIGJhY2tncm91bmQ6IFwicmFkaWFsLWdyYWRpZW50KHJnYigwLCAwLCAwLCAwLjMpLCByZ2JhKDAsIDAsIDAsIDApIDYwJSlcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBJQ09OX1NJWkUsXG4gICAgICAgIHdpZHRoOiBJQ09OX1NJWkUsXG4gICAgICAgIGhlaWdodDogSUNPTl9TSVpFLFxuICAgICAgICBwb3NpdGlvbjogaXNFbGVtZW50ID8gXCJhYnNvbHV0ZVwiIDogdm9pZCAwLFxuICAgICAgICAuLi5mbGV4Q2VudGVyXG4gICAgICB9LFxuICAgICAgcGxheUljb246IHtcbiAgICAgICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6IFwiMTZweCAwIDE2cHggMjZweFwiLFxuICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZVwiLFxuICAgICAgICBtYXJnaW5MZWZ0OiBcIjdweFwiXG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBkZWZhdWx0UGxheUljb24gPSAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMuc2hhZG93LCBjbGFzc05hbWU6IFwicmVhY3QtcGxheWVyX19zaGFkb3dcIiB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMucGxheUljb24sIGNsYXNzTmFtZTogXCJyZWFjdC1wbGF5ZXJfX3BsYXktaWNvblwiIH0pKTtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdHlsZTogc3R5bGVzLnByZXZpZXcsXG4gICAgICAgIGNsYXNzTmFtZTogXCJyZWFjdC1wbGF5ZXJfX3ByZXZpZXdcIixcbiAgICAgICAgb25DbGljayxcbiAgICAgICAgdGFiSW5kZXg6IHByZXZpZXdUYWJJbmRleCxcbiAgICAgICAgb25LZXlQcmVzczogdGhpcy5oYW5kbGVLZXlQcmVzc1xuICAgICAgfSxcbiAgICAgIGlzRWxlbWVudCA/IGxpZ2h0IDogbnVsbCxcbiAgICAgIHBsYXlJY29uIHx8IGRlZmF1bHRQbGF5SWNvblxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-player/lazy/Preview.js\n"));

/***/ })

}]);