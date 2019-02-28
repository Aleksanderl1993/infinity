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

module.exports = "/*\n * Variables\n */\n#clients {\n  background: url('bg2.jpg');\n  height: 724px; }\n#clients .page-number {\n    color: #ffffff;\n    border-bottom-color: #ffffff; }\n.carousel-content .clients-quote, .carousel-content .clients-quote-name {\n  font-size: 30px;\n  font-weight: 300;\n  color: #2d2d2d; }\n.carousel-img img {\n  width: auto;\n  margin-right: 30px; }\n.owl-carousel button.owl-dot.active:focus {\n  outline-color: red !important; }\n.carousel-content {\n  display: flex; }\n.carousel-content .clients-quote {\n    position: relative; }\n.carousel-content .clients-quote:after {\n      position: absolute;\n      display: block;\n      content: '';\n      left: -40px;\n      top: 0;\n      background: url('quote.png');\n      width: 29px;\n      height: 23px; }\n.carousel-content .clients-quote-name {\n    margin: 10px 0 20px 0; }\n.carousel-content .clients-quote-name a {\n      color: #ffffff; }\n.carousel-content div span {\n    border: 1px solid #ffffff;\n    color: #ffffff;\n    padding: 3px;\n    margin-right: 5px; }\n@media all and (max-width: 979px) {\n  .carousel-content {\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 10px; }\n  .carousel-content .clients-quote, .carousel-content .clients-quote-name {\n    font-size: 20px; }\n  .clients-quote:after {\n    left: 0 !important;\n    top: -30px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb3JlL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb250ZW50L2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb250ZW50L2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUNFRTtBQ0FGO0VBQ0ksMEJBQTBDO0VBQzFDLGFBQWEsRUFBQTtBQUZqQjtJQUtRLGNGQ2E7SUVBYiw0QkZBYSxFQUFBO0FFTXJCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjRlJzQixFQUFBO0FFVzFCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksNkJBQTZCLEVBQUE7QUFHakM7RUFDSSxhQUFhLEVBQUE7QUFEakI7SUFLUSxrQkFBa0IsRUFBQTtBQUwxQjtNQVFZLGtCQUFrQjtNQUNsQixjQUFjO01BQ2QsV0FBVztNQUNYLFdBQVc7TUFDWCxNQUFNO01BQ04sNEJBQTRDO01BQzVDLFdBQVc7TUFDWCxZQUFZLEVBQUE7QUFmeEI7SUFxQlEscUJBQXFCLEVBQUE7QUFyQjdCO01Bd0JZLGNGN0NTLEVBQUE7QUVxQnJCO0lBOEJZLHlCRm5EUztJRW9EVCxjRnBEUztJRXFEVCxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7QUFLN0I7RUF0Q0E7SUF3Q1Esc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQkFBb0IsRUFBQTtFQXpENUI7SUE0RFEsZUFBZSxFQUFBO0VBRW5CO0lBRUksa0JBQWtCO0lBQ2xCLHFCQUFxQixFQUFBLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVmFyaWFibGVzXG4gKi9cblxuLy8gIGNvbG9yc1xuXG4kY29sb3ItZ3JlZW4tbWFpbjogIzYyYzAxNztcbiRjb2xvci1ncmVlbi1zZWNvbmRhcnk6ICMwNjk4MDA7XG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4kY29sb3ItbWluZS1zaGFmdDogIzJkMmQyZDtcbiRjb2xvci1taW5lLXNoYWZ0LWRhcms6ICMyNDI0MjQ7XG5cbiIsIi8qXG4gKiBWYXJpYWJsZXNcbiAqL1xuI2NsaWVudHMge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmcyLmpwZ1wiKTtcbiAgaGVpZ2h0OiA3MjRweDsgfVxuICAjY2xpZW50cyAucGFnZS1udW1iZXIge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZmZmY7IH1cblxuLmNhcm91c2VsLWNvbnRlbnQgLmNsaWVudHMtcXVvdGUsIC5jYXJvdXNlbC1jb250ZW50IC5jbGllbnRzLXF1b3RlLW5hbWUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMmQyZDJkOyB9XG5cbi5jYXJvdXNlbC1pbWcgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMzBweDsgfVxuXG4ub3dsLWNhcm91c2VsIGJ1dHRvbi5vd2wtZG90LmFjdGl2ZTpmb2N1cyB7XG4gIG91dGxpbmUtY29sb3I6IHJlZCAhaW1wb3J0YW50OyB9XG5cbi5jYXJvdXNlbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDsgfVxuICAuY2Fyb3VzZWwtY29udGVudCAuY2xpZW50cy1xdW90ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNhcm91c2VsLWNvbnRlbnQgLmNsaWVudHMtcXVvdGU6YWZ0ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGxlZnQ6IC00MHB4O1xuICAgICAgdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3F1b3RlLnBuZ1wiKTtcbiAgICAgIHdpZHRoOiAyOXB4O1xuICAgICAgaGVpZ2h0OiAyM3B4OyB9XG4gIC5jYXJvdXNlbC1jb250ZW50IC5jbGllbnRzLXF1b3RlLW5hbWUge1xuICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDsgfVxuICAgIC5jYXJvdXNlbC1jb250ZW50IC5jbGllbnRzLXF1b3RlLW5hbWUgYSB7XG4gICAgICBjb2xvcjogI2ZmZmZmZjsgfVxuICAuY2Fyb3VzZWwtY29udGVudCBkaXYgc3BhbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcbiAgLmNhcm91c2VsLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDsgfVxuICAuY2Fyb3VzZWwtY29udGVudCAuY2xpZW50cy1xdW90ZSwgLmNhcm91c2VsLWNvbnRlbnQgLmNsaWVudHMtcXVvdGUtbmFtZSB7XG4gICAgZm9udC1zaXplOiAyMHB4OyB9XG4gIC5jbGllbnRzLXF1b3RlOmFmdGVyIHtcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAtMzBweCAhaW1wb3J0YW50OyB9IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi9jb3JlL3ZhcmlhYmxlc1wiO1xuXG4jY2xpZW50cyB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JnMi5qcGdcIik7XG4gICAgaGVpZ2h0OiA3MjRweDtcblxuICAgIC5wYWdlLW51bWJlciB7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICB9XG59XG5cbi8vICBjYXJvdXNlbFxuXG4lY2Fyb3VzZWwtdHlwbyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICRjb2xvci1taW5lLXNoYWZ0O1xufVxuXG4uY2Fyb3VzZWwtaW1nIGltZyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4ub3dsLWNhcm91c2VsIGJ1dHRvbi5vd2wtZG90LmFjdGl2ZTpmb2N1cyB7XG4gICAgb3V0bGluZS1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJvdXNlbC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmNsaWVudHMtcXVvdGUge1xuICAgICAgICBAZXh0ZW5kICVjYXJvdXNlbC10eXBvO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgbGVmdDogLTQwcHg7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcXVvdGUucG5nXCIpO1xuICAgICAgICAgICAgd2lkdGg6IDI5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIzcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2xpZW50cy1xdW90ZS1uYW1lIHtcbiAgICAgICAgQGV4dGVuZCAlY2Fyb3VzZWwtdHlwbztcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjBweCAwO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpdiB7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5NzlweCkge1xuICAgIC5jYXJvdXNlbC1jb250ZW50IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgICVjYXJvdXNlbC10eXBvIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuY2xpZW50cy1xdW90ZTphZnRlciB7XG4gICAgICAgIC8vICAhaW1wb3J0YW50IGNvcyBhZnRlciBsZWZ0L3RvcCBvdmVyd3JpdGUgYnVnXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgdG9wOiAtMzBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLy8gbXEgbW9iaWxlXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG5cbn1cbiJdfQ== */"

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

