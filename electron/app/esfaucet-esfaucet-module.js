(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esfaucet-esfaucet-module"],{

/***/ "./src/app/esfaucet/esfaucet.module.ts":
/*!*********************************************!*\
  !*** ./src/app/esfaucet/esfaucet.module.ts ***!
  \*********************************************/
/*! exports provided: EsfaucetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsfaucetPageModule", function() { return EsfaucetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esfaucet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esfaucet.page */ "./src/app/esfaucet/esfaucet.page.ts");







var routes = [
    {
        path: '',
        component: _esfaucet_page__WEBPACK_IMPORTED_MODULE_6__["EsfaucetPage"]
    }
];
var EsfaucetPageModule = /** @class */ (function () {
    function EsfaucetPageModule() {
    }
    EsfaucetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_esfaucet_page__WEBPACK_IMPORTED_MODULE_6__["EsfaucetPage"]]
        })
    ], EsfaucetPageModule);
    return EsfaucetPageModule;
}());



/***/ }),

/***/ "./src/app/esfaucet/esfaucet.page.html":
/*!*********************************************!*\
  !*** ./src/app/esfaucet/esfaucet.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      ES Faucet / BTCNewz\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <!-- fab placed to the top end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropup\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"openFaucetBitcoinCash()\">\n        <ion-img src=\"/assets/bitcoinCashEs.png\"></ion-img>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetEthereumClassic()\">\n        <ion-img src=\"/assets/ethereumClassic.png\"></ion-img>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucet0x()\">\n        <ion-img src=\"/assets/0x.png\"></ion-img>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetBasicAttentionToken()\">\n        <ion-img src=\"/assets/basicAttentionToken.png\"></ion-img>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetStellar()\">\n        <ion-img src=\"/assets/stellar.png\"></ion-img>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetDigibyte()\">\n        <ion-img src=\"/assets/digibyte.png\"></ion-img>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropdown\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <ion-fab-button (click)=\"openFaucetEsCoin()\">\n        <ion-img src=\"/assets/esCoin.png\"></ion-img>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetBitcoin()\">\n        <ion-img src=\"/assets/bitcoin.png\"></ion-img>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetEthereum()\">\n        <ion-img src=\"/assets/Ethereum.png\"></ion-img>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetLitecoin()\">\n        <ion-img src=\"/assets/litecoinES.png\"></ion-img>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetRipple()\">\n        <ion-img src=\"/assets/ripple.png\"></ion-img>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetDogecoin()\">\n        <ion-img src=\"/assets/dogecoinEs.png\"></ion-img>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-card class=\"btcnewz-card\">\n    <ion-img src=\"/assets/esfaucet.gif\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle>Your source to cryptocurrency!</ion-card-subtitle>\n      <ion-card-title>ES Faucet / BTCNewz</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>ESFaucet is a Multi-Crypto faucet in which you decide how often to claim them.\n      </p>\n      <ion-chip outline=\"true\" (click)=\"openBtcNewz()\" class=\"ion-float-right\">\n        <ion-label>Dashboard</ion-label>\n      </ion-chip>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/esfaucet/esfaucet.page.scss":
/*!*********************************************!*\
  !*** ./src/app/esfaucet/esfaucet.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btcnewz-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TdGV2ZW4vZGV2ZWxvcG1lbnQvc2FuZGJveC9icm93c2VyLWFwcC9icm93c2VyQXBwL3NyYy9hcHAvZXNmYXVjZXQvZXNmYXVjZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZXNmYXVjZXQvZXNmYXVjZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNhcmR7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4vLyAgIH1cbi5idGNuZXd6LWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/esfaucet/esfaucet.page.ts":
/*!*******************************************!*\
  !*** ./src/app/esfaucet/esfaucet.page.ts ***!
  \*******************************************/
/*! exports provided: EsfaucetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsfaucetPage", function() { return EsfaucetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Browser;
var EsfaucetPage = /** @class */ (function () {
    function EsfaucetPage() {
        Browser.addListener('browserPageLoaded', function () {
            console.log('browserPageLoaded event called');
        });
        Browser.addListener('browserFinished', function () {
            console.log('browserFinished event called');
        });
        Browser.prefetch({
            urls: [
                'https://es.btcnewz.com/auth/register?ref=4491875fc8844807e7a7',
                'https://es.btcnewz.com/user/faucet/2',
                'https://es.btcnewz.com/user/faucet/3',
                'https://es.btcnewz.com/user/faucet/4',
                'https://es.btcnewz.com/user/faucet/6',
                'https://es.btcnewz.com/user/faucet/7',
                'https://es.btcnewz.com/user/faucet/8',
                'https://es.btcnewz.com/user/faucet/11',
                'https://es.btcnewz.com/user/faucet/12',
                'https://es.btcnewz.com/user/faucet/13',
                'https://es.btcnewz.com/user/faucet/15',
                'https://es.btcnewz.com/user/faucet/16',
                'https://es.btcnewz.com/user/faucet/18'
            ]
        });
    }
    EsfaucetPage.prototype.ngOnInit = function () {
    };
    EsfaucetPage.prototype.openBtcNewz = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://es.btcnewz.com/auth/register?ref=4491875fc8844807e7a7' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsfaucetPage.prototype.openFaucetEsCoin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#d6393a', url: 'https://es.btcnewz.com/user/faucet/2' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsfaucetPage.prototype.openFaucetBitcoin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f78e24', url: 'https://es.btcnewz.com/user/faucet/3' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsfaucetPage.prototype.openFaucetEthereum = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#141414', url: 'https://es.btcnewz.com/user/faucet/4' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsfaucetPage.prototype.openFaucetLitecoin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#2d5392', url: 'https://es.btcnewz.com/user/faucet/6' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsfaucetPage.prototype.openFaucetRipple = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f16565', url: 'https://es.btcnewz.com/user/faucet/7' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsfaucetPage.prototype.openFaucetStellar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f16565', url: 'https://es.btcnewz.com/user/faucet/8' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsfaucetPage.prototype.openFaucetDigibyte = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#042148', url: 'https://es.btcnewz.com/user/faucet/11' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsfaucetPage.prototype.openFaucetDogecoin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#b2942d', url: 'https://es.btcnewz.com/user/faucet/12' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsfaucetPage.prototype.openFaucetBasicAttentionToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#941c58', url: 'https://es.btcnewz.com/user/faucet/13' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsfaucetPage.prototype.openFaucetBitcoinCash = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#ee7f16', url: 'https://es.btcnewz.com/user/faucet/15' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsfaucetPage.prototype.openFaucetEthereumClassic = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#02943a', url: 'https://es.btcnewz.com/user/faucet/16' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsfaucetPage.prototype.openFaucet0x = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#1b1f23', url: 'https://es.btcnewz.com/user/faucet/18' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EsfaucetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-esfaucet',
            template: __webpack_require__(/*! ./esfaucet.page.html */ "./src/app/esfaucet/esfaucet.page.html"),
            styles: [__webpack_require__(/*! ./esfaucet.page.scss */ "./src/app/esfaucet/esfaucet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EsfaucetPage);
    return EsfaucetPage;
}());



/***/ })

}]);
//# sourceMappingURL=esfaucet-esfaucet-module.js.map