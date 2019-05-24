(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bitnyx-bitnyx-module"],{

/***/ "./src/app/bitnyx/bitnyx.module.ts":
/*!*****************************************!*\
  !*** ./src/app/bitnyx/bitnyx.module.ts ***!
  \*****************************************/
/*! exports provided: BitnyxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitnyxPageModule", function() { return BitnyxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bitnyx_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bitnyx.page */ "./src/app/bitnyx/bitnyx.page.ts");







var routes = [
    {
        path: '',
        component: _bitnyx_page__WEBPACK_IMPORTED_MODULE_6__["BitnyxPage"]
    }
];
var BitnyxPageModule = /** @class */ (function () {
    function BitnyxPageModule() {
    }
    BitnyxPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bitnyx_page__WEBPACK_IMPORTED_MODULE_6__["BitnyxPage"]]
        })
    ], BitnyxPageModule);
    return BitnyxPageModule;
}());



/***/ }),

/***/ "./src/app/bitnyx/bitnyx.page.html":
/*!*****************************************!*\
  !*** ./src/app/bitnyx/bitnyx.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Bitnyx\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- fab placed to the top end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropup\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"openBitnyx()\">\n        <ion-img src=\"/assets/bitcoin-brands.svg\" style=\"background-color:#41b883;\"></ion-img>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-card class=\"bitnyx-card\">\n    <ion-img src=\"/assets/bitnyxLogo.svg\"></ion-img>\n    <ion-card-header>\n      <!-- <ion-card-subtitle>Bitnyx is the next generation bitcoin faucet platform created by crypto-coin enthusiasts.\n      </ion-card-subtitle> -->\n      <ion-card-title>Bitnyx</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Bitcoin faucet is a reward system that dispenses rewards in the form of a satoshi for visitors to claim in exchange\n        for\n        completing a captcha.</p>\n      <ion-chip outline=\"true\" (click)=\"openBitnyxDashboard()\" class=\"ion-float-right\">\n        <ion-label>Dashboard</ion-label>\n      </ion-chip>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/bitnyx/bitnyx.page.scss":
/*!*****************************************!*\
  !*** ./src/app/bitnyx/bitnyx.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bitnyx-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n  background-color: #35495e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TdGV2ZW4vZGV2ZWxvcG1lbnQvc2FuZGJveC9icm93c2VyLWFwcC9icm93c2VyQXBwL3NyYy9hcHAvYml0bnl4L2JpdG55eC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYml0bnl4L2JpdG55eC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYml0bnl4LWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ5NWU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/bitnyx/bitnyx.page.ts":
/*!***************************************!*\
  !*** ./src/app/bitnyx/bitnyx.page.ts ***!
  \***************************************/
/*! exports provided: BitnyxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitnyxPage", function() { return BitnyxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Browser;
var BitnyxPage = /** @class */ (function () {
    function BitnyxPage() {
        Browser.addListener('browserPageLoaded', function () {
            console.log('browserPageLoaded event called');
        });
        Browser.addListener('browserFinished', function () {
            console.log('browserFinished event called');
        });
        Browser.prefetch({
            urls: [
                'https://bitnyx.com/?r=162842',
                'https://bitnyx.com/?r=162842'
            ]
        });
    }
    BitnyxPage.prototype.openBitnyx = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#41b883', url: 'https://bitnyx.com/?r=162842', windowName: '_self' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BitnyxPage.prototype.openBitnyxDashboard = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#41b883', url: 'https://bitnyx.com/?r=162842', windowName: '_self' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BitnyxPage.prototype.ngOnInit = function () {
    };
    BitnyxPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bitnyx',
            template: __webpack_require__(/*! ./bitnyx.page.html */ "./src/app/bitnyx/bitnyx.page.html"),
            styles: [__webpack_require__(/*! ./bitnyx.page.scss */ "./src/app/bitnyx/bitnyx.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BitnyxPage);
    return BitnyxPage;
}());



/***/ })

}]);
//# sourceMappingURL=bitnyx-bitnyx-module.js.map