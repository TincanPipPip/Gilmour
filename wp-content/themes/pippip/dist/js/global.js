/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/global.js":
/*!*****************************!*\
  !*** ./assets/js/global.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Mobile Nav sub menus
 */
var mainNav = document.querySelector('.m-nav--main');
var navItemParents = mainNav.querySelectorAll('.menu-item-has-children'); // Toggle data-hover state on sub nav's parent <li> to hide/show subnav

function toggleSubNav(e, subNavParentLi) {
  if (subNavParentLi.getAttribute('data-hover') === 'true') {
    subNavParentLi.setAttribute('data-hover', 'false');
  } else {
    subNavParentLi.setAttribute('data-hover', 'true');
  }

  e.preventDefault();
}

navItemParents.forEach(function (subNavParentLi) {
  var parentLink = subNavParentLi.querySelector('a');
  var firstChildLi = subNavParentLi.querySelector('li');
  var subNavTitle = document.createElement('li'); // Get Parent <li>'s link title and add to sub nav to form back button

  subNavTitle.classList.add('a-mobile-helper');
  subNavTitle.innerHTML = "<span>".concat(parentLink.textContent, "</span>");
  firstChildLi.before(subNavTitle); // When clicking the '>' button in the parent link, i.e. opening sub nav

  parentLink.querySelector('span').addEventListener('touchstart', function (e) {
    toggleSubNav(e, subNavParentLi);
  }); // When tapping the sub nav title, i.e hiding sub nav

  subNavTitle.querySelector('span').addEventListener('touchstart', function (e) {
    toggleSubNav(e, subNavParentLi);
  });
});
/**
 * Set height of main nav based so it fills screen
 */

function navHeight() {
  var setHeight = window.innerHeight - document.querySelector('.o-header').clientHeight;
  document.body.style.setProperty('--windowHeight', "".concat(setHeight, "px"));
}

navHeight(); // Timer for resize event

var timeout; // Rerun on resize

