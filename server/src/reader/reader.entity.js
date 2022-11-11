"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReaderEntity = void 0;
var typeorm_1 = require("typeorm");
var renting_entity_1 = require("../renting/renting.entity");
var ReaderEntity = /** @class */ (function () {
    function ReaderEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ReaderEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], ReaderEntity.prototype, "surname");
    __decorate([
        (0, typeorm_1.Column)()
    ], ReaderEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)()
    ], ReaderEntity.prototype, "patronymic");
    __decorate([
        (0, typeorm_1.Column)()
    ], ReaderEntity.prototype, "address");
    __decorate([
        (0, typeorm_1.Column)()
    ], ReaderEntity.prototype, "phone");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return renting_entity_1.RentingEntity; }, function (rent) { return rent.reader; })
    ], ReaderEntity.prototype, "rents");
    ReaderEntity = __decorate([
        (0, typeorm_1.Entity)('readers')
    ], ReaderEntity);
    return ReaderEntity;
}());
exports.ReaderEntity = ReaderEntity;
