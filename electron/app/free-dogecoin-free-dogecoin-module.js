(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["free-dogecoin-free-dogecoin-module"],{

/***/ "./src/app/free-dogecoin/free-dogecoin.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/free-dogecoin/free-dogecoin.module.ts ***!
  \*******************************************************/
/*! exports provided: FreeDogecoinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeDogecoinPageModule", function() { return FreeDogecoinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _free_dogecoin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./free-dogecoin.page */ "./src/app/free-dogecoin/free-dogecoin.page.ts");







var routes = [
    {
        path: '',
        component: _free_dogecoin_page__WEBPACK_IMPORTED_MODULE_6__["FreeDogecoinPage"]
    }
];
var FreeDogecoinPageModule = /** @class */ (function () {
    function FreeDogecoinPageModule() {
    }
    FreeDogecoinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_free_dogecoin_page__WEBPACK_IMPORTED_MODULE_6__["FreeDogecoinPage"]]
        })
    ], FreeDogecoinPageModule);
    return FreeDogecoinPageModule;
}());



/***/ }),

/***/ "./src/app/free-dogecoin/free-dogecoin.page.html":
/*!*******************************************************!*\
  !*** ./src/app/free-dogecoin/free-dogecoin.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Free-Dogecoin\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- fab placed to the top end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropup\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"openFreeDogeCoin()\">\n        <ion-img src=\"/assets/dogecoin.png\"></ion-img>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-card>\n    <ion-img src=\"/assets/dogecoin.png\"></ion-img>\n    <ion-card-header>\n      <!-- <ion-card-subtitle>Bitnyx is the next generation bitcoin faucet platform created by crypto-coin enthusiasts.\n      </ion-card-subtitle> -->\n      <ion-card-title>Free-Dogecoin</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>You can earn free dogecoin every hour.</p>\n      <ion-chip outline=\"true\" (click)=\"openFreeDogeCoin()\" class=\"ion-float-right\">\n        <ion-label>Dashboard</ion-label>\n      </ion-chip>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/free-dogecoin/free-dogecoin.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/free-dogecoin/free-dogecoin.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyZWUtZG9nZWNvaW4vZnJlZS1kb2dlY29pbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/free-dogecoin/free-dogecoin.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/free-dogecoin/free-dogecoin.page.ts ***!
  \*****************************************************/
/*! exports provided: FreeDogecoinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeDogecoinPage", function() { return FreeDogecoinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Browser;
var FreeDogecoinPage = /** @class */ (function () {
    function FreeDogecoinPage() {
        Browser.addListener('browserPageLoaded', function () {
            console.log('browserPageLoaded event called');
        });
        Browser.addListener('browserFinished', function () {
            console.log('browserFinished event called');
        });
        Browser.prefetch({
            urls: [
                'https://free-dogecoin.com/?referer=28866'
            ]
        });
    }
    FreeDogecoinPage.prototype.openFreeDogeCoin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#b2942d', url: 'https://free-dogecoin.com/?referer=28866', windowName: '_self' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FreeDogecoinPage.prototype.ngOnInit = function () {
    };
    FreeDogecoinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-free-dogecoin',
            template: __webpack_require__(/*! ./free-dogecoin.page.html */ "./src/app/free-dogecoin/free-dogecoin.page.html"),
            styles: [__webpack_require__(/*! ./free-dogecoin.page.scss */ "./src/app/free-dogecoin/free-dogecoin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FreeDogecoinPage);
    return FreeDogecoinPage;
}());



/***/ })

}]);
//# sourceMappingURL=free-dogecoin-free-dogecoin-module.js.map