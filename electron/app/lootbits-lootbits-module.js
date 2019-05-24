(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lootbits-lootbits-module"],{

/***/ "./src/app/lootbits/lootbits.module.ts":
/*!*********************************************!*\
  !*** ./src/app/lootbits/lootbits.module.ts ***!
  \*********************************************/
/*! exports provided: LootbitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LootbitsPageModule", function() { return LootbitsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lootbits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lootbits.page */ "./src/app/lootbits/lootbits.page.ts");







var routes = [
    {
        path: '',
        component: _lootbits_page__WEBPACK_IMPORTED_MODULE_6__["LootbitsPage"]
    }
];
var LootbitsPageModule = /** @class */ (function () {
    function LootbitsPageModule() {
    }
    LootbitsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_lootbits_page__WEBPACK_IMPORTED_MODULE_6__["LootbitsPage"]]
        })
    ], LootbitsPageModule);
    return LootbitsPageModule;
}());



/***/ }),

/***/ "./src/app/lootbits/lootbits.page.html":
/*!*********************************************!*\
  !*** ./src/app/lootbits/lootbits.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Lootbits\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"lootbits-card\">\n    <ion-img src=\"/assets/lootbits.png\"></ion-img>\n    <ion-card-header>\n      <!-- <ion-card-subtitle>Bitnyx is the next generation bitcoin faucet platform created by crypto-coin enthusiasts.\n      </ion-card-subtitle> -->\n      <ion-card-title>Lootbiits</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Open boxes, win Bitcoins</p>\n      <ion-chip outline=\"true\" (click)=\"openLootbits()\" class=\"ion-float-right\">\n        <ion-label>Lootbits</ion-label>\n      </ion-chip>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/lootbits/lootbits.page.scss":
/*!*********************************************!*\
  !*** ./src/app/lootbits/lootbits.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lootbits-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.lootbits-card {\n  background: linear-gradient(to right, #4e4376, #2b5876); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TdGV2ZW4vZGV2ZWxvcG1lbnQvc2FuZGJveC9icm93c2VyLWFwcC9icm93c2VyQXBwL3NyYy9hcHAvbG9vdGJpdHMvbG9vdGJpdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLHVEQUFxRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9vdGJpdHMvbG9vdGJpdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvb3RiaXRzLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubG9vdGJpdHMtY2FyZHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCM0ZTQzNzYsIzJiNTg3Nik7XG59Il19 */"

/***/ }),

/***/ "./src/app/lootbits/lootbits.page.ts":
/*!*******************************************!*\
  !*** ./src/app/lootbits/lootbits.page.ts ***!
  \*******************************************/
/*! exports provided: LootbitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LootbitsPage", function() { return LootbitsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Browser;
var LootbitsPage = /** @class */ (function () {
    function LootbitsPage() {
        Browser.addListener('browserPageLoaded', function () {
            console.log('browserPageLoaded event called');
        });
        Browser.addListener('browserFinished', function () {
            console.log('browserFinished event called');
        });
        Browser.prefetch({
            urls: [
                'https://lootbits.io/?invite=885761'
            ]
        });
    }
    LootbitsPage.prototype.openLootbits = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Browser.open({ toolbarColor: '#474875', url: 'https://lootbits.io/?invite=885761' })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LootbitsPage.prototype.ngOnInit = function () {
    };
    LootbitsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lootbits',
            template: __webpack_require__(/*! ./lootbits.page.html */ "./src/app/lootbits/lootbits.page.html"),
            styles: [__webpack_require__(/*! ./lootbits.page.scss */ "./src/app/lootbits/lootbits.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LootbitsPage);
    return LootbitsPage;
}());



/***/ })

}]);
//# sourceMappingURL=lootbits-lootbits-module.js.map