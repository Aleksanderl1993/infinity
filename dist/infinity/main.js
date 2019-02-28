(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<router-outlet></router-outlet>-->\n\n<app-header></app-header>\n<app-mission></app-mission>\n<app-clients></app-clients>\n<app-products></app-products>\n<app-map></app-map>\n<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'infinity';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _content_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/header/header.component */ "./src/app/content/header/header.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _content_mission_mission_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/mission/mission.component */ "./src/app/content/mission/mission.component.ts");
/* harmony import */ var _content_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/clients/clients.component */ "./src/app/content/clients/clients.component.ts");
/* harmony import */ var _content_products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/products/products.component */ "./src/app/content/products/products.component.ts");
/* harmony import */ var _content_map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/map/map.component */ "./src/app/content/map/map.component.ts");
/* harmony import */ var _content_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content/contact/contact.component */ "./src/app/content/contact/contact.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");






//  owl carousel import








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _content_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _content_mission_mission_component__WEBPACK_IMPORTED_MODULE_7__["MissionComponent"],
                _content_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"],
                _content_products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"],
                _content_map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"],
                _content_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__["OwlModule"]
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/clients/clients.component.html":
/*!********************************************************!*\
  !*** ./src/app/content/clients/clients.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"clients\" class=\"box\">\n    <div class=\"container\">\n        <h2>Clients</h2>\n\n\n            <owl-carousel [options]=\"mySlideOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme', 'sliding']\">\n                <div class=\"item carousel-content\" *ngFor=\"let image of mySlideImages;let i = index\">\n                    <div class=\"carousel-img\">\n                        <img src={{image}}/>\n                    </div>\n                    <div class=\"carousel-desc\">\n                        <p class=\"clients-quote\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                        <p class=\"clients-quote-name\">Project Manager / <a href=\"#\">Infinity-group.pl</a></p>\n                        <div>\n                            <span>web design</span>\n                            <span>usability</span>\n                            <span>e-commerce</span>\n                        </div>\n\n                    </div>\n                </div>\n            </owl-carousel>\n\n\n    </div>\n    <div class=\"page-number\">2/5</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/clients/clients.component.scss":
/*!********************************************************!*\
  !*** ./src/app/content/clients/clients.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Variables\n */\n#clients {\n  background: url('bg2.jpg');\n  height: 724px; }\n#clients .page-number {\n    color: #ffffff;\n    border-bottom-color: #ffffff; }\n.carousel-content .clients-quote, .carousel-content .clients-quote-name {\n  font-size: 30px;\n  font-weight: 300;\n  color: #2d2d2d; }\n.carousel-img img {\n  width: auto;\n  margin-right: 30px; }\n.owl-carousel button.owl-dot.active:focus {\n  outline-color: red !important; }\n.carousel-content {\n  display: flex; }\n.carousel-content .clients-quote {\n    position: relative; }\n.carousel-content .clients-quote:after {\n      position: absolute;\n      display: block;\n      content: '';\n      left: -40px;\n      top: 0;\n      background: url('quote.png');\n      width: 29px;\n      height: 23px; }\n.carousel-content .clients-quote-name {\n    margin: 10px 0 20px 0; }\n.carousel-content .clients-quote-name a {\n      color: #ffffff; }\n.carousel-content div span {\n    border: 1px solid #ffffff;\n    color: #ffffff;\n    padding: 3px;\n    margin-right: 5px; }\n@media all and (max-width: 979px) {\n  .carousel-content {\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 10px; }\n  .carousel-content .clients-quote, .carousel-content .clients-quote-name {\n    font-size: 20px; }\n  .clients-quote:after {\n    left: 0 !important;\n    top: -30px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb3JlL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb250ZW50L2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb250ZW50L2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUNFRTtBQ0FGO0VBQ0ksMEJBQTBDO0VBQzFDLGFBQWEsRUFBQTtBQUZqQjtJQUtRLGNGQ2E7SUVBYiw0QkZBYSxFQUFBO0FFTXJCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjRlJzQixFQUFBO0FFVzFCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksNkJBQTZCLEVBQUE7QUFHakM7RUFDSSxhQUFhLEVBQUE7QUFEakI7SUFLUSxrQkFBa0IsRUFBQTtBQUwxQjtNQVFZLGtCQUFrQjtNQUNsQixjQUFjO01BQ2QsV0FBVztNQUNYLFdBQVc7TUFDWCxNQUFNO01BQ04sNEJBQTRDO01BQzVDLFdBQVc7TUFDWCxZQUFZLEVBQUE7QUFmeEI7SUFxQlEscUJBQXFCLEVBQUE7QUFyQjdCO01Bd0JZLGNGN0NTLEVBQUE7QUVxQnJCO0lBOEJZLHlCRm5EUztJRW9EVCxjRnBEUztJRXFEVCxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7QUFLN0I7RUF0Q0E7SUF3Q1Esc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQkFBb0IsRUFBQTtFQXpENUI7SUE0RFEsZUFBZSxFQUFBO0VBRW5CO0lBRUksa0JBQWtCO0lBQ2xCLHFCQUFxQixFQUFBLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVmFyaWFibGVzXG4gKi9cblxuLy8gIGNvbG9yc1xuXG4kY29sb3ItZ3JlZW4tbWFpbjogIzYyYzAxNztcbiRjb2xvci1ncmVlbi1zZWNvbmRhcnk6ICMwNjk4MDA7XG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4kY29sb3ItbWluZS1zaGFmdDogIzJkMmQyZDtcbiRjb2xvci1taW5lLXNoYWZ0LWRhcms6ICMyNDI0MjQ7XG4kY29sb3ItYWxhYmFzdGVyOiAjZjlmOWY5O1xuXG4iLCIvKlxuICogVmFyaWFibGVzXG4gKi9cbiNjbGllbnRzIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JnMi5qcGdcIik7XG4gIGhlaWdodDogNzI0cHg7IH1cbiAgI2NsaWVudHMgLnBhZ2UtbnVtYmVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmZmZmOyB9XG5cbi5jYXJvdXNlbC1jb250ZW50IC5jbGllbnRzLXF1b3RlLCAuY2Fyb3VzZWwtY29udGVudCAuY2xpZW50cy1xdW90ZS1uYW1lIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzJkMmQyZDsgfVxuXG4uY2Fyb3VzZWwtaW1nIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7IH1cblxuLm93bC1jYXJvdXNlbCBidXR0b24ub3dsLWRvdC5hY3RpdmU6Zm9jdXMge1xuICBvdXRsaW5lLWNvbG9yOiByZWQgIWltcG9ydGFudDsgfVxuXG4uY2Fyb3VzZWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7IH1cbiAgLmNhcm91c2VsLWNvbnRlbnQgLmNsaWVudHMtcXVvdGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jYXJvdXNlbC1jb250ZW50IC5jbGllbnRzLXF1b3RlOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBsZWZ0OiAtNDBweDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9xdW90ZS5wbmdcIik7XG4gICAgICB3aWR0aDogMjlweDtcbiAgICAgIGhlaWdodDogMjNweDsgfVxuICAuY2Fyb3VzZWwtY29udGVudCAuY2xpZW50cy1xdW90ZS1uYW1lIHtcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4IDA7IH1cbiAgICAuY2Fyb3VzZWwtY29udGVudCAuY2xpZW50cy1xdW90ZS1uYW1lIGEge1xuICAgICAgY29sb3I6ICNmZmZmZmY7IH1cbiAgLmNhcm91c2VsLWNvbnRlbnQgZGl2IHNwYW4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDk3OXB4KSB7XG4gIC5jYXJvdXNlbC1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cbiAgLmNhcm91c2VsLWNvbnRlbnQgLmNsaWVudHMtcXVvdGUsIC5jYXJvdXNlbC1jb250ZW50IC5jbGllbnRzLXF1b3RlLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxuICAuY2xpZW50cy1xdW90ZTphZnRlciB7XG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIHRvcDogLTMwcHggIWltcG9ydGFudDsgfSB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vY29yZS92YXJpYWJsZXNcIjtcblxuI2NsaWVudHMge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZzIuanBnXCIpO1xuICAgIGhlaWdodDogNzI0cHg7XG5cbiAgICAucGFnZS1udW1iZXIge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgfVxufVxuXG4vLyAgY2Fyb3VzZWxcblxuJWNhcm91c2VsLXR5cG8ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAkY29sb3ItbWluZS1zaGFmdDtcbn1cblxuLmNhcm91c2VsLWltZyBpbWcge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLm93bC1jYXJvdXNlbCBidXR0b24ub3dsLWRvdC5hY3RpdmU6Zm9jdXMge1xuICAgIG91dGxpbmUtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4uY2Fyb3VzZWwtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5jbGllbnRzLXF1b3RlIHtcbiAgICAgICAgQGV4dGVuZCAlY2Fyb3VzZWwtdHlwbztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGxlZnQ6IC00MHB4O1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3F1b3RlLnBuZ1wiKTtcbiAgICAgICAgICAgIHdpZHRoOiAyOXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNsaWVudHMtcXVvdGUtbmFtZSB7XG4gICAgICAgIEBleHRlbmQgJWNhcm91c2VsLXR5cG87XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXYge1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcbiAgICAuY2Fyb3VzZWwtY29udGVudCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAlY2Fyb3VzZWwtdHlwbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmNsaWVudHMtcXVvdGU6YWZ0ZXIge1xuICAgICAgICAvLyAgIWltcG9ydGFudCBjb3MgYWZ0ZXIgbGVmdC90b3Agb3ZlcndyaXRlIGJ1Z1xuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogLTMwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi8vIG1xIG1vYmlsZVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/content/clients/clients.component.ts":