module.exports = "/*\n * Variables\n */\n.contact-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\nbutton {\n  padding: 5px 10px;\n  background-color: #62c017;\n  font-size: 14px;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  white-space: nowrap; }\nbutton:focus {\n    outline: 0; }\nbutton:hover {\n    background-color: #069800;\n    cursor: pointer; }\nbutton:active {\n    -webkit-transform: translateY(2px);\n            transform: translateY(2px); }\n.row-first, .row-second {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center; }\n.row-first p, .row-second p {\n    font-size: 30px;\n    font-weight: 300;\n    margin: 3px 0; }\n.contact-form {\n  width: 80%;\n  margin: 0 auto; }\n.contact-form form button {\n    display: block;\n    margin: 50px auto; }\n.contact-form form input {\n    margin: 0 10px;\n    font-size: 14px;\n    background-color: transparent;\n    border-left: none;\n    border-top: none;\n    border-right: none;\n    border-bottom: 1px solid #2d2d2d;\n    outline: none; }\n.contact-form form input[type='number']::-webkit-inner-spin-button, .contact-form form input[type='number']::-webkit-outer-spin-button {\n      display: none;\n      margin: 0; }\nfooter {\n  background-color: #242424; }\nfooter p {\n    color: #ffffff;\n    font-size: 12px; }\n@media all and (max-width: 979px) {\n  .row-first, .row-second {\n    flex-direction: column; }\n  .form-dot {\n    display: none; }\n  .contact-form form input {\n    margin: 20px 0; }\n    .contact-form form input::-webkit-input-placeholder {\n      text-align: center; }\n    .contact-form form input::-ms-input-placeholder {\n      text-align: center; }\n    .contact-form form input::placeholder {\n      text-align: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb3JlL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb250ZW50L2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb250ZW50L2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUNFRTtBQ0FGO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTtBQUd2QjtFQUNJLGlCQUFpQjtFQUNqQix5QkZKc0I7RUVLdEIsZUFBZTtFQUNmLGNGSmlCO0VFS2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7QUFQdkI7SUFVUSxVQUFVLEVBQUE7QUFWbEI7SUFjUSx5QkZmdUI7SUVnQnZCLGVBQWUsRUFBQTtBQWZ2QjtJQW1CUSxrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7QUFNbEM7RUFDSSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQixFQUFBO0FBSHZCO0lBTVEsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhLEVBQUE7QUFJckI7RUFDSSxVQUFVO0VBQ1YsY0FBYyxFQUFBO0FBRmxCO0lBTVksY0FBYztJQUNkLGlCQUFpQixFQUFBO0FBUDdCO0lBV1ksY0FBYztJQUNkLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0NGckRjO0lFc0RkLGFBQWEsRUFBQTtBQWxCekI7TUFzQmdCLGFBQWE7TUFDYixTQUFTLEVBQUE7QUFRekI7RUFDSSx5QkZuRTJCLEVBQUE7QUVrRS9CO0lBSVEsY0Z4RWE7SUV5RWIsZUFBZSxFQUFBO0FBTXZCO0VBQ0k7SUFDSSxzQkFBc0IsRUFBQTtFQUUxQjtJQUNJLGFBQWEsRUFBQTtFQUdqQjtJQUNJLGNBQWMsRUFBQTtJQURsQjtNQUdRLGtCQUFrQixFQUFBO0lBSDFCO01BR1Esa0JBQWtCLEVBQUE7SUFIMUI7TUFHUSxrQkFBa0IsRUFBQSxFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFZhcmlhYmxlc1xuICovXG5cbi8vICBjb2xvcnNcblxuJGNvbG9yLWdyZWVuLW1haW46ICM2MmMwMTc7XG4kY29sb3ItZ3JlZW4tc2Vjb25kYXJ5OiAjMDY5ODAwO1xuJGNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuJGNvbG9yLW1pbmUtc2hhZnQ6ICMyZDJkMmQ7XG4kY29sb3ItbWluZS1zaGFmdC1kYXJrOiAjMjQyNDI0O1xuXG4iLCIvKlxuICogVmFyaWFibGVzXG4gKi9cbi5jb250YWN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyYzAxNztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwOyB9XG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2OTgwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7IH1cblxuLnJvdy1maXJzdCwgLnJvdy1zZWNvbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLnJvdy1maXJzdCBwLCAucm93LXNlY29uZCBwIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDNweCAwOyB9XG5cbi5jb250YWN0LWZvcm0ge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bzsgfVxuICAuY29udGFjdC1mb3JtIGZvcm0gYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDUwcHggYXV0bzsgfVxuICAuY29udGFjdC1mb3JtIGZvcm0gaW5wdXQge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJkMmQyZDtcbiAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0W3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCAuY29udGFjdC1mb3JtIGZvcm0gaW5wdXRbdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIG1hcmdpbjogMDsgfVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0OyB9XG4gIGZvb3RlciBwIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDEycHg7IH1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcbiAgLnJvdy1maXJzdCwgLnJvdy1zZWNvbmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgLmZvcm0tZG90IHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5jb250YWN0LWZvcm0gZm9ybSBpbnB1dCB7XG4gICAgbWFyZ2luOiAyMHB4IDA7IH1cbiAgICAuY29udGFjdC1mb3JtIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfSB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vY29yZS92YXJpYWJsZXNcIjtcblxuLmNvbnRhY3QtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmVlbi1tYWluO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JlZW4tc2Vjb25kYXJ5O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgICB9XG59XG5cbi8vICBmb3JtXG5cbi5yb3ctZmlyc3QsIC5yb3ctc2Vjb25kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbWFyZ2luOiAzcHggMDtcbiAgICB9XG59XG5cbi5jb250YWN0LWZvcm0ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICBmb3JtIHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1taW5lLXNoYWZ0O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgICAgICAgJlt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbiAgICAgICAgICAgICZbdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyAgZm9vdGVyXG5cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW1pbmUtc2hhZnQtZGFyaztcblxuICAgIHAge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuXG4vLyBtcSB0YWJsZXRcblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcbiAgICAucm93LWZpcnN0LCAucm93LXNlY29uZCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5mb3JtLWRvdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0IHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuICAgIC8vIG1xIG1vYmlsZVxuXG4gICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcblxuICAgIH1cbiJdfQ== */"

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

