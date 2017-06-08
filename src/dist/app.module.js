"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var loginCarousel_component_1 = require("./Login/loginCarousel.component");
var login_component_1 = require("./Login/login.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [ng_bootstrap_1.NgbModule.forRoot(), platform_browser_1.BrowserModule, app_routes_1.App_Route_Module],
        declarations: [app_component_1.AppComponent, loginCarousel_component_1.LoginCarousel, login_component_1.LoginAutorization],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map