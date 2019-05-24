(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coinpot-coinpot-module"],{

/***/ "./src/app/coinpot/coinpot.module.ts":
/*!*******************************************!*\
  !*** ./src/app/coinpot/coinpot.module.ts ***!
  \*******************************************/
/*! exports provided: CoinpotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinpotPageModule", function() { return CoinpotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _coinpot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coinpot.page */ "./src/app/coinpot/coinpot.page.ts");







var routes = [
    {
        path: '',
        component: _coinpot_page__WEBPACK_IMPORTED_MODULE_6__["CoinpotPage"]
    }
];
var CoinpotPageModule = /** @class */ (function () {
    function CoinpotPageModule() {
    }
    CoinpotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_coinpot_page__WEBPACK_IMPORTED_MODULE_6__["CoinpotPage"]]
        })
    ], CoinpotPageModule);
    return CoinpotPageModule;
}());



/***/ }),

/***/ "./src/app/coinpot/coinpot.page.html":
/*!*******************************************!*\
  !*** ./src/app/coinpot/coinpot.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Coinpot + Faucets\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"coinpot-card\">\n    <!-- fab placed to the top end -->\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button>\n        <ion-icon name=\"arrow-dropdown\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"bottom\">\n        <ion-fab-button (click)=\"openMoonBitcoin()\">\n          <ion-img src=\"/assets/bitcoin.png\"></ion-img>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"openMoonBitcoinCash()\">\n          <ion-img src=\"/assets/bitcoinCash.png\"></ion-img>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"openMoonLitecoin()\">\n          <ion-img src=\"/assets/litecoin.png\"></ion-img>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"openMoonDash()\">\n          <ion-img src=\"/assets/dashcoin.png\"></ion-img>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"openMoonDoge()\">\n          <ion-img src=\"/assets/dogecoin.png\"></ion-img>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"openBonusBitcoin()\">\n          <ion-img src=\"/assets/bonusbitcoin.jpeg\"></ion-img>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"openBitFun()\">\n          <ion-img src=\"/assets/bitfun.png\"></ion-img>\n        </ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n    <ion-img src=\"/assets/coinpot.jpg\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle>Cryptocurrency microwallet</ion-card-subtitle>\n      <ion-card-title>Coin Pot</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Accumulate Bitcoin, Litecoin, Dogecoin, BitcoinCash and Dash.<br>\n        You can also mine all these coins by passively using your computer’s CPU at the speed you prefer.<br>\n      </p>\n      <ion-chip outline=\"true\" (click)=\"openCoinpot()\" class=\"ion-float-right\">\n      <ion-label>Dashboard</ion-label>\n      </ion-chip>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/coinpot/coinpot.page.scss":
/*!*******************************************!*\
  !*** ./src/app/coinpot/coinpot.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".coinpot-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TdGV2ZW4vZGV2ZWxvcG1lbnQvc2FuZGJveC9icm93c2VyLWFwcC9icm93c2VyQXBwL3NyYy9hcHAvY29pbnBvdC9jb2lucG90LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvaW5wb3QvY29pbnBvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29pbnBvdC1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/coinpot/coinpot.page.ts":
/*!*****************************************!*\
  !*** ./src/app/coinpot/coinpot.page.ts ***!
  \*****************************************/
/*! exports provided: CoinpotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinpotPage", function() { return CoinpotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Browser;
var CoinpotPage = /** @class */ (function () {
    function CoinpotPage() {
        Browser.addListener('browserPageLoaded', function () {
            console.log('browserPageLoaded event called');
        });
        Browser.addListener('browserFinished', function () {
            console.log('browserFinished event called');
        });
        Browser.prefetch({
            urls: [
                'https://coinpot.co/dashboard',
                'http://moonbit.co.in/?ref=dfe672222055',
                'http://moonbitcoin.cash/?ref=5E5A7D327106',
                'http://moonliteco.in/?ref=63b9c217f71d',
                'http://moondash.co.in/?ref=72B8CC9A0417',
                'http://moondoge.co.in/?ref=557cb6648e71',
                'http://bonusbitcoin.co/?ref=0CB492010A53',
                'http://bitfun.co/?ref=EDFA9E75A80E'
            ]
        });
    }
    CoinpotPage.prototype.ngOnInit = function () {
    };
    CoinpotPage.prototype.openCoinpot = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://coinpot.co/dashboard', windowName: '_self' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoinpotPage.prototype.openMoonBitcoin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#df8529', url: 'http://moonbit.co.in/?ref=dfe672222055', windowName: '_self' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoinpotPage.prototype.openMoonBitcoinCash = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#82ba48', url: 'http://moonbitcoin.cash/?ref=5E5A7D327106', windowName: '_self' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoinpotPage.prototype.openMoonLitecoin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#9f9f9f', url: 'http://moonliteco.in/?ref=63b9c217f71d', windowName: '_self' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoinpotPage.prototype.openMoonDash = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#1a6ab4', url: 'http://moondash.co.in/?ref=72B8CC9A0417', windowName: '_self' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoinpotPage.prototype.openMoonDoge = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'http://moondoge.co.in/?ref=557cb6648e71', windowName: '_self' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoinpotPage.prototype.openBonusBitcoin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#ca474e', url: 'http://bonusbitcoin.co/?ref=0CB492010A53', windowName: '_self' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoinpotPage.prototype.openBitFun = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#22509e', url: 'http://bitfun.co/?ref=EDFA9E75A80E', windowName: '_self' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoinpotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coinpot',
            template: __webpack_require__(/*! ./coinpot.page.html */ "./src/app/coinpot/coinpot.page.html"),
            styles: [__webpack_require__(/*! ./coinpot.page.scss */ "./src/app/coinpot/coinpot.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoinpotPage);
    return CoinpotPage;
}());



/***/ })

}]);
//# sourceMappingURL=coinpot-coinpot-module.js.map