"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReaderModule = void 0;
var common_1 = require("@nestjs/common");
var reader_controller_1 = require("./reader.controller");
var reader_service_1 = require("./reader.service");
var typeorm_1 = require("@nestjs/typeorm");
var reader_entity_1 = require("./reader.entity");
var ReaderModule = /** @class */ (function () {
    function ReaderModule() {
    }
    ReaderModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([reader_entity_1.ReaderEntity])],
            controllers: [reader_controller_1.ReaderController],
            providers: [reader_service_1.ReaderService]
        })
    ], ReaderModule);
    return ReaderModule;
}());
exports.ReaderModule = ReaderModule;