window.addEventListener('resize', function () {
  if (!timeout) {
    timeout = setTimeout(function () {
      navHeight;
      timeout = null;
    }, 66);
  }
}, false); // TODO - click outside of nav to close menu?

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./assets/js/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/harry/Work/Organic/p1/site/web/app/themes/p1invmgmt/assets/js/global.js */"./assets/js/global.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJtYWluTmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2SXRlbVBhcmVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9nZ2xlU3ViTmF2IiwiZSIsInN1Yk5hdlBhcmVudExpIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicHJldmVudERlZmF1bHQiLCJmb3JFYWNoIiwicGFyZW50TGluayIsImZpcnN0Q2hpbGRMaSIsInN1Yk5hdlRpdGxlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInRleHRDb250ZW50IiwiYmVmb3JlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hdkhlaWdodCIsInNldEhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiYm9keSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOzs7QUFHQSxJQUFNQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFoQjtBQUNBLElBQU1DLGNBQWMsR0FBR0gsT0FBTyxDQUFDSSxnQkFBUixDQUF5Qix5QkFBekIsQ0FBdkIsQyxDQUVBOztBQUNBLFNBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCQyxjQUF6QixFQUF5QztBQUN2QyxNQUFJQSxjQUFjLENBQUNDLFlBQWYsQ0FBNEIsWUFBNUIsTUFBOEMsTUFBbEQsRUFBMEQ7QUFDeERELGtCQUFjLENBQUNFLFlBQWYsQ0FBNEIsWUFBNUIsRUFBMEMsT0FBMUM7QUFDRCxHQUZELE1BRU87QUFDTEYsa0JBQWMsQ0FBQ0UsWUFBZixDQUE0QixZQUE1QixFQUEwQyxNQUExQztBQUNEOztBQUVESCxHQUFDLENBQUNJLGNBQUY7QUFDRDs7QUFFRFAsY0FBYyxDQUFDUSxPQUFmLENBQXVCLFVBQUNKLGNBQUQsRUFBb0I7QUFDekMsTUFBTUssVUFBVSxHQUFHTCxjQUFjLENBQUNMLGFBQWYsQ0FBNkIsR0FBN0IsQ0FBbkI7QUFDQSxNQUFNVyxZQUFZLEdBQUdOLGNBQWMsQ0FBQ0wsYUFBZixDQUE2QixJQUE3QixDQUFyQjtBQUNBLE1BQU1ZLFdBQVcsR0FBR2IsUUFBUSxDQUFDYyxhQUFULENBQXVCLElBQXZCLENBQXBCLENBSHlDLENBS3pDOztBQUNBRCxhQUFXLENBQUNFLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLGlCQUExQjtBQUNBSCxhQUFXLENBQUNJLFNBQVosbUJBQWlDTixVQUFVLENBQUNPLFdBQTVDO0FBQ0FOLGNBQVksQ0FBQ08sTUFBYixDQUFvQk4sV0FBcEIsRUFSeUMsQ0FVekM7O0FBQ0FGLFlBQVUsQ0FBQ1YsYUFBWCxDQUF5QixNQUF6QixFQUFpQ21CLGdCQUFqQyxDQUFrRCxZQUFsRCxFQUFnRSxVQUFDZixDQUFELEVBQU87QUFDckVELGdCQUFZLENBQUNDLENBQUQsRUFBSUMsY0FBSixDQUFaO0FBQ0QsR0FGRCxFQVh5QyxDQWV6Qzs7QUFDQU8sYUFBVyxDQUFDWixhQUFaLENBQTBCLE1BQTFCLEVBQWtDbUIsZ0JBQWxDLENBQW1ELFlBQW5ELEVBQWlFLFVBQUNmLENBQUQsRUFBTztBQUN0RUQsZ0JBQVksQ0FBQ0MsQ0FBRCxFQUFJQyxjQUFKLENBQVo7QUFDRCxHQUZEO0FBR0QsQ0FuQkQ7QUFxQkE7Ozs7QUFHQSxTQUFTZSxTQUFULEdBQXFCO0FBQ25CLE1BQU1DLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLEdBQXFCeEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLEVBQW9Dd0IsWUFBM0U7QUFFQXpCLFVBQVEsQ0FBQzBCLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsV0FBcEIsQ0FBZ0MsZ0JBQWhDLFlBQXFETixTQUFyRDtBQUNEOztBQUVERCxTQUFTLEcsQ0FFVDs7QUFDQSxJQUFJUSxPQUFKLEMsQ0FFQTs7QUFDQU4sTUFBTSxDQUFDSCxnQkFBUCxDQUNFLFFBREYsRUFFRSxZQUFXO0FBQ1QsTUFBSSxDQUFDUyxPQUFMLEVBQWM7QUFDWkEsV0FBTyxHQUFHQyxVQUFVLENBQUMsWUFBVztBQUM5QlQsZUFBUztBQUNUUSxhQUFPLEdBQUcsSUFBVjtBQUNELEtBSG1CLEVBR2pCLEVBSGlCLENBQXBCO0FBSUQ7QUFDRixDQVRILEVBVUUsS0FWRixFLENBYUEsNkMiLCJmaWxlIjoiL2pzL2dsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCIvKipcbiAqIE1vYmlsZSBOYXYgc3ViIG1lbnVzXG4gKi9cbmNvbnN0IG1haW5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubS1uYXYtLW1haW4nKTtcbmNvbnN0IG5hdkl0ZW1QYXJlbnRzID0gbWFpbk5hdi5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicpO1xuXG4vLyBUb2dnbGUgZGF0YS1ob3ZlciBzdGF0ZSBvbiBzdWIgbmF2J3MgcGFyZW50IDxsaT4gdG8gaGlkZS9zaG93IHN1Ym5hdlxuZnVuY3Rpb24gdG9nZ2xlU3ViTmF2KGUsIHN1Yk5hdlBhcmVudExpKSB7XG4gIGlmIChzdWJOYXZQYXJlbnRMaS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaG92ZXInKSA9PT0gJ3RydWUnKSB7XG4gICAgc3ViTmF2UGFyZW50TGkuc2V0QXR0cmlidXRlKCdkYXRhLWhvdmVyJywgJ2ZhbHNlJyk7XG4gIH0gZWxzZSB7XG4gICAgc3ViTmF2UGFyZW50TGkuc2V0QXR0cmlidXRlKCdkYXRhLWhvdmVyJywgJ3RydWUnKTtcbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxubmF2SXRlbVBhcmVudHMuZm9yRWFjaCgoc3ViTmF2UGFyZW50TGkpID0+IHtcbiAgY29uc3QgcGFyZW50TGluayA9IHN1Yk5hdlBhcmVudExpLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgY29uc3QgZmlyc3RDaGlsZExpID0gc3ViTmF2UGFyZW50TGkucXVlcnlTZWxlY3RvcignbGknKTtcbiAgY29uc3Qgc3ViTmF2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIC8vIEdldCBQYXJlbnQgPGxpPidzIGxpbmsgdGl0bGUgYW5kIGFkZCB0byBzdWIgbmF2IHRvIGZvcm0gYmFjayBidXR0b25cbiAgc3ViTmF2VGl0bGUuY2xhc3NMaXN0LmFkZCgnYS1tb2JpbGUtaGVscGVyJyk7XG4gIHN1Yk5hdlRpdGxlLmlubmVySFRNTCA9IGA8c3Bhbj4ke3BhcmVudExpbmsudGV4dENvbnRlbnR9PC9zcGFuPmA7XG4gIGZpcnN0Q2hpbGRMaS5iZWZvcmUoc3ViTmF2VGl0bGUpO1xuXG4gIC8vIFdoZW4gY2xpY2tpbmcgdGhlICc+JyBidXR0b24gaW4gdGhlIHBhcmVudCBsaW5rLCBpLmUuIG9wZW5pbmcgc3ViIG5hdlxuICBwYXJlbnRMaW5rLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICB0b2dnbGVTdWJOYXYoZSwgc3ViTmF2UGFyZW50TGkpO1xuICB9KTtcblxuICAvLyBXaGVuIHRhcHBpbmcgdGhlIHN1YiBuYXYgdGl0bGUsIGkuZSBoaWRpbmcgc3ViIG5hdlxuICBzdWJOYXZUaXRsZS5xdWVyeVNlbGVjdG9yKCdzcGFuJykuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKSA9PiB7XG4gICAgdG9nZ2xlU3ViTmF2KGUsIHN1Yk5hdlBhcmVudExpKTtcbiAgfSk7XG59KTtcblxuLyoqXG4gKiBTZXQgaGVpZ2h0IG9mIG1haW4gbmF2IGJhc2VkIHNvIGl0IGZpbGxzIHNjcmVlblxuICovXG5mdW5jdGlvbiBuYXZIZWlnaHQoKSB7XG4gIGNvbnN0IHNldEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLWhlYWRlcicpLmNsaWVudEhlaWdodDtcblxuICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KCctLXdpbmRvd0hlaWdodCcsIGAke3NldEhlaWdodH1weGApO1xufVxuXG5uYXZIZWlnaHQoKTtcblxuLy8gVGltZXIgZm9yIHJlc2l6ZSBldmVudFxubGV0IHRpbWVvdXQ7XG5cbi8vIFJlcnVuIG9uIHJlc2l6ZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICdyZXNpemUnLFxuICBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBuYXZIZWlnaHQ7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgfSwgNjYpO1xuICAgIH1cbiAgfSxcbiAgZmFsc2Vcbik7XG5cbi8vIFRPRE8gLSBjbGljayBvdXRzaWRlIG9mIG5hdiB0byBjbG9zZSBtZW51P1xuIl0sInNvdXJjZVJvb3QiOiIifQ==