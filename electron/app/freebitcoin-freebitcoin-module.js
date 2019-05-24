(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["freebitcoin-freebitcoin-module"],{

/***/ "./src/app/freebitcoin/freebitcoin.module.ts":
/*!***************************************************!*\
  !*** ./src/app/freebitcoin/freebitcoin.module.ts ***!
  \***************************************************/
/*! exports provided: FreebitcoinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreebitcoinPageModule", function() { return FreebitcoinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _freebitcoin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./freebitcoin.page */ "./src/app/freebitcoin/freebitcoin.page.ts");







var routes = [
    {
        path: '',
        component: _freebitcoin_page__WEBPACK_IMPORTED_MODULE_6__["FreebitcoinPage"]
    }
];
var FreebitcoinPageModule = /** @class */ (function () {
    function FreebitcoinPageModule() {
    }
    FreebitcoinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_freebitcoin_page__WEBPACK_IMPORTED_MODULE_6__["FreebitcoinPage"]]
        })
    ], FreebitcoinPageModule);
    return FreebitcoinPageModule;
}());



/***/ }),

/***/ "./src/app/freebitcoin/freebitcoin.page.html":
/*!***************************************************!*\
  !*** ./src/app/freebitcoin/freebitcoin.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <span style=\"color: green\">Free</span><span style=\"color: blue\">Bitcoin</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-img src=\"/assets/bitcoin.png\"></ion-img>\n    <ion-card-header>\n      <!-- <ion-card-subtitle>Bitnyx is the next generation bitcoin faucet platform created by crypto-coin enthusiasts.\n      </ion-card-subtitle> -->\n      <ion-card-title><span style=\"color: green\">Free</span><span style=\"color: blue\">Bitcoin</span></ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Win Free Bitcoin every hour!</p>\n      <ion-chip outline=\"true\" (click)=\"openBitcoin()\" class=\"ion-float-right\">\n        <ion-label>Dashboard</ion-label>\n      </ion-chip>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/freebitcoin/freebitcoin.page.scss":
/*!***************************************************!*\
  !*** ./src/app/freebitcoin/freebitcoin.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyZWViaXRjb2luL2ZyZWViaXRjb2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/freebitcoin/freebitcoin.page.ts":
/*!*************************************************!*\
  !*** ./src/app/freebitcoin/freebitcoin.page.ts ***!
  \*************************************************/
/*! exports provided: FreebitcoinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreebitcoinPage", function() { return FreebitcoinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Browser;
var FreebitcoinPage = /** @class */ (function () {
    function FreebitcoinPage() {
        Browser.addListener('browserPageLoaded', function () {
            console.log('browserPageLoaded event called');
        });
        Browser.addListener('browserFinished', function () {
            console.log('browserFinished event called');
        });
        Browser.prefetch({
            urls: [
                'https://freebitco.in/?r=19431894'
            ]
        });
    }
    FreebitcoinPage.prototype.openBitcoin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f79129', url: 'https://freebitco.in/?r=19431894', windowName: '_self' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FreebitcoinPage.prototype.ngOnInit = function () {
    };
    FreebitcoinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-freebitcoin',
            template: __webpack_require__(/*! ./freebitcoin.page.html */ "./src/app/freebitcoin/freebitcoin.page.html"),
            styles: [__webpack_require__(/*! ./freebitcoin.page.scss */ "./src/app/freebitcoin/freebitcoin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FreebitcoinPage);
    return FreebitcoinPage;
}());



/***/ })

}]);
//# sourceMappingURL=freebitcoin-freebitcoin-module.js.map