/*!******************************************************!*\
  !*** ./src/app/content/clients/clients.component.ts ***!
  \******************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClientsComponent = /** @class */ (function () {
    // myCarouselOptions = {items: 3, dots: true, nav: true};
    function ClientsComponent() {
        // mySlideImages = [1, 2, 3].map((i) => `https://picsum.photos/640/480?image=${i}`);
        this.mySlideImages = ['../../assets/tablet.png', '../../assets/tablet.png', '../../assets/tablet.png'];
        // myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/640/480?image=${i}`);
        this.mySlideOptions = { items: 1, dots: true, nav: false };
        console.log(this.mySlideImages);
        // console.log(this.myCarouselImages);
        console.log(this.mySlideOptions);
        // console.log(this.myCarouselOptions);
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/content/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.scss */ "./src/app/content/clients/clients.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/content/contact/contact.component.html":
/*!********************************************************!*\
  !*** ./src/app/content/contact/contact.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\" class=\"box\">\n    <div class=\"container\">\n        <div class=\"contact-header\">\n            <h2>Contact</h2>\n            <button type=\"button\">Let us know how to contact You ↑</button>\n        </div>\n        <div class=\"contact-form\">\n            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam\n                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>\n            <form action=\"\">\n                <div class=\"row-first\">\n                    <p>Hello! I'm</p><input type=\"text\" placeholder=\"Your Name\">\n                    <p>and I represent</p><input type=\"text\" placeholder=\"Company Name\">\n                    <p class=\"form-dot\">.</p>\n                </div>\n                <div class=\"row-second\">\n                    <p>Call me at</p><input type=\"number\" placeholder=\"Your telephone number\">\n                    <p>or send an email to</p><input type=\"email\" placeholder=\"Your email adress\">\n                    <p class=\"form-dot\">.</p>\n                </div>\n                <label for=\"contact-checkbox\">\n                    <input id=\"contact-checkbox\" type=\"checkbox\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n                </label>\n                <button type=\"button\">send details →</button>\n            </form>\n        </div>\n    </div>\n    <div class=\"page-number\">5/5</div>\n</div>\n<footer class=\"box\">\n    <div class=\"container\">\n        <p>© Copyrights 2019 IG</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/content/contact/contact.component.scss":
/*!********************************************************!*\
  !*** ./src/app/content/contact/contact.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Variables\n */\n#contact {\n  background-color: #f9f9f9; }\n.contact-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\nbutton {\n  padding: 5px 10px;\n  background-color: #62c017;\n  font-size: 14px;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  white-space: nowrap; }\nbutton:focus {\n    outline: 0; }\nbutton:hover {\n    background-color: #069800;\n    cursor: pointer; }\nbutton:active {\n    -webkit-transform: translateY(2px);\n            transform: translateY(2px); }\n.row-first, .row-second {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center; }\n.row-first p, .row-second p {\n    font-size: 30px;\n    font-weight: 300;\n    margin: 3px 0; }\n.contact-form {\n  width: 80%;\n  margin: 0 auto; }\n.contact-form form button {\n    display: block;\n    margin: 50px auto; }\n.contact-form form input {\n    margin: 0 10px;\n    font-size: 14px;\n    background-color: transparent;\n    border-left: none;\n    border-top: none;\n    border-right: none;\n    border-bottom: 1px solid #2d2d2d;\n    outline: none; }\n.contact-form form input[type='number']::-webkit-inner-spin-button, .contact-form form input[type='number']::-webkit-outer-spin-button {\n      display: none;\n      margin: 0; }\nfooter {\n  background-color: #242424; }\nfooter p {\n    color: #ffffff;\n    font-size: 12px; }\n@media all and (max-width: 979px) {\n  .row-first, .row-second {\n    flex-direction: column; }\n  .form-dot {\n    display: none; }\n  .contact-form form input {\n    margin: 20px 0; }\n    .contact-form form input::-webkit-input-placeholder {\n      text-align: center; }\n    .contact-form form input::-ms-input-placeholder {\n      text-align: center; }\n    .contact-form form input::placeholder {\n      text-align: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb3JlL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb250ZW50L2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb250ZW50L2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUNFRTtBQ0FGO0VBQ0kseUJGUXFCLEVBQUE7QUVMekI7RUFDSSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksaUJBQWlCO0VBQ2pCLHlCRlJzQjtFRVN0QixlQUFlO0VBQ2YsY0ZSaUI7RUVTakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtBQVB2QjtJQVVRLFVBQVUsRUFBQTtBQVZsQjtJQWNRLHlCRm5CdUI7SUVvQnZCLGVBQWUsRUFBQTtBQWZ2QjtJQW1CUSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7QUFNbEM7RUFDSSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQixFQUFBO0FBSHZCO0lBTVEsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhLEVBQUE7QUFJckI7RUFDSSxVQUFVO0VBQ1YsY0FBYyxFQUFBO0FBRmxCO0lBTVksY0FBYztJQUNkLGlCQUFpQixFQUFBO0FBUDdCO0lBV1ksY0FBYztJQUNkLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0NGekRjO0lFMERkLGFBQWEsRUFBQTtBQWxCekI7TUFzQmdCLGFBQWE7TUFDYixTQUFTLEVBQUE7QUFRekI7RUFDSSx5QkZ2RTJCLEVBQUE7QUVzRS9CO0lBSVEsY0Y1RWE7SUU2RWIsZUFBZSxFQUFBO0FBTXZCO0VBQ0k7SUFDSSxzQkFBc0IsRUFBQTtFQUUxQjtJQUNJLGFBQWEsRUFBQTtFQUdqQjtJQUNJLGNBQWMsRUFBQTtJQURsQjtNQUdRLGtCQUFrQixFQUFBO0lBSDFCO01BR1Esa0JBQWtCLEVBQUE7SUFIMUI7TUFHUSxrQkFBa0IsRUFBQSxFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFZhcmlhYmxlc1xuICovXG5cbi8vICBjb2xvcnNcblxuJGNvbG9yLWdyZWVuLW1haW46ICM2MmMwMTc7XG4kY29sb3ItZ3JlZW4tc2Vjb25kYXJ5OiAjMDY5ODAwO1xuJGNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuJGNvbG9yLW1pbmUtc2hhZnQ6ICMyZDJkMmQ7XG4kY29sb3ItbWluZS1zaGFmdC1kYXJrOiAjMjQyNDI0O1xuJGNvbG9yLWFsYWJhc3RlcjogI2Y5ZjlmOTtcblxuIiwiLypcbiAqIFZhcmlhYmxlc1xuICovXG4jY29udGFjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7IH1cblxuLmNvbnRhY3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJjMDE3O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICBidXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7IH1cbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY5ODAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICBidXR0b246YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgfVxuXG4ucm93LWZpcnN0LCAucm93LXNlY29uZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAucm93LWZpcnN0IHAsIC5yb3ctc2Vjb25kIHAge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbjogM3B4IDA7IH1cblxuLmNvbnRhY3QtZm9ybSB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG4gIC5jb250YWN0LWZvcm0gZm9ybSBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogNTBweCBhdXRvOyB9XG4gIC5jb250YWN0LWZvcm0gZm9ybSBpbnB1dCB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmQyZDJkO1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAuY29udGFjdC1mb3JtIGZvcm0gaW5wdXRbdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIC5jb250YWN0LWZvcm0gZm9ybSBpbnB1dFt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgbWFyZ2luOiAwOyB9XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7IH1cbiAgZm9vdGVyIHAge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweDsgfVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5NzlweCkge1xuICAucm93LWZpcnN0LCAucm93LXNlY29uZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAuZm9ybS1kb3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0IHtcbiAgICBtYXJnaW46IDIwcHggMDsgfVxuICAgIC5jb250YWN0LWZvcm0gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi9jb3JlL3ZhcmlhYmxlc1wiO1xuXG4jY29udGFjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFsYWJhc3Rlcjtcbn1cblxuLmNvbnRhY3QtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmVlbi1tYWluO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JlZW4tc2Vjb25kYXJ5O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgICB9XG59XG5cbi8vICBmb3JtXG5cbi5yb3ctZmlyc3QsIC5yb3ctc2Vjb25kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbWFyZ2luOiAzcHggMDtcbiAgICB9XG59XG5cbi5jb250YWN0LWZvcm0ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICBmb3JtIHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1taW5lLXNoYWZ0O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgICAgICAgJlt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbiAgICAgICAgICAgICZbdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyAgZm9vdGVyXG5cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1pbmUtc2hhZnQtZGFyaztcblxuICAgIHAge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuXG4vLyBtcSB0YWJsZXRcblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcbiAgICAucm93LWZpcnN0LCAucm93LXNlY29uZCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5mb3JtLWRvdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0IHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuICAgIC8vIG1xIG1vYmlsZVxuXG4gICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcblxuICAgIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/content/contact/contact.component.ts":
/*!******************************************************!*\
  !*** ./src/app/content/contact/contact.component.ts ***!
  \******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/content/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/content/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/content/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/content/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"box\">\n    <div class=\"container\">\n\n        <nav>\n            <div class=\"logo-mini\">\n                <img src=\"../../../assets/logo_mini.png\" alt=\"Mini Logo\" height=\"38\" width=\"66\">\n            </div>\n            <ul>\n                <li>\n                    <a href=\"#mission\">mission</a>\n                </li>\n                <li>\n                    <a href=\"#clients\">clients</a>\n                </li>\n                <li>\n                    <a href=\"#products\">products</a>\n                </li>\n                <li>\n                    <a href=\"#contact\">contact</a>\n                </li>\n\n            </ul>\n        </nav>\n\n        <h1>Witamy <span>Infinity Group</span></h1>\n\n\n        <div class=\"cookies-wrapper\" *ngIf=\"cookieInfo\">\n            <div class=\"cookies-bar container\">\n\n                <img src=\"../../../assets/cookie.png\" alt=\"Cookie pictogram\">\n                <p class=\"cookies-info\">We use own and third party cookies to improve our services and show ads related\n                    to your\n                    preferences by analyzing your browser habits . If you continue browsing , we consider you accept its\n                    use.\n                    You can switch the configuration or learn more\n                    <a href=\"#0\">here</a></p>\n                <button class=\"close-cookies-info\" type=\"button\" (click)=\"setCookie()\">close ✕</button>\n            </div>\n        </div>\n    </div>\n\n</header>\n"

/***/ }),

/***/ "./src/app/content/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/content/header/header.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Variables\n */\nheader {\n  background-image: url('header_bg.jpg');\n  background-size: cover;\n  height: 650px;\n  position: relative; }\nheader .container {\n    overflow: visible; }\nnav {\n  display: flex;\n  justify-content: center;\n  position: relative; }\nnav ul {\n    display: flex; }\nnav ul li {\n      list-style-type: none; }\nnav ul li:last-child a {\n        border-right: none; }\nnav ul li a {\n        text-transform: uppercase;\n        text-decoration: none;\n        padding: 10px 20px;\n        color: #ffffff;\n        border-right: 1px solid #ffffff; }\nnav ul li a:hover {\n          color: rgba(255, 255, 255, 0.5); }\n.logo-mini {\n  padding-top: 20px;\n  border-top: 10px solid #62c017;\n  position: absolute;\n  top: 0;\n  left: 0; }\nh1 {\n  text-transform: uppercase;\n  color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -40%);\n          transform: translate(-50%, -40%);\n  font-size: 58px; }\nh1 span {\n    display: block;\n    color: #2d2d2d; }\n.cookies-wrapper {\n  width: 100%;\n  background-color: rgba(45, 45, 45, 0.8);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n.cookies-bar {\n  display: flex;\n  align-items: center;\n  margin: 0 auto; }\n.cookies-bar p {\n    font-size: 14px;\n    font-family: 'Mada', sans-serif;\n    font-weight: 300;\n    color: #ffffff;\n    padding: 0 20px; }\n.cookies-bar p a {\n      color: #62c017; }\n.cookies-bar button {\n    padding: 5px 10px;\n    background-color: #62c017;\n    font-size: 14px;\n    color: #ffffff;\n    text-transform: uppercase;\n    align-items: flex-start;\n    border: none;\n    border-radius: 5px;\n    white-space: nowrap; }\n.cookies-bar button:focus {\n      outline: 0; }\n.cookies-bar button:hover {\n      background-color: #069800;\n      cursor: pointer; }\n.cookies-bar button:active {\n      -webkit-transform: translateY(2px);\n              transform: translateY(2px); }\n@media all and (max-width: 979px) {\n  header {\n    height: 400px; }\n  h1 {\n    font-size: 40px; }\n  .cookies-wrapper {\n    width: calc(100% - 20px);\n    padding: 0 10px; } }\n@media all and (max-width: 599px) {\n  .cookies-wrapper {\n    position: fixed;\n    z-index: 3;\n    background-color: #2d2d2d; }\n  nav {\n    flex-direction: column; }\n    nav ul {\n      flex-direction: column;\n      align-items: flex-end; }\n      nav ul li {\n        margin-bottom: 3px; }\n        nav ul li a {\n          border: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb3JlL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb250ZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWxla3NhbmRlci9Eb2N1bWVudHMvd3d3L2luZmluaXR5L3NyYy9hcHAvY29udGVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQ0VFO0FDQUY7RUFDSSxzQ0FBc0Q7RUFDdEQsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUp0QjtJQU9RLGlCQUFpQixFQUFBO0FBSXpCO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTtBQUh0QjtJQU1RLGFBQWEsRUFBQTtBQU5yQjtNQVNZLHFCQUFxQixFQUFBO0FBVGpDO1FBWWdCLGtCQUFrQixFQUFBO0FBWmxDO1FBaUJnQix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixjRnpCSztRRTBCTCwrQkYxQkssRUFBQTtBRUtyQjtVQXdCb0IsK0JBQStCLEVBQUE7QUFPbkQ7RUFDSSxpQkFBaUI7RUFDakIsOEJGeENzQjtFRXlDdEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPLEVBQUE7QUFJWDtFQUNJLHlCQUF5QjtFQUN6QixjRi9DaUI7RUVnRGpCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTtBQVhuQjtJQWNRLGNBQWM7SUFDZCxjRjNEa0IsRUFBQTtBRWdFMUI7RUFDSSxXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVEsRUFBQTtBQUdaO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7QUFIbEI7SUFNUSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixjRm5GYTtJRW9GYixlQUFlLEVBQUE7QUFWdkI7TUFhWSxjRnpGYyxFQUFBO0FFNEUxQjtJQWtCUSxpQkFBaUI7SUFDakIseUJGL0ZrQjtJRWdHbEIsZUFBZTtJQUNmLGNGL0ZhO0lFZ0diLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTtBQTFCM0I7TUE2QlksVUFBVSxFQUFBO0FBN0J0QjtNQWlDWSx5QkY1R21CO01FNkduQixlQUFlLEVBQUE7QUFsQzNCO01Bc0NZLGtDQUEwQjtjQUExQiwwQkFBMEIsRUFBQTtBQU90QztFQUNJO0lBQ0ksYUFBYSxFQUFBO0VBRWpCO0lBQ0ksZUFBZSxFQUFBO0VBRW5CO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWUsRUFBQSxFQUNsQjtBQUtMO0VBQ0k7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLHlCRnpJa0IsRUFBQTtFRTJJdEI7SUFDSSxzQkFBc0IsRUFBQTtJQUQxQjtNQUlRLHNCQUFzQjtNQUN0QixxQkFBcUIsRUFBQTtNQUw3QjtRQVFZLGtCQUFrQixFQUFBO1FBUjlCO1VBV2dCLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFZhcmlhYmxlc1xuICovXG5cbi8vICBjb2xvcnNcblxuJGNvbG9yLWdyZWVuLW1haW46ICM2MmMwMTc7XG4kY29sb3ItZ3JlZW4tc2Vjb25kYXJ5OiAjMDY5ODAwO1xuJGNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuJGNvbG9yLW1pbmUtc2hhZnQ6ICMyZDJkMmQ7XG4kY29sb3ItbWluZS1zaGFmdC1kYXJrOiAjMjQyNDI0O1xuJGNvbG9yLWFsYWJhc3RlcjogI2Y5ZjlmOTtcblxuIiwiLypcbiAqIFZhcmlhYmxlc1xuICovXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaGVhZGVyX2JnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA2NTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIGhlYWRlciAuY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgfVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIG5hdiB1bCB7XG4gICAgZGlzcGxheTogZmxleDsgfVxuICAgIG5hdiB1bCBsaSB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cbiAgICAgIG5hdiB1bCBsaTpsYXN0LWNoaWxkIGEge1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cbiAgICAgIG5hdiB1bCBsaSBhIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmZmZmOyB9XG4gICAgICAgIG5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XG5cbi5sb2dvLW1pbmkge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjNjJjMDE3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDsgfVxuXG5oMSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDAlKTtcbiAgZm9udC1zaXplOiA1OHB4OyB9XG4gIGgxIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjMmQyZDJkOyB9XG5cbi5jb29raWVzLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAwLjgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7IH1cblxuLmNvb2tpZXMtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87IH1cbiAgLmNvb2tpZXMtYmFyIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogJ01hZGEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMCAyMHB4OyB9XG4gICAgLmNvb2tpZXMtYmFyIHAgYSB7XG4gICAgICBjb2xvcjogIzYyYzAxNzsgfVxuICAuY29va2llcy1iYXIgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJjMDE3O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5jb29raWVzLWJhciBidXR0b246Zm9jdXMge1xuICAgICAgb3V0bGluZTogMDsgfVxuICAgIC5jb29raWVzLWJhciBidXR0b246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2OTgwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC5jb29raWVzLWJhciBidXR0b246YWN0aXZlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpOyB9XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDk3OXB4KSB7XG4gIGhlYWRlciB7XG4gICAgaGVpZ2h0OiA0MDBweDsgfVxuICBoMSB7XG4gICAgZm9udC1zaXplOiA0MHB4OyB9XG4gIC5jb29raWVzLXdyYXBwZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICBwYWRkaW5nOiAwIDEwcHg7IH0gfVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuY29va2llcy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkOyB9XG4gIG5hdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIG5hdiB1bCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyB9XG4gICAgICBuYXYgdWwgbGkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7IH1cbiAgICAgICAgbmF2IHVsIGxpIGEge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTsgfSB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vY29yZS92YXJpYWJsZXNcIjtcblxuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaGVhZGVyX2JnLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogNjUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIH1cbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCBhIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubG9nby1taW5pIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICRjb2xvci1ncmVlbi1tYWluO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuXG5oMSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQwJSk7XG4gICAgZm9udC1zaXplOiA1OHB4O1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogJGNvbG9yLW1pbmUtc2hhZnQ7XG5cbiAgICB9XG59XG5cbi5jb29raWVzLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDQ1LCA0NSwgMC44KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5jb29raWVzLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNYWRhJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1ncmVlbi1tYWluO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmVlbi1tYWluO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmVlbi1zZWNvbmRhcnk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gIG1nIHRhYmxldFxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5NzlweCkge1xuICAgIGhlYWRlciB7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgfVxuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cbiAgICAuY29va2llcy13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgfVxufVxuXG4vLyBtcSBtb2JpbGVcblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICAuY29va2llcy13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbWluZS1zaGFmdDtcbiAgICB9XG4gICAgbmF2IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/content/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/content/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(cookie) {
        this.cookie = cookie;
        this.cookieInfo = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log(this.cookie.get('cookie'));
        if (this.cookie.get('cookie')) {
            this.cookieInfo = false;
        }
    };
    HeaderComponent.prototype.setCookie = function () {
        console.log('cookiies');
        this.cookieInfo = false;
        this.cookie.set('cookie', 'Udzielono zgodę na przechowywanie plików cookies.');
        alert('Zaakceptowałeś politykę cookies');
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/content/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/content/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/content/map/map.component.html":
/*!************************************************!*\
  !*** ./src/app/content/map/map.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\" class=\"box\">\n    <img src=\"../../../assets/map.jpg\" alt=\"Map image\" class=\"img-responsive\">\n\n    <div class=\"address-wrapper\">\n        <p class=\"brand-name\">Infinity Group Sp. z o.o.</p>\n        <p class=\"address\">ul.Skladowa<br>15-399 Bialystok,<br>Polska.<br><br>Lorem ipsum dolor sit amet, consectetur\n            adipiscing elit</p>\n    </div>\n\n    <div class=\"pointer\">\n        <img src=\"../../../assets/pointer.png\" alt=\"Pointer\">\n        <span class=\"tooltiptext\">Białystok<br>ul. Składowa 12</span>\n    </div>\n\n    <div class=\"page-number\">4/5</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/content/map/map.component.scss":
/*!************************************************!*\
  !*** ./src/app/content/map/map.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Variables\n */\n#map {\n  position: relative; }\n.pointer {\n  position: absolute;\n  cursor: pointer;\n  top: 34%;\n  right: 23%; }\n.pointer .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: #62c017;\n  color: #ffffff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  position: absolute;\n  bottom: calc(100% + 5px);\n  left: 50%;\n  margin-left: -60px;\n  z-index: 1; }\n.pointer:hover .tooltiptext {\n  visibility: visible; }\n.address-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 20%;\n  -webkit-transform: translate(-20%, -50%);\n          transform: translate(-20%, -50%); }\n.address-wrapper .address {\n    font-size: 22px;\n    font-weight: 300;\n    width: 60%;\n    color: #2d2d2d; }\n.brand-name {\n  position: relative;\n  font-size: 22px;\n  color: #2d2d2d; }\n.brand-name:after {\n    position: absolute;\n    display: block;\n    content: '';\n    left: -45px;\n    top: -3px;\n    background: url('navi.png') no-repeat;\n    width: 33px;\n    height: 33px; }\n@media all and (max-width: 979px) {\n  #map {\n    padding: 0; }\n  .pointer {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n    top: 26%; }\n  .brand-name {\n    font-size: 14px; }\n  .address-wrapper .address {\n    font-size: 12px; } }\n@media all and (max-width: 599px) {\n  .brand-name:after {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb3JlL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb250ZW50L21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWxla3NhbmRlci9Eb2N1bWVudHMvd3d3L2luZmluaXR5L3NyYy9hcHAvY29udGVudC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQ0VFO0FDQUY7RUFDSSxrQkFBa0IsRUFBQTtBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsUUFBUTtFQUNSLFVBQVUsRUFBQTtBQUlkO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkZYc0I7RUVZdEIsY0ZWaUI7RUVXakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFFbEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtBQUdkO0VBQ0ksbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7QUFKcEM7SUFPUSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixjRm5Da0IsRUFBQTtBRXlDMUI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNGNUNzQixFQUFBO0FFeUMxQjtJQU1RLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1QscUNBQXFEO0lBQ3JELFdBQVc7SUFDWCxZQUFZLEVBQUE7QUFNcEI7RUFDSTtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixRQUFRLEVBQUE7RUFHWjtJQUNJLGVBQWUsRUFBQTtFQUVuQjtJQUNJLGVBQWUsRUFBQSxFQUNsQjtBQUtMO0VBQ0k7SUFDSSxhQUFhLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVmFyaWFibGVzXG4gKi9cblxuLy8gIGNvbG9yc1xuXG4kY29sb3ItZ3JlZW4tbWFpbjogIzYyYzAxNztcbiRjb2xvci1ncmVlbi1zZWNvbmRhcnk6ICMwNjk4MDA7XG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4kY29sb3ItbWluZS1zaGFmdDogIzJkMmQyZDtcbiRjb2xvci1taW5lLXNoYWZ0LWRhcms6ICMyNDI0MjQ7XG4kY29sb3ItYWxhYmFzdGVyOiAjZjlmOWY5O1xuXG4iLCIvKlxuICogVmFyaWFibGVzXG4gKi9cbiNtYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnBvaW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAzNCU7XG4gIHJpZ2h0OiAyMyU7IH1cblxuLnBvaW50ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MmMwMTc7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiBjYWxjKDEwMCUgKyA1cHgpO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgei1pbmRleDogMTsgfVxuXG4ucG9pbnRlcjpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG5cbi5hZGRyZXNzLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAyMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMCUsIC01MCUpOyB9XG4gIC5hZGRyZXNzLXdyYXBwZXIgLmFkZHJlc3Mge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgY29sb3I6ICMyZDJkMmQ7IH1cblxuLmJyYW5kLW5hbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICMyZDJkMmQ7IH1cbiAgLmJyYW5kLW5hbWU6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiAnJztcbiAgICBsZWZ0OiAtNDVweDtcbiAgICB0b3A6IC0zcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL25hdmkucG5nXCIpIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzNweDtcbiAgICBoZWlnaHQ6IDMzcHg7IH1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcbiAgI21hcCB7XG4gICAgcGFkZGluZzogMDsgfVxuICAucG9pbnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICAgIHRvcDogMjYlOyB9XG4gIC5icmFuZC1uYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7IH1cbiAgLmFkZHJlc3Mtd3JhcHBlciAuYWRkcmVzcyB7XG4gICAgZm9udC1zaXplOiAxMnB4OyB9IH1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmJyYW5kLW5hbWU6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuIiwiQGltcG9ydCBcIi4uLy4uL2NvcmUvdmFyaWFibGVzXCI7XG5cbiNtYXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBvaW50ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAzNCU7XG4gICAgcmlnaHQ6IDIzJTtcblxufVxuXG4ucG9pbnRlciAudG9vbHRpcHRleHQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZWVuLW1haW47XG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogY2FsYygxMDAlICsgNXB4KTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5wb2ludGVyOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmFkZHJlc3Mtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAlLCAtNTAlKTtcblxuICAgIC5hZGRyZXNzIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBjb2xvcjogJGNvbG9yLW1pbmUtc2hhZnQ7XG4gICAgfVxufVxuXG4vLyBicmFuZFxuXG4uYnJhbmQtbmFtZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogJGNvbG9yLW1pbmUtc2hhZnQ7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGxlZnQ6IC00NXB4O1xuICAgICAgICB0b3A6IC0zcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9uYXZpLnBuZ1wiKSBuby1yZXBlYXQ7XG4gICAgICAgIHdpZHRoOiAzM3B4O1xuICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgfVxufVxuXG4vLyBtcSB0YWJsZXRcblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcbiAgICAjbWFwIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLnBvaW50ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgICAgIHRvcDogMjYlO1xuXG4gICAgfVxuICAgIC5icmFuZC1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuYWRkcmVzcy13cmFwcGVyIC5hZGRyZXNzIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cblxuLy8gbXEgbW9iaWxlXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gICAgLmJyYW5kLW5hbWU6YWZ0ZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/content/map/map.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/map/map.component.ts ***!
  \**********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/content/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/content/map/map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/content/mission/mission.component.html":
/*!********************************************************!*\
  !*** ./src/app/content/mission/mission.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mission\" class=\"box\">\n    <div class=\"container\">\n        <h2>Mission</h2>\n        <div class=\"quote\">\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n                deserunt mollit anim id est laborum...</p>\n        </div>\n        <div class=\"page-number\">1/5</div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/mission/mission.component.scss":
/*!********************************************************!*\
  !*** ./src/app/content/mission/mission.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mission {\n  margin-top: 30px;\n  margin-bottom: 50px; }\n\n.quote {\n  font-size: 22px;\n  font-weight: 300;\n  padding: 0 15%;\n  line-height: 1.5em; }\n\n.quote p {\n    position: relative; }\n\n.quote p:after {\n      position: absolute;\n      display: block;\n      content: '';\n      left: -40px;\n      top: 0;\n      background: url('quote.png');\n      width: 29px;\n      height: 23px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb250ZW50L21pc3Npb24vbWlzc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFKdEI7SUFPUSxrQkFBa0IsRUFBQTs7QUFQMUI7TUFVWSxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLFdBQVc7TUFDWCxXQUFXO01BQ1gsTUFBTTtNQUNOLDRCQUE0QztNQUM1QyxXQUFXO01BQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9taXNzaW9uL21pc3Npb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWlzc2lvbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ucXVvdGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHBhZGRpbmc6IDAgMTUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcblxuICAgIHAge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgbGVmdDogLTQwcHg7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcXVvdGUucG5nXCIpO1xuICAgICAgICAgICAgd2lkdGg6IDI5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIzcHg7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/content/mission/mission.component.ts":
/*!******************************************************!*\
  !*** ./src/app/content/mission/mission.component.ts ***!
  \******************************************************/
/*! exports provided: MissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionComponent", function() { return MissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MissionComponent = /** @class */ (function () {
    function MissionComponent() {
    }
    MissionComponent.prototype.ngOnInit = function () {
    };
    MissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mission',
            template: __webpack_require__(/*! ./mission.component.html */ "./src/app/content/mission/mission.component.html"),
            styles: [__webpack_require__(/*! ./mission.component.scss */ "./src/app/content/mission/mission.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MissionComponent);
    return MissionComponent;
}());



/***/ }),

/***/ "./src/app/content/products/products.component.html":
/*!**********************************************************!*\
  !*** ./src/app/content/products/products.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"products\" class=\"box\">\n    <div class=\"container\">\n        <div class=\"products-wrapper\">\n            <h2>Products</h2>\n            <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h3>\n            <div class=\"products\">\n                <div class=\"product-wrapper\" *ngFor=\"let item of products\">\n                    <img class=\"showhover\" [src]=\"item.url\" alt=\"Products\">\n                    <div class=\"hover-info\">\n                        <img [src]=\"item.urlOnHover\" alt=\"Products\">\n                        <p> {{item.hoverText}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-number\">3/5</div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/products/products.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/content/products/products.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Variables\n */\n#products .container {\n  overflow: visible; }\n.products {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 50px 0; }\n.products .product-wrapper {\n    flex-basis: 25%;\n    position: relative;\n    display: flex;\n    justify-content: center; }\n.products .product-wrapper:hover .hover-info {\n      display: block; }\n.products .product-wrapper .hover-info {\n      display: none;\n      position: absolute;\n      z-index: 2;\n      padding: 0 10px 10px 10px;\n      color: #ffffff;\n      background-color: #62c017; }\n.products .product-wrapper .hover-info img {\n        display: flex;\n        margin: 0 auto; }\n.products .product-wrapper:hover .hover-info {\n      display: block; }\nh3 {\n  text-align: center;\n  font-size: 22px;\n  font-weight: 300; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb3JlL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb250ZW50L3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FsZWtzYW5kZXIvRG9jdW1lbnRzL3d3dy9pbmZpbml0eS9zcmMvYXBwL2NvbnRlbnQvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QUNBRjtFQUNJLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0FBYyxFQUFBO0FBSmxCO0lBT1EsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCLEVBQUE7QUFWL0I7TUFZWSxjQUFjLEVBQUE7QUFaMUI7TUFnQlksYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YseUJBQXlCO01BQ3pCLGNGbEJTO01FbUJULHlCRnJCYyxFQUFBO0FFQTFCO1FBd0JnQixhQUFhO1FBQ2IsY0FBYyxFQUFBO0FBekI5QjtNQThCWSxjQUFjLEVBQUE7QUFLMUI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBWYXJpYWJsZXNcbiAqL1xuXG4vLyAgY29sb3JzXG5cbiRjb2xvci1ncmVlbi1tYWluOiAjNjJjMDE3O1xuJGNvbG9yLWdyZWVuLXNlY29uZGFyeTogIzA2OTgwMDtcbiRjb2xvci13aGl0ZTogI2ZmZmZmZjtcbiRjb2xvci1taW5lLXNoYWZ0OiAjMmQyZDJkO1xuJGNvbG9yLW1pbmUtc2hhZnQtZGFyazogIzI0MjQyNDtcbiRjb2xvci1hbGFiYXN0ZXI6ICNmOWY5Zjk7XG5cbiIsIi8qXG4gKiBWYXJpYWJsZXNcbiAqL1xuI3Byb2R1Y3RzIC5jb250YWluZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxuXG4ucHJvZHVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDUwcHggMDsgfVxuICAucHJvZHVjdHMgLnByb2R1Y3Qtd3JhcHBlciB7XG4gICAgZmxleC1iYXNpczogMjUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgLnByb2R1Y3RzIC5wcm9kdWN0LXdyYXBwZXI6aG92ZXIgLmhvdmVyLWluZm8ge1xuICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAucHJvZHVjdHMgLnByb2R1Y3Qtd3JhcHBlciAuaG92ZXItaW5mbyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MmMwMTc7IH1cbiAgICAgIC5wcm9kdWN0cyAucHJvZHVjdC13cmFwcGVyIC5ob3Zlci1pbmZvIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyB9XG4gICAgLnByb2R1Y3RzIC5wcm9kdWN0LXdyYXBwZXI6aG92ZXIgLmhvdmVyLWluZm8ge1xuICAgICAgZGlzcGxheTogYmxvY2s7IH1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxuIiwiQGltcG9ydCBcIi4uLy4uL2NvcmUvdmFyaWFibGVzXCI7XG5cbiNwcm9kdWN0cyAuY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnByb2R1Y3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IDUwcHggMDtcblxuICAgIC5wcm9kdWN0LXdyYXBwZXIge1xuICAgICAgICBmbGV4LWJhc2lzOiAyNSU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICY6aG92ZXIgLmhvdmVyLWluZm8ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuaG92ZXItaW5mbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZWVuLW1haW47XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIgLmhvdmVyLWluZm8ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi8vIG1xIHRhYmxldFxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5NzlweCkge1xuXG59XG5cbi8vIG1xIG1vYmlsZVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/content/products/products.component.ts":
/*!********************************************************!*\
  !*** ./src/app/content/products/products.component.ts ***!
  \********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.products = [
            { url: '../../../assets/a1.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/a1w.png' },
            { url: '../../../assets/a2.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/a2w.png' },
            { url: '../../../assets/a3.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/a3w.png' },
            { url: '../../../assets/a4.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/a4w.png' },
            { url: '../../../assets/b1.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/b1w.png' },
            { url: '../../../assets/b2.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/b2w.png' },
            { url: '../../../assets/b3.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/b3w.png' },
            { url: '../../../assets/b4.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/b4w.png' },
            { url: '../../../assets/c1.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/c1w.png' },
            { url: '../../../assets/c2.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/c2w.png' },
            { url: '../../../assets/c3.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/c3w.png' },
            { url: '../../../assets/c4.png', hoverText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', urlOnHover: '../../../assets/c4w.png' },
        ];
        this.isHiddenElement = false;
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/content/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/content/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aleksander/Documents/www/infinity/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map