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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-bottom-widget></app-bottom-widget>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dev';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/intro/intro.component */ "./src/app/components/intro/intro.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_parallax_parallax_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/parallax/parallax.component */ "./src/app/components/parallax/parallax.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_works_works_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/works/works.component */ "./src/app/components/works/works.component.ts");
/* harmony import */ var _components_parallax2_parallax2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/parallax2/parallax2.component */ "./src/app/components/parallax2/parallax2.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_bottom_widget_bottom_widget_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/bottom-widget/bottom-widget.component */ "./src/app/components/bottom-widget/bottom-widget.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/project/project.component */ "./src/app/pages/project/project.component.ts");
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _pages_get_started_form_get_started_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/get-started-form/get-started-form.component */ "./src/app/pages/get-started-form/get-started-form.component.ts");
/* harmony import */ var _components_email_email_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/email/email.component */ "./src/app/components/email/email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"] },
    { path: 'contact-us', component: _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__["ContactUsComponent"] },
    { path: 'get-started-form', component: _pages_get_started_form_get_started_form_component__WEBPACK_IMPORTED_MODULE_18__["GetStartedFormComponent"] },
    { path: 'project', component: _pages_project_project_component__WEBPACK_IMPORTED_MODULE_16__["ProjectComponent"] },
    { path: '**', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _components_parallax_parallax_component__WEBPACK_IMPORTED_MODULE_7__["ParallaxComponent"],
                _components_services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"],
                _components_works_works_component__WEBPACK_IMPORTED_MODULE_9__["WorksComponent"],
                _components_parallax2_parallax2_component__WEBPACK_IMPORTED_MODULE_10__["Parallax2Component"],
                _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _components_bottom_widget_bottom_widget_component__WEBPACK_IMPORTED_MODULE_13__["BottomWidgetComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _pages_project_project_component__WEBPACK_IMPORTED_MODULE_16__["ProjectComponent"],
                _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__["ContactUsComponent"],
                _pages_get_started_form_get_started_form_component__WEBPACK_IMPORTED_MODULE_18__["GetStartedFormComponent"],
                _components_email_email_component__WEBPACK_IMPORTED_MODULE_19__["EmailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#bio-content {\n    margin-top: 2%;\n}"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"home-section bg-white\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-offset-2 col-md-8\">\n        <div class=\"section-heading\">\n          <h2>About me</h2>\n          <div class=\"heading-line\"></div>\n          <p>Digital Content Creator. Musician. Artist. NOMAD. </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row wow fadeInUp\">\n      <div class=\"col-md-6 about-img\">\n        <img src=\"assets/nate-profile.jpg\" alt=\"\">\n      </div>\n\n      <div class=\"col-md-6 content\" id=\"bio-content\">\n        <h2>\"Every human has four endowments - self awareness, conscience, independent will and creative imagination. These give\n          us the ultimate human freedom - The power to choose, to respond, to change.\" - Steven Covey</h2>\n        <h3>For the last 5 years of my life I have tried to do just that. Build freedom, success, and independence through travel, collaboration, art, and making change.</h3>\n        <p>\n          As I've traveled I've learned a few things about myself - I want to give my best at everything I do, I want to spread love and help the world, and I want to create. Creation has led me from music, to art, and now into web development. I'm versed in JavaScript, HTML, CSS, and Angular.js. If you need hands on help with a website, brand marketing, or an overall rehaul on your social media - I'm your guy! In my free time you'll catch me snowboarding in the mountains, running rivers, or sitting on a beach. Life is beautiful and meant to be enjoyed, and so should your workspace!\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/bottom-widget/bottom-widget.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/bottom-widget/bottom-widget.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bottom-widget/bottom-widget.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/bottom-widget/bottom-widget.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"bottom-widget\" class=\"home-section bg-white\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"contact-widget wow bounceInLeft\">\n          <i class=\"fa fa-map-marker fa-4x\"></i>\n          <h5>Main Office</h5>\n          <p>\n            Salt Lake City\n            <br> Utah\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"contact-widget wow bounceInUp\">\n          <i class=\"fa fa-phone fa-4x\"></i>\n          <h5>Call</h5>\n          <p>\n            +1 245 717 2027\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"contact-widget wow bounceInRight\">\n          <i class=\"fa fa-envelope fa-4x\"></i>\n          <h5>Email us</h5>\n          <p>\n            nswiftnswift@gmail.com\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mar-top30\">\n      <div class=\"col-md-12\">\n        <h5>We're on social networks</h5>\n        <ul class=\"social-network\">\n          <li>\n            <a href=\"https://www.instagram.com/thenateswift/\" target=\"_blank\">\n              <span class=\"fa-stack fa-2x\">\n                <i class=\"fa fa-circle fa-stack-2x\"></i>\n                <i class=\"fa fa-instagram fa-stack-1x fa-inverse\"></i>\n              </span>\n            </a>\n          </li>\n          <li>\n            <a href=\"https://www.facebook.com/nathan.swift.940\" target=\"_blank\">\n              <span class=\"fa-stack fa-2x\">\n                <i class=\"fa fa-circle fa-stack-2x\"></i>\n                <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i>\n              </span>\n            </a>\n          </li>\n          <li>\n            <a href=\"https://github.com/nathanswift\" target=\"_blank\">\n              <span class=\"fa-stack fa-2x\">\n                <i class=\"fa fa-circle fa-stack-2x\"></i>\n                <i class=\"fa fa-github fa-stack-1x fa-inverse\"></i>\n              </span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/bottom-widget/bottom-widget.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/bottom-widget/bottom-widget.component.ts ***!
  \*********************************************************************/
/*! exports provided: BottomWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomWidgetComponent", function() { return BottomWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BottomWidgetComponent = /** @class */ (function () {
    function BottomWidgetComponent() {
    }
    BottomWidgetComponent.prototype.ngOnInit = function () {
    };
    BottomWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom-widget',
            template: __webpack_require__(/*! ./bottom-widget.component.html */ "./src/app/components/bottom-widget/bottom-widget.component.html"),
            styles: [__webpack_require__(/*! ./bottom-widget.component.css */ "./src/app/components/bottom-widget/bottom-widget.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BottomWidgetComponent);
    return BottomWidgetComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"home-section bg-gray\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-offset-2 col-md-8\">\n          <div class=\"section-heading\">\n            <h2>Contact us</h2>\n            <div class=\"heading-line\"></div>\n            <p>If you have any question or want to get in touch please fill out this form below and I will get in touch with you as soon as possible. </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-offset-2 col-md-8\">\n          <div id=\"sendmessage\">Your message has been sent. Thank you!</div>\n          <div id=\"errormessage\"></div>\n\n          <form action=\"\" method=\"post\" class=\"form-horizontal contactForm\" role=\"form\">\n            <div class=\"col-md-offset-2 col-md-8\">\n              <div class=\"form-group\">\n                <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" />\n                <div class=\"validation\"></div>\n              </div>\n            </div>\n\n            <div class=\"col-md-offset-2 col-md-8\">\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Your Email\" data-rule=\"email\" data-msg=\"Please enter a valid email\" />\n                <div class=\"validation\"></div>\n              </div>\n            </div>\n\n            <div class=\"col-md-offset-2 col-md-8\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" placeholder=\"Subject\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 8 chars of subject\" />\n                <div class=\"validation\"></div>\n              </div>\n            </div>\n\n            <div class=\"col-md-offset-2 col-md-8\">\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" name=\"message\" rows=\"5\" data-rule=\"required\" data-msg=\"Please write something for us\" placeholder=\"Message\"></textarea>\n                <div class=\"validation\"></div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-md-offset-2 col-md-8\">\n                <button type=\"submit\" class=\"btn btn-theme btn-lg btn-block\">Send message</button>\n              </div>\n            </div>\n          </form>\n\n        </div>\n      </div>\n\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/email/email.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/email/email.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#exampleModal {\n    margin-top: 100px;\n}\n\nbutton#email-btn {\n    margin-bottom: 75px;\n}"

/***/ }),

/***/ "./src/app/components/email/email.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/email/email.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Get in Touch</h1>\n    <p class=\"lead\">Let me show you how I can better your business and make your life easier and more efficient on a day to day basis.</p>\n    <button id=\"email-btn\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@getbootstrap\">Email Me</button>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Lets start your project!</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"recipient-name\" class=\"col-form-label\">Recipient:</label>\n            <input type=\"text\" class=\"form-control\" id=\"recipient-name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"message-text\" class=\"col-form-label\">Message:</label>\n            <textarea class=\"form-control\" id=\"message-text\"></textarea>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Send message</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/email/email.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/email/email.component.ts ***!
  \*****************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/components/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.css */ "./src/app/components/email/email.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <p>Copyright @\n        <a href=\"https://nathanswift.github.io/Nate-Swift/\" target=\"_blank\">Nathan Swift</a> |\n        <a href=\"http://www.onflo.io/pages/home/\" target=\"_blank\">Onflo</a>\n      </p>\n        <div class=\"credits\">\n          <!--\n              All the links in the footer should remain intact.\n              You can delete the links only if you purchased the pro version.\n              Licensing information: https://bootstrapmade.com/license/\n              Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Alstar\n            -->\n          <a href=\"https://bootstrapmade.com/\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<a href=\"#\" class=\"back-to-top\">\n  <i class=\"fa fa-chevron-up\"></i>\n</a>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/intro/intro.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/intro/intro.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#intro div.intro-text {\n    background-image: url('/assets/SF-1293.jpg'); \n    background-size: cover;\n    background-position: center center;\n}\n\ndiv#rotator > p > span {\n    font-family: 'Amatic SC', cursive;\n    font-size: 3em;\n    text-align: center;\n}\n\ndiv > div > div > div > div > a {\n    font-family: 'Amatic SC', cursive;\n    color: white;\n    background-color: #53627A;\n    margin-top: 20px;\n    font-size: 1.25em;\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/components/intro/intro.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/intro/intro.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"intro\">\n    <div class=\"intro-text\">\n      <div class=\"container\">\n        <div class=\"col-md-12\">\n          <div id=\"rotator\">\n            <h1><span class=\"1strotate\">I {{ verb }} {{ adj }} {{ noun }} </span></h1>\n            <div class=\"line-spacer\"></div>\n            <p><span class=\"2ndrotate\">Nathan Swift</span></p>\n            <a routerLink=\"get-started-form\" class=\"btn btn-primary btn-lg\" tabindex=\"-1\" role=\"button\" aria-disabled=\"true\">Schedule Now</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/intro/intro.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/intro/intro.component.ts ***!
  \*****************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
        var _this = this;
        this.adj = '';
        this.adjs = ['Creative', 'Custom', 'Unique', 'Expressive'];
        this.currentAdj = 0;
        this.verb = '';
        this.verbs = ['Design', 'Develop', 'Create', 'Produce'];
        this.currentVerb = 0;
        this.noun = '';
        this.nouns = ['Webpages', 'Projects', 'Experiences', 'Art'];
        this.currentNoun = 0;
        this.setWords();
        setInterval(function () {
            _this.currentAdj++;
            _this.currentVerb++;
            _this.currentNoun++;
            if (_this.currentAdj === _this.adjs.length)
                _this.currentAdj = 0;
            if (_this.currentVerb === _this.verbs.length)
                _this.currentVerb = 0;
            if (_this.currentNoun === _this.nouns.length)
                _this.currentNoun = 0;
            _this.setWords();
        }, 2000);
    }
    IntroComponent.prototype.setWords = function () {
        this.verb = this.verbs[this.currentVerb];
        this.adj = this.adjs[this.currentAdj];
        this.noun = this.nouns[this.currentNoun];
    };
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/components/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/components/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav > div > div.navbar-header > a {\n    font-family: 'Amatic SC', cursive;\n    font-size: 1.5em;\n    cursor: pointer;\n}\n\na#navbar-logo:hover {\n    color: #C68A7A;\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" role=\"navigation\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n          <span class=\"sr-only\">Toggle nav</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n\n        <!-- Logo text or image -->\n        <a class=\"navbar-brand\" id=\"navbar-logo\" routerLink=\"/home\">Nathan Swift</a>\n\n      </div>\n      <div class=\"navigation collapse navbar-collapse navbar-ex1-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"current\"><a routerLink=\"/home\">Home</a></li>\n          <li><a routerLink=\"/project\">Projects</a></li>\n          <li><a (click)=\"jumpToSection('about')\">About</a></li>\n          <li><a (click)=\"jumpToSection('services')\">Services</a></li>\n          <li><a (click)=\"jumpToSection('portfolio')\">Works</a></li>\n          <li><a (click)=\"jumpToSection('team')\">Team</a></li>\n          <li><a routerLink=\"/contact-us\">Contact</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.jumpToSection = function (id) {
        var elem = document.getElementById(id);
        window.scrollTo(0, elem.offsetTop); //(x,y) 
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/parallax/parallax.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/parallax/parallax.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div[_ngcontent-c8] > div[_ngcontent-c8] > div[_ngcontent-c8] > div[_ngcontent-c8] > h1[_ngcontent-c8] {\n    margin-bottom: -30px;\n}\n\ndiv[_ngcontent-c8] > div[_ngcontent-c8] > div[_ngcontent-c8] > div[_ngcontent-c8] > p[_ngcontent-c8] {\n    margin-top: -10px;\n}\n\ndiv[_ngcontent-c7] > div[_ngcontent-c7] > div[_ngcontent-c7] > div[_ngcontent-c7] > h2[_ngcontent-c7] {\n    margin-top: -25px;\n    margin-right: 15%;\n}\n\ndiv > div > div > div > h1 {\n    font-family: 'Amatic SC', cursive;\n    font-size: 4.5em;\n    text-align: left;\n}\n\ndiv > div > div > div > h2 {\n    font-family: 'Amatic SC', cursive; \n    font-size: 3.5em;\n    text-align: center;\n    margin-top: 25px;\n}\n\ndiv > div > div > div > p {\n    font-size: 2em;\n    text-align: right;\n    margin-bottom: -50px;\n}"

/***/ }),

/***/ "./src/app/components/parallax/parallax.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/parallax/parallax.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"parallax1\" class=\"home-section parallax\" data-stellar-background-ratio=\"0.5\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"color-light\">\n            <h1>&#32;&#32;&#32;&#32;Be Unique<br>\n            </h1>\n            <h2 class=\"wow bounceInDown\" data-wow-delay=\"0.5s\">Details are the key for perfection</h2>\n            <p class=\"lead wow bounceInUp\" data-wow-delay=\"1s\">Make your marketing content everything you want</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n"

/***/ }),

