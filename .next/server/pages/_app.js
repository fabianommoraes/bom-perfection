/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_store__WEBPACK_IMPORTED_MODULE_2__]);\n_redux_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/media/fabiano/dev/bom-perfection/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_redux_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(App));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFFekMsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM3QyxxQkFBTyw4REFBQ0Q7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakM7QUFDQSxpRUFBZUgsaURBQU9BLENBQUNJLFNBQVMsQ0FBQ0gsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvbS1jaGFsbGFuZ2UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufVxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTtcbiJdLCJuYW1lcyI6WyJ3cmFwcGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./redux/monstersSlice.ts":
/*!********************************!*\
  !*** ./redux/monstersSlice.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getComputerMonsterId: () => (/* binding */ getComputerMonsterId),\n/* harmony export */   getIsLoading: () => (/* binding */ getIsLoading),\n/* harmony export */   getMonsterList: () => (/* binding */ getMonsterList),\n/* harmony export */   getSelectedMonsterId: () => (/* binding */ getSelectedMonsterId),\n/* harmony export */   getWinnerName: () => (/* binding */ getWinnerName),\n/* harmony export */   monsterSlice: () => (/* binding */ monsterSlice),\n/* harmony export */   monsterSliceReducers: () => (/* binding */ monsterSliceReducers),\n/* harmony export */   setComputerMonsterId: () => (/* binding */ setComputerMonsterId),\n/* harmony export */   setDataFromFetch: () => (/* binding */ setDataFromFetch),\n/* harmony export */   setIsLoading: () => (/* binding */ setIsLoading),\n/* harmony export */   setSelectedMonsterId: () => (/* binding */ setSelectedMonsterId),\n/* harmony export */   setWinnerName: () => (/* binding */ setWinnerName)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst initialState = {\n    monsterList: [],\n    selectedMonsterId: \"\",\n    computerMonsterId: \"\",\n    winnerName: \"\",\n    isLoading: false\n};\nconst monsterSliceReducers = {\n    setDataFromFetch (state, action) {\n        state.monsterList = action.payload;\n    },\n    setSelectedMonsterId (state, action) {\n        state.selectedMonsterId = action.payload;\n    },\n    setComputerMonsterId (state, action) {\n        state.computerMonsterId = action.payload;\n    },\n    setWinnerName (state, action) {\n        state.winnerName = action.payload;\n    },\n    setIsLoading (state, action) {\n        state.isLoading = action.payload;\n    }\n};\nconst monsterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"monsters\",\n    initialState,\n    reducers: monsterSliceReducers\n});\nconst { setDataFromFetch, setSelectedMonsterId, setComputerMonsterId, setWinnerName, setIsLoading } = monsterSlice.actions;\nconst getMonsterList = (state)=>state.monsters.monsterList;\nconst getSelectedMonsterId = (state)=>state.monsters.selectedMonsterId;\nconst getComputerMonsterId = (state)=>state.monsters.computerMonsterId;\nconst getWinnerName = (state)=>state.monsters.winnerName;\nconst getIsLoading = (state)=>state.monsters.isLoading;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (monsterSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9tb25zdGVyc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBWS9DLE1BQU1DLGVBQXNDO0lBQzFDQyxhQUFhLEVBQUU7SUFDZkMsbUJBQW1CO0lBQ25CQyxtQkFBbUI7SUFDbkJDLFlBQVk7SUFDWkMsV0FBVztBQUNiO0FBRU8sTUFBTUMsdUJBQXVCO0lBQ2xDQyxrQkFDRUMsS0FBcUMsRUFDckNDLE1BQXdCO1FBRXhCRCxNQUFNUCxXQUFXLEdBQUdRLE9BQU9DLE9BQU87SUFDcEM7SUFDQUMsc0JBQ0VILEtBQW9DLEVBQ3BDQyxNQUF3QjtRQUV4QkQsTUFBTU4saUJBQWlCLEdBQUdPLE9BQU9DLE9BQU87SUFDMUM7SUFDQUUsc0JBQ0VKLEtBQW9DLEVBQ3BDQyxNQUF3QjtRQUV4QkQsTUFBTUwsaUJBQWlCLEdBQUdNLE9BQU9DLE9BQU87SUFDMUM7SUFDQUcsZUFBY0wsS0FBNkIsRUFBRUMsTUFBd0I7UUFDbkVELE1BQU1KLFVBQVUsR0FBR0ssT0FBT0MsT0FBTztJQUNuQztJQUNBSSxjQUFhTixLQUE2QixFQUFFQyxNQUF3QjtRQUNsRUQsTUFBTUgsU0FBUyxHQUFHSSxPQUFPQyxPQUFPO0lBQ2xDO0FBQ0YsRUFBRTtBQUVLLE1BQU1LLGVBQWVoQiw2REFBV0EsQ0FBQztJQUN0Q2lCLE1BQU07SUFDTmhCO0lBQ0FpQixVQUFVWDtBQUNaLEdBQUc7QUFFSSxNQUFNLEVBQ1hDLGdCQUFnQixFQUNoQkksb0JBQW9CLEVBQ3BCQyxvQkFBb0IsRUFDcEJDLGFBQWEsRUFDYkMsWUFBWSxFQUNiLEdBQUdDLGFBQWFHLE9BQU8sQ0FBQztBQUVsQixNQUFNQyxpQkFBaUIsQ0FBQ1gsUUFBb0JBLE1BQU1ZLFFBQVEsQ0FBQ25CLFdBQVcsQ0FBQztBQUN2RSxNQUFNb0IsdUJBQXVCLENBQUNiLFFBQ25DQSxNQUFNWSxRQUFRLENBQUNsQixpQkFBaUIsQ0FBQztBQUM1QixNQUFNb0IsdUJBQXVCLENBQUNkLFFBQ25DQSxNQUFNWSxRQUFRLENBQUNqQixpQkFBaUIsQ0FBQztBQUM1QixNQUFNb0IsZ0JBQWdCLENBQUNmLFFBQW9CQSxNQUFNWSxRQUFRLENBQUNoQixVQUFVLENBQUM7QUFDckUsTUFBTW9CLGVBQWUsQ0FBQ2hCLFFBQW9CQSxNQUFNWSxRQUFRLENBQUNmLFNBQVMsQ0FBQztBQUUxRSxpRUFBZVUsYUFBYVUsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9tLWNoYWxsYW5nZS8uL3JlZHV4L21vbnN0ZXJzU2xpY2UudHM/MDRlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuL3N0b3JlXCI7XG5pbXBvcnQgeyBNb25zdGVyRGF0YSB9IGZyb20gXCJAL3NoYXJlZC90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhdHRsZU9mTW9uc3RlcnNTdGF0ZSB7XG4gIG1vbnN0ZXJMaXN0OiBNb25zdGVyRGF0YVtdO1xuICBzZWxlY3RlZE1vbnN0ZXJJZDogc3RyaW5nO1xuICBjb21wdXRlck1vbnN0ZXJJZDogc3RyaW5nO1xuICB3aW5uZXJOYW1lOiBzdHJpbmc7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBCYXR0bGVPZk1vbnN0ZXJzU3RhdGUgPSB7XG4gIG1vbnN0ZXJMaXN0OiBbXSxcbiAgc2VsZWN0ZWRNb25zdGVySWQ6IFwiXCIsXG4gIGNvbXB1dGVyTW9uc3RlcklkOiBcIlwiLFxuICB3aW5uZXJOYW1lOiBcIlwiLFxuICBpc0xvYWRpbmc6IGZhbHNlXG59O1xuXG5leHBvcnQgY29uc3QgbW9uc3RlclNsaWNlUmVkdWNlcnMgPSB7XG4gIHNldERhdGFGcm9tRmV0Y2goXG4gICAgc3RhdGU6IHsgbW9uc3Rlckxpc3Q6IE1vbnN0ZXJEYXRhW10gfSxcbiAgICBhY3Rpb246IHsgcGF5bG9hZDogYW55IH1cbiAgKSB7XG4gICAgc3RhdGUubW9uc3Rlckxpc3QgPSBhY3Rpb24ucGF5bG9hZDtcbiAgfSxcbiAgc2V0U2VsZWN0ZWRNb25zdGVySWQoXG4gICAgc3RhdGU6IHsgc2VsZWN0ZWRNb25zdGVySWQ6IHN0cmluZyB9LFxuICAgIGFjdGlvbjogeyBwYXlsb2FkOiBhbnkgfVxuICApIHtcbiAgICBzdGF0ZS5zZWxlY3RlZE1vbnN0ZXJJZCA9IGFjdGlvbi5wYXlsb2FkO1xuICB9LFxuICBzZXRDb21wdXRlck1vbnN0ZXJJZChcbiAgICBzdGF0ZTogeyBjb21wdXRlck1vbnN0ZXJJZDogc3RyaW5nIH0sXG4gICAgYWN0aW9uOiB7IHBheWxvYWQ6IGFueSB9XG4gICkge1xuICAgIHN0YXRlLmNvbXB1dGVyTW9uc3RlcklkID0gYWN0aW9uLnBheWxvYWQ7XG4gIH0sXG4gIHNldFdpbm5lck5hbWUoc3RhdGU6IHsgd2lubmVyTmFtZTogc3RyaW5nIH0sIGFjdGlvbjogeyBwYXlsb2FkOiBhbnkgfSkge1xuICAgIHN0YXRlLndpbm5lck5hbWUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgfSxcbiAgc2V0SXNMb2FkaW5nKHN0YXRlOiB7IGlzTG9hZGluZzogYm9vbGVhbiB9LCBhY3Rpb246IHsgcGF5bG9hZDogYW55IH0pIHtcbiAgICBzdGF0ZS5pc0xvYWRpbmcgPSBhY3Rpb24ucGF5bG9hZDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG1vbnN0ZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJtb25zdGVyc1wiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiBtb25zdGVyU2xpY2VSZWR1Y2Vyc1xufSk7XG5cbmV4cG9ydCBjb25zdCB7XG4gIHNldERhdGFGcm9tRmV0Y2gsXG4gIHNldFNlbGVjdGVkTW9uc3RlcklkLFxuICBzZXRDb21wdXRlck1vbnN0ZXJJZCxcbiAgc2V0V2lubmVyTmFtZSxcbiAgc2V0SXNMb2FkaW5nXG59ID0gbW9uc3RlclNsaWNlLmFjdGlvbnM7XG5cbmV4cG9ydCBjb25zdCBnZXRNb25zdGVyTGlzdCA9IChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLm1vbnN0ZXJzLm1vbnN0ZXJMaXN0O1xuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGVkTW9uc3RlcklkID0gKHN0YXRlOiBBcHBTdGF0ZSkgPT5cbiAgc3RhdGUubW9uc3RlcnMuc2VsZWN0ZWRNb25zdGVySWQ7XG5leHBvcnQgY29uc3QgZ2V0Q29tcHV0ZXJNb25zdGVySWQgPSAoc3RhdGU6IEFwcFN0YXRlKSA9PlxuICBzdGF0ZS5tb25zdGVycy5jb21wdXRlck1vbnN0ZXJJZDtcbmV4cG9ydCBjb25zdCBnZXRXaW5uZXJOYW1lID0gKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUubW9uc3RlcnMud2lubmVyTmFtZTtcbmV4cG9ydCBjb25zdCBnZXRJc0xvYWRpbmcgPSAoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5tb25zdGVycy5pc0xvYWRpbmc7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbnN0ZXJTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwibW9uc3Rlckxpc3QiLCJzZWxlY3RlZE1vbnN0ZXJJZCIsImNvbXB1dGVyTW9uc3RlcklkIiwid2lubmVyTmFtZSIsImlzTG9hZGluZyIsIm1vbnN0ZXJTbGljZVJlZHVjZXJzIiwic2V0RGF0YUZyb21GZXRjaCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldFNlbGVjdGVkTW9uc3RlcklkIiwic2V0Q29tcHV0ZXJNb25zdGVySWQiLCJzZXRXaW5uZXJOYW1lIiwic2V0SXNMb2FkaW5nIiwibW9uc3RlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWN0aW9ucyIsImdldE1vbnN0ZXJMaXN0IiwibW9uc3RlcnMiLCJnZXRTZWxlY3RlZE1vbnN0ZXJJZCIsImdldENvbXB1dGVyTW9uc3RlcklkIiwiZ2V0V2lubmVyTmFtZSIsImdldElzTG9hZGluZyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/monstersSlice.ts\n");

