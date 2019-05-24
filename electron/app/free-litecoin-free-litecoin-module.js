(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["free-litecoin-free-litecoin-module"],{

/***/ "./src/app/free-litecoin/free-litecoin.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/free-litecoin/free-litecoin.module.ts ***!
  \*******************************************************/
/*! exports provided: FreeLitecoinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeLitecoinPageModule", function() { return FreeLitecoinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _free_litecoin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./free-litecoin.page */ "./src/app/free-litecoin/free-litecoin.page.ts");







var routes = [
    {
        path: '',
        component: _free_litecoin_page__WEBPACK_IMPORTED_MODULE_6__["FreeLitecoinPage"]
    }
];
var FreeLitecoinPageModule = /** @class */ (function () {
    function FreeLitecoinPageModule() {
    }
    FreeLitecoinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_free_litecoin_page__WEBPACK_IMPORTED_MODULE_6__["FreeLitecoinPage"]]
        })
    ], FreeLitecoinPageModule);
    return FreeLitecoinPageModule;
}());



/***/ }),

/***/ "./src/app/free-litecoin/free-litecoin.page.html":
/*!*******************************************************!*\
  !*** ./src/app/free-litecoin/free-litecoin.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Free-Litecoin\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-img src=\"/assets/litecoin.png\"></ion-img>\n    <ion-card-header>\n      <!-- <ion-card-subtitle>Bitnyx is the next generation bitcoin faucet platform created by crypto-coin enthusiasts.\n      </ion-card-subtitle> -->\n      <ion-card-title>Free-Litecoin</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Every hour you can have free litecoin</p>\n      <ion-chip outline=\"true\" (click)=\"openLitecoin()\" class=\"ion-float-right\">\n        <ion-label>Dashboard</ion-label>\n      </ion-chip>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/free-litecoin/free-litecoin.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/free-litecoin/free-litecoin.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyZWUtbGl0ZWNvaW4vZnJlZS1saXRlY29pbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/free-litecoin/free-litecoin.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/free-litecoin/free-litecoin.page.ts ***!
  \*****************************************************/
/*! exports provided: FreeLitecoinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeLitecoinPage", function() { return FreeLitecoinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Browser;
var FreeLitecoinPage = /** @class */ (function () {
    function FreeLitecoinPage() {
        Browser.addListener('browserPageLoaded', function () {
            console.log('browserPageLoaded event called');
        });
        Browser.addListener('browserFinished', function () {
            console.log('browserFinished event called');
        });
        Browser.prefetch({
            urls: [
                'https://free-litecoin.com/login?referer=316665'
            ]
        });
    }
    FreeLitecoinPage.prototype.openLitecoin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#2d5392', url: 'https://free-litecoin.com/login?referer=316665', windowName: '_self' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FreeLitecoinPage.prototype.ngOnInit = function () {
    };
    FreeLitecoinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-free-litecoin',
            template: __webpack_require__(/*! ./free-litecoin.page.html */ "./src/app/free-litecoin/free-litecoin.page.html"),
            styles: [__webpack_require__(/*! ./free-litecoin.page.scss */ "./src/app/free-litecoin/free-litecoin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FreeLitecoinPage);
    return FreeLitecoinPage;
}());



/***/ })

}]);
//# sourceMappingURL=free-litecoin-free-litecoin-module.js.map