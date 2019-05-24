(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["freedogecoin-freedogecoin-module"],{

/***/ "./src/app/freedogecoin/freedogecoin.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/freedogecoin/freedogecoin.module.ts ***!
  \*****************************************************/
/*! exports provided: FreedogecoinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreedogecoinPageModule", function() { return FreedogecoinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _freedogecoin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./freedogecoin.page */ "./src/app/freedogecoin/freedogecoin.page.ts");







var routes = [
    {
        path: '',
        component: _freedogecoin_page__WEBPACK_IMPORTED_MODULE_6__["FreedogecoinPage"]
    }
];
var FreedogecoinPageModule = /** @class */ (function () {
    function FreedogecoinPageModule() {
    }
    FreedogecoinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_freedogecoin_page__WEBPACK_IMPORTED_MODULE_6__["FreedogecoinPage"]]
        })
    ], FreedogecoinPageModule);
    return FreedogecoinPageModule;
}());



/***/ }),

/***/ "./src/app/freedogecoin/freedogecoin.page.html":
/*!*****************************************************!*\
  !*** ./src/app/freedogecoin/freedogecoin.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <span style=\"color: green\">Free</span><span style=\"color: blue\">Dogecoin</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-img src=\"/assets/dogecoin.png\"></ion-img>\n    <ion-card-header>\n      <!-- <ion-card-subtitle>Bitnyx is the next generation bitcoin faucet platform created by crypto-coin enthusiasts.\n      </ion-card-subtitle> -->\n      <ion-card-title><span style=\"color: green\">Free</span><span style=\"color: blue\">Dogecoin</span></ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Win Free Dogecoin every hour!</p>\n      <ion-chip outline=\"true\" (click)=\"openFreeDogeCoin()\" class=\"ion-float-right\">\n        <ion-label>Dashboard</ion-label>\n      </ion-chip>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/freedogecoin/freedogecoin.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/freedogecoin/freedogecoin.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyZWVkb2dlY29pbi9mcmVlZG9nZWNvaW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/freedogecoin/freedogecoin.page.ts":
/*!***************************************************!*\
  !*** ./src/app/freedogecoin/freedogecoin.page.ts ***!
  \***************************************************/
/*! exports provided: FreedogecoinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreedogecoinPage", function() { return FreedogecoinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Browser;
var FreedogecoinPage = /** @class */ (function () {
    function FreedogecoinPage() {
        Browser.addListener('browserPageLoaded', function () {
            console.log('browserPageLoaded event called');
        });
        Browser.addListener('browserFinished', function () {
            console.log('browserFinished event called');
        });
        Browser.prefetch({
            urls: [
                'http://freedoge.co.in/?r=4096609'
            ]
        });
    }
    FreedogecoinPage.prototype.openFreeDogeCoin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#b2942d', url: 'http://freedoge.co.in/?r=4096609', windowName: '_self' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FreedogecoinPage.prototype.ngOnInit = function () {
    };
    FreedogecoinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-freedogecoin',
            template: __webpack_require__(/*! ./freedogecoin.page.html */ "./src/app/freedogecoin/freedogecoin.page.html"),
            styles: [__webpack_require__(/*! ./freedogecoin.page.scss */ "./src/app/freedogecoin/freedogecoin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FreedogecoinPage);
    return FreedogecoinPage;
}());



/***/ })

}]);
//# sourceMappingURL=freedogecoin-freedogecoin-module.js.map