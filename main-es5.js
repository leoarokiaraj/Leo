function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about-me/about-me.component.ts":
  /*!************************************************!*\
    !*** ./src/app/about-me/about-me.component.ts ***!
    \************************************************/

  /*! exports provided: AboutMeComponent */

  /***/
  function srcAppAboutMeAboutMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () {
      return AboutMeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../global */
    "./src/app/global.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AboutMeComponent = /*#__PURE__*/function () {
      function AboutMeComponent(router) {
        _classCallCheck(this, AboutMeComponent);

        this.router = router;
        this.AboutAssetPath = _global__WEBPACK_IMPORTED_MODULE_1__["AssetPath"] + _global__WEBPACK_IMPORTED_MODULE_1__["AboutAsset"];
        this.aboutMeDOM = '';
        this.mobile = true;
        this.defaultTouch = {
          x: 0,
          y: 0,
          time: 0
        };
        this.textUpdateCounter = 0;
      }

      _createClass(AboutMeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ResizeEvent(document.querySelector('#AboutMeBackground').clientWidth, document.querySelector('#AboutMeBackground').clientHeight);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.aboutMeDOM = document.querySelector('#aboutMe');
          this.aboutMeDOM.style.height = window.innerHeight + 'px';
          setTimeout(function () {
            _this.TextUpdate();
          }, 1000);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.setIntr);
        }
      }, {
        key: "onMousewheel",
        value: function onMousewheel(event) {
          if (event.wheelDelta > 0) {
            this.router.navigate(['']);
          }

          if (event.wheelDelta < 0) {
            this.router.navigate(['timeline']);
          }
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.ResizeEvent(event.target.innerWidth, event.target.innerHeight);
        }
      }, {
        key: "onOrientationChange",
        value: function onOrientationChange(event) {
          location.reload();
        }
      }, {
        key: "handleTouch",
        value: function handleTouch(event) {
          var touch = event.touches[0] || event.changedTouches[0]; // check the events

          if (event.type === 'touchstart') {
            this.defaultTouch.x = touch.pageX;
            this.defaultTouch.y = touch.pageY;
            this.defaultTouch.time = event.timeStamp;
          } else if (event.type === 'touchend') {
            var deltaX = touch.pageX - this.defaultTouch.x;
            var deltaY = touch.pageY - this.defaultTouch.y;
            var deltaTime = event.timeStamp - this.defaultTouch.time; // simulte a swipe -> less than 500 ms and more than 60 px

            if (deltaTime < 500) {
              // touch movement lasted less than 500 ms
              if (Math.abs(deltaX) > 60) {
                // delta x is at least 60 pixels
                if (deltaX > 0) {
                  this.doSwipeRight(event);
                } else {
                  this.doSwipeLeft(event);
                }
              }

              if (Math.abs(deltaY) > 60) {
                // delta y is at least 60 pixels
                if (deltaY > 0) {
                  this.doSwipeDown(event);
                } else {
                  this.doSwipeUp();
                }
              }
            }
          }
        }
      }, {
        key: "doSwipeLeft",
        value: function doSwipeLeft(event) {
          console.log('swipe left', event);
        }
      }, {
        key: "doSwipeRight",
        value: function doSwipeRight(event) {
          console.log('swipe right', event);
        }
      }, {
        key: "doSwipeUp",
        value: function doSwipeUp() {
          var articleDom = document.querySelector('#aboutMe');

          if (articleDom.scrollTop === articleDom.scrollHeight - articleDom.offsetHeight) {
            this.router.navigate(['timeline']);
          }
        }
      }, {
        key: "doSwipeDown",
        value: function doSwipeDown(event) {
          if (document.querySelector('#aboutMe').scrollTop === 0) {
            this.router.navigate(['']);
          }
        }
      }, {
        key: "ResizeEvent",
        value: function ResizeEvent(width, height) {
          console.log(width);

          if (width <= 900) {
            this.mobile = true;
          } else {
            this.mobile = false;
          }
        }
      }, {
        key: "TextUpdate",
        value: function TextUpdate() {
          var _this2 = this;

          this.setIntr = setInterval(function () {
            try {
              switch (_this2.textUpdateCounter) {
                case 0:
                  document.querySelector('.all').classList.add('strike');
                  document.querySelector('.some').style.display = 'inline';
                  break;

                case 1:
                  document.querySelector('.some').classList.add('strike');
                  document.querySelector('.one').style.display = 'inline';
                  break;

                case 2:
                  document.querySelector('.one').classList.add('strike');
                  document.querySelector('.ofyour').style.display = 'none';
                  document.querySelector('.your').style.display = 'inline';
                  document.querySelector('.ok').style.display = 'inline';
                  break;
              }

              _this2.textUpdateCounter++;
              if (_this2.textUpdateCounter > 2) clearInterval(_this2.setIntr);
              console.log('Running ' + _this2.textUpdateCounter);
            } catch (err) {
              clearInterval(_this2.setIntr);
              console.log('err ' + err);
            }
          }, 3000);
        }
      }]);

      return AboutMeComponent;
    }();

    AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) {
      return new (t || AboutMeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutMeComponent,
      selectors: [["app-about-me"]],
      hostBindings: function AboutMeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousewheel", function AboutMeComponent_mousewheel_HostBindingHandler($event) {
            return ctx.onMousewheel($event);
          })("resize", function AboutMeComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("orientationchange", function AboutMeComponent_orientationchange_HostBindingHandler($event) {
            return ctx.onOrientationChange($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("touchstart", function AboutMeComponent_touchstart_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          })("touchend", function AboutMeComponent_touchend_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          })("touchcancel", function AboutMeComponent_touchcancel_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          });
        }
      },
      decls: 26,
      vars: 0,
      consts: [["id", "AboutMeBackground"], ["id", "aboutMe"], [1, "content"], [1, "textContainer"], [1, "letters"], [1, "brief"], [1, "all"], [1, "some"], [1, "one"], [1, "ofyour"], [1, "your"], [1, "problems"], [1, "ok"], [1, "description"]],
      template: function AboutMeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " I'm a software developer, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I can solve ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "all ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "some ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "one ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "of your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "problems,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " ok ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "I've 4 years\u2019 of experience, offering expertise in core web design concepts and Windows application. Developed robust code for web applications. I'm Proficient in C, C++, C#, SQL and Angular. I prefer to keep learning, continue challenging myself, and do interesting things that matter.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#aboutMe {\r\n  margin: 0px;\r\n  background-color: black !important;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n#aboutMe .textContainer {\r\n  vertical-align: middle;\r\n  display: table-cell;\r\n  color: #FFF;\r\n  word-wrap: break-word;\r\n}\r\n\r\n#aboutMe .content::before{\r\n    content: ' ';\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 0;\r\n    opacity: 0.3;\r\n    background: url('/Leo/assets/AboutMe/MyPicLS.jpg') no-repeat center center;\r\n    background-size: cover;\r\n}\r\n\r\n#aboutMe .content{\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n@-webkit-keyframes fadeInUp {\r\n    from {\r\n        transform: translate3d(0,40px,0)\r\n    }\r\n\r\n    to {\r\n        transform: translate3d(0,0,0);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@keyframes fadeInUp {\r\n    from {\r\n        transform: translate3d(0,40px,0)\r\n    }\r\n\r\n    to {\r\n        transform: translate3d(0,0,0);\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n#aboutMe .letters {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin: 10% 10% 10% 10%;\r\n}\r\n\r\n#aboutMe .textContainer {\r\n    -webkit-animation-name: fadeInUp;\r\n            animation-name: fadeInUp;\r\n    -webkit-animation-duration: 1.5s;\r\n            animation-duration: 1.5s;\r\n     -webkit-animation-fill-mode: both;\r\n             animation-fill-mode: both;\r\n     transition: all 300ms linear;\r\n\r\n}\r\n\r\n#aboutMe .brief{\r\n  font-family: MetalMania;\r\n  font-size: 6vh;\r\n  font-weight: 100;\r\n}\r\n\r\n#aboutMe .description{\r\n  font-family: Vibur;\r\n  font-size: 5vh;\r\n  margin-top: 5%;\r\n  display: block;\r\n}\r\n\r\n#aboutMe .all\r\n{\r\n  display: inline;\r\n}\r\n\r\n#aboutMe .some\r\n{\r\n  display: none;\r\n}\r\n\r\n#aboutMe .one\r\n{\r\n  display: none;\r\n}\r\n\r\n#aboutMe .ok\r\n{\r\n  display: none;\r\n}\r\n\r\n#aboutMe .ofyour\r\n{\r\n  display: inline;\r\n}\r\n\r\n#aboutMe .your\r\n{\r\n  display: none;\r\n}\r\n\r\n#aboutMe .all::after, .some::after, .one::after, .ok::after, .ofyour::after, .your::after\r\n{\r\n  transition: all 300ms linear;\r\n  content:' ';\r\n}\r\n\r\n#aboutMe .strike {\r\n  position: relative;\r\n}\r\n\r\n#aboutMe .strike::after {\r\n  content: ' ';\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  width: 82%;\r\n  height: 0.5vh;\r\n  background: #cacaca;\r\n  -webkit-animation-name: strike;\r\n          animation-name: strike;\r\n  -webkit-animation-duration: 4s;\r\n          animation-duration: 4s;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLDBFQUFzRTtJQUN0RSxzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUdBO0lBQ0k7UUFDSTtJQUNKOztJQUVBO1FBQ0ksNkJBQTZCO1FBQzdCO0lBQ0o7QUFDSjs7QUFUQTtJQUNJO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLDZCQUE2QjtRQUM3QjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsZ0NBQXdCO1lBQXhCLHdCQUF3QjtLQUN2QixpQ0FBeUI7YUFBekIseUJBQXlCO0tBQ3pCLDRCQUE0Qjs7QUFFakM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUNBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSw0QkFBNEI7RUFDNUIsV0FBVztBQUNiOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5Q0FBaUM7VUFBakMsaUNBQWlDO0VBQ2pDLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWJvdXRNZSB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNhYm91dE1lIC50ZXh0Q29udGFpbmVyIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4jYWJvdXRNZSAuY29udGVudDo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL0Fib3V0TWUvTXlQaWNMUy5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiNhYm91dE1lIC5jb250ZW50e1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDQwcHgsMClcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgfVxyXG59XHJcblxyXG4jYWJvdXRNZSAubGV0dGVycyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwJSAxMCUgMTAlIDEwJTtcclxufVxyXG5cclxuI2Fib3V0TWUgLnRleHRDb250YWluZXIge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcclxuXHJcbn1cclxuXHJcbiNhYm91dE1lIC5icmllZntcclxuICBmb250LWZhbWlseTogTWV0YWxNYW5pYTtcclxuICBmb250LXNpemU6IDZ2aDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4jYWJvdXRNZSAuZGVzY3JpcHRpb257XHJcbiAgZm9udC1mYW1pbHk6IFZpYnVyO1xyXG4gIGZvbnQtc2l6ZTogNXZoO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jYWJvdXRNZSAuYWxsXHJcbntcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbiNhYm91dE1lIC5zb21lXHJcbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jYWJvdXRNZSAub25lXHJcbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNhYm91dE1lIC5va1xyXG57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2Fib3V0TWUgLm9meW91clxyXG57XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4jYWJvdXRNZSAueW91clxyXG57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2Fib3V0TWUgLmFsbDo6YWZ0ZXIsIC5zb21lOjphZnRlciwgLm9uZTo6YWZ0ZXIsIC5vazo6YWZ0ZXIsIC5vZnlvdXI6OmFmdGVyLCAueW91cjo6YWZ0ZXJcclxue1xyXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XHJcbiAgY29udGVudDonICc7XHJcbn1cclxuI2Fib3V0TWUgLnN0cmlrZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiNhYm91dE1lIC5zdHJpa2U6OmFmdGVyIHtcclxuICBjb250ZW50OiAnICc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDgyJTtcclxuICBoZWlnaHQ6IDAuNXZoO1xyXG4gIGJhY2tncm91bmQ6ICNjYWNhY2E7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHN0cmlrZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcbiJdfQ== */", "/*\r\n  ##Device = Desktops\r\n  ##Screen = 1281px to higher resolution desktops\r\n*/\r\n@media (min-width: 1281px) {}\r\n/*\r\n  ##Device = Laptops, Desktops\r\n  ##Screen = B/w 1025px to 1280px\r\n*/\r\n@media (min-width: 1025px) and (max-width: 1280px) {}\r\n/*\r\n  ##Device = Tablets, Ipads (portrait)\r\n  ##Screen = B/w 768px to 1024px\r\n*/\r\n@media (max-width: 1024px) {\r\n  .imageContainer {\r\n    height: 75%;\r\n    text-align: center;\r\n    display: block;\r\n    opacity: 0;\r\n     -webkit-animation-name: fadeInUp;\r\n             animation-name: fadeInUp;\r\n     -webkit-animation-duration: 1.5s;\r\n             animation-duration: 1.5s;\r\n      -webkit-animation-fill-mode: both;\r\n              animation-fill-mode: both;\r\n  }\r\n}\r\n@media (max-width: 900px) {\r\n\r\n}\r\n/*\r\n  ##Device = Tablets, Ipads (landscape)\r\n  ##Screen = B/w 768px to 1024px\r\n*/\r\n@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {}\r\n/*\r\n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\r\n  ##Screen = B/w 481px to 767px\r\n*/\r\n@media (min-width: 320px) and (max-width: 780px) {\r\n    #aboutMe {\r\n      overflow-y:scroll;\r\n    }\r\n}\r\n/*\r\n  ##Device = Most of the Smartphones Mobiles (Portrait)\r\n  ##Screen = B/w 320px to 479px\r\n*/\r\n@media (min-width: 320px) and (max-width: 425px) {\r\n  .ml9 {\r\n    position: relative;\r\n    font-weight: 100;\r\n    font-size: 20px;\r\n    top:10%;\r\n  }\r\n\r\n  #aboutMe .letters {\r\n      position: relative;\r\n      display: inline-block;\r\n      overflow: hidden;\r\n      margin: 10% 10% 10% 10%;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnJlc3BvbnNpdmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Q0FHQztBQUNELDRCQUE0QjtBQUU1Qjs7O0NBR0M7QUFDRCxvREFBb0Q7QUFFcEQ7OztDQUdDO0FBQ0Q7RUFDRTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVU7S0FDVCxnQ0FBd0I7YUFBeEIsd0JBQXdCO0tBQ3hCLGdDQUF3QjthQUF4Qix3QkFBd0I7TUFDdkIsaUNBQXlCO2NBQXpCLHlCQUF5QjtFQUM3QjtBQUNGO0FBRUE7O0FBRUE7QUFHQTs7O0NBR0M7QUFDRCxnRkFBZ0Y7QUFFaEY7OztDQUdDO0FBQ0Q7SUFDSTtNQUNFLGlCQUFpQjtJQUNuQjtBQUNKO0FBRUE7OztDQUdDO0FBQ0Q7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLE9BQU87RUFDVDs7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsZ0JBQWdCO01BQ2hCLHVCQUF1QjtFQUMzQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5yZXNwb25zaXZlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgIyNEZXZpY2UgPSBEZXNrdG9wc1xyXG4gICMjU2NyZWVuID0gMTI4MXB4IHRvIGhpZ2hlciByZXNvbHV0aW9uIGRlc2t0b3BzXHJcbiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpIHt9XHJcblxyXG4vKlxyXG4gICMjRGV2aWNlID0gTGFwdG9wcywgRGVza3RvcHNcclxuICAjI1NjcmVlbiA9IEIvdyAxMDI1cHggdG8gMTI4MHB4XHJcbiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHt9XHJcblxyXG4vKlxyXG4gICMjRGV2aWNlID0gVGFibGV0cywgSXBhZHMgKHBvcnRyYWl0KVxyXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxyXG4qL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmltYWdlQ29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcclxuICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XHJcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuXHJcbn1cclxuXHJcblxyXG4vKlxyXG4gICMjRGV2aWNlID0gVGFibGV0cywgSXBhZHMgKGxhbmRzY2FwZSlcclxuICAjI1NjcmVlbiA9IEIvdyA3NjhweCB0byAxMDI0cHhcclxuKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHt9XHJcblxyXG4vKlxyXG4gICMjRGV2aWNlID0gTG93IFJlc29sdXRpb24gVGFibGV0cywgTW9iaWxlcyAoTGFuZHNjYXBlKVxyXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XHJcbiovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XHJcbiAgICAjYWJvdXRNZSB7XHJcbiAgICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG4gICMjRGV2aWNlID0gTW9zdCBvZiB0aGUgU21hcnRwaG9uZXMgTW9iaWxlcyAoUG9ydHJhaXQpXHJcbiAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcclxuKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAubWw5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0b3A6MTAlO1xyXG4gIH1cclxuXHJcbiAgI2Fib3V0TWUgLmxldHRlcnMge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbWFyZ2luOiAxMCUgMTAlIDEwJSAxMCU7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-me',
          templateUrl: './about-me.component.html',
          styleUrls: ['./about-me.component.css', './about-me.component.responsive.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        onMousewheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousewheel', ['$event']]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }],
        onOrientationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:orientationchange', ['$event']]
        }],
        handleTouch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchstart', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchend', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchcancel', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about-me/about-me.component */
    "./src/app/about-me/about-me.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./time-line/time-line.component */
    "./src/app/time-line/time-line.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'aboutme',
      component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"]
    }, {
      path: 'timeline',
      component: _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_4__["TimeLineComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["navElem"];

    var AppComponent = function AppComponent(renderer) {
      var _this3 = this;

      _classCallCheck(this, AppComponent);

      this.renderer = renderer;
      this.title = 'LeoPortfolio';
      /**
       * This events get called by all clicks on the page
       */

      this.renderer.listen('window', 'click', function (e) {
        if (!_this3.NavElem.nativeElement.contains(e.target)) {
          _this3.NavComp.expand(true);
        }
      });
      this.renderer.listen('window', 'mousewheel', function (e) {
        if (_this3.NavComp.menuOpen) {
          _this3.NavComp.expand(true);
        }
      });
      this.renderer.listen('window', 'touchmove', function (e) {
        if (_this3.NavComp.menuOpen) {
          _this3.NavComp.expand(true);
        }
      });
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.NavElem = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.NavComp = _t.first);
        }
      },
      decls: 3,
      vars: 0,
      consts: [["navElem", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }
      },
      directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        NavElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['navElem', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }],
        NavComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['navElem']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about-me/about-me.component */
    "./src/app/about-me/about-me.component.ts");
    /* harmony import */


    var _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./time-line/time-line.component */
    "./src/app/time-line/time-line.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/navigation/navigation.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"], _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_6__["TimeLineComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeComponent"], _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_6__["TimeLineComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(router) {
        _classCallCheck(this, ContactComponent);

        this.router = router;
        this.defaultTouch = {
          x: 0,
          y: 0,
          time: 0
        };
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onMousewheel",
        value: function onMousewheel(event) {
          if (event.wheelDelta > 0) {
            this.router.navigate(['timeline']);
          }
        }
      }, {
        key: "DownloadResume",
        value: function DownloadResume() {
          var _this4 = this;

          var btn = document.querySelector("#downloadButton");
          var label = btn.querySelector('.label');
          var counter = label.querySelector('.counter');

          if (!btn.classList.contains('active') && !btn.classList.contains('done')) {
            btn.classList.add('active');
            this.setLabel(label, label.querySelector('.default'), label.querySelector('.state'), function () {});
            setTimeout(function () {
              counter.classList.add('hide');
              btn.classList.remove('active');
              btn.classList.add('done');
            }, 4000);
            setTimeout(function () {
              _this4.setLabel(label, label.querySelector('.state'), label.querySelector('.default'), function () {
                counter.classList.remove('hide');
                btn.classList.remove('done');
              });
            }, 8000);
          }
        }
      }, {
        key: "handleTouch",
        value: function handleTouch(event) {
          var touch = event.touches[0] || event.changedTouches[0]; // check the events

          if (event.type === 'touchstart') {
            this.defaultTouch.x = touch.pageX;
            this.defaultTouch.y = touch.pageY;
            this.defaultTouch.time = event.timeStamp;
          } else if (event.type === 'touchend') {
            var deltaX = touch.pageX - this.defaultTouch.x;
            var deltaY = touch.pageY - this.defaultTouch.y;
            var deltaTime = event.timeStamp - this.defaultTouch.time; // simulte a swipe -> less than 500 ms and more than 60 px

            if (deltaTime < 500) {
              // touch movement lasted less than 500 ms
              if (Math.abs(deltaX) > 60) {
                // delta x is at least 60 pixels
                if (deltaX > 0) {
                  this.doSwipeRight(event);
                } else {
                  this.doSwipeLeft(event);
                }
              }

              if (Math.abs(deltaY) > 60) {
                // delta y is at least 60 pixels
                if (deltaY > 0) {
                  this.doSwipeDown(event);
                } else {
                  this.doSwipeUp();
                }
              }
            }
          }
        }
      }, {
        key: "doSwipeLeft",
        value: function doSwipeLeft(event) {
          console.log('swipe left', event);
        }
      }, {
        key: "doSwipeRight",
        value: function doSwipeRight(event) {
          console.log('swipe right', event);
        }
      }, {
        key: "doSwipeUp",
        value: function doSwipeUp() {}
      }, {
        key: "doSwipeDown",
        value: function doSwipeDown(event) {
          var articleDom = document.querySelector('.ContactContent');

          if (articleDom.scrollTop === 0) {
            this.router.navigate(['timeline']);
          }
        }
      }, {
        key: "onMove",
        value: function onMove(event) {
          this.update(event);
        }
      }, {
        key: "update",
        value: function update(e) {
          var x = e.clientX;
          var y = e.clientY;

          if (e.type == 'touchmove') {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
          }

          document.querySelector('#ContactRoot').style.setProperty('--cursorX', x + 'px');
          document.querySelector('#ContactRoot').style.setProperty('--cursorY', y + 'px');
        }
      }, {
        key: "setLabel",
        value: function setLabel(div, oldD, newD, callback) {
          oldD.classList.add('hide');
          oldD.classList.remove('show');
          oldD.classList.remove('hide');
          newD.classList.add('show');
          div.removeAttribute('style');

          if (typeof callback === 'function') {
            callback();
          }
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      hostBindings: function ContactComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousewheel", function ContactComponent_mousewheel_HostBindingHandler($event) {
            return ctx.onMousewheel($event);
          })("touchstart", function ContactComponent_touchstart_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          })("touchend", function ContactComponent_touchend_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          })("touchcancel", function ContactComponent_touchcancel_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          })("mousemove", function ContactComponent_mousemove_HostBindingHandler($event) {
            return ctx.onMove($event);
          })("touchmove", function ContactComponent_touchmove_HostBindingHandler($event) {
            return ctx.onMove($event);
          });
        }
      },
      decls: 164,
      vars: 0,
      consts: [["id", "ContactRoot"], [1, "ContactBackground"], [1, "ContactContent"], [1, "LeftContent"], [1, "ContactMeSection"], [1, "contactMe"], [1, "ContactMeText"], [1, "contacts"], [1, "phone"], [1, "mail"], [1, "socialMedia"], ["href", "#", 1, "btn"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-google"], [1, "fab", "fa-instagram"], [1, "OrSection"], [1, "PingMeSection"], [1, "pingMe"], [1, "pingMeText"], [1, "pingContent"], [1, "pingMessage"], ["type", "text", "id", "name", "placeholder", "your name,"], ["type", "text", "id", "email", "placeholder", "your e-mail id"], ["name", "name", "id", "discuss", "placeholder", "your content"], [1, "send"], [1, "sendButton"], [1, "RightContent"], [1, "OrEvenSection"], [1, "downloadTextContainer"], [1, "downloadText"], [1, "downloadSectionContainer"], [1, "downloadSection"], ["id", "downloadButton", "href", "", 1, "dl-button", 3, "click"], [1, "icon"], ["viewBox", "0 0 20 18", "fill", "currentColor", 1, "arrow"], ["points", "8 0 12 0 12 9 15 9 10 14 5 9 8 9"], ["viewBox", "0 0 20 18", "fill", "currentColor", 1, "shape"], ["d", "M4.82668561,0 L15.1733144,0 C16.0590479,0 16.8392841,0.582583769 17.0909106,1.43182334 L19.7391982,10.369794 C19.9108349,10.9490677 19.9490212,11.5596963 19.8508905,12.1558403 L19.1646343,16.3248465 C19.0055906,17.2910371 18.1703851,18 17.191192,18 L2.80880804,18 C1.82961488,18 0.994409401,17.2910371 0.835365676,16.3248465 L0.149109507,12.1558403 C0.0509788145,11.5596963 0.0891651114,10.9490677 0.260801785,10.369794 L2.90908938,1.43182334 C3.16071592,0.582583769 3.94095214,0 4.82668561,0 Z"], [1, "label"], [1, "show", "default"], [1, "state"], [1, "counter"], [1, "progress"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " CONTACT ME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+919840467098");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "arokleo@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " OR ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " PING ME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Hello,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "My name is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " and my e-mail address is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " and I would like to discuss about ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "textarea", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Send ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Or you can even ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Click here to download my resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_div_click_55_listener() {
            return ctx.DownloadResume();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "svg", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "polygon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "svg", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#ContactRoot, .ContactBackground {\r\n  width: 100%;\r\n  height: 100vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.ContactBackground {\r\n  background: rgba(154, 18, 179, 1);\r\n}\r\n\r\n#ContactRoot {\r\n  --cursorX: 50vw;\r\n  --cursorY: 50vh;\r\n  z-index: =-10;\r\n}\r\n\r\n#ContactRoot:before {\r\n  z-index: =-10;\r\n  content: '';\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  pointer-events: none;\r\n  background: radial-gradient(circle 10vmax at var(--cursorX) var(--cursorY),\r\n      rgba(250, 250, 250, 0) 0%,\r\n      rgba(250, 250, 250, .5) 60%,\r\n      rgba(250, 250, 250, 1) 100%)\r\n}\r\n\r\n#ContactRoot .ContactContent {\r\n  background-image: url('/Leo/assets/Home/Heaxagon.svg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n@-webkit-keyframes gradient {\r\n  0% {\r\n    background-position: 0% 50%;\r\n  }\r\n\r\n  50% {\r\n    background-position: 100% 50%;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0% 50%;\r\n  }\r\n}\r\n\r\n@keyframes gradient {\r\n  0% {\r\n    background-position: 0% 50%;\r\n  }\r\n\r\n  50% {\r\n    background-position: 100% 50%;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0% 50%;\r\n  }\r\n}\r\n\r\n#ContactRoot .LeftContent {\r\n  width: 50%;\r\n  height: 100%;\r\n  float: left;\r\n}\r\n\r\n#ContactRoot .RightContent {\r\n  width: 50%;\r\n  height: 100%;\r\n  float: right;\r\n}\r\n\r\n#ContactRoot .ContactMeSection {\r\n  height: 45%;\r\n  width: 100%;\r\n}\r\n\r\n#ContactRoot .OrSection {\r\n  font-family: KaushanScript;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 5vh;\r\n}\r\n\r\n#ContactRoot .OrEvenSection{\r\n  font-family: KaushanScript;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 5vh;\r\n  display: none;\r\n}\r\n\r\n#ContactRoot .PingMeSection {\r\n  height: 45%;\r\n  width: 100%;\r\n}\r\n\r\n#ContactRoot .contacts {\r\n  width: 100%;\r\n  height: 20%;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n#ContactRoot .contactMe {\r\n  width: 100%;\r\n  height: 40%;\r\n  text-align: center;\r\n}\r\n\r\n#ContactRoot .ContactMeText {\r\n  font-family: BungeeShade;\r\n  position: relative;\r\n  top: 20%;\r\n  font-size: 5vh;\r\n}\r\n\r\n#ContactRoot .phone, #ContactRoot .mail {\r\n  margin: 0 0% 3% 0%;\r\n}\r\n\r\n#ContactRoot .phone {\r\n  font-family: digital;\r\n  font-size: 4vh;\r\n  font-weight: bold;\r\n}\r\n\r\n#ContactRoot .mail {\r\n  font-family: MetalMania;\r\n  font-size: 4vh;\r\n}\r\n\r\n#ContactRoot .phone::before {\r\n  content: '';\r\n  background: url('/Leo/assets/Contact/contact_call.svg') no-repeat center;\r\n  background-size: contain;\r\n  padding: 20px;\r\n  margin-right: 10px;\r\n  width: 22px;\r\n  height: 22px;\r\n}\r\n\r\n#ContactRoot .mail::before {\r\n  content: '';\r\n  background: url('/Leo/assets/Contact/contact_mail.svg') no-repeat center;\r\n  background-size: contain;\r\n  padding: 20px;\r\n  margin-right: 10px;\r\n  width: 22px;\r\n  height: 22px;\r\n}\r\n\r\n#ContactRoot .socialMedia {\r\n  width: 100%;\r\n  text-align: center;\r\n  position: relative;\r\n  top: 9%;\r\n}\r\n\r\n#ContactRoot .btn {\r\n  display: inline-block;\r\n  width: 75px;\r\n  background: #f1f1f1;\r\n  margin: 10px;\r\n  border-radius: 30%;\r\n  box-shadow: 0 5px 15px -5px #00000070;\r\n  color: #3498db;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n#ContactRoot .btn i {\r\n  line-height: 80px;\r\n  font-size: 4vh;\r\n  transition: 0.2s linear;\r\n}\r\n\r\n#ContactRoot .btn:hover i {\r\n  transform: scale(1.3);\r\n  color: #f1f1f1;\r\n}\r\n\r\n#ContactRoot .btn::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 120%;\r\n  height: 120%;\r\n  background: #3498db;\r\n  transform: rotate(45deg);\r\n  left: -110%;\r\n  top: 90%;\r\n}\r\n\r\n#ContactRoot .btn:hover::before {\r\n  -webkit-animation: socialHoverAni 0.7s 1;\r\n          animation: socialHoverAni 0.7s 1;\r\n  top: -10%;\r\n  left: -10%;\r\n}\r\n\r\n@-webkit-keyframes socialHoverAni {\r\n  0% {\r\n    left: -110%;\r\n    top: 90%;\r\n  }\r\n\r\n  50% {\r\n    left: 10%;\r\n    top: -30%;\r\n  }\r\n\r\n  100% {\r\n    top: -10%;\r\n    left: -10%;\r\n  }\r\n}\r\n\r\n@keyframes socialHoverAni {\r\n  0% {\r\n    left: -110%;\r\n    top: 90%;\r\n  }\r\n\r\n  50% {\r\n    left: 10%;\r\n    top: -30%;\r\n  }\r\n\r\n  100% {\r\n    top: -10%;\r\n    left: -10%;\r\n  }\r\n}\r\n\r\n#ContactRoot .pingMe {\r\n  width: 100%;\r\n  height: 25%;\r\n  text-align: center;\r\n}\r\n\r\n#ContactRoot .pingMeText {\r\n  font-family: BungeeShade;\r\n  position: relative;\r\n  bottom: 20%;\r\n  font-size: 5vh;\r\n}\r\n\r\n#ContactRoot .pingContent {\r\n  font-family: Vibur;\r\n  font-size: 4vh;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n#ContactRoot .pingMessage {\r\n  line-height: 50px;\r\n}\r\n\r\n#ContactRoot .sendButton {\r\n  cursor: pointer;\r\n  outline: none;\r\n  display: block;\r\n  border-radius: 20px;\r\n  border: 0;\r\n  box-shadow: none;\r\n  width: 100px;\r\n  height: 35px;\r\n  font-size: 12px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  color: #fff;\r\n  background: linear-gradient(to right, #03cb91 0%, #00add8 100%);\r\n  margin: 0 auto;\r\n}\r\n\r\n#ContactRoot .downloadTextContainer {\r\n  width: 100%;\r\n  height: 50%;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n#ContactRoot .downloadText {\r\n  font-family: BungeeShade;\r\n  position: absolute;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  font-size: 5vh;\r\n  line-height: 6vh;\r\n}\r\n\r\n#ContactRoot .downloadSectionContainer {\r\n  width: 100%;\r\n  height: 50%;\r\n}\r\n\r\n#name, #email, #discuss {\r\n  border: none;\r\n  height: 47px;\r\n  font-family: dancing-font;\r\n  font-size: 4vh;\r\n  background: none;\r\n}\r\n\r\n#name {\r\n  width: 15vh;\r\n}\r\n\r\n#email {\r\n  width: 22vh;\r\n}\r\n\r\n#discuss {\r\n  width: 90%;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCOzs7O0FBSUY7O0FBRUE7RUFDRSxzREFBa0Q7RUFDbEQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFaQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0VBQW9FO0VBQ3BFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0VBQW9FO0VBQ3BFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsUUFBUTtBQUNWOztBQUVBO0VBQ0Usd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsUUFBUTtFQUNWOztFQUVBO0lBQ0UsU0FBUztJQUNULFNBQVM7RUFDWDs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7QUFDRjs7QUFmQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsV0FBVztFQUNYLCtEQUErRDtFQUMvRCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNDb250YWN0Um9vdCwgLkNvbnRhY3RCYWNrZ3JvdW5kIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLkNvbnRhY3RCYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE1NCwgMTgsIDE3OSwgMSk7XHJcbn1cclxuXHJcbiNDb250YWN0Um9vdCB7XHJcbiAgLS1jdXJzb3JYOiA1MHZ3O1xyXG4gIC0tY3Vyc29yWTogNTB2aDtcclxuICB6LWluZGV4OiA9LTEwO1xyXG59XHJcblxyXG4jQ29udGFjdFJvb3Q6YmVmb3JlIHtcclxuICB6LWluZGV4OiA9LTEwO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSAxMHZtYXggYXQgdmFyKC0tY3Vyc29yWCkgdmFyKC0tY3Vyc29yWSksXHJcbiAgICAgIHJnYmEoMjUwLCAyNTAsIDI1MCwgMCkgMCUsXHJcbiAgICAgIHJnYmEoMjUwLCAyNTAsIDI1MCwgLjUpIDYwJSxcclxuICAgICAgcmdiYSgyNTAsIDI1MCwgMjUwLCAxKSAxMDAlKVxyXG59XHJcblxyXG4jQ29udGFjdFJvb3QgLkNvbnRhY3RDb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL0hvbWUvSGVheGFnb24uc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBncmFkaWVudCB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG4jQ29udGFjdFJvb3QgLkxlZnRDb250ZW50IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI0NvbnRhY3RSb290IC5SaWdodENvbnRlbnQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI0NvbnRhY3RSb290IC5Db250YWN0TWVTZWN0aW9uIHtcclxuICBoZWlnaHQ6IDQ1JTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI0NvbnRhY3RSb290IC5PclNlY3Rpb24ge1xyXG4gIGZvbnQtZmFtaWx5OiBLYXVzaGFuU2NyaXB0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDV2aDtcclxufVxyXG5cclxuI0NvbnRhY3RSb290IC5PckV2ZW5TZWN0aW9ue1xyXG4gIGZvbnQtZmFtaWx5OiBLYXVzaGFuU2NyaXB0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDV2aDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jQ29udGFjdFJvb3QgLlBpbmdNZVNlY3Rpb24ge1xyXG4gIGhlaWdodDogNDUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jQ29udGFjdFJvb3QgLmNvbnRhY3RzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jQ29udGFjdFJvb3QgLmNvbnRhY3RNZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jQ29udGFjdFJvb3QgLkNvbnRhY3RNZVRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBCdW5nZWVTaGFkZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyMCU7XHJcbiAgZm9udC1zaXplOiA1dmg7XHJcbn1cclxuXHJcbiNDb250YWN0Um9vdCAucGhvbmUsICNDb250YWN0Um9vdCAubWFpbCB7XHJcbiAgbWFyZ2luOiAwIDAlIDMlIDAlO1xyXG59XHJcblxyXG4jQ29udGFjdFJvb3QgLnBob25lIHtcclxuICBmb250LWZhbWlseTogZGlnaXRhbDtcclxuICBmb250LXNpemU6IDR2aDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI0NvbnRhY3RSb290IC5tYWlsIHtcclxuICBmb250LWZhbWlseTogTWV0YWxNYW5pYTtcclxuICBmb250LXNpemU6IDR2aDtcclxufVxyXG5cclxuI0NvbnRhY3RSb290IC5waG9uZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvQ29udGFjdC9jb250YWN0X2NhbGwuc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4jQ29udGFjdFJvb3QgLm1haWw6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL0NvbnRhY3QvY29udGFjdF9tYWlsLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxufVxyXG5cclxuI0NvbnRhY3RSb290IC5zb2NpYWxNZWRpYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDklO1xyXG59XHJcblxyXG4jQ29udGFjdFJvb3QgLmJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IC01cHggIzAwMDAwMDcwO1xyXG4gIGNvbG9yOiAjMzQ5OGRiO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jQ29udGFjdFJvb3QgLmJ0biBpIHtcclxuICBsaW5lLWhlaWdodDogODBweDtcclxuICBmb250LXNpemU6IDR2aDtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcclxufVxyXG5cclxuI0NvbnRhY3RSb290IC5idG46aG92ZXIgaSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4jQ29udGFjdFJvb3QgLmJ0bjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTIwJTtcclxuICBoZWlnaHQ6IDEyMCU7XHJcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgbGVmdDogLTExMCU7XHJcbiAgdG9wOiA5MCU7XHJcbn1cclxuXHJcbiNDb250YWN0Um9vdCAuYnRuOmhvdmVyOjpiZWZvcmUge1xyXG4gIGFuaW1hdGlvbjogc29jaWFsSG92ZXJBbmkgMC43cyAxO1xyXG4gIHRvcDogLTEwJTtcclxuICBsZWZ0OiAtMTAlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNvY2lhbEhvdmVyQW5pIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAtMTEwJTtcclxuICAgIHRvcDogOTAlO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHRvcDogLTMwJTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdG9wOiAtMTAlO1xyXG4gICAgbGVmdDogLTEwJTtcclxuICB9XHJcbn1cclxuXHJcbiNDb250YWN0Um9vdCAucGluZ01lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNDb250YWN0Um9vdCAucGluZ01lVGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IEJ1bmdlZVNoYWRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDIwJTtcclxuICBmb250LXNpemU6IDV2aDtcclxufVxyXG5cclxuI0NvbnRhY3RSb290IC5waW5nQ29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IFZpYnVyO1xyXG4gIGZvbnQtc2l6ZTogNHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI0NvbnRhY3RSb290IC5waW5nTWVzc2FnZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcblxyXG4jQ29udGFjdFJvb3QgLnNlbmRCdXR0b24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwM2NiOTEgMCUsICMwMGFkZDggMTAwJSk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbiNDb250YWN0Um9vdCAuZG93bmxvYWRUZXh0Q29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jQ29udGFjdFJvb3QgLmRvd25sb2FkVGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IEJ1bmdlZVNoYWRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgZm9udC1zaXplOiA1dmg7XHJcbiAgbGluZS1oZWlnaHQ6IDZ2aDtcclxufVxyXG5cclxuI0NvbnRhY3RSb290IC5kb3dubG9hZFNlY3Rpb25Db250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4jbmFtZSwgI2VtYWlsLCAjZGlzY3VzcyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogNDdweDtcclxuICBmb250LWZhbWlseTogZGFuY2luZy1mb250O1xyXG4gIGZvbnQtc2l6ZTogNHZoO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbiNuYW1lIHtcclxuICB3aWR0aDogMTV2aDtcclxufVxyXG4jZW1haWwge1xyXG4gIHdpZHRoOiAyMnZoO1xyXG59XHJcbiNkaXNjdXNzIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */", ".dl-button {\r\n  --duration: 4000;\r\n  --success: #16BF78;\r\n  --grey-light: #99A3BA;\r\n  --grey: #6C7486;\r\n  --grey-dark: #3F4656;\r\n  --light: #CDD9ED;\r\n  --shadow: rgba(18, 22, 33, .6);\r\n  --shadow-dark: rgba(18, 22, 33, .85);\r\n  display: block;\r\n  text-decoration: none;\r\n  perspective: 500px;\r\n}\r\n.dl-button > div {\r\n  position: relative;\r\n  background: #fff;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  display: flex;\r\n  padding: 16px 24px;\r\n  box-shadow: 0 4px 12px var(--shadow);\r\n}\r\n.dl-button > div .icon {\r\n  --color: var(--grey);\r\n  margin-right: 20%;\r\n  position: relative;\r\n  transform: translateZ(8px);\r\n}\r\n.dl-button > div .icon div {\r\n  overflow: hidden;\r\n  position: relative;\r\n  width: 20px;\r\n  height: 22px;\r\n}\r\n.dl-button > div .icon div:before, .dl-button > div .icon div:after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 2px;\r\n  height: 2px;\r\n  top: 2px;\r\n  transition: opacity .3s ease;\r\n}\r\n.dl-button > div .icon div:before {\r\n  left: 6px;\r\n  background-image: radial-gradient(circle at 0 100%, var(--color) 2px, #fff 0px);\r\n}\r\n.dl-button > div .icon div:after {\r\n  right: 6px;\r\n  background-image: radial-gradient(circle at 100% 100%, var(--color) 2px, #fff 0px);\r\n}\r\n.dl-button > div .icon div svg {\r\n  width: 20px;\r\n  height: 18px;\r\n  display: block;\r\n  margin-top: 2px;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n.dl-button > div .icon div svg.arrow {\r\n  color: #fff;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 2;\r\n  transform: translateY(-1px);\r\n}\r\n.dl-button > div .icon div svg.shape {\r\n  color: var(--color);\r\n  transition: color .4s ease;\r\n}\r\n.dl-button > div .icon span {\r\n  --s: 1;\r\n  position: absolute;\r\n  left: 1px;\r\n  right: 1px;\r\n  bottom: 2px;\r\n  background: var(--color);\r\n  height: 6px;\r\n  border-radius: 50%;\r\n  display: block;\r\n  transform: translateY(0) scale(var(--s));\r\n}\r\n.dl-button > div .label {\r\n  --color: var(--grey-dark);\r\n  line-height: 22px;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  color: var(--color);\r\n  position: relative;\r\n  transition: color .4s ease;\r\n  transform: translateZ(8px);\r\n}\r\n.dl-button > div .label > div {\r\n  display: flex;\r\n  transition: opacity .25s ease;\r\n}\r\n.dl-button > div .label > div:not(.show) {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  opacity: 0;\r\n}\r\n.dl-button > div .label > div.hide {\r\n  opacity: 0;\r\n}\r\n.dl-button > div .label > div .counter {\r\n  overflow: hidden;\r\n  display: flex;\r\n  height: 18px;\r\n  line-height: 18px;\r\n  margin: 2px 0;\r\n  position: relative;\r\n  transition: opacity .3s ease;\r\n}\r\n.dl-button > div .label > div .counter:before, .dl-button > div .label > div .counter:after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  height: 3px;\r\n  z-index: 1;\r\n}\r\n.dl-button > div .label > div .counter:before {\r\n  top: 0;\r\n  background: linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0) 100%);\r\n}\r\n.dl-button > div .label > div .counter:after {\r\n  bottom: 0;\r\n  background: linear-gradient(to top, white 0%, rgba(255, 255, 255, 0) 100%);\r\n}\r\n.dl-button > div .label > div .counter span {\r\n  display: inline-block;\r\n  margin: 0 4px 0 2px;\r\n}\r\n.dl-button > div .label > div .counter ul {\r\n  --y: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  width: 10px;\r\n  height: 18px;\r\n  -webkit-backface-visibility: hidden;\r\n  transform: translateY(var(--y)) translateZ(0);\r\n}\r\n.dl-button > div .label > div .counter ul:nth-child(1) {\r\n  transition: transform calc(var(--duration) * .2ms) ease-in-out;\r\n}\r\n.dl-button > div .label > div .counter ul:nth-child(2) {\r\n  transition: transform calc(var(--duration) * .8ms) ease-in-out;\r\n}\r\n.dl-button > div .label > div .counter ul:nth-child(3) {\r\n  transition: transform calc(var(--duration) * .8ms) ease-in-out;\r\n}\r\n.dl-button > div .label > div .counter ul li {\r\n  width: 10px;\r\n  height: 18px;\r\n}\r\n.dl-button > div .label > div .counter.hide {\r\n  opacity: 0;\r\n}\r\n.dl-button > div .progress {\r\n  --s: 0;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  height: 3px;\r\n  transform-origin: 50% 100%;\r\n  transform: scaleY(var(--s));\r\n  transition: transform .4s ease;\r\n}\r\n.dl-button > div .progress:before, .dl-button > div .progress:after {\r\n  --s: 1;\r\n  content: '';\r\n  background: var(--success);\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  transform-origin: 0 50%;\r\n  transform: scaleX(var(--s));\r\n}\r\n.dl-button > div .progress:before {\r\n  opacity: .35;\r\n}\r\n.dl-button > div .progress:after {\r\n  --s: 0;\r\n  transition: transform calc(var(--duration) * .9ms) ease-in-out;\r\n}\r\n.dl-button.active > div {\r\n  -webkit-animation: button calc(var(--duration) * 1ms) linear forwards;\r\n          animation: button calc(var(--duration) * 1ms) linear forwards;\r\n}\r\n.dl-button.active > div .icon div:before, .dl-button.active > div .icon div:after {\r\n  opacity: 0;\r\n  transition-delay: .4s;\r\n}\r\n.dl-button.active > div .icon svg.arrow {\r\n  -webkit-animation: arrow calc(var(--duration) * .18ms) linear 4 calc(var(--duration) * .2ms);\r\n          animation: arrow calc(var(--duration) * .18ms) linear 4 calc(var(--duration) * .2ms);\r\n}\r\n.dl-button.active > div .icon span {\r\n  -webkit-animation: span calc(var(--duration) * .18ms) linear 4 calc(var(--duration) * .2ms);\r\n          animation: span calc(var(--duration) * .18ms) linear 4 calc(var(--duration) * .2ms);\r\n}\r\n.dl-button.active > div .label > div .counter ul:nth-child(1) {\r\n  --y: -18px;\r\n  transition-delay: calc(var(--duration) * .72ms);\r\n}\r\n.dl-button.active > div .label > div .counter ul:nth-child(2) {\r\n  --y: -180px;\r\n  transition-delay: calc(var(--duration) * .09ms);\r\n  -webkit-animation: motion calc(var(--duration) * .5ms) linear forwards calc(var(--duration) * .19ms);\r\n          animation: motion calc(var(--duration) * .5ms) linear forwards calc(var(--duration) * .19ms);\r\n}\r\n.dl-button.active > div .label > div .counter ul:nth-child(3) {\r\n  --y: -540px;\r\n  transition-delay: calc(var(--duration) * .075ms);\r\n  -webkit-animation: motion calc(var(--duration) * .8ms) linear forwards calc(var(--duration) * .075ms);\r\n          animation: motion calc(var(--duration) * .8ms) linear forwards calc(var(--duration) * .075ms);\r\n}\r\n.dl-button.active > div .progress {\r\n  --s: 1;\r\n  transition-delay: .4s;\r\n}\r\n.dl-button.active > div .progress:after {\r\n  --s: 1;\r\n  transition-delay: .4s;\r\n}\r\n.dl-button.done > div .icon {\r\n  --color: var(--success);\r\n}\r\n.dl-button.done .label {\r\n  --color: var(--success);\r\n}\r\n.dl-button.done .label .counter {\r\n  width: 0;\r\n}\r\n@-webkit-keyframes arrow {\r\n  38% {\r\n    transform: translateY(100%);\r\n    opacity: 1;\r\n  }\r\n  39% {\r\n    transform: translateY(100%);\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    transform: translateY(-100%);\r\n    opacity: 0;\r\n  }\r\n  41% {\r\n    transform: translateY(-100%);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateY(-1px);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes arrow {\r\n  38% {\r\n    transform: translateY(100%);\r\n    opacity: 1;\r\n  }\r\n  39% {\r\n    transform: translateY(100%);\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    transform: translateY(-100%);\r\n    opacity: 0;\r\n  }\r\n  41% {\r\n    transform: translateY(-100%);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateY(-1px);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes span {\r\n  25% {\r\n    transform: translateY(2px) scale(var(--s));\r\n  }\r\n  55% {\r\n    transform: translateY(2px) scale(var(--s));\r\n  }\r\n  80%,\r\n    100% {\r\n    transform: translateY(0) scale(var(--s));\r\n  }\r\n}\r\n@keyframes span {\r\n  25% {\r\n    transform: translateY(2px) scale(var(--s));\r\n  }\r\n  55% {\r\n    transform: translateY(2px) scale(var(--s));\r\n  }\r\n  80%,\r\n    100% {\r\n    transform: translateY(0) scale(var(--s));\r\n  }\r\n}\r\n@-webkit-keyframes motion {\r\n  20%,\r\n    70% {\r\n    -webkit-filter: blur(0.4px);\r\n            filter: blur(0.4px);\r\n  }\r\n}\r\n@keyframes motion {\r\n  20%,\r\n    70% {\r\n    -webkit-filter: blur(0.4px);\r\n            filter: blur(0.4px);\r\n  }\r\n}\r\n@-webkit-keyframes button {\r\n  0% {\r\n    transform: translateX(0) translateZ(0) scale(1) rotateY(0deg);\r\n  }\r\n  10% {\r\n    transform: translateX(0) translateZ(0) scale(0.96) rotateY(0deg);\r\n    box-shadow: 0 4px 8px var(--shadow-dark);\r\n  }\r\n  20% {\r\n    transform: translateX(-16px) translateZ(32px) scale(1) rotateY(-16deg);\r\n    box-shadow: 4px 12px 20px var(--shadow-dark);\r\n  }\r\n  85% {\r\n    transform: translateX(16px) translateZ(32px) scale(1) rotateY(16deg);\r\n    box-shadow: -4px 12px 20px var(--shadow-dark);\r\n  }\r\n  95% {\r\n    transform: translateX(0) translateZ(0) scale(1.12) rotateY(0deg);\r\n    box-shadow: 0 8px 24px var(--shadow-dark);\r\n  }\r\n  100% {\r\n    transform: translateX(0) translateZ(0) scale(1) rotateY(0deg);\r\n  }\r\n}\r\n@keyframes button {\r\n  0% {\r\n    transform: translateX(0) translateZ(0) scale(1) rotateY(0deg);\r\n  }\r\n  10% {\r\n    transform: translateX(0) translateZ(0) scale(0.96) rotateY(0deg);\r\n    box-shadow: 0 4px 8px var(--shadow-dark);\r\n  }\r\n  20% {\r\n    transform: translateX(-16px) translateZ(32px) scale(1) rotateY(-16deg);\r\n    box-shadow: 4px 12px 20px var(--shadow-dark);\r\n  }\r\n  85% {\r\n    transform: translateX(16px) translateZ(32px) scale(1) rotateY(16deg);\r\n    box-shadow: -4px 12px 20px var(--shadow-dark);\r\n  }\r\n  95% {\r\n    transform: translateX(0) translateZ(0) scale(1.12) rotateY(0deg);\r\n    box-shadow: 0 8px 24px var(--shadow-dark);\r\n  }\r\n  100% {\r\n    transform: translateX(0) translateZ(0) scale(1) rotateY(0deg);\r\n  }\r\n}\r\n.downloadSection {\r\n      font-family: Roboto, Arial;\r\n      justify-content: center;\r\n      align-items: center;\r\n      padding: 20px;\r\n      width: 40%;\r\n      position: relative;\r\n      margin: 0 auto;\r\n}\r\n.downloadSection .dribbble {\r\n  position: fixed;\r\n  display: block;\r\n  right: 20px;\r\n  bottom: 20px;\r\n}\r\n.downloadSection .dribbble img {\r\n  display: block;\r\n  height: 28px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0X2Rvd25sb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxxQkFBcUI7RUFFYixrQkFBa0I7QUFDNUI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUVoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFViwwQkFBMEI7QUFDcEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFFBQVE7RUFFUiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFNBQVM7RUFDVCwrRUFBK0U7QUFDakY7QUFDQTtFQUNFLFVBQVU7RUFDVixrRkFBa0Y7QUFDcEY7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sVUFBVTtFQUVGLDJCQUEyQjtBQUNyQztBQUNBO0VBQ0UsbUJBQW1CO0VBRW5CLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsTUFBTTtFQUNOLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBRU4sd0NBQXdD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QztFQUNwRDtFQUNBO0lBRVUsMENBQTBDO0VBQ3BEO0VBQ0E7O0lBR1Usd0NBQXdDO0VBQ2xEO0FBQ0Y7QUFDQTtFQUNFO0lBRVUsMENBQTBDO0VBQ3BEO0VBQ0E7SUFFVSwwQ0FBMEM7RUFDcEQ7RUFDQTs7SUFHVSx3Q0FBd0M7RUFDbEQ7QUFDRjtBQUNBO0VBQ0U7O0lBRUUsMkJBQTJCO1lBQ25CLG1CQUFtQjtFQUM3QjtBQUNGO0FBQ0E7RUFDRTs7SUFFRSwyQkFBMkI7WUFDbkIsbUJBQW1CO0VBQzdCO0FBQ0Y7QUFDQTtFQUNFO0lBRVUsNkRBQTZEO0VBQ3ZFO0VBQ0E7SUFFVSxnRUFBZ0U7SUFDeEUsd0NBQXdDO0VBQzFDO0VBQ0E7SUFFVSxzRUFBc0U7SUFDOUUsNENBQTRDO0VBQzlDO0VBQ0E7SUFFVSxvRUFBb0U7SUFDNUUsNkNBQTZDO0VBQy9DO0VBQ0E7SUFFVSxnRUFBZ0U7SUFDeEUseUNBQXlDO0VBQzNDO0VBQ0E7SUFFVSw2REFBNkQ7RUFDdkU7QUFDRjtBQUNBO0VBQ0U7SUFFVSw2REFBNkQ7RUFDdkU7RUFDQTtJQUVVLGdFQUFnRTtJQUN4RSx3Q0FBd0M7RUFDMUM7RUFDQTtJQUVVLHNFQUFzRTtJQUM5RSw0Q0FBNEM7RUFDOUM7RUFDQTtJQUVVLG9FQUFvRTtJQUM1RSw2Q0FBNkM7RUFDL0M7RUFDQTtJQUVVLGdFQUFnRTtJQUN4RSx5Q0FBeUM7RUFDM0M7RUFDQTtJQUVVLDZEQUE2RDtFQUN2RTtBQUNGO0FBS0E7TUFDTSwwQkFBMEI7TUFFMUIsdUJBQXVCO01BRXZCLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixjQUFjO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3RfZG93bmxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kbC1idXR0b24ge1xyXG4gIC0tZHVyYXRpb246IDQwMDA7XHJcbiAgLS1zdWNjZXNzOiAjMTZCRjc4O1xyXG4gIC0tZ3JleS1saWdodDogIzk5QTNCQTtcclxuICAtLWdyZXk6ICM2Qzc0ODY7XHJcbiAgLS1ncmV5LWRhcms6ICMzRjQ2NTY7XHJcbiAgLS1saWdodDogI0NERDlFRDtcclxuICAtLXNoYWRvdzogcmdiYSgxOCwgMjIsIDMzLCAuNik7XHJcbiAgLS1zaGFkb3ctZGFyazogcmdiYSgxOCwgMjIsIDMzLCAuODUpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiA1MDBweDtcclxuICAgICAgICAgIHBlcnNwZWN0aXZlOiA1MDBweDtcclxufVxyXG4uZGwtYnV0dG9uID4gZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHZhcigtLXNoYWRvdyk7XHJcbn1cclxuLmRsLWJ1dHRvbiA+IGRpdiAuaWNvbiB7XHJcbiAgLS1jb2xvcjogdmFyKC0tZ3JleSk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDhweCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooOHB4KTtcclxufVxyXG4uZGwtYnV0dG9uID4gZGl2IC5pY29uIGRpdiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG59XHJcbi5kbC1idXR0b24gPiBkaXYgLmljb24gZGl2OmJlZm9yZSwgLmRsLWJ1dHRvbiA+IGRpdiAuaWNvbiBkaXY6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMnB4O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHRvcDogMnB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xyXG59XHJcbi5kbC1idXR0b24gPiBkaXYgLmljb24gZGl2OmJlZm9yZSB7XHJcbiAgbGVmdDogNnB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMCAxMDAlLCB2YXIoLS1jb2xvcikgMnB4LCAjZmZmIDBweCk7XHJcbn1cclxuLmRsLWJ1dHRvbiA+IGRpdiAuaWNvbiBkaXY6YWZ0ZXIge1xyXG4gIHJpZ2h0OiA2cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMDAlIDEwMCUsIHZhcigtLWNvbG9yKSAycHgsICNmZmYgMHB4KTtcclxufVxyXG4uZGwtYnV0dG9uID4gZGl2IC5pY29uIGRpdiBzdmcge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmRsLWJ1dHRvbiA+IGRpdiAuaWNvbiBkaXYgc3ZnLmFycm93IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG4uZGwtYnV0dG9uID4gZGl2IC5pY29uIGRpdiBzdmcuc2hhcGUge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAuNHMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAuNHMgZWFzZTtcclxufVxyXG4uZGwtYnV0dG9uID4gZGl2IC5pY29uIHNwYW4ge1xyXG4gIC0tczogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMXB4O1xyXG4gIHJpZ2h0OiAxcHg7XHJcbiAgYm90dG9tOiAycHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IpO1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSh2YXIoLS1zKSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUodmFyKC0tcykpO1xyXG59XHJcbi5kbC1idXR0b24gPiBkaXYgLmxhYmVsIHtcclxuICAtLWNvbG9yOiB2YXIoLS1ncmV5LWRhcmspO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjRzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgLjRzIGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooOHB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig4cHgpO1xyXG59XHJcbi5kbC1idXR0b24gPiBkaXYgLmxhYmVsID4gZGl2IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzIGVhc2U7XHJcbn1cclxuLmRsLWJ1dHRvbiA+IGRpdiAubGFiZWwgPiBkaXY6bm90KC5zaG93KSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLmRsLWJ1dHRvbiA+IGRpdiAubGFiZWwgPiBkaXYuaGlkZSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uZGwtYnV0dG9uID4gZGl2IC5sYWJlbCA+IGRpdiAuY291bnRlciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBtYXJnaW46IDJweCAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcclxufVxyXG4uZGwtYnV0dG9uID4gZGl2IC5sYWJlbCA+IGRpdiAuY291bnRlcjpiZWZvcmUsIC5kbC1idXR0b24gPiBkaXYgLmxhYmVsID4gZGl2IC5jb3VudGVyOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBoZWlnaHQ6IDNweDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5kbC1idXR0b24gPiBkaXYgLmxhYmVsID4gZGl2IC5jb3VudGVyOmJlZm9yZSB7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20od2hpdGUpLCB0byhyZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XHJcbn1cclxuLmRsLWJ1dHRvbiA+IGRpdiAubGFiZWwgPiBkaXYgLmNvdW50ZXI6YWZ0ZXIge1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBmcm9tKHdoaXRlKSwgdG8ocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSkpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHdoaXRlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xyXG59XHJcbi5kbC1idXR0b24gPiBkaXYgLmxhYmVsID4gZGl2IC5jb3VudGVyIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDAgNHB4IDAgMnB4O1xyXG59XHJcbi5kbC1idXR0b24gPiBkaXYgLmxhYmVsID4gZGl2IC5jb3VudGVyIHVsIHtcclxuICAtLXk6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0teSkpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0teSkpIHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuLmRsLWJ1dHRvbiA+IGRpdiAubGFiZWwgPiBkaXYgLmNvdW50ZXIgdWw6bnRoLWNoaWxkKDEpIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIGNhbGModmFyKC0tZHVyYXRpb24pICogLjJtcykgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuMm1zKSBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuMm1zKSBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuMm1zKSBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuMm1zKSBlYXNlLWluLW91dDtcclxufVxyXG4uZGwtYnV0dG9uID4gZGl2IC5sYWJlbCA+IGRpdiAuY291bnRlciB1bDpudGgtY2hpbGQoMikge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuOG1zKSBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC44bXMpIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC44bXMpIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC44bXMpIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC44bXMpIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5kbC1idXR0b24gPiBkaXYgLmxhYmVsID4gZGl2IC5jb3VudGVyIHVsOm50aC1jaGlsZCgzKSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC44bXMpIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIGNhbGModmFyKC0tZHVyYXRpb24pICogLjhtcykgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGNhbGModmFyKC0tZHVyYXRpb24pICogLjhtcykgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGNhbGModmFyKC0tZHVyYXRpb24pICogLjhtcykgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIGNhbGModmFyKC0tZHVyYXRpb24pICogLjhtcykgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmRsLWJ1dHRvbiA+IGRpdiAubGFiZWwgPiBkaXYgLmNvdW50ZXIgdWwgbGkge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMThweDtcclxufVxyXG4uZGwtYnV0dG9uID4gZGl2IC5sYWJlbCA+IGRpdiAuY291bnRlci5oaWRlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5kbC1idXR0b24gPiBkaXYgLnByb2dyZXNzIHtcclxuICAtLXM6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKHZhcigtLXMpKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKHZhcigtLXMpKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC40cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC40cyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjRzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC40cyBlYXNlO1xyXG59XHJcbi5kbC1idXR0b24gPiBkaXYgLnByb2dyZXNzOmJlZm9yZSwgLmRsLWJ1dHRvbiA+IGRpdiAucHJvZ3Jlc3M6YWZ0ZXIge1xyXG4gIC0tczogMTtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKHZhcigtLXMpKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKHZhcigtLXMpKTtcclxufVxyXG4uZGwtYnV0dG9uID4gZGl2IC5wcm9ncmVzczpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IC4zNTtcclxufVxyXG4uZGwtYnV0dG9uID4gZGl2IC5wcm9ncmVzczphZnRlciB7XHJcbiAgLS1zOiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuOW1zKSBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC45bXMpIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC45bXMpIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC45bXMpIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC45bXMpIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5kbC1idXR0b24uYWN0aXZlID4gZGl2IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYnV0dG9uIGNhbGModmFyKC0tZHVyYXRpb24pICogMW1zKSBsaW5lYXIgZm9yd2FyZHM7XHJcbiAgICAgICAgICBhbmltYXRpb246IGJ1dHRvbiBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIDFtcykgbGluZWFyIGZvcndhcmRzO1xyXG59XHJcbi5kbC1idXR0b24uYWN0aXZlID4gZGl2IC5pY29uIGRpdjpiZWZvcmUsIC5kbC1idXR0b24uYWN0aXZlID4gZGl2IC5pY29uIGRpdjphZnRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC40cztcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC40cztcclxufVxyXG4uZGwtYnV0dG9uLmFjdGl2ZSA+IGRpdiAuaWNvbiBzdmcuYXJyb3cge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhcnJvdyBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC4xOG1zKSBsaW5lYXIgNCBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC4ybXMpO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBhcnJvdyBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC4xOG1zKSBsaW5lYXIgNCBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC4ybXMpO1xyXG59XHJcbi5kbC1idXR0b24uYWN0aXZlID4gZGl2IC5pY29uIHNwYW4ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGFuIGNhbGModmFyKC0tZHVyYXRpb24pICogLjE4bXMpIGxpbmVhciA0IGNhbGModmFyKC0tZHVyYXRpb24pICogLjJtcyk7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNwYW4gY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuMThtcykgbGluZWFyIDQgY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuMm1zKTtcclxufVxyXG4uZGwtYnV0dG9uLmFjdGl2ZSA+IGRpdiAubGFiZWwgPiBkaXYgLmNvdW50ZXIgdWw6bnRoLWNoaWxkKDEpIHtcclxuICAtLXk6IC0xOHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuNzJtcyk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC43Mm1zKTtcclxufVxyXG4uZGwtYnV0dG9uLmFjdGl2ZSA+IGRpdiAubGFiZWwgPiBkaXYgLmNvdW50ZXIgdWw6bnRoLWNoaWxkKDIpIHtcclxuICAtLXk6IC0xODBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IGNhbGModmFyKC0tZHVyYXRpb24pICogLjA5bXMpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuMDltcyk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdGlvbiBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC41bXMpIGxpbmVhciBmb3J3YXJkcyBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIC4xOW1zKTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbW90aW9uIGNhbGModmFyKC0tZHVyYXRpb24pICogLjVtcykgbGluZWFyIGZvcndhcmRzIGNhbGModmFyKC0tZHVyYXRpb24pICogLjE5bXMpO1xyXG59XHJcbi5kbC1idXR0b24uYWN0aXZlID4gZGl2IC5sYWJlbCA+IGRpdiAuY291bnRlciB1bDpudGgtY2hpbGQoMykge1xyXG4gIC0teTogLTU0MHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuMDc1bXMpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuMDc1bXMpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3Rpb24gY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuOG1zKSBsaW5lYXIgZm9yd2FyZHMgY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuMDc1bXMpO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBtb3Rpb24gY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuOG1zKSBsaW5lYXIgZm9yd2FyZHMgY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAuMDc1bXMpO1xyXG59XHJcbi5kbC1idXR0b24uYWN0aXZlID4gZGl2IC5wcm9ncmVzcyB7XHJcbiAgLS1zOiAxO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogLjRzO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjRzO1xyXG59XHJcbi5kbC1idXR0b24uYWN0aXZlID4gZGl2IC5wcm9ncmVzczphZnRlciB7XHJcbiAgLS1zOiAxO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogLjRzO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjRzO1xyXG59XHJcbi5kbC1idXR0b24uZG9uZSA+IGRpdiAuaWNvbiB7XHJcbiAgLS1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XHJcbn1cclxuLmRsLWJ1dHRvbi5kb25lIC5sYWJlbCB7XHJcbiAgLS1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XHJcbn1cclxuLmRsLWJ1dHRvbi5kb25lIC5sYWJlbCAuY291bnRlciB7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhcnJvdyB7XHJcbiAgMzglIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAzOSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA0MSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYXJyb3cge1xyXG4gIDM4JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMzklIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgNDElIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGFuIHtcclxuICAyNSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KSBzY2FsZSh2YXIoLS1zKSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpIHNjYWxlKHZhcigtLXMpKTtcclxuICB9XHJcbiAgNTUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCkgc2NhbGUodmFyKC0tcykpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KSBzY2FsZSh2YXIoLS1zKSk7XHJcbiAgfVxyXG4gIDgwJSxcclxuICAgIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUodmFyKC0tcykpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUodmFyKC0tcykpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNwYW4ge1xyXG4gIDI1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpIHNjYWxlKHZhcigtLXMpKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCkgc2NhbGUodmFyKC0tcykpO1xyXG4gIH1cclxuICA1NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KSBzY2FsZSh2YXIoLS1zKSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpIHNjYWxlKHZhcigtLXMpKTtcclxuICB9XHJcbiAgODAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSh2YXIoLS1zKSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSh2YXIoLS1zKSk7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBtb3Rpb24ge1xyXG4gIDIwJSxcclxuICAgIDcwJSB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwLjRweCk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigwLjRweCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbW90aW9uIHtcclxuICAyMCUsXHJcbiAgICA3MCUge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMC40cHgpO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMC40cHgpO1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYnV0dG9uIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVaKDApIHNjYWxlKDEpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVaKDApIHNjYWxlKDEpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgfVxyXG4gIDEwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVaKDApIHNjYWxlKDAuOTYpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVaKDApIHNjYWxlKDAuOTYpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggdmFyKC0tc2hhZG93LWRhcmspO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE2cHgpIHRyYW5zbGF0ZVooMzJweCkgc2NhbGUoMSkgcm90YXRlWSgtMTZkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE2cHgpIHRyYW5zbGF0ZVooMzJweCkgc2NhbGUoMSkgcm90YXRlWSgtMTZkZWcpO1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDEycHggMjBweCB2YXIoLS1zaGFkb3ctZGFyayk7XHJcbiAgfVxyXG4gIDg1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KSB0cmFuc2xhdGVaKDMycHgpIHNjYWxlKDEpIHJvdGF0ZVkoMTZkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTZweCkgdHJhbnNsYXRlWigzMnB4KSBzY2FsZSgxKSByb3RhdGVZKDE2ZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IC00cHggMTJweCAyMHB4IHZhcigtLXNoYWRvdy1kYXJrKTtcclxuICB9XHJcbiAgOTUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVooMCkgc2NhbGUoMS4xMikgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVooMCkgc2NhbGUoMS4xMikgcm90YXRlWSgwZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggdmFyKC0tc2hhZG93LWRhcmspO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVooMCkgc2NhbGUoMSkgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVooMCkgc2NhbGUoMSkgcm90YXRlWSgwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBidXR0b24ge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVooMCkgc2NhbGUoMSkgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVooMCkgc2NhbGUoMSkgcm90YXRlWSgwZGVnKTtcclxuICB9XHJcbiAgMTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVooMCkgc2NhbGUoMC45Nikgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVooMCkgc2NhbGUoMC45Nikgcm90YXRlWSgwZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCB2YXIoLS1zaGFkb3ctZGFyayk7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTZweCkgdHJhbnNsYXRlWigzMnB4KSBzY2FsZSgxKSByb3RhdGVZKC0xNmRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTZweCkgdHJhbnNsYXRlWigzMnB4KSBzY2FsZSgxKSByb3RhdGVZKC0xNmRlZyk7XHJcbiAgICBib3gtc2hhZG93OiA0cHggMTJweCAyMHB4IHZhcigtLXNoYWRvdy1kYXJrKTtcclxuICB9XHJcbiAgODUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpIHRyYW5zbGF0ZVooMzJweCkgc2NhbGUoMSkgcm90YXRlWSgxNmRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KSB0cmFuc2xhdGVaKDMycHgpIHNjYWxlKDEpIHJvdGF0ZVkoMTZkZWcpO1xyXG4gICAgYm94LXNoYWRvdzogLTRweCAxMnB4IDIwcHggdmFyKC0tc2hhZG93LWRhcmspO1xyXG4gIH1cclxuICA5NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWigwKSBzY2FsZSgxLjEyKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWigwKSBzY2FsZSgxLjEyKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjRweCB2YXIoLS1zaGFkb3ctZGFyayk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWigwKSBzY2FsZSgxKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWigwKSBzY2FsZSgxKSByb3RhdGVZKDBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLmRvd25sb2FkU2VjdGlvbiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsO1xyXG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5kb3dubG9hZFNlY3Rpb24gLmRyaWJiYmxlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG59XHJcbi5kb3dubG9hZFNlY3Rpb24gLmRyaWJiYmxlIGltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG59XHJcbiJdfQ== */", "/*\r\n  ##Device = Desktops\r\n  ##Screen = 1281px to higher resolution desktops\r\n*/\r\n@media (min-width: 1281px) {}\r\n/*\r\n  ##Device = Laptops, Desktops\r\n  ##Screen = B/w 1025px to 1280px\r\n*/\r\n@media (min-width: 1025px) and (max-width: 1280px) {}\r\n/*\r\n  ##Device = Tablets, Ipads (portrait)\r\n  ##Screen = B/w 768px to 1024px\r\n*/\r\n@media (max-width: 1024px) {}\r\n/*\r\n  ##Device = Tablets, Ipads (landscape)\r\n  ##Screen = B/w 768px to 1024px\r\n*/\r\n@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {}\r\n@media (min-width: 320px) and (max-width: 768px) {\r\n  .ContactBackground {\r\n    background: none;\r\n  }\r\n}\r\n/*\r\n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\r\n  ##Screen = B/w 481px to 767px\r\n*/\r\n@media (min-width: 426px) and (max-width: 768px) {\r\n  #ContactRoot .LeftContent {\r\n    width: 100%;\r\n    height: 100%;\r\n    float: none;\r\n  }\r\n\r\n  #ContactRoot .RightContent {\r\n    width: 100%;\r\n    height: 100%;\r\n    float: none;\r\n  }\r\n\r\n  #ContactRoot .downloadText {\r\n    position: relative;\r\n  }\r\n\r\n  #ContactRoot .downloadTextContainer, #ContactRoot .downloadSectionContainerm, #ContactRoot .RightContent, #ContactRoot .LeftContent {\r\n    margin-top: 3%;\r\n    height: auto;\r\n  }\r\n\r\n  #ContactRoot .OrEvenSection {\r\n    display: block;\r\n  }\r\n}\r\n/*\r\n  ##Device = Most of the Smartphones Mobiles (Portrait)\r\n  ##Screen = B/w 320px to 479px\r\n*/\r\n@media (min-width: 320px) and (max-width: 767px) {\r\n  #ContactRoot .LeftContent {\r\n    width: 100%;\r\n    height: 100%;\r\n    float: none;\r\n  }\r\n\r\n  #ContactRoot .RightContent {\r\n    width: 100%;\r\n    height: 100%;\r\n    float: none;\r\n  }\r\n\r\n  #ContactRoot .downloadText {\r\n    position: relative;\r\n  }\r\n\r\n  #ContactRoot .downloadTextContainer, #ContactRoot .downloadSectionContainerm, #ContactRoot .RightContent, #ContactRoot .LeftContent {\r\n    margin-top: 3%;\r\n    height: auto;\r\n  }\r\n\r\n  #ContactRoot .OrEvenSection {\r\n    display: block;\r\n  }\r\n\r\n  #ContactRoot .socialMedia {\r\n    width: 55%;\r\n    text-align: center;\r\n    position: relative;\r\n    top: 9%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  #ContactRoot .downloadText, #name, #email, #discuss, #ContactRoot .ContactMeText,\r\n  #ContactRoot .pingMeText {\r\n    font-size: 4vh;\r\n  }\r\n\r\n  #ContactRoot .pingContent, #ContactRoot .OrSection, #ContactRoot .OrEvenSection {\r\n    font-size: 3vh;\r\n  }\r\n\r\n  #ContactRoot .downloadSection {\r\n    width: 60%;\r\n  }\r\n\r\n  #ContactRoot .btn {\r\n    width: 65px;\r\n  }\r\n\r\n  #ContactRoot .btn i {\r\n    line-height: 65px;\r\n  }\r\n}\r\n/* Smartphones (landscape) ----------- */\r\n@media only screen and (max-height : 500px) {\r\n  #ContactRoot .downloadText, #name, #email, #discuss, #ContactRoot .ContactMeText, #ContactRoot .pingMeText {\r\n    font-size: 6vh;\r\n}\r\n\r\n#ContactRoot .mail, #ContactRoot .phone{\r\n  font-size: 5vh;\r\n}\r\n#ContactRoot .pingContent, #ContactRoot .OrSection, #ContactRoot .OrEvenSection {\r\n    font-size: 5vh;\r\n}\r\n#ContactRoot .socialMedia{\r\n  width: 70%;\r\n}\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5yZXNwb25zaXZlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0NBR0M7QUFDRCw0QkFBNEI7QUFFNUI7OztDQUdDO0FBQ0Qsb0RBQW9EO0FBRXBEOzs7Q0FHQztBQUNELDRCQUE0QjtBQUU1Qjs7O0NBR0M7QUFDRCxnRkFBZ0Y7QUFFaEY7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUE7OztDQUdDO0FBQ0Q7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGO0FBRUE7OztDQUdDO0FBQ0Q7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxjQUFjO0VBQ2hCOztFQUVBOztJQUVFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRTtJQUNFLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnJlc3BvbnNpdmUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAjI0RldmljZSA9IERlc2t0b3BzXHJcbiAgIyNTY3JlZW4gPSAxMjgxcHggdG8gaGlnaGVyIHJlc29sdXRpb24gZGVza3RvcHNcclxuKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyODFweCkge31cclxuXHJcbi8qXHJcbiAgIyNEZXZpY2UgPSBMYXB0b3BzLCBEZXNrdG9wc1xyXG4gICMjU2NyZWVuID0gQi93IDEwMjVweCB0byAxMjgwcHhcclxuKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge31cclxuXHJcbi8qXHJcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpXHJcbiAgIyNTY3JlZW4gPSBCL3cgNzY4cHggdG8gMTAyNHB4XHJcbiovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHt9XHJcblxyXG4vKlxyXG4gICMjRGV2aWNlID0gVGFibGV0cywgSXBhZHMgKGxhbmRzY2FwZSlcclxuICAjI1NjcmVlbiA9IEIvdyA3NjhweCB0byAxMDI0cHhcclxuKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHt9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5Db250YWN0QmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuICAjI0RldmljZSA9IExvdyBSZXNvbHV0aW9uIFRhYmxldHMsIE1vYmlsZXMgKExhbmRzY2FwZSlcclxuICAjI1NjcmVlbiA9IEIvdyA0ODFweCB0byA3NjdweFxyXG4qL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNDI2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICNDb250YWN0Um9vdCAuTGVmdENvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcblxyXG4gICNDb250YWN0Um9vdCAuUmlnaHRDb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAjQ29udGFjdFJvb3QgLmRvd25sb2FkVGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAjQ29udGFjdFJvb3QgLmRvd25sb2FkVGV4dENvbnRhaW5lciwgI0NvbnRhY3RSb290IC5kb3dubG9hZFNlY3Rpb25Db250YWluZXJtLCAjQ29udGFjdFJvb3QgLlJpZ2h0Q29udGVudCwgI0NvbnRhY3RSb290IC5MZWZ0Q29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gICNDb250YWN0Um9vdCAuT3JFdmVuU2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcclxuICAjI1NjcmVlbiA9IEIvdyAzMjBweCB0byA0NzlweFxyXG4qL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNDb250YWN0Um9vdCAuTGVmdENvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcblxyXG4gICNDb250YWN0Um9vdCAuUmlnaHRDb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAjQ29udGFjdFJvb3QgLmRvd25sb2FkVGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAjQ29udGFjdFJvb3QgLmRvd25sb2FkVGV4dENvbnRhaW5lciwgI0NvbnRhY3RSb290IC5kb3dubG9hZFNlY3Rpb25Db250YWluZXJtLCAjQ29udGFjdFJvb3QgLlJpZ2h0Q29udGVudCwgI0NvbnRhY3RSb290IC5MZWZ0Q29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gICNDb250YWN0Um9vdCAuT3JFdmVuU2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICNDb250YWN0Um9vdCAuc29jaWFsTWVkaWEge1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogOSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gICNDb250YWN0Um9vdCAuZG93bmxvYWRUZXh0LCAjbmFtZSwgI2VtYWlsLCAjZGlzY3VzcywgI0NvbnRhY3RSb290IC5Db250YWN0TWVUZXh0LFxyXG4gICNDb250YWN0Um9vdCAucGluZ01lVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDR2aDtcclxuICB9XHJcblxyXG4gICNDb250YWN0Um9vdCAucGluZ0NvbnRlbnQsICNDb250YWN0Um9vdCAuT3JTZWN0aW9uLCAjQ29udGFjdFJvb3QgLk9yRXZlblNlY3Rpb24ge1xyXG4gICAgZm9udC1zaXplOiAzdmg7XHJcbiAgfVxyXG5cclxuICAjQ29udGFjdFJvb3QgLmRvd25sb2FkU2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuXHJcbiAgI0NvbnRhY3RSb290IC5idG4ge1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgfVxyXG5cclxuICAjQ29udGFjdFJvb3QgLmJ0biBpIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA2NXB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogU21hcnRwaG9uZXMgKGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodCA6IDUwMHB4KSB7XHJcbiAgI0NvbnRhY3RSb290IC5kb3dubG9hZFRleHQsICNuYW1lLCAjZW1haWwsICNkaXNjdXNzLCAjQ29udGFjdFJvb3QgLkNvbnRhY3RNZVRleHQsICNDb250YWN0Um9vdCAucGluZ01lVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDZ2aDtcclxufVxyXG5cclxuI0NvbnRhY3RSb290IC5tYWlsLCAjQ29udGFjdFJvb3QgLnBob25le1xyXG4gIGZvbnQtc2l6ZTogNXZoO1xyXG59XHJcbiNDb250YWN0Um9vdCAucGluZ0NvbnRlbnQsICNDb250YWN0Um9vdCAuT3JTZWN0aW9uLCAjQ29udGFjdFJvb3QgLk9yRXZlblNlY3Rpb24ge1xyXG4gICAgZm9udC1zaXplOiA1dmg7XHJcbn1cclxuI0NvbnRhY3RSb290IC5zb2NpYWxNZWRpYXtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG59XHJcbiJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css', './contact_download.component.css', './contact.component.responsive.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        onMousewheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousewheel', ['$event']]
        }],
        handleTouch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchstart', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchend', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchcancel', ['$event']]
        }],
        onMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousemove', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchmove', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/global.ts":
  /*!***************************!*\
    !*** ./src/app/global.ts ***!
    \***************************/

  /*! exports provided: AssetPath, HomeAsset, AboutAsset */

  /***/
  function srcAppGlobalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssetPath", function () {
      return AssetPath;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeAsset", function () {
      return HomeAsset;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutAsset", function () {
      return AboutAsset;
    });

    var AssetPath = "..\\..\\assets\\";
    var HomeAsset = "Home";
    var AboutAsset = "AboutMe";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../global */
    "./src/app/global.ts");
    /* harmony import */


    var _assets_anime_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../assets/anime.min.js */
    "./src/assets/anime.min.js");
    /* harmony import */


    var _assets_anime_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_anime_min_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hello I'm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "defs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clipPath", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "clipPath", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "LA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "animateTransform", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "polyline", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "path", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "animate", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "text", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "textPath", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "eo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "g", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "animateTransform", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "g", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "polyline", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "polyline", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "polyline", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "path", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "animate", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "text", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "textPath", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "rokiaraj");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Welcome to my portfolio ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Scroll");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r0.HomeAssetPath, "\\Laptop.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r0.HomeAssetPath, "\\Notepad.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r0.HomeAssetPath, "\\Pens.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r0.HomeAssetPath, "\\Glasses.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r0.HomeAssetPath, "\\Mobile.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hello I'm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "defs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "clipPath", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "clipPath", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "LA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "animateTransform", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "polyline", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "g", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "path", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "animate", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "text", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "textPath", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "eo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "animateTransform", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "polyline", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "polyline", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "polyline", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "g", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "path", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "animate", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "text", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "textPath", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "rokiaraj");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Welcome to my portfolio ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Swipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r1.HomeAssetPath, "\\Laptop.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r1.HomeAssetPath, "\\Notepad.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r1.HomeAssetPath, "\\Pens.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r1.HomeAssetPath, "\\Glasses.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r1.HomeAssetPath, "\\Mobile.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router) {
        var _this5 = this;

        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.HomeAssetPath = _global__WEBPACK_IMPORTED_MODULE_2__["AssetPath"] + _global__WEBPACK_IMPORTED_MODULE_2__["HomeAsset"];
        this.helloTextWrapper = document.querySelector('#HelloText');
        this.welcomeTextWrapper = document.querySelector('#WelcomeText');
        this.welcomeTextMobileWrapper1 = document.querySelector('#WelcomeTextMobile1');
        this.welcomeTextMobileWrapper2 = document.querySelector('#WelcomeTextMobile2');
        this.webPageContentElement = document.querySelector("#WebPageContent");
        this.tabElement = document.querySelector("#tabID");
        this.lastScrollVal = 0;
        this.maxScrollLimit = 0;
        this.MaxScrollCount = 7;
        this.MinScrollCount = 1;
        this.ScrollCount = 1;
        this.mobile = true;
        this.defaultTouch = {
          x: 0,
          y: 0,
          time: 0
        }; // override the route reuse strategy

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };

        this.router.events.subscribe(function (evt) {
          if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            // trick the Router into believing it's last link wasn't previously loaded
            _this5.router.navigated = false; // if you need to scroll back to top, here is the right place

            window.scrollTo(0, 0);
          }
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (document.querySelector('.HomeBackground').clientWidth <= 425) {
            this.mobile = true;
          } else {
            this.mobile = false;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.ResizeEvent(document.querySelector('.HomeBackground').clientWidth, document.querySelector('.HomeBackground').clientHeight);
          this.helloTextWrapper = document.querySelector('#HelloText');
          this.webPageContentElement = document.querySelector("#WebPageContent");
          this.tabElement = document.querySelector("#tabID");
          this.helloTextWrapper.innerHTML = this.helloTextWrapper.textContent.replace(/\S/g, "<span class='helloLetters'>$&</span>");
          this.welcomeTextWrapper = document.querySelector('#WelcomeText');
          this.welcomeTextWrapper.innerHTML = this.welcomeTextWrapper.textContent.replace(/\S/g, "<span class='welcomeLetters'>$&</span>");

          _assets_anime_min_js__WEBPACK_IMPORTED_MODULE_3__["timeline"]().add({
            targets: '#HelloText .helloLetters',
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: function delay(el, i) {
              return 70 * i;
            }
          });

          _assets_anime_min_js__WEBPACK_IMPORTED_MODULE_3__["timeline"]().add({
            targets: '#WelcomeText, .welcomeLetters',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: _assets_anime_min_js__WEBPACK_IMPORTED_MODULE_3__["stagger"](100, {
              start: 6000
            })
          });
        }
      }, {
        key: "onMove",
        value: function onMove(event) {
          this.update(event);
        }
      }, {
        key: "onOrientationChange",
        value: function onOrientationChange(event) {
          location.reload();
        }
      }, {
        key: "update",
        value: function update(e) {
          var x = e.clientX;
          var y = e.clientY;

          if (e.type == 'touchmove') {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
          }

          document.querySelector('#HomeRoot').style.setProperty('--cursorX', x + 'px');
          document.querySelector('#HomeRoot').style.setProperty('--cursorY', y + 'px');
        }
      }, {
        key: "onMousewheel",
        value: function onMousewheel(event) {
          if (event.wheelDelta > 0 && this.ScrollCount > this.MinScrollCount) {
            this.ScrollCount--;
          }

          if (event.wheelDelta < 0 && this.ScrollCount < this.MaxScrollCount) {
            this.ScrollCount++;
          }

          this.tabElement.style.transform = "scale(" + this.ScrollCount + ")";

          if (this.ScrollCount == 7) {
            this.router.navigate(['aboutme']);
          }

          if (this.ScrollCount == 1) {
            document.querySelector('#scrollMore').style.setProperty('display', 'block');
          } else if (this.ScrollCount > 1) {
            document.querySelector('#scrollMore').style.setProperty('display', 'none');
          }
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.ResizeEvent(event.target.innerWidth, event.target.innerHeight);
        }
      }, {
        key: "handleTouch",
        value: function handleTouch(event) {
          var touch = event.touches[0] || event.changedTouches[0]; // check the events

          if (event.type === 'touchstart') {
            this.defaultTouch.x = touch.pageX;
            this.defaultTouch.y = touch.pageY;
            this.defaultTouch.time = event.timeStamp;
          } else if (event.type === 'touchend') {
            var deltaX = touch.pageX - this.defaultTouch.x;
            var deltaY = touch.pageY - this.defaultTouch.y;
            var deltaTime = event.timeStamp - this.defaultTouch.time; // simulte a swipe -> less than 500 ms and more than 60 px

            if (deltaTime < 500) {
              // touch movement lasted less than 500 ms
              if (Math.abs(deltaX) > 60) {
                // delta x is at least 60 pixels
                if (deltaX > 0) {
                  this.doSwipeRight(event);
                } else {
                  this.doSwipeLeft(event);
                }
              }

              if (Math.abs(deltaY) > 60) {
                // delta y is at least 60 pixels
                if (deltaY > 0) {
                  this.doSwipeDown(event);
                } else {
                  this.doSwipeUp();
                }
              }
            }
          }
        }
      }, {
        key: "doSwipeLeft",
        value: function doSwipeLeft(event) {
          console.log('swipe left', event);
        }
      }, {
        key: "doSwipeRight",
        value: function doSwipeRight(event) {
          console.log('swipe right', event);
        }
      }, {
        key: "doSwipeUp",
        value: function doSwipeUp() {
          document.querySelector('#scrollMore').style.setProperty('display', 'none');

          for (var i = 1; i <= 7; i++) {
            this.DelayScroll(i);
          }
        }
      }, {
        key: "doSwipeDown",
        value: function doSwipeDown(event) {
          console.log('swipe down', event);
        }
      }, {
        key: "DelayScroll",
        value: function DelayScroll(i) {
          var _this6 = this;

          setTimeout(function () {
            console.log(i);

            if (i < 2) {
              document.querySelector('.tabContainer').style.setProperty('--tabBottom', '0px');
            } else if (i == 7) _this6.router.navigate(['aboutme']);else {
              _this6.tabElement.style.transform = "scale(" + i + ")";
            }
          }, 100 * i);
        }
      }, {
        key: "ResizeEvent",
        value: function ResizeEvent(width, height) {
          console.log(width);
          document.querySelector('.tabContainer').style.setProperty('--tabBottom', '-' + document.querySelector('.tabContainer').clientHeight / 2 + 'px');
          /*if (width <= 1024 && width >= 768) {
            this.mobile = false;
            document.querySelector('#Layer_1').setAttribute('viewBox', '0 50 750 750');
          }
                else if (width <= 767 && width >= 426) {
            this.mobile = false;
            document.querySelector('#Layer_1').setAttribute('viewBox', '0 50 850 850');
          }
                else if (width <= 425) {
            this.mobile = true;
            document.querySelector('#Layer_1').setAttribute('viewBox','50 50 550 550');
          }
                else if (width > 1024) {
            this.mobile = false;
            document.querySelector('#Layer_1').setAttribute('viewBox', '0 50 650 650');
          }*/
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      hostBindings: function HomeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function HomeComponent_mousemove_HostBindingHandler($event) {
            return ctx.onMove($event);
          })("touchmove", function HomeComponent_touchmove_HostBindingHandler($event) {
            return ctx.onMove($event);
          })("orientationchange", function HomeComponent_orientationchange_HostBindingHandler($event) {
            return ctx.onOrientationChange($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousewheel", function HomeComponent_mousewheel_HostBindingHandler($event) {
            return ctx.onMousewheel($event);
          })("resize", function HomeComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("touchstart", function HomeComponent_touchstart_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          })("touchend", function HomeComponent_touchend_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          })("touchcancel", function HomeComponent_touchcancel_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          });
        }
      },
      decls: 4,
      vars: 2,
      consts: [["id", "HomeRoot"], [1, "HomeBackground"], ["class", "firstPageMain", 4, "ngIf"], ["class", "MobileFirstPageMainMobile", 4, "ngIf"], [1, "firstPageMain"], [1, "pageUpper"], [1, "laptopContainer"], ["alt", "Laptop", "id", "laptop", 3, "src"], [1, "textContainer"], [1, "textContainerTop"], ["id", "HelloText"], [1, "textContainerMIddle"], ["id", "LAlogo"], ["id", "LA", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 800 800"], ["id", "clip-path", "transform", "translate(-352.3 -222.5)"], ["id", "L", "d", "M567.7,743.7c-2.9,0-1.3,1.1-1.9,1.7-3.4.3-1.6-.8-2.7-1.4s-3.8,1.3-5.4,1.3-.4-.2-.1-.5c-2.3.9-6.7,0-9.3,1.1l-.3-.3a1.9,1.9,0,0,1,.4,1.5c-1.3,0-2.4.7-2.9,0s.9-.3,1.2-.5l-1.3.3c-1.2-1,1.8-.4,1.8-1.1-2.6.3-5.7,1.2-7.7.9-.4-1,4.7-.3,2-1.2l3.1.4c-2.4-1.6,1.9.1-.3-1.6-4.1-.3-4.6.5-8.6.2-.9.6.3.8-.6,1.4-5.8,1-4.6-2.6-8.8-1.2-1.1.7-1.5,2-4.6,1.3l1-1.2c-4-.1-2.3,1.7-6.4.9.7-.5,3.1-.4,2.5-.5-2.7-.9-1.9.7-4,.7l-.4-1c-4.2.2-8.9.9-13.5,1.1.3-.3,1.1-.6,0-.9-5.9.5-12.6-.1-18.2-.7l-2.2.9c-.5,0-.9-.4-.4-.6-2.2-.3-.1.6-1.2.9s-1.7-.5-.9-.8c-3.9.7-11.1,1.6-15.2.7l.8-.3c-3.2-.4-3.6,1.8-6.6,1l.6-.2c-7-.4-14.6.4-19.9-.9-1,1.3-6.9-.6-7.3,1.2-4-.9-2.8-1.2-8.4-1.8-1.5-.1-2.2,1.1-4.1,1.3v-.9l-2.5,1-1.3-1.1-1.7.2c.7.1,1.5.4,1.4.7-2.7.4-6.6-.6-6.7-1.1l-6.4.8c.1-.4,1.2-.5,2.1-.7-3.4.9-.6-1-3.7-.1.4.2-.2.6-.3.7s-5.1-.6-7.7-.3l.5-.6c-4.7-.2-10,.3-15.3.3,1.9.3,1.5,1.4-.1,1.5l-.6-1c-1,.6,1.6.4-.4,1.1s-1.3-1.1-.2-1.4l-2.4.3c-.1-.3.4-.4.6-.8s-4.2-1-5.6.1V744h-2.8l-.6.2a.9.9,0,0,1,0-.4c-.5.1-.6.1-.7-.1l-.2-.3c-.1,0-.1-.6-.2-.9a95.1,95.1,0,0,0,2.9-10.2c.1-2.7-.5-.9-.8-2.2s1.5-3.8,1.6-1.8a109.6,109.6,0,0,0,1.5-11.6c-.4.6-.7,1.2-.9.8s.8-2.3,1.1-2.1v.3c.2-6.6,5.2-14.4,4.6-19.8v.3l.2-5.5c.6-2.4.3,1.6,1.1-.1-.1-6,2-9,2.1-13.9,3-3.2,2.4-13,4.8-17.6l-.6.2c-.3-1.4.6-1.5.9-2.4s-.7,1.3-.9.4c1.5-10.9,5.2-22.1,7.9-33,.9-4-2.2-2.8,0-7.7l.7,1.6c.5-8.4,3.4-16.6,4-24.8.1.5.4.6.3,1.4,1-1.5,1.3-6.2.7-6.4s.6-.2,1-.9-.1-4.4.8-5.2.1.5.1.8,1.1-5.1.1-4.2c1-2.9.8-5.8,1.7-8.1-.6-1.7,1.5-5,.3-5.8,1.3.5,2.1-5,1.9-7,.3.7.7-1.6,1.2-.7.4-2.2.6-4.2-.2-4,2.4-3.7.3-8.3,2.8-10.1.6-6.6,1.3-12.6,2.1-18.4,1.3.5-1.1,6.4.3,6.4.6-5.6,0-9,1.5-14.3.5-1.4.4.9.5,1.4.5-5.6,2.2-10.6,2.5-15.6.1,0,.2.6.2,1.1s.6-2.2,0-2.2v1c-1.2,1.4-1.1-4.2-1.5-4.4,1.4,2,1.4-4.7,3.1-1.7,0-.7-.1-1.5-.5-1.4s.6-1.2.9-.1c.4-3.5-.5-2.4.1-5.5.3.1.3.7.6,1.1a12.1,12.1,0,0,1,.3-6c.1.2.4-.1.3.7.8-4.5,0-8,1.6-12.8,1,1.7.8-1.6,1.9-1.6l.2-2.7-.7,1c.5-2.3.1-4.6.9-6.5v1.8l.7-4.4-.9,2.4c-.1-2.5-1.4,0-.5-3.1,0,.7.5-2.3,1.4-3.4h0a8.4,8.4,0,0,1,.4-4.2c.4-.4,1.1.6,1.4.4s.8-5.5.2-7.2c.1.5.7.7.9.5l-.6-1.1c.5-1,.6-1.2,1-.9.8-3.2-1.6.8-.2-3,0,.3.1.2.1.8,1.1-3.8,1-7.6,2.1-11.1,1.3-.8-.4,3.2.8,2.2.8-5.2.8-10.9,2.1-15.8l-.3.9c-1.4-1,1.5-3.5,1.3-6.2,0,.6.7,1,.6.8.9-3.4,1-7,1.6-12.3l.3.7c.8-1.9,1.3-5.2,1.9-7.4s0-1.9-.7-1.3c3.6-6.2,1.3-13,4.4-18.5-.1.7,0,1.8.1,1.2l.6-5.1c-.8.3-.5.6-1.3,1.5a7.5,7.5,0,0,1-.1-3.5c0,2.4,1.1.2,1.7-.7s-.4-.3-.6-.2c1.7-2.4-1.3-.7.3-4.2l.3.3a19.2,19.2,0,0,1,.3-4.2c.9-.4.1,1.5.7,1.7.4-2.1-.7-4.3.5-6,0,.9-.2,2.2-.2,3.1a7.7,7.7,0,0,0,1.6-3.6h-.1l1.1-3.4-.4.8c-1.5-3,.7-5.3,0-9,.6,3.6.6.7,1.5,1.1s1-2.1,1.1-1.7c-.4-1.8,1.1-2.6.5-5.1.3,0,.4-1.7,1-1.2.2-2.2-.6.4-.9.1-.3-3.5,2.7-7.4,2.3-12.4s-.6-5.1-.3-8.9c.7-1.2.8,1.2.8,1.2a13.9,13.9,0,0,0,1.1-5.5c.2.4.5.1.9-.4s-.8-1.2,0-3.2a5.3,5.3,0,0,1,.8,1.8c.1-1.9-.1-3.8,0-5.7.6-.4.5,1.3.7,2,.2-2.2.6-5.6,0-6.4l-.6,1.3c.1-.8.8-.3.8.3s-.8,2.6-1.1,2.6v-1.4c-2,1-.8,5.4-1.4,8.1l-1-1.4.5,3c-.4.5-1.2.8-1.1-.6-1,1.8.1,1.8-.9,3.3s-.2.1-.2-.1v2c-.2-.4-.9.1-.5-1-1.4,3.3-.2,5.7-1.4,6.8v-.3c-.5,4.8.8.6,1.2,4.4l-2.7,1.9.8.6c-.1.5-.4,1.4-.7,1.2.3,1.9.5-.2.8.9-1.3,2.2-.9,6.5-2.4,6.8.5,1,1-2.1.9.5-1.7.4-.3,2.9-1.4,4.9-.7-.8.2-2.8-1-.8,1.1,1.6-1.1,4.1-1.2,6,1.1.3-.3,4-.6,7.1-.3-.3-1.7,5.6-2.7,8.3h-.2c1,.8.2,3.6,0,5.8-.6-.2-.8-.6-.9-1.8l-.4,2a4.6,4.6,0,0,1,.2,2.5l-.7-.7c-.5,2.7-.1,5.5-1.3,8.8.7.3,2.6-2.3,2.4,1.4-.4.1-1.2,0-1.1-.9a4,4,0,0,1-.2,1.8l-.4-1.6c-.6,1.5.4.9.1,2.2s-.6.8-1,.6.5-1,.3-1.6a9,9,0,0,1-1.6,3.5c.4-.1.8.2.7,1.2-.5,2.7-.9.8-1.5,2.2s-.5,2.3.4,2.5-.6.8-.9,1.1-1.2,6.4.1,5.1v-.3c0,.1,0,.1,0,.2h0c0,4.7-2.4,9.2-2.9,13.8h-.3c-.2,2.7-1,6-.7,8s-.9,1.7-1.2,1.3c-.2,2.1.1,2.4-1,5.2-.1-2.1-.6.6,0-2.2-.8,2.6-1.4,3.1-1.1,6.1-.6-1.1-1.3,1.8-1.4,3.1l.9-1.7a29.9,29.9,0,0,1-.8,3.9l-.8-.9c-2.3,5.2.1,10.2-2.7,13.9.4,1.6,1.1-2.8,1.6-1.4s-2.6,4.8-2.7,5.5c-1.2,3.3.8,3.5-.3,7,.4-.4,1.5-.6,1.3,2.1s-2.1,2.8-2,1.1.3-.9.4-.8.1-1.9-.5-1l.3.4c-.6,1.2-1.3,4.6-1.7,3.7,0,1.9.4.9.9-.4-1.1,3.1-1,5-2,8.2.3-.5.8-.9.7-.4-1.4,4.7.2,2.3-.3,5.5-.9,1.7-1.1-.9-1.3,2.5s-1,.2-1.1-.6c.1,3.1-1.6,5.5-2,7.2v-1.6a13.5,13.5,0,0,1-.3,2.5l.9-.8c-.3.9-.5,1.7-.8,1.6s1.3-.5,1.6,1.5-.4,3.8-1.4,4.1c1.1-3.8-1,.2-.5-3.1a8,8,0,0,1-.5,2.3c-.1.1-.2-.2-.2-.4-1.6,3.5.7,1.9-.1,5.8-.4-.6-1.2.7-1.2,1.3.3-1.5,1-.6,1.1.9s-.2,2.7-.5,4l.5-1.4c.4.6.1,1.8-.1,3.6-.4.1,0-1.6-.3-1,.5,2.1-1.8,4.1-1.7,6.9-.6,1.2-1-.1-1.5,1,.1,3.1-1.4,3.1-1.4,6.3.9-.8.7-1,1,1.4l.5-5.3.4,3.5c.3-1.6.2-3.4.5-4.3.3,1.7.1,1.5.8.9-1.5,1.9-.2,4.3-1.4,6.7l-1.7-.4c-1.5,3.5-.4,6.8-1.8,11.5l.6-1.5c.6.8-.5,3-.5,4.6-.6-.3-1,.7-1.5,1.3s-.7,3.5.3,4.2l-1.2,2c-1.1,3.8.8,4.8-.2,8.5-.4-1.3-1.2.4-1.1-2.2-.3,1.2-.6,2.3-.2,2.4s.1,3.6-.7,4.6.7.9.4,2.3-.3-.1-.3-.1,0,2.3.8,1.2c-2.6,3.5-2,10.8-4.2,13.8-.4,2.8-.8,6.1-1.3,8.5-.1-.2-.3-.1-.1-.5-1.2,3.3,1.2,2.4-.1,6.2-1.3,1.8-.1-2.2-.7-1s-.7,4.7-2.3,7.1v-.7c-1,1.9-.3,5-1,8.2,0,0-.1-.2-.3-.1.5,2.4,0,6.7-.4,9.9-.6-1.1-.1-1.5-1-1.1s1.3-.2,1,2.7c-.6.8-1.4,2.8-2.2,2.9l.5-2.7c-1.3,1.1-.6,3.4-1.1,4.8l-.4-.3c-.7,4.1.5,4.4-.5,8.7l.4-.4c.7,2.6-1,1.9-.7,4.4l-1.3.5c0,1.6,0,5.7-.3,8.6-.5-1.8-.3-5.2-.4-7.3-.3,1.6-1,5.3-.6,6.2a5,5,0,0,1,.2-2.1,17.7,17.7,0,0,1-.2,7.8c-2.1-1-2.2,8-4.4,9.9-.3,5.7-2.5,10.8-3.7,17.2,2.2-1.9-.3,1.9,1.6,1.8-.2,1.5-.3,2.1-.5,2.2l-2,4.3c-.7,1-.1-1.5-.5-1.4-.8,3.2-1,1.2-1.9,3.3.7-.3.7,1.3.1,3.1l1.4-2.5c0,4.7-2.3,3.6-2.3,8.4l-.3-1.6c-.1,2.4-1.8,8.7-.8,11.3-.3.4-.9.8-.8-.2-1.3,5.6-1,12.8-2.7,17l-.4-.5c-.1,1.1.5,2-.2,3.2s-.4-.5-.5,0a11.8,11.8,0,0,1-.3,4.3l-.3-1.3c-1.7,5.4-.5,8.7-1.1,13.3-.6-.1-1.3.9-1.9,2.1s-.5,1.4-.8,2.1l-.3,1v.7l-.2.8-.2-.2c-.8,3.6-1.3,6.8-1.8,9.7l10.8-.7,3-.4,3.1-.3c3.7,1.4,12.7.6,18.7,1.4-.9-.2.2-1,1.2-1.2s3.9-.9,3.7.3h-.5c1.1,1.2,4,.9,6.2.9l.4-1.6c5.9,2.3,15.6-.8,18.8,1.2,1.4-.4,3.2-.4,4.6-.8v.8a91.2,91.2,0,0,0,10.9.1l-1,.6c2.8.1,3.5-2.4,6-2.5l.8,1.3c4.8,0,9.7,1.1,14.5-.1-.1.2-.2.6-1,.6,2.3,0,8.8.9,8-.9.1,1.1,5,.1,7.6-.4l-.4.8c2.2-1.1,2.3-1.4,5.3-1.7.7.1.6.7-.3.5,2.4.4,1.9-.8,4.8-.3l-1.1.5c2.5.1,2.3-.2,3.7-.8s4.7.2,5.1,1a3.8,3.8,0,0,1,3.2-.9c.2.3-.3.5-.6.5,4.2.6,6.2-1,9.1-.2a.7.7,0,0,0,.5.5h-5.7c0,.8,2.7.9.5,2,2.2-.6,5.8-1.8,8.4-1.5l.3.3h-.3a4.3,4.3,0,0,0,1.7-.1l2.2.2c.3.6,3.1.3,4.4.4s1.6-.7,0-1.4H505a4.9,4.9,0,0,1,3.6-.3l1.9-1.4c1.8,1.2,5.4,1.8,5.8,2.5,4.1-.5,9.6-.3,12.2-1.9s1.3.5,1.8.7a9,9,0,0,0-1.8.4c2.3-.4,6.9-.2,7.4-1.3,2.9.5-1.6,1,2.4.8l-.5.3c7.9,1.8,12.8-2.8,21.6-.6-.6-.1-.9-.2-1-.4,10,1,20.6-.9,30.4.6,2.8.3,3.1-.4,4.8-.9l.6.9,2.9-1c4.1-.8,7.2,2.2,12.4.8l-.7-.6c1.9.1,6-.4,5.7.3a1.2,1.2,0,0,1,1.4-.3v.5l4.6-.8c3.6.3-.6,1.9,4.7,2,1.9-.2,5.5-1.4,4.8-1.7s-2-.3-2.1-.8l1.8-.2c.3-1.4,1.7-2.8-2.7-3.8l-3,.9-1-.7h2.6c-1.5-.6-2.4-.1-3.4.3a2,2,0,0,0-1.3-.7l-3,1.3c-.4-.5,1.3-1.1-.7-1.4s1.3,1.2-1,1.6-1-1.2-2.7-.6.1-.6.8-.7c-1.5.4-4,.2-4.8.9-1.5-.8-5.1.2-5-1.1a11.9,11.9,0,0,1-4.1,1.1c2.6-1.6-5.2-.1-4.6-1.8-1.9,1.4-6.8.6-10.2,1.4a1.3,1.3,0,0,1,.9-.3,15.6,15.6,0,0,1-3.6-.8c-.2,1.2-3.2,1.4-4.8,2.2-2.3-1.1,1.4-1.4.7-2.5.1,1-4,1-3.2,1.7-1.8-.7-1.5-.3-2.4-1.3-.3,1.5-1.6.2-3.1,1.2-2.6-.7-.7-1.4-3.5-.9S567.7,743.7,567.7,743.7Zm-66.8,2.5h0Zm-5.6,0h2.4c.2.3,0,.6-.6.6S496.1,746.5,495.3,746.3Zm11.9,5.8c-.9.1-1.2,0-1.3-.2h1.7Z", "fill", "none"], ["id", "clip-path-2", "transform", "translate(-352.3 -222.5)"], ["id", "A", "d", "M880.4,748.7l-1.6-3.1a16.3,16.3,0,0,0,0-2.9c-.4.3-1.9-6.7-3.2-7.2l-.4-4.3c-1.8-7.4-4-7.9-5.9-15.1,1.2,2,.7-1.4,2.5,3.2-.7-2.4-1.2-4.5-1.6-4.4,0-1.5-2.6-6.3-2.7-8.6s-1.2-1.1-1.9-3.7c0-.2.1-.2.2-.1s-1.5-3.8-1.5-1.5c-.3-7.8-6-20.3-6.3-27-1.7-5.1-3.6-11.2-5-15.9.3.3.3-.1.5.8-1.3-6.6-2.8-3.5-4.3-11-.2-4,1.6,3.8,1.3,1.3,1.6-1.6-2.8-8.8-3.1-14l.5,1.2c-.4-4-3.4-9-5-15.2,0,0,.3.3.3,0-2.2-3.9-4.8-11.8-6.7-17.7,1.3,1.6,1.2,2.6,1.6,1.2s-1,1.1-2.7-4.1c-.1-1.8-.8-5.8-.2-6.5l1.5,5c.3-2.9-1.9-6.5-2.5-9.2l.5.2c-2.3-7.6-3.5-7.4-5.8-15.7v1c-2.4-4.2-.5-4-2.6-8.2l.7-1.7c-1.1-2.9-4.1-10.1-5.8-15.4,1.7,2.8,3.9,8.9,5.5,12.6-.8-3-3-10-4-11.4A18.3,18.3,0,0,1,824,555a62.9,62.9,0,0,1-5.4-13.9c2.5.4-3.8-15.5-3.3-20.2-3.8-10.2-5.6-20.7-9.2-32.8-.5,4.8-1.1-3.5-2.6-2.3a19,19,0,0,1-1.2-4.2l-1.4-8.8c-.1-2.2,1.2,2.6,1.5,2.2-1.6-6.2,0-2.8-.7-7-.4,1-1.5-1.9-2.3-5.5l.6,5.2c-3.4-8.4-.7-7.9-4.1-16.3l1.3,2.6c-1.6-4.4-4.7-16.5-7.4-20.4,0-.8.2-2,.9-.1-2.8-10.7-8.3-23.3-9.8-31.9l.7.7c-.7-2-1.8-3.2-2.1-5.8.2.1.7.7.4-.3a42.9,42.9,0,0,1-2.8-7.8l1.1,2.1c-2.4-10.6-5.8-15.6-8.6-24.3,1.3-.3-.7-8.6-1.6-12.8h.2c-3.3-12.2-7-20.3-10.7-31.4a45.7,45.7,0,0,0-1-5.8l-.9-3.6-.5-1.9-.7-2.5-4.1-14.5c-1.4-5-2.8-10-4.2-15.1q-1.3,4.8-2.6,8.9c.4-1.3.5-.4.3,1.2a54.5,54.5,0,0,1-.9,5.6c-.6,1.9-1.3,5.3-1.7,7.7s-.9,4-1.3,3.2l.4-1.6a11.3,11.3,0,0,0-1.4,3.1l-.8,2.4-.5,1.7c-.6,2.1-1.2,4.6-1.7,6.7l1.4,1.1c-5.1,10.5-6.6,29.3-10.2,34.9-.3,2.8-1.2,6.1-1.5,8.9l-.8-.4c-2.1,7.4-3.2,11.1-5.3,20.3v-2c-1.4,5.2.7,7.1-.5,11.9l-1.6,1.1c-2.3,9-5.7,17.9-6.9,27.1-.1-.2-.4-.5-.1-2-1.1,4.1-4.8,15.5-3.2,15.2-1.1.8-2.4,9.5-3.1,14.2l-.6-1c0,4.4.2,4.6-1,10.4-.5,1.3-1,1-.3-.7-1.6,4.4-.1,3.7-2,9.1v-2.2c-1.3,4.7-.9,4.4-.9,7.1s-2.5,8.8-3.4,9.3.2,3.5-.7,6.2c-.4.3-.3-.7-.2-1.3-2.6,7.7-2,11.9-4.2,17-.3,0-.5.4-.7.8,1.5-5.7,2.7-10.4,2.9-10.7s-2.1,4.8-2.2.5c-.5,4.2-1,11.4-2.6,16.2l-.4.6v-.5a15.9,15.9,0,0,0-.7,3.1c-.5,1.5-.9,2.5-1.3,4s-1.8,5.7-2.5,8.2c.9,0-.1,3.2,1.4.3-.2.4,0-.5.4-2.2s.2-.8.2-1.1v.2l1.5-6.2a17.7,17.7,0,0,1-1.4,6.9c.2,1.4.4,3,.4,3.8-2,3.1-4.3,9.6-5.3,10.3l-.4,1.9h-.3l-4.5-1.1L671,536l-2.2-.5-2.2-.4c-2.9-.6-5.8-1.4-8.6-2.3,1.4.2,3.4.2,2.3,0l-5-.6-2.5-.3-2.5-.2a2.2,2.2,0,0,0,1.2.6,11.6,11.6,0,0,1,2.1.7h-6.6c4.5,0,.1-1.1-1.9-1.7.3.2-.4.4-.2.6-5.2-1.5-1,1.3-8,.2l.4-.4h-2l-1.9.3a29.5,29.5,0,0,1-4.1.3c-1.2-.8,2.8-.4,3-1.1a41.7,41.7,0,0,0-5.9.8,16.1,16.1,0,0,1-5.6.5l5.9-1a27.5,27.5,0,0,0-7.5-.2h-3.2l-3.4.3h1.8a14.6,14.6,0,0,1-3.7,1.5l-1.9.5-2,.5-4.3.9-2.3.7-2.3,1c3-1.5,3.3-1.7,2.8-1.7s-1.8.2-1.6-.3c-1.7.2-4.4.7-3.7.2a14.7,14.7,0,0,1-4.3,1.3,15.8,15.8,0,0,0-5.1,2.1c-.3-.2-3.3,1.1-2.9.2-3.9,1.6,1.1.2.9.6l-2.3,1-2.5,1-5.6,2-1.5.5-1.5.6-3,1.3-3,1.5a21.9,21.9,0,0,0-2.9,1.9,82.1,82.1,0,0,0-7.1,5.1c-1.8,1.5-3.5,3-6.5,5.1s1.2-2,1.2-2a49.2,49.2,0,0,0-4.9,2.6c-1.4,1-2.8,2-4.3,3.2.5-.6-.3-.4-1.4,0s-1.1,2-4.6,4a10.3,10.3,0,0,1,1.8-2.7l-2.1,1.7-2,1.9-4.1,3.7c-1.1.2,1.3-2,2.2-3l-5.5,4.7a32.9,32.9,0,0,0-2.7,2.8l-12.6-12.6-11,36.4,37.1-10.2-13.2-13.3.7-.5c-.5.2-.3-.6.3-1.2a8.9,8.9,0,0,1,3.1-2.5,2.7,2.7,0,0,1,1.5-.4l-2,1.7c1.6-.1,3.7-1.8,5.9-3.8l3.4-3.1a39.8,39.8,0,0,1,3.5-2.6l-1.1,2.3,3.9-3.9c1.1-.4,2.2-.2.1,1.4,3.5-1.6,2.5-2.3,5.7-3.4.4-.1.3,0,0,.3l3-2.3c-.5.6,1,.4-1.1,1.5a32.9,32.9,0,0,0,4-2.2l3-2.1c1.8-1.2,3.2-2.2,4.5-2.3l-.5.3c4-2.4,4.1-2.7,3.9-2.9s-.7-.5,2.2-2.4h5.2l.4-1.2,1.6-.6c.5-.2.9-.2.8,0,3-1.9-.7-.1,1-1.5a54,54,0,0,0,7.7-2.8c2.6-.9,4.8-1.6,5.5-1,1.3-1.2-4.3.9.2-1.1.9.5,2.2,0,3.9-.7a22.2,22.2,0,0,1,5.7-1.7c-1,1.1-5,1.8-.7,1.3a5.6,5.6,0,0,1,2.2-1.2l1.4-.4,1.6-.2a40.6,40.6,0,0,0,6.2-.9c0-.3.4-.6,1.2-.8l3.2-.6,4.3-.6,2.3-.3,2.3-.3c-.2.2,2.6.1,6.1,0s7.8,0,10.5.4l-.2.2c.5-.5,2.2-.7,4.3-.7h3.3l3.3.2c-.2.6-1,.8-3.2.9l3.8.4a12,12,0,0,1,4.7-.1l-1.1.7c2.5.4,5.1.5,7.9.8l4.3.7a29.7,29.7,0,0,1,4.6,1.2c.6-.6-4.7-3.5,2.3-2.1.2.5.2,1.2-1.6.9a14.4,14.4,0,0,1,3.3.7h-2.9c2.9,1.1,1.7-.2,4,.5-.2.6,1.6.9,1.2,1.2a17.4,17.4,0,0,0-2.9-.8,34.4,34.4,0,0,1,3.9,1.4l2.4,1.3c-1.4,6.5-3,13.3-2.7,17.3-.4,2.2-1.1,2.4-1.5,3.1a32.1,32.1,0,0,0,.5-3.5c-.7,4.4-3.1,12.9-2.3,14.2-1.9,5.3-.2-3.3-2,4.2v-1.1c-5.5,14.4-3.4,24.7-9.8,40.6a5.5,5.5,0,0,1,.9-1.8c-5.8,18.4-9,38.8-15.2,56.8-1.7,5.2-1.1,5.9-1.4,9.2l-1.2.9-.4,5.7c-1.2,7.9-5.6,12.9-6.7,23.1l.9-1.1c-1,3.5-2.5,11.3-3,10.5a4,4,0,0,1-.3,2.6h-.5l-1.4,8.9c-2.1,6.6-1.6-1.5-4.2,8.3-.8,3.7-1.3,10.7-.7,9.4s1.2-3.7,1.7-3.7l-.6,3.4c1.2,1,1.9,3.9,5-4.1l.6-5.9,1.1-1.7-1.2,4.8c1.3-2.6,1.2-4.4,1.3-6.5a5.2,5.2,0,0,0,1.3-2.2v-5.9c.7-.5.4,2.8,1.7-.9s-1.8,2.2-1.1-2.2c1.3-2.6,1.6-1.6,1.9-5,.5-.4.5.4.3,1.7.3-3,1.8-7.6,1.4-9.2,1.5-2.6,2.3-9.7,3.5-9.1a40.9,40.9,0,0,1,.9-7.9c.3,5.2,2.6-9.8,3.9-8.1-.5-3.9,2.7-12.9,3.5-19.4a4.3,4.3,0,0,1-.1,1.7,55,55,0,0,1,2.5-6.6c-1-.7.1-6.3.2-9.4,2.2-4,.7,3,2.1,1.9-1,0,1-7.7-.1-6.5,1.5-3.1,1.1-2.8,2.4-4.2-1.3-.9.5-3.1.4-6.1,1.9-4.6,1.6-.9,2.6-6.3,1.1-2.4.4,2.4.4,2.4,1.4-5.3-.4-2.8-.7-4.1,1.3-6.5,1.5-2.8,2.7-4.8.7-4.1.5-7.4,1.3-10.3.2-.2.4-.7.5,0,.2-4.4,3.2-12.5,3.4-17.7l.4-.6c-.7.7-1.3.6-1.7.4.6-2.4.5-4.6,1.4-5.4a4.6,4.6,0,0,0-.1,2.4l.3-2.6c1.6-2-.5,3.5.2,3.7.9-5,1.6-10.9,2.8-14.6,1.2-.5-1.9,8.9.2,4.1l-1.9,5.7c2.7-4-1,3.5,1.7-.2,2.2-7.6,1.7-8.7,3.9-16.2-.1-1.9-1,.4-1.1-1.5,1.8-11.1,4.7-7.9,5.4-16.2-.1-2.2-1.2-3.4.9-8.9l.6,2.2a16.6,16.6,0,0,0,.8-5.7l.7.4c1.3.1,4.2,1.6,4.6.8a3.7,3.7,0,0,1,2,1.5c1.3.3,4.2,1.6,6.4,2.4s3.8,1.5,2.7.5l-.6-.4.4.2a66.7,66.7,0,0,1,6.2,2.7l5.9,3.4,2.9,1.8,2.9,1.8,2.9,1.8,2.8,1.7-.2.2c2.3,1.3,4.8,2.8,7,4.3s4.5,2.8,6.1,3.7,2.6,2.6,1.9,2.5l3.7,2.4a46,46,0,0,1,4.4,3.8c-3.5-2.1.8,1.2-3.4-2.3l4.3,3.9a36,36,0,0,0,5,3.6c-1.9-.6,2.4,3.2,4.3,4.7l-2.4-2.8c2.2,1.7,3.9,3.4,5.7,5.1h-1.7a61.1,61.1,0,0,0,5.4,5.3l2.7,2.2,2.6,2.2a60.3,60.3,0,0,1,4.9,4.3,24.8,24.8,0,0,1,3.8,4.9c2.5,1.5-3.7-4.5-1.3-3.2,3.3,3.6,5.7,8.3,6.7,9.4a18.4,18.4,0,0,0,4.7,4.5,18.2,18.2,0,0,1,4.9,4.6c-.3-.9-.2-2.2,3.5,1.6s2.7,5.6.5,3.4-1.1-1.4-.9-1.4-2.6-2.6-1.6-.9l.7.2c1.3,2.1,5.6,7.2,4.1,6.4,2.4,2.4,1.6,1.1.2-.9,1.7,2.3,3.1,4.1,4.5,5.9s3.1,3.8,5,6.5c-.5-.9-.7-1.9-.1-1.1,5.4,7.7,3.1,2.9,7.1,7.9,1.7,3.2-1.8-.3,2.4,4.6,2,3.4-.3,1.2-1.4.1,4,4.3,6,9.2,7.8,12l-2-2.4a40.4,40.4,0,0,1,2.9,3.9l-.4-1.9c.9,1.6,1.8,2.8,1.5,3,1.4,1.3.2-1.9,2.8.9,1.1,2.2,4.4,5.9,4.1,7.1-3.6-5.9-.9-.1-3.2-2.9l1.7,2.6c.1.3-.3-.1-.6-.5,3.3,6.5,2.7,2.2,6.8,8.5-1-.5.1,2,.8,3-1.6-2.6,0-1.7,1.8.4,2.2,4.3,3,4.3,4.3,6.5l-1.4-2.6c1,.6,2.2,2.6,4.1,5.5-.2.5-1.8-2.5-1.4-1.4,2.8,2.7,3.6,7.8,6.7,12,.9,2.3-.7.7.1,2.7,3.5,4.7,2.5,5.9,6,11-.2-1.9-.5-2.1,2.2,1.4l-5.3-8.6,4.1,5.2c-1.5-2.7-3.5-5.4-4.3-7.1,2,2.4,1.7,2.2,1.5.7,1.1,4.2,4.6,6.9,6.3,11.6l-1.6.7c2.5,6.1,6.1,10.2,9.5,17.3l1.4,4,1-.4.2.4,4-1.5V749Zm-195.3-229v.2a1.7,1.7,0,0,1-.2-.8c.3-1.7.6-2.2.8-2.4Zm9.7-18c0,.6.8-1.8,1.5-3.3l-1.2,4.5C694.7,503.2,694.5,502.7,694.8,501.7Zm-1.2,7.2h0l-.6,2.6Zm-6.9,29a11.7,11.7,0,0,1-.3,2.3l-.4-.2ZM849.4,693c.1,1-1.2-.3-2.6-1.9s-3.3-3.8-3.6-3.8c1.6.9.4-1.2-.6-3.1s-1.9-3.6.5-2.1c-.8-1-1.9-2.1-2.1-1.7-.9-1.6-1-2.2.4-.9-4-5.5-3.2-3.1-6.7-8.2.3-.1,1.1.8,1.7,1.1a47.1,47.1,0,0,1-7.3-8.9c.3.2.2-.5,1.1.8-5.2-7.3-10.1-11.5-15.6-19.6,2.8,1.5-1.7-2.9-1.1-4l-3.5-3.9.9,2c-1.4-1.8-3-3.4-4.4-4.9a36.7,36.7,0,0,1-4-4.6l2.5,2.3-5.7-6.5,2.8,4c-3.4-3.2-.7,1.3-4.5-3.6.9.9-3-3.5-4.1-5.7h0a33.1,33.1,0,0,1-5.7-5.7c-.3-.9,1.4-.3,1.2-.9s-3-2.4-5-4.4-4-3.9-5.4-4.6c.8.5,1.3.1,1.2-.2l-1.9-.8c-1.3-1.7-1.5-2-.9-2.1-4.5-4.6.5,2.4-4.6-3.3a11.4,11.4,0,0,1,1.3.9,106.4,106.4,0,0,0-8.1-7.6c-2.8-2.4-5.5-4.6-8-7.1-.4-1.1.8-.2,2,.8s2.3,1.9,1.7.8c-7.8-6.6-17.1-12.5-24.9-18.4l1.4,1.1c-1,.3-2.4-.9-4.1-2.5l-2.8-2.4a17.5,17.5,0,0,0-3.3-2c1.1.6,1.8.1,1.5.1l-4.3-2.8-4.9-2.7c-3.4-1.9-7.4-3.6-12-5.8l1.3.2c-1.7-1.1-4-2.2-6.4-3.4l-3.6-1.7-3.2-1.5c-1.3-.1-3.6-1.2-2.4,0a44.9,44.9,0,0,0-4.4-2.3l-2.2-1c.6-2.2-.4-2.2.4-5.2l1.2-.5c1.9-7.9,3.4-16.8,5.4-25.6.2.6.1,2.1.9.2,2.3-11.1,6.1-23.5,9.5-34l.2-4.3c.3-.9.8-1.7.7-.6,1.4-4.1-.5-.4-.3-2.4s1.3-3,1.2-1.4c1.2-7.5,3.8-21.2,6.7-28.7v1.6c1.9-5.9,0-7.2,2.2-12.6v1.1c3.7-12.9,6.6-27.5,10.4-37.1-.7-2.2,3.8-12.7,2.3-14,2.8-7.2,2.5-5,5.8-15.3.8-2.8,0-4.4.7-7.9h.9l.3-4.9,1.7-2.2.6-3.3c-.4,1.3-1.1,2.6-1.3,2.4.9-5.2,3.8-12.2,4.3-12.2l2.3-12.2a6.7,6.7,0,0,1-.1,2.7c.6-4.5,1.1-.1,1.7-5.7-.4.7-.4-.6-.6-.7a26.1,26.1,0,0,0,1-2.7l.5-1.7.3-.9v-.2h.1a10.4,10.4,0,0,0,.4-2.1l.3,1.4a5,5,0,0,0,.3-1.2l.4.8.3.7v.4l.5,1.9c-.1-.5-.2-.8-.2-1.2v-.6h0l.4-.3h.5a8.2,8.2,0,0,1,.7,1.7l-.6,1.4c1.1,1.7-.5-3.1,1.3.5s-.4,2.8-1.3.8l1.6,4.4c-.2.3-.7-.7-1.1-.8,1.1,1.7,1.3,8,3.1,10.4l-.2.3c2.8,9.9,4.4,14.3,6.8,22.3.9-.1,1.6,3.1,2.9,5.3,1.4,6,2.7,12.7,4.8,19.9,1.8,4.9,1.1,1.3,2.2,3.4-.6.6,1.5,7.7-.1,4.1,2.6,8.5,3.3,10.9,7,21.5,0-1.3-.3-2.6.2-2s1,4.6.5,4.4l-.2-.5c4.6,11.8,5.9,28.7,10.2,37.9l-.2-.5,3.7,9.8c1.2,4.7-1.3-2.6-.8.9,4.3,10.5,4.7,17.2,8.1,25.8-.2,7.5,7.2,24.4,8.5,34.2l.4-.7c1.2,2.3.5,3,.9,4.8.3-.4-.3-2.7.4-1.3,6.5,20.2,11.3,42.3,16.9,63.3,2.1,7.7,3.9,3.6,5.4,13.6l-1.7-2.5c5.6,15.1,9,31.6,14.3,46.4a6.1,6.1,0,0,1-1.2-2.3c.2,3.4,3.4,11.8,3.9,11.7.6,2.4-.4.7-.2,2.2.5,3.3,3.2,7.8,3,9.7,0,.2-.2-.2-.4-.6,1,2.7,2.4,8.8,2.6,6.8,1.2,5.8,3.5,10.7,4.3,15.4,1.7,2.7,2.4,9.8,3.9,10.4-1.4,0,1.8,10.2,3.4,13.7-.7-1.1.5,3.2-.5,2,1.2,4.1,2.5,7.8,3,6.9s.1.9.2,1.4C859.2,708.9,854.8,700.4,849.4,693Zm15.2,25.1c.1.7.3,1.4.4,2.1l-1.6-3C862.6,715.4,863.7,716.9,864.6,718.1Z", "fill", "none"], ["id", "LMask"], ["attributeName", "transform", "type", "translate", "from", "0 0", "to", "-420 0", "begin", "4s", "dur", "1s", "repeatCount", "0", "fill", "freeze", "keySplines", ".42 0 1 1"], ["clip-path", "url(#clip-path)"], ["id", "LPath", "points", "98.2 73 95.3 85.9 92.2 95 92.2 100 91.2 107 90.2 113 88.2 120 83.2 139 80.2 155 81.2 157 79.2 163 77.2 171 75.2 186 73.2 193 72.2 196 71.2 202 64.2 232 63.2 246 57.2 266 53.2 296 45.2 336 37.2 376 24.2 441 6.2 526 159.2 526 212.2 526 270.2 526 281.2 526", "fill", "none", "stroke", "#000", "stroke-miterlimit", "10", "stroke-width", "10"], ["id", "Text"], ["id", "path"], ["attributeName", "d", "from", "m0,110 h0", "to", "m0,110 h1100", "dur", "2s", "begin", "5s", "repeatCount", "0", "fill", "freeze", "keyTimes", "0;1", "calcMode", "spline", "keySplines", "0.1 0.2 .22 1"], ["transform", "translate(-140 420)", "font-size", "200", "font-height", "200", "font-family", "Merienda"], [0, "xlink", "href", "#path"], ["id", "AMask"], ["attributeName", "transform", "type", "translate", "from", "0 0", "to", "-100 0", "begin", "4s", "dur", "1s", "repeatCount", "0", "fill", "freeze"], ["clip-path", "url(#clip-path-2)"], ["id", "APath3", "points", "328.2 317 301.2 312 276.2 310 253.2 313 236.2 317 225.2 321 216.2 324 205.7 330 201.2 334 191.2 339 186.2 342 181.2 345 167.2 356 143.2 380", "fill", "none", "stroke", "#000", "stroke-miterlimit", "10", "stroke-width", "40"], ["id", "APath2", "points", "511.2 500 494.2 471 475.2 444 459.2 421 448.2 408.7 432.2 390 419.2 376 408.2 366 395.2 354 383.2 346 366.2 334 351.2 326 333.2 319", "fill", "none", "stroke", "#000", "stroke-miterlimit", "10", "stroke-width", "40"], ["id", "APath1", "points", "276.2 533 292.2 475 301.2 437 315.2 381 325.2 339 335.2 302 349.2 252 357.2 216 364.2 184 376.2 142 384.2 107 394.2 72 406.2 113 417.2 153 430.2 194 437.2 217 447.2 258 464.2 317 488.2 403 512.2 486 524.2 525 527.2 530", "fill", "none", "stroke", "#000", "stroke-width", "10"], ["attributeName", "d", "from", "m0,110 h0", "to", "m0,110 h1100", "dur", "1s", "begin", "5s", "repeatCount", "0", "fill", "freeze"], ["transform", "translate(430 420)", "font-size", "200", "font-family", "Merienda"], [1, "textContainerBottom"], ["id", "WelcomeText"], [1, "notepadPenContainer"], [1, "notpadContainer"], ["alt", "Notepad", "id", "notepad", 3, "src"], [1, "penContainer"], ["alt", "Pens", "id", "pens", 3, "src"], [1, "pageLower"], [1, "glassesContainer"], ["alt", "Glasses", "id", "glasses", 3, "src"], [1, "tabContainer"], ["id", "scrollMore"], [1, "mouse"], [1, "text"], ["id", "tabID", 1, "tab"], [1, "tabBorder"], [1, "dot"], [1, "content"], [1, "mobileContainer"], ["alt", "Mobile", "id", "mobile", 3, "src"], [1, "MobileFirstPageMainMobile"], [1, "MobFirst"], [1, "MobSecond"], ["id", "LA", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 700 700"], [1, "MobThird"], [1, "MobFourth"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 62, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 64, 5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["#HomeRoot, .HomeBackground {\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n#HomeRoot .HomeBackground {\r\n  background: rgba(154, 18, 179, 1);\r\n}\r\n\r\n#HomeRoot {\r\n  //cursor: none;\r\n  --cursorX: 50vw;\r\n  --cursorY: 50vh;\r\n  z-index: =-10;\r\n}\r\n\r\n#HomeRoot:before {\r\n  z-index: =-10;\r\n  content: '';\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  pointer-events: none;\r\n  background: radial-gradient(circle 10vmax at var(--cursorX) var(--cursorY),\r\n      rgba(250, 250, 250, 0) 0%,\r\n      rgba(250, 250, 250, .5) 60%,\r\n      rgba(250, 250, 250, 1) 100%)\r\n}\r\n\r\n#HomeRoot .firstPageMain {\r\n  background: url('/Leo/Heaxagon.svg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#HomeRoot .pageUpper {\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\n#HomeRoot .laptopContainer {\r\n  float: left;\r\n  width: 20%;\r\n  height: 100%;\r\n}\r\n\r\n#HomeRoot .laptopContainer #laptop {\r\n  width: 90%;\r\n  height: 100%;\r\n  float: left;\r\n  -webkit-filter: drop-shadow(11px 11px 10px rgba(0, 0, 0, 0.2));\r\n  filter: drop-shadow(11px 11px 10px rgba(0, 0, 0, 0.2));\r\n  position: relative;\r\n  top: 2px;\r\n  -webkit-animation-name: laptopAnimation;\r\n          animation-name: laptopAnimation;\r\n  right: 0px;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes laptopAnimation {\r\n  from {\r\n    right: 200px;\r\n  }\r\n\r\n  to {\r\n    right: 0px;\r\n  }\r\n}\r\n\r\n@keyframes laptopAnimation {\r\n  from {\r\n    right: 200px;\r\n  }\r\n\r\n  to {\r\n    right: 0px;\r\n  }\r\n}\r\n\r\n#HomeRoot .textContainer {\r\n  float: left;\r\n  width: 60%;\r\n  height: 100%;\r\n}\r\n\r\n#HomeRoot .textContainerTop {\r\n  width: 100%;\r\n  height: 50%;\r\n  text-align: center;\r\n}\r\n\r\n#HomeRoot .textContainer .textContainerTop #HelloText {\r\n  font-family: dancing-font;\r\n  position: relative;\r\n  /*filter: drop-shadow(21px 21px 20px rgba(0, 0, 0, 0.2));*/\r\n  width: 100%;\r\n  font-weight: 900;\r\n  font-size: 4vw;\r\n  top: 60%;\r\n}\r\n\r\n#HomeRoot .textContainer .textContainerTop #HelloText .helloLetters {\r\n  display: inline-block;\r\n  line-height: 1em;\r\n}\r\n\r\n#HomeRoot .textContainer .textContainerMIddle {\r\n  width: 100%;\r\n  height: 25%;\r\n  text-align: center;\r\n}\r\n\r\n/*LogoCssBegin*/\r\n\r\n#HomeRoot #LAlogo {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n#HomeRoot #LA {\r\n  /*filter: drop-shadow(21px 21px 20px rgba(0, 0, 0, 0.2));*/\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n@-webkit-keyframes laAnimate {\r\n  100% {\r\n    stroke-dashoffset: 0;\r\n  }\r\n}\r\n\r\n@keyframes laAnimate {\r\n  100% {\r\n    stroke-dashoffset: 0;\r\n  }\r\n}\r\n\r\n#HomeRoot #LPath {\r\n  stroke-dasharray: 1000;\r\n  stroke-dashoffset: 1000;\r\n  -webkit-animation: laAnimate 1s linear forwards 1s;\r\n          animation: laAnimate 1s linear forwards 1s;\r\n}\r\n\r\n#HomeRoot #APath1 {\r\n  stroke-dasharray: 1500;\r\n  stroke-dashoffset: 1500;\r\n  -webkit-animation: laAnimate 1s linear forwards 1.8s;\r\n          animation: laAnimate 1s linear forwards 1.8s;\r\n}\r\n\r\n#HomeRoot #APath2 {\r\n  stroke-dasharray: 1000;\r\n  stroke-dashoffset: 1000;\r\n  -webkit-animation: laAnimate 1.8s linear forwards 2.5s;\r\n          animation: laAnimate 1.8s linear forwards 2.5s;\r\n}\r\n\r\n#HomeRoot #APath3 {\r\n  stroke-dasharray: 1000;\r\n  stroke-dashoffset: 1000;\r\n  -webkit-animation: laAnimate 3s linear forwards 3s;\r\n          animation: laAnimate 3s linear forwards 3s;\r\n}\r\n\r\n/*LogoCSSEnd*/\r\n\r\n#HomeRoot .textContainer .textContainerBottom {\r\n  width: 100%;\r\n  height: 25%;\r\n  text-align: center;\r\n}\r\n\r\n#HomeRoot .textContainer .textContainerBottom #WelcomeText, #WelcomeTextMobile1, #WelcomeTextMobile2 {\r\n  font-family: dancing-font;\r\n  font-weight: 900;\r\n  position: relative;\r\n  -webkit-filter: drop-shadow(21px 21px 20px rgba(0, 0, 0, 0.2));\r\n          filter: drop-shadow(21px 21px 20px rgba(0, 0, 0, 0.2));\r\n  width: 100%;\r\n  font-size: 4vw;\r\n  top: 30%;\r\n}\r\n\r\n#HomeRoot .textContainer .textContainerBottom #WelcomeText, #WelcomeTextMobile1, #WelcomeTextMobile2 .welcomeLetters {\r\n  display: inline-block;\r\n  line-height: 1em;\r\n}\r\n\r\n#HomeRoot .notepadPenContainer {\r\n  float: left;\r\n  width: 20%;\r\n  height: 100%;\r\n}\r\n\r\n#HomeRoot .notepadPenContainer #notepad {\r\n  width: 68%;\r\n  height: 100%;\r\n  -webkit-filter: drop-shadow(11px 11px 10px rgba(0, 0, 0, 0.2));\r\n  filter: drop-shadow(11px 11px 10px rgba(0, 0, 0, 0.2));\r\n  position: relative;\r\n  top: 40px;\r\n  float: right;\r\n  -webkit-animation-name: notepadAnimation;\r\n          animation-name: notepadAnimation;\r\n  right: 20px;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-delay: 0.6s;\r\n          animation-delay: 0.6s;\r\n  -webkit-animation-fill-mode: backwards;\r\n          animation-fill-mode: backwards;\r\n}\r\n\r\n@-webkit-keyframes notepadAnimation {\r\n  from {\r\n    right: -200px;\r\n  }\r\n\r\n  to {\r\n    right: 20px;\r\n  }\r\n}\r\n\r\n@keyframes notepadAnimation {\r\n  from {\r\n    right: -200px;\r\n  }\r\n\r\n  to {\r\n    right: 20px;\r\n  }\r\n}\r\n\r\n#HomeRoot .notpadContainer {\r\n  width: 100%;\r\n  height: 70%;\r\n}\r\n\r\n#HomeRoot .penContainer {\r\n  width: 100%;\r\n  height: 30%;\r\n}\r\n\r\n#HomeRoot #pens {\r\n  width: 35%;\r\n  -webkit-filter: drop-shadow(11px 11px 10px rgba(0, 0, 0, 0.2));\r\n  filter: drop-shadow(11px 11px 10px rgba(0, 0, 0, 0.2));\r\n  position: relative;\r\n  -webkit-animation-name: penAnimation;\r\n          animation-name: penAnimation;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-delay: 0.5s;\r\n          animation-delay: 0.5s;\r\n  -webkit-animation-fill-mode: backwards;\r\n          animation-fill-mode: backwards;\r\n  transform: rotate(90deg);\r\n}\r\n\r\n@-webkit-keyframes penAnimation {\r\n  0% {\r\n    transform: translatex(100px) translatey(40px) rotate(90deg);\r\n  }\r\n\r\n  100% {\r\n    transform: translatex(0px) translatey(0px) rotate(90deg);\r\n  }\r\n}\r\n\r\n@keyframes penAnimation {\r\n  0% {\r\n    transform: translatex(100px) translatey(40px) rotate(90deg);\r\n  }\r\n\r\n  100% {\r\n    transform: translatex(0px) translatey(0px) rotate(90deg);\r\n  }\r\n}\r\n\r\n#HomeRoot .pageLower {\r\n  width: 100%;\r\n  height: 40%;\r\n  clear: both;\r\n}\r\n\r\n#HomeRoot .glassesContainer {\r\n  float: left;\r\n  width: 25%;\r\n  height: 100%;\r\n}\r\n\r\n#HomeRoot .glassesContainer #glasses {\r\n  width: 40%;\r\n  -webkit-filter: drop-shadow(11px 11px 10px rgba(0, 0, 0, 0.2));\r\n  filter: drop-shadow(11px 11px 10px rgba(0, 0, 0, 0.2));\r\n  position: relative;\r\n  -webkit-animation-name: glassesAnimation;\r\n          animation-name: glassesAnimation;\r\n  right: 0px;\r\n  float: right;\r\n  top: 15%;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-delay: 0.2s;\r\n          animation-delay: 0.2s;\r\n  -webkit-animation-fill-mode: backwards;\r\n          animation-fill-mode: backwards;\r\n}\r\n\r\n@-webkit-keyframes glassesAnimation {\r\n  0% {\r\n    transform: translatex(-100px) translatey(60px)\r\n  }\r\n\r\n  100% {\r\n    transform: translatex(0px) translatey(0px);\r\n  }\r\n}\r\n\r\n@keyframes glassesAnimation {\r\n  0% {\r\n    transform: translatex(-100px) translatey(60px)\r\n  }\r\n\r\n  100% {\r\n    transform: translatex(0px) translatey(0px);\r\n  }\r\n}\r\n\r\n#HomeRoot .tabContainer {\r\n  --tabBottom: -250px;\r\n  float: left;\r\n  width: 50%;\r\n  height: 100%;\r\n}\r\n\r\n#HomeRoot #tabID {\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n#HomeRoot .tabContainer .tab {\r\n  position: relative;\r\n  margin: 0% auto;\r\n  bottom: var(--tabBottom);\r\n  width: 40%;\r\n  -webkit-animation-name: tabAnimation;\r\n          animation-name: tabAnimation;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-delay: 0.3s;\r\n          animation-delay: 0.3s;\r\n  -webkit-animation-fill-mode: backwards;\r\n          animation-fill-mode: backwards;\r\n  z-index: 1;\r\n}\r\n\r\n@-webkit-keyframes tabAnimation {\r\n  from {\r\n    bottom: -350px;\r\n  }\r\n\r\n  to {\r\n    bottom: var(--tabBottom);\r\n  }\r\n}\r\n\r\n@keyframes tabAnimation {\r\n  from {\r\n    bottom: -350px;\r\n  }\r\n\r\n  to {\r\n    bottom: var(--tabBottom);\r\n  }\r\n}\r\n\r\n#HomeRoot .tabBorder {\r\n  background-color: white;\r\n  padding: 1% 1% 0% 1%;\r\n  box-shadow: 11px 11px 10px 0 rgba(0, 0, 0, 0.2);\r\n  border-radius: 25px 25px 25px 25px;\r\n  border-width: 2px 2px 2px 2px;\r\n  border: solid;\r\n  border-color: #DAA520;\r\n}\r\n\r\n#HomeRoot .content {\r\n  background-color: black;\r\n  height: 550px;\r\n}\r\n\r\n#HomeRoot .dot {\r\n  height: 15px;\r\n  width: 15px;\r\n  background-image: url('/Leo/assets/Home/Camera.png');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin: 15px 48%;\r\n  position: relative;\r\n}\r\n\r\n#HomeRoot .bigCircle {\r\n  height: 35px;\r\n  width: 35px;\r\n  background-color: #FFF;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin: 15px 44%;\r\n  border: 2px solid #DAA520;\r\n  position: relative;\r\n}\r\n\r\n#HomeRoot .mobileContainer {\r\n  float: left;\r\n  width: 25%;\r\n  height: 100%;\r\n}\r\n\r\n#HomeRoot .mobileContainer #mobile {\r\n  width: 50%;\r\n  -webkit-filter: drop-shadow(11px 11px 10px rgba(0, 0, 0, 0.2));\r\n  filter: drop-shadow(11px 11px 10px rgba(0, 0, 0, 0.2));\r\n  position: relative;\r\n  top: 25%;\r\n  float: left;\r\n  -webkit-animation-name: mobileAnimation;\r\n          animation-name: mobileAnimation;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-delay: 0.4s;\r\n          animation-delay: 0.4s;\r\n  -webkit-animation-fill-mode: backwards;\r\n          animation-fill-mode: backwards;\r\n}\r\n\r\n@-webkit-keyframes mobileAnimation {\r\n  0% {\r\n    transform: translatex(100px) translatey(40px)\r\n  }\r\n\r\n  100% {\r\n    transform: translatex(0px) translatey(0px);\r\n  }\r\n}\r\n\r\n@keyframes mobileAnimation {\r\n  0% {\r\n    transform: translatex(100px) translatey(40px)\r\n  }\r\n\r\n  100% {\r\n    transform: translatex(0px) translatey(0px);\r\n  }\r\n}\r\n\r\n#HomeRoot .BGblur {\r\n  filter: blur(5px);\r\n  -webkit-filter: blur(5px);\r\n  -moz-filter: blur(5px);\r\n  -o-filter: blur(5px);\r\n  -ms-filter: blur(5px);\r\n}\r\n\r\n/* Scroll Styles */\r\n\r\n#scrollMore{\r\n  position: absolute;\r\n  top:88%;\r\n  left:49%;\r\n  z-index: 10;\r\n  visibility: hidden;\r\n  -webkit-animation: 9s fadeIn;\r\n          animation: 9s fadeIn;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n  opacity: 0.5\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  99% {\r\n    visibility: hidden;\r\n  }\r\n  100% {\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  99% {\r\n    visibility: hidden;\r\n  }\r\n  100% {\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n.mouse{\r\n  margin: 0 auto;\r\n  width: 3.5vmin;\r\n  height: 6.5vmin;\r\n  position: relative;\r\n  background: #4e5559 linear-gradient(transparent 0%,\r\n                                      transparent 50%,\r\n                                      #ffffff 50%,\r\n                                      #ffffff 100%);\r\n  background-size: 100% 200%;\r\n  border-radius: 100px;\r\n  -webkit-animation: colorSlide 5s linear infinite,\r\n             nudgeMouse 5s ease-out infinite;\r\n          animation: colorSlide 5s linear infinite,\r\n             nudgeMouse 5s ease-out infinite;\r\n}\r\n\r\n.mouse:before,\r\n.mouse:after{\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  margin: auto;\r\n}\r\n\r\n.mouse:before{\r\n  width: 3vmin;\r\n  height: 6vmin;\r\n  background-color: #30333a;\r\n  border-radius: 100px;\r\n}\r\n\r\n.mouse:after{\r\n  background-color: #ffffff;\r\n  width: 1vmin;\r\n  height: 1vmin;\r\n  border-radius: 100%;\r\n  -webkit-animation: trackBallSlide 5s linear infinite;\r\n          animation: trackBallSlide 5s linear infinite;\r\n}\r\n\r\n.text{\r\n  font-family: Cabin;\r\n  color: #fff;\r\n  -webkit-animation: colorText 5s ease-out infinite,\r\n             nudgeText 5s ease-out infinite;\r\n          animation: colorText 5s ease-out infinite,\r\n             nudgeText 5s ease-out infinite;\r\n}\r\n\r\n/* Animations */\r\n\r\n@-webkit-keyframes colorSlide{\r\n  0% {\r\n    background-position: 0% 100%;\r\n  }\r\n  20% {\r\n    background-position: 0% 0%;\r\n  }\r\n  21% {\r\n    background-color: #4e5559;\r\n  }\r\n  29.99% {\r\n    background-color: #ffffff;\r\n    background-position: 0% 0%;\r\n  }\r\n  30% {\r\n    background-color: #4e5559;\r\n    background-position: 0% 100%;\r\n  }\r\n  50% {\r\n    background-position: 0% 0%;\r\n  }\r\n  51% {\r\n    background-color: #4e5559;\r\n  }\r\n  59% {\r\n    background-color: #ffffff;\r\n    background-position: 0% 0%;\r\n  }\r\n  60% {\r\n    background-color: #4e5559;\r\n    background-position: 0% 100%;\r\n  }\r\n  80% {\r\n    background-position: 0% 0%;\r\n  }\r\n  81% {\r\n    background-color: #4e5559;\r\n  }\r\n  90%, 100% {\r\n    background-color: #ffffff;\r\n  }\r\n}\r\n\r\n@keyframes colorSlide{\r\n  0% {\r\n    background-position: 0% 100%;\r\n  }\r\n  20% {\r\n    background-position: 0% 0%;\r\n  }\r\n  21% {\r\n    background-color: #4e5559;\r\n  }\r\n  29.99% {\r\n    background-color: #ffffff;\r\n    background-position: 0% 0%;\r\n  }\r\n  30% {\r\n    background-color: #4e5559;\r\n    background-position: 0% 100%;\r\n  }\r\n  50% {\r\n    background-position: 0% 0%;\r\n  }\r\n  51% {\r\n    background-color: #4e5559;\r\n  }\r\n  59% {\r\n    background-color: #ffffff;\r\n    background-position: 0% 0%;\r\n  }\r\n  60% {\r\n    background-color: #4e5559;\r\n    background-position: 0% 100%;\r\n  }\r\n  80% {\r\n    background-position: 0% 0%;\r\n  }\r\n  81% {\r\n    background-color: #4e5559;\r\n  }\r\n  90%, 100% {\r\n    background-color: #ffffff;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes colorText{\r\n  21% {\r\n    color: #4e5559;\r\n  }\r\n  30% {\r\n    color: #ffffff;\r\n  }\r\n  51% {\r\n    color: #4e5559;\r\n  }\r\n  60% {\r\n    color: #ffffff;\r\n  }\r\n  81% {\r\n    color: #4e5559;\r\n  }\r\n  90% {\r\n    color: #ffffff;\r\n  }\r\n}\r\n\r\n@keyframes colorText{\r\n  21% {\r\n    color: #4e5559;\r\n  }\r\n  30% {\r\n    color: #ffffff;\r\n  }\r\n  51% {\r\n    color: #4e5559;\r\n  }\r\n  60% {\r\n    color: #ffffff;\r\n  }\r\n  81% {\r\n    color: #4e5559;\r\n  }\r\n  90% {\r\n    color: #ffffff;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes trackBallSlide{\r\n  0%{\r\n    opacity: 1;\r\n    transform: scale(1) translateY(-1.5vmin);\r\n  }\r\n  6%{\r\n    opacity: 1;\r\n    transform: scale(0.9) translateY(1vmin);\r\n  }\r\n  14%{\r\n    opacity: 0;\r\n    transform: scale(0.4) translateY(3vmin);\r\n  }\r\n  15%, 19%{\r\n    opacity: 0;\r\n    transform: scale(0.4) translateY(-1.5vmin);\r\n  }\r\n  28%, 29.99%{\r\n    opacity: 1;\r\n    transform: scale(1) translateY(-1.5vmin);\r\n  }\r\n  30%{\r\n    opacity: 1;\r\n    transform: scale(1) translateY(-1.5vmin);\r\n  }\r\n  36%{\r\n    opacity: 1;\r\n    transform: scale(0.9) translateY(1vmin);\r\n  }\r\n  44%{\r\n    opacity: 0;\r\n    transform: scale(0.4) translateY(3vmin);\r\n  }\r\n  45%, 49%{\r\n    opacity: 0;\r\n    transform: scale(0.4) translateY(-1.5vmin);\r\n  }\r\n  58%, 59.99%{\r\n    opacity: 1;\r\n    transform: scale(1) translateY(-1.5vmin);\r\n  }\r\n  60%{\r\n    opacity: 1;\r\n    transform: scale(0.9) translateY(-1.5vmin);\r\n  }\r\n  66%{\r\n    opacity: 1;\r\n    transform: scale(0.9) translateY(1vmin);\r\n  }\r\n  74%{\r\n    opacity: 0;\r\n    transform: scale(0.4) translateY(3vmin);\r\n  }\r\n  75%, 79%{\r\n    opacity: 0;\r\n    transform: scale(0.4) translateY(-1.5vmin);\r\n  }\r\n  88%, 100%{\r\n    opacity: 1;\r\n    transform: scale(1) translateY(-1.5vmin);\r\n  }\r\n}\r\n\r\n@keyframes trackBallSlide{\r\n  0%{\r\n    opacity: 1;\r\n    transform: scale(1) translateY(-1.5vmin);\r\n  }\r\n  6%{\r\n    opacity: 1;\r\n    transform: scale(0.9) translateY(1vmin);\r\n  }\r\n  14%{\r\n    opacity: 0;\r\n    transform: scale(0.4) translateY(3vmin);\r\n  }\r\n  15%, 19%{\r\n    opacity: 0;\r\n    transform: scale(0.4) translateY(-1.5vmin);\r\n  }\r\n  28%, 29.99%{\r\n    opacity: 1;\r\n    transform: scale(1) translateY(-1.5vmin);\r\n  }\r\n  30%{\r\n    opacity: 1;\r\n    transform: scale(1) translateY(-1.5vmin);\r\n  }\r\n  36%{\r\n    opacity: 1;\r\n    transform: scale(0.9) translateY(1vmin);\r\n  }\r\n  44%{\r\n    opacity: 0;\r\n    transform: scale(0.4) translateY(3vmin);\r\n  }\r\n  45%, 49%{\r\n    opacity: 0;\r\n    transform: scale(0.4) translateY(-1.5vmin);\r\n  }\r\n  58%, 59.99%{\r\n    opacity: 1;\r\n    transform: scale(1) translateY(-1.5vmin);\r\n  }\r\n  60%{\r\n    opacity: 1;\r\n    transform: scale(0.9) translateY(-1.5vmin);\r\n  }\r\n  66%{\r\n    opacity: 1;\r\n    transform: scale(0.9) translateY(1vmin);\r\n  }\r\n  74%{\r\n    opacity: 0;\r\n    transform: scale(0.4) translateY(3vmin);\r\n  }\r\n  75%, 79%{\r\n    opacity: 0;\r\n    transform: scale(0.4) translateY(-1.5vmin);\r\n  }\r\n  88%, 100%{\r\n    opacity: 1;\r\n    transform: scale(1) translateY(-1.5vmin);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes nudgeMouse{\r\n  0%{\r\n    transform: translateY(0);\r\n  }\r\n  20%{\r\n    transform: translateY(2vmin);\r\n  }\r\n  30%{\r\n    transform: translateY(0);\r\n  }\r\n  50%{\r\n    transform: translateY(2vmin);\r\n  }\r\n  60%{\r\n    transform: translateY(0);\r\n  }\r\n  80%{\r\n    transform: translateY(2vmin);\r\n  }\r\n  90%{\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes nudgeMouse{\r\n  0%{\r\n    transform: translateY(0);\r\n  }\r\n  20%{\r\n    transform: translateY(2vmin);\r\n  }\r\n  30%{\r\n    transform: translateY(0);\r\n  }\r\n  50%{\r\n    transform: translateY(2vmin);\r\n  }\r\n  60%{\r\n    transform: translateY(0);\r\n  }\r\n  80%{\r\n    transform: translateY(2vmin);\r\n  }\r\n  90%{\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes nudgeText {\r\n  0%{\r\n    transform: translateY(0);\r\n  }\r\n  20%{\r\n    transform: translateY(1vmin);\r\n  }\r\n  30%{\r\n    transform: translateY(0);\r\n  }\r\n  50%{\r\n    transform: translateY(1vmin);\r\n  }\r\n  60%{\r\n    transform: translateY(0);\r\n  }\r\n  80%{\r\n    transform: translateY(1vmin);\r\n  }\r\n  90%{\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes nudgeText {\r\n  0%{\r\n    transform: translateY(0);\r\n  }\r\n  20%{\r\n    transform: translateY(1vmin);\r\n  }\r\n  30%{\r\n    transform: translateY(0);\r\n  }\r\n  50%{\r\n    transform: translateY(1vmin);\r\n  }\r\n  60%{\r\n    transform: translateY(0);\r\n  }\r\n  80%{\r\n    transform: translateY(1vmin);\r\n  }\r\n  90%{\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCOzs7O0FBSUY7O0FBRUE7RUFDRSxvQ0FBZ0Q7RUFDaEQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLDhEQUE4RDtFQUM5RCxzREFBc0Q7RUFDdEQsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUix1Q0FBK0I7VUFBL0IsK0JBQStCO0VBQy9CLFVBQVU7RUFDViw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHFDQUE2QjtVQUE3Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQVJBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDBEQUEwRDtFQUMxRCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxRQUFRO0FBQ1Y7O0FBRUE7RUFD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aEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsVUFBVTtJQUNWLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsVUFBVTtJQUNWLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsVUFBVTtJQUNWLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsVUFBVTtJQUNWLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsVUFBVTtJQUNWLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsVUFBVTtJQUNWLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsVUFBVTtJQUNWLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsVUFBVTtJQUNWLHdDQUF3QztFQUMxQztBQUNGOztBQTdEQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsVUFBVTtJQUNWLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsVUFBVTtJQUNWLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsVUFBVTtJQUNWLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsVUFBVTtJQUNWLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsVUFBVTtJQUNWLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsVUFBVTtJQUNWLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsVUFBVTtJQUNWLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsVUFBVTtJQUNWLHdDQUF3QztFQUMxQztBQUNGOztBQUNBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUF0QkE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUF0QkE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjSG9tZVJvb3QsIC5Ib21lQmFja2dyb3VuZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuI0hvbWVSb290IC5Ib21lQmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNTQsIDE4LCAxNzksIDEpO1xyXG59XHJcblxyXG4jSG9tZVJvb3Qge1xyXG4gIC8vY3Vyc29yOiBub25lO1xyXG4gIC0tY3Vyc29yWDogNTB2dztcclxuICAtLWN1cnNvclk6IDUwdmg7XHJcbiAgei1pbmRleDogPS0xMDtcclxufVxyXG5cclxuI0hvbWVSb290OmJlZm9yZSB7XHJcbiAgei1pbmRleDogPS0xMDtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgMTB2bWF4IGF0IHZhcigtLWN1cnNvclgpIHZhcigtLWN1cnNvclkpLFxyXG4gICAgICByZ2JhKDI1MCwgMjUwLCAyNTAsIDApIDAlLFxyXG4gICAgICByZ2JhKDI1MCwgMjUwLCAyNTAsIC41KSA2MCUsXHJcbiAgICAgIHJnYmEoMjUwLCAyNTAsIDI1MCwgMSkgMTAwJSlcclxufVxyXG5cclxuI0hvbWVSb290IC5maXJzdFBhZ2VNYWluIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+c3JjL2Fzc2V0cy9Ib21lL0hlYXhhZ29uLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI0hvbWVSb290IC5wYWdlVXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAlO1xyXG59XHJcblxyXG4jSG9tZVJvb3QgLmxhcHRvcENvbnRhaW5lciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNIb21lUm9vdCAubGFwdG9wQ29udGFpbmVyICNsYXB0b3Age1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygxMXB4IDExcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMikpO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMTFweCAxMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAycHg7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGxhcHRvcEFuaW1hdGlvbjtcclxuICByaWdodDogMHB4O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGFwdG9wQW5pbWF0aW9uIHtcclxuICBmcm9tIHtcclxuICAgIHJpZ2h0OiAyMDBweDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4jSG9tZVJvb3QgLnRleHRDb250YWluZXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jSG9tZVJvb3QgLnRleHRDb250YWluZXJUb3Age1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI0hvbWVSb290IC50ZXh0Q29udGFpbmVyIC50ZXh0Q29udGFpbmVyVG9wICNIZWxsb1RleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBkYW5jaW5nLWZvbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qZmlsdGVyOiBkcm9wLXNoYWRvdygyMXB4IDIxcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMikpOyovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDR2dztcclxuICB0b3A6IDYwJTtcclxufVxyXG5cclxuI0hvbWVSb290IC50ZXh0Q29udGFpbmVyIC50ZXh0Q29udGFpbmVyVG9wICNIZWxsb1RleHQgLmhlbGxvTGV0dGVycyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbn1cclxuXHJcbiNIb21lUm9vdCAudGV4dENvbnRhaW5lciAudGV4dENvbnRhaW5lck1JZGRsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKkxvZ29Dc3NCZWdpbiovXHJcbiNIb21lUm9vdCAjTEFsb2dvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jSG9tZVJvb3QgI0xBIHtcclxuICAvKmZpbHRlcjogZHJvcC1zaGFkb3coMjFweCAyMXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpKTsqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBsYUFuaW1hdGUge1xyXG4gIDEwMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4jSG9tZVJvb3QgI0xQYXRoIHtcclxuICBzdHJva2UtZGFzaGFycmF5OiAxMDAwO1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xyXG4gIGFuaW1hdGlvbjogbGFBbmltYXRlIDFzIGxpbmVhciBmb3J3YXJkcyAxcztcclxufVxyXG5cclxuI0hvbWVSb290ICNBUGF0aDEge1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDE1MDA7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE1MDA7XHJcbiAgYW5pbWF0aW9uOiBsYUFuaW1hdGUgMXMgbGluZWFyIGZvcndhcmRzIDEuOHM7XHJcbn1cclxuXHJcbiNIb21lUm9vdCAjQVBhdGgyIHtcclxuICBzdHJva2UtZGFzaGFycmF5OiAxMDAwO1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xyXG4gIGFuaW1hdGlvbjogbGFBbmltYXRlIDEuOHMgbGluZWFyIGZvcndhcmRzIDIuNXM7XHJcbn1cclxuXHJcbiNIb21lUm9vdCAjQVBhdGgzIHtcclxuICBzdHJva2UtZGFzaGFycmF5OiAxMDAwO1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xyXG4gIGFuaW1hdGlvbjogbGFBbmltYXRlIDNzIGxpbmVhciBmb3J3YXJkcyAzcztcclxufVxyXG5cclxuLypMb2dvQ1NTRW5kKi9cclxuI0hvbWVSb290IC50ZXh0Q29udGFpbmVyIC50ZXh0Q29udGFpbmVyQm90dG9tIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNIb21lUm9vdCAudGV4dENvbnRhaW5lciAudGV4dENvbnRhaW5lckJvdHRvbSAjV2VsY29tZVRleHQsICNXZWxjb21lVGV4dE1vYmlsZTEsICNXZWxjb21lVGV4dE1vYmlsZTIge1xyXG4gIGZvbnQtZmFtaWx5OiBkYW5jaW5nLWZvbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygyMXB4IDIxcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMikpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogNHZ3O1xyXG4gIHRvcDogMzAlO1xyXG59XHJcblxyXG4jSG9tZVJvb3QgLnRleHRDb250YWluZXIgLnRleHRDb250YWluZXJCb3R0b20gI1dlbGNvbWVUZXh0LCAjV2VsY29tZVRleHRNb2JpbGUxLCAjV2VsY29tZVRleHRNb2JpbGUyIC53ZWxjb21lTGV0dGVycyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbn1cclxuXHJcbiNIb21lUm9vdCAubm90ZXBhZFBlbkNvbnRhaW5lciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNIb21lUm9vdCAubm90ZXBhZFBlbkNvbnRhaW5lciAjbm90ZXBhZCB7XHJcbiAgd2lkdGg6IDY4JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDExcHggMTFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxMXB4IDExcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMikpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDQwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBub3RlcGFkQW5pbWF0aW9uO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBub3RlcGFkQW5pbWF0aW9uIHtcclxuICBmcm9tIHtcclxuICAgIHJpZ2h0OiAtMjAwcHg7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICByaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbiNIb21lUm9vdCAubm90cGFkQ29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwJTtcclxufVxyXG5cclxuI0hvbWVSb290IC5wZW5Db250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4jSG9tZVJvb3QgI3BlbnMge1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDExcHggMTFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxMXB4IDExcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMikpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbmltYXRpb24tbmFtZTogcGVuQW5pbWF0aW9uO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcGVuQW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMTAwcHgpIHRyYW5zbGF0ZXkoNDBweCkgcm90YXRlKDkwZGVnKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDBweCkgdHJhbnNsYXRleSgwcHgpIHJvdGF0ZSg5MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4jSG9tZVJvb3QgLnBhZ2VMb3dlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbiNIb21lUm9vdCAuZ2xhc3Nlc0NvbnRhaW5lciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNIb21lUm9vdCAuZ2xhc3Nlc0NvbnRhaW5lciAjZ2xhc3NlcyB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMTFweCAxMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpKTtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDExcHggMTFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBnbGFzc2VzQW5pbWF0aW9uO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRvcDogMTUlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBnbGFzc2VzQW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTEwMHB4KSB0cmFuc2xhdGV5KDYwcHgpXHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgwcHgpIHRyYW5zbGF0ZXkoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbiNIb21lUm9vdCAudGFiQ29udGFpbmVyIHtcclxuICAtLXRhYkJvdHRvbTogLTI1MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jSG9tZVJvb3QgI3RhYklEIHtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI0hvbWVSb290IC50YWJDb250YWluZXIgLnRhYiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCUgYXV0bztcclxuICBib3R0b206IHZhcigtLXRhYkJvdHRvbSk7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBhbmltYXRpb24tbmFtZTogdGFiQW5pbWF0aW9uO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRhYkFuaW1hdGlvbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBib3R0b206IC0zNTBweDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGJvdHRvbTogdmFyKC0tdGFiQm90dG9tKTtcclxuICB9XHJcbn1cclxuXHJcbiNIb21lUm9vdCAudGFiQm9yZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxJSAxJSAwJSAxJTtcclxuICBib3gtc2hhZG93OiAxMXB4IDExcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMjVweCAyNXB4O1xyXG4gIGJvcmRlci13aWR0aDogMnB4IDJweCAycHggMnB4O1xyXG4gIGJvcmRlcjogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjREFBNTIwO1xyXG59XHJcblxyXG4jSG9tZVJvb3QgLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGhlaWdodDogNTUwcHg7XHJcbn1cclxuXHJcbiNIb21lUm9vdCAuZG90IHtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Ib21lL0NhbWVyYS5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAxNXB4IDQ4JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNIb21lUm9vdCAuYmlnQ2lyY2xlIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMTVweCA0NCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0RBQTUyMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNIb21lUm9vdCAubW9iaWxlQ29udGFpbmVyIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjUlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI0hvbWVSb290IC5tb2JpbGVDb250YWluZXIgI21vYmlsZSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMTFweCAxMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpKTtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDExcHggMTFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjUlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBtb2JpbGVBbmltYXRpb247XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vYmlsZUFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KDEwMHB4KSB0cmFuc2xhdGV5KDQwcHgpXHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgwcHgpIHRyYW5zbGF0ZXkoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbiNIb21lUm9vdCAuQkdibHVyIHtcclxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xyXG4gIC1tb3otZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgLW8tZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgLW1zLWZpbHRlcjogYmx1cig1cHgpO1xyXG59XHJcblxyXG4vKiBTY3JvbGwgU3R5bGVzICovXHJcblxyXG4jc2Nyb2xsTW9yZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjg4JTtcclxuICBsZWZ0OjQ5JTtcclxuICB6LWluZGV4OiAxMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYW5pbWF0aW9uOiA5cyBmYWRlSW47XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgb3BhY2l0eTogMC41XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICA5OSUge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG59XHJcblxyXG4ubW91c2V7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDMuNXZtaW47XHJcbiAgaGVpZ2h0OiA2LjV2bWluO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjNGU1NTU5IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCA1MCUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ZmZmZmZiA1MCUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2ZmZmZmZiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBhbmltYXRpb246IGNvbG9yU2xpZGUgNXMgbGluZWFyIGluZmluaXRlLFxyXG4gICAgICAgICAgICAgbnVkZ2VNb3VzZSA1cyBlYXNlLW91dCBpbmZpbml0ZTtcclxufVxyXG4ubW91c2U6YmVmb3JlLFxyXG4ubW91c2U6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLm1vdXNlOmJlZm9yZXtcclxuICB3aWR0aDogM3ZtaW47XHJcbiAgaGVpZ2h0OiA2dm1pbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMzNhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcbi5tb3VzZTphZnRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHdpZHRoOiAxdm1pbjtcclxuICBoZWlnaHQ6IDF2bWluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYW5pbWF0aW9uOiB0cmFja0JhbGxTbGlkZSA1cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuLnRleHR7XHJcbiAgZm9udC1mYW1pbHk6IENhYmluO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGFuaW1hdGlvbjogY29sb3JUZXh0IDVzIGVhc2Utb3V0IGluZmluaXRlLFxyXG4gICAgICAgICAgICAgbnVkZ2VUZXh0IDVzIGVhc2Utb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4vKiBBbmltYXRpb25zICovXHJcbkBrZXlmcmFtZXMgY29sb3JTbGlkZXtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAxMDAlO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XHJcbiAgfVxyXG4gIDIxJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU1NTU5O1xyXG4gIH1cclxuICAyOS45OSUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xyXG4gIH1cclxuICAzMCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlNTU1OTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDEwMCU7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcclxuICB9XHJcbiAgNTElIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTU1NTk7XHJcbiAgfVxyXG4gIDU5JSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU1NTU5O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMTAwJTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xyXG4gIH1cclxuICA4MSUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlNTU1OTtcclxuICB9XHJcbiAgOTAlLCAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNvbG9yVGV4dHtcclxuICAyMSUge1xyXG4gICAgY29sb3I6ICM0ZTU1NTk7XHJcbiAgfVxyXG4gIDMwJSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgNTElIHtcclxuICAgIGNvbG9yOiAjNGU1NTU5O1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIDgxJSB7XHJcbiAgICBjb2xvcjogIzRlNTU1OTtcclxuICB9XHJcbiAgOTAlIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0cmFja0JhbGxTbGlkZXtcclxuICAwJXtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoLTEuNXZtaW4pO1xyXG4gIH1cclxuICA2JXtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgdHJhbnNsYXRlWSgxdm1pbik7XHJcbiAgfVxyXG4gIDE0JXtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCkgdHJhbnNsYXRlWSgzdm1pbik7XHJcbiAgfVxyXG4gIDE1JSwgMTkle1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KSB0cmFuc2xhdGVZKC0xLjV2bWluKTtcclxuICB9XHJcbiAgMjglLCAyOS45OSV7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKC0xLjV2bWluKTtcclxuICB9XHJcbiAgMzAle1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgtMS41dm1pbik7XHJcbiAgfVxyXG4gIDM2JXtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgdHJhbnNsYXRlWSgxdm1pbik7XHJcbiAgfVxyXG4gIDQ0JXtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCkgdHJhbnNsYXRlWSgzdm1pbik7XHJcbiAgfVxyXG4gIDQ1JSwgNDkle1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KSB0cmFuc2xhdGVZKC0xLjV2bWluKTtcclxuICB9XHJcbiAgNTglLCA1OS45OSV7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKC0xLjV2bWluKTtcclxuICB9XHJcbiAgNjAle1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSB0cmFuc2xhdGVZKC0xLjV2bWluKTtcclxuICB9XHJcbiAgNjYle1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSB0cmFuc2xhdGVZKDF2bWluKTtcclxuICB9XHJcbiAgNzQle1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KSB0cmFuc2xhdGVZKDN2bWluKTtcclxuICB9XHJcbiAgNzUlLCA3OSV7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpIHRyYW5zbGF0ZVkoLTEuNXZtaW4pO1xyXG4gIH1cclxuICA4OCUsIDEwMCV7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKC0xLjV2bWluKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBudWRnZU1vdXNle1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICAyMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZtaW4pO1xyXG4gIH1cclxuICAzMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIDUwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydm1pbik7XHJcbiAgfVxyXG4gIDYwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgODAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2bWluKTtcclxuICB9XHJcbiAgOTAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIG51ZGdlVGV4dCB7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIDIwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxdm1pbik7XHJcbiAgfVxyXG4gIDMwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgNTAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDF2bWluKTtcclxuICB9XHJcbiAgNjAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICA4MCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXZtaW4pO1xyXG4gIH1cclxuICA5MCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */", "/*\r\n  ##Device = Desktops\r\n  ##Screen = 1281px to higher resolution desktops\r\n*/\r\n@media (min-width: 1281px) {}\r\n/*\r\n  ##Device = Laptops, Desktops\r\n  ##Screen = B/w 1025px to 1280px\r\n*/\r\n@media (min-width: 1025px) and (max-width: 1280px) {}\r\n/*\r\n  ##Device = Tablets, Ipads (portrait)\r\n  ##Screen = B/w 768px to 1024px\r\n*/\r\n@media\r\nonly screen and (max-device-width: 1024px), only screen and (max-width: 1024px)\r\nand (orientation : landscape) {\r\n  #HomeRoot .textContainer .textContainerTop #HelloText {\r\n    font-family: dancing-font;\r\n    position: relative;\r\n    width: 100%;\r\n    font-weight: 900;\r\n\ttop: 70%;\r\n    font-size: 6vw;\r\n  }\r\n\r\n  #HomeRoot .textContainer .textContainerBottom #WelcomeText, #WelcomeTextMobile1, #WelcomeTextMobile2 {\r\n    font-family: dancing-font;\r\n    font-weight: 900;\r\n    position: relative;\r\n    -webkit-filter: drop-shadow(21px 21px 20px rgba(0, 0, 0, 0.2));\r\n    filter: drop-shadow(21px 21px 20px rgba(0, 0, 0, 0.2));\r\n    width: 100%;\r\n    top: 15%;\r\n\tfont-size: 6vw;\r\n  }\r\n\r\n  #HomeRoot .tabContainer .tab {\r\n    margin: 0% 16%;\r\n    width: 70%;\r\n  }\r\n}\r\n/*\r\n  ##Device = Tablets, Ipads (landscape)\r\n  ##Screen = B/w 768px to 1024px\r\n*/\r\n@media\r\nonly screen and (min-device-width: 320px) and (max-device-width: 768px), only screen and (min-width: 320px) and (max-width: 768px) {\r\n\r\n#HomeRoot  .HomeBackground {\r\n  \tbackground: none;\r\n  }\r\n\r\n}\r\n/*\r\n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\r\n  ##Screen = B/w 481px to 767px\r\n*/\r\n@media\r\nonly screen and (min-device-width: 426px) and (max-device-width: 767px), only screen and (min-width: 426px) and (max-width: 767px) {\r\n  #HomeRoot .textContainer .textContainerBottom #WelcomeText, #WelcomeTextMobile1, #WelcomeTextMobile2 {\r\n    font-family: dancing-font;\r\n    font-weight: 900;\r\n    position: relative;\r\n    -webkit-filter: drop-shadow(21px 21px 20px rgba(0, 0, 0, 0.2));\r\n    filter: drop-shadow(21px 21px 20px rgba(0, 0, 0, 0.2));\r\n    width: 100%;\r\n    top: 15%;\r\n  }\r\n}\r\n/*\r\n  ##Device = Most of the Smartphones Mobiles (Portrait)\r\n  ##Screen = B/w 320px to 479px\r\n*/\r\n@media\r\nonly screen and (min-device-width: 320px) and (max-device-width: 425px), only screen and (min-width: 320px) and (max-width: 425px)\r\nand (orientation : portrait) {\r\n  #HomeRoot .MobileFirstPageMainMobile {\r\n    background-image: url('/Leo/assets/Home/Heaxagon.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  #HomeRoot .MobFirst, .MobSecond, .MobThird, .MobFourth {\r\n    width: 100%;\r\n    height: 25%;\r\n  }\r\n\r\n  #HomeRoot .MobLaptopContainer {\r\n    float: left;\r\n    width: 10%;\r\n  }\r\n\r\n  #HomeRoot .MobNotpadContainer {\r\n    float: right;\r\n    width: 10%;\r\n  }\r\n\r\n  #HomeRoot .notepadPenContainer {\r\n    float: right;\r\n  }\r\n\r\n  #HomeRoot .laptopContainer #laptop {\r\n    width: 90%;\r\n    height: 100%;\r\n    top: 0px;\r\n    position: relative;\r\n  }\r\n\r\n  #HomeRoot .notepadPenContainer #notepad {\r\n    position: relative;\r\n    top: 0px;\r\n  }\r\n\r\n  #HomeRoot .textContainer{\r\n    width:100%\r\n  }\r\n  #HomeRoot .textContainerTop, .textContainer .textContainerMIddle, .textContainer .textContainerBottom{\r\n    height:25%;\r\n  }\r\n\r\n\t#HomeRoot .textContainer .textContainerMIddle{\r\n  height:50%;\r\n}\r\n\r\n\r\n\r\n  #HomeRoot .textContainer .textContainerTop #HelloText{\r\n    position: relative;\r\n    top:0px;\r\n  }\r\n\r\n  #HomeRoot .textContainer .textContainerBottom #WelcomeText, #WelcomeTextMobile1, #WelcomeTextMobile2 {\r\n    font-size: 8vw;\r\n    top: 50%;\r\n  }\r\n\r\n  #HomeRoot .textContainer .textContainerTop #HelloText {\r\n    font-size: 8vw;\r\n    top: 0px;\r\n  }\r\n\r\n  #HomeRoot .mobileContainer{\r\n    float: right;\r\n  }\r\n\r\n  #HomeRoot .tabContainer{\r\n    --tabBottom : -150px;\r\n    float: none;\r\n    width: 100%;\r\n  }\r\n\r\n  #HomeRoot .tabContainer .tab{\r\n    margin: 0% 20%;\r\n    bottom: var(--tabBottom);\r\n    width: 60%;\r\n  }\r\n\r\n  #scrollMore\r\n  {\r\n    top: 76%;\r\n    left: 43%;\r\n  }\r\n\r\n  .text{\r\n    animation-direction: reverse;\r\n  }\r\n\r\n  .mouse, .mouse::before{\r\n    width: 100%;\r\n    height: 0px;\r\n  }\r\n\r\n  .mouse::after{\r\n    background-color: #000000;\r\n    width: 2.5vmin;\r\n    height: 2.5vmin;\r\n    animation-direction: reverse;\r\n  }\r\n\r\n  @-webkit-keyframes trackBallSlide{\r\n    0%{\r\n      opacity: 1;\r\n      transform: scale(1) translateY(-6vmin);\r\n    }\r\n    6%{\r\n      opacity: 1;\r\n      transform: scale(0.9) translateY(1vmin);\r\n    }\r\n    14%{\r\n      opacity: 0;\r\n      transform: scale(0.4) translateY(6vmin);\r\n    }\r\n    15%, 19%{\r\n      opacity: 0;\r\n      transform: scale(0.4) translateY(-6vmin);\r\n    }\r\n    28%, 29.99%{\r\n      opacity: 1;\r\n      transform: scale(1) translateY(-6vmin);\r\n    }\r\n    30%{\r\n      opacity: 1;\r\n      transform: scale(1) translateY(-6vmin);\r\n    }\r\n    36%{\r\n      opacity: 1;\r\n      transform: scale(0.9) translateY(1vmin);\r\n    }\r\n    44%{\r\n      opacity: 0;\r\n      transform: scale(0.4) translateY(6vmin);\r\n    }\r\n    45%, 49%{\r\n      opacity: 0;\r\n      transform: scale(0.4) translateY(-6vmin);\r\n    }\r\n    58%, 59.99%{\r\n      opacity: 1;\r\n      transform: scale(1) translateY(-6vmin);\r\n    }\r\n    60%{\r\n      opacity: 1;\r\n      transform: scale(0.9) translateY(-6vmin);\r\n    }\r\n    66%{\r\n      opacity: 1;\r\n      transform: scale(0.9) translateY(1vmin);\r\n    }\r\n    74%{\r\n      opacity: 0;\r\n      transform: scale(0.4) translateY(6vmin);\r\n    }\r\n    75%, 79%{\r\n      opacity: 0;\r\n      transform: scale(0.4) translateY(-6vmin);\r\n    }\r\n    88%, 100%{\r\n      opacity: 1;\r\n      transform: scale(1) translateY(-6vmin);\r\n    }\r\n  }\r\n\r\n  @keyframes trackBallSlide{\r\n    0%{\r\n      opacity: 1;\r\n      transform: scale(1) translateY(-6vmin);\r\n    }\r\n    6%{\r\n      opacity: 1;\r\n      transform: scale(0.9) translateY(1vmin);\r\n    }\r\n    14%{\r\n      opacity: 0;\r\n      transform: scale(0.4) translateY(6vmin);\r\n    }\r\n    15%, 19%{\r\n      opacity: 0;\r\n      transform: scale(0.4) translateY(-6vmin);\r\n    }\r\n    28%, 29.99%{\r\n      opacity: 1;\r\n      transform: scale(1) translateY(-6vmin);\r\n    }\r\n    30%{\r\n      opacity: 1;\r\n      transform: scale(1) translateY(-6vmin);\r\n    }\r\n    36%{\r\n      opacity: 1;\r\n      transform: scale(0.9) translateY(1vmin);\r\n    }\r\n    44%{\r\n      opacity: 0;\r\n      transform: scale(0.4) translateY(6vmin);\r\n    }\r\n    45%, 49%{\r\n      opacity: 0;\r\n      transform: scale(0.4) translateY(-6vmin);\r\n    }\r\n    58%, 59.99%{\r\n      opacity: 1;\r\n      transform: scale(1) translateY(-6vmin);\r\n    }\r\n    60%{\r\n      opacity: 1;\r\n      transform: scale(0.9) translateY(-6vmin);\r\n    }\r\n    66%{\r\n      opacity: 1;\r\n      transform: scale(0.9) translateY(1vmin);\r\n    }\r\n    74%{\r\n      opacity: 0;\r\n      transform: scale(0.4) translateY(6vmin);\r\n    }\r\n    75%, 79%{\r\n      opacity: 0;\r\n      transform: scale(0.4) translateY(-6vmin);\r\n    }\r\n    88%, 100%{\r\n      opacity: 1;\r\n      transform: scale(1) translateY(-6vmin);\r\n    }\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5yZXNwb25zaXZlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0NBR0M7QUFDRCw0QkFBNEI7QUFFNUI7OztDQUdDO0FBQ0Qsb0RBQW9EO0FBRXBEOzs7Q0FHQztBQUNEOzs7RUFJRTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtDQUNuQixRQUFRO0lBQ0wsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDhEQUE4RDtJQUM5RCxzREFBc0Q7SUFDdEQsV0FBVztJQUNYLFFBQVE7Q0FDWCxjQUFjO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0FBQ0Y7QUFFQTs7O0NBR0M7QUFDRDs7O0FBSUE7R0FDRyxnQkFBZ0I7RUFDakI7O0FBRUY7QUFFQTs7O0NBR0M7QUFDRDs7RUFHRTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDhEQUE4RDtJQUM5RCxzREFBc0Q7SUFDdEQsV0FBVztJQUNYLFFBQVE7RUFDVjtBQUNGO0FBRUE7OztDQUdDO0FBQ0Q7OztFQUlFO0lBQ0Usc0RBQWtEO0lBQ2xELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFFBQVE7SUFDUixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtFQUNWOztFQUVBO0lBQ0U7RUFDRjtFQUNBO0lBQ0UsVUFBVTtFQUNaOztDQUVEO0VBQ0MsVUFBVTtBQUNaOzs7O0VBSUU7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztFQUNUOztFQUVBO0lBQ0UsY0FBYztJQUNkLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaOztFQUVBOztJQUVFLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1Ysc0NBQXNDO0lBQ3hDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUNBQXVDO0lBQ3pDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUNBQXVDO0lBQ3pDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysd0NBQXdDO0lBQzFDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysc0NBQXNDO0lBQ3hDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysc0NBQXNDO0lBQ3hDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUNBQXVDO0lBQ3pDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUNBQXVDO0lBQ3pDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysd0NBQXdDO0lBQzFDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysc0NBQXNDO0lBQ3hDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysd0NBQXdDO0lBQzFDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUNBQXVDO0lBQ3pDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUNBQXVDO0lBQ3pDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysd0NBQXdDO0lBQzFDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysc0NBQXNDO0lBQ3hDO0VBQ0Y7O0VBN0RBO0lBQ0U7TUFDRSxVQUFVO01BQ1Ysc0NBQXNDO0lBQ3hDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUNBQXVDO0lBQ3pDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUNBQXVDO0lBQ3pDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysd0NBQXdDO0lBQzFDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysc0NBQXNDO0lBQ3hDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysc0NBQXNDO0lBQ3hDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUNBQXVDO0lBQ3pDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUNBQXVDO0lBQ3pDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysd0NBQXdDO0lBQzFDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysc0NBQXNDO0lBQ3hDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysd0NBQXdDO0lBQzFDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUNBQXVDO0lBQ3pDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsdUNBQXVDO0lBQ3pDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysd0NBQXdDO0lBQzFDO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysc0NBQXNDO0lBQ3hDO0VBQ0Y7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnJlc3BvbnNpdmUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAjI0RldmljZSA9IERlc2t0b3BzXHJcbiAgIyNTY3JlZW4gPSAxMjgxcHggdG8gaGlnaGVyIHJlc29sdXRpb24gZGVza3RvcHNcclxuKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyODFweCkge31cclxuXHJcbi8qXHJcbiAgIyNEZXZpY2UgPSBMYXB0b3BzLCBEZXNrdG9wc1xyXG4gICMjU2NyZWVuID0gQi93IDEwMjVweCB0byAxMjgwcHhcclxuKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge31cclxuXHJcbi8qXHJcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpXHJcbiAgIyNTY3JlZW4gPSBCL3cgNzY4cHggdG8gMTAyNHB4XHJcbiovXHJcbkBtZWRpYVxyXG5vbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCksXHJcbm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpXHJcbmFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpIHtcclxuICAjSG9tZVJvb3QgLnRleHRDb250YWluZXIgLnRleHRDb250YWluZXJUb3AgI0hlbGxvVGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogZGFuY2luZy1mb250O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG5cdHRvcDogNzAlO1xyXG4gICAgZm9udC1zaXplOiA2dnc7XHJcbiAgfVxyXG5cclxuICAjSG9tZVJvb3QgLnRleHRDb250YWluZXIgLnRleHRDb250YWluZXJCb3R0b20gI1dlbGNvbWVUZXh0LCAjV2VsY29tZVRleHRNb2JpbGUxLCAjV2VsY29tZVRleHRNb2JpbGUyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBkYW5jaW5nLWZvbnQ7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDIxcHggMjFweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDIxcHggMjFweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMTUlO1xyXG5cdGZvbnQtc2l6ZTogNnZ3O1xyXG4gIH1cclxuXHJcbiAgI0hvbWVSb290IC50YWJDb250YWluZXIgLnRhYiB7XHJcbiAgICBtYXJnaW46IDAlIDE2JTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gICMjRGV2aWNlID0gVGFibGV0cywgSXBhZHMgKGxhbmRzY2FwZSlcclxuICAjI1NjcmVlbiA9IEIvdyA3NjhweCB0byAxMDI0cHhcclxuKi9cclxuQG1lZGlhXHJcbm9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzY4cHgpLFxyXG5vbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuI0hvbWVSb290ICAuSG9tZUJhY2tncm91bmQge1xyXG4gIFx0YmFja2dyb3VuZDogbm9uZTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKlxyXG4gICMjRGV2aWNlID0gTG93IFJlc29sdXRpb24gVGFibGV0cywgTW9iaWxlcyAoTGFuZHNjYXBlKVxyXG4gICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XHJcbiovXHJcbkBtZWRpYVxyXG5vbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQyNnB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDc2N3B4KSxcclxub25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAjSG9tZVJvb3QgLnRleHRDb250YWluZXIgLnRleHRDb250YWluZXJCb3R0b20gI1dlbGNvbWVUZXh0LCAjV2VsY29tZVRleHRNb2JpbGUxLCAjV2VsY29tZVRleHRNb2JpbGUyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBkYW5jaW5nLWZvbnQ7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDIxcHggMjFweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDIxcHggMjFweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMTUlO1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuICAjI0RldmljZSA9IE1vc3Qgb2YgdGhlIFNtYXJ0cGhvbmVzIE1vYmlsZXMgKFBvcnRyYWl0KVxyXG4gICMjU2NyZWVuID0gQi93IDMyMHB4IHRvIDQ3OXB4XHJcbiovXHJcbkBtZWRpYVxyXG5vbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQyNXB4KSxcclxub25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpXHJcbmFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xyXG4gICNIb21lUm9vdCAuTW9iaWxlRmlyc3RQYWdlTWFpbk1vYmlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvSG9tZS9IZWF4YWdvbi5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjSG9tZVJvb3QgLk1vYkZpcnN0LCAuTW9iU2Vjb25kLCAuTW9iVGhpcmQsIC5Nb2JGb3VydGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICB9XHJcblxyXG4gICNIb21lUm9vdCAuTW9iTGFwdG9wQ29udGFpbmVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICB9XHJcblxyXG4gICNIb21lUm9vdCAuTW9iTm90cGFkQ29udGFpbmVyIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgfVxyXG5cclxuICAjSG9tZVJvb3QgLm5vdGVwYWRQZW5Db250YWluZXIge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgI0hvbWVSb290IC5sYXB0b3BDb250YWluZXIgI2xhcHRvcCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAjSG9tZVJvb3QgLm5vdGVwYWRQZW5Db250YWluZXIgI25vdGVwYWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgfVxyXG5cclxuICAjSG9tZVJvb3QgLnRleHRDb250YWluZXJ7XHJcbiAgICB3aWR0aDoxMDAlXHJcbiAgfVxyXG4gICNIb21lUm9vdCAudGV4dENvbnRhaW5lclRvcCwgLnRleHRDb250YWluZXIgLnRleHRDb250YWluZXJNSWRkbGUsIC50ZXh0Q29udGFpbmVyIC50ZXh0Q29udGFpbmVyQm90dG9te1xyXG4gICAgaGVpZ2h0OjI1JTtcclxuICB9XHJcblxyXG5cdCNIb21lUm9vdCAudGV4dENvbnRhaW5lciAudGV4dENvbnRhaW5lck1JZGRsZXtcclxuICBoZWlnaHQ6NTAlO1xyXG59XHJcblxyXG5cclxuXHJcbiAgI0hvbWVSb290IC50ZXh0Q29udGFpbmVyIC50ZXh0Q29udGFpbmVyVG9wICNIZWxsb1RleHR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6MHB4O1xyXG4gIH1cclxuXHJcbiAgI0hvbWVSb290IC50ZXh0Q29udGFpbmVyIC50ZXh0Q29udGFpbmVyQm90dG9tICNXZWxjb21lVGV4dCwgI1dlbGNvbWVUZXh0TW9iaWxlMSwgI1dlbGNvbWVUZXh0TW9iaWxlMiB7XHJcbiAgICBmb250LXNpemU6IDh2dztcclxuICAgIHRvcDogNTAlO1xyXG4gIH1cclxuXHJcbiAgI0hvbWVSb290IC50ZXh0Q29udGFpbmVyIC50ZXh0Q29udGFpbmVyVG9wICNIZWxsb1RleHQge1xyXG4gICAgZm9udC1zaXplOiA4dnc7XHJcbiAgICB0b3A6IDBweDtcclxuICB9XHJcblxyXG4gICNIb21lUm9vdCAubW9iaWxlQ29udGFpbmVye1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgI0hvbWVSb290IC50YWJDb250YWluZXJ7XHJcbiAgICAtLXRhYkJvdHRvbSA6IC0xNTBweDtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjSG9tZVJvb3QgLnRhYkNvbnRhaW5lciAudGFie1xyXG4gICAgbWFyZ2luOiAwJSAyMCU7XHJcbiAgICBib3R0b206IHZhcigtLXRhYkJvdHRvbSk7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuXHJcbiAgI3Njcm9sbE1vcmVcclxuICB7XHJcbiAgICB0b3A6IDc2JTtcclxuICAgIGxlZnQ6IDQzJTtcclxuICB9XHJcblxyXG4gIC50ZXh0e1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcclxuICB9XHJcblxyXG4gIC5tb3VzZSwgLm1vdXNlOjpiZWZvcmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1vdXNlOjphZnRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICB3aWR0aDogMi41dm1pbjtcclxuICAgIGhlaWdodDogMi41dm1pbjtcclxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHRyYWNrQmFsbFNsaWRle1xyXG4gICAgMCV7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgtNnZtaW4pO1xyXG4gICAgfVxyXG4gICAgNiV7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSB0cmFuc2xhdGVZKDF2bWluKTtcclxuICAgIH1cclxuICAgIDE0JXtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpIHRyYW5zbGF0ZVkoNnZtaW4pO1xyXG4gICAgfVxyXG4gICAgMTUlLCAxOSV7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KSB0cmFuc2xhdGVZKC02dm1pbik7XHJcbiAgICB9XHJcbiAgICAyOCUsIDI5Ljk5JXtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKC02dm1pbik7XHJcbiAgICB9XHJcbiAgICAzMCV7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgtNnZtaW4pO1xyXG4gICAgfVxyXG4gICAgMzYle1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgdHJhbnNsYXRlWSgxdm1pbik7XHJcbiAgICB9XHJcbiAgICA0NCV7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KSB0cmFuc2xhdGVZKDZ2bWluKTtcclxuICAgIH1cclxuICAgIDQ1JSwgNDkle1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCkgdHJhbnNsYXRlWSgtNnZtaW4pO1xyXG4gICAgfVxyXG4gICAgNTglLCA1OS45OSV7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgtNnZtaW4pO1xyXG4gICAgfVxyXG4gICAgNjAle1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgdHJhbnNsYXRlWSgtNnZtaW4pO1xyXG4gICAgfVxyXG4gICAgNjYle1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSkgdHJhbnNsYXRlWSgxdm1pbik7XHJcbiAgICB9XHJcbiAgICA3NCV7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KSB0cmFuc2xhdGVZKDZ2bWluKTtcclxuICAgIH1cclxuICAgIDc1JSwgNzkle1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCkgdHJhbnNsYXRlWSgtNnZtaW4pO1xyXG4gICAgfVxyXG4gICAgODglLCAxMDAle1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoLTZ2bWluKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css', './home.component.responsive.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        onMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousemove', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchmove', ['$event']]
        }],
        onOrientationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:orientationchange', ['$event']]
        }],
        onMousewheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousewheel', ['$event']]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }],
        handleTouch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchstart', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchend', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchcancel', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/navigation/navigation.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/navigation/navigation.component.ts ***!
    \****************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent(router) {
        _classCallCheck(this, NavigationComponent);

        this.router = router;
        this.menuOpen = false;
        this.NavPages = ['home', 'aboutme', 'timeline', 'contact'];
        this.PagesList = ['home', 'aboutme', 'timeline', 'contact'];
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.menu = document.querySelector('#menu').childNodes;
        }
      }, {
        key: "navigate",
        value: function navigate(pageName) {
          this.expand(true);
          this.router.navigate([pageName == 'home' ? '' : pageName]);
        }
      }, {
        key: "expand",
        value: function expand(menuToggle) {
          var _this7 = this;

          if (this.router.url.replace('/', '') === "") {
            this.NavPages = this.PagesList.filter(function (page) {
              return page !== "home";
            });
          } else {
            this.NavPages = this.PagesList.filter(function (page) {
              return page !== _this7.router.url.replace('/', '');
            });
          }

          var menuBtn = document.querySelector('.hamburger');

          if (!menuToggle) {
            menuBtn.classList.add('open');
            document.querySelector("#menu").style.transform = 'scale(1)';
            this.menu[0].style.transform = 'translate(10vmin,4.5vmin)';
            this.menu[1].style.transform = 'translateY(10vmin)';
            this.menu[2].style.transform = 'translate(-10vmin,4.5vmin)';
            this.menuOpen = true;
          } else {
            menuBtn.classList.remove('open');
            document.querySelector("#menu").style.transform = 'scale(0.9)';
            this.menu[0].style.transform = 'translate(0)';
            this.menu[1].style.transform = 'translateY(0)';
            this.menu[2].style.transform = 'translate(0)';
            this.menuOpen = false;
          }
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      decls: 12,
      vars: 9,
      consts: [["id", "navID"], [1, "container", 3, "click"], ["id", "toggle", 1, "toggle"], [1, "hamburger"], [1, "hamburgerButton"], ["id", "menu", 1, "menu"], [1, "item", 3, "click"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_1_listener() {
            return ctx.expand(ctx.menuOpen);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_6_listener() {
            return ctx.navigate(ctx.NavPages[2]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_8_listener() {
            return ctx.navigate(ctx.NavPages[1]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_10_listener() {
            return ctx.navigate(ctx.NavPages[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.NavPages[2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.NavPages[1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.NavPages[0]);
        }
      },
      styles: ["#navID {\r\n  position: relative;\r\n  z-index: 1;\r\n  padding: 0;\r\n}\r\n\r\n#navID .container, .menu {\r\n  height: 8vmin;\r\n      width: 10vmin;\r\n      position: absolute;\r\n      margin: 0 auto;\r\n          top: -3.9vmin;\r\n      bottom: 0;\r\n      left: 46%;\r\n      cursor: pointer;\r\n}\r\n\r\n#navID .menu {\r\n  z-index: -1;\r\n  transform: scale(0.9);\r\n}\r\n\r\n#navID .toggle {\r\n  height: 0;\r\n  width: 4.5vmin;\r\n  border-bottom: 4vmin solid #494d4e;\r\n  border-left: 2.5vmin solid transparent;\r\n  border-right: 2.5vmin solid transparent;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n#navID .toggle:before {\r\n  content: '';\r\n  height: 0;\r\n  width: 4.5vmin;\r\n  border-top: 4vmin solid #494d4e;\r\n  border-left: 2.5vmin solid transparent;\r\n  border-right: 2.5vmin solid transparent;\r\n  position: absolute;\r\n  top: 4vmin;\r\n  left: -2.5vmin;\r\n}\r\n\r\n#navID #add {\r\n  font-size: 6vmin;\r\n  color: white;\r\n  position: relative;\r\n  top: 2.7vmin;\r\n  right: 0.7vmin;\r\n  transition: .4s;\r\n}\r\n\r\n#navID .item {\r\n  height: 0;\r\n  width: 4.5vmin;\r\n  border-bottom: 4vmin solid #494d4e;\r\n  border-left: 2.5vmin solid transparent;\r\n  border-right: 2.5vmin solid transparent;\r\n  position: absolute;\r\n  top: 0;\r\n  transition: .5s;\r\n}\r\n\r\n#navID .item:before {\r\n  content: '';\r\n  height: 0;\r\n  width: 4.5vmin;\r\n  border-top: 4vmin solid #494d4e;\r\n  border-left: 2.5vmin solid transparent;\r\n  border-right: 2.5vmin solid transparent;\r\n  position: absolute;\r\n  top: 3.9vmin;\r\n  left: -2.5vmin;\r\n}\r\n\r\n#navID span {\r\n  position: relative;\r\n  top: 1.7vmin;\r\n}\r\n\r\n.home {\r\n  background-image: url('/Leo/assets/Navigation/Home.svg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n  height: 4vmin;\r\n  bottom: .5vmin;\r\n  display: block;\r\n}\r\n\r\n.aboutme {\r\n  background-image: url('/Leo/assets/Navigation/About.svg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n  height: 4vmin;\r\n  bottom: .5vmin;\r\n  display: block;\r\n}\r\n\r\n.timeline {\r\n  background-image: url('/Leo/assets/Navigation/Timeline.svg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n  height: 4vmin;\r\n  bottom: .5vmin;\r\n  display: block;\r\n}\r\n\r\n.contact {\r\n  background-image: url('/Leo/assets/Navigation/Contact.svg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n  right: .5vmin;\r\n  top: 0px;\r\n  height: 4vmin;\r\n  bottom: .5vmin;\r\n  display: block;\r\n}\r\n\r\n/* HAMBURGER */\r\n\r\n.hamburger {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 4vmin;\r\n  height: 4vmin;\r\n  cursor: pointer;\r\n  top: 3.6vmin;\r\n  left: 0.3vmin;\r\n  transition: all .5s ease-in-out;\r\n  /* border: 3px solid #fff; */\r\n}\r\n\r\n.hamburgerButton {\r\n  width: 4vmin;\r\n  height: .6vmin;\r\n  background: #fff;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 5px rgba(255, 101, 47, .2);\r\n  transition: all .5s ease-in-out;\r\n}\r\n\r\n.hamburgerButton::before,\r\n.hamburgerButton::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 4vmin;\r\n  height: .6vmin;\r\n  background: #fff;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 5px rgba(255, 101, 47, .2);\r\n  transition: all .5s ease-in-out;\r\n}\r\n\r\n.hamburgerButton::before {\r\n  transform: translateY(-1.2vmin);\r\n}\r\n\r\n.hamburgerButton::after {\r\n  transform: translateY(1.2vmin);\r\n}\r\n\r\n/* ANIMATION */\r\n\r\n.hamburger.open .hamburgerButton {\r\n  transform: translateX(-50px);\r\n  background: transparent;\r\n  box-shadow: none;\r\n}\r\n\r\n.hamburger.open .hamburgerButton::before {\r\n  transform: rotate(45deg) translate(35px, -35px);\r\n}\r\n\r\n.hamburger.open .hamburgerButton::after {\r\n  transform: rotate(-45deg) translate(35px, 35px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7TUFDVCxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLGNBQWM7VUFDVixhQUFhO01BQ2pCLFNBQVM7TUFDVCxTQUFTO01BQ1QsZUFBZTtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxzQ0FBc0M7RUFDdEMsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGNBQWM7RUFDZCwrQkFBK0I7RUFDL0Isc0NBQXNDO0VBQ3RDLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxzQ0FBc0M7RUFDdEMsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsY0FBYztFQUNkLCtCQUErQjtFQUMvQixzQ0FBc0M7RUFDdEMsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3REFBb0Q7RUFDcEQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseURBQXFEO0VBQ3JELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFDQTtFQUNFLDREQUF3RDtFQUN4RCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSwyREFBdUQ7RUFDdkQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFFBQVE7RUFDUixhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBQ0EsY0FBYzs7QUFDZDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLCtCQUErQjtFQUMvQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLCtCQUErQjtBQUNqQzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLGNBQWM7O0FBQ2Q7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLCtDQUErQztBQUNqRCIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdklEIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jbmF2SUQgLmNvbnRhaW5lciwgLm1lbnUge1xyXG4gIGhlaWdodDogOHZtaW47XHJcbiAgICAgIHdpZHRoOiAxMHZtaW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB0b3A6IC0zLjl2bWluO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDQ2JTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jbmF2SUQgLm1lbnUge1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxufVxyXG5cclxuI25hdklEIC50b2dnbGUge1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogNC41dm1pbjtcclxuICBib3JkZXItYm90dG9tOiA0dm1pbiBzb2xpZCAjNDk0ZDRlO1xyXG4gIGJvcmRlci1sZWZ0OiAyLjV2bWluIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMi41dm1pbiBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4jbmF2SUQgLnRvZ2dsZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogNC41dm1pbjtcclxuICBib3JkZXItdG9wOiA0dm1pbiBzb2xpZCAjNDk0ZDRlO1xyXG4gIGJvcmRlci1sZWZ0OiAyLjV2bWluIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMi41dm1pbiBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0dm1pbjtcclxuICBsZWZ0OiAtMi41dm1pbjtcclxufVxyXG5cclxuI25hdklEICNhZGQge1xyXG4gIGZvbnQtc2l6ZTogNnZtaW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDIuN3ZtaW47XHJcbiAgcmlnaHQ6IDAuN3ZtaW47XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4jbmF2SUQgLml0ZW0ge1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogNC41dm1pbjtcclxuICBib3JkZXItYm90dG9tOiA0dm1pbiBzb2xpZCAjNDk0ZDRlO1xyXG4gIGJvcmRlci1sZWZ0OiAyLjV2bWluIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMi41dm1pbiBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuI25hdklEIC5pdGVtOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiA0LjV2bWluO1xyXG4gIGJvcmRlci10b3A6IDR2bWluIHNvbGlkICM0OTRkNGU7XHJcbiAgYm9yZGVyLWxlZnQ6IDIuNXZtaW4gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAyLjV2bWluIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMuOXZtaW47XHJcbiAgbGVmdDogLTIuNXZtaW47XHJcbn1cclxuXHJcbiNuYXZJRCBzcGFuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxLjd2bWluO1xyXG59XHJcblxyXG4uaG9tZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL05hdmlnYXRpb24vSG9tZS5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNHZtaW47XHJcbiAgYm90dG9tOiAuNXZtaW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5hYm91dG1lIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvTmF2aWdhdGlvbi9BYm91dC5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNHZtaW47XHJcbiAgYm90dG9tOiAuNXZtaW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnRpbWVsaW5lIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvTmF2aWdhdGlvbi9UaW1lbGluZS5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNHZtaW47XHJcbiAgYm90dG9tOiAuNXZtaW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNvbnRhY3Qge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9OYXZpZ2F0aW9uL0NvbnRhY3Quc3ZnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogLjV2bWluO1xyXG4gIHRvcDogMHB4O1xyXG4gIGhlaWdodDogNHZtaW47XHJcbiAgYm90dG9tOiAuNXZtaW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLyogSEFNQlVSR0VSICovXHJcbi5oYW1idXJnZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDR2bWluO1xyXG4gIGhlaWdodDogNHZtaW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMy42dm1pbjtcclxuICBsZWZ0OiAwLjN2bWluO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLyogYm9yZGVyOiAzcHggc29saWQgI2ZmZjsgKi9cclxufVxyXG5cclxuLmhhbWJ1cmdlckJ1dHRvbiB7XHJcbiAgd2lkdGg6IDR2bWluO1xyXG4gIGhlaWdodDogLjZ2bWluO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDI1NSwgMTAxLCA0NywgLjIpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5oYW1idXJnZXJCdXR0b246OmJlZm9yZSxcclxuLmhhbWJ1cmdlckJ1dHRvbjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNHZtaW47XHJcbiAgaGVpZ2h0OiAuNnZtaW47XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMjU1LCAxMDEsIDQ3LCAuMik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhhbWJ1cmdlckJ1dHRvbjo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMnZtaW4pO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyQnV0dG9uOjphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEuMnZtaW4pO1xyXG59XHJcblxyXG4vKiBBTklNQVRJT04gKi9cclxuLmhhbWJ1cmdlci5vcGVuIC5oYW1idXJnZXJCdXR0b24ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmhhbWJ1cmdlci5vcGVuIC5oYW1idXJnZXJCdXR0b246OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgzNXB4LCAtMzVweCk7XHJcbn1cclxuXHJcbi5oYW1idXJnZXIub3BlbiAuaGFtYnVyZ2VyQnV0dG9uOjphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMzVweCwgMzVweCk7XHJcbn1cclxuIl19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/time-line/time-line.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/time-line/time-line.component.ts ***!
    \**************************************************/

  /*! exports provided: TimeLineComponent */

  /***/
  function srcAppTimeLineTimeLineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeLineComponent", function () {
      return TimeLineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TimeLineComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "05");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "May");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "1995");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Currently working as a software developer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "07");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Jan");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2019");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " After Graduation started my software profession as a developer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "09");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "May");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2016");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Completed my Graduation in Computer Science Engineering ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "25");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Apr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "2016");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "section", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Completed my Higher Secondary Schooling in S.T. Marys A.I. Hr. Sec School ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "25");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Mar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "2012");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "section", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Completed my Senior Secondary Schooling in S.T. Marys A.I. Hr. Sec School ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "05");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Mar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "2010");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "section", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "30");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "May");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "1995");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TimeLineComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " My TimeLine ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "30");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "May");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1995");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Completed my Senior Secondary Schooling in S.T. Marys A.I. Hr. Sec School ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "05");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "May");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "2010");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Completed my Higher Secondary Schooling in S.T. Marys A.I. Hr. Sec School ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "25");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "May");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2012");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Completed my Graduation in Computer Science Engineering ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "25");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Apr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "2016");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " After Graduation started my software profession as a developer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "09");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "May");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "2016");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "section", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Currently working as a software developer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "07");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Jan");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "2019");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var TimeLineComponent = /*#__PURE__*/function () {
      function TimeLineComponent(router) {
        _classCallCheck(this, TimeLineComponent);

        this.router = router;
        this.MaxAtricleCount = 6;
        this.MinArticleCount = 0;
        this.ArticleCount = 6;
        this.ScrollCount = 0;
        this.MaxScrollCount = 11;
        this.mobile = false;
        this.defaultTouch = {
          x: 0,
          y: 0,
          time: 0
        };
      }

      _createClass(TimeLineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (document.querySelector('#TimeLineContent').clientWidth <= 425) {
            this.mobile = true;
          } else {
            this.mobile = false;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.ResizeEvent(window.innerWidth, window.innerHeight);
        }
      }, {
        key: "onMousewheel",
        value: function onMousewheel(event) {
          if (!this.mobile) {
            //Scroll UP
            if (event.wheelDelta > 0) {
              if (this.ScrollCount <= this.MaxScrollCount - 5) {
                if (this.ArticleCount < this.MaxAtricleCount) {
                  this.ArticleCount++;
                } else {
                  this.router.navigate(['aboutme']);
                }
              }

              this.ScrollCount--;
            } //Scroll Down


            if (event.wheelDelta < 0) {
              if (this.ArticleCount > this.MinArticleCount) {
                this.ArticleCount--;
              }

              if (this.ScrollCount < this.MaxScrollCount) {
                this.ScrollCount++;
              }
            }

            this.ScrollSwipeEvent();
          }
        }
      }, {
        key: "handleTouch",
        value: function handleTouch(event) {
          var touch = event.touches[0] || event.changedTouches[0]; // check the events

          if (event.type === 'touchstart') {
            this.defaultTouch.x = touch.pageX;
            this.defaultTouch.y = touch.pageY;
            this.defaultTouch.time = event.timeStamp;
          } else if (event.type === 'touchend') {
            var deltaX = touch.pageX - this.defaultTouch.x;
            var deltaY = touch.pageY - this.defaultTouch.y;
            var deltaTime = event.timeStamp - this.defaultTouch.time; // simulte a swipe -> less than 500 ms and more than 60 px

            if (deltaTime < 500) {
              // touch movement lasted less than 500 ms
              if (Math.abs(deltaX) > 60) {
                // delta x is at least 60 pixels
                if (deltaX > 0) {
                  this.doSwipeRight(event);
                } else {
                  this.doSwipeLeft(event);
                }
              }

              if (Math.abs(deltaY) > 60) {
                // delta y is at least 60 pixels
                if (deltaY > 0) {
                  this.doSwipeDown(event);
                } else {
                  this.doSwipeUp();
                }
              }
            }
          }
        }
      }, {
        key: "doSwipeLeft",
        value: function doSwipeLeft(event) {
          console.log('swipe left', event);
        }
      }, {
        key: "doSwipeRight",
        value: function doSwipeRight(event) {
          console.log('swipe right', event);
        }
      }, {
        key: "doSwipeUp",
        value: function doSwipeUp() {
          if (this.mobile) {
            var articleDom = document.querySelector('#articles');

            if (articleDom.scrollTop === articleDom.scrollHeight - articleDom.offsetHeight) {
              this.router.navigate(['contact']);
            }
          } else if (!this.mobile) {
            if (this.ScrollCount <= this.MaxScrollCount - 5) {
              if (this.ArticleCount < this.MaxAtricleCount) {
                this.ArticleCount++;
              } else {
                this.router.navigate(['aboutme']);
              }
            }

            this.ScrollCount--;
            this.ScrollSwipeEvent();
          }
        }
      }, {
        key: "doSwipeDown",
        value: function doSwipeDown(event) {
          if (this.mobile && document.querySelector('#articles').scrollTop === 0) {
            this.router.navigate(['aboutme']);
          } else if (!this.mobile) {
            if (this.ArticleCount > this.MinArticleCount) {
              this.ArticleCount--;
            }

            if (this.ScrollCount < this.MaxScrollCount) {
              this.ScrollCount++;
            }

            this.ScrollSwipeEvent();
          }
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.ResizeEvent(event.target.innerWidth, event.target.innerHeight);
        }
      }, {
        key: "onOrientationChange",
        value: function onOrientationChange(event) {
          location.reload();
        }
      }, {
        key: "ScrollSwipeEvent",
        value: function ScrollSwipeEvent() {
          var articleDOM = document.querySelector("#articles").children[0];

          if (this.ScrollCount == 6) {
            articleDOM.children[0].querySelector('#topID').classList.remove('openEnvelope');
            articleDOM.children[0].querySelector('#topID').style.zIndex = '20';
          } else if (this.ScrollCount == 7) {
            articleDOM.children[0].querySelector('#topID').classList.add('openEnvelope');
            articleDOM.children[0].querySelector('#topID').classList.remove('openEnvelopeImportant');
            articleDOM.children[0].querySelector('#paperID').style.top = "0px";
          } else if (this.ScrollCount == 8) {
            articleDOM.children[0].querySelector('#topID').classList.add('openEnvelopeImportant');
            articleDOM.children[0].querySelector('#paperID').style.top = "-60px";
            articleDOM.children[0].querySelector('#topID').style.zIndex = '0';
          } else if (this.ScrollCount == 9) {
            articleDOM.children[0].querySelector('#paperID').style.top = "-266px";
            articleDOM.children[0].querySelector('#paperID').style.transform = "scale(1)";
            articleDOM.children[0].querySelector('.envelope .bottom').removeAttribute('style');
            articleDOM.children[0].querySelector('.envelope .left').removeAttribute('style');
            articleDOM.children[0].querySelector('.envelope .right').removeAttribute('style');
          } else if (this.ScrollCount == 10) {
            articleDOM.children[0].querySelector('#paperID').style.transform = "scale(3)";
            articleDOM.children[0].querySelector('#paperID').style.top = "-60px";
            articleDOM.children[0].querySelector('.envelope .bottom').style.zIndex = '0';
            articleDOM.children[0].querySelector('.envelope .left').style.zIndex = '0';
            articleDOM.children[0].querySelector('.envelope .right').style.zIndex = '0';
          } else if (this.ScrollCount == 11) {
            articleDOM.children[0].querySelector('#paperID').style.transform = "scale(6)";
            this.router.navigate(['contact']);
          }

          for (var i = this.MaxAtricleCount; i >= 0; i--) {
            var modifiedClassName = 'activeAfter' + (this.ArticleCount - i);

            if (i == this.ArticleCount) {
              articleDOM.children[i].className = articleDOM.children[i].className.replace(/(^|\W)active(\w+)/g, ' activeSection');
            } else if (i > this.ArticleCount) {
              articleDOM.children[i].className = articleDOM.children[i].className.replace(/(^|\W)active(\w+)/g, ' activeBefore1');
            } else if (i < this.ArticleCount) {
              articleDOM.children[i].className = articleDOM.children[i].className.replace(/(^|\W)active(\w+)/g, ' ' + modifiedClassName);
            }
          }
        }
      }, {
        key: "ResizeEvent",
        value: function ResizeEvent(width, height) {
          if (width <= 425) {
            this.mobile = true;
          } else {
            this.mobile = false;
          }

          console.log(height);

          if (!this.mobile) {
            document.querySelector('#TimeLineID').style.height = height + 'px';
            var activeWidth = document.querySelector('.activeSection').clientWidth;
            var birthContentWidth = document.querySelector('.birthContent').clientWidth;
            var envelopeContentWidth = document.querySelector('.envelopeContent').clientWidth;
            var birthPaddingLeft = (activeWidth - birthContentWidth) / 2;
            document.querySelector('#BirthAlign').style.paddingLeft = birthPaddingLeft + 'px';
            var envelopePaddingLeft = (activeWidth - envelopeContentWidth) / 2;
            document.querySelector('#EnvelopeAlign').style.paddingLeft = envelopePaddingLeft + 'px';
          }
        }
      }]);

      return TimeLineComponent;
    }();

    TimeLineComponent.ɵfac = function TimeLineComponent_Factory(t) {
      return new (t || TimeLineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    TimeLineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimeLineComponent,
      selectors: [["app-time-line"]],
      hostBindings: function TimeLineComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousewheel", function TimeLineComponent_mousewheel_HostBindingHandler($event) {
            return ctx.onMousewheel($event);
          })("touchstart", function TimeLineComponent_touchstart_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          })("touchend", function TimeLineComponent_touchend_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          })("touchcancel", function TimeLineComponent_touchcancel_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          })("resize", function TimeLineComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("orientationchange", function TimeLineComponent_orientationchange_HostBindingHandler($event) {
            return ctx.onOrientationChange($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 6,
      vars: 2,
      consts: [["id", "TimeLineContent"], ["id", "TimeLineID", 1, "TimeLineMain"], [1, "TimeLinePath"], ["id", "articles", 1, "articleTimeLine"], [4, "ngIf"], [1, "articleSection", "slide", "activeAfter6"], ["id", "EnvelopeAlign", 1, "CenterAlign"], [1, "envelopeContent"], [1, "envelope"], ["id", "topID", 1, "top"], [1, "bottom"], [1, "left"], [1, "right"], ["id", "paperID", 1, "paper"], [1, "timedate"], [1, "tt-day"], [1, "tt-month"], [1, "year"], [1, "tt-arrow-side"], [1, "timedateafter"], [1, "articleSection", "slide", "activeAfter5"], [1, "TabCenterAlign"], [1, "office2Content", "office2ContentBG"], [1, "office2ContentText"], [1, "tt-arrow-left"], [1, "tt-arrow-dot"], [1, "articleSection", "slide", "activeAfter4"], [1, "office1Content", "office1ContentBG"], [1, "office1ContentText"], [1, "tt-arrow-right"], [1, "tt-arrow-dot-right"], [1, "articleSection", "slide", "activeAfter3"], [1, "collegeContent", "collegeContentBG"], [1, "collegeContentText"], [1, "articleSection", "slide", "activeAfter2"], [1, "highSchoolContent2", "highSchoolContentBG"], [1, "highSchoolContentText"], [1, "articleSection", "slide", "activeAfter1"], [1, "highSchoolContent1", "highSchoolContentBG"], [1, "articleSection", "slide", "activeSection"], ["id", "BirthAlign", 1, "CenterAlign"], [1, "birthContent"], ["id", "TimeLineTitle"], [1, "TimeLineTop"], [1, "TimeLineText"], [1, "TimeLineBottom"], [1, "articleMobileSection"]],
      template: function TimeLineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimeLineComponent_div_4_Template, 110, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TimeLineComponent_div_5_Template, 76, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["#TimeLineContent {\r\n  height: 100%;\r\n}\r\n\r\n#TimeLineID {\r\n  margin: 0px;\r\n  background-image: url('/Leo/assets/TimeLine/TimeLineBackground.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  height: 969px;\r\n  overflow: hidden;\r\n}\r\n\r\n.TimeLinePath {\r\n  position: fixed;\r\n}\r\n\r\n.TimeLinePath:before {\r\n  content: '';\r\n  width: 50%;\r\n  height: 100%;\r\n  background: #000;\r\n  position: fixed;\r\n  margin-left: 25%;\r\n  bottom: -20%;\r\n  transform-style: preserve-3d;\r\n  transform: perspective(500px) rotateX(70deg) translateY(30px);\r\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.0) 20%, rgba(0, 0, 0, 0.9) 100%);\r\n}\r\n\r\n.timedate {\r\n  position: absolute;\r\n  bottom: -52px;\r\n  background: #52ccb3;\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n  left: 50%;\r\n  margin-left: -25px;\r\n  color: #fff;\r\n  text-align: center;\r\n  z-index: 2;\r\n}\r\n\r\nsection:before {\r\n  content: \"\";\r\n  height: 1px;\r\n  background: rgba(255, 255, 255, 0.3);\r\n  background: linear-gradient(to left, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.0) 100%);\r\n  width: 50%;\r\n  right: 0%;\r\n  margin-right: -46px;\r\n  display: block;\r\n  bottom: -25px;\r\n  position: absolute;\r\n  opacity: 1 !important;\r\n  transition: all 0.25s;\r\n  z-index: -2;\r\n}\r\n\r\nsection:after {\r\n  content: \"\";\r\n  height: 1px;\r\n  background: rgba(255, 255, 255, 0.3);\r\n  background: linear-gradient(to left, rgba(255, 255, 255, 0.0) 0%, rgba(255, 255, 255, 0.5));\r\n  width: 50%;\r\n  margin-left: -46px;\r\n  display: block;\r\n  bottom: -25px;\r\n  position: absolute;\r\n  transition: all 0.25s;\r\n  z-index: -2;\r\n}\r\n\r\n.articleTimeLine {\r\n  transition: all .7s ease;\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  perspective: 600px;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.articleSection {\r\n  width: 100%;\r\n  transform: none;\r\n  border-radius: 0px;\r\n  height: auto;\r\n  display: inline-block;\r\n  padding-bottom: 7px;\r\n  bottom: 15%;\r\n  width: 68%;\r\n  margin-left: 16%;\r\n  opacity: 0;\r\n  position: absolute;\r\n}\r\n\r\narticle section:nth-last-child(1) {\r\n  -webkit-animation-name: fadeInUpTimeLine;\r\n          animation-name: fadeInUpTimeLine;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n\r\narticle section:nth-last-child(2) {\r\n  -webkit-animation-name: fadeInUpTimeLine;\r\n          animation-name: fadeInUpTimeLine;\r\n  -webkit-animation-delay: 0.25s;\r\n          animation-delay: 0.25s;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n\r\narticle section:nth-last-child(3) {\r\n  -webkit-animation-name: fadeInUpTimeLine;\r\n          animation-name: fadeInUpTimeLine;\r\n  -webkit-animation-delay: .5s;\r\n          animation-delay: .5s;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeInUpTimeLine {\r\n  from {\r\n    bottom: 10%;\r\n  }\r\n\r\n  to {\r\n    bottom: 15%;\r\n  }\r\n}\r\n\r\n@keyframes fadeInUpTimeLine {\r\n  from {\r\n    bottom: 10%;\r\n  }\r\n\r\n  to {\r\n    bottom: 15%;\r\n  }\r\n}\r\n\r\n/*.timedate:before {\r\n  content: \"\";\r\n  height: 130px;\r\n  background: rgba(255, 255, 255, 0.3);\r\n  background: -moz-linear-gradient(top, rgba(255, 255, 255, 0.0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.0) 100%);\r\n  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.0) 100%);\r\n  background: linear-gradient(top, rgba(255, 255, 255, 0.0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.0) 100%);\r\n  width: 1px;\r\n  display: block;\r\n  left: 24px;\r\n  top: 45px;\r\n  position: absolute;\r\n  -webkit-backface-visibility: hidden;\r\n  -webkit-transition: opacity 0.9s ease;\r\n  -moz-transition: opacity 0.5s ease;\r\n  -ms-transition: opacity 0.5s ease;\r\n  -o-transition: opacity 0.5s ease;\r\n  transition: opacity 0.9s ease;\r\n}*/\r\n\r\n.timedateafter {\r\n  position: absolute;\r\n  width: 70px;\r\n  height: 70px;\r\n  background: rgba(0, 0, 0, 0.3);\r\n  border-radius: 50%;\r\n  border: 1px solid rgba(255, 255, 255, 0.2);\r\n  content: \"\";\r\n  bottom: -62px;\r\n  left: 50%;\r\n  margin-left: -35px;\r\n  box-sizing: border-box;\r\n  z-index: -1;\r\n}\r\n\r\n.tt-day {\r\n  width: 100%;\r\n  padding-top: 12px;\r\n  font-weight: 600;\r\n  line-height: 15px;\r\n  font-size: 20px;\r\n}\r\n\r\n.tt-month {\r\n  font-size: 12px;\r\n}\r\n\r\n.year {\r\n  color: #fff;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  position: relative;\r\n  top: 2vh;\r\n}\r\n\r\n.CenterAlign {\r\n  position: relative;\r\n  display: block;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.birthContent {\r\n  width: 400px;\r\n  height: 400px;\r\n  border-radius: 50%;\r\n  background-image: url('/Leo/assets/TimeLine/TimeLineImage1.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n  opacity: 1;\r\n  box-shadow: inset 0px 0px 25px rgba(0, 0, 0, 0.9);\r\n  text-align: center;\r\n}\r\n\r\n.birthContent::after {\r\n  content: 'Stepped into the world';\r\n  position: inherit;\r\n  top: 80%;\r\n  font-family: dancing-font;\r\n  color: #da9e18;\r\n  text-align: center;\r\n  font-size: 1.5vw;\r\n  font-weight: bold;\r\n}\r\n\r\n.tt-arrow-side {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 50%;\r\n  margin-left: -15px;\r\n  z-index: 2;\r\n  width: 0px;\r\n  height: 0px;\r\n  border-style: solid;\r\n  border-width: 20px 15px 0 15px;\r\n  border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;\r\n}\r\n\r\n.activeSection {\r\n  transition: all .7s ease;\r\n  z-index: 10 !important;\r\n  opacity: 1;\r\n}\r\n\r\n.activeAfter1 {\r\n  transition: all .7s ease;\r\n  transform: translate3d(-640px, 50px, -300px) rotateX(0deg) translateX(640px) translateY(-90px);\r\n  opacity: 0.5;\r\n  z-index: 9 !important;\r\n  position: absolute;\r\n}\r\n\r\n.highSchoolContent1, .collegeContent, .office2Content {\r\n  width: 400px;\r\n  height: 300px;\r\n  position: absolute;\r\n  bottom: 0%;\r\n}\r\n\r\n.highSchoolContentBG {\r\n  background-image: url('/Leo/assets/TimeLine/TimeLineImage2.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  text-align: center;\r\n  box-shadow: inset 0px 0px 25px rgba(0, 0, 0, 0.9);\r\n  position: relative;\r\n}\r\n\r\n.highSchoolContentText, .collegeContentText, .office1ContentText, .office2ContentText {\r\n  font-family: dancing-font;\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n  position: relative;\r\n  top: 73%;\r\n  background-color: #efefef;\r\n  height: 20%;\r\n  padding: 1vh;\r\n  opacity: 0.7;\r\n  color: #5a5f70;\r\n}\r\n\r\n.tt-arrow-left {\r\n  position: absolute;\r\n  left: 25%;\r\n  top: 100%;\r\n  margin-left: -15px;\r\n  z-index: 2;\r\n  width: 0px;\r\n  height: 0px;\r\n  border-style: solid;\r\n  border-width: 20px 15px 0 15px;\r\n  border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;\r\n}\r\n\r\n.tt-arrow-dot {\r\n  z-index: -1;\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  bottom: -47px;\r\n  left: 23%;\r\n  background: rgba(82, 204, 179, 0.2);\r\n  transform: perspective(500px) rotateX(70deg);\r\n}\r\n\r\n.tt-arrow-dot:before {\r\n  z-index: 1;\r\n  width: 20px;\r\n  height: 20px;\r\n  left: 15px;\r\n  top: 15px;\r\n  border-radius: 50%;\r\n  background: #03e33f;\r\n  content: \"\";\r\n  position: absolute;\r\n}\r\n\r\n.tt-arrow-dot:after {\r\n  z-index: 1;\r\n  width: 90px;\r\n  height: 90px;\r\n  left: -20px;\r\n  top: -20px;\r\n  border-radius: 50%;\r\n  background: rgba(3, 227, 63, 0.1);\r\n  content: \"\";\r\n  position: absolute;\r\n}\r\n\r\n.activeAfter2 {\r\n  transform: translate3d(-640px, 20px, -500px) rotateX(0deg) translateX(640px) translateY(-90px);\r\n  opacity: 0.2;\r\n  z-index: 8;\r\n  position: absolute;\r\n}\r\n\r\n.highSchoolContent2, .office1Content {\r\n  width: 400px;\r\n  height: 300px;\r\n  bottom: 0%;\r\n  right: 0%;\r\n  float: right;\r\n}\r\n\r\n.collegeContentBG {\r\n  background-image: url('/Leo/assets/TimeLine/TimeLineImage3.png');\r\n  background-color: #eeefff;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  text-align: center;\r\n  box-shadow: inset 0px 0px 25px rgba(0, 0, 0, 0.9);\r\n  position: relative;\r\n}\r\n\r\n.office1ContentBG {\r\n  background-image: url('/Leo/assets/TimeLine/TimeLineImage4.png');\r\n  background-color: #eeefff;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  text-align: center;\r\n  box-shadow: inset 0px 0px 25px rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.office2ContentBG {\r\n  background-image: url('/Leo/assets/TimeLine/TimeLineImage5.jpg');\r\n  background-color: #eeefff;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  text-align: center;\r\n  box-shadow: inset 0px 0px 25px rgba(0, 0, 0, 0.9);\r\n  position: relative;\r\n}\r\n\r\n.tt-arrow-right {\r\n  position: absolute;\r\n  right: 25%;\r\n  top: 100%;\r\n  margin-left: -15px;\r\n  z-index: 2;\r\n  width: 0px;\r\n  height: 0px;\r\n  border-style: solid;\r\n  border-width: 20px 15px 0 15px;\r\n  border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;\r\n}\r\n\r\n.tt-arrow-dot-right {\r\n  z-index: -1;\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  bottom: -47px;\r\n  right: 24%;\r\n  background: rgba(82, 204, 179, 0.2);\r\n  transform: perspective(500px) rotateX(70deg);\r\n}\r\n\r\n.tt-arrow-dot-right:before {\r\n  z-index: 1;\r\n  width: 20px;\r\n  height: 20px;\r\n  left: 15px;\r\n  top: 15px;\r\n  border-radius: 50%;\r\n  background: #03e33f;\r\n  content: \"\";\r\n  position: absolute;\r\n}\r\n\r\n.tt-arrow-dot-right:after {\r\n  z-index: 1;\r\n  width: 90px;\r\n  height: 90px;\r\n  left: -20px;\r\n  top: -20px;\r\n  border-radius: 50%;\r\n  background: rgba(3, 227, 63, 0.1);\r\n  content: \"\";\r\n  position: absolute;\r\n}\r\n\r\n.envelopeContent {\r\n  cursor: default;\r\n  background-color: red;\r\n  opacity: 1;\r\n  display: inline-block;\r\n}\r\n\r\n.slide {\r\n  transition: transform .7s ease, opacity .7s ease, all .7s ease;\r\n}\r\n\r\n.activeAfter3 {\r\n  transform: translate3d(0px, 0px, -800px) rotateX(0deg) translateX(0px) translateY(0px);\r\n  opacity: 0;\r\n  z-index: 9 !important;\r\n  position: absolute;\r\n}\r\n\r\n.activeAfter4 {\r\n  transform: translate3d(0px, 0px, -800px) rotateX(0deg) translateX(0px) translateY(0px);\r\n  opacity: 0;\r\n  z-index: 9 !important;\r\n  position: absolute;\r\n}\r\n\r\n.activeAfter5 {\r\n  transform: translate3d(0px, 0px, -800px) rotateX(0deg) translateX(0px) translateY(0px);\r\n  opacity: 0;\r\n  z-index: 9 !important;\r\n  position: absolute;\r\n}\r\n\r\n.activeAfter6 {\r\n  transform: translate3d(0px, 0px, -800px) rotateX(0deg) translateX(0px) translateY(0px);\r\n  opacity: 0;\r\n  z-index: 9 !important;\r\n  position: absolute;\r\n}\r\n\r\n.activeBefore1 {\r\n  transform: translate3d(-640px, 0px, 600px) rotateX(0deg) translateX(640px) translateY(120px);\r\n  opacity: 0.3;\r\n  z-index: 11;\r\n  visibility: hidden;\r\n}\r\n\r\n/* Envelope Style Begin */\r\n\r\n.envelopeContent .envelope {\r\n  position: relative;\r\n  height: 325px;\r\n  width: 575px;\r\n  background: #F9F9F9;\r\n  transition: margin-top 300ms;\r\n  -ms-transition: margin-top 300ms;\r\n  -moz-transition: margin-top 300ms;\r\n  -o-transition: margin-top 300ms;\r\n  -webkit-transition: margin-top 300ms;\r\n}\r\n\r\n.envelopeContent .envelope .top {\r\n  position: absolute;\r\n  left: 0px;\r\n  z-index: 20;\r\n  overflow: hidden;\r\n  border-left: 281px solid transparent;\r\n  border-right: 293px solid transparent;\r\n  border-top: 150px solid #333;\r\n  transform-origin: top;\r\n  -ms-transform-origin: top;\r\n  -moz-transform-origin: top;\r\n  -o-transform-origin: top;\r\n  -webkit-transform-origin: top;\r\n  transition: transform 300ms 150ms, z-index 0ms 10ms, height 300ms 0ms, top 300ms 0ms;\r\n  -ms-transition: -ms-transform 300ms 150ms, z-index 0ms 10ms, height 300ms 0ms, top 300ms 0ms;\r\n  -moz-transition: -moz-transform 300ms 150ms, z-index 0ms 10ms, height 300ms 0ms, top 300ms 0ms;\r\n  -o-transition: -o-transform 300ms 150ms, z-index 0ms 10ms, height 300ms 0ms, top 300ms 0ms;\r\n  -webkit-transition: -webkit-transform 300ms 150ms, z-index 0ms 10ms, height 300ms 0ms, top 300ms 0ms;\r\n}\r\n\r\n.openEnvelope {\r\n  transition: transform 300ms 0ms, height 300ms 150ms, top 300ms 150ms;\r\n  -ms-transition: -ms-transform 300ms 0ms, height 300ms 150ms, top 300ms 150ms;\r\n  -moz-transition: -moz-transform 300ms 0ms, height 300ms 150ms, top 300ms 150ms;\r\n  -o-transition: -o-transform 300ms 0ms, height 300ms 150ms, top 300ms 150ms;\r\n  -webkit-transition: -webkit-transform 300ms 0ms, height 300ms 150ms, top 300ms 150ms;\r\n  height: 10px;\r\n  transform: rotateX(180deg);\r\n  -ms-transform: rotateX(180deg);\r\n  -moz-transform: rotateX(180deg);\r\n  -o-transform: rotateX(180deg);\r\n  -webkit-transform: rotateX(180deg);\r\n}\r\n\r\n.openEnvelopeImportant {\r\n  transition: transform 300ms 0ms, height 300ms 150ms, top 300ms 150ms;\r\n  -ms-transition: -ms-transform 300ms 0ms, height 300ms 150ms, top 300ms 150ms;\r\n  -moz-transition: -moz-transform 300ms 0ms, height 300ms 150ms, top 300ms 150ms;\r\n  -o-transition: -o-transform 300ms 0ms, height 300ms 150ms, top 300ms 150ms;\r\n  -webkit-transition: -webkit-transform 300ms 0ms, height 300ms 150ms, top 300ms 150ms;\r\n  height: 10px !important;\r\n  transform: rotateX(180deg);\r\n  -ms-transform: rotateX(180deg);\r\n  -moz-transform: rotateX(180deg);\r\n  -o-transform: rotateX(180deg);\r\n  -webkit-transform: rotateX(180deg);\r\n}\r\n\r\n.envelopeContent .envelope .bottom {\r\n  position: absolute;\r\n  z-index: 20;\r\n  bottom: 0px;\r\n  /* left: 10px; */\r\n  border-left: 280px solid transparent;\r\n  border-right: 295px solid transparent;\r\n  border-bottom: 175px solid #333;\r\n}\r\n\r\n.envelopeContent .envelope .left {\r\n  position: absolute;\r\n  z-index: 20;\r\n  width: 0px;\r\n  float: left;\r\n  border-left: 270px solid #333;\r\n  border-top: 150px solid transparent;\r\n  border-bottom: 175px solid transparent;\r\n}\r\n\r\n.envelopeContent .envelope .right {\r\n  position: absolute;\r\n  z-index: 20;\r\n  width: 0px;\r\n  right: 0px;\r\n  float: right;\r\n  border-right: 282px solid #333;\r\n  border-top: 150px solid transparent;\r\n  border-bottom: 175px solid transparent\r\n}\r\n\r\n.envelopeContent .envelope .paper {\r\n  position: relative;\r\n  height: 250px;\r\n  width: 100%;\r\n  display: inline-block;\r\n  top: 0px;\r\n  left: 0px;\r\n  background: #F9F9F9;\r\n  z-index: 10;\r\n  transition: margin-top 300ms 0ms;\r\n  transition: transform .3s ease, all .3s ease;\r\n}\r\n\r\n/* Envelope Style Ends */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZS1saW5lL3RpbWUtbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9FQUFnRTtFQUNoRSw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qiw2REFBNkQ7RUFDN0QseUZBQXlGO0FBQzNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0NBQW9DO0VBS3BDLGlHQUFpRztFQUNqRyxVQUFVO0VBQ1YsU0FBUztFQUNULG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFLckIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0NBQW9DO0VBS3BDLDJGQUEyRjtFQUMzRixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBS2xCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7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ZSI6InNyYy9hcHAvdGltZS1saW5lL3RpbWUtbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI1RpbWVMaW5lQ29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jVGltZUxpbmVJRCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL1RpbWVMaW5lL1RpbWVMaW5lQmFja2dyb3VuZC5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGhlaWdodDogOTY5cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLlRpbWVMaW5lUGF0aCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4uVGltZUxpbmVQYXRoOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICBib3R0b206IC0yMCU7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVYKDcwZGVnKSB0cmFuc2xhdGVZKDMwcHgpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLCAwLCAwLCAwLjApIDIwJSwgcmdiYSgwLCAwLCAwLCAwLjkpIDEwMCUpO1xyXG59XHJcblxyXG4udGltZWRhdGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC01MnB4O1xyXG4gIGJhY2tncm91bmQ6ICM1MmNjYjM7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5zZWN0aW9uOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCkgMTAwJSk7XHJcbiAgd2lkdGg6IDUwJTtcclxuICByaWdodDogMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNDZweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3R0b206IC0yNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gIHotaW5kZXg6IC0yO1xyXG59XHJcblxyXG5zZWN0aW9uOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkpO1xyXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkpO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpKTtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDZweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3R0b206IC0yNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgei1pbmRleDogLTI7XHJcbn1cclxuXHJcbi5hcnRpY2xlVGltZUxpbmUge1xyXG4gIHRyYW5zaXRpb246IGFsbCAuN3MgZWFzZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBlcnNwZWN0aXZlOiA2MDBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4uYXJ0aWNsZVNlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gIGJvdHRvbTogMTUlO1xyXG4gIHdpZHRoOiA2OCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2JTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuYXJ0aWNsZSBzZWN0aW9uOm50aC1sYXN0LWNoaWxkKDEpIHtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluVXBUaW1lTGluZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbmFydGljbGUgc2VjdGlvbjpudGgtbGFzdC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwVGltZUxpbmU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjI1cztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbmFydGljbGUgc2VjdGlvbjpudGgtbGFzdC1jaGlsZCgzKSB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwVGltZUxpbmU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuNXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJblVwVGltZUxpbmUge1xyXG4gIGZyb20ge1xyXG4gICAgYm90dG9tOiAxMCU7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBib3R0b206IDE1JTtcclxuICB9XHJcbn1cclxuXHJcbi8qLnRpbWVkYXRlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCkgMTAwJSk7XHJcbiAgd2lkdGg6IDFweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsZWZ0OiAyNHB4O1xyXG4gIHRvcDogNDVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuOXMgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOXMgZWFzZTtcclxufSovXHJcbi50aW1lZGF0ZWFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYm90dG9tOiAtNjJweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnR0LWRheSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi50dC1tb250aCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ueWVhciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAydmg7XHJcbn1cclxuXHJcbi5DZW50ZXJBbGlnbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5iaXJ0aENvbnRlbnQge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvVGltZUxpbmUvVGltZUxpbmVJbWFnZTEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmlydGhDb250ZW50OjphZnRlciB7XHJcbiAgY29udGVudDogJ1N0ZXBwZWQgaW50byB0aGUgd29ybGQnO1xyXG4gIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gIHRvcDogODAlO1xyXG4gIGZvbnQtZmFtaWx5OiBkYW5jaW5nLWZvbnQ7XHJcbiAgY29sb3I6ICNkYTllMTg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50dC1hcnJvdy1zaWRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgei1pbmRleDogMjtcclxuICB3aWR0aDogMHB4O1xyXG4gIGhlaWdodDogMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAyMHB4IDE1cHggMCAxNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYWN0aXZlU2VjdGlvbiB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC43cyBlYXNlO1xyXG4gIHotaW5kZXg6IDEwICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmFjdGl2ZUFmdGVyMSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC43cyBlYXNlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTY0MHB4LCA1MHB4LCAtMzAwcHgpIHJvdGF0ZVgoMGRlZykgdHJhbnNsYXRlWCg2NDBweCkgdHJhbnNsYXRlWSgtOTBweCk7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5oaWdoU2Nob29sQ29udGVudDEsIC5jb2xsZWdlQ29udGVudCwgLm9mZmljZTJDb250ZW50IHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwJTtcclxufVxyXG5cclxuLmhpZ2hTY2hvb2xDb250ZW50Qkcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9UaW1lTGluZS9UaW1lTGluZUltYWdlMi5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmhpZ2hTY2hvb2xDb250ZW50VGV4dCwgLmNvbGxlZ2VDb250ZW50VGV4dCwgLm9mZmljZTFDb250ZW50VGV4dCwgLm9mZmljZTJDb250ZW50VGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IGRhbmNpbmctZm9udDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNzMlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgcGFkZGluZzogMXZoO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBjb2xvcjogIzVhNWY3MDtcclxufVxyXG5cclxuLnR0LWFycm93LWxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyNSU7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDIwcHggMTVweCAwIDE1cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi50dC1hcnJvdy1kb3Qge1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTQ3cHg7XHJcbiAgbGVmdDogMjMlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoODIsIDIwNCwgMTc5LCAwLjIpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWCg3MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVYKDcwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWCg3MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWCg3MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWCg3MGRlZyk7XHJcbn1cclxuXHJcbi50dC1hcnJvdy1kb3Q6YmVmb3JlIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHRvcDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogIzAzZTMzZjtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnR0LWFycm93LWRvdDphZnRlciB7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgbGVmdDogLTIwcHg7XHJcbiAgdG9wOiAtMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAyMjcsIDYzLCAwLjEpO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uYWN0aXZlQWZ0ZXIyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC02NDBweCwgMjBweCwgLTUwMHB4KSByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZVgoNjQwcHgpIHRyYW5zbGF0ZVkoLTkwcHgpO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICB6LWluZGV4OiA4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmhpZ2hTY2hvb2xDb250ZW50MiwgLm9mZmljZTFDb250ZW50IHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBib3R0b206IDAlO1xyXG4gIHJpZ2h0OiAwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb2xsZWdlQ29udGVudEJHIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvVGltZUxpbmUvVGltZUxpbmVJbWFnZTMucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWZmZjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm9mZmljZTFDb250ZW50Qkcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9UaW1lTGluZS9UaW1lTGluZUltYWdlNC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZmZmO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbn1cclxuXHJcbi5vZmZpY2UyQ29udGVudEJHIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvVGltZUxpbmUvVGltZUxpbmVJbWFnZTUuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWZmZjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnR0LWFycm93LXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDI1JTtcclxuICB0b3A6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDBweDtcclxuICBoZWlnaHQ6IDBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMjBweCAxNXB4IDAgMTVweDtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnR0LWFycm93LWRvdC1yaWdodCB7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtNDdweDtcclxuICByaWdodDogMjQlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoODIsIDIwNCwgMTc5LCAwLjIpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWCg3MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVYKDcwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWCg3MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWCg3MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWCg3MGRlZyk7XHJcbn1cclxuXHJcbi50dC1hcnJvdy1kb3QtcmlnaHQ6YmVmb3JlIHtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHRvcDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogIzAzZTMzZjtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnR0LWFycm93LWRvdC1yaWdodDphZnRlciB7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgbGVmdDogLTIwcHg7XHJcbiAgdG9wOiAtMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAyMjcsIDYzLCAwLjEpO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uZW52ZWxvcGVDb250ZW50IHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2xpZGUge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgZWFzZSwgb3BhY2l0eSAuN3MgZWFzZSwgYWxsIC43cyBlYXNlO1xyXG59XHJcblxyXG4uYWN0aXZlQWZ0ZXIzIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAtODAwcHgpIHJvdGF0ZVgoMGRlZykgdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5hY3RpdmVBZnRlcjQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIC04MDBweCkgcm90YXRlWCgwZGVnKSB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSgwcHgpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogOSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmFjdGl2ZUFmdGVyNSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgLTgwMHB4KSByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDBweCk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiA5ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uYWN0aXZlQWZ0ZXI2IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAtODAwcHgpIHJvdGF0ZVgoMGRlZykgdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoMHB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDkgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5hY3RpdmVCZWZvcmUxIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC02NDBweCwgMHB4LCA2MDBweCkgcm90YXRlWCgwZGVnKSB0cmFuc2xhdGVYKDY0MHB4KSB0cmFuc2xhdGVZKDEyMHB4KTtcclxuICBvcGFjaXR5OiAwLjM7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBFbnZlbG9wZSBTdHlsZSBCZWdpbiAqL1xyXG4uZW52ZWxvcGVDb250ZW50IC5lbnZlbG9wZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzI1cHg7XHJcbiAgd2lkdGg6IDU3NXB4O1xyXG4gIGJhY2tncm91bmQ6ICNGOUY5Rjk7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLXRvcCAzMDBtcztcclxuICAtbXMtdHJhbnNpdGlvbjogbWFyZ2luLXRvcCAzMDBtcztcclxuICAtbW96LXRyYW5zaXRpb246IG1hcmdpbi10b3AgMzAwbXM7XHJcbiAgLW8tdHJhbnNpdGlvbjogbWFyZ2luLXRvcCAzMDBtcztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi10b3AgMzAwbXM7XHJcbn1cclxuXHJcbi5lbnZlbG9wZUNvbnRlbnQgLmVudmVsb3BlIC50b3Age1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwcHg7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdDogMjgxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAyOTNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wOiAxNTBweCBzb2xpZCAjMzMzO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgMTUwbXMsIHotaW5kZXggMG1zIDEwbXMsIGhlaWdodCAzMDBtcyAwbXMsIHRvcCAzMDBtcyAwbXM7XHJcbiAgLW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMzAwbXMgMTUwbXMsIHotaW5kZXggMG1zIDEwbXMsIGhlaWdodCAzMDBtcyAwbXMsIHRvcCAzMDBtcyAwbXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAzMDBtcyAxNTBtcywgei1pbmRleCAwbXMgMTBtcywgaGVpZ2h0IDMwMG1zIDBtcywgdG9wIDMwMG1zIDBtcztcclxuICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMzAwbXMgMTUwbXMsIHotaW5kZXggMG1zIDEwbXMsIGhlaWdodCAzMDBtcyAwbXMsIHRvcCAzMDBtcyAwbXM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAzMDBtcyAxNTBtcywgei1pbmRleCAwbXMgMTBtcywgaGVpZ2h0IDMwMG1zIDBtcywgdG9wIDMwMG1zIDBtcztcclxufVxyXG5cclxuLm9wZW5FbnZlbG9wZSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIDBtcywgaGVpZ2h0IDMwMG1zIDE1MG1zLCB0b3AgMzAwbXMgMTUwbXM7XHJcbiAgLW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMzAwbXMgMG1zLCBoZWlnaHQgMzAwbXMgMTUwbXMsIHRvcCAzMDBtcyAxNTBtcztcclxuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDMwMG1zIDBtcywgaGVpZ2h0IDMwMG1zIDE1MG1zLCB0b3AgMzAwbXMgMTUwbXM7XHJcbiAgLW8tdHJhbnNpdGlvbjogLW8tdHJhbnNmb3JtIDMwMG1zIDBtcywgaGVpZ2h0IDMwMG1zIDE1MG1zLCB0b3AgMzAwbXMgMTUwbXM7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAzMDBtcyAwbXMsIGhlaWdodCAzMDBtcyAxNTBtcywgdG9wIDMwMG1zIDE1MG1zO1xyXG4gIGhlaWdodDogMTBweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG59XHJcblxyXG4ub3BlbkVudmVsb3BlSW1wb3J0YW50IHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgMG1zLCBoZWlnaHQgMzAwbXMgMTUwbXMsIHRvcCAzMDBtcyAxNTBtcztcclxuICAtbXMtdHJhbnNpdGlvbjogLW1zLXRyYW5zZm9ybSAzMDBtcyAwbXMsIGhlaWdodCAzMDBtcyAxNTBtcywgdG9wIDMwMG1zIDE1MG1zO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMzAwbXMgMG1zLCBoZWlnaHQgMzAwbXMgMTUwbXMsIHRvcCAzMDBtcyAxNTBtcztcclxuICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMzAwbXMgMG1zLCBoZWlnaHQgMzAwbXMgMTUwbXMsIHRvcCAzMDBtcyAxNTBtcztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDMwMG1zIDBtcywgaGVpZ2h0IDMwMG1zIDE1MG1zLCB0b3AgMzAwbXMgMTUwbXM7XHJcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxufVxyXG5cclxuLmVudmVsb3BlQ29udGVudCAuZW52ZWxvcGUgLmJvdHRvbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIC8qIGxlZnQ6IDEwcHg7ICovXHJcbiAgYm9yZGVyLWxlZnQ6IDI4MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMjk1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTc1cHggc29saWQgIzMzMztcclxufVxyXG5cclxuLmVudmVsb3BlQ29udGVudCAuZW52ZWxvcGUgLmxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyMDtcclxuICB3aWR0aDogMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1sZWZ0OiAyNzBweCBzb2xpZCAjMzMzO1xyXG4gIGJvcmRlci10b3A6IDE1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDE3NXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZW52ZWxvcGVDb250ZW50IC5lbnZlbG9wZSAucmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyMDtcclxuICB3aWR0aDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlci1yaWdodDogMjgycHggc29saWQgIzMzMztcclxuICBib3JkZXItdG9wOiAxNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAxNzVweCBzb2xpZCB0cmFuc3BhcmVudFxyXG59XHJcblxyXG4uZW52ZWxvcGVDb250ZW50IC5lbnZlbG9wZSAucGFwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgYmFja2dyb3VuZDogI0Y5RjlGOTtcclxuICB6LWluZGV4OiAxMDtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDMwMG1zIDBtcztcclxuICAtbXMtdHJhbnNpdGlvbjogbWFyZ2luLXRvcCAzMDBtcyAwbXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDMwMG1zIDBtcztcclxuICAtby10cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDMwMG1zIDBtcztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi10b3AgMzAwbXMgMG1zO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZSwgYWxsIC4zcyBlYXNlO1xyXG59XHJcblxyXG4vKiBFbnZlbG9wZSBTdHlsZSBFbmRzICovXHJcbiJdfQ== */", "/*\r\n  ##Device = Desktops\r\n  ##Screen = 1281px to higher resolution desktops\r\n*/\r\n@media (min-width: 1281px) {}\r\n/*\r\n  ##Device = Laptops, Desktops\r\n  ##Screen = B/w 1025px to 1280px\r\n*/\r\n@media (min-width: 1025px) and (max-width: 1280px) {}\r\n/*\r\n  ##Device = Tablets, Ipads (portrait)\r\n  ##Screen = B/w 768px to 1024px\r\n*/\r\n@media (max-width: 1024px) {}\r\n/*\r\n  ##Device = Tablets, Ipads (landscape)\r\n  ##Screen = B/w 768px to 1024px\r\n*/\r\n@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {}\r\n/* Smartphones (landscape) ----------- */\r\n@media only screen and (max-height : 500px) {\r\n  .TimeLinePath:before {\r\n    height: 125%;\r\n    width: 60%;\r\n    margin-left: 20%;\r\n  }\r\n\r\n  .articleSection {\r\n    bottom: 25%;\r\n  }\r\n\r\n  .birthContent {\r\n    width: 200px;\r\n    height: 200px;\r\n  }\r\n\r\n  .year {\r\n    top: 5vh;\r\n  }\r\n\r\n  .highSchoolContent1, .collegeContent, .office2Content, .highSchoolContent2, .office1Content {\r\n    width: 300px;\r\n    height: 180px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .highSchoolContentText, .collegeContentText, .office1ContentText, .office2ContentText, .birthContent::after {\r\n    font-size: 2vw !important;\r\n  }\r\n\r\n  .tt-arrow-left, .tt-arrow-right {\r\n    position: relative;\r\n    bottom: 0px;\r\n    left: 50%;\r\n    margin-left: -15px;\r\n    z-index: 2;\r\n    width: 0px;\r\n    height: 0px;\r\n    border-style: solid;\r\n    border-width: 20px 15px 0 15px;\r\n    border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;\r\n  }\r\n\r\n  .tt-arrow-dot, .tt-arrow-dot-right {\r\n    display: none;\r\n  }\r\n\r\n  .highSchoolContent2, .office1Content {\r\n    right: unset;\r\n    float: none;\r\n  }\r\n\r\n  .envelopeContent .envelope {\r\n    position: relative;\r\n    height: 180px !important;\r\n    width: 360px !important;\r\n    background: #F9F9F9;\r\n    transition: margin-top 300ms;\r\n    -ms-transition: margin-top 300ms;\r\n    -moz-transition: margin-top 300ms;\r\n    -o-transition: margin-top 300ms;\r\n    -webkit-transition: margin-top 300ms;\r\n  }\r\n\r\n  .envelopeContent .envelope .paper {\r\n    height: 150px;\r\n    width: 100%;\r\n  }\r\n\r\n  .envelopeContent .envelope .top {\r\n    border-left: 180px solid transparent !important;\r\n    border-right: 180px solid transparent !important;\r\n    border-top: 90px solid #333 !important;\r\n  }\r\n\r\n  .envelopeContent .envelope .bottom {\r\n    border-left: 180px solid transparent !important;\r\n    border-right: 180px solid transparent !important;\r\n    border-bottom: 90px solid #333 !important;\r\n  }\r\n\r\n  .envelopeContent .envelope .left {\r\n    border-left: 176px solid #333 !important;\r\n    border-top: 90px solid transparent !important;\r\n    border-bottom: 90px solid transparent !important;\r\n  }\r\n\r\n  .envelopeContent .envelope .right {\r\n    border-right: 176px solid #333 !important;\r\n    border-top: 90px solid transparent !important;\r\n    border-bottom: 90px solid transparent !important;\r\n  }\r\n\r\n  @-webkit-keyframes fadeInUpTimeLine {\r\n    from {\r\n      bottom: 15%;\r\n    }\r\n\r\n    to {\r\n      bottom: 25%;\r\n    }\r\n  }\r\n\r\n  @keyframes fadeInUpTimeLine {\r\n    from {\r\n      bottom: 15%;\r\n    }\r\n\r\n    to {\r\n      bottom: 25%;\r\n    }\r\n  }\r\n}\r\n/*\r\n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\r\n  ##Screen = B/w 481px to 767px\r\n*/\r\n@media (min-width: 426px) and (max-width: 768px) {\r\n  .birthContent::after {\r\n    font-size: 4vw;\r\n  }\r\n\r\n  .tt-arrow-left, .tt-arrow-right {\r\n    position: relative;\r\n    bottom: 0px;\r\n    left: 50%;\r\n    margin-left: -15px;\r\n    z-index: 2;\r\n    width: 0px;\r\n    height: 0px;\r\n    border-style: solid;\r\n    border-width: 20px 15px 0 15px;\r\n    border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;\r\n  }\r\n\r\n  .tt-arrow-dot, .tt-arrow-dot-right {\r\n    display: none;\r\n  }\r\n\r\n  .highSchoolContent2, .office1Content {\r\n    right: unset;\r\n    float: none;\r\n  }\r\n\r\n  .envelopeContent .envelope {\r\n    position: relative;\r\n    height: 325px;\r\n    width: 514px;\r\n    background: #F9F9F9;\r\n    transition: margin-top 300ms;\r\n    -ms-transition: margin-top 300ms;\r\n    -moz-transition: margin-top 300ms;\r\n    -o-transition: margin-top 300ms;\r\n    -webkit-transition: margin-top 300ms;\r\n  }\r\n\r\n  .envelopeContent .envelope .top {\r\n    position: absolute;\r\n    left: 0px;\r\n    z-index: 20;\r\n    overflow: hidden;\r\n    border-left: 257px solid transparent;\r\n    border-right: 257px solid transparent;\r\n    border-top: 150px solid #333;\r\n    transform-origin: top;\r\n    -ms-transform-origin: top;\r\n    -moz-transform-origin: top;\r\n    -o-transform-origin: top;\r\n    -webkit-transform-origin: top;\r\n    transition: transform 300ms 150ms, z-index 0ms 10ms, height 300ms 0ms, top 300ms 0ms;\r\n    -ms-transition: -ms-transform 300ms 150ms, z-index 0ms 10ms, height 300ms 0ms, top 300ms 0ms;\r\n    -moz-transition: -moz-transform 300ms 150ms, z-index 0ms 10ms, height 300ms 0ms, top 300ms 0ms;\r\n    -o-transition: -o-transform 300ms 150ms, z-index 0ms 10ms, height 300ms 0ms, top 300ms 0ms;\r\n    -webkit-transition: -webkit-transform 300ms 150ms, z-index 0ms 10ms, height 300ms 0ms, top 300ms 0ms;\r\n  }\r\n\r\n  .envelopeContent .envelope .bottom {\r\n    position: absolute;\r\n    z-index: 20;\r\n    bottom: 0px;\r\n    /* left: 10px; */\r\n    border-left: 257px solid transparent;\r\n    border-right: 257px solid transparent;\r\n    border-bottom: 175px solid #333;\r\n  }\r\n\r\n  .envelopeContent .envelope .left {\r\n    position: absolute;\r\n    z-index: 20;\r\n    width: 0px;\r\n    float: left;\r\n    border-left: 248px solid #333;\r\n    border-top: 150px solid transparent;\r\n    border-bottom: 175px solid transparent;\r\n  }\r\n\r\n  .envelopeContent .envelope .right {\r\n    position: absolute;\r\n    z-index: 20;\r\n    width: 0px;\r\n    right: 0px;\r\n    float: right;\r\n    border-right: 248px solid #333;\r\n    border-top: 150px solid transparent;\r\n    border-bottom: 175px solid transparent;\r\n  }\r\n\r\n  .highSchoolContent1, .collegeContent, .office2Content, .highSchoolContent2, .office1Content {\r\n    margin: 0 auto;\r\n  }\r\n}\r\n/*\r\n  ##Device = Most of the Smartphones Mobiles (Portrait)\r\n  ##Screen = B/w 320px to 479px\r\n*/\r\n@media (min-width: 320px) and (max-width: 426px) {\r\n  #articles #TimeLineTitle {\r\n    text-align: center;\r\n  }\r\n\r\n  #TimeLineTitle .TimeLineTop {\r\n    background-image: url('/Leo/assets/TimeLine/TimeLineDecor.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n    height: 70px;\r\n    overflow: hidden;\r\n    margin-top:10px;\r\n  }\r\n\r\n  #TimeLineTitle .TimeLineBottom {\r\n    background-image: url('/Leo/assets/TimeLine/TimeLineDecor.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n    height: 70px;\r\n    overflow: hidden;\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n  #TimeLineTitle .TimeLineText {\r\n    font-family: Algerian;\r\n    font-size: 5vh;\r\n    font-weight: bold;\r\n    background: linear-gradient(to right, #FCF6BA, #BF953F, #FBF5B7, #B38728, #AA771C);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n  }\r\n\r\n  .articleTimeLine {\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n  }\r\n\r\n  .TimeLinePath {\r\n    display: none;\r\n  }\r\n\r\n  .articleMobileSection {\r\n    margin-top: 5%;\r\n    margin-bottom: 12%;\r\n    height: 350px;\r\n  }\r\n\r\n  .birthContent {\r\n    width: 250px;\r\n    height: 250px;\r\n    border-radius: 50%;\r\n    background-image: url('/Leo/assets/TimeLine/TimeLineImage1.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n    opacity: 1;\r\n    box-shadow: inset 0px 0px 25px rgba(0, 0, 0, 0.9);\r\n    text-align: center;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .birthContent::after {\r\n    content: 'Stepped into the world';\r\n    position: absolute;\r\n    top: 80%;\r\n    right: 18%;\r\n    font-family: dancing-font;\r\n    color: #da9e18;\r\n    text-align: center;\r\n    font-size: 19px;\r\n    font-weight: bold;\r\n    display: inline-block;\r\n  }\r\n\r\n  .timedate {\r\n    position: relative;\r\n    bottom: 0px;\r\n    background: #52ccb3;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    left: 50%;\r\n    margin-top: 10px;\r\n    margin-left: -25px;\r\n    color: #fff;\r\n    text-align: center;\r\n    z-index: 2;\r\n  }\r\n\r\n  .timedate::after {\r\n    position: relative;\r\n    display: block;\r\n    width: 70px;\r\n    height: 70px;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    border-radius: 50%;\r\n    border: 1px solid rgba(255, 255, 255, 0.2);\r\n    content: \"\";\r\n    bottom: 75px;\r\n    left: 50%;\r\n    margin-left: -35px;\r\n    box-sizing: border-box;\r\n    z-index: -1;\r\n  }\r\n\r\n  .tt-arrow-side {\r\n    position: relative;\r\n    bottom: 0px;\r\n    left: 50%;\r\n    margin-left: -15px;\r\n    z-index: 2;\r\n    width: 0px;\r\n    height: 0px;\r\n    border-style: solid;\r\n    border-width: 20px 15px 0 15px;\r\n    border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;\r\n  }\r\n\r\n  section:before {\r\n    content: \"\";\r\n    height: 1px;\r\n    background: rgba(255, 255, 255, 0.3);\r\n    background: linear-gradient(to left, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.0) 100%);\r\n    width: 40%;\r\n    right: 0%;\r\n    margin-right: 0px;\r\n    display: block;\r\n    /* bottom: -25px; */\r\n    top: 88%;\r\n    float: right;\r\n    position: relative;\r\n    opacity: 1 !important;\r\n    transition: all 0.25s;\r\n    z-index: -2;\r\n  }\r\n\r\n  section:after {\r\n    content: \"\";\r\n    height: 1px;\r\n    background: rgba(255, 255, 255, 0.3);\r\n    background: linear-gradient(to left, rgba(255, 255, 255, 0.0) 0%, rgba(255, 255, 255, 0.5));\r\n    width: 40%;\r\n    display: block;\r\n    top: -21px;\r\n    position: relative;\r\n    transition: all 0.25s;\r\n    z-index: -2;\r\n    margin-left: 0px;\r\n    bottom: 0px;\r\n  }\r\n\r\n  .highSchoolContent1, .office1Content, .collegeContent, .office2Content {\r\n    width: 270px;\r\n    height: 250px;\r\n    position: relative;\r\n    bottom: 0%;\r\n    margin: 0 auto;\r\n    right: 0%;\r\n    float: none;\r\n  }\r\n\r\n  .highSchoolContentText, .collegeContentText, .office1ContentText, .office2ContentText {\r\n    font-family: dancing-font;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    position: relative;\r\n    top: 73%;\r\n    background-color: #efefef;\r\n    height: 20%;\r\n    padding: 1vh;\r\n    opacity: 0.7;\r\n    color: #5a5f70;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZS1saW5lL3RpbWUtbGluZS5jb21wb25lbnQucmVzcG9uc2l2ZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztDQUdDO0FBQ0QsNEJBQTRCO0FBRTVCOzs7Q0FHQztBQUNELG9EQUFvRDtBQUVwRDs7O0NBR0M7QUFDRCw0QkFBNEI7QUFFNUI7OztDQUdDO0FBQ0QsZ0ZBQWdGO0FBRWhGLHdDQUF3QztBQUN4QztFQUNFO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsb0VBQW9FO0VBQ3RFOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0Isb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjs7RUFFQTtJQUNFLCtDQUErQztJQUMvQyxnREFBZ0Q7SUFDaEQsc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsK0NBQStDO0lBQy9DLGdEQUFnRDtJQUNoRCx5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsNkNBQTZDO0lBQzdDLGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNF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aW5lL3RpbWUtbGluZS5jb21wb25lbnQucmVzcG9uc2l2ZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICMjRGV2aWNlID0gRGVza3RvcHNcclxuICAjI1NjcmVlbiA9IDEyODFweCB0byBoaWdoZXIgcmVzb2x1dGlvbiBkZXNrdG9wc1xyXG4qL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7fVxyXG5cclxuLypcclxuICAjI0RldmljZSA9IExhcHRvcHMsIERlc2t0b3BzXHJcbiAgIyNTY3JlZW4gPSBCL3cgMTAyNXB4IHRvIDEyODBweFxyXG4qL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7fVxyXG5cclxuLypcclxuICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChwb3J0cmFpdClcclxuICAjI1NjcmVlbiA9IEIvdyA3NjhweCB0byAxMDI0cHhcclxuKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge31cclxuXHJcbi8qXHJcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAobGFuZHNjYXBlKVxyXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxyXG4qL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge31cclxuXHJcbi8qIFNtYXJ0cGhvbmVzIChsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQgOiA1MDBweCkge1xyXG4gIC5UaW1lTGluZVBhdGg6YmVmb3JlIHtcclxuICAgIGhlaWdodDogMTI1JTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLmFydGljbGVTZWN0aW9uIHtcclxuICAgIGJvdHRvbTogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmJpcnRoQ29udGVudCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnllYXIge1xyXG4gICAgdG9wOiA1dmg7XHJcbiAgfVxyXG5cclxuICAuaGlnaFNjaG9vbENvbnRlbnQxLCAuY29sbGVnZUNvbnRlbnQsIC5vZmZpY2UyQ29udGVudCwgLmhpZ2hTY2hvb2xDb250ZW50MiwgLm9mZmljZTFDb250ZW50IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5oaWdoU2Nob29sQ29udGVudFRleHQsIC5jb2xsZWdlQ29udGVudFRleHQsIC5vZmZpY2UxQ29udGVudFRleHQsIC5vZmZpY2UyQ29udGVudFRleHQsIC5iaXJ0aENvbnRlbnQ6OmFmdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMnZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudHQtYXJyb3ctbGVmdCwgLnR0LWFycm93LXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDIwcHggMTVweCAwIDE1cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC50dC1hcnJvdy1kb3QsIC50dC1hcnJvdy1kb3QtcmlnaHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5oaWdoU2Nob29sQ29udGVudDIsIC5vZmZpY2UxQ29udGVudCB7XHJcbiAgICByaWdodDogdW5zZXQ7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcblxyXG4gIC5lbnZlbG9wZUNvbnRlbnQgLmVudmVsb3BlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTgwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzNjBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI0Y5RjlGOTtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbi10b3AgMzAwbXM7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogbWFyZ2luLXRvcCAzMDBtcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luLXRvcCAzMDBtcztcclxuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbi10b3AgMzAwbXM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi10b3AgMzAwbXM7XHJcbiAgfVxyXG5cclxuICAuZW52ZWxvcGVDb250ZW50IC5lbnZlbG9wZSAucGFwZXIge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmVudmVsb3BlQ29udGVudCAuZW52ZWxvcGUgLnRvcCB7XHJcbiAgICBib3JkZXItbGVmdDogMTgwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogMTgwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDkwcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmVudmVsb3BlQ29udGVudCAuZW52ZWxvcGUgLmJvdHRvbSB7XHJcbiAgICBib3JkZXItbGVmdDogMTgwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogMTgwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDkwcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmVudmVsb3BlQ29udGVudCAuZW52ZWxvcGUgLmxlZnQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE3NnB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDkwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDkwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5lbnZlbG9wZUNvbnRlbnQgLmVudmVsb3BlIC5yaWdodCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDE3NnB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDkwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDkwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZUluVXBUaW1lTGluZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgYm90dG9tOiAxNSU7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICBib3R0b206IDI1JTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXHJcbiAgIyNTY3JlZW4gPSBCL3cgNDgxcHggdG8gNzY3cHhcclxuKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDQyNnB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuYmlydGhDb250ZW50OjphZnRlciB7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxuICB9XHJcblxyXG4gIC50dC1hcnJvdy1sZWZ0LCAudHQtYXJyb3ctcmlnaHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMjBweCAxNXB4IDAgMTVweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLnR0LWFycm93LWRvdCwgLnR0LWFycm93LWRvdC1yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmhpZ2hTY2hvb2xDb250ZW50MiwgLm9mZmljZTFDb250ZW50IHtcclxuICAgIHJpZ2h0OiB1bnNldDtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmVudmVsb3BlQ29udGVudCAuZW52ZWxvcGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAzMjVweDtcclxuICAgIHdpZHRoOiA1MTRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGOUY5Rjk7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDMwMG1zO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IG1hcmdpbi10b3AgMzAwbXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbi10b3AgMzAwbXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDMwMG1zO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDMwMG1zO1xyXG4gIH1cclxuXHJcbiAgLmVudmVsb3BlQ29udGVudCAuZW52ZWxvcGUgLnRvcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItbGVmdDogMjU3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDI1N3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogMTUwcHggc29saWQgIzMzMztcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIDE1MG1zLCB6LWluZGV4IDBtcyAxMG1zLCBoZWlnaHQgMzAwbXMgMG1zLCB0b3AgMzAwbXMgMG1zO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMzAwbXMgMTUwbXMsIHotaW5kZXggMG1zIDEwbXMsIGhlaWdodCAzMDBtcyAwbXMsIHRvcCAzMDBtcyAwbXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDMwMG1zIDE1MG1zLCB6LWluZGV4IDBtcyAxMG1zLCBoZWlnaHQgMzAwbXMgMG1zLCB0b3AgMzAwbXMgMG1zO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogLW8tdHJhbnNmb3JtIDMwMG1zIDE1MG1zLCB6LWluZGV4IDBtcyAxMG1zLCBoZWlnaHQgMzAwbXMgMG1zLCB0b3AgMzAwbXMgMG1zO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAzMDBtcyAxNTBtcywgei1pbmRleCAwbXMgMTBtcywgaGVpZ2h0IDMwMG1zIDBtcywgdG9wIDMwMG1zIDBtcztcclxuICB9XHJcblxyXG4gIC5lbnZlbG9wZUNvbnRlbnQgLmVudmVsb3BlIC5ib3R0b20ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIC8qIGxlZnQ6IDEwcHg7ICovXHJcbiAgICBib3JkZXItbGVmdDogMjU3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDI1N3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTc1cHggc29saWQgIzMzMztcclxuICB9XHJcblxyXG4gIC5lbnZlbG9wZUNvbnRlbnQgLmVudmVsb3BlIC5sZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDI0OHB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItdG9wOiAxNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDE3NXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLmVudmVsb3BlQ29udGVudCAuZW52ZWxvcGUgLnJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDI0OHB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItdG9wOiAxNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDE3NXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLmhpZ2hTY2hvb2xDb250ZW50MSwgLmNvbGxlZ2VDb250ZW50LCAub2ZmaWNlMkNvbnRlbnQsIC5oaWdoU2Nob29sQ29udGVudDIsIC5vZmZpY2UxQ29udGVudCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcclxuICAjI1NjcmVlbiA9IEIvdyAzMjBweCB0byA0NzlweFxyXG4qL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICNhcnRpY2xlcyAjVGltZUxpbmVUaXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAjVGltZUxpbmVUaXRsZSAuVGltZUxpbmVUb3Age1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL1RpbWVMaW5lL1RpbWVMaW5lRGVjb3Iuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gIH1cclxuXHJcbiAgI1RpbWVMaW5lVGl0bGUgLlRpbWVMaW5lQm90dG9tIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9UaW1lTGluZS9UaW1lTGluZURlY29yLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfVxyXG5cclxuICAjVGltZUxpbmVUaXRsZSAuVGltZUxpbmVUZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBbGdlcmlhbjtcclxuICAgIGZvbnQtc2l6ZTogNXZoO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGQ0Y2QkEsICNCRjk1M0YsICNGQkY1QjcsICNCMzg3MjgsICNBQTc3MUMpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuYXJ0aWNsZVRpbWVMaW5lIHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcblxyXG4gIC5UaW1lTGluZVBhdGgge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5hcnRpY2xlTW9iaWxlU2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEyJTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgfVxyXG5cclxuICAuYmlydGhDb250ZW50IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvVGltZUxpbmUvVGltZUxpbmVJbWFnZTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuYmlydGhDb250ZW50OjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnU3RlcHBlZCBpbnRvIHRoZSB3b3JsZCc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDgwJTtcclxuICAgIHJpZ2h0OiAxOCU7XHJcbiAgICBmb250LWZhbWlseTogZGFuY2luZy1mb250O1xyXG4gICAgY29sb3I6ICNkYTllMTg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC50aW1lZGF0ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICM1MmNjYjM7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuICAudGltZWRhdGU6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm90dG9tOiA3NXB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbiAgLnR0LWFycm93LXNpZGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMjBweCAxNXB4IDAgMTVweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wKSAxMDAlKTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLyogYm90dG9tOiAtMjVweDsgKi9cclxuICAgIHRvcDogODglO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgei1pbmRleDogLTI7XHJcbiAgfVxyXG5cclxuICBzZWN0aW9uOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSk7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0b3A6IC0yMXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgei1pbmRleDogLTI7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuaGlnaFNjaG9vbENvbnRlbnQxLCAub2ZmaWNlMUNvbnRlbnQsIC5jb2xsZWdlQ29udGVudCwgLm9mZmljZTJDb250ZW50IHtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICByaWdodDogMCU7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcblxyXG4gIC5oaWdoU2Nob29sQ29udGVudFRleHQsIC5jb2xsZWdlQ29udGVudFRleHQsIC5vZmZpY2UxQ29udGVudFRleHQsIC5vZmZpY2UyQ29udGVudFRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IGRhbmNpbmctZm9udDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA3MyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBwYWRkaW5nOiAxdmg7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBjb2xvcjogIzVhNWY3MDtcclxuICB9XHJcbn1cclxuIl19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeLineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-time-line',
          templateUrl: './time-line.component.html',
          styleUrls: ['./time-line.component.css', './time-line.component.responsive.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        onMousewheel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousewheel', ['$event']]
        }],
        handleTouch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchstart', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchend', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchcancel', ['$event']]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }],
        onOrientationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:orientationchange', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/assets/anime.min.js":
  /*!*********************************!*\
    !*** ./src/assets/anime.min.js ***!
    \*********************************/

  /*! no static exports found */

  /***/
  function srcAssetsAnimeMinJs(module, exports, __webpack_require__) {
    /*
     * anime.js v3.2.0
     * (c) 2020 Julian Garnier
     * Released under the MIT license
     * animejs.com
     */
    !function (n, e) {
      true ? module.exports = e() : undefined;
    }(this, function () {
      "use strict";

      var n = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0
      },
          e = {
        duration: 1e3,
        delay: 0,
        endDelay: 0,
        easing: "easeOutElastic(1, .5)",
        round: 0
      },
          r = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
          t = {
        CSS: {},
        springs: {}
      };

      function a(n, e, r) {
        return Math.min(Math.max(n, e), r);
      }

      function o(n, e) {
        return n.indexOf(e) > -1;
      }

      function u(n, e) {
        return n.apply(null, e);
      }

      var i = {
        arr: function arr(n) {
          return Array.isArray(n);
        },
        obj: function obj(n) {
          return o(Object.prototype.toString.call(n), "Object");
        },
        pth: function pth(n) {
          return i.obj(n) && n.hasOwnProperty("totalLength");
        },
        svg: function svg(n) {
          return n instanceof SVGElement;
        },
        inp: function inp(n) {
          return n instanceof HTMLInputElement;
        },
        dom: function dom(n) {
          return n.nodeType || i.svg(n);
        },
        str: function str(n) {
          return "string" == typeof n;
        },
        fnc: function fnc(n) {
          return "function" == typeof n;
        },
        und: function und(n) {
          return void 0 === n;
        },
        hex: function hex(n) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n);
        },
        rgb: function rgb(n) {
          return /^rgb/.test(n);
        },
        hsl: function hsl(n) {
          return /^hsl/.test(n);
        },
        col: function col(n) {
          return i.hex(n) || i.rgb(n) || i.hsl(n);
        },
        key: function key(r) {
          return !n.hasOwnProperty(r) && !e.hasOwnProperty(r) && "targets" !== r && "keyframes" !== r;
        }
      };

      function c(n) {
        var e = /\(([^)]+)\)/.exec(n);
        return e ? e[1].split(",").map(function (n) {
          return parseFloat(n);
        }) : [];
      }

      function s(n, e) {
        var r = c(n),
            o = a(i.und(r[0]) ? 1 : r[0], .1, 100),
            u = a(i.und(r[1]) ? 100 : r[1], .1, 100),
            s = a(i.und(r[2]) ? 10 : r[2], .1, 100),
            f = a(i.und(r[3]) ? 0 : r[3], .1, 100),
            l = Math.sqrt(u / o),
            d = s / (2 * Math.sqrt(u * o)),
            p = d < 1 ? l * Math.sqrt(1 - d * d) : 0,
            h = 1,
            v = d < 1 ? (d * l - f) / p : -f + l;

        function g(n) {
          var r = e ? e * n / 1e3 : n;
          return r = d < 1 ? Math.exp(-r * d * l) * (h * Math.cos(p * r) + v * Math.sin(p * r)) : (h + v * r) * Math.exp(-r * l), 0 === n || 1 === n ? n : 1 - r;
        }

        return e ? g : function () {
          var e = t.springs[n];
          if (e) return e;

          for (var r = 0, a = 0;;) {
            if (1 === g(r += 1 / 6)) {
              if (++a >= 16) break;
            } else a = 0;
          }

          var o = r * (1 / 6) * 1e3;
          return t.springs[n] = o, o;
        };
      }

      function f(n) {
        return void 0 === n && (n = 10), function (e) {
          return Math.ceil(a(e, 1e-6, 1) * n) * (1 / n);
        };
      }

      var l,
          d,
          p = function () {
        var n = 11,
            e = 1 / (n - 1);

        function r(n, e) {
          return 1 - 3 * e + 3 * n;
        }

        function t(n, e) {
          return 3 * e - 6 * n;
        }

        function a(n) {
          return 3 * n;
        }

        function o(n, e, o) {
          return ((r(e, o) * n + t(e, o)) * n + a(e)) * n;
        }

        function u(n, e, o) {
          return 3 * r(e, o) * n * n + 2 * t(e, o) * n + a(e);
        }

        return function (r, t, a, i) {
          if (0 <= r && r <= 1 && 0 <= a && a <= 1) {
            var c = new Float32Array(n);
            if (r !== t || a !== i) for (var s = 0; s < n; ++s) {
              c[s] = o(s * e, r, a);
            }
            return function (n) {
              return r === t && a === i ? n : 0 === n || 1 === n ? n : o(f(n), t, i);
            };
          }

          function f(t) {
            for (var i = 0, s = 1, f = n - 1; s !== f && c[s] <= t; ++s) {
              i += e;
            }

            var l = i + (t - c[--s]) / (c[s + 1] - c[s]) * e,
                d = u(l, r, a);
            return d >= .001 ? function (n, e, r, t) {
              for (var a = 0; a < 4; ++a) {
                var i = u(e, r, t);
                if (0 === i) return e;
                e -= (o(e, r, t) - n) / i;
              }

              return e;
            }(t, l, r, a) : 0 === d ? l : function (n, e, r, t, a) {
              for (var u, i, c = 0; (u = o(i = e + (r - e) / 2, t, a) - n) > 0 ? r = i : e = i, Math.abs(u) > 1e-7 && ++c < 10;) {
                ;
              }

              return i;
            }(t, i, i + e, r, a);
          }
        };
      }(),
          h = (l = {
        linear: function linear() {
          return function (n) {
            return n;
          };
        }
      }, d = {
        Sine: function Sine() {
          return function (n) {
            return 1 - Math.cos(n * Math.PI / 2);
          };
        },
        Circ: function Circ() {
          return function (n) {
            return 1 - Math.sqrt(1 - n * n);
          };
        },
        Back: function Back() {
          return function (n) {
            return n * n * (3 * n - 2);
          };
        },
        Bounce: function Bounce() {
          return function (n) {
            for (var e, r = 4; n < ((e = Math.pow(2, --r)) - 1) / 11;) {
              ;
            }

            return 1 / Math.pow(4, 3 - r) - 7.5625 * Math.pow((3 * e - 2) / 22 - n, 2);
          };
        },
        Elastic: function Elastic(n, e) {
          void 0 === n && (n = 1), void 0 === e && (e = .5);
          var r = a(n, 1, 10),
              t = a(e, .1, 2);
          return function (n) {
            return 0 === n || 1 === n ? n : -r * Math.pow(2, 10 * (n - 1)) * Math.sin((n - 1 - t / (2 * Math.PI) * Math.asin(1 / r)) * (2 * Math.PI) / t);
          };
        }
      }, ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (n, e) {
        d[n] = function () {
          return function (n) {
            return Math.pow(n, e + 2);
          };
        };
      }), Object.keys(d).forEach(function (n) {
        var e = d[n];
        l["easeIn" + n] = e, l["easeOut" + n] = function (n, r) {
          return function (t) {
            return 1 - e(n, r)(1 - t);
          };
        }, l["easeInOut" + n] = function (n, r) {
          return function (t) {
            return t < .5 ? e(n, r)(2 * t) / 2 : 1 - e(n, r)(-2 * t + 2) / 2;
          };
        };
      }), l);

      function v(n, e) {
        if (i.fnc(n)) return n;
        var r = n.split("(")[0],
            t = h[r],
            a = c(n);

        switch (r) {
          case "spring":
            return s(n, e);

          case "cubicBezier":
            return u(p, a);

          case "steps":
            return u(f, a);

          default:
            return u(t, a);
        }
      }

      function g(n) {
        try {
          return document.querySelectorAll(n);
        } catch (n) {
          return;
        }
      }

      function m(n, e) {
        for (var r = n.length, t = arguments.length >= 2 ? arguments[1] : void 0, a = [], o = 0; o < r; o++) {
          if (o in n) {
            var u = n[o];
            e.call(t, u, o, n) && a.push(u);
          }
        }

        return a;
      }

      function y(n) {
        return n.reduce(function (n, e) {
          return n.concat(i.arr(e) ? y(e) : e);
        }, []);
      }

      function b(n) {
        return i.arr(n) ? n : (i.str(n) && (n = g(n) || n), n instanceof NodeList || n instanceof HTMLCollection ? [].slice.call(n) : [n]);
      }

      function x(n, e) {
        return n.some(function (n) {
          return n === e;
        });
      }

      function M(n) {
        var e = {};

        for (var r in n) {
          e[r] = n[r];
        }

        return e;
      }

      function w(n, e) {
        var r = M(n);

        for (var t in n) {
          r[t] = e.hasOwnProperty(t) ? e[t] : n[t];
        }

        return r;
      }

      function k(n, e) {
        var r = M(n);

        for (var t in e) {
          r[t] = i.und(n[t]) ? e[t] : n[t];
        }

        return r;
      }

      function O(n) {
        return i.rgb(n) ? (r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = n)) ? "rgba(" + r[1] + ",1)" : e : i.hex(n) ? (t = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (n, e, r, t) {
          return e + e + r + r + t + t;
        }), a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t), "rgba(" + parseInt(a[1], 16) + "," + parseInt(a[2], 16) + "," + parseInt(a[3], 16) + ",1)") : i.hsl(n) ? function (n) {
          var e,
              r,
              t,
              a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),
              o = parseInt(a[1], 10) / 360,
              u = parseInt(a[2], 10) / 100,
              i = parseInt(a[3], 10) / 100,
              c = a[4] || 1;

          function s(n, e, r) {
            return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? n + 6 * (e - n) * r : r < .5 ? e : r < 2 / 3 ? n + (e - n) * (2 / 3 - r) * 6 : n;
          }

          if (0 == u) e = r = t = i;else {
            var f = i < .5 ? i * (1 + u) : i + u - i * u,
                l = 2 * i - f;
            e = s(l, f, o + 1 / 3), r = s(l, f, o), t = s(l, f, o - 1 / 3);
          }
          return "rgba(" + 255 * e + "," + 255 * r + "," + 255 * t + "," + c + ")";
        }(n) : void 0;
        var e, r, t, a;
      }

      function C(n) {
        var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);
        if (e) return e[1];
      }

      function B(n, e) {
        return i.fnc(n) ? n(e.target, e.id, e.total) : n;
      }

      function P(n, e) {
        return n.getAttribute(e);
      }

      function I(n, e, r) {
        if (x([r, "deg", "rad", "turn"], C(e))) return e;
        var a = t.CSS[e + r];
        if (!i.und(a)) return a;
        var o = document.createElement(n.tagName),
            u = n.parentNode && n.parentNode !== document ? n.parentNode : document.body;
        u.appendChild(o), o.style.position = "absolute", o.style.width = 100 + r;
        var c = 100 / o.offsetWidth;
        u.removeChild(o);
        var s = c * parseFloat(e);
        return t.CSS[e + r] = s, s;
      }

      function T(n, e, r) {
        if (e in n.style) {
          var t = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
              a = n.style[e] || getComputedStyle(n).getPropertyValue(t) || "0";
          return r ? I(n, a, r) : a;
        }
      }

      function D(n, e) {
        return i.dom(n) && !i.inp(n) && (P(n, e) || i.svg(n) && n[e]) ? "attribute" : i.dom(n) && x(r, e) ? "transform" : i.dom(n) && "transform" !== e && T(n, e) ? "css" : null != n[e] ? "object" : void 0;
      }

      function E(n) {
        if (i.dom(n)) {
          for (var e, r = n.style.transform || "", t = /(\w+)\(([^)]*)\)/g, a = new Map(); e = t.exec(r);) {
            a.set(e[1], e[2]);
          }

          return a;
        }
      }

      function F(n, e, r, t) {
        var a,
            u = o(e, "scale") ? 1 : 0 + (o(a = e, "translate") || "perspective" === a ? "px" : o(a, "rotate") || o(a, "skew") ? "deg" : void 0),
            i = E(n).get(e) || u;
        return r && (r.transforms.list.set(e, i), r.transforms.last = e), t ? I(n, i, t) : i;
      }

      function N(n, e, r, t) {
        switch (D(n, e)) {
          case "transform":
            return F(n, e, t, r);

          case "css":
            return T(n, e, r);

          case "attribute":
            return P(n, e);

          default:
            return n[e] || 0;
        }
      }

      function A(n, e) {
        var r = /^(\*=|\+=|-=)/.exec(n);
        if (!r) return n;
        var t = C(n) || 0,
            a = parseFloat(e),
            o = parseFloat(n.replace(r[0], ""));

        switch (r[0][0]) {
          case "+":
            return a + o + t;

          case "-":
            return a - o + t;

          case "*":
            return a * o + t;
        }
      }

      function L(n, e) {
        if (i.col(n)) return O(n);
        if (/\s/g.test(n)) return n;
        var r = C(n),
            t = r ? n.substr(0, n.length - r.length) : n;
        return e ? t + e : t;
      }

      function j(n, e) {
        return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
      }

      function S(n) {
        for (var e, r = n.points, t = 0, a = 0; a < r.numberOfItems; a++) {
          var o = r.getItem(a);
          a > 0 && (t += j(e, o)), e = o;
        }

        return t;
      }

      function q(n) {
        if (n.getTotalLength) return n.getTotalLength();

        switch (n.tagName.toLowerCase()) {
          case "circle":
            return o = n, 2 * Math.PI * P(o, "r");

          case "rect":
            return 2 * P(a = n, "width") + 2 * P(a, "height");

          case "line":
            return j({
              x: P(t = n, "x1"),
              y: P(t, "y1")
            }, {
              x: P(t, "x2"),
              y: P(t, "y2")
            });

          case "polyline":
            return S(n);

          case "polygon":
            return r = (e = n).points, S(e) + j(r.getItem(r.numberOfItems - 1), r.getItem(0));
        }

        var e, r, t, a, o;
      }

      function $(n, e) {
        var r = e || {},
            t = r.el || function (n) {
          for (var e = n.parentNode; i.svg(e) && i.svg(e.parentNode);) {
            e = e.parentNode;
          }

          return e;
        }(n),
            a = t.getBoundingClientRect(),
            o = P(t, "viewBox"),
            u = a.width,
            c = a.height,
            s = r.viewBox || (o ? o.split(" ") : [0, 0, u, c]);

        return {
          el: t,
          viewBox: s,
          x: s[0] / 1,
          y: s[1] / 1,
          w: u / s[2],
          h: c / s[3]
        };
      }

      function X(n, e) {
        function r(r) {
          void 0 === r && (r = 0);
          var t = e + r >= 1 ? e + r : 0;
          return n.el.getPointAtLength(t);
        }

        var t = $(n.el, n.svg),
            a = r(),
            o = r(-1),
            u = r(1);

        switch (n.property) {
          case "x":
            return (a.x - t.x) * t.w;

          case "y":
            return (a.y - t.y) * t.h;

          case "angle":
            return 180 * Math.atan2(u.y - o.y, u.x - o.x) / Math.PI;
        }
      }

      function Y(n, e) {
        var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
            t = L(i.pth(n) ? n.totalLength : n, e) + "";
        return {
          original: t,
          numbers: t.match(r) ? t.match(r).map(Number) : [0],
          strings: i.str(n) || e ? t.split(r) : []
        };
      }

      function Z(n) {
        return m(n ? y(i.arr(n) ? n.map(b) : b(n)) : [], function (n, e, r) {
          return r.indexOf(n) === e;
        });
      }

      function Q(n) {
        var e = Z(n);
        return e.map(function (n, r) {
          return {
            target: n,
            id: r,
            total: e.length,
            transforms: {
              list: E(n)
            }
          };
        });
      }

      function V(n, e) {
        var r = M(e);

        if (/^spring/.test(r.easing) && (r.duration = s(r.easing)), i.arr(n)) {
          var t = n.length;
          2 === t && !i.obj(n[0]) ? n = {
            value: n
          } : i.fnc(e.duration) || (r.duration = e.duration / t);
        }

        var a = i.arr(n) ? n : [n];
        return a.map(function (n, r) {
          var t = i.obj(n) && !i.pth(n) ? n : {
            value: n
          };
          return i.und(t.delay) && (t.delay = r ? 0 : e.delay), i.und(t.endDelay) && (t.endDelay = r === a.length - 1 ? e.endDelay : 0), t;
        }).map(function (n) {
          return k(n, r);
        });
      }

      function z(n, e) {
        var r = [],
            t = e.keyframes;

        for (var a in t && (e = k(function (n) {
          for (var e = m(y(n.map(function (n) {
            return Object.keys(n);
          })), function (n) {
            return i.key(n);
          }).reduce(function (n, e) {
            return n.indexOf(e) < 0 && n.push(e), n;
          }, []), r = {}, t = function t(_t2) {
            var a = e[_t2];
            r[a] = n.map(function (n) {
              var e = {};

              for (var r in n) {
                i.key(r) ? r == a && (e.value = n[r]) : e[r] = n[r];
              }

              return e;
            });
          }, a = 0; a < e.length; a++) {
            t(a);
          }

          return r;
        }(t), e)), e) {
          i.key(a) && r.push({
            name: a,
            tweens: V(e[a], n)
          });
        }

        return r;
      }

      function H(n, e) {
        var r;
        return n.tweens.map(function (t) {
          var a = function (n, e) {
            var r = {};

            for (var t in n) {
              var a = B(n[t], e);
              i.arr(a) && 1 === (a = a.map(function (n) {
                return B(n, e);
              })).length && (a = a[0]), r[t] = a;
            }

            return r.duration = parseFloat(r.duration), r.delay = parseFloat(r.delay), r;
          }(t, e),
              o = a.value,
              u = i.arr(o) ? o[1] : o,
              c = C(u),
              s = N(e.target, n.name, c, e),
              f = r ? r.to.original : s,
              l = i.arr(o) ? o[0] : f,
              d = C(l) || C(s),
              p = c || d;

          return i.und(u) && (u = f), a.from = Y(l, p), a.to = Y(A(u, l), p), a.start = r ? r.end : 0, a.end = a.start + a.delay + a.duration + a.endDelay, a.easing = v(a.easing, a.duration), a.isPath = i.pth(o), a.isColor = i.col(a.from.original), a.isColor && (a.round = 1), r = a, a;
        });
      }

      var G = {
        css: function css(n, e, r) {
          return n.style[e] = r;
        },
        attribute: function attribute(n, e, r) {
          return n.setAttribute(e, r);
        },
        object: function object(n, e, r) {
          return n[e] = r;
        },
        transform: function transform(n, e, r, t, a) {
          if (t.list.set(e, r), e === t.last || a) {
            var o = "";
            t.list.forEach(function (n, e) {
              o += e + "(" + n + ") ";
            }), n.style.transform = o;
          }
        }
      };

      function R(n, e) {
        Q(n).forEach(function (n) {
          for (var r in e) {
            var t = B(e[r], n),
                a = n.target,
                o = C(t),
                u = N(a, r, o, n),
                i = A(L(t, o || C(u)), u),
                c = D(a, r);
            G[c](a, r, i, n.transforms, !0);
          }
        });
      }

      function W(n, e) {
        return m(y(n.map(function (n) {
          return e.map(function (e) {
            return function (n, e) {
              var r = D(n.target, e.name);

              if (r) {
                var t = H(e, n),
                    a = t[t.length - 1];
                return {
                  type: r,
                  property: e.name,
                  animatable: n,
                  tweens: t,
                  duration: a.end,
                  delay: t[0].delay,
                  endDelay: a.endDelay
                };
              }
            }(n, e);
          });
        })), function (n) {
          return !i.und(n);
        });
      }

      function J(n, e) {
        var r = n.length,
            t = function t(n) {
          return n.timelineOffset ? n.timelineOffset : 0;
        },
            a = {};

        return a.duration = r ? Math.max.apply(Math, n.map(function (n) {
          return t(n) + n.duration;
        })) : e.duration, a.delay = r ? Math.min.apply(Math, n.map(function (n) {
          return t(n) + n.delay;
        })) : e.delay, a.endDelay = r ? a.duration - Math.max.apply(Math, n.map(function (n) {
          return t(n) + n.duration - n.endDelay;
        })) : e.endDelay, a;
      }

      var K = 0;

      var U,
          _ = [],
          nn = [],
          en = function () {
        function n() {
          U = requestAnimationFrame(e);
        }

        function e(e) {
          var r = _.length;

          if (r) {
            for (var t = 0; t < r;) {
              var a = _[t];

              if (a.paused) {
                var o = _.indexOf(a);

                o > -1 && (_.splice(o, 1), r = _.length);
              } else a.tick(e);

              t++;
            }

            n();
          } else U = cancelAnimationFrame(U);
        }

        return n;
      }();

      function rn(r) {
        void 0 === r && (r = {});
        var t,
            o = 0,
            u = 0,
            i = 0,
            c = 0,
            s = null;

        function f(n) {
          var e = window.Promise && new Promise(function (n) {
            return s = n;
          });
          return n.finished = e, e;
        }

        var l,
            d,
            p,
            h,
            v,
            g,
            y,
            b,
            x = (d = w(n, l = r), p = w(e, l), h = z(p, l), v = Q(l.targets), g = W(v, h), y = J(g, p), b = K, K++, k(d, {
          id: b,
          children: [],
          animatables: v,
          animations: g,
          duration: y.duration,
          delay: y.delay,
          endDelay: y.endDelay
        }));
        f(x);

        function M() {
          var n = x.direction;
          "alternate" !== n && (x.direction = "normal" !== n ? "normal" : "reverse"), x.reversed = !x.reversed, t.forEach(function (n) {
            return n.reversed = x.reversed;
          });
        }

        function O(n) {
          return x.reversed ? x.duration - n : n;
        }

        function C() {
          o = 0, u = O(x.currentTime) * (1 / rn.speed);
        }

        function B(n, e) {
          e && e.seek(n - e.timelineOffset);
        }

        function P(n) {
          for (var e = 0, r = x.animations, t = r.length; e < t;) {
            var o = r[e],
                u = o.animatable,
                i = o.tweens,
                c = i.length - 1,
                s = i[c];
            c && (s = m(i, function (e) {
              return n < e.end;
            })[0] || s);

            for (var f = a(n - s.start - s.delay, 0, s.duration) / s.duration, l = isNaN(f) ? 1 : s.easing(f), d = s.to.strings, p = s.round, h = [], v = s.to.numbers.length, g = void 0, y = 0; y < v; y++) {
              var b = void 0,
                  M = s.to.numbers[y],
                  w = s.from.numbers[y] || 0;
              b = s.isPath ? X(s.value, l * M) : w + l * (M - w), p && (s.isColor && y > 2 || (b = Math.round(b * p) / p)), h.push(b);
            }

            var k = d.length;

            if (k) {
              g = d[0];

              for (var O = 0; O < k; O++) {
                d[O];
                var C = d[O + 1],
                    B = h[O];
                isNaN(B) || (g += C ? B + C : B + " ");
              }
            } else g = h[0];

            G[o.type](u.target, o.property, g, u.transforms), o.currentValue = g, e++;
          }
        }

        function I(n) {
          x[n] && !x.passThrough && x[n](x);
        }

        function T(n) {
          var e = x.duration,
              r = x.delay,
              l = e - x.endDelay,
              d = O(n);
          x.progress = a(d / e * 100, 0, 100), x.reversePlayback = d < x.currentTime, t && function (n) {
            if (x.reversePlayback) for (var e = c; e--;) {
              B(n, t[e]);
            } else for (var r = 0; r < c; r++) {
              B(n, t[r]);
            }
          }(d), !x.began && x.currentTime > 0 && (x.began = !0, I("begin")), !x.loopBegan && x.currentTime > 0 && (x.loopBegan = !0, I("loopBegin")), d <= r && 0 !== x.currentTime && P(0), (d >= l && x.currentTime !== e || !e) && P(e), d > r && d < l ? (x.changeBegan || (x.changeBegan = !0, x.changeCompleted = !1, I("changeBegin")), I("change"), P(d)) : x.changeBegan && (x.changeCompleted = !0, x.changeBegan = !1, I("changeComplete")), x.currentTime = a(d, 0, e), x.began && I("update"), n >= e && (u = 0, x.remaining && !0 !== x.remaining && x.remaining--, x.remaining ? (o = i, I("loopComplete"), x.loopBegan = !1, "alternate" === x.direction && M()) : (x.paused = !0, x.completed || (x.completed = !0, I("loopComplete"), I("complete"), !x.passThrough && "Promise" in window && (s(), f(x)))));
        }

        return x.reset = function () {
          var n = x.direction;
          x.passThrough = !1, x.currentTime = 0, x.progress = 0, x.paused = !0, x.began = !1, x.loopBegan = !1, x.changeBegan = !1, x.completed = !1, x.changeCompleted = !1, x.reversePlayback = !1, x.reversed = "reverse" === n, x.remaining = x.loop, t = x.children;

          for (var e = c = t.length; e--;) {
            x.children[e].reset();
          }

          (x.reversed && !0 !== x.loop || "alternate" === n && 1 === x.loop) && x.remaining++, P(x.reversed ? x.duration : 0);
        }, x.set = function (n, e) {
          return R(n, e), x;
        }, x.tick = function (n) {
          i = n, o || (o = i), T((i + (u - o)) * rn.speed);
        }, x.seek = function (n) {
          T(O(n));
        }, x.pause = function () {
          x.paused = !0, C();
        }, x.play = function () {
          x.paused && (x.completed && x.reset(), x.paused = !1, _.push(x), C(), U || en());
        }, x.reverse = function () {
          M(), x.completed = !x.reversed, C();
        }, x.restart = function () {
          x.reset(), x.play();
        }, x.reset(), x.autoplay && x.play(), x;
      }

      function tn(n, e) {
        for (var r = e.length; r--;) {
          x(n, e[r].animatable.target) && e.splice(r, 1);
        }
      }

      return "undefined" != typeof document && document.addEventListener("visibilitychange", function () {
        document.hidden ? (_.forEach(function (n) {
          return n.pause();
        }), nn = _.slice(0), rn.running = _ = []) : nn.forEach(function (n) {
          return n.play();
        });
      }), rn.version = "3.2.0", rn.speed = 1, rn.running = _, rn.remove = function (n) {
        for (var e = Z(n), r = _.length; r--;) {
          var t = _[r],
              a = t.animations,
              o = t.children;
          tn(e, a);

          for (var u = o.length; u--;) {
            var i = o[u],
                c = i.animations;
            tn(e, c), c.length || i.children.length || o.splice(u, 1);
          }

          a.length || o.length || t.pause();
        }
      }, rn.get = N, rn.set = R, rn.convertPx = I, rn.path = function (n, e) {
        var r = i.str(n) ? g(n)[0] : n,
            t = e || 100;
        return function (n) {
          return {
            property: n,
            el: r,
            svg: $(r),
            totalLength: q(r) * (t / 100)
          };
        };
      }, rn.setDashoffset = function (n) {
        var e = q(n);
        return n.setAttribute("stroke-dasharray", e), e;
      }, rn.stagger = function (n, e) {
        void 0 === e && (e = {});
        var r = e.direction || "normal",
            t = e.easing ? v(e.easing) : null,
            a = e.grid,
            o = e.axis,
            u = e.from || 0,
            c = "first" === u,
            s = "center" === u,
            f = "last" === u,
            l = i.arr(n),
            d = l ? parseFloat(n[0]) : parseFloat(n),
            p = l ? parseFloat(n[1]) : 0,
            h = C(l ? n[1] : n) || 0,
            g = e.start || 0 + (l ? d : 0),
            m = [],
            y = 0;
        return function (n, e, i) {
          if (c && (u = 0), s && (u = (i - 1) / 2), f && (u = i - 1), !m.length) {
            for (var v = 0; v < i; v++) {
              if (a) {
                var b = s ? (a[0] - 1) / 2 : u % a[0],
                    x = s ? (a[1] - 1) / 2 : Math.floor(u / a[0]),
                    M = b - v % a[0],
                    w = x - Math.floor(v / a[0]),
                    k = Math.sqrt(M * M + w * w);
                "x" === o && (k = -M), "y" === o && (k = -w), m.push(k);
              } else m.push(Math.abs(u - v));

              y = Math.max.apply(Math, m);
            }

            t && (m = m.map(function (n) {
              return t(n / y) * y;
            })), "reverse" === r && (m = m.map(function (n) {
              return o ? n < 0 ? -1 * n : -n : Math.abs(y - n);
            }));
          }

          return g + (l ? (p - d) / y : d) * (Math.round(100 * m[e]) / 100) + h;
        };
      }, rn.timeline = function (n) {
        void 0 === n && (n = {});
        var r = rn(n);
        return r.duration = 0, r.add = function (t, a) {
          var o = _.indexOf(r),
              u = r.children;

          function c(n) {
            n.passThrough = !0;
          }

          o > -1 && _.splice(o, 1);

          for (var s = 0; s < u.length; s++) {
            c(u[s]);
          }

          var f = k(t, w(e, n));
          f.targets = f.targets || n.targets;
          var l = r.duration;
          f.autoplay = !1, f.direction = r.direction, f.timelineOffset = i.und(a) ? l : A(a, l), c(r), r.seek(f.timelineOffset);
          var d = rn(f);
          c(d), u.push(d);
          var p = J(u, n);
          return r.delay = p.delay, r.endDelay = p.endDelay, r.duration = p.duration, r.seek(0), r.reset(), r.autoplay && r.play(), r;
        }, r;
      }, rn.easing = v, rn.penner = h, rn.random = function (n, e) {
        return Math.floor(Math.random() * (e - n + 1)) + n;
      }, rn;
    });
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\@MyData\Leo\Personal\Angular\LeoPortfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map