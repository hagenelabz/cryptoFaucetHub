(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faucethub-faucethub-module"],{

/***/ "./src/app/faucethub/faucethub.module.ts":
/*!***********************************************!*\
  !*** ./src/app/faucethub/faucethub.module.ts ***!
  \***********************************************/
/*! exports provided: FaucethubPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaucethubPageModule", function() { return FaucethubPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _faucethub_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faucethub.page */ "./src/app/faucethub/faucethub.page.ts");







var routes = [
    {
        path: '',
        component: _faucethub_page__WEBPACK_IMPORTED_MODULE_6__["FaucethubPage"]
    }
];
var FaucethubPageModule = /** @class */ (function () {
    function FaucethubPageModule() {
    }
    FaucethubPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_faucethub_page__WEBPACK_IMPORTED_MODULE_6__["FaucethubPage"]]
        })
    ], FaucethubPageModule);
    return FaucethubPageModule;
}());



/***/ }),

/***/ "./src/app/faucethub/faucethub.page.html":
/*!***********************************************!*\
  !*** ./src/app/faucethub/faucethub.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Faucet Hub\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- fab placed to the top end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropup\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"openFaucetHubZEC()\">\n        <ion-text>ZEC</ion-text>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetHubDGB()\">\n        <ion-text>DGB</ion-text>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetHubBTX()\">\n        <ion-text>BTX</ion-text>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetHubBLK()\">\n        <ion-text>BLK</ion-text>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetHubDASH()\">\n        <ion-text>DASH</ion-text>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetHubPPC()\">\n        <ion-text>PPC</ion-text>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetHubXPM()\">\n        <ion-text>XPM</ion-text>\n      </ion-fab-button>\n    </ion-fab-list>\n    <!-- <ion-fab-list side=\"top\">\n      <ion-fab-button click()=\"openFaucetHub()\">\n        <ion-img src=\"/assets/bitcoinCashEs.png\"></ion-img>\n      </ion-fab-button>\n    </ion-fab-list> -->\n  </ion-fab>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-dropdown\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <ion-fab-button (click)=\"openFaucetHubBTC()\">\n        <!-- <ion-img src=\"/assets/esCoin.png\"></ion-img> -->\n        <ion-text>BTC</ion-text>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetHubETH()\">\n        <ion-text>ETH</ion-text>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetHubXMR()\">\n        <ion-text>XMR</ion-text>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetHubLTC()\">\n        <ion-text>LTC</ion-text>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetHubDODGE()\">\n        <ion-text>Doge</ion-text>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetHubBCH()\">\n        <ion-text>BCH</ion-text>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"openFaucetHubPOT()\">\n        <ion-text>POT</ion-text>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-card class=\"btcnewz-card\">\n    <ion-img src=\"/assets/faucethub.png\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle>FaucetHub Micropayment Platform</ion-card-subtitle>\n      <ion-card-title>Faucet Hub</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Receive instant bitcoin and other cryptocurrencies in your faucethub account and withdraw to your personal wallet with\n      VERY low fee!<br>Each button will take you to that specific faucet list.</p>\n      <ion-chip outline=\"true\" (click)=\"openFaucetHub()\" class=\"ion-float-right\">\n        <ion-label>Dashboard</ion-label>\n      </ion-chip>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/faucethub/faucethub.page.scss":
/*!***********************************************!*\
  !*** ./src/app/faucethub/faucethub.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhdWNldGh1Yi9mYXVjZXRodWIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/faucethub/faucethub.page.ts":
/*!*********************************************!*\
  !*** ./src/app/faucethub/faucethub.page.ts ***!
  \*********************************************/
/*! exports provided: FaucethubPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaucethubPage", function() { return FaucethubPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Browser;
var FaucethubPage = /** @class */ (function () {
    function FaucethubPage() {
        Browser.addListener('browserPageLoaded', function () {
            console.log('browserPageLoaded event called');
        });
        Browser.addListener('browserFinished', function () {
            console.log('browserFinished event called');
        });
        Browser.prefetch({
            urls: [
                'http://faucethub.io/r/60457612',
                'https://faucethub.io/faucets/BTC',
                'https://faucethub.io/faucets/ETH',
                'https://faucethub.io/faucets/XMR',
                'https://faucethub.io/faucets/LTC',
                'https://faucethub.io/faucets/DOGE',
                'https://faucethub.io/faucets/BCH',
                'https://faucethub.io/faucets/ZEC',
                'https://faucethub.io/faucets/DGB',
                'https://faucethub.io/faucets/BTX',
                'https://faucethub.io/faucets/BLK',
                'https://faucethub.io/faucets/DASH',
                'https://faucethub.io/faucets/PPC',
                'https://faucethub.io/faucets/XPM',
                'https://faucethub.io/faucets/POT'
            ]
        });
    }
    FaucethubPage.prototype.ngOnInit = function () {
    };
    FaucethubPage.prototype.openFaucetHub = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'http://faucethub.io/r/60457612' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage.prototype.openFaucetHubBTC = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/BTC' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage.prototype.openFaucetHubETH = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/ETH' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage.prototype.openFaucetHubXMR = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/XMR' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage.prototype.openFaucetHubLTC = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/LTC' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage.prototype.openFaucetHubDODGE = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/DOGE' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage.prototype.openFaucetHubBCH = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/BCH' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage.prototype.openFaucetHubZEC = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/ZEC' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage.prototype.openFaucetHubDGB = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/DGB' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage.prototype.openFaucetHubBTX = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/BTX' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage.prototype.openFaucetHubBLK = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/BLK' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage.prototype.openFaucetHubDASH = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/DASH' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage.prototype.openFaucetHubPPC = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/PPC' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage.prototype.openFaucetHubXPM = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/XPM' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage.prototype.openFaucetHubPOT = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#f4dc41', url: 'https://faucethub.io/faucets/POT' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FaucethubPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faucethub',
            template: __webpack_require__(/*! ./faucethub.page.html */ "./src/app/faucethub/faucethub.page.html"),
            styles: [__webpack_require__(/*! ./faucethub.page.scss */ "./src/app/faucethub/faucethub.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaucethubPage);
    return FaucethubPage;
}());



/***/ })

}]);
//# sourceMappingURL=faucethub-faucethub-module.js.map