/***/ "./src/app/components/parallax/parallax.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/parallax/parallax.component.ts ***!
  \***********************************************************/
/*! exports provided: ParallaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxComponent", function() { return ParallaxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParallaxComponent = /** @class */ (function () {
    function ParallaxComponent() {
    }
    ParallaxComponent.prototype.ngOnInit = function () {
    };
    ParallaxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parallax',
            template: __webpack_require__(/*! ./parallax.component.html */ "./src/app/components/parallax/parallax.component.html"),
            styles: [__webpack_require__(/*! ./parallax.component.css */ "./src/app/components/parallax/parallax.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParallaxComponent);
    return ParallaxComponent;
}());



/***/ }),

/***/ "./src/app/components/parallax2/parallax2.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/parallax2/parallax2.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section#parallax2 {\n    background-size: cover;\n}\n\nul.clients li {\n    margin: 15px;\n}\n\nul.clients li img {\n    width: 15%;\n}\n\ndiv.line-spacer {\n    border-bottom-color: #3A3A3A;\n}"

/***/ }),

/***/ "./src/app/components/parallax2/parallax2.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/parallax2/parallax2.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"parallax2\" class=\"home-section parallax\" data-stellar-background-ratio=\"0.5\">\n  <div class=\"col-md-offset-2 col-md-8\">\n    <h1>Specilizations</h1>\n    <div class=\"line-spacer\"></div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <ul class=\"clients\">\n          <li class=\"wow fadeInDown\" data-wow-delay=\"1.1s\">\n            <a href=\"#\">\n              <img src=\"assets/html-logo.png\" alt=\"\" />\n            </a>\n          </li>\n          <li class=\"wow fadeInDown\" data-wow-delay=\"0.6s\">\n            <a href=\"#\">\n              <img src=\"assets/css-logo.png\" alt=\"\" />\n            </a>\n          </li>\n          <li class=\"wow fadeInDown\" data-wow-delay=\"0.9s\">\n            <a href=\"#\">\n              <img src=\"assets/javascript-logo.png\" alt=\"\" />\n            </a>\n          </li>\n          <li class=\"wow fadeInDown\" data-wow-delay=\"0.9s\">\n            <a href=\"#\">\n              <img src=\"assets/angular.png\" alt=\"\" />\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/parallax2/parallax2.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/parallax2/parallax2.component.ts ***!
  \*************************************************************/