module.exports = "/*\n * Variables\n */\nheader {\n  background-image: url('header_bg.jpg');\n  background-size: cover;\n  height: 650px;\n  position: relative; }\nheader .container {\n    overflow: visible; }\nnav {\n  display: flex;\n  justify-content: center;\n  position: relative; }\nnav ul {\n    display: flex; }\nnav ul li {\n      list-style-type: none; }\nnav ul li:last-child a {\n        border-right: none; }\nnav ul li a {\n        text-transform: uppercase;\n        text-decoration: none;\n        padding: 10px 20px;\n        color: #ffffff;\n        border-right: 1px solid #ffffff; }\nnav ul li a:hover {\n          color: rgba(255, 255, 255, 0.5); }\n.logo-mini {\n  padding-top: 20px;\n  border-top: 10px solid #62c017;\n  position: absolute;\n  top: 0;\n  left: 0; }\nh1 {\n  text-transform: uppercase;\n  color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -40%);\n          transform: translate(-50%, -40%);\n  font-size: 58px; }\nh1 span {\n    display: block;\n    color: #2d2d2d; }\n.cookies-wrapper {\n  width: 100%;\n  background-color: rgba(45, 45, 45, 0.8);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n.cookies-bar {\n  display: flex;\n  align-items: center;\n  margin: 0 auto; }\n.cookies-bar p {\n    font-size: 14px;\n    font-family: 'Mada', sans-serif;\n    font-weight: 300;\n    color: #ffffff;\n    padding: 0 20px; }\n.cookies-bar p a {\n      color: #62c017; }\n.cookies-bar button {\n    padding: 5px 10px;\n    background-color: #62c017;\n    font-size: 14px;\n    color: #ffffff;\n    text-transform: uppercase;\n    align-items: flex-start;\n    border: none;\n    border-radius: 5px;\n    white-space: nowrap; }\n.cookies-bar button:focus {\n      outline: 0; }\n.cookies-bar button:hover {\n      background-color: #069800;\n      cursor: pointer; }\n.cookies-bar button:active {\n      -webkit-transform: translateY(2px);\n              transform: translateY(2px); }\n@media all and (max-width: 979px) {\n  header {\n    height: 400px; }\n  h1 {\n    font-size: 40px; }\n  .cookies-wrapper {\n    width: calc(100% - 20px);\n    padding: 0 10px; } }\n@media all and (max-width: 599px) {\n  .cookies-wrapper {\n    position: fixed;\n    z-index: 3;\n    background-color: #2d2d2d; }\n  nav {\n    flex-direction: column; }\n    nav ul {\n      flex-direction: column;\n      align-items: flex-end; }\n      nav ul li {\n        margin-bottom: 3px; }\n        nav ul li a {\n          border: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb3JlL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb250ZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWxla3NhbmRlci9Eb2N1bWVudHMvd3d3L2luZmluaXR5L3NyYy9hcHAvY29udGVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQ0VFO0FDQUY7RUFDSSxzQ0FBc0Q7RUFDdEQsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUp0QjtJQU9RLGlCQUFpQixFQUFBO0FBSXpCO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTtBQUh0QjtJQU1RLGFBQWEsRUFBQTtBQU5yQjtNQVNZLHFCQUFxQixFQUFBO0FBVGpDO1FBWWdCLGtCQUFrQixFQUFBO0FBWmxDO1FBaUJnQix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixjRnpCSztRRTBCTCwrQkYxQkssRUFBQTtBRUtyQjtVQXdCb0IsK0JBQStCLEVBQUE7QUFPbkQ7RUFDSSxpQkFBaUI7RUFDakIsOEJGeENzQjtFRXlDdEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPLEVBQUE7QUFJWDtFQUNJLHlCQUF5QjtFQUN6QixjRi9DaUI7RUVnRGpCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTtBQVhuQjtJQWNRLGNBQWM7SUFDZCxjRjNEa0IsRUFBQTtBRWdFMUI7RUFDSSxXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVEsRUFBQTtBQUdaO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7QUFIbEI7SUFNUSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixjRm5GYTtJRW9GYixlQUFlLEVBQUE7QUFWdkI7TUFhWSxjRnpGYyxFQUFBO0FFNEUxQjtJQWtCUSxpQkFBaUI7SUFDakIseUJGL0ZrQjtJRWdHbEIsZUFBZTtJQUNmLGNGL0ZhO0lFZ0diLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTtBQTFCM0I7TUE2QlksVUFBVSxFQUFBO0FBN0J0QjtNQWlDWSx5QkY1R21CO01FNkduQixlQUFlLEVBQUE7QUFsQzNCO01Bc0NZLGtDQUEwQjtjQUExQiwwQkFBMEIsRUFBQTtBQU90QztFQUNJO0lBQ0ksYUFBYSxFQUFBO0VBRWpCO0lBQ0ksZUFBZSxFQUFBO0VBRW5CO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWUsRUFBQSxFQUNsQjtBQUtMO0VBQ0k7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLHlCRnpJa0IsRUFBQTtFRTJJdEI7SUFDSSxzQkFBc0IsRUFBQTtJQUQxQjtNQUlRLHNCQUFzQjtNQUN0QixxQkFBcUIsRUFBQTtNQUw3QjtRQVFZLGtCQUFrQixFQUFBO1FBUjlCO1VBV2dCLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFZhcmlhYmxlc1xuICovXG5cbi8vICBjb2xvcnNcblxuJGNvbG9yLWdyZWVuLW1haW46ICM2MmMwMTc7XG4kY29sb3ItZ3JlZW4tc2Vjb25kYXJ5OiAjMDY5ODAwO1xuJGNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuJGNvbG9yLW1pbmUtc2hhZnQ6ICMyZDJkMmQ7XG4kY29sb3ItbWluZS1zaGFmdC1kYXJrOiAjMjQyNDI0O1xuXG4iLCIvKlxuICogVmFyaWFibGVzXG4gKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9oZWFkZXJfYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDY1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgaGVhZGVyIC5jb250YWluZXIge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlOyB9XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgbmF2IHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4OyB9XG4gICAgbmF2IHVsIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxuICAgICAgbmF2IHVsIGxpOmxhc3QtY2hpbGQgYSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxuICAgICAgbmF2IHVsIGxpIGEge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmZmZmY7IH1cbiAgICAgICAgbmF2IHVsIGxpIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cblxuLmxvZ28tbWluaSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICM2MmMwMTc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwOyB9XG5cbmgxIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpO1xuICBmb250LXNpemU6IDU4cHg7IH1cbiAgaDEgc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICMyZDJkMmQ7IH1cblxuLmNvb2tpZXMtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCA0NSwgNDUsIDAuOCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDsgfVxuXG4uY29va2llcy1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bzsgfVxuICAuY29va2llcy1iYXIgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTWFkYScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAwIDIwcHg7IH1cbiAgICAuY29va2llcy1iYXIgcCBhIHtcbiAgICAgIGNvbG9yOiAjNjJjMDE3OyB9XG4gIC5jb29raWVzLWJhciBidXR0b24ge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MmMwMTc7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLmNvb2tpZXMtYmFyIGJ1dHRvbjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwOyB9XG4gICAgLmNvb2tpZXMtYmFyIGJ1dHRvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY5ODAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgLmNvb2tpZXMtYmFyIGJ1dHRvbjphY3RpdmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7IH1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcbiAgaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDQwMHB4OyB9XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDQwcHg7IH1cbiAgLmNvb2tpZXMtd3JhcHBlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIHBhZGRpbmc6IDAgMTBweDsgfSB9XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5jb29raWVzLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7IH1cbiAgbmF2IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgbmF2IHVsIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cbiAgICAgIG5hdiB1bCBsaSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDsgfVxuICAgICAgICBuYXYgdWwgbGkgYSB7XG4gICAgICAgICAgYm9yZGVyOiBub25lOyB9IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi9jb3JlL3ZhcmlhYmxlc1wiO1xuXG5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9oZWFkZXJfYmcuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA2NTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgfVxufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIGEge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkY29sb3Itd2hpdGU7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5sb2dvLW1pbmkge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgJGNvbG9yLWdyZWVuLW1haW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG5cbmgxIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDAlKTtcbiAgICBmb250LXNpemU6IDU4cHg7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItbWluZS1zaGFmdDtcblxuICAgIH1cbn1cblxuLmNvb2tpZXMtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAwLjgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cblxuLmNvb2tpZXMtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ01hZGEnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWdyZWVuLW1haW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZWVuLW1haW47XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZWVuLXNlY29uZGFyeTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyAgbWcgdGFibGV0XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDk3OXB4KSB7XG4gICAgaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICAgIC5jb29raWVzLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG59XG5cbi8vIG1xIG1vYmlsZVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIC5jb29raWVzLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1taW5lLXNoYWZ0O1xuICAgIH1cbiAgICBuYXYge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG5cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

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

