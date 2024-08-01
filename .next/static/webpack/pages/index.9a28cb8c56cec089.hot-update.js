"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/player/composer.js":
/*!***************************************!*\
  !*** ./components/player/composer.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst MusicGenerator = ()=>{\n    _s();\n    const [genre, setGenre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [instrument, setInstrument] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mood, setMood] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [energy, setEnergy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tempo, setTempo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(30);\n    const [generatedPrompt, setGeneratedPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [audioBuffer, setAudioBuffer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const audioContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        audioContext.current = new window.AudioContext();\n        return ()=>{\n            if (audioContext.current) {\n                audioContext.current.close();\n            }\n        };\n    }, []);\n    const getConfig = ()=>{\n        return {\n            TYPE: process.env.NEXT_PUBLIC_TYPE || \"HF\",\n            API_URL: process.env.NEXT_PUBLIC_API_URL,\n            TOKEN: process.env.NEXT_PUBLIC_ACCESS_TOKEN,\n            CUSTOM_URL: process.env.NEXT_PUBLIC_CUSTOM_URL\n        };\n    };\n    const getHeaders = (token)=>{\n        return {\n            Authorization: \"Bearer \".concat(token),\n            \"Content-Type\": \"application/json\"\n        };\n    };\n    const createPrompt = ()=>{\n        const promptParts = [\n            genre,\n            instrument,\n            mood,\n            energy,\n            tempo,\n            description\n        ];\n        return promptParts.filter((part)=>part !== \"\").join(\", \");\n    };\n    const createPayload = (prompt, duration, config)=>{\n        if (config.TYPE === \"CUSTOM\") {\n            return {\n                prompt,\n                duration: parseInt(duration)\n            };\n        } else {\n            return {\n                inputs: {\n                    prompt,\n                    duration: parseInt(duration)\n                }\n            };\n        }\n    };\n    const processAudio = async (audioData, sampleRate)=>{\n        const audioArray = new Float32Array(audioData);\n        const newAudioBuffer = audioContext.current.createBuffer(1, audioArray.length, sampleRate);\n        newAudioBuffer.getChannelData(0).set(audioArray);\n        setAudioBuffer(newAudioBuffer);\n    };\n    const generateAudio = async ()=>{\n        setLoading(true);\n        setError(\"\");\n        setAudioBuffer(null);\n        const config = getConfig();\n        const prompt = createPrompt();\n        setGeneratedPrompt(prompt);\n        if (prompt && duration) {\n            try {\n                const payload = createPayload(prompt, duration, config);\n                let response;\n                if (config.TYPE === \"CUSTOM\") {\n                    response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(config.CUSTOM_URL, payload);\n                } else {\n                    response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(config.API_URL, payload, {\n                        headers: getHeaders(config.TOKEN)\n                    });\n                }\n                // Process the audio data\n                const audioData = response.data[0].generated_audio;\n                const sampleRate = response.data[0].sample_rate;\n                await processAudio(audioData, sampleRate);\n            } catch (error) {\n                setError(\"Error generating audio: \".concat(error.message));\n            }\n        } else {\n            setError(\"Please fill in at least one field and set a duration.\");\n        }\n        setLoading(false);\n    };\n    const playAudio = ()=>{\n        if (audioBuffer) {\n            const source = audioContext.current.createBufferSource();\n            source.buffer = audioBuffer;\n            source.connect(audioContext.current.destination);\n            source.start();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-2xl mx-auto p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-2xl font-bold mb-4 text-white\",\n                children: \"Enter Music Info\"\n            }, void 0, false, {\n                fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 gap-4 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Genre (e.g., Pop, Jazz, Classical)\",\n                        value: genre,\n                        onChange: (e)=>setGenre(e.target.value),\n                        className: \"bg-gradient-to-t from-slate-600 to-slate-500 p-2 border text-purple-500\"\n                    }, void 0, false, {\n                        fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Main Instrument\",\n                        value: instrument,\n                        onChange: (e)=>setInstrument(e.target.value),\n                        className: \"bg-gradient-to-t from-slate-600 to-slate-500 p-2 border rounded\"\n                    }, void 0, false, {\n                        fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Mood\",\n                        value: mood,\n                        onChange: (e)=>setMood(e.target.value),\n                        className: \"bg-gradient-to-t from-slate-600 to-slate-500 p-2 border rounded\"\n                    }, void 0, false, {\n                        fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Energy Level\",\n                        value: energy,\n                        onChange: (e)=>setEnergy(e.target.value),\n                        className: \"bg-gradient-to-t from-slate-600 to-slate-500 p-2 border\"\n                    }, void 0, false, {\n                        fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Tempo\",\n                        value: tempo,\n                        onChange: (e)=>setTempo(e.target.value),\n                        className: \"bg-gradient-to-t from-slate-600 to-slate-500 p-2 border\"\n                    }, void 0, false, {\n                        fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Additional Description\",\n                        value: description,\n                        onChange: (e)=>setDescription(e.target.value),\n                        className: \"bg-gradient-to-t from-slate-600 to-slate-500 p-2 border\"\n                    }, void 0, false, {\n                        fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-2 text-white\",\n                        children: \"Duration (in seconds)\"\n                    }, void 0, false, {\n                        fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        min: \"10\",\n                        max: \"60\",\n                        value: duration,\n                        onChange: (e)=>setDuration(e.target.value),\n                        className: \"bg-gradient-to-t from-slate-600 to-slate-500 p-2 border w-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                        lineNumber: 160,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                value: generatedPrompt,\n                readOnly: true,\n                className: \"bg-gradient-to-t from-slate-600 to-slate-500 p-5 border  w-full mb-4\",\n                rows: \"3\",\n                placeholder: \"Generated Prompt\"\n            }, void 0, false, {\n                fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                lineNumber: 170,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: generateAudio,\n                disabled: loading,\n                className: \"bg-blue-500 text-white p-2 rounded hover:bg-blue-600\",\n                children: loading ? \"Generating...\" : \"Generate Audio\"\n            }, void 0, false, {\n                fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                lineNumber: 178,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500 mt-4\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                lineNumber: 186,\n                columnNumber: 17\n            }, undefined),\n            audioBuffer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: playAudio,\n                    className: \"bg-green-500 text-white p-2 rounded hover:bg-green-600\",\n                    children: \"Play Generated Audio\"\n                }, void 0, false, {\n                    fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                    lineNumber: 190,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n                lineNumber: 189,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/imacslim2015/Desktop/hacks/platnetq/application/components/player/composer.js\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MusicGenerator, \"6KkdODSrC29If4v1dKoGjRj1eUk=\");\n_c = MusicGenerator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MusicGenerator);\nvar _c;\n$RefreshReg$(_c, \"MusicGenerator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzBCQUdkLDhEQUFDVztnQkFDQ0MsU0FBU2pDO2dCQUNUa0MsVUFBVTNFO2dCQUNWMEQsV0FBVTswQkFFVDFELFVBQVUsa0JBQWtCOzs7Ozs7WUFHOUJGLHVCQUFTLDhEQUFDOEU7Z0JBQUVsQixXQUFVOzBCQUFxQjVEOzs7Ozs7WUFFM0NGLDZCQUNDLDhEQUFDNkQ7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNlO29CQUNDQyxTQUFTeEI7b0JBQ1RRLFdBQVU7OEJBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FwTU0vRTtLQUFBQTtBQXNNTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BsYXllci9jb21wb3Nlci5qcz81ZmE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBNdXNpY0dlbmVyYXRvciA9ICgpID0+IHtcbiAgY29uc3QgW2dlbnJlLCBzZXRHZW5yZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpbnN0cnVtZW50LCBzZXRJbnN0cnVtZW50XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW21vb2QsIHNldE1vb2RdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW5lcmd5LCBzZXRFbmVyZ3ldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdGVtcG8sIHNldFRlbXBvXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoMzApO1xuICBjb25zdCBbZ2VuZXJhdGVkUHJvbXB0LCBzZXRHZW5lcmF0ZWRQcm9tcHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYXVkaW9CdWZmZXIsIHNldEF1ZGlvQnVmZmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGF1ZGlvQ29udGV4dCA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF1ZGlvQ29udGV4dC5jdXJyZW50ID0gbmV3IHdpbmRvdy5BdWRpb0NvbnRleHQoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGF1ZGlvQ29udGV4dC5jdXJyZW50KSB7XG4gICAgICAgIGF1ZGlvQ29udGV4dC5jdXJyZW50LmNsb3NlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldENvbmZpZyA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgVFlQRTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVFlQRSB8fCAnSEYnLFxuICAgICAgQVBJX1VSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCxcbiAgICAgIFRPS0VOOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BQ0NFU1NfVE9LRU4sXG4gICAgICBDVVNUT01fVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DVVNUT01fVVJMLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgZ2V0SGVhZGVycyA9ICh0b2tlbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9tcHQgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvbXB0UGFydHMgPSBbZ2VucmUsIGluc3RydW1lbnQsIG1vb2QsIGVuZXJneSwgdGVtcG8sIGRlc2NyaXB0aW9uXTtcbiAgICByZXR1cm4gcHJvbXB0UGFydHMuZmlsdGVyKHBhcnQgPT4gcGFydCAhPT0gJycpLmpvaW4oJywgJyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUGF5bG9hZCA9IChwcm9tcHQsIGR1cmF0aW9uLCBjb25maWcpID0+IHtcbiAgICBpZiAoY29uZmlnLlRZUEUgPT09ICdDVVNUT00nKSB7XG4gICAgICByZXR1cm4geyBwcm9tcHQsIGR1cmF0aW9uOiBwYXJzZUludChkdXJhdGlvbikgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgaW5wdXRzOiB7IHByb21wdCwgZHVyYXRpb246IHBhcnNlSW50KGR1cmF0aW9uKSB9IH07XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByb2Nlc3NBdWRpbyA9IGFzeW5jIChhdWRpb0RhdGEsIHNhbXBsZVJhdGUpID0+IHtcbiAgICBjb25zdCBhdWRpb0FycmF5ID0gbmV3IEZsb2F0MzJBcnJheShhdWRpb0RhdGEpO1xuICAgIGNvbnN0IG5ld0F1ZGlvQnVmZmVyID0gYXVkaW9Db250ZXh0LmN1cnJlbnQuY3JlYXRlQnVmZmVyKDEsIGF1ZGlvQXJyYXkubGVuZ3RoLCBzYW1wbGVSYXRlKTtcbiAgICBuZXdBdWRpb0J1ZmZlci5nZXRDaGFubmVsRGF0YSgwKS5zZXQoYXVkaW9BcnJheSk7XG4gICAgc2V0QXVkaW9CdWZmZXIobmV3QXVkaW9CdWZmZXIpO1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlQXVkaW8gPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcignJyk7XG4gICAgc2V0QXVkaW9CdWZmZXIobnVsbCk7XG5cbiAgICBjb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcbiAgICBjb25zdCBwcm9tcHQgPSBjcmVhdGVQcm9tcHQoKTtcbiAgICBzZXRHZW5lcmF0ZWRQcm9tcHQocHJvbXB0KTtcblxuICAgIGlmIChwcm9tcHQgJiYgZHVyYXRpb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSBjcmVhdGVQYXlsb2FkKHByb21wdCwgZHVyYXRpb24sIGNvbmZpZyk7XG4gICAgICAgIGxldCByZXNwb25zZTtcblxuICAgICAgICBpZiAoY29uZmlnLlRZUEUgPT09ICdDVVNUT00nKSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGNvbmZpZy5DVVNUT01fVVJMLCBwYXlsb2FkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoY29uZmlnLkFQSV9VUkwsIHBheWxvYWQsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IGdldEhlYWRlcnMoY29uZmlnLlRPS0VOKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByb2Nlc3MgdGhlIGF1ZGlvIGRhdGFcbiAgICAgICAgY29uc3QgYXVkaW9EYXRhID0gcmVzcG9uc2UuZGF0YVswXS5nZW5lcmF0ZWRfYXVkaW87XG4gICAgICAgIGNvbnN0IHNhbXBsZVJhdGUgPSByZXNwb25zZS5kYXRhWzBdLnNhbXBsZV9yYXRlO1xuICAgICAgICBhd2FpdCBwcm9jZXNzQXVkaW8oYXVkaW9EYXRhLCBzYW1wbGVSYXRlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKGBFcnJvciBnZW5lcmF0aW5nIGF1ZGlvOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yKCdQbGVhc2UgZmlsbCBpbiBhdCBsZWFzdCBvbmUgZmllbGQgYW5kIHNldCBhIGR1cmF0aW9uLicpO1xuICAgIH1cblxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHBsYXlBdWRpbyA9ICgpID0+IHtcbiAgICBpZiAoYXVkaW9CdWZmZXIpIHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IGF1ZGlvQ29udGV4dC5jdXJyZW50LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgc291cmNlLmJ1ZmZlciA9IGF1ZGlvQnVmZmVyO1xuICAgICAgc291cmNlLmNvbm5lY3QoYXVkaW9Db250ZXh0LmN1cnJlbnQuZGVzdGluYXRpb24pO1xuICAgICAgc291cmNlLnN0YXJ0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgbXgtYXV0byBwLTRcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNCB0ZXh0LXdoaXRlXCI+RW50ZXIgTXVzaWMgSW5mbzwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNCBtYi00XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdlbnJlIChlLmcuLCBQb3AsIEphenosIENsYXNzaWNhbClcIlxuICAgICAgICAgIHZhbHVlPXtnZW5yZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEdlbnJlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by10IGZyb20tc2xhdGUtNjAwIHRvLXNsYXRlLTUwMCBwLTIgYm9yZGVyIHRleHQtcHVycGxlLTUwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1haW4gSW5zdHJ1bWVudFwiXG4gICAgICAgICAgdmFsdWU9e2luc3RydW1lbnR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnN0cnVtZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by10IGZyb20tc2xhdGUtNjAwIHRvLXNsYXRlLTUwMCBwLTIgYm9yZGVyIHJvdW5kZWRcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb29kXCJcbiAgICAgICAgICB2YWx1ZT17bW9vZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1vb2QoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXQgZnJvbS1zbGF0ZS02MDAgdG8tc2xhdGUtNTAwIHAtMiBib3JkZXIgcm91bmRlZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVuZXJneSBMZXZlbFwiXG4gICAgICAgICAgdmFsdWU9e2VuZXJneX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVuZXJneShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tdCBmcm9tLXNsYXRlLTYwMCB0by1zbGF0ZS01MDAgcC0yIGJvcmRlclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbXBvXCJcbiAgICAgICAgICB2YWx1ZT17dGVtcG99XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZW1wbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tdCBmcm9tLXNsYXRlLTYwMCB0by1zbGF0ZS01MDAgcC0yIGJvcmRlclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZGl0aW9uYWwgRGVzY3JpcHRpb25cIlxuICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by10IGZyb20tc2xhdGUtNjAwIHRvLXNsYXRlLTUwMCBwLTIgYm9yZGVyXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC13aGl0ZVwiPkR1cmF0aW9uIChpbiBzZWNvbmRzKTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG1pbj1cIjEwXCJcbiAgICAgICAgICBtYXg9XCI2MFwiXG4gICAgICAgICAgdmFsdWU9e2R1cmF0aW9ufVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RHVyYXRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXQgZnJvbS1zbGF0ZS02MDAgdG8tc2xhdGUtNTAwIHAtMiBib3JkZXIgdy1mdWxsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgdmFsdWU9e2dlbmVyYXRlZFByb21wdH1cbiAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tdCBmcm9tLXNsYXRlLTYwMCB0by1zbGF0ZS01MDAgcC01IGJvcmRlciAgdy1mdWxsIG1iLTRcIlxuICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiR2VuZXJhdGVkIFByb21wdFwiXG4gICAgICAvPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2dlbmVyYXRlQXVkaW99XG4gICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkIGhvdmVyOmJnLWJsdWUtNjAwXCJcbiAgICAgID5cbiAgICAgICAge2xvYWRpbmcgPyAnR2VuZXJhdGluZy4uLicgOiAnR2VuZXJhdGUgQXVkaW8nfVxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgbXQtNFwiPntlcnJvcn08L3A+fVxuXG4gICAgICB7YXVkaW9CdWZmZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtwbGF5QXVkaW99XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZCBob3ZlcjpiZy1ncmVlbi02MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBsYXkgR2VuZXJhdGVkIEF1ZGlvXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE11c2ljR2VuZXJhdG9yO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIk11c2ljR2VuZXJhdG9yIiwiZ2VucmUiLCJzZXRHZW5yZSIsImluc3RydW1lbnQiLCJzZXRJbnN0cnVtZW50IiwibW9vZCIsInNldE1vb2QiLCJlbmVyZ3kiLCJzZXRFbmVyZ3kiLCJ0ZW1wbyIsInNldFRlbXBvIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJnZW5lcmF0ZWRQcm9tcHQiLCJzZXRHZW5lcmF0ZWRQcm9tcHQiLCJhdWRpb0J1ZmZlciIsInNldEF1ZGlvQnVmZmVyIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYXVkaW9Db250ZXh0IiwiY3VycmVudCIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsImNsb3NlIiwiZ2V0Q29uZmlnIiwiVFlQRSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19UWVBFIiwiQVBJX1VSTCIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJUT0tFTiIsIk5FWFRfUFVCTElDX0FDQ0VTU19UT0tFTiIsIkNVU1RPTV9VUkwiLCJORVhUX1BVQkxJQ19DVVNUT01fVVJMIiwiZ2V0SGVhZGVycyIsInRva2VuIiwiQXV0aG9yaXphdGlvbiIsImNyZWF0ZVByb21wdCIsInByb21wdFBhcnRzIiwiZmlsdGVyIiwicGFydCIsImpvaW4iLCJjcmVhdGVQYXlsb2FkIiwicHJvbXB0IiwiY29uZmlnIiwicGFyc2VJbnQiLCJpbnB1dHMiLCJwcm9jZXNzQXVkaW8iLCJhdWRpb0RhdGEiLCJzYW1wbGVSYXRlIiwiYXVkaW9BcnJheSIsIkZsb2F0MzJBcnJheSIsIm5ld0F1ZGlvQnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwibGVuZ3RoIiwiZ2V0Q2hhbm5lbERhdGEiLCJzZXQiLCJnZW5lcmF0ZUF1ZGlvIiwicGF5bG9hZCIsInJlc3BvbnNlIiwicG9zdCIsImhlYWRlcnMiLCJkYXRhIiwiZ2VuZXJhdGVkX2F1ZGlvIiwic2FtcGxlX3JhdGUiLCJtZXNzYWdlIiwicGxheUF1ZGlvIiwic291cmNlIiwiY3JlYXRlQnVmZmVyU291cmNlIiwiYnVmZmVyIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwic3RhcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJsYWJlbCIsIm1pbiIsIm1heCIsInRleHRhcmVhIiwicmVhZE9ubHkiLCJyb3dzIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/player/composer.js\n"));

/***/ })

});