/*! exports provided: Parallax2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parallax2Component", function() { return Parallax2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Parallax2Component = /** @class */ (function () {
    function Parallax2Component() {
    }
    Parallax2Component.prototype.ngOnInit = function () {
    };
    Parallax2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parallax2',
            template: __webpack_require__(/*! ./parallax2.component.html */ "./src/app/components/parallax2/parallax2.component.html"),
            styles: [__webpack_require__(/*! ./parallax2.component.css */ "./src/app/components/parallax2/parallax2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Parallax2Component);
    return Parallax2Component;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/services/services.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/services/services.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/services/services.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"services\" class=\"home-section bg-white\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-offset-2 col-md-8\">\n          <div class=\"section-heading\">\n            <h2>Services</h2>\n            <div class=\"heading-line\"></div>\n            <p>We’ve been building unique digital products, platforms, and experiences for 200+ clients.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div id=\"carousel-service\" class=\"service carousel slide\">\n\n            <!-- slides -->\n            <div class=\"carousel-inner\">\n              <div class=\"item active\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12 col-md-offset-1 col-md-6\">\n                    <div class=\"wow bounceInLeft\">\n                      <h4>Website Design</h4>\n                      <p>I specialize in front end development and work alongside with Onflo to create full stack websites that are as functional as they are asthetic. As a team we specialize in front end and back end developement, creating the strongest and most functional platforms for you to build and customize your business image and marketing prescence alongside of. From analytics, to online purchases, to building dashboards for the employer and employee - we do it all.</p>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-5\">\n                    <div class=\"screenshot wow bounceInRight\">\n                      <img src=\"assets/img/screenshots/1.png\" class=\"img-responsive\" alt=\"\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12 col-md-offset-1 col-md-6\">\n                    <div class=\"wow bounceInLeft\">\n                      <h4>Brand Identity</h4>\n                      <p>Using artistic portfolios, and custom graphics, I give your brand the look it needs. With Onflo support, you will recieve practical marketing tools to keep your business ahead of the game.</p>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-5\">\n                    <div class=\"screenshot wow bounceInRight\">\n                      <img src=\"assets/img/screenshots/2.png\" class=\"img-responsive\" alt=\"\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12 col-md-offset-1 col-md-6\">\n                    <div class=\"wow bounceInLeft\">\n                      <h4>Web & Mobile Apps</h4>\n                      <p>Have an idea for an amazing game? Want to build an application specific to your business and clients needs? Let me turn that dream into your very own customizable mobile application.</p>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-5\">\n                    <div class=\"screenshot wow bounceInRight\">\n                      <img src=\"assets/img/screenshots/3.png\" class=\"img-responsive\" alt=\"\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Indicators -->\n            <ol class=\"carousel-indicators\">\n              <li data-target=\"#carousel-service\" data-slide-to=\"0\" class=\"active\"></li>\n              <li data-target=\"#carousel-service\" data-slide-to=\"1\"></li>\n              <li data-target=\"#carousel-service\" data-slide-to=\"2\"></li>\n            </ol>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/team/team.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/team/team.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div > div:nth-child(2) > div:nth-child(4) > div > a > img {\n  background-color: black;\n  border-radius: initial;\n}\n\ndiv>div>div>div>div>a {\n  border-radius: inherit;\n}\n"

/***/ }),

/***/ "./src/app/components/team/team.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/team/team.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"team\" class=\"home-section bg-white\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-offset-2 col-md-8\">\n        <div class=\"section-heading\">\n          <h2>Our Team</h2>\n          <div class=\"heading-line\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n        <div class=\"box-team wow bounceInUp\" data-wow-delay=\"0.1s\">\n          <a href=\"#\">\n            <img src=\"assets/nates-profile2.JPG\" alt=\"\" class=\"img-responsive\" />\n          </a>\n          <h4>Nathan Swift</h4>\n          <p>Developer</p>\n          <p>Nate Swift is a developer, musician, and artist. He develops for Onflo, and aids in teaching with Future Corps.\n            Nate is a professional traveler, photographer, developer, and content designer. Nate's primary focus is front\n            end development.</p>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\" data-wow-delay=\"0.5s\">\n        <div class=\"box-team wow bounceInUp\">\n          <a href=\"http://www.jadeallencook.com/\" target=\"_blank\">\n            <img src=\"assets/Jades-profile.jpg\" class=\"img-responsive\" />\n          </a>\n          <h4>Jade Allen Cook</h4>\n          <p>Developer</p>\n          <p>Jade Allen Cook is one of the creators of Onflo. Jade has over 10 years of experience in the development world\n            and works side by side with Nate and others to grow the Onflo Platform and grow the education and development\n            of Future Corps, an up and coming Development School. Jade has worked with over two-hundred clients, and has\n            been online training thousands and worked with KSL and Desert Media to create tools to help hundreds of thousands.</p>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\" data-wow-delay=\"0.7s\">\n        <div class=\"box-team wow bounceInUp\">\n          <a href='#' target=\"_blank\">\n            <img src='assets/SF-1187.jpg' class=\"img-responsive\" />\n          </a>\n          <h4>Future Corps</h4>\n          <p>Collaborative Partner</p>\n          <p>Future corp is a non-profit based company, offering corps members free tuition, housing, and amenities including\n            food, in exchange for building the Futurecorps Nonprofit Vision - Technelogical advancement and global change. </p>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\" data-wow-delay=\"0.3s\">\n        <div class=\"box-team wow bounceInUp\">\n          <a href='http://www.onflo.io/pages/home/' target=\"blank\">\n            <img src='assets/onflo-logo.png' class=\"img-responsive\"/>\n          </a>\n          <h4>Onflo</h4>\n          <p>Collaborative Partner</p>\n          <p>Over the past decade while working in the marketing and digital art industry Onflo has helped dozens of clients and\n            completed hundreds of projects. They've been fortunate enough to help many businesses and international clients\n            to produce professional marketing materials and webpages. They're consistently expanding their skills to provide\n            the best services for your business!\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/team/team.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/components/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/components/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/components/works/works.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/works/works.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/works/works.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/works/works.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Works -->\n<section id=\"portfolio\" class=\"home-section bg-gray\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-offset-2 col-md-8\">\n        <div class=\"section-heading\">\n          <h2>Works</h2>\n          <div class=\"heading-line\"></div>\n          <p>Take a look at some of the projects we've been working on!</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n\n        <ul id=\"og-grid\" class=\"og-grid\">\n          <li>\n            <a href=\"#\" data-largesrc=\"assets/img/works/9.jpg\" data-title=\"Portfolio title\" data-description=\"Lorem ipsum \">\n              <img src=\"assets/screenshot.png\" alt=\"img01\" />\n            </a>\n          </li>\n          <li>\n            <a href=\"#\" data-largesrc=\"assets/img/works/10.jpg\" data-title=\"Portfolio title\" data-description=\"Duo te dico volutpat, solet nusquam accusam ex vim.\">\n              <img src=\"assets/screenshot3.png\" alt=\"img01\" />\n            </a>\n          </li>\n          <li>\n            <a href=\"#\" data-largesrc=\"assets/img/works/11.jpg\" data-title=\"Portfolio title\" data-description=\"Vim ad persecuti appellantur.\">\n              <img src=\"assets/screenshot4.png\" alt=\"img01\" />\n            </a>\n          </li>\n          <li>\n            <a href=\"#\" data-largesrc=\"assets/img/works/12.jpg\" data-title=\"Portfolio title\" data-description=\"Mea an eros periculis dignissim, quo mollis nostrum elaboraret et.\">\n              <img src=\"assets/screenshot5.png\" alt=\"img01\" />\n            </a>\n          </li>\n          <li>\n            <a href=\"#\" data-largesrc=\"assets/img/works/9.jpg\" data-title=\"Portfolio title\" data-description=\"Lorem ipsum la la la\">\n              <img src=\"assets/screenshot.png\" alt=\"img01\" />\n            </a>\n          </li>\n        </ul>\n\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/works/works.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/works/works.component.ts ***!
  \*****************************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorksComponent = /** @class */ (function () {
    function WorksComponent() {
    }
    WorksComponent.prototype.ngOnInit = function () {
    };
    WorksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-works',
            template: __webpack_require__(/*! ./works.component.html */ "./src/app/components/works/works.component.html"),
            styles: [__webpack_require__(/*! ./works.component.css */ "./src/app/components/works/works.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorksComponent);
    return WorksComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/pages/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/pages/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/get-started-form/get-started-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/get-started-form/get-started-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/get-started-form/get-started-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/get-started-form/get-started-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSdxyN9r5ovAsjrZxjUtECd_8cSlGUmZJqHHfX1lFWsTqnZKvQ/viewform?embedded=true\"\n  width=\"640\" height=\"790\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>\n"

/***/ }),

/***/ "./src/app/pages/get-started-form/get-started-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/get-started-form/get-started-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: GetStartedFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedFormComponent", function() { return GetStartedFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GetStartedFormComponent = /** @class */ (function () {
    function GetStartedFormComponent() {
    }
    GetStartedFormComponent.prototype.ngOnInit = function () {
    };
    GetStartedFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-started-form',
            template: __webpack_require__(/*! ./get-started-form.component.html */ "./src/app/pages/get-started-form/get-started-form.component.html"),
            styles: [__webpack_require__(/*! ./get-started-form.component.css */ "./src/app/pages/get-started-form/get-started-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GetStartedFormComponent);
    return GetStartedFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-intro></app-intro>\n<app-about></app-about>\n<app-parallax></app-parallax>\n<app-services></app-services>\n<app-parallax2></app-parallax2>\n<app-works></app-works>\n<app-team></app-team>\n<app-email></app-email>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/project/project.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/project/project.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/project/project.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/project/project.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"http://www.onflo.io/pages/portfolio/\" target='blank';></a>\n"

/***/ }),

/***/ "./src/app/pages/project/project.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/project/project.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/pages/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/pages/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nateswift/www/Nate-Swift/dev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map