module.exports = "/*\n * Variables\n */\n#map {\n  position: relative; }\n.pointer {\n  position: absolute;\n  cursor: pointer;\n  top: 34%;\n  right: 23%; }\n.pointer .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: #62c017;\n  color: #ffffff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  position: absolute;\n  bottom: calc(100% + 5px);\n  left: 50%;\n  margin-left: -60px;\n  z-index: 1; }\n.pointer:hover .tooltiptext {\n  visibility: visible; }\n.address-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 20%;\n  -webkit-transform: translate(-20%, -50%);\n          transform: translate(-20%, -50%); }\n.address-wrapper .address {\n    font-size: 22px;\n    font-weight: 300;\n    width: 60%;\n    color: #2d2d2d; }\n.brand-name {\n  position: relative;\n  font-size: 22px;\n  color: #2d2d2d; }\n.brand-name:after {\n    position: absolute;\n    display: block;\n    content: '';\n    left: -45px;\n    top: -3px;\n    background: url('navi.png') no-repeat;\n    width: 33px;\n    height: 33px; }\n@media all and (max-width: 979px) {\n  #map {\n    padding: 0; }\n  .pointer {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n    top: 26%; }\n  .brand-name {\n    font-size: 14px; }\n  .address-wrapper .address {\n    font-size: 12px; } }\n@media all and (max-width: 599px) {\n  .brand-name:after {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb3JlL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb250ZW50L21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWxla3NhbmRlci9Eb2N1bWVudHMvd3d3L2luZmluaXR5L3NyYy9hcHAvY29udGVudC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQ0VFO0FDQUY7RUFDSSxrQkFBa0IsRUFBQTtBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsUUFBUTtFQUNSLFVBQVUsRUFBQTtBQUlkO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkZYc0I7RUVZdEIsY0ZWaUI7RUVXakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFFbEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtBQUdkO0VBQ0ksbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7QUFKcEM7SUFPUSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixjRm5Da0IsRUFBQTtBRXlDMUI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNGNUNzQixFQUFBO0FFeUMxQjtJQU1RLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1QscUNBQXFEO0lBQ3JELFdBQVc7SUFDWCxZQUFZLEVBQUE7QUFNcEI7RUFDSTtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixRQUFRLEVBQUE7RUFHWjtJQUNJLGVBQWUsRUFBQTtFQUVuQjtJQUNJLGVBQWUsRUFBQSxFQUNsQjtBQUtMO0VBQ0k7SUFDSSxhQUFhLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVmFyaWFibGVzXG4gKi9cblxuLy8gIGNvbG9yc1xuXG4kY29sb3ItZ3JlZW4tbWFpbjogIzYyYzAxNztcbiRjb2xvci1ncmVlbi1zZWNvbmRhcnk6ICMwNjk4MDA7XG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4kY29sb3ItbWluZS1zaGFmdDogIzJkMmQyZDtcbiRjb2xvci1taW5lLXNoYWZ0LWRhcms6ICMyNDI0MjQ7XG5cbiIsIi8qXG4gKiBWYXJpYWJsZXNcbiAqL1xuI21hcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4ucG9pbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDM0JTtcbiAgcmlnaHQ6IDIzJTsgfVxuXG4ucG9pbnRlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyYzAxNztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IGNhbGMoMTAwJSArIDVweCk7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICB6LWluZGV4OiAxOyB9XG5cbi5wb2ludGVyOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7IH1cblxuLmFkZHJlc3Mtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDIwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwJSwgLTUwJSk7IH1cbiAgLmFkZHJlc3Mtd3JhcHBlciAuYWRkcmVzcyB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBjb2xvcjogIzJkMmQyZDsgfVxuXG4uYnJhbmQtbmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogIzJkMmQyZDsgfVxuICAuYnJhbmQtbmFtZTphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGxlZnQ6IC00NXB4O1xuICAgIHRvcDogLTNweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbmF2aS5wbmdcIikgbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzM3B4O1xuICAgIGhlaWdodDogMzNweDsgfVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5NzlweCkge1xuICAjbWFwIHtcbiAgICBwYWRkaW5nOiAwOyB9XG4gIC5wb2ludGVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgdG9wOiAyNiU7IH1cbiAgLmJyYW5kLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxuICAuYWRkcmVzcy13cmFwcGVyIC5hZGRyZXNzIHtcbiAgICBmb250LXNpemU6IDEycHg7IH0gfVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuYnJhbmQtbmFtZTphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTsgfSB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vY29yZS92YXJpYWJsZXNcIjtcblxuI21hcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucG9pbnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDM0JTtcbiAgICByaWdodDogMjMlO1xuXG59XG5cbi5wb2ludGVyIC50b29sdGlwdGV4dCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JlZW4tbWFpbjtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiBjYWxjKDEwMCUgKyA1cHgpO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnBvaW50ZXI6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYWRkcmVzcy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMjAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMCUsIC01MCUpO1xuXG4gICAgLmFkZHJlc3Mge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItbWluZS1zaGFmdDtcbiAgICB9XG59XG5cbi8vIGJyYW5kXG5cbi5icmFuZC1uYW1lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAkY29sb3ItbWluZS1zaGFmdDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgbGVmdDogLTQ1cHg7XG4gICAgICAgIHRvcDogLTNweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL25hdmkucG5nXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgd2lkdGg6IDMzcHg7XG4gICAgICAgIGhlaWdodDogMzNweDtcbiAgICB9XG59XG5cbi8vIG1xIHRhYmxldFxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5NzlweCkge1xuICAgICNtYXAge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAucG9pbnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgICAgICAgdG9wOiAyNiU7XG5cbiAgICB9XG4gICAgLmJyYW5kLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5hZGRyZXNzLXdyYXBwZXIgLmFkZHJlc3Mge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuXG4vLyBtcSBtb2JpbGVcblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICAuYnJhbmQtbmFtZTphZnRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4iXX0= */"

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