/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   wrapper: () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _monstersSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monstersSlice */ \"./redux/monstersSlice.ts\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _monstersSlice__WEBPACK_IMPORTED_MODULE_1__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _monstersSlice__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    [_monstersSlice__WEBPACK_IMPORTED_MODULE_1__.monsterSlice.name]: _monstersSlice__WEBPACK_IMPORTED_MODULE_1__.monsterSlice.reducer\n});\nconst makeStore = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: rootReducer,\n        devTools: true\n    });\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(makeStore);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRTtBQUNwQjtBQUNJO0FBRW5ELE1BQU1JLGNBQWNILGlFQUFlQSxDQUFDO0lBQ2xDLENBQUNDLHdEQUFZQSxDQUFDRyxJQUFJLENBQUMsRUFBRUgsd0RBQVlBLENBQUNJLE9BQU87QUFDM0M7QUFFQSxNQUFNQyxZQUFZLElBQ2hCUCxnRUFBY0EsQ0FBQztRQUNiTSxTQUFTRjtRQUNUSSxVQUFVO0lBQ1o7QUFJSyxNQUFNQyxVQUFVTixpRUFBYUEsQ0FBV0ksV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvbS1jaGFsbGFuZ2UvLi9yZWR1eC9zdG9yZS50cz85M2FmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgbW9uc3RlclNsaWNlIH0gZnJvbSBcIi4vbW9uc3RlcnNTbGljZVwiO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBbbW9uc3RlclNsaWNlLm5hbWVdOiBtb25zdGVyU2xpY2UucmVkdWNlclxufSk7XG5cbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+XG4gIGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiByb290UmVkdWNlcixcbiAgICBkZXZUb29sczogdHJ1ZVxuICB9KTtcblxuZXhwb3J0IHR5cGUgQXBwU3RvcmUgPSBSZXR1cm5UeXBlPHR5cGVvZiBtYWtlU3RvcmU+O1xuZXhwb3J0IHR5cGUgQXBwU3RhdGUgPSBSZXR1cm5UeXBlPEFwcFN0b3JlW1wiZ2V0U3RhdGVcIl0+O1xuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyPEFwcFN0b3JlPihtYWtlU3RvcmUpO1xuXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IEFwcFN0b3JlW1wiZGlzcGF0Y2hcIl07XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJtb25zdGVyU2xpY2UiLCJjcmVhdGVXcmFwcGVyIiwicm9vdFJlZHVjZXIiLCJuYW1lIiwicmVkdWNlciIsIm1ha2VTdG9yZSIsImRldlRvb2xzIiwid3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/store.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();