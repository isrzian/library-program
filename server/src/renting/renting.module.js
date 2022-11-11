"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RentingModule = void 0;
var common_1 = require("@nestjs/common");
var renting_controller_1 = require("./renting.controller");
var renting_service_1 = require("./renting.service");
var typeorm_1 = require("@nestjs/typeorm");
var renting_entity_1 = require("./renting.entity");
var RentingModule = /** @class */ (function () {
    function RentingModule() {
    }
    RentingModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([renting_entity_1.RentingEntity])],
            controllers: [renting_controller_1.RentingController],
            providers: [renting_service_1.RentingService]
        })
    ], RentingModule);
    return RentingModule;
}());
exports.RentingModule = RentingModule;