module.exports = "/*\n * Variables\n */\n#products .container {\n  overflow: visible; }\n.products {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 50px 0; }\n.products .product-wrapper {\n    flex-basis: 25%;\n    position: relative;\n    display: flex;\n    justify-content: center; }\n.products .product-wrapper:hover .hover-info {\n      display: block; }\n.products .product-wrapper .hover-info {\n      display: none;\n      position: absolute;\n      z-index: 2;\n      padding: 0 10px 10px 10px;\n      color: #ffffff;\n      background-color: #62c017; }\n.products .product-wrapper .hover-info img {\n        display: flex;\n        margin: 0 auto; }\n.products .product-wrapper:hover .hover-info {\n      display: block; }\nh3 {\n  text-align: center;\n  font-size: 22px;\n  font-weight: 300; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvaW5maW5pdHkvc3JjL2FwcC9jb3JlL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb250ZW50L3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FsZWtzYW5kZXIvRG9jdW1lbnRzL3d3dy9pbmZpbml0eS9zcmMvYXBwL2NvbnRlbnQvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QUNBRjtFQUNJLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0FBYyxFQUFBO0FBSmxCO0lBT1EsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCLEVBQUE7QUFWL0I7TUFZWSxjQUFjLEVBQUE7QUFaMUI7TUFnQlksYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YseUJBQXlCO01BQ3pCLGNGbEJTO01FbUJULHlCRnJCYyxFQUFBO0FFQTFCO1FBd0JnQixhQUFhO1FBQ2IsY0FBYyxFQUFBO0FBekI5QjtNQThCWSxjQUFjLEVBQUE7QUFLMUI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBWYXJpYWJsZXNcbiAqL1xuXG4vLyAgY29sb3JzXG5cbiRjb2xvci1ncmVlbi1tYWluOiAjNjJjMDE3O1xuJGNvbG9yLWdyZWVuLXNlY29uZGFyeTogIzA2OTgwMDtcbiRjb2xvci13aGl0ZTogI2ZmZmZmZjtcbiRjb2xvci1taW5lLXNoYWZ0OiAjMmQyZDJkO1xuJGNvbG9yLW1pbmUtc2hhZnQtZGFyazogIzI0MjQyNDtcblxuIiwiLypcbiAqIFZhcmlhYmxlc1xuICovXG4jcHJvZHVjdHMgLmNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XG5cbi5wcm9kdWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogNTBweCAwOyB9XG4gIC5wcm9kdWN0cyAucHJvZHVjdC13cmFwcGVyIHtcbiAgICBmbGV4LWJhc2lzOiAyNSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAucHJvZHVjdHMgLnByb2R1Y3Qtd3JhcHBlcjpob3ZlciAuaG92ZXItaW5mbyB7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5wcm9kdWN0cyAucHJvZHVjdC13cmFwcGVyIC5ob3Zlci1pbmZvIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYyYzAxNzsgfVxuICAgICAgLnByb2R1Y3RzIC5wcm9kdWN0LXdyYXBwZXIgLmhvdmVyLWluZm8gaW1nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IH1cbiAgICAucHJvZHVjdHMgLnByb2R1Y3Qtd3JhcHBlcjpob3ZlciAuaG92ZXItaW5mbyB7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxuXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogMzAwOyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vY29yZS92YXJpYWJsZXNcIjtcblxuI3Byb2R1Y3RzIC5jb250YWluZXIge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ucHJvZHVjdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogNTBweCAwO1xuXG4gICAgLnByb2R1Y3Qtd3JhcHBlciB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDI1JTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgJjpob3ZlciAuaG92ZXItaW5mbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5ob3Zlci1pbmZvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JlZW4tbWFpbjtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciAuaG92ZXItaW5mbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLy8gbXEgdGFibGV0XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDk3OXB4KSB7XG5cbn1cblxuLy8gbXEgbW9iaWxlXG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG5cbn1cblxuIl19 */"

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